import { mkdir, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUTPUT_DIR = path.resolve('public/captures');
const VIEWPORT = { width: 1440, height: 900 };

const dismissLanguagePicker = async (page) => {
  const chineseButton = page.getByText('中文', { exact: true });
  if (await chineseButton.count()) {
    await chineseButton.first().click();
    await page.waitForTimeout(900);
  }
};

const hideFloatingUi = async (page) => {
  await page.evaluate(() => {
    const phrases = ['点这里咨询真人客服或 AI', '开通会员享全站折扣'];
    for (const element of document.querySelectorAll('body *')) {
      const text = element.textContent?.trim() ?? '';
      if (phrases.some((phrase) => text === phrase)) {
        const container = element.closest('div');
        if (container instanceof HTMLElement) container.style.display = 'none';
      }
    }
  });
};

const record = async (browser, name, run) => {
  const tempDir = path.join(OUTPUT_DIR, `.tmp-${name}`);
  await rm(tempDir, { recursive: true, force: true });
  await mkdir(tempDir, { recursive: true });

  const context = await browser.newContext({
    viewport: VIEWPORT,
    locale: 'zh-CN',
    recordVideo: { dir: tempDir, size: VIEWPORT },
  });
  const page = await context.newPage();
  await run(page);
  const video = page.video();
  await page.close();
  await context.close();

  if (!video) throw new Error(`No video was recorded for ${name}`);
  const recordedPath = await video.path();
  const outputPath = path.join(OUTPUT_DIR, `${name}.webm`);
  await rm(outputPath, { force: true });
  await rename(recordedPath, outputPath);
  await rm(tempDir, { recursive: true, force: true });
  console.log(`Captured ${outputPath}`);
};

await mkdir(OUTPUT_DIR, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: CHROME });

try {
  await record(browser, 'course-tour', async (page) => {
    await page.goto('https://jiangren.com.au/certifications/exam/ccar-f', {
      waitUntil: 'networkidle',
      timeout: 60_000,
    });
    await dismissLanguagePicker(page);
    await hideFloatingUi(page);

    const outline = page.getByText('学习大纲', { exact: true });
    await outline.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1400);
    const expand = page.getByRole('button', { name: /查看全部\s*\d+\s*章/ });
    if (await expand.count()) await expand.click();
    await page.waitForTimeout(1700);

    const sample = page.getByText('Try Before You Buy', { exact: true });
    await sample.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1700);
    const answer = page.getByRole('button').filter({ hasText: /^B/ });
    if (await answer.count()) await answer.first().click();
    await page.waitForTimeout(1700);

    const overview = page.getByText('考试概览', { exact: true });
    await overview.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1900);
  });

  await record(browser, 'demo-exam', async (page) => {
    await page.goto('https://jiangren.com.au/certifications/exam/ccar-f/demo-exam', {
      waitUntil: 'networkidle',
      timeout: 60_000,
    });
    await dismissLanguagePicker(page);
    await page.waitForTimeout(1100);
    await page.getByRole('button', { name: '开始答题' }).click();
    await page.waitForTimeout(1500);
    const answers = page.getByRole('button').filter({ hasText: /fresh session/ });
    if (await answers.count()) await answers.last().click();
    await page.waitForTimeout(1600);
    await page.getByRole('button', { name: '下一题' }).click();
    await page.waitForTimeout(1600);
  });
} finally {
  await browser.close();
}
