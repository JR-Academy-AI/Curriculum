#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const script = JSON.parse(readFileSync(path.resolve("narration/script.json"), "utf8"));
const failures = [];

const expectedVoice = {
  name: "Amy",
  voiceId: "bhJUNIXWQQ94l8eI2VUf",
  model: "eleven_multilingual_v2",
  seed: 20260720
};

for (const [key, expected] of Object.entries(expectedVoice)) {
  if (script.voice?.[key] !== expected) {
    failures.push(`voice.${key} must be ${expected}; received ${script.voice?.[key]}`);
  }
}

if (!(script.voice?.speed > 0 && script.voice.speed <= 0.95)) {
  failures.push(`voice.speed must stay at or below 0.95; received ${script.voice?.speed}`);
}
if (!(script.voice?.stability >= 0.8)) {
  failures.push(`voice.stability must stay at or above 0.8; received ${script.voice?.stability}`);
}
if (script.generation?.postProcessing !== "none-preserve-natural-pauses") {
  failures.push("generation.postProcessing must preserve natural pauses");
}

const segments = script.sections.flatMap((section) => section.segments);
let totalDurationSeconds = 0;
let totalSpeechUnits = 0;

for (const segment of segments) {
  const audioPath = path.resolve("public", segment.audioPath);
  if (!existsSync(audioPath)) {
    failures.push(`${segment.id}: audio file is missing`);
    continue;
  }

  const probe = JSON.parse(execFileSync(
    "ffprobe",
    [
      "-v", "error",
      "-show_entries", "format=duration:stream=codec_name,sample_rate,channels",
      "-of", "json",
      audioPath
    ],
    { encoding: "utf8" }
  ));
  const stream = probe.streams?.[0];
  const durationSeconds = Number(probe.format?.duration);
  const declaredDurationSeconds = segment.durationMs / 1000;

  if (!Number.isFinite(durationSeconds)) failures.push(`${segment.id}: ffprobe duration is invalid`);
  if (Math.abs(durationSeconds - declaredDurationSeconds) > 0.08) {
    failures.push(`${segment.id}: declared duration differs from MP3 by more than 80ms`);
  }
  if (durationSeconds < 15 || durationSeconds > 35) {
    failures.push(`${segment.id}: duration ${durationSeconds.toFixed(2)}s is outside the 15–35s classroom pace window`);
  }
  if (stream?.codec_name !== "mp3" || stream?.sample_rate !== "44100" || stream?.channels !== 1) {
    failures.push(`${segment.id}: expected mono MP3 at 44.1kHz`);
  }

  totalDurationSeconds += durationSeconds;
  totalSpeechUnits += [...segment.text.replace(/[^\p{L}\p{N}]/gu, "")].length;
}

const aggregateUnitsPerSecond = totalSpeechUnits / totalDurationSeconds;
if (!(aggregateUnitsPerSecond <= 5.2)) {
  failures.push(`aggregate narration pace ${aggregateUnitsPerSecond.toFixed(2)} units/s exceeds 5.20`);
}
if (segments.length !== 41 || script.summary?.segmentCount !== 41) {
  failures.push(`expected 41 narration segments; received ${segments.length}`);
}

if (failures.length) {
  throw new Error(`Narration QA failed:\n- ${failures.join("\n- ")}`);
}

console.log(
  `Narration QA passed: ${segments.length} Amy segments, ` +
  `${(totalDurationSeconds / 60).toFixed(2)} min, ${aggregateUnitsPerSecond.toFixed(2)} units/s`
);
