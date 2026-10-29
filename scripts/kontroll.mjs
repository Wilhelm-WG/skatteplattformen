#!/usr/bin/env node
// Kontroll före publicering av Skatteplattformen.
// Körs med:  node scripts/kontroll.mjs        (inga beroenden)
// Avslutar med kod 1 om något fel hittas.
//
// 1. Skattemodellen (sajtens egen kod) mot Skatteverkets skattetabell 32 för 2026, kolumn 1–3.
// 2. NYCKELTAL: inga kvarvarande "gamla" värden någonstans på sidan.
// 3. Källkatalogen: giltiga länkar; prislappar och faktakort har källa (och år).
// 4. Modellens robusthet: inga NaN, negativa värden eller orimliga hopp.
// 5. Information: skillnader mot data/livsfaser_v2.json (Python-modellen).

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(ROOT, 'index.html'), 'utf8');

let fel = 0, ok = 0, info = 0;
const c = { r: s => `\x1b[31m${s}\x1b[0m`, g: s => `\x1b[32m${s}\x1b[0m`, y: s => `\x1b[33m${s}\x1b[0m`, d: s => `\x1b[2m${s}\x1b[0m` };
const FEL = m => { fel++; console.log(c.r('✗ FEL ') + m); };
const OK = m => { ok++; console.log(c.g('✓ OK  ') + c.d(m)); };
const INFO = m => { info++; console.log(c.y('ℹ INFO ') + m); };
const rubrik = t => console.log('\n' + t);

// ── Hjälpare: plocka ut en funktion eller ett literalt objekt ur index.html ──
function func(name) {
  const a = html.indexOf(`function ${name}(`);
  if (a < 0) throw new Error(`Hittar inte function ${name}`);
  const b = html.indexOf('\n}\n', a);
  return html.slice(a, b + 3);
}
function literal(decl) { // t.ex. 'const NYCKELTAL = {' — returnerar källtexten fram till matchande };
  const a = html.indexOf(decl);
  if (a < 0) throw new Error(`Hittar inte ${decl}`);
  const open = decl.trim().slice(-1), close = open === '{' ? '}' : ']';
  let i = a + decl.length - 1, djup = 0, str = null;
  for (; i < html.length; i++) {
    const ch = html[i];
    if (str) { if (ch === '\\') { i++; continue; } if (ch === str) str = null; continue; }
    if (ch === "'" || ch === '"' || ch === '`') { str = ch; continue; }
    if (ch === open) djup++;
    else if (ch === close && --djup === 0) break;
  }
  return { start: a, end: i + 1, text: html.slice(a + decl.length - 1, i + 1) };
}

// ── 1. Skattemodellen mot tabell 32 ──────────────────────────────────────
rubrik('1. Skattemodellen mot Skatteverkets skattetabell 32 (2026)');
const ctx = { currentKs: 0.3084, Math, document: { getElementById: () => null } };
vm.createContext(ctx);
['grundavdrag2024', 'grundavdrag2024raw', 'jobbskatteavdrag2024', 'forhojtGrundavdrag2026', 'jobbskatteavdrag66', 'skattDelar', 'annualTax']
  .forEach(n => vm.runInContext(func(n), ctx));
// Skatteavdrag för månadslön 2026, tabell 32 (SKVFS 2025:20). Radens högsta lön → [kolumn 1, 2, 3].
const TAB32 = {
  5100: [422, 0, 358], 7000: [588, 371, 515], 8000: [762, 615, 598], 8400: [842, 714, 638],
  10100: [1183, 1108, 780], 15000: [2155, 2062, 1186], 20000: [3290, 3217, 1613], 25200: [4533, 4430, 2025],
  30200: [5751, 5621, 2516], 35200: [6970, 6821, 3717], 40200: [8215, 8061, 4957], 50200: [11415, 11261, 8157], 60200: [15648, 15482, 12378],
};
let maxAvv = 0;
for (const [m, ref] of Object.entries(TAB32)) {
  const inc = m * 12 / 1000;
  [[40, false], [67, true], [67, false]].forEach(([age, pension], k) => {
    const d = vm.runInContext(`skattDelar(${age}, ${inc}, {pension:${pension}})`, ctx);
    // Tabellen innehåller även begravningsavgift (1,16 %), skattereduktion för förvärvsinkomst och public service-avgift,
    // som sajten inte redovisar som skatt. De läggs till här för jämförelsens skull.
    const kvar = Math.max(0, d.komm - d.apaRest - d.jsa - Math.max(0, Math.min(Math.round(inc * 0.07 * 10) / 10, d.komm - d.apaRest + d.stat) - d.stat));
    const srf = Math.min(d.bb >= 240 ? 1.5 : Math.max(0, (d.bb - 40) * 0.0075), pension ? Math.max(0, d.komm - d.jsa) : kvar);
    const ps = Math.min(d.bb * 0.01, 1.184);
    const kr = Math.round((d.komm + d.bb * 0.0116 + d.stat - d.jsa - srf + ps) * 1000 / 12);
    const avv = kr - ref[k];
    maxAvv = Math.max(maxAvv, Math.abs(avv));
    if (Math.abs(avv) > 2) FEL(`Tabell 32 kolumn ${k + 1}, ${m} kr/mån: modellen ${kr} kr, tabellen ${ref[k]} kr`);
  });
}
if (maxAvv <= 2) OK(`Alla ${Object.keys(TAB32).length * 3} kontrollpunkter (kolumn 1–3, 5 000–60 000 kr/mån) inom ±${maxAvv} kr`);

