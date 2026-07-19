import { createHash } from "node:crypto";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { classroomConfig } from "./classroom.config";
function manifestPlugin(base: string): Plugin { return { name: "jr-classroom-manifest", generateBundle(_options, bundle) {
  const releaseId = process.env.CLASSROOM_RELEASE_ID || `source-${classroomConfig.sourceVersion}`;
  const sourceCommit = process.env.CLASSROOM_SOURCE_COMMIT || "0000000";
  const origin = process.env.CLASSROOM_RELEASE_ORIGIN;
  const audioBase = process.env.CLASSROOM_AUDIO_BASE_URL?.replace(/\/$/, "");
  const entryUrl = origin ? `${origin}${base}index.html` : `${base}index.html`;
  const checksum = createHash("sha256");
  for (const fileName of Object.keys(bundle).sort()) { const output = bundle[fileName]; checksum.update(fileName); checksum.update(output.type === "asset" ? (typeof output.source === "string" ? output.source : Buffer.from(output.source)) : output.code); }
  this.emitFile({ type: "asset", fileName: "manifest.json", source: JSON.stringify({ schemaVersion: 1, bridgeVersion: classroomConfig.bridgeVersion, deckId: classroomConfig.deckId, releaseId, sourceCommit, checksum: checksum.digest("hex"), title: classroomConfig.title, status: classroomConfig.status, entryPath: `${base}index.html`, entryUrl, slideCount: classroomConfig.slides.length, slides: classroomConfig.slides.map((slide, index) => ({ ...slide, actions: slide.actions.map(({ audioKey, ...action }) => ({ ...action, audioUrl: audioBase ? `${audioBase}/${audioKey}` : `${base}audio/${audioKey}` })), index })) }, null, 2) });
} }; }
const configuredBase = process.env.CLASSROOM_RELEASE_BASE || (process.env.NODE_ENV === "production" ? "/curriculum/lessons/ccdv-f-model-selection-optimization/" : "/");
const base = configuredBase.endsWith("/") ? configuredBase : `${configuredBase}/`;
export default defineConfig({ plugins: [react(), manifestPlugin(base)], base });
