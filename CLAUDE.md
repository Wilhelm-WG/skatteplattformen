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
  budget_analys_2025.json     ← Budgetanalys
  livsfaser_v2.json           ← 10 livsfaser med förmåner
  oecd_utfall.json            ← EU/OECD-jämförelser
  statsskuld.json             ← Statsskuldsdata
  framtidsutmaningar.json     ← Framtidsprojektioner
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
  - Ålder ≥66 → reducerad arbetsgivaravgift (10.21%)
  - Pensionärer (≥66) → inget jobbskatteavdrag
- `grundavdrag2024(inc)` — grundavdrag enligt 2024 års regler
- `jobbskatteavdrag2024(inc, ga, ks)` — JSA enligt exakt formel i Skatteverkets SKV 433 (2026), ingen avtrappning. Verifierad mot skattetabell 32 (±1 kr, 20–80 tkr/mån)
- `grundavdrag2024(inc)` avrundas uppåt till hundratal kr (SKV 433)
- `MEDIAN_LON_MAN` = 38 300 kr (SCB lönestrukturstatistik 2025); `skattetid(kr)` ger prislapparnas vardagsjämförelse

**Ordlista (`#ordlista`):**
- `ORDLISTA` (term, regex, definition). `initOrdlista` markerar första förekomsten per `section[id]` i löptext med `<button class="term">` och visar förklaring vid hovring/tryck. Rubriker, länkar, siffror och källrader hoppas över (`SKIP`). Skriv "miljarder kronor" i ingresser, "Mdkr" i tabeller och diagram

**Snabbfakta (`#snabbfakta`):**
- Faktakort ur `FAKTA` (rubrik, diagram `stack`/`bars`, text, källa, år). Direktlänk `#fakta-N`; `faktaBild(i)` ritar 1080×1350-delningsbild. Lägg bara in siffror med källa

**Gissa först (`#gissa`):**
- Quiz i prislistan (`initGissa`), drar 10 slumpade poster ur `CARDS`. Direktlänk `#gissa-<slug av titel>` (delmatchning, t.ex. `#gissa-iva`). Ingen lagring

**Livsfaser & förmåner:**
- `LIVSFASER_V2` / `STAGES` — 10 livsfaser med förmånskategorier: utb, sjukvård, socialt, koll, omsorg
- `getStage(age, inc)` — returnerar livsfas med **hushålls- och inkomstjusterade** förmåner
  - Utan `inc`-parameter: returnerar ojusterad fas (bakåtkompatibelt)
  - Med `inc`: applicerar `HOUSEHOLD_MULT` × `incomeGradient(inc)`

**Hushållstyper:**
- `currentHousehold` — global variabel: 'ensam' | 'par' | 'familj' | 'ensam_barn'
- `HOUSEHOLD_MULT` — multiplikatorer per hushållstyp per förmånskategori (SCB FASIT-baserade)
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
- 15 poster baserade på SCB COFOG 2024 (3 011 Mdkr total offentlig sektor)
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

**Sensitivitetsanalys:**
- Tornado-diagram som varierar kommunalskatt ±3 procentenheter
- Använder `annualTax(age, inc, {ksOverride: x})` för att beräkna skillnader

## Datakällor och metodik
- **SCB COFOG 2024** — 3 011 Mdkr total offentlig sektor
- **Skolverket 2024** — enhetskostnader per skolform
- **SCB ESSPROS 2022** — socialt skydd per funktion
- **NTA-metodik (UN 2013)** — åldersprofil sjukvård
- **AGENTA NTA 2010** — nordisk kalibrering
- **Eurostat gov_10a_exp 2022** — EU-ranking

## Kända begränsningar
1. Sjukvårdsprofil baseras på NTA-vikter, ej faktisk SKR KPP per åldersår
2. Inkomstpension (~800 Mdkr/år) ingår inte (avgiftsbaserad, ej skattesubvention)
3. NTA-data för Norden från 2010 (senast tillgängliga)
4. Hushållsmultiplikatorer är förenklade (SCB FASIT ger mer granulär data)
5. Inkomstgradienten är schablonbaserad, ej empiriskt skattad per decil
6. Skattereduktion för förvärvsinkomst (max 1 500 kr/år) och public service-avgift (max 1 184 kr/år) ingår inte i `annualTax` (nettoeffekt ≈ −300 kr/år)
7. Personer 66+ räknas utan jobbskatteavdrag och med schablonmässigt förhöjt grundavdrag (+40 %); lagens förhöjda jobbskatteavdrag för äldre som arbetar är inte modellerat

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
