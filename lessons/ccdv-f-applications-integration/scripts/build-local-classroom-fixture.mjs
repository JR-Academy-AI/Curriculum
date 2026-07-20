#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";

const narration = JSON.parse(readFileSync("narration/script.json", "utf8"));
const deckOrigin = process.env.LOCAL_DECK_ORIGIN || "http://127.0.0.1:4174";
const releaseId = "local-ccdv-f-applications-integration-20260719";
const fixture = {
  questGoalId: "local-ccdv-f-applications-integration",
  presentation: {
    renderMode: "react-deck-release",
    deckId: narration.deckId,
    releaseId,
    entryUrl: `${deckOrigin}/`,
    manifestUrl: `${deckOrigin}/manifest.json`,
    allowedOrigin: deckOrigin,
    bridgeVersion: 1,
    slideCount: narration.sections.length
  },
  steps: narration.sections.map((section, stepIndex) => ({
    id: section.id,
    stepIndex,
    title: section.title,
    stepType: "slide",
    stepContent: {
      type: "react-deck-release",
      thumbnailUrl: `${deckOrigin}/thumbnails/${String(stepIndex + 1).padStart(2, "0")}-${section.id}.png`
    },
    actions: section.segments.map(segment => ({
      id: segment.id,
      type: "speech",
      text: segment.text,
      audioUrl: `${deckOrigin}/${segment.audioPath}`
    })),
    audioUrls: section.segments.map(segment => `${deckOrigin}/${segment.audioPath}`)
  }))
};

writeFileSync("public/local-classroom.json", `${JSON.stringify(fixture, null, 2)}\n`);
console.log(`Local Classroom fixture: ${fixture.steps.length} slides / ${fixture.steps.flatMap(step => step.actions).length} actions`);