// ── 2. Nyckeltal: inga gamla värden kvar ─────────────────────────────────
rubrik('2. Nyckeltal: gamla värden får inte finnas kvar');
const ntLit = literal('const NYCKELTAL = {');
const NYCKELTAL = vm.runInNewContext('(' + ntLit.text + ')');
const kLit = literal('const KALLOR = {');
const KALLOR = vm.runInNewContext('(' + kLit.text + ')');
let utanKatalog = html.slice(0, kLit.start) + html.slice(ntLit.end); // KALLOR ligger direkt före NYCKELTAL
// Rättelseloggen nämner gamla värden med avsikt
{ const a = utanKatalog.indexOf('id="rattelser"'); if (a >= 0) { const b = utanKatalog.indexOf('</section>', a); utanKatalog = utanKatalog.slice(0, a) + utanKatalog.slice(b); } }
for (const [id, n] of Object.entries(NYCKELTAL)) {
  const traffar = (n.gamla || []).filter(g => utanKatalog.includes(g));
  if (traffar.length) traffar.forEach(g => {
    const i = utanKatalog.indexOf(g), rad = utanKatalog.slice(0, i).split('\n').length;
    FEL(`${n.namn}: gammalt värde "${g}" finns kvar (ungefär rad ${rad}). Aktuellt: ${n.v} (${n.ar})`);
  });
  else OK(`${n.namn}: ${n.v} (${n.ar})`);
  if (!KALLOR[n.kalla]) FEL(`${n.namn}: källan "${n.kalla}" saknas i KALLOR`);
}

