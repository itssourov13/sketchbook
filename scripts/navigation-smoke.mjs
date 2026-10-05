import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const requiredFiles = [
  'index.html',
  'about/index.html',
  'work/index.html',
  'work/sketchbook-engine/index.html',
  'work/content-first-site/index.html',
  'journal/index.html',
  'journal/from-landing-page-to-site-system/index.html',
  'journal/motion-with-a-job/index.html',
  'sketchbook/index.html',
  'rss.xml',
];

for (const file of requiredFiles) {
  await access(join(dist, file));
}

const home = await readFile(join(dist, 'index.html'), 'utf8');
const sketchbook = await readFile(join(dist, 'sketchbook/index.html'), 'utf8');

const requiredHomeLinks = ['/','/work/','/journal/','/about/','/sketchbook/'];
for (const href of requiredHomeLinks) {
  if (!home.includes(`href="${href}"`)) throw new Error(`Missing Home navigation link: ${href}`);
}

for (const forbidden of ['>Meng To<', 'hello@mengto.com', 'Meng To is a designer', 'class="top"']) {
  if (sketchbook.includes(forbidden)) throw new Error(`Legacy Sketchbook identity/header found: ${forbidden}`);
}

if (!home.includes('SOUROV')) throw new Error('Sourov branding missing from Home.');
if (!sketchbook.includes('Back to Sourov home')) throw new Error('Sketchbook back navigation missing.');
if (!sketchbook.includes('href="/"')) throw new Error('Sketchbook Home destination missing.');
if (!sketchbook.includes('class="sketchbook-site-work"')) throw new Error('Sketchbook Work link missing.');
if (!sketchbook.includes('class="bio-link"')) throw new Error('Sketchbook Back-to-home footer link missing.');

console.log(`Navigation smoke test passed: ${requiredFiles.length} required build artifacts, ${requiredHomeLinks.length} Home routes, no legacy personal header.`);
