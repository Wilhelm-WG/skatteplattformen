# Ändringslogg

Alla anmärkningsvärda förändringar i Skatteplattformen dokumenteras här.

Format inspirerat av [Keep a Changelog](https://keepachangelog.com/sv/1.1.0/).
Versionsschema: löst SemVer — `v2.x` är nuvarande linje, mindre fixar
ackumuleras under `Unreleased` tills nästa namngivna release.

---

## [Unreleased]

### Fixed (2026-05-31, v3) — datakritik-runda
- **F1: Skiktgräns för statlig skatt 598,5 → 615,3 tkr.** 598,5 var
  2023 års värde; Skatteverket har 615 300 kr för 2024 (indexerad
  +2,6 %). Fixad på fem ställen: `annualTax` (rad 3083),
  marginalskattekurva (rad ~3307), `#skatter`-card,
  `<details>`-modellbeskrivning i livslopp, transparency JSON.
  Effekt: vid 700 tkr inkomst sjunker beräknad statlig skatt från
  17 tkr till 14 tkr (verifierat i browser).
- **F2: Kapitalskatt — ISK-medvetenhet.** Slidern beskrivs nu som
  "(valfri — direktägd portfölj)" och hjälptexten klargör att
  ISK/KF (där 80 %+ av småsparare sparar) använder schablon på
  värdet (~1 % 2024) — inte 30 % på inkomsten. Skattekvittots
  rad ändrad: "Kapitalskatt (30 % på direktägt — ISK/KF beskattas
  annars)".
- **F3: Förskola 175 → 112 tkr i åldersgrupp 0-6.** 175 tkr var
  kostnad per inskrivet barn. Verklig åldersmedel: 185 tkr ×
  85 % täckning × 5/7 av åldersgruppen ≈ 112 tkr. Modellen
  överskattade barn-utbildning med ~56 %.
- **F4: Garantipension 2024-värden.** Var: 9 403 kr/mån. Är:
  9 597 kr/mån för 67+ år / 8 597 kr/mån för under 67 (efter
  reformen aug 2023). Prislistan + detalj-fakta uppdaterade.

### Changed (2026-05-31, v3) — språk
- **P5: Kalkylator-balance reframad.** Det transaktionella språket
  "Nettobidragsgivare / Nettotagare i år — Du betalar X mer än du
  tar emot" ersatt med modell-deskriptivt: "I modellen vid denna
  ålder: befolkningssnittet betalar/tar emot ~X tkr mer ...
  Detta är välfärdsmodellens kärna: yrkesaktiva finansierar både
  barn och äldre." Plus disclaimer: "verklig konsumtion varierar
  5–10× per person". Konsistent med tidigare reframning av livslopp.

### Changed (2026-05-31, v2)
- **Hero ersatt: COFOG-vy → roterande prislapps-widget.** Användaren
  identifierade att även COFOG-vyn signalerade "personlig kalkylator"
  och att sajten istället borde börja med vad skatten konkret köper.
  Ny widget visar 8 handplockade prislappar (IVA 55k, grundskola 152k,
  MS 380k, LSS 1,3 Mkr, förskola 185k, demens 680k, cancer 420k,
  höftleds-op 72k) som roterar var 6 sek. Pausa vid hover/focus,
  manuella dots för navigation, respekterar `prefers-reduced-motion`.

### Added (2026-05-31, v2)
- **Ny sektion `#skatter` — "Skatter i korthet"** mellan hero och
  prislistan. Pedagogisk grundförklaring av sex skatter: kommunalskatt
  32,4 %, statlig inkomstskatt 20 %, moms 25/12/6 %, arbetsgivaravgift
  31,42 %, kapitalskatt 30 %, effektiv skatt ~50 %. Färgkodade kort
  (grön/amber/lila/röd) med kort förklaring + källa per skatt.
  Sammanfattande callout under: "Skatteintäkterna 2024 fördelas så här".

