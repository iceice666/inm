// open-slide hardcodes its own favicon + <title>open-slide</title> in the built
// index.html and exposes no config hook to override them. This rebrands the
// static deck after `open-slide build`: copies the inm favicon into the dist and
// rewrites the <link rel="icon"> + <title> to match the rest of inm.justaslime.dev.
import { readFile, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = process.argv[2] ?? 'deck/dist';
const faviconSrc = process.argv[3] ?? 'site/public/favicon.svg';
const title = process.argv[4] ?? 'inm design system';

const htmlPath = path.join(distDir, 'index.html');
let html = await readFile(htmlPath, 'utf8');

// Derive the deployed base (e.g. "/slide/") from an emitted asset href so the
// favicon path stays correct if `base` ever changes. Reads from the JS/CSS asset
// link (not the icon link) so the script stays idempotent across re-runs.
const baseMatch = html.match(/(?:src|href)="([^"]*\/)assets\/[^"]*"/);
const base = baseMatch ? baseMatch[1] : '/';

await copyFile(faviconSrc, path.join(distDir, 'favicon.svg'));

html = html.replace(
  /<link rel="icon"[^>]*>/,
  `<link rel="icon" type="image/svg+xml" href="${base}favicon.svg" />`,
);
html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

await writeFile(htmlPath, html);
console.log(`Patched ${htmlPath}: favicon -> ${base}favicon.svg, title -> "${title}"`);
