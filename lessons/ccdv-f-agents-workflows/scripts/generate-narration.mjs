#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";

const backendRoot = process.env.JR_ACADEMY_BACKEND_ROOT || path.resolve("../../../..", "jr-academy");
const requireFromBackend = createRequire(path.join(backendRoot, "package.json"));
const { MongoClient } = requireFromBackend("mongodb");

const scriptPath = path.resolve("narration/script.json");
const script = JSON.parse(readFileSync(scriptPath, "utf8"));
const outputRoot = path.resolve("public");
const force = process.argv.includes("--force");

const pronunciationRules = [
  [/CCDV-F/g, "C C D V F"],
  [/CCAR-F/g, "C C A R F"],
  [/CCAO-F/g, "C C A O F"],
  [/CCAR-P/g, "C C A R P"],
  [/CPN/g, "C P N"],
  [/NDA/g, "N D A"],
  [/MCPs?/g, "M C P"],
  [/API/g, "A P I"],
  [/SDK/g, "S D K"],
  [/REST/g, "rest"],
  [/JSON/g, "J S O N"],
  [/OnVUE/g, "On View"],
  [/Pearson VUE/g, "Pearson View"],
  [/tool_use/g, "tool use"],
  [/tool_result/g, "tool result"],
  [/stop_reason/g, "stop reason"],
  [/output_config\.format/g, "output config format"],
  [/5xx/g, "five X X"],
  [/Few-shot/g, "few shot"],
  [/Subagents?/g, "sub agent"],
  [/Agent SDK/g, "agent S D K"],
  [/Tool Runner/g, "tool runner"],
  [/PreToolUse/g, "pre tool use"],
  [/PostToolUse/g, "post tool use"],
  [/max_turns/g, "max turns"],
  [/LangGraph/g, "Lang Graph"],
  [/PydanticAI/g, "Pydantic A I"],
  [/Strands/g, "strands"]
];

function textForSpeech(text) {
  return pronunciationRules.reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), text);
}

function probeDuration(filePath) {
  return Number(execFileSync(
    "ffprobe",
    ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", filePath],
    { encoding: "utf8" }
  ).trim());
}

async function synthesize(apiKey, segment) {
  const outputPath = path.join(outputRoot, segment.audioPath);
  const rawPath = `${outputPath}.raw.mp3`;
  mkdirSync(path.dirname(outputPath), { recursive: true });

  if (!force && existsSync(outputPath)) {
    const durationSeconds = probeDuration(outputPath);
    console.log(`skip ${segment.id} (${durationSeconds.toFixed(2)}s)`);
    return Math.round(durationSeconds * 1000);
  }

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${script.voice.voiceId}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        text: textForSpeech(segment.text),
        model_id: script.voice.model,
        voice_settings: {
          stability: script.voice.stability,
          similarity_boost: script.voice.similarityBoost
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`ElevenLabs error for ${segment.id} (${response.status}): ${await response.text()}`);
  }

  try {
    writeFileSync(rawPath, Buffer.from(await response.arrayBuffer()));
    execFileSync(
      "ffmpeg",
      [
        "-y", "-i", rawPath,
        "-af", `silenceremove=stop_periods=-1:stop_duration=0.12:stop_threshold=-40dB,atempo=${script.voice.tempo}`,
        "-ar", "44100", "-b:a", "128k", outputPath
      ],
      { stdio: "ignore" }
    );
  } finally {
    try { unlinkSync(rawPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
  }

  const durationSeconds = probeDuration(outputPath);
  console.log(`done ${segment.id} (${durationSeconds.toFixed(2)}s)`);
  return Math.round(durationSeconds * 1000);
}

const env = readFileSync(path.join(backendRoot, ".env"), "utf8");
const mongoUri = env.match(/^MONGO_URI=(.+)$/m)?.[1]?.trim();
if (!mongoUri) throw new Error(`MONGO_URI is missing from ${path.join(backendRoot, ".env")}`);

const client = new MongoClient(mongoUri);
await client.connect();

try {
  const settings = await client.db().collection("systemsettings").findOne({ key: "ai_settings" });
  const apiKey = settings?.aiSettings?.providers?.elevenlabs?.apiKey;
  if (!apiKey) throw new Error("ElevenLabs apiKey is not configured in admin AI Settings");

  let totalDurationMs = 0;
  let segmentCount = 0;
  for (const section of script.sections) {
    console.log(`\n[${section.title}]`);
    for (const segment of section.segments) {
      segment.durationMs = await synthesize(apiKey, segment);
      totalDurationMs += segment.durationMs;
      segmentCount += 1;
    }
  }

  script.voiceStatus = "generated-local-review";
  script.generatedAt = new Date().toISOString();
  script.summary = {
    sectionCount: script.sections.length,
    segmentCount,
    totalDurationMs
  };
  writeFileSync(scriptPath, `${JSON.stringify(script, null, 2)}\n`);
  console.log(`\nAmy full chapter ready: ${script.sections.length} sections, ${segmentCount} segments, ${(totalDurationMs / 60000).toFixed(2)} min`);
} finally {
  await client.close();
}