### Changed (2026-05-31, v2) — livscykel
- **Livscykel-sektionen förenklad till statisk illustration.** Alla
  interaktiva element borttagna: inkomst-preset-knappar (5 st),
  inkomstslider, diskonteringstoggle, inkomstprofil-knappar (4 st),
  mortalitets-dropdown (11 val), applied-badge, stat-cards och
  mortality-explain-block. Behåller endast: disclaimer + statiskt
  SVG-diagram (renderat vid init med 460 tkr/standard/nominellt) + tre
  livsfas-kort (Mottagare → Bidragsgivare → Mottagare igen).
  Bakgrund: användaren noterade att livscykeln "alltjämt är lite
  missvisande" trots tidigare disclaimers. Ny strategi: behåll formen
  som strukturillustration av välfärdslogiken, ta bort allt som ser
  ut som en personlig kalkylator.

### Changed (2026-05-31, v2) — navigation
- Nav-ordning uppdaterad: Skatter (ny) · Prislistan · Budgeten ·
  Sjukvård · Jämförelse · Framtid · Din profil · Metod. Djupdyk-länken
  (livslopp) borttagen ur nav eftersom sektionen nu är så förenklad.

### Added
- **Ny sektion `#sjukvard` — "Svensk sjukvård — vad får vi för pengarna?"**
  mellan #oecd och #framtid. Egen sektion eftersom sjukvård är 20 % av
  offentliga utgifter och har starka utfallsmått (cancer/hjärta i världs-
  topp, kapacitet bland EU:s svagaste) som förtjänar mer plats än en
  flik under #oecd. Strukturen är: snabbfakta-rad (4 stora siffror:
  83,5 år medellivslängd · 92 % bröstcancer · 1,9/1000 vårdplatser ·
  ~50 % vårdgaranti) + tre flikar:
    🛏️ **Kapacitet** — vårdplatser/1000, 2 230 stängda platser, läkare/1000,
    internationell stapeljämförelse (Sverige lägst i Norden).
    🏆 **Utfall vid sjukdom** — bröstcancer 5-årsöverlevnad 92,3 %,
    hjärtinfarkt 30-dagars 3,5 %, stroke 7,2 %, spädbarnsdödlighet 2,2.
    ⏱️ **Tillgänglighet** — primärvård 3 dagar ~50 %, planerad operation
    90 dagar ~70 %, specialist 90 dagar ~62 %, regionvariation Stockholm
    62 % vs Norrbotten 41 %.
  Pedagogisk vinkel: Sverige har gjort vägval — färre sängar och längre
  väntetider i utbyte mot världsklass-utfall när du väl får vård.
- Nav uppdaterad med "Sjukvård"-länk (Scenarion + Historik tagna bort
  ur nav för att hålla den ren — fortfarande tillgängliga via inline-
  länkar och scroll).
- Hero COFOG-rad "Hälso- & sjukvård 15 kr" länkar nu till `#sjukvard`
  istället för `#oecd`.

### Removed
- **Hero-snabbkollens livscykel-vy borttagen.** `heroAge*`, `setHskInc`,
  `HSK_SHOCKS`, `heroAgeRender` med tillhörande knappar och slider tagna
  bort. Ersatt med statisk COFOG-vy (se nedan). Bakgrund: efter
  datakritik blev det tydligt att hero-snabbkollen var livscykelmodellen
  i kompakt form — vilket dominerade första vyn med multiplicerade
  schablonsiffror som gav sken av individuell prognos. Sidans starkaste
  budskap (prislista, budget, sjukvårdsutfall) tar nu hero-positionen.

