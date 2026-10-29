# Skatteplattformen

## Projektöversikt
Oberoende, partipolitiskt neutral webbplats som visar hur svenska skattepengar används — per krona, per tjänst, per ålder. Byggd som en **enda HTML-fil** (`index.html`, ~4600 rader) med all CSS och JS inline. Ingen build-kedja, inga externa beroenden.

**Ägare:** Wilhelm Wennergren (wennergrenf@gmail.com)
**Repo:** https://github.com/Wilhelm-WG/skatteplattformen.git
**Hosting:** GitHub Pages (index.html i root)

## Arkitektur

### Filstruktur
```
index.html                    ← Hela appen (HTML + CSS + JS)
skatteplattformen.html        ← Äldre version (ej aktiv)
skatteplattformen_data.xlsx   ← Excel-källmodell (ESV, FASIT, KPI)
data/
  nta_profil_v2.json          ← NTA-åldersprofil: 86 år × 4 kategorier
  fasit_full.json             ← FASIT-rekonstruktion per 5-årsgrupp
  fasit_analys.json           ← Kalibrerad fördelningsanalys 2022
  nta_berakning.py            ← Reproducerar åldersprofilen
  livsfaser_v2.json           ← 10 livsfaser med förmåner
  arkiv/                      ← Inaktuella filer (se data/README.md)
scripts/
  kontroll.mjs                ← Kontroll före publicering (node scripts/kontroll.mjs)
docs/
  skatteplattformen_metodrapport_v2.docx  ← Akademisk metodrapport (v2.0; v1 kvar som historik)
  MODELLFIX_PLAN.md           ← Teknisk fix-plan
  UTVECKLINGSPLAN_V3.md       ← Utvecklingsplan v3
correspondence/
  SCB_bestallning_utkast.txt  ← Utkast till SCB-beställning
```

### Nyckelkoncept i koden

**Skatteberäkning:**
- `annualTax(age, inc, opts)` → returnerar `{komm, stat, avg, moms, jsa, tot}`
  - `opts.ksOverride` — alternativ kommunalskattesats (default 0.3237)
  - Ålder <19 → noll skatt
  - Delarna räknas i `skattDelar(age, inc, opts)` (oavrundat); `opts.pension` (standard: från 65 år) = pensionsinkomst → inget jobbskatteavdrag, ingen arbetsgivaravgift
  - 19–23 år (född 2003–2007): tillfälligt sänkt arbetsgivaravgift 20,81 % på lön upp till 300 tkr/år (april 2026–september 2027)
  - Från 66 år: förhöjt grundavdrag (`forhojtGrundavdrag2026`), lön ger förhöjt jobbskatteavdrag (`jobbskatteavdrag66`) och 10,21 % arbetsgivaravgift
  - Allmän pensionsavgift (7 %) avräknas före jobbskatteavdraget; ej avräknad rest läggs på kommunalskatten
  - Verifierat mot skattetabell 32 kolumn 1–3 (±1 kr, 10 000–60 000 kr/mån)
- `grundavdrag2024(inc)` — grundavdrag enligt 2024 års regler
- `jobbskatteavdrag2024(inc, ga, ks)` — JSA enligt exakt formel i Skatteverkets SKV 433 (2026), ingen avtrappning. Verifierad mot skattetabell 32 (±1 kr, 20–80 tkr/mån)
- `grundavdrag2024(inc)` avrundas uppåt till hundratal kr (SKV 433)
- `MEDIAN_LON_MAN` = 38 300 kr (SCB lönestrukturstatistik 2025); `skattetid(kr)` ger prislapparnas vardagsjämförelse

**Mobil:**
- Samlad mobil-CSS (`≤ 640 px`) sist i första `<style>` ("MOBILANPASSNING"). Klassen `m-swipe` gör en kortgrupp till svepbar rad på mobil. Prislistan begränsas (6/12) via `pgridShowAll`. Kontrollera sidhöjd och överspill vid 390 px efter större ändringar

