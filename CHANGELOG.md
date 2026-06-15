# Ändringslogg

## v2.3 — 2026-06-15

### Designomarbetning

- **Ny typografi:** Playfair Display → **Fraunces** (variabel, optisk storlek) för rubriker, IBM Plex Sans → **Inter** för brödtext. IBM Plex Mono behålls för alla siffror. Kontinuerliga viktintervall (400–900) begärs så alla vikter renderas skarpt.
- **Designsystem:** nya tokens — varmare papper (`#F4F1EA`), egen kortyta (`--paper`), trestegs skugg-/höjdsystem och enhetliga hörnradier (`--r`/`--r-sm`).
- **Komponenter:** navigering med glaseffekt och animerad understrykning; hero-tickern fick djup (gradient, bärnstensaccenter, hover); sektionsrubriker med grön ögonbrynslinje och mer vertikal rytm; **prislistan** flyttad från platt hårlinjerutnät till upphöjda papperskort med hover-lyft; enhetliga skuggor/hover på knappar, piller, diagram- och källkort.
- Endast CSS/`<head>` ändrat — ingen HTML-struktur eller JavaScript rörd, så kalkylator och diagram fungerar oförändrat.
- **Städning:** stale `index_backup.html` borttagen (git-historiken är backupen).

## v2.2 — 2026-06-13

### Rättelser efter modellgranskning

- **Datakorruption rättad:** `nta_profil_v2.json` innehöll bara 8 av 10 livsfaser med felmatchade etiketter (t.ex. "Pensionär (65–80)" satt på ålder 55–64; faserna 65–74 och 75–85 saknades helt). Orsak: en hårdkodad 8-poster `LIVSFAS_LABELS` uppdaterades aldrig vid v2.1-migreringen till 10 faser, varpå `zip()` trunkerade tyst. Etiketter, befolkningsvikter och skattesatser läses nu direkt från `livsfaser_v2.json`.
- **Reproducerbarhet återställd:** `python data/nta_berakning.py` kraschade på en färsk klon eftersom skriptet ovillkorligt laddade den gitignorerade `skatteplattformen_data.xlsx`. Excel-steget hoppas nu tyst över om filen saknas och JSON-modellen regenereras ändå.
- **`--verify` fungerar nu fristående** — testblocket låg efter den kraschande Excel-koden och kunde aldrig köras. Flyttat före Excel-genereringen + nya regressionstester (etikett/fas-paritet, befolkningsvikter).
- **Python-skattemodellen synkad med kalkylatorn:** `berakna_skatt_livet` använde fortfarande gamla satser (kommunalskatt 32 %, arbetsgivaravgift 31,42 % inkl. pension, moms 6,5 % platt) — ~35 % avvikelse mot JavaScript. Läser nu satserna från `livsfaser_v2.json::skattemodell`. Pensionsavgifts-toggle (`inkludera_pension`) tillagd även i Python.
- **Datafel i `livsfaser_v2.json` rättade:** `arbetsgivaravgift_exkl_pension` var 0,142 (motsade både kalkylatorn och sin egen källtext) → 0,2121 (31,42 % − 10,21 %). Statlig skiktgräns 2024 rättad 598 → 598,5 tkr. Metodnoter pekade fel fil (`nta_berakning.py` → `index.html` för grundavdrag/jobbskatteavdrag).
- **README:** rättade trasiga filsökvägar (metodrapport ligger i `docs/`, borttagen stale `skatteplattformen.html`-instruktion) och förtydligade reproducerbarheten.
- **Städning:** oanvänd `isTaker`-variabel borttagen i `index.html`.

## v2.1 — 2026-03-24

### Modellfix — en enda sanningskälla

- **`data/livsfaser_v2.json`** införd som kanonisk datakälla för livstidsförmåner (10 faser, 0–85 år, 5 kategorier, källhänvisning per värde). Både Python och JavaScript läser från samma modell.
- **Synkad skattemodell.** Python (`berakna_skatt_livet`) och JavaScript (`annualTax`) gav tidigare ~35 % olika resultat. Nu enhetlig spec: kommunalskatt ~31,75 %, statlig 20 % över 598 tkr, arbetsgivaravgift 21,21 % (ex pension), konsumtionsbaserad moms (disp × 0,85 × 18/118).
- **Pensionsavgifts-toggle** i kalkylatorn: visar skatt med/utan ålderspensionsavgiften (10,21 %). Av som standard — pensionsavgiften ger individuell pensionsrätt och inkomstpensionen är redan exkluderad på förmånssidan.
- **Förbättrad momsberäkning** — tidigare 6,5 % av nettoinkomst underskattade rejält; nu ~12 % av disponibel inkomst (SCB HE0201).
- **Verifieringstest:** `python data/nta_berakning.py --verify` — kontrollerar fasstruktur, rimliga livstidsförmåner, synkad skattemodell och COFOG-kalibrering. Körs fristående utan Excel-filen.
- Plan och resonemang dokumenterat i `docs/MODELLFIX_PLAN.md`.

## v2.0 — 2026-03-24

### Skattemodell, kalkylator, a11y & SEO

- Reviderad skattemodell med grundavdrag och jobbskatteavdrag (2024 års satser) i kalkylatorn.
- Tillgänglighet (a11y) och SEO-förbättringar i `index.html`.

## v1.0 — 2026-03-23

### Lansering

- Webbplats (index.html): prislista 25 poster, kalkylator, budgetdiagram 2010–2025
- NTA-åldersprofil: 86 åldersår × 4 kategorier × konfidensintervall, kalibrerad mot COFOG 3 011 Mdkr
- FASIT-analys: förmåner och skatt per 5-årsåldersgrupp (SCB FASIT 2022)
- Nordisk NTA-jämförelse: Sverige, Danmark, Finland (AGENTA 2010)
- OECD/EU-jämförelse: Eurostat gov_10a_exp 2022, 6 kategorier, EU-ranking
- Metodrapport v1.0: 17 akademiska referenser, redo för extern granskning
- Prislistan v2.0: 7 prio-poster med konfidensintervall, regional variation, 10-årig trend

### Datakällor v1.0

- SCB COFOG NR 2024 (3 011 Mdkr)
- Skolverket Kostnader skolväsendet 2024
- SCB ESSPROS 2022
- SKR Sektorn i siffror 2024
- ESV Tidsserier 1995–2025
- AGENTA NTA 2010 (Wittgenstein Centre)
- Eurostat gov_10a_exp 2022

---

## v1.1 — Planerat maj 2026

- Ersätt NTA-vikter sjukvård med faktisk SCB aggregerad tabell (beställd 2026-03-23)
- Uppdatera ESV 2025 slututfall (publiceras mars 2026)
- Lägg till CI för återstående 18 poster i prislistan

## v1.2 — Planerat höst 2026 (inför val)

- Extern akademisk metodgranskning publicerad
- Kommunal jämförelsesektion (SKR räkenskapssammandrag)
- OECD-jämförelse utbildning: kostnad per elev per skolform
- GitHub Actions: automatisk datahämtning ESV + Eurostat