// ── 3. Källor ─────────────────────────────────────────────────────────────
rubrik('3. Källor');
const urls = Object.entries(KALLOR).filter(([, k]) => !/^https:\/\//.test(k.url));
urls.length ? urls.forEach(([id]) => FEL(`KALLOR.${id}: länken är inte https`)) : OK(`${Object.keys(KALLOR).length} källor i katalogen, alla med https-länk`);
const CARDS = vm.runInNewContext('(' + literal('const CARDS = [').text + ')');
const utanKalla = CARDS.filter(k => !k.src || k.src.trim().length < 10);
utanKalla.length ? utanKalla.forEach(k => FEL(`Prislapp utan källa: ${k.title}`)) : OK(`Alla ${CARDS.length} prislappar har källa`);
const ejNum = CARDS.filter(k => typeof k.amount !== 'number' || !(k.amount > 0));
ejNum.length ? ejNum.forEach(k => FEL(`Prislapp med ogiltigt belopp: ${k.title}`)) : OK('Alla prislappar har ett positivt belopp');
const FAKTA = vm.runInNewContext('(' + literal('const FAKTA = [').text + ')');
const faktaFel = FAKTA.filter(f => !f.kalla || !f.ar);
faktaFel.length ? faktaFel.forEach(f => FEL(`Faktakort utan källa eller år: ${f.h}`)) : OK(`Alla ${FAKTA.length} faktakort har källa och år`);
const utanBild = FAKTA.filter(f => !f.bild || !f.bild.tal || !f.bild.rad);
utanBild.length ? utanBild.forEach(f => FEL(`Faktakort utan siffra till delningsbilden (bild.tal/rad): ${f.h}`)) : OK('Alla faktakort har en siffra och en mening till delningsbilden');
// Internationella jämförelser: sju länder, minst fem värden, källa, länk och år
const jmfSrc = literal('const JMF_DATA = {').text.replace(/url:WDI/g, "url:'https://databank.worldbank.org'");
const JMF = vm.runInNewContext('(' + jmfSrc + ')');
const jmfFel = [];
let jmfN = 0;
for (const s of Object.values(JMF)) for (const ch of s.charts) {
  jmfN++;
  if (!Array.isArray(ch.v) || ch.v.length !== 7) jmfFel.push(`${ch.t}: ska ha 7 värden`);
  else if (ch.v.filter(v => v !== null).length < 5) jmfFel.push(`${ch.t}: färre än 5 länder med uppgift`);
  if (!ch.kalla || !/^https:\/\//.test(ch.url || '') || !ch.ar) jmfFel.push(`${ch.t}: saknar källa, https-länk eller år`);
  if (ch.v && ch.v[0] === null) jmfFel.push(`${ch.t}: Sverige saknar värde`);
}
jmfFel.length ? jmfFel.forEach(f => FEL('Jämförelse: ' + f)) : OK(`Alla ${jmfN} jämförelsediagram har 7 länder (minst 5 med uppgift), källa och år`);
// Detaljrutor (DETAILS) ska höra till en prislapp med exakt samma titel
const DETAILS = vm.runInNewContext('(' + literal('const DETAILS = {').text + ')');
const lösa = Object.keys(DETAILS).filter(t => !CARDS.some(k => k.title === t));
lösa.length ? lösa.forEach(t => FEL(`DETAILS["${t}"] matchar ingen prislapp`)) : OK(`Alla ${Object.keys(DETAILS).length} detaljrutor hör till en prislapp`);
// Fördelningarna ska gå jämnt upp
const HERO_100 = vm.runInNewContext('(' + literal('const HERO_100 = [').text + ')');
const h100 = HERO_100.reduce((a, x) => a + x.v, 0);
h100 === 100 ? OK('Hundralappen summerar till 100 kr') : FEL(`Hundralappen summerar till ${h100} kr, inte 100`);
const COFOG = vm.runInNewContext('(' + literal('const cofogItems = [').text + ')');
const cSum = COFOG.reduce((a, x) => a + x.andel, 0);
Math.abs(cSum - 1) < 0.002 ? OK(`Skattekvittots andelar summerar till ${cSum.toFixed(4)}`) : FEL(`Skattekvittots andelar summerar till ${cSum.toFixed(4)}, inte 1`);
// Gamla värden som inte hör till ett nyckeltal men har rättats (se #rattelser)
for (const g of ['181,8 tkr', '135 400', '2 950 kr', 'max 113 tkr', '1 116 kr 2024', '3 011', 'Max 1 100 kr', 'oförändrat sedan 2006', 'i nivå med en anstaltsplats', '23 700 lärare'])
  if (utanKatalog.includes(g)) FEL(`Rättat värde "${g}" finns kvar (ungefär rad ${utanKatalog.slice(0, utanKatalog.indexOf(g)).split('\n').length})`);
OK('Inga tidigare rättade värden har kommit tillbaka');
const titlar = CARDS.map(k => k.title), dubbla = titlar.filter((t, i) => titlar.indexOf(t) !== i);
dubbla.length ? dubbla.forEach(t => FEL(`Prislappen "${t}" finns två gånger`)) : OK('Inga dubbletter i prislistan');

// ── 4. Modellens robusthet ────────────────────────────────────────────────
rubrik('4. Modellens robusthet');
const problem = [];
for (let age = 0; age <= 100; age++) {
  let prev = null;
  for (let inc = 0; inc <= 2000; inc += 5) {
    for (const pension of [true, false]) {
      const t = vm.runInContext(`annualTax(${age}, ${inc}, {pension:${pension}})`, ctx);
      for (const [k, v] of Object.entries(t)) if (!Number.isFinite(v) || v < 0) problem.push(`ålder ${age}, ${inc} tkr: ${k}=${v}`);
    }
    const t = vm.runInContext(`annualTax(${age}, ${inc})`, ctx);
    if (prev !== null && t.tot - prev > 30) problem.push(`ålder ${age}: skatten hoppar ${t.tot - prev} tkr vid ${inc} tkr`);
    prev = t.tot;
  }
}
problem.length ? problem.slice(0, 10).forEach(p => FEL('Robusthet: ' + p)) : OK('Ingen NaN, inga negativa värden och inga hopp > 30 tkr per 5 tkr inkomst (ålder 0–100, inkomst 0–2 000 tkr)');

// ── 5. Python-modellens datafil (information) ────────────────────────────
rubrik('5. Python-modellen (data/livsfaser_v2.json) jämfört med sajten');
const jsonPath = join(ROOT, 'data', 'livsfaser_v2.json');
if (existsSync(jsonPath)) {
  const LV = vm.runInNewContext('(' + literal('const LIVSFASER_V2 = [').text + ')');
  const J = JSON.parse(readFileSync(jsonPath, 'utf8'));
  const map = { utb: 'utbildning' };
  let diff = 0;
  for (const f of LV) {
    const jf = (J.faser || []).find(x => x.id === f.id);
    const jv = jf && jf['förmåner_tkr_per_år'] && jf['förmåner_tkr_per_år'][map.utb] && jf['förmåner_tkr_per_år'][map.utb]['värde'];
    if (jv !== undefined && Math.abs(jv - f.f.utb) > 1) { diff++; INFO(`${f.label}: utbildning ${f.f.utb} tkr på sajten, ${jv} tkr i Python-modellen`); }
  }
  if (!diff) OK('Utbildningsvärdena stämmer mellan sajten och Python-modellen');
  else INFO('Python-modellen använder delvis andra definitioner (t.ex. förskola per barn i stället för åldersmedel). Stäm av vid nästa körning av data/nta_berakning.py.');
} else INFO('data/livsfaser_v2.json finns inte');

console.log(`\n${fel ? c.r(fel + ' fel') : c.g('0 fel')}, ${ok} OK, ${info} info`);
process.exit(fel ? 1 : 0);