**Ordlista (`#ordlista`):**
- `ORDLISTA` (term, regex, definition). `initOrdlista` markerar första förekomsten per `section[id]` i löptext med `<button class="term">` och visar förklaring vid hovring/tryck. Rubriker, länkar, siffror och källrader hoppas över (`SKIP`). Skriv "miljarder kronor" i ingresser, "Mdkr" i tabeller och diagram

**Snabbfakta (`#snabbfakta`):**
- Faktakort ur `FAKTA` (rubrik, diagram `stack`/`bars`, text, källa, år, `bild:{tal, rad}`). Direktlänk `#fakta-N`; `faktaBild(i, 'post'|'story')` ritar delningsbild 1080×1350 eller 1080×1920 med den stora siffran och en mening. Lägg bara in siffror med källa
- `forstaLon()` (länken "Vad händer med min första lön?" i heron) sätter kalkylatorn till 19 år och 300 tkr och öppnar vyn Din ekonomi

**Bildspråk och designsystem (2026-10-29):**
- Ett bildspråk: scener i papperssnitt (`vh-…` vyhuvuden och Sex vägar in, `il-…` kategoriscener), fyllda pictogram (`pk-…`) för allt som är en kategori, linjeikoner (`i-…`) bara för knappar och gränssnitt. Inga ikoner i cirklar, inga foton. Alla symboler ligger i spriten direkt efter `<body>`; filtren får inte ligga i `display:none`. Alt-text för vyhuvudena i `VY_SCEN`
- Kategorifärger som variabler i `:root` (`--k-soc`, `--k-vard`, `--k-utb`, `--k-infra`, `--k-forv`, `--k-forsv`, `--k-kommun`, `--k-ratt`, `--k-eu`, `--k-arbete`, `--k-ranta`, `--k-ovrigt`, `--k-fritid`). Samma färg och pictogram i hundralappen, kvittot, kalkylatorn, Vem gör vad och Malmö-diagrammet. I SVG-attribut och `HL100` står hexvärdena utskrivna; ändras en färg ska båda ändras
- Diagramregel: övriga staplar `--d-neutral2` (eller `--d-neutral`), det texten handlar om `--d-mark` (grönt), prognos randig (`.ft-bar-fill.prognos`, `--d-prognos`). Tar emot `--emot` (grönt), skatt/betalar `--skatt` (sand). Grönt betyder aldrig en kategori
- Ytor: ljust överallt. Kort = papper, `--r`, `--shadow-sm`, ingen färgad kant. Notisruta = `--bg2`, `--r-sm`, ingen kant. Enda mörka ytan är det gröna citatbandet i Metod. Aktiva flikar och knappar är gröna
- Kalkylatorn (`.calc-wrap`) var tidigare mörk; inline-stilar i dess JS använder nu `var(--ink…)`, `var(--bg2)` och `var(--border)`. Skriv inte nya `rgba(242,239,232,…)`
- Filmen "Så går samhället runt" har egna färger för stat, region och kommun och följer inte kategoripaletten
- `img/foton/` används inte längre av sidan (finns kvar i repot). Ankaret `#bildkrediter` är kvar men sektionen heter Illustrationerna

**Tillgänglighet (steg 6, 2026-10-29):**
- Kör axe-core i webbläsaren på alla sju vyer före större ändringar (ladda axe från cdnjs i en lokal kopia, ta bort filen efteråt). Mål: inga fel för `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa` och `best-practice`
- Dialoger (`#detail-panel`, `.sc-modal`): `role="dialog"`, `aria-modal`, fokus in, fokusfälla, Escape och fokus tillbaka. Växlingsknappar får `aria-pressed` automatiskt via `vaxlingsknappar()`; element med `role="tab"` använder `aria-selected`
- Ingen sidledsrullning på 320 px. Grid-kolumner skrivs `minmax(0,1fr)`. Klickytor minst 24 px (reglage 28 px)

**Licens:** text, siffror, diagram och illustrationer CC BY 4.0; kod MIT.

