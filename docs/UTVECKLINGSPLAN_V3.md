# Skatteplattformen — Utvecklingsplan v3.0
**Datum:** 2026-03-24
**Status:** Planering
**Prioritet:** Hög — inför val 2026

---

## ÖVERGRIPANDE BEDÖMNING AV NULÄGET

Plattformen är stark på aggregerade snitt men svag på *variation och livsutfall*. En genomsnittsmänniska existerar inte — välfärdens verkliga värde syns i hur systemet hanterar de vanligaste avvikelserna: barn, sjukdom, skilsmässa, kronisk åkomma. Det är också viktigt att visa skuldsidan av kontraktet: vad kostar det att låna upp välfärden, och vem betalar räntan?

---

## DEL 1: STATSSKULD & FINANSIELLT ÅTAGANDE

### 1.1 Ny sektion: "Räkningen som skjuts framåt"

**Varför:** Skatteplattformen visar vad skatten ger — men inte vad staten *lånat* utöver skatteintäkterna. Det är en halv bild.

**Nyckeldata (Riksgälden 2024-2025):**
- Statsskuld december 2024: **1 151 Mdkr**
- Statsskuld prognos 2025: **1 244 Mdkr**
- Skuld som % av BNP: **18% (2024), 19% (2025)**
- Statligt budgetunderskott 2024: **104 Mdkr**
- Statligt budgetunderskott 2025: **102 Mdkr**
- Räntekostnad 2025: **~13 Mdkr/år** (ca 1 230 kr/invånare)
- Räntekostnad historik: toppade ~120 Mdkr/år på 1990-talet (10%+ av BNP)

**Notera:** Sverige har låg statsskuld internationellt (EU-snittet ~83% av BNP, Japan ~260%). Men trenden är viktig: vi finansierar löpande underskott med lån.

**Visualiseringar:**
```
Visualisering A: Stapeldiagram skuld som % BNP 1990-2025
  - Tydlig topp 1994-1996 (~75% av BNP)
  - Sedan kraftig minskning till ~20%
  - Lätt uppgång senaste åren

Visualisering B: "Din andel av statsskulden"
  - Kalkylator: statsskuld per invånare (~109 000 kr/person)
  - Jämförelse: statsskuld per yrkesverksam (~220 000 kr)
  - Räntekostnad per invånare per år (~1 230 kr/år just nu)

Visualisering C: Internationell jämförelse skuld/BNP
  - Sverige 18%, Danmark 29%, Finland 81%, Tyskland 63%,
    Frankrike 113%, USA 122%, Japan 255%
  - Tydlig: Sverige är faktiskt välskött, men trenden vänd uppåt

Visualisering D: "Vad köper vi för lånade pengar?"
  - Bryt ner vad underskottet finansierar (försvar, sjukvård etc.)
  - Räntekostnaden = X skolor/år, Y IVA-platser etc.
```

**Flikar att lägga till i "Hur har det förändrats?":**
- Ny flik: **"Statsskuld"** — historik 1990-2025
- Ny flik: **"Budgetsaldo"** — över-/underskott per år

**Källhänvisningar:**
- Riksgälden: `riksgalden.se/statistik/statistik-om-sveriges-statsskuld/`
- ESV: `esv.se/utfall-och-prognos/` (månadsutfall)
- SCB NR: `scb.se/nationalrakenskaper` (konsoliderad offentlig sektor)

---

### 1.2 Kommunskuld och totalt offentligt åtagande

**Komplettering:** Statsskulden är bara en del. Den konsoliderade offentliga sektorns skuld (inkl kommuner och regioner) är högre.

- Kommunsektorns samlade lån: ~650-700 Mdkr (SKR 2024)
- Pensionsåtaganden utanför balansräkningen (ATP-skulden): ~9 000 Mdkr
- Totalt offentligt åtagande inkl. pensioner: ca **10 000 Mdkr** (~170% av BNP)

**Pedagogisk not:** Inkomstpensionen är ett *löfte* som inte syns i statskuldsstatistiken men är ett reellt finansiellt åtagande mot framtida generationer.

---

## DEL 2: VÄLFÄRDSPROFILEN — SCENARIER OCH UTFALL

### 2.1 Problem med nuvarande modell

Nuvarande kalkylator visar genomsnittsvärden per åldersgrupp. Det är korrekt som utgångspunkt men missar:

