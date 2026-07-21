#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("dist/manifest.json", "utf8"));
const narration = JSON.parse(readFileSync("narration/script.json", "utf8"));
const expectedSegments = narration.sections.flatMap(section => section.segments);
const releaseBaseUrl = new URL("./", manifest.entryUrl);
const expectedVoice = { provider: "ElevenLabs", name: "Amy", voiceId: "bhJUNIXWQQ94l8eI2VUf", model: "eleven_multilingual_v2", stability: 0.82, similarityBoost: 0.85, style: 0, useSpeakerBoost: true, speed: 0.92, seed: 20260721, contextSegments: 1 };

if (manifest.schemaVersion !== 1 || manifest.bridgeVersion !== 1) throw new Error("Unsupported Classroom contract");
if (manifest.deckId !== "ccdv-f-exam-prep") throw new Error(`Unexpected deckId: ${manifest.deckId}`);
if (manifest.slideCount !== narration.sections.length || manifest.slides.length !== narration.sections.length) throw new Error("Slide count does not match narration sections");
if (!/^[a-f0-9]{7,40}$/i.test(manifest.sourceCommit)) throw new Error("sourceCommit must be a git commit");
if (!/^[a-f0-9]{64}$/i.test(manifest.checksum)) throw new Error("checksum must be SHA-256");
if (!manifest.entryUrl.endsWith(manifest.entryPath)) throw new Error("entryUrl must end with entryPath");
for (const [key, value] of Object.entries(expectedVoice)) if (narration.voice?.[key] !== value) throw new Error(`Unexpected Amy voice setting ${key}: ${narration.voice?.[key]}`);
if (narration.generation?.postProcessing !== "none-preserve-natural-pauses" || narration.generation?.providerSpeed !== 0.92 || narration.generation?.deterministicSeed !== 20260721 || narration.generation?.contextSegments !== 1) throw new Error("Narration generation recipe is not the approved stable Amy configuration");

const actions = manifest.slides.flatMap((slide, index) => {
  if (slide.index !== index || !slide.id || !slide.title || !slide.actions?.length) throw new Error(`Slide ${index + 1} is incomplete`);
  const expectedThumbnail = `thumbnails/${String(index + 1).padStart(2, "0")}-${slide.id}.png`;
  if (slide.thumbnailUrl !== new URL(expectedThumbnail, releaseBaseUrl).href) throw new Error(`Slide ${index + 1} thumbnailUrl must stay in the same immutable release`);
  if (!existsSync(`public/${expectedThumbnail}`) || !existsSync(`dist/${expectedThumbnail}`)) throw new Error(`Slide ${index + 1} thumbnail file is missing: ${expectedThumbnail}`);
  return slide.actions;
});
if (actions.length !== expectedSegments.length) throw new Error("Narration action count mismatch");
for (const [index, action] of actions.entries()) {
  if (action.type !== "speech" || !action.text || !action.audioUrl?.endsWith(".mp3") || action.audioDurationMs <= 0 || action.audioStatus !== "generated-local-review") throw new Error(`Narration contract is incomplete for ${action.id}`);
  const segment = expectedSegments[index];
  if (action.id !== segment.id || action.audioDurationMs !== segment.durationMs) throw new Error(`Narration order or duration mismatch for ${action.id}`);
  const audioPath = `public/${segment.audioPath}`;
  if (!existsSync(audioPath)) throw new Error(`Narration file is missing: ${audioPath}`);
  const probe = JSON.parse(execFileSync("ffprobe", ["-v", "error", "-show_entries", "stream=codec_name,sample_rate,channels:format=duration", "-of", "json", audioPath], { encoding: "utf8" }));
  const stream = probe.streams?.[0];
  const durationMs = Math.round(Number(probe.format?.duration) * 1000);
  if (stream?.codec_name !== "mp3" || stream?.sample_rate !== "44100" || stream?.channels !== 1 || Math.abs(durationMs - segment.durationMs) > 100) throw new Error(`Narration media contract failed for ${action.id}`);
}
console.log(`Verified ${manifest.deckId}@${manifest.releaseId}: ${manifest.slideCount} slides / ${actions.length} Amy narration actions`);
