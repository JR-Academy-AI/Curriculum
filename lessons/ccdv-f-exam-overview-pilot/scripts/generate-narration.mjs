#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const backendRoot = process.env.JR_ACADEMY_BACKEND_ROOT || path.resolve("../../../..", "jr-academy");
const requireFromBackend = createRequire(path.join(backendRoot, "package.json"));
const { MongoClient } = requireFromBackend("mongodb");

const scriptPath = path.resolve("narration/script.json");
const script = JSON.parse(readFileSync(scriptPath, "utf8"));
const outputRoot = path.resolve("public");
const force = process.argv.includes("--force");
const onlyArgument = process.argv.find((argument) => argument.startsWith("--only="));
const onlyIds = onlyArgument
  ? new Set(onlyArgument.slice("--only=".length).split(",").map((value) => value.trim()).filter(Boolean))
  : null;

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
  [/Subagent/g, "sub agent"]
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

async function synthesize(apiKey, segment, context) {
  const outputPath = path.join(outputRoot, segment.audioPath);
  mkdirSync(path.dirname(outputPath), { recursive: true });

  const shouldGenerate = force && (!onlyIds || onlyIds.has(segment.id));
  if (!shouldGenerate && existsSync(outputPath)) {
    const durationSeconds = probeDuration(outputPath);
    console.log(`skip ${segment.id} (${durationSeconds.toFixed(2)}s)`);
    return Math.round(durationSeconds * 1000);
  }

  if (!shouldGenerate && onlyIds) {
    throw new Error(`Cannot review ${segment.id}: ${outputPath} does not exist`);
  }

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${script.voice.voiceId}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        text: textForSpeech(segment.text),
        model_id: script.voice.model,
        seed: script.voice.seed,
        previous_text: context.previousText || undefined,
        next_text: context.nextText || undefined,
        voice_settings: {
          stability: script.voice.stability,
          similarity_boost: script.voice.similarityBoost,
          style: script.voice.style,
          use_speaker_boost: script.voice.useSpeakerBoost,
          speed: script.voice.speed
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`ElevenLabs error for ${segment.id} (${response.status}): ${await response.text()}`);
  }

  // Keep the provider's natural pauses intact. Removing every silence and then
  // applying ffmpeg atempo made the previous classroom sound roughly 1.5x and
  // amplified speaker drift between independently generated segments.
  writeFileSync(outputPath, Buffer.from(await response.arrayBuffer()));

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

  const orderedSegments = script.sections.flatMap((section) => section.segments);
  const contextWindow = script.voice.contextSegments;
  const contexts = new Map(orderedSegments.map((segment, index) => [
    segment.id,
    {
      previousText: orderedSegments
        .slice(Math.max(0, index - contextWindow), index)
        .map((candidate) => textForSpeech(candidate.text))
        .join(" "),
      nextText: orderedSegments
        .slice(index + 1, index + 1 + contextWindow)
        .map((candidate) => textForSpeech(candidate.text))
        .join(" ")
    }
  ]));

  let totalDurationMs = 0;
  let segmentCount = 0;
  for (const section of script.sections) {
    console.log(`\n[${section.title}]`);
    for (const segment of section.segments) {
      segment.durationMs = await synthesize(apiKey, segment, contexts.get(segment.id));
      totalDurationMs += segment.durationMs;
      segmentCount += 1;
    }
  }

  script.voiceStatus = "generated-local-review";
  script.generatedAt = new Date().toISOString();
  script.generation = {
    providerSpeed: script.voice.speed,
    postProcessing: "none-preserve-natural-pauses",
    deterministicSeed: script.voice.seed,
    contextSegments: script.voice.contextSegments
  };
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