**Delningsbild och ikoner (`img/`):**
- `og.png` (1200×630) skapas från `og-mall.html` med Chrome headless: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=4000 --screenshot=img/og.png img/og-mall.html`. Uppdatera siffrorna i mallen när COFOG-fördelningen ändras
- `favicon.svg`, `apple-touch-icon.png` (180×180)

**Gissa först (`#gissa`):**
- Quiz i prislistan (`initGissa`): första frågan är fast (`FORSTA`, får inte synas bland de första korten), resten slumpas ur `CARDS`. Prislistan döljs medan man gissar (`.gq-aktiv`). Direktlänk `#gissa-<slug av titel>` (delmatchning, t.ex. `#gissa-ambulans`). Ingen lagring

**Livsfaser & förmåner:**
- `LIVSFASER_V2` / `STAGES` — 10 livsfaser med förmånskategorier: utb, sjukvård, socialt, koll, omsorg
- Kalibrerade 2026-10-29: summan över befolkningen 2024 (SCB) = faktiska utgifter (sj COFOG GF07 473,7; oms Kolada 165,5; soc 657,5; koll GF01–06+08 1 061,3 Mdkr). `KOLL_PER_INV` = 100 tkr per invånare visas separat och ingår **inte** i `STAGES.w` eller i jämförelsen förmåner–skatt (skattesidan saknar bolagsskatt, punktskatter, avgifter och lån). Ändras ett värde: kör kontrollen (avsnitt 4b)
- `getStage(age)` ger genomsnittet för åldern; hushålls- och inkomstjusteringar togs bort 2026-10-29
- `LIVSLOPP_BEF` + `renderLifecycle(inc)`: befolkningsdiagram, netto per invånare och åldersgrupp 2024 (modellens skatt på SCB HE0110-inkomster), med punkt för läsaren. Räknas om när modellen ändras

**Hushållstyper:**
- `currentHousehold` — global variabel: 'ensam' | 'par' | 'familj' | 'ensam_barn'
- `HOUSEHOLD_MULT` — multiplikatorer per hushållstyp per förmånskategori (schabloner); utb är alltid 1,0
- `setHousehold(btn, type)` — UI-callback

**Inkomstgradient:**
- `incomeGradient(inc)` → `{sjukvård: float, socialt: float}`
- Decil-baserad: låginkomst (<200 tkr) får multiplikator >1, höginkomst (>800 tkr) <1

**Karriärprofiler:**
- `currentProfile` — global: 'standard' | 'kort_utb' | 'lang_utb' | 'avbruten'
- `INCOME_PROFILES` — fyra profiler med `.fn(age, peak)` funktioner
- `lifecycleIncome(age, peakInc)` — använder vald profil, fallback till standard
- `setLcProfile(key, btn)` — UI-callback

**Livscykelberäkning:**
- `calcCumulativeNet(toAge, peakInc)` — ackumulerad netto med 2% real diskontering
- `calcLifecycle(peakInc, discount)` — full livscykelberäkning

**Kapitalinkomst:**
- Slider `#s-kapital` (0–1000 tkr)
- Platt 30% skatt, adderas till `tax.tot` som `kapSkatt`
- Visas separat i skattekvittot som "Kapitalskatt (30%)"

**COFOG-skattekvitto:**
- Ritas som termokvitto i `#kvitto` (belopp per månad, pictogram `pk-…` via `pkMap`). Raderna summerar exakt till totalen (avrundningsresten läggs på största raden). Toppen i Din ekonomi, kalkylatorn och kvittot räknar alla med `skattDelar` och vald kommunalskatt (rikssnitt 32,38 %): 4 466 kr på 25 000 kr. Startkvittot och faktakorten räknar likadant. Bara lönebeskedet i filmen visar skattetabellens avdrag (7 750 kr)