1. **Ackumulering år för år** — man ser inte *resan*, bara en ögonblicksbild
2. **Livsutfall** — systemet är designat för avvikelser (sjukdom, barn, separation)
3. **Scenariovarianter** — en 35-åring som just fått tvillingar är radikalt annorlunda än genomsnittet
4. **Osäkerhet** — inga konfidensintervall visas i UI:t

### 2.2 Ny komponent: Livstidskalkylator med scenarier

**Design:** Ersätt eller komplettera den befintliga kalkylatorn med en "Bygg ditt liv"-vy.

```
STEG 1: Grundprofil
  [ ] Jag har / planerar barn   → Antal barn [0-5]
  [ ] Ensamstående förälder
  [ ] Deltidsarbete (pga barn/vård)
  [ ] Kronisk sjukdom

STEG 2: Välj scenario
  ● Genomsnittsprofil (nuläget)
  ○ Barnfamilj med 2 barn (gifta, heltid)
  ○ Ensamstående förälder, 1 barn
  ○ Person med kronisk sjukdom (välj: diabetes / hjärtsjukdom / cancer / depression / KOL)
  ○ Anhörigvårdare (vårdar förälder >10 tim/vecka)

STEG 3: Livstidsgraf (år för år, 0-85)
  Stapelgraf: förmåner per år (blå) vs skatt per år (röd)
  Ackumulerat netto (grön linje): saldo över tid
  Klicka på ett år → detaljer för just den åldern
```

### 2.3 Scenariovärden att implementera

#### Scenario A: Barnfamilj, 2 barn (rikssnitt)

**Extra förmåner jämfört med barnlös:**
- Barnbidrag: 1 250 kr/mån × 2 barn × 16 år = **480 000 kr totalt**
- Föräldrapenning: ~170 dagar × 77% av lön × 2 föräldrar (delat) per barn
  → Genomsnitt ~180 000 kr per barn (FK 2024) = **360 000 kr**
- Förskola: 175 000 kr/år × 4 år × 2 barn = **1 400 000 kr**
- Grundskola+gymnasium: 148 000 kr/år × 12 år × 2 barn = **3 552 000 kr**
- VAB (vård av sjukt barn): ~12 dagar/år × 80% av dagslön, år 0-12
  → genomsnitt ~15 000 kr/år × 12 år = **180 000 kr**
- **Total extra förmån 2 barn: ~5,9 Mdkr (nominellt, 2024-priser)**
- **Per barn: ~3,0 Mkr från födseln till 18 år**

#### Scenario B: Ensamstående förälder, 1 barn

**Extra stöd utöver scenario A:**
- Underhållsstöd (om den andre föräldern ej betalar): 1 673 kr/mån × 11 år = **220 000 kr**
- Bostadsbidrag (ensamstående förälder): ~2 500 kr/mån × 5 år = **150 000 kr** (behovsprövat)
- Kommunalt ekonomiskt bistånd (statistiskt vanligare): variabelt
- **Total extra vs genomsnittlig barnfamilj: ~370 000 kr**

#### Scenario C: Kroniska sjukdomar

**Extra sjukvårdskostnad per patient och år** (uppskattning, SCB hälsoräkenskaper + Socialstyrelsen):

| Sjukdom | Extra kostnad/år | Källa |
|---------|-----------------|-------|
| Diabetes typ 2 | 45 000–80 000 kr/år | Socialstyrelsen NR diabetes 2024 |
| Hjärt-kärlsjukdom (stabil) | 35 000–60 000 kr/år | Hjärt-lungfonden + SKR KPP |
| Cancer (behandling) | 150 000–800 000 kr/år | RCC + SKR KPP-databas |
| Cancer (remission/uppföljning) | 25 000–50 000 kr/år | |
| Depression/ångest (behandlad) | 30 000–70 000 kr/år | FK + 1177 kostnadsdata |
| KOL (stadium II-III) | 55 000–120 000 kr/år | Socialstyrelsen KOL-riktlinjer |
| MS (med behandling) | 350 000–600 000 kr/år | MS-sällskapet + LMV (dyra DMT) |
| Reumatoid artrit (biologisk beh.) | 180 000–350 000 kr/år | LMV + SKR |

**Pedagogisk vinkel:** En MS-patient kostar systemet ca 5–6 Mkr extra under sitt liv. Cancerpatienten kanske 1-2 Mkr. Systemet är designat att hantera just dessa extremfall — det är inte en "förlust" utan systemets syfte.