### Changed
- **Hero-snabbkollen är nu en COFOG-vy.** "Av varje 100 kr i skatt 2024
  — det här köper vi tillsammans" med fem klickbara block: Socialt skydd
  (39 kr → #budget), Utbildning (17 kr → #pristabell), Hälso- & sjukvård
  (15 kr → #oecd), Förvaltning & försvar (13 kr → #budget), Övrigt (16
  kr → #framtid). Direkt koppling till rubrikfrågan "Vad fan får vi för
  pengarna?". Klickbara länkar leder rakt in i djupare sektioner.
- **#kalkylator reframad som illustration.** Sektionsrubrik "Välfärds-
  staten — försäkringssystem" → "Hur fördelas förmåner per ålder och
  livssituation?". Subtitel signalerar tydligt "befolkningsgenomsnittet,
  inte personlig prognos, verklig variation 5–10× större". Stor gul
  callout ovan kontroller listar de tre osäkerhetskällorna (NTA ±25 %,
  FASIT ±20 %, decilgradient ±15 %).
- **#livslopp reframad som mönster, inte belopp.** Rubrik "Hela livet
  i ett diagram" → "Mönstret i välfärdsmodellen över ett liv". Stor röd
  disclaimer-ruta ovan diagrammet listar fyra konkreta osäkerheter
  (regimkonstans, mortalitet, populationsmedel, exkluderad inkomst-
  pension). Stat-cards visar nu förhållanden (skatt/förmåner %),
  korsningsålder och mönster-direction — inte Mkr-summerade
  livstidsbelopp som låtsas vara precisa. End-labels i SVG-diagrammet
  ändrade från "12 Mkr förmåner" → "Förmåner".
- **shareSkatt-text reframad** från "har betalat mer än tagit ut" till
  "befolkningssnitt — verklig variation 5–10×".
- **Prislistan: sökruta + Topp 10-filter.** Ny fritextsökruta som söker
  i title/kategori/unit/källa. Ny "🏆 Topp 10 dyraste"-knapp som
  sorterar by amount descending. Filter + sök kombineras. Antal träffar
  visas live ("12 av 36 poster"). Bakgrund: efter datakritik blev det
  tydligt att prislistan är sajtens starkaste innehåll — den får nu
  värdiga sökfunktioner.

### Fixed
- **Topp 10-anomalin i prislistan.** Tidigare visade Topp 10 "Ny
  asfaltbeläggning 1 km riksväg — 1,4 Mkr/km" som dyraste posten,
  vilket var konceptuellt fel: per-km-kostnad jämförs med per-person-
  kostnader (LSS 1,3 Mkr/år, kriminalvård 1,2 Mkr/år osv) — apples-to-
  oranges. Fix: ny `pp:false`-flagga på tre per-enhet-poster (vägunderhåll,
  asfaltbeläggning, järnvägsunderhåll). Topp 10-filter exkluderar
  `pp:false` så jämförelsen blir äpplen-mot-äpplen: personnära
  samhällskostnader. Resultat: nya Topp 10 leds av LSS-assistans,
  kriminalvård, demens, ätstörning, cancer, MS, högskola, förskola,
  hemtjänst — alla personnära kostnader som berättar starkare historia.
- **Död `.hsk-*`-CSS borttagen.** ~50 rader CSS-regler för element som
  togs bort vid hero→COFOG-bytet (.hsk-age, .hsk-stat, .hsk-net,
  .hsk-lc-*, .hsk-bar-*, .hsk-shock, .hsk-link, .hsk-slider*,
  .hsk-inc-*, .hsk-stat-val.flash, .hsk-eyebrow, .hsk-phase-*).
  Behåller .hero-snabbkoll + .hsk-accent-line (used) och .hsk-cofog-*
  (new). Sparar ~3 KB.

### Earlier this Unreleased cycle
- **Sidans narrativa båge omflyttad.** `#livslopp` ("Hela livet i ett diagram")
  flyttades från position #2 (direkt efter hero) till efter `#framtid`.
  Bakgrund: kritisk review fann att livsloppsdiagrammet — sajtens
  analytiskt mest sofistikerade element — också är dess mest tveksamma
  som öppningshook: hög kognitiv tröskel, osäkerhet som multipliceras
  över 85 år, transaktionellt framing-laddat, ingen direkt aktuell
  policyrelevans. Prislistan, budgeten, OECD-jämförelsen och framtids­
  utmaningarna är starkare öppningsargument (konkret, faktabaserade,
  policyrelevanta inför val 2026).
- Ny **TL;DR-sektion** (`#tldr`) direkt efter hero: fyra stora siffror
  som ramar in sajten — 3 011 Mdkr (vart), 55 000 kr IVA-dygn (vad),
  41,4 % skattekvot (vs världen), +90 Mdkr finansieringsgap 2030
  (varthän). Varje kort är en länk till respektive djupare sektion.
  Resultat: användaren får sajtens fyra huvudteser i första vyn och
  kan navigera direkt till intresseområde.
- **Personliga profil-sektioner flyttade efter framtid** (option B i
  reviewen). Kalkylator, sensitivitet och scenarion låg tidigare före
  budget/oecd/framtid, vilket avbröt fakta-bågen. Nu är ordningen:
  konkret fakta (prislista → budget → oecd → framtid) → personligt
  (kalkylator → scenarion) → djupdyk (livslopp). Detta fullföljer den
  inverterade-pyramid-strukturen: användaren får sajtens fyra teser
  först, kan sluta läsa när som helst med behållet värde, och
  fördjupningen finns för den engagerade.
- **Navigation omordnad** för att matcha nya narrativa båge:
  Prislistan · Budgeten · Jämförelse · Framtid · Din profil ·
  Scenarion · Djupdyk · Historik · Metod
  (Livslopp-länken döpt om till "Djupdyk" för att signalera dess nya
  roll som fördjupning snarare än introduktion.)
- **Livsloppsberäkningen synkar nu hushållstyp, kapital och inkomstgradient
  från grundkalkylen.** Tidigare kasserade `calcLifecycle()` all variation
  och använde råa `STAGES`. Resultat: en barnfamilj (familj) vs ensamstående
  visar nu ~30 Mkr vs 23 Mkr i livsförmåner (skillnad +30 %), och
  låginkomstprofil 200 tkr visar 26 Mkr vs höginkomst 800 tkr 21 Mkr
  (−19 %, p.g.a. inkomstgradient på sjukvård + socialt). Hushållsändring
  och kapital-slider triggar nu omrendering av livsloppsdiagrammet.
- **Sektionsrubrik ändrad** från "Välfärdsstaten är ett livslångt kontrakt"
  till "Välfärdsstaten — ett kollektivt försäkringssystem över livet".
  Hero-snabbkollens netto-indikator omformulerad från transaktionellt
  språk ("mer mottaget än betalat") till modell-deskriptivt ("i modellen
  — kollektivt finansierade tjänster ~X Mkr över skatt vid din ålder").
  Adresserar reviewens punkt G: framing-laddade "kontrakt"-formuleringar
  som motsäger metodik-steg 04 (välfärden som försäkring, inte sparkonto).
- **Stat-cards i livsloppsdiagrammet visar nu propagerad osäkerhet.**
  ±22 % förmåner och ±12 % skatt adderas kvadratiskt (okorrelerat) till
  ett netto-osäkerhetsmått. Exempel: vid 460 tkr standardprofil visas
  "+3 Mkr · ±3 Mkr — överlappar noll om |netto| < 3" istället för bara
  "+3 Mkr". Korsningsåldern markeras nu också med "~±3 år givet osäkerhet".
- **Stat-card rubriker omformulerade** från "Livstidsnetto" → "Netto vid
  85 år" för transparens om antagandet.

### Added
- **Mortalitets-overlay i livsloppsdiagrammet** (`#livslopp`): ny dropdown
  "Förväntad livslängd" med 11 kategorier baserade på SCB BE0701
  Livslängdstabeller 2018–2022. Vid val ritas vertikal markering i
  diagrammet vid förväntad ålder, område efter dimmas, och nytt stat-card
  visar "Netto till X år vs hela 85 år". Adresserar den enskilt största
  pedagogiska bristen i den tidigare versionen: att diagrammet implicit
  antog att alla lever till 85, vilket inverterar systemets fördelnings­logik
  (höginkomsttagare lever 10 år längre och har därmed mer tid att hämta hem
  äldreomsorgs- och sjukvårdsförmånerna). Inkluderar utbildningsgradient
  (förgymnasial vs eftergymnasial: ±6 år för män) och inkomstgradient
  (decil 1 vs decil 10: ±10 år för män).
- `data/livslangd.json` — kanonisk källa för medellivslängd per kön ×
  utbildning + per inkomstdecil, med osäkerhetsmått, pedagogisk kontext
  och implementations­notiser.
- `scripts/verify_data_sync.py` — kontrollerar att inline-data i `index.html`
  stämmer med `data/*.json`. Spot-checks på sjukfrånvaro-serien, statsskuld
  %-BNP, Gini, befolkning 80+ och internationell jämförelse. Förhindrar tyst
  drift mellan canonical JSON och inline-värden. Körs utan beroenden:
  `python3 scripts/verify_data_sync.py`. Fångade en äkta divergens vid första
  körning (Japan 252 % vs 255 %).
- `data/statsskuld.json`: nytt block `per_invånare_2025` (119 000 kr/inv,
  räntekostnad 1 232 kr) — så HTML:s 2025-prognosvärden har JSON-motsvarighet.
- `data/statsskuld.json`: `sjukfrånvaro_historia.diagnoser_2024_långa_sjukfall`
  separat block (psykisk 63 %) — skiljer från alla-sjukfall (psykisk 46 %).
- `data/statsskuld.json`: Polen (54 %) och Nederland (47 %) tillagda i
  internationell statsskulds-jämförelse 2024.

### Changed
- `index.html` demografi-fliken: befolkning 80+ 2024 från 635 000 → 601 000
  (matchar SCB Befolkningsframskrivning 2025–2070). 2030-prognos 812 000 →
  668 000 (+11 %, inte +28 %). 2040-prognos 960 000 → 895 000. Lade till
  2050-stapel (1 080 000) för full SCB-serie.
- `data/statsskuld.json` `sjukfrånvaro_historia.serie` omskriven från 15
  glesa år (med anomalt lågt 2024 = 8,5 dgr) → 25 täta år 2000–2024 matchande
  HTML-chartens trendkurva. 2024-värdet 14,2 dgr flaggat för verifiering.
- `data/statsskuld.json`: Japan 255 % → 252 % (matchar IMF WEO 2024 och
  HTML-chart).

### Notes
- 2024-värdet i sjukfrånvaro-serien (14,2 dgr) ligger högre än FK:s
  preliminära kvartalsstatistik (~11 dgr). Bör verifieras mot FK:s officiella
  årsrapport för 2024 när den publiceras under Q2 2025.

---

## [v2.1] — 2026-05-29

**Commit:** `028ea94` — Model improvements.

### Added
- Hushållstypsmultiplikatorer (ensam / par / familj / ensam_barn) baserat på
  SCB FASIT 2022.
- Inkomstgradient — decil-multiplikator för sjukvård och socialt skydd.
- Karriärprofiler (standard / kort_utb / lang_utb / avbruten) med olika
  inkomstbanor.
- Kapitalinkomst-slider (0–1000 tkr) med 30 % schablonskatt, separat post
  i skattekvittot.
- Sensitivitetsanalys — tornado-diagram som varierar kommunalskatt ±3 pp.
- 2 % real diskontering av kumulativ nettoberäkning.
- `CLAUDE.md` — projektöversikt och konventioner för Claude Code.

---

## [v2.0] — 2026-03-23 → 2026-03-28

Stor uppgradering över sju arbetsdagar. Sammanställt här av kronologi.

**Commits:** `5e73be2` (initial), `98064ae` (v2.0), `bd25d8a` (Gini),
`a134e91` (Sprint 2), `17087c4` (Sprint 3 + scenarier), `7ca012e` (Livslopp),
`72651f2` (Hero), `582461e` (Sprint 4), `f42b258` (Sprint 5), `1af156d`
(peer-review fixes), `9a85dc8` (datakonsistens), `2eebf7f` (UX),
`257f5e6` (kalkylationsbuggar), `135e7fd` (peer-review final).

### Added
- Ny skattemodell: kommunalskatt 32,37 %, statlig skikt 598 tkr, reducerad
  arbetsgivaravgift för 66+, JSA enligt 2024 års regler.
- Sektioner: Framtida utmaningar, Historiska trender (med flikar för
  statsskuld, Gini, sjukfrånvaro, demografi), Metodik.
- Livslopp-sektion med 10 livsfaser, hero-snabbkoll, nettoindikator,
  inkomstprofiler, scenariokalkylator (4 scenarier: barnfamilj, ensamstående,
  kronisk, anhörigvårdare), livsloppsdiagram 0–85 år.
- Prislistan utökad till 25+ poster, varav 12 nya för kroniska sjukdomar
  (cancer, MS, KOL, LSS, demens, RA, ätstörning, m.fl.).
- Tillgänglighet (a11y) — alla SVG-diagram med `role="img"` och `aria-label`.
- SEO — meta-taggar, openGraph, structured data.
- Datafiler: `nta_profil_v2.json` (86 år × 4 kategorier), `fasit_full.json`,
  `fasit_analys.json`, `livsfaser_v2.json`, `oecd_utfall.json`,
  `statsskuld.json`, `framtidsutmaningar.json`, `budget_analys_2025.json`.

### Fixed
- Kalkylationsbuggar: enhetlig inkomstprofil, dubbelräknad pensionsreduktion
  borttagen.
- UX: nav-highlight, share-state-sync, VDA-balans, lifecycle-bar, jämförelse-vy.
- Datakonsistens: utbildning %, solidaritetstexter, navigation, NATO-källa.

### Datakällor v2.0
- SCB COFOG NR 2024 (3 011 Mdkr total offentlig sektor)
- Skolverket Kostnader skolväsendet 2024
- SCB ESSPROS 2022
- SCB FASIT 2022
- SKR Sektorn i siffror 2024 + KPP-databas
- ESV Tidsserier 1995–2025
- AGENTA NTA 2010 (Wittgenstein Centre)
- Eurostat gov_10a_exp 2022
- Riksgälden statsskuldsstatistik
- IMF World Economic Outlook 2024
- OECD Revenue Statistics 2025, Health Statistics 2024, PISA 2022,
  Education at a Glance 2024, Income Distribution Database
- UBS Global Wealth Report 2024
- Karimi et al. (2024) Fiscal Studies, Roine & Waldenström (WID.world)
- Försäkringskassan Sjukpenningstatistik
- Transparency International CPI 2024

---

## [v1.0] — 2026-03-23

**Commit:** `5e73be2` — Initial launch.

### Lansering
- Webbplats (`index.html`): prislista 25 poster, kalkylator, budgetdiagram
  2010–2025.
- NTA-åldersprofil: 86 åldersår × 4 kategorier × konfidensintervall,
  kalibrerad mot COFOG 3 011 Mdkr.
- FASIT-analys: förmåner och skatt per 5-årsåldersgrupp (SCB FASIT 2022).
- Nordisk NTA-jämförelse: Sverige, Danmark, Finland (AGENTA 2010).
- OECD/EU-jämförelse: Eurostat gov_10a_exp 2022, 6 kategorier, EU-ranking.
- Metodrapport v1.0: 17 akademiska referenser, redo för extern granskning.
- Prislistan v2.0: 7 prio-poster med konfidensintervall, regional variation,
  10-årig trend.

---

## Backlog (planerat)

### Inför val 2026-09-13
- **Val 2026-sektion**: partiernas skattepolitiska förslag, en sida per parti
  med faktabaserade jämförelser.
- **KPI-deflator-toggle**: reala vs nominella belopp i historiska diagram.
- **API/Källor-sektion**: dedikerad sektion med download-knappar för alla
  `data/*.json` + GitHub-länk + CC0-licensbadge.
- **Layout-omstrukturering**: Prislista före Livslopp; ny hero-snabbkoll.

### Data
- Verifiera FK sjukfrånvaro 2024 mot årsrapport (Q2 2025).
- KPP per åldersår sjukvård från SCB (beställd mars 2026, kritisk för att
  minska ±25 % osäkerhet i sjukvårdsprofil).
- ESV 2025 slututfall.

### Strukturella
- Synka Python-modellen (`data/nta_berakning.py`) mot `livsfaser_v2.json`
  som enda sanningskälla. För närvarande har Python och JavaScript två
  uppsättningar förmånsvärden, se `docs/MODELLFIX_PLAN.md`.
- Verifieringstest: `python data/nta_berakning.py --verify` mot COFOG.
- Konvertera `docs/*.docx` till Markdown för spårbar versionering.

### Modellgranskning (`Modellgranskning_Skatteplattformen.docx`, 14 punkter)
- Genomgång av vilka av de 14 punkterna som täcks vs. återstår.

---

## Konventioner

- **Commit-meddelanden:** På engelska, beskrivande.
- **CHANGELOG-poster:** På svenska för konsistens med UI-text.
- **Sektioner per release:** Added / Changed / Deprecated / Removed / Fixed /
  Security / Notes (per Keep a Changelog).
- **Datakällor:** Källhänvisning hör hemma i JSON-filerna eller i `index.html`
  vid varje datapunkt — inte här. CHANGELOG dokumenterar att data
  uppdaterats, inte vad det faktiska värdet är.