**Startkvittot (heron):**
- Lönerutan `#start-lon` → `startKvitto()` ritar `#start-kvitto`: skatt på lönen (`skattDelar(40, …, {ksOverride:0.3238})`), fördelad på `START_GRUPPER` (summor av kvittots 15 COFOG-andelar). Raderna summerar exakt
- Jämförelserna i `START_JMF`: hemtjänst, IVA-dygn, grundskola (178 skoldagar), riksväg ur `CARDS`; polisens medellön 43 900 kr (SCB 2025), riksdagsarvode 81 400 kr (riksdagen 2026), Archer 5 Mdkr/48 (FMV 2023). Uppdatera när källorna uppdateras. Bråk formuleras av `svAndel()`
- Knappen "Hela kvittot" för över lönen till kalkylatorns reglage

**Två kvitton i Din ekonomi (`#receipt-card`, `.kvitto-par`):** arbetstagarens (`#kvitto`, skatt på lön och kapital) och arbetsgivarens (`#kvitto-ag`, `agKvitto()`, satserna i `AG_AVG`, 31,42 % 2026, nedsättning för 19–23 år).

**Hundralappen (`#hundralapp`):**
- Data i `HL100` (2024 COFOG, 2026 statsbudgeten), ritas av `hlNote()`/`hlRender()`. Prislappen hämtas ur `CARDS` efter exakt titel (`lapp`). Scener `il-…` och pictogram `pk-…` ligger i spriten efter ikonserien; filtren får inte ligga i `display:none`.
- Andelarna 2024 ska stämma med `HERO_100`, och 2026 med `BDATA`.
- 15 poster ur Eurostat COFOG 2024 utan avgiftsfinansierad pension (2 823 Mdkr), eftersom pensionsavgiften inte räknas som skatt; `HERO_100` på startsidan använder hela 3 223 Mdkr. Andelarna ska summera till 1 (kontrolleras)
- "Socialt skydd" uppdelat i 5 underkategorier (pension, sjukdom, familj, arbetslöshet, övrigt)

**URL-delning:**
- `buildShareURL()` / `readURLParams()` / `shareCurrentState()`
- Parametrar: age, inc, pension, hh (hushåll), profile, kapital

**Ikonserie:**
- Inline-SVG-sprite direkt efter `<body>` (`<symbol id="i-namn">`, 24×24, linjeikoner)
- `ico(namn, cls)` i JS returnerar `<svg class="ico">`; färg via `currentColor`
- `CAT_ICO` mappar prislistans kategorier till ikoner. Använd ikoner, inte emoji, i innehållet

**Vem gör vad (`#vem-gor-vad`):**
- Statisk sektion mellan Prislistan och Budgeten: ansvar för stat/region/kommun, skattens väg, intäktsandelar 2025 (SCB)
- Innehåller filmen `#kretslopp` (SVG + JS i en IIFE). Manus och tider i `SCENES`; CSS skopad under `#kretslopp`, id:n prefixade `kl-`; direktlänk `#kapitel-N`
- Filmen: `PORTRAIT` = stående mobillayout (positioner, banor, kamera per kapitel). Röst via `data-audio` (mapp med `01.m4a`–`08.m4a`) och `data-voice-credit`; talmanus i `docs/FILM_MANUS.md`

**Internationell jämförelse (`#oecd`):**
- `JMF_DATA` (flikar → diagram) och `JMF_LAND` (Sverige, Norge, Danmark, Finland, Island, Tyskland, USA, fast ordning). Varje diagram: `v` (7 värden, `null` = uppgift saknas), `ref` (OECD- eller EU-snitt, streckad linje), `bast` ('hogre' | 'lagre' | null), `kalla`, `url`, `ar`, `not`
- Första fliken "Översikt" (`#oecd-oversikt`) räknas fram ur `JMF_DATA`: Sveriges placering per diagram
- `jmfKort(ch)` ritar ett diagram. `<div data-jmf="flik:index">` och `DETAILS[*].jmf` återanvänder samma diagram på andra ställen
- Regler: en källa och ett år per diagram, inga värderande omdömen, minst 5 av 7 länder (kontrolleras av `scripts/kontroll.mjs`)

