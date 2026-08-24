import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { injectCurriculumCanonicals } from './inject-curriculum-canonicals.mjs';

async function withSiteFixture(run) {
	const siteRoot = await mkdtemp(path.join(tmpdir(), 'jr-curriculum-seo-'));
	try {
		await run(siteRoot);
	} finally {
		await rm(siteRoot, { recursive: true, force: true });
	}
}

test('adds a self-canonical to each deployed curriculum overview', async () => {
	await withSiteFixture(async siteRoot => {
		const courseRoot = path.join(siteRoot, 'business-analyst');
		await mkdir(courseRoot);
		await writeFile(
			path.join(courseRoot, 'curriculum.html'),
			'<!doctype html><html><head><title>BA</title></head><body></body></html>'
		);

		assert.equal(await injectCurriculumCanonicals(siteRoot), 1);
		const output = await readFile(path.join(courseRoot, 'curriculum.html'), 'utf8');
		assert.match(
			output,
			/<link rel="canonical" href="https:\/\/jiangren\.com\.au\/curriculum\/business-analyst\/curriculum\.html">/
		);
	});
});

test('replaces stale canonical metadata without duplicating the tag', async () => {
	await withSiteFixture(async siteRoot => {
		const courseRoot = path.join(siteRoot, 'ai-builder');
		await mkdir(courseRoot);
		await writeFile(
			path.join(courseRoot, 'curriculum.html'),
			'<!doctype html><html><head><link rel="canonical" href="https://example.com/old"></head></html>'
		);

		await injectCurriculumCanonicals(siteRoot);
		await injectCurriculumCanonicals(siteRoot);
		const output = await readFile(path.join(courseRoot, 'curriculum.html'), 'utf8');
		assert.equal(output.match(/rel="canonical"/g)?.length, 1);
		assert.match(output, /href="https:\/\/jiangren\.com\.au\/curriculum\/ai-builder\/curriculum\.html"/);
	});
});
