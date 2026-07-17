#!/usr/bin/env node
import { readFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("dist/manifest.json", "utf8"));
if (manifest.schemaVersion !== 1 || manifest.bridgeVersion !== 1) throw new Error("Unsupported Classroom contract");
if (manifest.deckId !== "ccdv-f-exam-overview-pilot") throw new Error(`Unexpected deckId: ${manifest.deckId}`);
if (manifest.slideCount !== 1 || manifest.slides.length !== 1) throw new Error("CCDV-F first-line pilot must contain exactly one slide");
if (!/^[a-f0-9]{7,40}$/i.test(manifest.sourceCommit)) throw new Error("sourceCommit must be a git commit");
if (!/^[a-f0-9]{64}$/i.test(manifest.checksum)) throw new Error("checksum must be SHA-256");
if (!manifest.entryUrl.endsWith(manifest.entryPath)) throw new Error("entryUrl must end with entryPath");
const [slide] = manifest.slides;
if (slide.index !== 0 || !slide.id || !slide.title || slide.actions?.length !== 1) throw new Error("Pilot slide is incomplete");
const [action] = slide.actions;
if (
  action.type !== "speech" ||
  !action.text ||
  !action.audioUrl?.endsWith(".mp3") ||
  action.audioDurationMs !== 3289 ||
  action.audioStatus !== "approved-amy-v1"
) throw new Error("Pilot narration contract is incomplete");
console.log(`Verified ${manifest.deckId}@${manifest.releaseId}: 1 slide / 1 Amy narration action`);
