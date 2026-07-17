#!/usr/bin/env node

import { createServer } from "node:http";
import { writeFile } from "node:fs/promises";
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

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});
const viewports = [
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 }
];
const failures = [];
let checks = 0;

try {
  const page = await browser.newPage();
  for (const viewport of viewports) {
    await page.setViewport(viewport);
    await page.goto(parentOrigin, { waitUntil: "networkidle0" });
    await page.waitForFunction(() =>
      window.deckMessages.some(message => message?.type === "JR_DECK_READY")
    );
    const frame = page.frames().find(candidate => candidate.url().startsWith(deckUrl));
    if (!frame) throw new Error("Deck iframe was not created");

    for (const slide of manifest.slides) {
      await page.evaluate(({ id, index }) => window.loadSlide(id, index), slide);
      await page.waitForFunction(
        ({ id, index }) => window.deckMessages.some(message =>
          message?.type === "JR_DECK_SLIDE_READY" &&
          message.slideId === id && message.slideIndex === index
        ),
        {},
        slide
      );
      const layout = await frame.evaluate(() => ({
        horizontal: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        vertical: document.documentElement.scrollHeight > document.documentElement.clientHeight + 1
      }));
      checks += 1;
      if (layout.horizontal || layout.vertical) failures.push({ viewport, slideId: slide.id, ...layout });
    }
  }
} finally {
  await browser.close();
  await new Promise(resolve => harness.close(resolve));
}

const results = {
  passed: failures.length === 0,
  checks,
  viewports,
  slidesChecked: manifest.slideCount,
  overflowFailures: failures
};
await writeFile("qa-results.json", `${JSON.stringify(results, null, 2)}\n`);
if (!results.passed)
  throw new Error(`Classroom DOM QA found ${failures.length} overflow failures`);
console.log(`Classroom DOM QA passed: ${checks} viewport/slide checks`);