**Vyer (`initVyer`, script direkt efter `</main>`):**
- `VYER` listar sju vyer i menyordning (Start, Din ekonomi, Budgeten, Prislistan, Jämförelser, Framtid och historik, Metod) med namn, hash och vilka sektions-id som ingår (`delar`). Ordningen styr också knappen Nästa. Inom en vy visas sektionerna i DOM-ordning, så en flyttad sektion flyttas både i `delar` och i HTML-koden.
- Placering sedan 2026-10-29: `#skatter` (Skatter i korthet) i Din ekonomi före `#sparande`; `#skuld-forsvar` (försvar, statsskuld, statsskuldens historik) i Budgeten; Framtid och historik är en sektion (`#framtid`, ankare `#historik`) med en flik per ämne: Befolkning, Vård, Skola, Skatter, Personal, Investeringar, Inkomstskillnader, Sjukfrånvaro (paneler `ft-<ämne>`, `showFt`). De gamla id:na (`hist-skatt`, `ft-demo` m.fl.) finns kvar som ankare i panelerna. Varje uppgift visas en gång; Investeringar visar bara myndigheters och kommunsektorns egna planer. Direktlänk till en flikpanel öppnar fliken. Varje barn till `<main>` får `data-vy`; avdelare (`hr`) hör till nästa sektion
- Router på `hashchange`: id → vyn som innehåller elementet; `VY_PREFIX` för id som skapas av JS (`#fakta-N`, `#kapitel-N`, `#gissa-…`, `#ordlista`/`#nyckeltal`)
- Vyns egen hash (t.ex. `#budget`) visar vyn överst; andra id scrollar dit. `window.aktivVy` = aktuell vy
- Ny sektion: lägg till dess id i rätt vy i `VYER`. Länkar mellan vyer är vanliga `#id`-länkar
- `SAJT_UPPDATERAD` = datum under vyrubrikerna
- `VYER[*].led = {tal, text, kalla}` = ledsiffran överst i vyn. Bara siffror som finns med källa på sajten
- `#sparande` (Din ekonomi): skatt på ISK. Se över varje år när statslåneräntan 30 november och budgetpropositionen är kända (räntan styr nästa års skattesats)
- Heron visar `.hero-lon`: skatt och kvar efter skatt för 25/50/75/100 tkr i månaden ur skattetabell 32 (statisk HTML; uppdatera varje år med nya tabeller)
- Kalkylatorns standard: 22 år, 25 000 kr/mån; `#s-man` = lön per månad
- Rättade sakfel läggs överst i `#rattelser` (datum, vad som var fel, källa). Kontrollskriptet hoppar över den sektionen

**Sensitivitetsanalys (`#sensitivitet`, i vyn Metod):**
- Tornado-diagram som varierar kommunalskatt ±3 procentenheter
- Använder `annualTax(age, inc, {ksOverride: x})` för att beräkna skillnader

## Tillgänglighet
- Färger för text: `--ink2`/`--ink3` på ljus bakgrund, `--amber-t`/`--red-t` för ockra och röd text. `--amber`/`--red` bara för ytor och stora siffror på mörk bakgrund
- Kalkylatorn (`.calc-wrap`) har mörk bakgrund och egna värden för `--ink2`/`--ink3`; grön text där är `#6FC29B`
- SVG-diagram: `class="chart-svg"`, bredd via `chartW(w)` (smalare på mobil), etiketter som får krocka på mobil får `class="m-hide"`. Axeltext `#66615A`, stödlinjer `rgba(26,24,19,.09)`
- Klickbara kort ska ha en riktig `<button>`; dialoger flyttar fokus in och tillbaka. Automatiskt roterande innehåll har `aria-live="off"`
- Mät kontrasten med `scripts/kontrast.js` i webbläsarens konsol efter större färgändringar (mål: under 10 fall)

