#!/usr/bin/env node

import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
if (!executablePath) throw new Error("PUPPETEER_EXECUTABLE_PATH is required");

const deckUrl = process.env.CLASSROOM_THUMBNAIL_URL || "http://127.0.0.1:4174";
const slideNames = [
  "weight-map",
  "simple-first",
  "complexity-ladder",
  "four-gates",
  "supervisor-subagent",
  "stop-reasons",
  "loop-invariants",
  "runner-sdk",
  "hooks",
  "deployment-models",
  "memory-context",
  "frameworks",
  "decision-tree",
  "failure-gallery",
  "question-walkthrough",
  "recap"
];

await mkdir("public/thumbnails", { recursive: true });
const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 });
  for (const [index, name] of slideNames.entries()) {
    const number = index + 1;
    const url = `${deckUrl}/?slide=${number}&review=0`;
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: `public/thumbnails/${String(number).padStart(2, "0")}-${name}.png`,
      fullPage: false
    });
  }
} finally {
  await browser.close();
}

console.log(`Generated ${slideNames.length} JR Course Studio thumbnails`);
