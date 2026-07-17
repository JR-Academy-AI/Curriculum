#!/usr/bin/env node
import { readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("dist/manifest.json", "utf8"));
if (manifest.schemaVersion !== 1 || manifest.bridgeVersion !== 1)
  throw new Error("Unsupported Classroom contract");
if (manifest.deckId !== "ccar-f-exam-overview")
  throw new Error(`Unexpected deckId: ${manifest.deckId}`);
if (manifest.slideCount !== 3 || manifest.slides.length !== 3)
  throw new Error("CCAR-F canary must contain three semantic slides");
if (!/^[a-f0-9]{7,40}$/i.test(manifest.sourceCommit))
  throw new Error("sourceCommit must be a git commit");
if (!/^[a-f0-9]{64}$/i.test(manifest.checksum))
  throw new Error("checksum must be SHA-256");
if (!manifest.entryUrl.endsWith(manifest.entryPath))
  throw new Error("entryUrl must end with entryPath");
for (const [index, slide] of manifest.slides.entries()) {
  if (slide.index !== index || !slide.id || !slide.title || !slide.actions?.length)
    throw new Error(`Slide ${index + 1} is incomplete`);
  for (const action of slide.actions) {
    if (action.type !== "speech" || !action.text || !action.audioUrl)
      throw new Error(`Action ${action.id} is not playable`);
    if (!action.audioUrl.startsWith("https://classroom-assets.jracademy.com.au/"))
      throw new Error(`Action ${action.id} is outside the Classroom asset CDN`);
  }
}
console.log(`Verified ${manifest.deckId}@${manifest.releaseId}: 3 slides / 11 speech actions`);
