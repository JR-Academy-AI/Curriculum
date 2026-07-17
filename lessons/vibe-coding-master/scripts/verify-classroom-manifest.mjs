#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const manifestPath = resolve("dist/manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

if (manifest.schemaVersion !== 1)
  throw new Error("manifest.schemaVersion must be 1");
if (manifest.bridgeVersion !== 1)
  throw new Error("manifest.bridgeVersion must be 1");
if (manifest.deckId !== "vibe-coding-master-l1") {
  throw new Error(`Unexpected deckId: ${manifest.deckId}`);
}
if (
  !Array.isArray(manifest.slides) ||
  manifest.slides.length !== manifest.slideCount
) {
  throw new Error("Manifest slideCount does not match slides[]");
}
if (
  new Set(manifest.slides.map((slide) => slide.id)).size !==
  manifest.slides.length
) {
  throw new Error("Manifest slide ids must be unique");
}
if (!/^[a-f0-9]{7,40}$/i.test(manifest.sourceCommit)) {
  throw new Error("Manifest sourceCommit must be a git commit");
}
if (!/^[a-f0-9]{64}$/i.test(manifest.checksum)) {
  throw new Error("Manifest checksum must be SHA-256");
}
if (!manifest.entryUrl.endsWith(`${manifest.entryPath}`)) {
  throw new Error("Manifest entryUrl must end with entryPath");
}
for (const [index, slide] of manifest.slides.entries()) {
  if (slide.index !== index || !slide.id || !slide.title) {
    throw new Error(`Manifest slide ${index + 1} identity is invalid`);
  }
  if (!Array.isArray(slide.actions)) {
    throw new Error(`Manifest slide ${slide.id} actions must be an array`);
  }
}

console.log(
  `Verified Classroom manifest ${manifest.deckId}@${manifest.releaseId}: ${manifest.slideCount} slides`
);
