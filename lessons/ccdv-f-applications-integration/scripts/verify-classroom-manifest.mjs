#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("dist/manifest.json", "utf8"));
const narration = JSON.parse(readFileSync("narration/script.json", "utf8"));
const expectedSegments = narration.sections.flatMap(section => section.segments);

if (manifest.schemaVersion !== 1 || manifest.bridgeVersion !== 1) throw new Error("Unsupported Classroom contract");
if (manifest.deckId !== "ccdv-f-applications-integration") throw new Error(`Unexpected deckId: ${manifest.deckId}`);
if (manifest.slideCount !== narration.sections.length || manifest.slides.length !== narration.sections.length) throw new Error("Slide count does not match narration sections");
if (!/^[a-f0-9]{7,40}$/i.test(manifest.sourceCommit)) throw new Error("sourceCommit must be a git commit");
if (!/^[a-f0-9]{64}$/i.test(manifest.checksum)) throw new Error("checksum must be SHA-256");
if (!manifest.entryUrl.endsWith(manifest.entryPath)) throw new Error("entryUrl must end with entryPath");
const releaseBaseUrl = new URL("./", manifest.entryUrl);

const actions = manifest.slides.flatMap((slide, index) => {
  if (slide.index !== index || !slide.id || !slide.title || !slide.actions?.length) throw new Error(`Slide ${index + 1} is incomplete`);
  const expectedThumbnail = `thumbnails/${String(index + 1).padStart(2, "0")}-${slide.id}.png`;
  if (slide.thumbnailUrl !== new URL(expectedThumbnail, releaseBaseUrl).href) throw new Error(`Slide ${index + 1} thumbnail URL is outside the current release`);
  if (!existsSync(`public/${expectedThumbnail}`) || !existsSync(`dist/${expectedThumbnail}`)) throw new Error(`Slide ${index + 1} thumbnail file is missing`);
  return slide.actions;
});
if (actions.length !== expectedSegments.length) throw new Error("Narration action count mismatch");
for (const action of actions) {
  if (action.type !== "speech" || !action.text || !action.audioUrl?.endsWith(".mp3") || action.audioDurationMs <= 0 || action.audioStatus !== "generated-local-review") throw new Error(`Narration contract is incomplete for ${action.id}`);
}
console.log(`Verified ${manifest.deckId}@${manifest.releaseId}: ${manifest.slideCount} slides / ${actions.length} Amy narration actions`);
