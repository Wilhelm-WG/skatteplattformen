#!/usr/bin/env node
// Kontrollerar alla externa länkar i index.html (kräver nätverk). Körs med: node scripts/lankar.mjs
// OECD och doi.org svarar ofta 403 till skript men fungerar i webbläsare; de listas separat och bör prövas för hand.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const html = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'index.html'), 'utf8');
const urls = [...new Set([...html.matchAll(/https?:\/\/[^\s"'<>`)\]]+/g)].map(m => m[0].replace(/&amp;/g, '&').replace(/[.,;]+$/, '')))]
  .filter(u => !/(fonts\.g|w3\.org|creativecommons|wilhelm-wg\.github|\$\{)/.test(u));
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36';
async function prova(u) {
  try { const r = await fetch(u, { redirect: 'follow', headers: { 'user-agent': UA }, signal: AbortSignal.timeout(25000) }); return r.status; }
  catch (e) { return 'fel: ' + (e.cause?.code || e.name); }
}
const res = [];
for (let i = 0; i < urls.length; i += 10) res.push(...await Promise.all(urls.slice(i, i + 10).map(async u => [await prova(u), u])));
const trasig = res.filter(([s, u]) => s !== 200 && !(s === 403 && /oecd\.org|doi\.org/.test(u)));
const manuell = res.filter(([s, u]) => s === 403 && /oecd\.org|doi\.org/.test(u));
console.log(`${urls.length} länkar, ${res.length - trasig.length - manuell.length} svarar 200`);
manuell.forEach(([s, u]) => console.log(`\x1b[33mpröva i webbläsaren\x1b[0m ${s} ${u}`));
trasig.forEach(([s, u]) => console.log(`\x1b[31mTRASIG\x1b[0m ${s} ${u}`));
process.exit(trasig.length ? 1 : 0);
