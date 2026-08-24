import { existsSync } from 'node:fs';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE_ORIGIN = 'https://jiangren.com.au';
const canonicalTagPattern = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i;

export async function injectCurriculumCanonicals(siteRoot) {
	const entries = await readdir(siteRoot, { withFileTypes: true });
	let processedFiles = 0;

	for (const entry of entries) {
		if (!entry.isDirectory()) continue;

		const curriculumPath = path.join(siteRoot, entry.name, 'curriculum.html');
		if (!existsSync(curriculumPath)) continue;

		const canonicalUrl = `${SITE_ORIGIN}/curriculum/${entry.name}/curriculum.html`;
		const canonicalTag = `<link rel="canonical" href="${canonicalUrl}">`;
		const source = await readFile(curriculumPath, 'utf8');
		const output = canonicalTagPattern.test(source)
			? source.replace(canonicalTagPattern, canonicalTag)
			: source.replace('</head>', `  ${canonicalTag}\n</head>`);

		if (output === source && !source.includes(canonicalTag)) {
			throw new Error(`Unable to inject canonical into ${curriculumPath}: missing </head>`);
		}
		if (output !== source) {
			await writeFile(curriculumPath, output);
		}
		processedFiles += 1;
	}

	if (processedFiles === 0) {
		throw new Error(`No curriculum.html files found under ${siteRoot}`);
	}

	return processedFiles;
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirectRun) {
	const siteRoot = path.resolve(process.argv[2] || '_site');
	const processedFiles = await injectCurriculumCanonicals(siteRoot);
	console.log(`Canonical metadata verified for ${processedFiles} curriculum overview pages.`);
}