#### Scenario D: Sjukt barn, kronisk sjukdom (barn 0-18)

**Extra stöd vid sjukt barn:**
- Vårdbidrag (om barn behöver extra tillsyn): 2 068–8 271 kr/mån beroende på grad
  → Genomsnitt 4 000 kr/mån × 10 år = **480 000 kr**
- Extra VAB: ~60 dagar/år × dagersättning = **~60 000 kr/år** under akuta perioder
- Habilitering, hjälpmedel, specialpedagogik: **50 000–200 000 kr/år** beroende på diagnos
- **Total extra stöd (svår kronisk sjukdom, barn 0-18): ~2,5-5 Mkr**

### 2.4 Ackumulerad kostnadsgraf — Implementation

```javascript
// Ny funktion: beraknaAckumulerat(scenario, targetAge)
// Returnerar array av {ålder, formaanGbfAr, skattAr, ackFormaaner, ackSkatt, netto}

// För varje år 0→targetAge:
// 1. Hämta fas från LIVSFASER_V2
// 2. Applicera scenariotillägg (barn, sjukdom etc)
// 3. Beräkna skatt om yrkesverksam (18-65)
// 4. Ackumulera löpande

// Visualisering: grouped bar chart (förmåner vs skatt per år)
// Overlay: ackumulerat netto som linje
```

---

## DEL 3: NYA FLIKAR — FRAMTIDA UTMANINGAR

### 3.1 Befintliga flikar i "Framtida utmaningar":
- Finansieringsgapet ✓
- Investeringsbehov ✓
- Personalbrist ✓
- Demografi ✓
- Försvar & säkerhet ✓

### 3.2 Nya flikar att lägga till:

#### Ny flik: "Statsskuld & räntor"
```
Innehåll:
- Statsskuldens historik (stapeldiagram 1990-2025, % av BNP)
- Räntekostnad per år: kontext (vad köper vi för 13 Mdkr?)
- Scenariosimulering: om räntan stiger från 2% → 4%, vad kostar det?
  → +30 Mdkr/år = 10 karolinska sjukhus
- Generationsrättvisa: vem betalar av skulden? (de som arbetar 2030-2050)
- Jämförelse: Riksgäldens räntekostnad vs hälso- och sjukvårdsbudgeten

Data:
  skuld_historia: [
    {år: 1990, mdkr: 621, bfpPct: 42},
    {år: 1994, mdkr: 1390, bfpPct: 74}, // topp
    {år: 2000, mdkr: 1273, bfpPct: 54},
    {år: 2007, mdkr: 1100, bfpPct: 31},
    {år: 2015, mdkr: 1280, bfpPct: 28},
    {år: 2020, mdkr: 1236, bfpPct: 24},
    {år: 2023, mdkr: 1050, bfpPct: 16},
    {år: 2024, mdkr: 1151, bfpPct: 18},
    {år: 2025, mdkr: 1244, bfpPct: 19},
  ]
```

#### Ny flik: "Klimat & omställning"
```
Innehåll:
- Offentliga klimatinvesteringar: nuläge och behov
- Klimatskadekostnader som offentlig sektor måste bära
- Jämförelse: klimatinvesteringar vs andra budgetposter
- ESG-rating på statens låneportfölj

Data:
  - Klimatinvesteringar i budgeten 2025: ~50 Mdkr (UO21 + delar av UO22)
  - IPCC: klimatskador kan kosta 1-3% av BNP/år år 2050
```

#### Ny flik: "AI & arbetsmarknad" (nytt och relevant inför val)
```
Innehåll:
- Automatisering: vilka yrken hotas? (OECD-data)
- Skattebasen: om 20% av jobben automatiseras, vad händer med skatteintäkterna?
- Omskolgningsbehov och kostnad
- A-kassans kapacitet vid strukturell omvandling
```

### 3.3 Nya historiska trendtabbar i "Hur har det förändrats?":

#### Ny flik: "Statsskuld"
```javascript
{år, skuld_procent_bnp, räntekostnad_mdkr}
// Data 1980-2025, Riksgälden
```

#### Ny flik: "Ojämlikhet (Gini)"
```javascript
// SCB HE0110: Gini-koefficient Sverige 1975-2023
// Visar: Sverige gick från ~0.20 (1980) till ~0.29 (2023)
// Kontext: fortfarande lägst i EU men trenden är tydlig
```