## Sifferformat
- Skriv decimalkomma och mellanslag före % ("16,8 %"). `svSiffror` (sist i sista scriptet) rättar också text som ritas av JS och SVG-diagram, men skriv rätt i källan. Licensnamn och externa länktexter lämnas orörda.

## Före publicering
Kör `node scripts/kontroll.mjs` före varje commit som ändrar siffror eller modellen. Den kontrollerar skattemodellen mot
Skatteverkets tabell 32 (kolumn 1–3), att inga gamla värden från `NYCKELTAL[*].gamla` finns kvar, att prislappar och
faktakort har källa, och modellens robusthet. Avslutar med kod 1 vid fel.

## Nyckeltal och källor
- `KALLOR` (index.html): källkatalog med namn, sökfraser och länk. `linkaKallor()` gör källnamn i källrader till länkar.
- `NYCKELTAL` (index.html): kanoniska värden med år och källa, visas i Metod. När ett värde ändras: uppdatera `v`/`ar`,
  flytta det gamla värdet till `gamla`, uppdatera texterna och kör kontrollen.
- Sajten läser inga filer i `data/` (se data/README.md).

## Datakällor och metodik
- **Eurostat COFOG 2024 (gov_10a_exp)** — 3 223 Mdkr total offentlig sektor
- **Skolverket 2024** — enhetskostnader per skolform
- **SCB ESSPROS 2022** — socialt skydd per funktion
- **NTA-metodik (UN 2013)** — åldersprofil sjukvård
- **AGENTA NTA 2010** — nordisk kalibrering
- **Eurostat gov_10a_exp 2022** — EU-ranking

## Kända begränsningar
1. Sjukvårdsprofil baseras på NTA-vikter, ej faktisk SKR KPP per åldersår
2. Inkomst- och tilläggspension (~384 Mdkr 2025, Orange rapport) ingår inte (avgiftsbaserad, ej skattesubvention)
3. NTA-data för Norden från 2010 (senast tillgängliga)
4. Hushållsmultiplikatorer är förenklade (SCB FASIT ger mer granulär data)
5. Inkomstgradienten är schablonbaserad, ej empiriskt skattad per decil
6. Skattereduktion för förvärvsinkomst (max 1 500 kr/år) och public service-avgift (max 1 184 kr/år) ingår inte i `annualTax` (nettoeffekt ≈ −300 kr/år)
7. Inkomster efter 65 år antas vara pension i kalkylatorn och livsloppet (lön för äldre kan anges via `opts.pension:false`)

## Konfidensintervall
| Kategori | Osäkerhet | Källa |
|----------|-----------|-------|
| Utbildning | ±5% | Bekräftade enhetskostnader (Skolverket) |
| Sjukvård | ±25% | NTA-vikter, ej faktisk KPP |
| Social omsorg | ±20% | ESSPROS-fördelning + SKR |
| Kollektivt | ±10% | Platt fördelning |

## Konventioner
- **Språk:** All UI-text på svenska. Koden (variabelnamn, kommentarer) blandar svenska och engelska.
- **Belopp:** Alltid i tusentals kronor (tkr) om inget annat anges.
- **Commit-meddelanden:** På engelska, beskrivande (se git log).
- **Ingen build:** Allt i en fil. Inga npm-beroenden, inga bundlers.
- **Tillgänglighet:** SVG-diagram har `role="img" aria-label="..."`. Alla interaktiva element har fokushantering.

## Ej genomförda förbättringar (backlog)
Från modellgranskning och tidigare sessioner:
- Val 2026-sektion
- KPI-deflator-toggle (visa reala vs nominella belopp)
- Flytta Prislista före Livslopp i sektionsordningen
- Omstrukturering av hero-snabbkollen
- Ytterligare modellgranskningspunkter (se Modellgranskning_Skatteplattformen.docx)

## Granskningsdokument
Två externa granskningar finns i parent-mappen (`Skatteplattformen/`):
- `Kritisk_granskning_v2.docx` — initial peer review
- `Modellgranskning_Skatteplattformen.docx` — 14-punkts djupgranskning av modellens svagheter
