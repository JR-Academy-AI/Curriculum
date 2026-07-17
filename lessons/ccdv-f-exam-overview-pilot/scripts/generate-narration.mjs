#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";

const backendRoot = process.env.JR_ACADEMY_BACKEND_ROOT || path.resolve("../../../..", "jr-academy");
const requireFromBackend = createRequire(path.join(backendRoot, "package.json"));
const { MongoClient } = requireFromBackend("mongodb");

const VOICE_ID = "bhJUNIXWQQ94l8eI2VUf"; // JR Academy approved Amy voice
const outputPath = path.resolve("public/audio/claude-code-weight-reveal.mp3");
const rawPath = `${outputPath}.raw.mp3`;
const text = "[confident] 一个叫 Developer 的考试，Claude Code 只占百分之三点一。";

mkdirSync(path.dirname(outputPath), { recursive: true });
const env = readFileSync(path.join(backendRoot, ".env"), "utf8");
const mongoUri = env.match(/^MONGO_URI=(.+)$/m)?.[1]?.trim();
if (!mongoUri) throw new Error(`MONGO_URI is missing from ${path.join(backendRoot, ".env")}`);

const client = new MongoClient(mongoUri);
await client.connect();

try {
  const settings = await client.db().collection("systemsettings").findOne({ key: "ai_settings" });
  const apiKey = settings?.aiSettings?.providers?.elevenlabs?.apiKey;
  if (!apiKey) throw new Error("ElevenLabs apiKey is not configured in admin AI Settings");

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        text,
        model_id: "eleven_v3",
        voice_settings: { stability: 0.56, similarity_boost: 0.78 }
      })
    }
  );

  if (!response.ok) throw new Error(`ElevenLabs error (${response.status}): ${await response.text()}`);
  writeFileSync(rawPath, Buffer.from(await response.arrayBuffer()));
  execFileSync(
    "ffmpeg",
    [
      "-y", "-i", rawPath,
      "-af", "silenceremove=stop_periods=-1:stop_duration=0.12:stop_threshold=-40dB,atempo=1.12",
      "-b:a", "128k", outputPath
    ],
    { stdio: "ignore" }
  );
  const durationSeconds = Number(execFileSync(
    "ffprobe",
    ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", outputPath],
    { encoding: "utf8" }
  ).trim());
  console.log(JSON.stringify({ outputPath, voice: "Amy", model: "eleven_v3", durationSeconds }, null, 2));
} finally {
  await client.close();
  try { unlinkSync(rawPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
}