#### Ny flik: "Sjukfrånvaro"
```javascript
// FK: sjukpenningdagar per försäkrad 2000-2024
// Tydlig minskning 2002-2010, ny uppgång post-pandemi
// Kostnad per år i Mdkr
```

---

## DEL 4: DATAFÖRBÄTTRINGAR

### 4.1 Demografisk prognos (SCB 2025-2070)

```javascript
// Ny data i framtidsutmaningar.json:
demografisk_prognos: {
  källa: "SCB Befolkningsframskrivning 2025-2070",
  forsörjningskvot: [
    // Antal yrkesverksamma (20-64) per äldre (65+)
    {år: 2024, kvot: 3.1},
    {år: 2030, kvot: 2.9},
    {år: 2040, kvot: 2.6},
    {år: 2050, kvot: 2.4},
    {år: 2060, kvot: 2.3},
  ],
  andel_80plus: [
    {år: 2024, pct: 5.7},
    {år: 2030, pct: 6.8},
    {år: 2040, pct: 7.5},
    {år: 2050, pct: 9.4},
    {år: 2060, pct: 10.1},
  ],
  pedagogisk_vinkel: "2050 är det 2,4 yrkesverksamma per pensionär (vs 3,1 idag).
    Det finansierar välfärden — om produktiviteten inte ökar kräver det antingen
    högre skatter, sänkta förmåner eller mer invandring av yrkesverksamma."
}
```

### 4.2 Sjukvård historik 1995-2023 (% av BNP)

```javascript
// SCB Hälsoräkenskaper 2023
sjukvård_bnp_historia: [
  {år: 1995, pct: 8.1},
  {år: 2000, pct: 8.2},
  {år: 2005, pct: 9.0},
  {år: 2010, pct: 10.7},
  {år: 2015, pct: 10.9},
  {år: 2019, pct: 10.9},
  {år: 2020, pct: 11.5}, // Covid-topp
  {år: 2021, pct: 11.3},
  {år: 2022, pct: 10.5},
  {år: 2023, pct: 11.2},
]
// Notera: Sverige är under OECD-snittet (12.0%) trots höga skatter
// förklaring: primärvården är underfinansierad, ingen tandvård i grundförsäkring
```

### 4.3 Utbildningskostnad per elev (real, 2024-priser)

```javascript
// SCB Kostnader för utbildningsväsendet 2024
utbildning_per_elev: {
  grundskola: {
    serie: [
      {år: 2010, tkr: 118}, {år: 2015, tkr: 130},
      {år: 2018, tkr: 141}, {år: 2020, tkr: 148},
      {år: 2022, tkr: 147}, {år: 2023, tkr: 145},
      {år: 2024, tkr: 148}  // lägst sedan 2016 i reala termer
    ],
    not: "Realt lägst sedan 2016. Lärartäthet har minskat."
  },
  gymnasium: {
    serie: [...],
    not: "Realt lägst sedan 2013."
  }
}
```

---

## DEL 5: LAYOUTFÖRBÄTTRINGAR

### 5.1 Ny navigationsstruktur

**Nuläge (7 sektioner):**
1. Hero
2. Prislistan
3. Välfärdsprofil & kalkylator
4. OECD-jämförelse
5. Framtida utmaningar
6. Historiska trender
7. Metodik

**Förslag (9 sektioner):**
1. Hero
2. Prislistan *(som nu)*
3. Välfärdsprofil — **uppgraderad med scenariokalkylator**
4. Statsskuld & generationsansvar *(ny)*
5. OECD-jämförelse *(som nu + fler länder)*
6. Framtida utmaningar *(+ 2-3 nya flikar)*
7. Historiska trender *(+ skuld, Gini, sjukfrånvaro)*
8. Metodik *(som nu)*
9. Källförteckning / API *(ny — visar datakällornas rådata)*

### 5.2 Välfärdsprofilens nya UI

```
[ Nuläge (årsvis) ]  [ Livstidsgraf ]  [ Scenarier ]   ← nya flikar

Livstidsgrafen:
- X-axel: ålder 0-85
- Y-axel (vänster): tkr/år
- Blå staplar: förmåner per år
- Orange staplar: skatt per år (om yrkesverksam)
- Grön/röd linje: ackumulerat netto

Scenarieväljaren:
  Välj situation: [Genomsnitt ▾]
  ┌─────────────────────────────────────┐
  │ ● Genomsnittspersonen               │
  │ ○ Barnfamilj med 2 barn             │
  │ ○ Ensamstående förälder, 1 barn     │
  │ ○ Kronisk sjukdom: [välj typ ▾]     │
  │ ○ Anhörigvårdare                    │
  └─────────────────────────────────────┘
```

