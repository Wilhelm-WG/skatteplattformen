# Ändringslogg

Alla anmärkningsvärda förändringar i Skatteplattformen dokumenteras här.

Format inspirerat av [Keep a Changelog](https://keepachangelog.com/sv/1.1.0/).
Versionsschema: löst SemVer — `v2.x` är nuvarande linje, mindre fixar
ackumuleras under `Unreleased` tills nästa namngivna release.

---

## [Unreleased]

### Added (2026-10-27) — OECD-jämförelsen vidgad: läkemedel, utbildning & klimat globalt

Fortsättning på den globala "vs världen"-utbyggnaden (samma länderuppsättning:
USA, Japan, Tyskland, Frankrike, Italien + OECD):

- **Läkemedel per capita** (nytt sjukvårdsdiagram): USA 1 432 $, Tyskland 1 042,
  Japan 836, OECD/Frankrike 766, Italien 748, **Sverige 576** (bland lägst).
  USA betalar ~2,5× Sverige — främst högre priser, inte mer medicin.
  Källa: OECD Health Statistics (PPP, 2020–2022).
- **PISA 2025 globaliserad** (matematik + naturvetenskap): Japan utklassar
  (525/538); Sverige (464/485) i nivå med OECD, under Östasien; USA starkare i
  naturvetenskap (502) än matte (463). Källa: OECD PISA 2025.
- **Klimat & energi** (fliken "Miljö" omdöpt): CO₂ per capita globaliserad —
  Sverige 3,6 t, Frankrike 4,5, Italien 5,2, OECD 6,4, Tyskland 7,0, Japan 7,9,
  **USA 14,3** (~4× Sverige). Källa: IEA / World Bank (2023).

### Added (2026-10-27) — OECD-jämförelsen: Sverige vs resten av världen

Sjukvård-fliken var tidigare nästan bara nordisk. Fyra nya globala diagram med
en bredare länderuppsättning (USA, Japan, Tyskland, Frankrike, Italien + OECD),
all data från OECD Health at a Glance 2025 / Health Statistics:

- **Hälsoutgifter per capita** (PPP$, 2023): USA 13 818, Tyskland 8 503, Sverige
  7 364, Frankrike 6 848, OECD ~6 000, Japan 5 619, Italien 4 847.
- **Medellivslängd** (2025): Japan 84,1, Sverige 83,4, Italien 82,7, Frankrike
  82,5, OECD 81,0, Tyskland 80,8, USA 78,4.
- **Undvikbar dödlighet** /100k (2023, lägre=bättre): Japan 134, Italien 146,
  Sverige 150, Tyskland 195, OECD 237, USA 336.
- **Läkare per 1 000** (2023–24): Italien 5,8, Tyskland 4,8, Sverige 4,5, OECD
  3,9, USA 2,7, Japan 2,6.

Berättelsen: USA spenderar ~1,9× Sverige men lever kortast och har mer än dubbelt
så hög undvikbar dödlighet; Japan/Italien spenderar mindre än Sverige med minst
lika bra utfall. Nya färgklasser för länderna; den statiska (och nu felaktiga)
legenden borttagen eftersom varje stapel redan är namnmärkt. De nordiska
detalj­diagrammen (spädbarnsdödlighet, sängar, cancer) behålls oförändrade.

### Fixed/Changed (2026-10-27) — Kriminalvård-kostnad + systematiskt språksvep

- **Kriminalvård uppdaterad:** nya underlag visar högre kostnad. Dygnskostnad
  2024 (Kriminalvårdens regeringsuppdrag): anstalt 3 874 kr/dygn ≈ **1,41 Mkr/år**
  (tidigare 1,2 Mkr), häkte 3 563 kr/dygn. Lade till utbyggnadskontexten:
  anslaget mångdubblas (~11 → 28,5 Mdkr) när platserna byggs ut (~9 000 → mål
  ~27 000 till 2033) och nybyggda platser är dyrare än befintliga.
- **Systematiskt språksvep:** bytte ut abstrakta/AI-stela begrepp i synlig copy —
  "välfärdslogiken" → "mönstret i välfärden" / "hur välfärden fungerar" (3 ställen
  + diagrammets aria-label), engelska "Framing" → "hur det framställs". Rättade
  ett grammatikfel i solidaritetstexten ("Det årets nettoflöde" → "Årets
  nettoflöde") och en inkonsekvent stavning ("netto-mottagare" → "nettomottagare").

### Fixed/Changed (2026-10-27) — Data- och språkgranskning (användarfeedback)

- **Kapitalskatt-kortet rättat:** stod att 30 % "tas ut via ISK/KF" — vilket är
  fel. ISK/KF beskattas med en årlig schablon (~1 % av värdet), inte 30 % på
  vinsten. Förtydligat att 30 % gäller direktägt sparande.
- **Kommunalskatt förtydligad:** kortet säger nu att den finansierar både
  **kommun och region** (tidigare otydligt). Spann uppdaterat till 28,9 %
  (Österåker, lägst) – 35,7 % (Dorotea) i linje med SCB 2026.
- **Ny prislista-post:** "Plats på SIS ungdomshem (tvångsvård), ett dygn" —
  ~9 500 kr/dygn med ärligt spann (7 000–13 000 kr beroende på enhet och
  säkerhetsnivå; vårdavgift LVM 2025 ~6 950 kr/dygn). Prislistan 36 → 37 poster.
- **Språk:** bytte ut AI-stela begrepp mot naturligare svenska —
  "korsningsåldern" → "vänder det runt 30 års ålder", "osäkerhetsenvelopp" →
  "osäkerhetsspann", "livscykellogik"/"livscykelkontraktets mening" →
  vardagligare formuleringar, "nettouttag" → "tar emot allt mer i tjänster".

### Added (2026-10-27) — Hero-krok: "Vart går din 100-lapp?" (browser-verifierad)

Hero-widgeten (de roterande "Verkliga prislappar") har nu en växel
**[Prislappar] ↔ [Din 100-lapp]**. Den nya vyn är en animerad top-down-
fördelning: av varje 100-lapp i skatt går 39 kr till socialt skydd, 17 till
utbildning, 15 till vård, 8 förvaltning, 5 försvar, 5 infrastruktur, 11 övrigt
(COFOG 2024). Staplarna fylls staggrat vid växling (respekterar
`prefers-reduced-motion`). Kompletterar de befintliga prislapparna: botten-upp
(vad saker kostar) + top-down (vart din krona går) i samma krok.

### Added (2026-10-27) — Delbart resultatkort (prototyp, browser-verifierad)

Största hävstången för yngre räckvidd: personligt + delbart. Knappen "Spara &
dela din profil som bild" i kalkylatorn genererar en varumärkt **1080×1080-bild**
(client-side Canvas, ingen backend) av användarens profil — ålder, inkomst,
kommun, offentliga tjänster, skatt och netto — redo för Instagram/Snapchat.
Ladda ner eller dela via Web Share API (med fil-fallback till nedladdning).
Modalen ligger på body-nivå så `position:fixed` inte fångas av kalkylatorns
transform. **Formatväljare:** 1:1 (inlägg) eller 9:16 (story, 1080×1920) för
TikTok/Stories.

Bifix: `updateLifecycle` kraschade på ett borttaget element (`lc-inc-val`) utan
null-skydd, vilket hindrade livscykeln från att uppdateras vid kommun-/hushålls-
byte. Åtgärdat.

### Added (2026-10-27) — Metodrapport v2.0

`docs/skatteplattformen_metodrapport_v2.docx` — uppdaterad akademisk
metodrapport som dokumenterar hela modellen sedan v1.0 (mars 2026): den nya
skattemodellen, livscykelmodellen, hushålls-/inkomst-/kommun-dimensionerna,
inkomstdifferentierad pension, datasynk-skriptet med SCB-makroavstämning,
2026 års dataårgång och en detaljerad ändringslogg. v1 behålls som historik.
README/CLAUDE.md pekar nu på v2.

### Changed (2026-10-27) — P4: inkomstdifferentierad pensionskvot (+ dokumenterade finjusteringar)

- **Inkomstdifferentierad pensionskvot:** ny `pensionKvot(peak, band)` ersätter
  den platta 70 %/50 %-pensionen i livscykeln. Låg inkomst skyddas av
  garantipensionen (~80 % vid 65–74), hög inkomst tappar över inkomstpensions­
  taket (~52–55 %), och ~18 pp lägre vid 75+. Medianinkomst (~500 tkr) ger
  ~69 %/51 % — i linje med den tidigare schablonen. Källa: Pensionsmyndighetens
  typfall. Metodrutan uppdaterad.
- **Förstärkt JSA för 66+** (granskningens P4) dokumenterad som en medveten
  förenkling i metodrutan — modellen antar pensionsinkomst vid 65+ och
  applicerar inte det förstärkta jobbskatteavdraget för den som arbetar vidare
  (fel ~5–10 tkr/år för gruppen).
- **Nuvärde/KPI-toggle** (P4) bedömd som löst: hero-snabbkollen är borttagen och
  livscykeln visar numera årsflöden (ingen nominell livstidssumma); kumulativa
  belopp (`calcCumulativeNet`) diskonteras redan 2 % real.

### Fixed (2026-10-27) — Två formateringsfel i kalkylatorn (visuellt verifierade)

- **Pensionsavgift-rutan:** förklaringstexten spillde ut utanför rutans högra
  kant (`display:flex` + `white-space:nowrap` gjorde raden bredare än kolumnen).
  Rutan staplar nu etikett och förklaring vertikalt (`flex-direction:column`)
  så texten ryms inuti.
- **"Kollektiva nyttigheter"-stapeln:** fyllningsfärgen var halvtransparent vit
  (`rgba(255,255,255,.25)`) och smälte ihop med det mörka spåret. Bytt till en
  synlig grå (`#8A8D94`).

Verifierat i webbläsaren (desktop): nav på en rad, kommunväljare, livscykel­
diagrammets två korsningar och "Visste du att"-remsan renderas korrekt.

### Added/Changed (2026-10-27) — Fyra genomlysningspunkter (P3/P4)

- **Kommunväljare i kalkylatorn:** ny rullgardin (Rikssnitt 32,38 %, Stockholm,
  Göteborg, Malmö, Uppsala, Österåker 28,93 % lägst, Dorotea 35,65 % högst) som
  sätter `currentKs` vilken `annualTax()` använder. Kommunalskatten varierar
  28,9–35,7 % ≈ 17 tkr/år. Skattekvittots etikett och delnings-URL (`ks`)
  följer valet. Källa: SCB Kommunalskatterna 2026 (kommun + region).
- **Makroavstämning mot SCB** i `verify_data_sync.py`: nya checkar som flaggar
  om COFOG-totalen (3 011 Mdkr) eller skattekvoten (41,4 %) driftar från SCB:s
  utfall (>5 %). Dokumenterar även referensen för totala skatteintäkter 2024
  (~2 644 Mdkr). 11 → 13 checkar.
- **Formaliserade osäkerhetsintervall:** metodrutan dokumenterar nu grunden för
  ±20–25 %/±10–15 %-banden (FASIT-variationskoefficient, KPP regional spridning,
  kommunalskattespridning 28,9–35,7 %) och anger explicit att det är en *bedömd
  envelopp* — inte formella konfidensintervall; Monte Carlo återstår.
- **Harmoniserad prisårgång:** förmånsbeloppens etiketter rättade från
  "2026 priser" till "2024 års priser" (de bygger på COFOG 2024), och
  prislistans motstridiga rubrik/fotnot gjorda konsekventa (enhetskostnader
  2024, avgifter/FK-belopp 2026).

### Fixed (2026-10-27) — Navigering (regressionsfix) + omarbetad delning

**Navigering:** "Om oss"-länken som lagts till i huvudnavigeringen gjorde raden
för bred (9 länkar + en längre knappetikett) så att det sticky-fästa
rubrikfältet spillde över och täckte innehållet. Länken borttagen ur navet
(sektionen nås fortfarande via footern), vilket återställer den enradiga
layouten.

**Delning (`shareSkatt` / `buildShareURL` / `readURLParams`):** knappen delar
nu en **djuplänk som återskapar hela vyn** — ålder, inkomst, pensionstoggle,
hushållstyp och kapitalinkomst — i stället för en statisk textblobb. Mottagaren
öppnar länken och ser exakt samma beräkning. Web Share API med urklipps-fallback
och uppdaterat adressfält. Knappen heter nu kort **"Dela"** (tidigare "Dela
fakta"/"Dela min profil"). Rådata finns även fortsatt som nedladdningsbar
transparens-JSON i metodavsnittet.

### Changed (2026-10-27) — "Visste du att"-remsan: redesign + faktagranskning

**Interaktion (`index.html`):**
- Längre uppehåll per fakta: 6 s → **11 s**.
- Manuell bläddring: **‹ ›-pilar**, räknare (t.ex. "3 / 24") och **pausknapp**.
  Remsan pausar automatiskt vid hover/fokus så man hinner läsa.
- **Dela denna fakta** (↗-knapp) delar den fakta som visas just nu (Web Share
  API + urklipps-fallback) — tidigare kunde man bara dela kalkylatorns
  profil via nav-knappen (som nu heter "Dela min profil" för tydlighet).
- Respekterar `prefers-reduced-motion` (ingen autoväxling). De 24 små
  navigeringsprickarna ersatta av pilar + räknare.

**Faktagranskning — rättade fel:**
- **Elproduktion:** "88 % förnybar el" var fel (på två ställen) → ~70 %
  förnybar el, 99 % fossilfri inkl. kärnkraft (Energiföretagen/Ekonomifakta 2024).
- **Kultur:** "1 010 kr/inv, mer än försvaret 2010" var en falsk jämförelse
  (försvar 2010 = 4 185 kr/inv) → staten lade 9,1 Mdkr på kultur 2024
  (~860 kr/inv), realt lägre per invånare än för tio år sedan (Kulturanalys).
- **Tandvård (djupverifierat):** fri tandvård gäller t.o.m. året man fyller
  **19**, inte 23 — åldersgränsen *sänktes* 23→19 den 1 jan 2025
  (prop. 2023/24:158). Rättat på tre ställen (faktaremsa, prislistekort
  "Tandvård 0–19 år", detaljpanel) + ATB 300–600 kr/år (ej ~3 300).
- **Sjuksköterske-VFU (djupverifierat):** "~4 000 timmar" var ~3× för högt →
  ~25–40 veckor VFU; EU:s yrkesdirektiv (2005/36/EG) kräver minst 2 300 h
  klinisk praktik.
- **Barnvaccination:** faktaremsans 7 200 kr synkad till prislistans sourcade
  ~4 200 kr/barn; den osäkra besparingssiffran borttagen.
- Verifierade (oförändrade): WJP Rule of Law 2025 (alla fyra nordiska i topp 4),
  medellivslängd, spädbarnsdödlighet, högskoleutbildade 51,8 %.

### Changed (2026-10-27) — PISA 2025-resultat

OECD PISA 2025 publicerades 2026-09-08. Uppdaterat från PISA 2022 i
`index.html` (OECD-jämförelsekort matematik + naturvetenskap, framtids­trend,
utbildningsfakta) och `data/oecd_utfall.json`:
- **Sverige:** matematik 464 (−18 sedan 2022), läsning 466 (−21),
  naturvetenskap 485 (förändring ej statistiskt säkerställd). Största
  nedgången i svensk PISA-historia; bred nedgång i hela OECD.
- **Jämförelse (matematik/naturvetenskap):** Danmark 471/478, Finland 469/504,
  Sverige 464/485, OECD-snitt 463/482, Norge 452/470.
- Sverige ligger nu i nivå med OECD-snittet i alla tre ämnen.
- Källa: OECD PISA 2025 Volume I + Skolverket (2026-09-08).

### Fixed (2026-10-27) — Livscykeldiagram, rubriktypsnitt, Om oss & valframing

**Livscykeldiagrammet ("Mönstret i välfärdsmodellen över ett liv"):**
- Ritar nu **årliga** flöden per ålder i stället för ackumulerade. Den
  ackumulerade vyn fick barndomens förmånsförsprång (18 år utan skatt) att
  aldrig hinnas ikapp, så kurvan såg ut som att alla var nettomottagare hela
  livet — tvärtemot rubriken och faskorten. Årsvyn visar nu den faktiska
  bidragsgivarfasen med två korsningar (mottagare → bidragsgivare → mottagare).
- Död kod borttagen (lc-stats/lc-applied/lc-mortality-explain refererade
  borttagna DOM-element och en odefinierad variabel).

**Typografi:**
- Rubriker: Fraunces → **Source Serif 4**. Fraunces tvingades till display-läge
  (opsz 144, WONK/SOFT-axlar) vilket gav dramatiska, kvirkiga former. Source
  Serif 4 är renare och mer förtroendeingivande. Brödtext (Inter) och siffror
  (IBM Plex Mono) oförändrade.

**Om oss & footer:**
- `#om-oss`-korten använde odefinierade CSS-tokens (`--bg1`/`--ink1`) → ingen
  bakgrund; bytt till `--paper`/`--ink` + designsystemets skuggor/radier.
  Versionstexten uppdaterad. Footerns döda platshållarlänkar kopplade till
  riktiga ankare/GitHub/mailto, © 2025 → 2026, "Om oss" tillagd i navigeringen.

**Metadata:**
- Tog bort "inför valet 2026"-framing (valet hölls sept 2026) i meta-keywords
  och Schema.org-beskrivning.

### Changed (2026-06-16) — Designomarbetning: ny typografi + designsystem

Visuell omarbetning. Endast CSS och `<head>` — ingen HTML-struktur,
JavaScript, data eller modell rörd, så kalkylator, diagram och alla
beräkningar fungerar oförändrat.

**Typografi:**
- Rubriker: Playfair Display → **Fraunces** (variabel, `font-optical-sizing`).
  H1 i vikt 700 (WONK av) för en graciös, redaktionell ton utan den
  kompakta tyngden i Black-vikten.
- Brödtext: IBM Plex Sans → **Inter** (med `cv05`/`ss01`, lätt negativ
  spärr). IBM Plex Mono behålls för alla siffror.
- Kontinuerliga viktintervall (400–900) begärs så alla vikter renderas
  skarpt.

**Designsystem (nya tokens i `:root`):**
- Varmare papper (`--bg` #F2EFE8 → #F4F1EA), egen kortyta `--paper`.
- Trestegs skugg-/höjdsystem (`--shadow-sm/md/lg`) och enhetliga
  hörnradier (`--r`/`--r-sm`) ersätter spridda 2/3/4 px-värden.

**Komponenter:**
- Navigering: glaseffekt (backdrop-blur) + animerad grön understrykning;
  aktiv länk behåller understrykningen.
- Hero-widget (`.hero-snabbkoll`): gradientdjup + skugga; roterande
  prislapps-belopp i ljusare grönt (`--green2`) för bättre kontrast.
- Sektionsrubriker: grön ögonbrynslinje, mer vertikal rytm (72→88 px).
- Prislistan: platt hårlinjerutnät → upphöjda papperskort med hover-lyft.
- Knappar, filterpiller, diagram-, framtids-, käll- och OECD-kort:
  enhetliga skuggor, radier och hover-tillstånd.
- Avslutande citat: rikare grön gradient, större Fraunces-kursiv.

Verifierad på desktop (1280 px) och mobil (390 px).

### Changed (2026-06-01, tredje rundan) — FK-belopp + skatteutgifter 2026

**Försäkringskassan-belopp 2026 (FK aktuella belopp 2026-01):**
- Föräldrapenning max: 1 116 → **1 259 kr/dag** (80 % av SGI-tak
  10 × PBB 59 200 = 592 000 kr)
- Sjukpenning max: 1 116 → **1 259 kr/dag**
- Sjukpenning genomsnitt: 870 → ~920 kr/dag (indexering)

**Högkostnadsskydd vården (1177.se 2026):**
- Frikortstak: 1 300 → **1 450 kr/år** — höjt 2026
- Cancer, höftleds-op, depression, KOL m.fl. prislappar
  uppdaterade (6 ställen total)

**Skatteutgifter 2024 → 2026 (Skr. 2025/26:98, publ. april 2026):**
- Jobbskatteavdrag: 152 → **218,8 Mdkr** (+44 %, JSA-utvidgning +
  indexering)
- Nedsatt moms livsmedel: 27,3 → **62,2 Mdkr** (+128 %, momssänkning)
- Förhöjt grundavdrag äldre: ny post **68,7 Mdkr**
- Avkastning eget hem: ny post **29,3 Mdkr**
- Pensionsmedel avkastningsskatt: ny post **24,7 Mdkr**
- Nedsatt energiskatt el (industri): ny post **13,6 Mdkr**
- ROT-avdrag: 12 → 10 Mdkr
- RUT-avdrag: 4 → **9,2 Mdkr** (höjt tak)
- Totalt 11 nya skatteutgifter-poster ersätter de 12 gamla
- Kommentarer + chart-rubrik uppdaterade

**Övrigt:**
- Prislista subtitle: "Alla belopp 2024 priser" → "2026 priser där
  tillgängligt"
- Livslopp-disclaimer: "antar 2024 års skatteregler i 85 år" → "2026"
- Frikort i sjukvårds-fakta: 1 300 → 1 450 kr
- ESV-källkort omskrivet: "tidsserier 1995–2024" → "+ BP2026"
- Företagsstöd-källor uppdaterade till BP2026

Resultat efter 3 rundor: 2024-träffar 206 → 203 (de återstående är
äkta källhänvisningar — t.ex. "OECD Health 2024", "FK 2024" =
rapport-publikationsår). 2026-träffar 111 → 135 (+24).

Källor använda:
- Försäkringskassan: aktuella belopp 2026
- 1177.se: högkostnadsskydd 2026 (1 450 kr)
- Skr. 2025/26:98 Redovisning av skatteutgifter 2026

### Changed (2026-06-01, andra rundan) — Fler 2024→2025/2026
Fortsättning på BP2026-uppdateringen.

**Skattekvot 2024 → 2025:**
- TL;DR-kortet: 41,4 % (2024) → **41,2 % (2025)**
- Chart-serien förlängd: lagt till 2025-datapunkt
- Framtid-flik "Finansieringsgapet": 46,7 % (2010) → 41,2 % (2025),
  motsvarar ~370 Mdkr/år
- Historik-flik "Skattekvot": rubriktal 2024 → 2025, OECD-snitt
  uppdaterat 33,8 % → 34,1 % (2024 — senaste OECD)

**Försvarsbudget framtid-flik:**
- 175 Mdkr (preliminär) → **225,0 Mdkr (2026)** — BP2026 officiella
- Bar-chart: 138 (2025) → 169 + 225 (2026) + ~252 (2030)
- NATO-mål-kontext uppdaterad — Sverige når 3,5 % redan 2026

**Demografi:**
- Befolkning 80+ "2024: 635k → 2030: 812k" → "2025: 636k → 2030:
  668k" (SCB Framskrivning 2026-2070)
- Bar-chart utbyggd: 2024 / 2025 / 2030 / 2040 / 2050
- Försörjningskvot 0,77 (2023) → 0,78 (2025)

**Kalkylator-text:**
- "(tkr, 2024 priser)" → "(tkr, 2026 priser)" — både template-string
  och static label
- Osäkerhetsnotis "Alla belopp nominella 2024-priser" → "2026-priser"
- Metod-beskrivning: kommunalskatt 32,37 → 32,38 %, skiktgräns
  615,3 → 643 tkr
- "3 011 Mdkr 2024" → "~3 280 Mdkr 2026 (statsbudget 1 542 Mdkr)"
- COFOG-fördelnings-text uppdaterad

**Transparency JSON:**
- version 2.0 → 2.1, datum 2026-03-28 → 2026-06-01
- Skatteformel-block uppdaterad till 2026-värden
- PBB 57,3 → 59,2 tkr
- Nytt block `statsbudget_2026` med UO-höjdpunkter
- Nytt block `statsskuld_2026`
- COFOG-block markerat tydligt som 2024-värde + 2026-uppskattning

**Skatter i korthet:**
- "Skatteintäkterna 2024 fördelas så här" → "2026 fördelas så här"
- 3 011 Mdkr → ~3 280 Mdkr

**VDA-fakta:**
- "Försvarsutgiften 3,3× på 15 år, 4 185 → 13 840 kr/inv" →
  "**5,1× på 16 år**, 4 185 → ~21 300 kr/inv (2026 enligt BP2026)"
- "Statsskulden ~1 260 Mdkr, 118 000 kr/person" →
  "**1 300 Mdkr, 123 000 kr/person. Räntekostnaden har dubblats
  sedan 2024.**"

**Statsskuld-serien (`data/statsskuld.json`):**
- Tillagt år 2026: skuld 1 300 Mdkr, BNP-andel 20 %, ränta 27 Mdkr
- Bar-chart timeline förlängd: 1980 → 2026

Resultat: 2024-omnämnanden minskat från 190 till 206 (många är
äkta källhänvisningar — t.ex. "OECD Health 2024" som är rapportens
publikationsår). 2026-omnämnanden från 30 → 111.

### Changed (2026-06-01) — BP2026-uppdatering
Systematisk uppdatering till 2026 års värden enligt Budgetpropositionen
för 2026 (prop. 2025/26:1, riksdagsbeslut nov 2025) och Skatteverkets
fastställda belopp för inkomstår 2026.

**Skattevärden 2024 → 2026:**
- Skiktgräns statlig skatt: 615,3 → **643,0 tkr** (Skatteverket)
- Prisbasbelopp (PBB): 57,3 → **59,2 tkr** (regeringen sep 2025)
- Kommunalskatt rikssnitt: 32,37 → **32,38 %** (SKR/SCB)
- Inkomstbasbelopp: 76,2 → **83,4 tkr**
- Arbetsgivaravgift: 31,42 % (oförändrat)
- Kapitalskatt: 30 % (oförändrat)
- Garantipension max ogift: 9 597 → **11 988 kr/mån** (143 856 kr/år)
- Garantipension max gift: 8 597 → **10 853 kr/mån** (130 236 kr/år)

**Statsbudgeten 2025 → 2026:**
- Total utgifter: 1 442 → **1 542 Mdkr**
- Total inkomster: ~1 360 → **1 375 Mdkr**
- Budgetsaldo: ~−80 → **−167 Mdkr**
- UO6 Försvar: 168,8 → **225,0 Mdkr (+54 %)** — NATO Haag-mål 3,5 %
- UO9 Hälsovård+omsorg: 102,4 → **127,7 Mdkr (+25 %)**
- UO16 Utbildning: 104,0 → **106,9 Mdkr**
- UO25 Kommunbidrag: 164,7 → **180,7 Mdkr**
- UO26 Statsskuldsräntor: 42,8 → **27,0 Mdkr (−37 %)** — refinansiering
- UO11 Ekon trygghet ålderdom: 72,1 → **59,3 Mdkr**
- UO22 Kommunikationer: 82,1 → **106,7 Mdkr**
- Alla 27 UO uppdaterade i BDATA-arrayen

**Statsskuld 2025 → 2026:**
- Total: 1 244 → **~1 300 Mdkr** (lånebehov +167 Mdkr 2026)
- Per invånare: 119 000 → **~123 000 kr**
- Räntekostnad: 13 → **27 Mdkr/år** (+108 % trots oförändrad skuld)
- Räntekostnad per invånare: 1 232 → **2 560 kr/år**
- Andel av BNP: 19 → **20 %** (snitt 2026-2028)

**TL;DR-raden ombytt:**
- "3 011 Mdkr offentlig sektor 2024" → **"1 542 Mdkr statsbudget 2026"**
- "+90 Mdkr kommunsektorn 2030" → **"−167 Mdkr underskott 2026"**

**Eyebrow uppdaterade:**
- Hero: "2025" → "2026"
- Prislapp-widget: "2024 priser" → "2026 års budget"
- #budget: "Statsbudgeten 2025" → "Statsbudgeten 2026"

**verify_data_sync.py uppdaterad** med 2026-värden från
`per_invånare_2026` block i `data/statsskuld.json` (nytt block).

Källor använda:
- Budgetpropositionen 2026 (prop. 2025/26:1) — riksdagsbeslut nov 2025
- UO6, UO9, UO11, UO12, UO14, UO16, UO22, UO25, UO26 hämtade
  individuellt från riksdagen.se
- Skatteverket: Belopp och procent inkomstår 2026 (skatteverket.se)
- Pensionsmyndigheten: garantipension 2026 (pensionsmyndigheten.se)

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
