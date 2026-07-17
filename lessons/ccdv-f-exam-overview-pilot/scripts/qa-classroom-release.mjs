#!/usr/bin/env node

import { createServer } from "node:http";
import { mkdir, writeFile } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
if (!executablePath) throw new Error("PUPPETEER_EXECUTABLE_PATH is required");

const deckUrl = process.env.CLASSROOM_QA_DECK_URL || "http://127.0.0.1:4173";
const manifest = await (await fetch(`${deckUrl}/manifest.json`)).json();
const parentPort = Number(process.env.CLASSROOM_QA_PARENT_PORT || 4174);
const parentOrigin = `http://127.0.0.1:${parentPort}`;
const harness = createServer((_req, res) => {
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.end(`<!doctype html><html><body style="margin:0"><iframe id="deck" style="border:0;width:100vw;height:100vh"></iframe><script>
    const frame = document.getElementById('deck');
    const envelope = { bridgeVersion: 1, deckId: ${JSON.stringify(manifest.deckId)}, releaseId: ${JSON.stringify(manifest.releaseId)} };
    window.deckMessages = [];
    window.addEventListener('message', event => { window.deckMessages.push(event.data); });
    frame.src = ${JSON.stringify(deckUrl)} + '/?mode=classroom&deckId=' + encodeURIComponent(envelope.deckId) + '&releaseId=' + encodeURIComponent(envelope.releaseId) + '&parentOrigin=' + encodeURIComponent(location.origin);
    window.loadSlide = (slide, index) => frame.contentWindow.postMessage({...envelope, type:'JR_CLASSROOM_LOAD', slideId:slide, slideIndex:index}, ${JSON.stringify(new URL(deckUrl).origin)});
  </script></body></html>`);
});
await new Promise(resolve => harness.listen(parentPort, "127.0.0.1", resolve));

const browser = await puppeteer.launch({ executablePath, headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
const viewports = [
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 1024, height: 1024 },
  { width: 2560, height: 1080 }
];
const failures = [];
let baseline;
let checks = 0;
await mkdir("out/qa", { recursive: true });

const closeEnough = (left, right, tolerance = 0.001) => Math.abs(left - right) <= tolerance;

try {
  const page = await browser.newPage();
  for (const viewport of viewports) {
    await page.setViewport(viewport);
    await page.goto(parentOrigin, { waitUntil: "networkidle0" });
    await page.waitForFunction(() => window.deckMessages.some(message => message?.type === "JR_DECK_READY"));
    const frame = page.frames().find(candidate => candidate.url().startsWith(deckUrl));
    if (!frame) throw new Error("Deck iframe was not created");
    const slide = manifest.slides[0];
    await page.evaluate(({ id, index }) => window.loadSlide(id, index), slide);
    await page.waitForFunction(({ id }) => window.deckMessages.some(message => message?.type === "JR_DECK_SLIDE_READY" && message.slideId === id), {}, slide);
    const layout = await frame.evaluate(() => {
      const stage = document.querySelector("[data-deck-stage]");
      const canvas = document.querySelector("[data-deck-canvas]");
      const page = document.querySelector("[data-deck-page]");
      if (!(stage instanceof HTMLElement) || !(canvas instanceof HTMLElement) || !(page instanceof HTMLElement)) throw new Error("Fixed deck canvas markers are missing");
      const stageRect = stage.getBoundingClientRect();
      const pageRect = page.getBoundingClientRect();
      const designWidth = Number(canvas.dataset.designWidth);
      const designHeight = Number(canvas.dataset.designHeight);
      const landmarks = ["header", ".comparison-grid", "h1", ".takeaway"].map(selector => {
        const element = page.querySelector(selector);
        if (!(element instanceof HTMLElement)) throw new Error(`Missing QA landmark: ${selector}`);
        const rect = element.getBoundingClientRect();
        return { selector, x: (rect.left - pageRect.left) / pageRect.width, y: (rect.top - pageRect.top) / pageRect.height, width: rect.width / pageRect.width, height: rect.height / pageRect.height };
      });
      return {
        horizontal: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        vertical: document.documentElement.scrollHeight > document.documentElement.clientHeight + 1,
        designRatio: designWidth / designHeight,
        renderedRatio: pageRect.width / pageRect.height,
        scaleX: pageRect.width / designWidth,
        scaleY: pageRect.height / designHeight,
        insideStage: pageRect.left >= stageRect.left - .5 && pageRect.top >= stageRect.top - .5 && pageRect.right <= stageRect.right + .5 && pageRect.bottom <= stageRect.bottom + .5,
        landmarks
      };
    });
    checks += 1;
    const reason = [];
    if (layout.horizontal || layout.vertical) reason.push("document-overflow");
    if (!closeEnough(layout.designRatio, 16 / 9)) reason.push("design-ratio-not-16:9");
    if (!closeEnough(layout.renderedRatio, 16 / 9)) reason.push("rendered-ratio-not-16:9");
    if (!closeEnough(layout.scaleX, layout.scaleY)) reason.push("non-uniform-scale");
    if (!layout.insideStage) reason.push("deck-outside-stage");
    if (!baseline) baseline = layout.landmarks;
    else {
      for (const landmark of layout.landmarks) {
        const expected = baseline.find(item => item.selector === landmark.selector);
        if (!expected || ["x", "y", "width", "height"].some(key => !closeEnough(landmark[key], expected[key], .002))) reason.push(`landmark-reflow:${landmark.selector}`);
      }
    }
    if (reason.length) failures.push({ viewport, reason, ...layout });
    await page.screenshot({ path: `out/qa/slide-1-${viewport.width}x${viewport.height}.png`, fullPage: true });
  }
} finally {
  await browser.close();
  harness.closeAllConnections?.();
  await new Promise(resolve => harness.close(resolve));
}

const results = { passed: failures.length === 0, checks, viewports, slidesChecked: 1, fixedAspectRatio: "16:9", layoutFailures: failures };
await writeFile("qa-results.json", `${JSON.stringify(results, null, 2)}\n`);
if (!results.passed) throw new Error(`Classroom fixed-canvas QA found ${failures.length} layout failures`);
console.log(`Classroom fixed-canvas QA passed: ${checks} viewport/slide checks`);