### 5.3 Prislistan — förbättringar

**Nuläge:** 25 poster i kategorier
**Förslag:** Lägg till 5-8 poster med scenariovinkling:
- "Behandling diabetes typ 2, ett år": 45 000–80 000 kr *(du betalar: 100 kr)*
- "Parkeringstillstånd för rörelsehindrad": värde av tjänsten
- "Plats i daglig verksamhet (LSS), ett år": ~350 000 kr *(du betalar: 0 kr)*
- "Behandling depression, 1 år (samtalsterapi + medicin)": 60 000 kr
- "Förlossning + BB-tid, genomsnitt": 40 000 kr *(du betalar: 100 kr)*
- "Skolbuss i glesbygd, ett år per elev": 45 000 kr

---

## DEL 6: SVAGHETER I NUVARANDE MODELL (PRIORITERADE FIXES)

### 6.1 Kritiska svagheter

| Svaghet | Allvarlighet | Fix |
|---------|-------------|-----|
| Genomsnittsförmåner ≠ utfall | HÖG | Scenariokalkylator (Del 2) |
| Ingen ackumulering år-för-år | HÖG | Livstidsgraf (Del 2) |
| NTA-vikter sjukvård (±25%) | HÖG | Väntar på SCB-data (beställt mars 2026) |
| Statsskulden visas ej | MEDEL | Ny sektion (Del 1) |
| Demografisk försörjningskvot saknas | MEDEL | Datauppdatering (Del 4) |
| Gini/ojämlikhet saknas | LÅGT | Historisk trend (Del 3) |

### 6.2 Genomsnitt vs variation — Exempel

Nuläget visar: "35-åring får 231 tkr/år i förmåner"

Verkligheten:
- 35-åring utan barn, frisk, heltidsjobb: **~130 tkr/år**
- 35-åring med 3 barn (varav ett sjukt), föräldraledig: **~680 tkr/år**
- 35-åring med MS: **~500-700 tkr/år extra sjukvård**
- Skillnad: 130 vs 700 tkr = **5x variation** för samma åldersgrupp

Systemets *syfte* är just att hantera de 700 tkr-fallen — att visa bara 231 är ett pedagogiskt misslyckande.

---

## IMPLEMENTERINGSORDNING (v3.0)

### Sprint 1 (2-3 veckor)
1. Ny JSON: `data/statsskuld.json` — skuld + ränta 1990-2025
2. Ny historisk flik: "Statsskuld" i befintlig sektion
3. Uppdatera demografidata med SCB-prognos 2025-2070
4. Ny historisk flik: "Gini-koefficient"

### Sprint 2 (3-4 veckor)
5. Ny sektion: "Statsskuld & generationsansvar" med kalkylator
6. Ny flik i framtida utmaningar: "Statsskuld & räntor"
7. Utöka prislistan med 5-8 nya poster (kroniska sjukdomar, LSS)

### Sprint 3 (4-6 veckor — inför val)
8. Scenariokalkylator: barnfamilj, ensamstående, kronisk sjukdom
9. Livstidsgraf år-för-år (0-85)
10. Ny API-sektion som exponerar rådata (CC0)

---

## DATAKÄLLOR SOM BEHÖVER BESTÄLLAS

| Data | Källa | Status | Prioritet |
|------|-------|--------|-----------|
| KPP per åldersår sjukvård | SCB FASIT | Beställd mars 2026 | KRITISK |
| Statsskuld historik 1980-2025 | Riksgälden API | Tillgänglig publikt | HÖG |
| Gini-koefficient 1975-2023 | SCB HE0110 | Tillgänglig publikt | MEDEL |
| Sjukpenningdagar per åldersår | FK Statistik | Tillgänglig publikt | MEDEL |
| Kostnad per patient kronisk sjukdom | Socialstyrelsen/LMV | Aggregerat publikt | HÖG |
| SCB Befolkningsprognos 2025-2070 | SCB BE0401 | Tillgänglig publikt | HÖG |

---

*Nästa steg: Börja med Sprint 1 — skapa statsskuld.json och den historiska fliken.*
