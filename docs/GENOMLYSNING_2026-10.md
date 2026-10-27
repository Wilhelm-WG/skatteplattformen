# Skatteplattformen — Fullständig genomlysning

**Datum:** 2026-10-26
**Granskad gren:** `design-refresh` (= `data-sync-and-tooling` + designomarbetning, den kanoniska/senaste linjen)
**Senaste commit i linjen:** `16c490c` (2026-06-18)
**Granskat av:** Claude Code (teknisk + data + UX-genomgång)
**Status:** Underlag för prioritering — inga ändringar gjorda i kod eller data

---

## 0. Sammanfattning (TL;DR)

Plattformen är i **gott skick**. Datasynken är intakt (alla 11 checkar i `scripts/verify_data_sync.py` passerar), modellen har byggts ut långt bortom de två externa granskningarna (hushållstyper, inkomstgradient, karriärprofiler, kapitalskatt, tornado-sensitivitet, delnings-URL m.m. är **redan implementerade**), och skatteparametrarna är uppdaterade till 2026 (PBB 59,2 tkr, skiktgräns 643 tkr).

Det som är mest angeläget nu, i prioritetsordning:

1. **Dataårgång — övergång BP2026 → BP2027.** Hela plattformen bygger på Budgetpropositionen 2026 (prop. 2025/26:1). BP2027 (prop. 2026/27:1) publicerades i september 2026 och är nu gällande budget. Detta är den enskilt största uppdateringen.
2. **Självflaggad uppdatering är överdragen.** `livsfaser_v2.json` anger `nästa_uppdatering: 2026-09-01 (ESV 2025-utfall + SCB KPP-data)`. Deadline passerad.
3. **2027 års skatteparametrar** (PBB 59,6 tkr, skiktgräns ~660 tkr) träder i kraft 1 jan 2027 och är kända nu.
4. **Repo-hygien:** en övergiven v2.x-fork ligger kvar på lokala `main` och `origin/main` släpar ~19 commits efter den kanoniska linjen (se §1).
5. **Kvarstående modell-/UX-punkter** från granskningarna: "Om oss"-sektion, kommunväljare i UI, formell osäkerhet (Monte Carlo), validering mot SCB:s sektorräkenskaper.

---

## 1. Repo- och grenhygien

Repot har en **divergent grenhistorik** (bekräftad mot `git`):

| Gren | Senaste commit | Datum | Roll |
|------|---------------|-------|------|
| `design-refresh` | `16c490c` | 2026-06-18 | **Kanonisk/senaste** — d-s-t + designomarbetning (nu utcheckad) |
| `origin/data-sync-and-tooling` | `891b67f` | 2026-06-08 | Huvudlinje (BP2026-data, QA-rundor) |
| `origin/main` | `028ea94` | 2026-05-29 | **~19 commits efter** d-s-t |
| lokala `main` / `archive/local-v2.x-design` (tag `v2.3-design`) | `1d6305b` | 2026-06-15 | **Övergiven v2.x-fork** — ej aktiv linje |

**Åtgärder att överväga (ägarens beslut):**
- `origin/main` bör sannolikt fast-forwardas till den kanoniska linjen så att GitHub Pages servar rätt version. Verifiera vilken gren Pages bygger från.
- Den övergivna v2.x-forken (lokala `main`) kan arkiveras bort lokalt — den är redan säkrad som `archive/local-v2.x-design` + tag `v2.3-design`.
- PR #2 (`design-refresh` → `data-sync-and-tooling`) bör antingen mergas eller stängas.

> Not: en tidigare fix-omgång ("v2.2 — rättelser efter modellgranskning") hamnade av misstag på den övergivna v2.x-forken och ingår **inte** i den kanoniska linjen. Flera av de fixarna (JSON som enda sanningskälla, pensions-toggle i Python, reproducerbarhet) är dock irrelevanta här eftersom den kanoniska plattformen är en enda `index.html` utan den Python-pipelinen som primär väg.

---

## 2. Datafärskhet — vad kan uppdateras nu (okt 2026)

### 2.1 Självflaggad, överdragen uppdatering
`data/livsfaser_v2.json` → `_meta.nästa_uppdatering = "2026-09-01 (ESV 2025-utfall + SCB KPP-data beställd 2026-03-23)"`. Den tidpunkten har passerat. Två saker väntade:
- **ESV 2025-utfall** (statens årsredovisning / helårsutfall 2025) — publicerat våren 2026.
- **SCB KPP-data per åldersår sjukvård** — var beställd mars 2026 (ersätter NTA-vikterna, den största kända osäkerheten ±25 %). Följ upp om leveransen kommit.

### 2.2 BP2026 → BP2027 (prop. 2026/27:1)
Hela plattformen refererar genomgående `Budgetpropositionen 2026 (prop. 2025/26:1)` (14+ ställen i `index.html`) och `BDATA`-summan verifieras mot BP2026 (1 542 Mdkr). BP2027 publicerades sept 2026.

- Statens totala utgifter 2027: **≈ 1 557 Mdkr** (prel., verifiera mot prop. 2026/27:1 / riksdagen.se)
- Statens inkomster 2027: **≈ 1 415 Mdkr** (prel.)
- Statsskuldsräntor 2027: **≈ 31 Mdkr** (prel.)

Uppdatering berör `BDATA` (27 utgiftsområden), hero-siffrorna (inkomster/underskott), budgetdiagrammet och alla källhänvisningstexter. **Kör `scripts/verify_data_sync.py` efter uppdatering** — BDATA-checken är hårdkodad mot BP2026:s 1 542 Mdkr och måste justeras.

### 2.3 Skatteparametrar 2027 (ikraft 1 jan 2027)
Kalkylatorn använder 2026 års parametrar. 2027 års värden är kända nu (prel., verifiera mot Skatteverket/höstbudget):

| Parameter | 2026 (i koden) | 2027 (prel.) |
|-----------|----------------|--------------|
| Prisbasbelopp (PBB) | 59 200 kr | **59 600 kr** |
| Förhöjt PBB | 60 500 kr | **60 900 kr** |
| Skiktgräns statlig skatt | 643 tkr | **≈ 660 tkr** |
| Brytpunkt (brutto, <67 år) | — | **≈ 678 tkr (56 500 kr/mån)** |
| Kommunalskatt (rikssnitt) | 0,3237 | kontrollera SCB 2026/2027-snitt |

### 2.4 2025 års utfall (statsskuld & budgetsaldo)
`data/statsskuld.json` har 2025 som **prognos** (1 244 Mdkr). Faktiskt utfall finns nu:
- Statsskuld nov 2025: **1 217 Mdkr** (Riksgälden). Helårsutfall dec 2025 publicerades 2026-01-12 — hämta slutlig siffra.
- Budgetsaldo 12 mån (nov 2025): **≈ −101 Mdkr**.
- 2026 års månadsutfall finns nu t.o.m. ~sept/okt 2026 → serien kan förlängas ett år.

### 2.5 Per-datafil — årgång och åtgärd

| Fil | Nuvarande källa/årgång | Bedömning |
|-----|------------------------|-----------|
| `livsfaser_v2.json` | basår 2024, COFOG 2024; uppd. 2026-03-24 | **Överdragen** (se 2.1); COFOG kan gå till 2025 |
| `nta_profil_v2.json` | basår 2024 | Väntar på SCB KPP (2.1) |
| `budget_analys_2025.json` | Skr. **2024/25:98** | Släpar — `index.html` använder redan Skr. 2025/26:98. Synka filen (eller döp om → 2026) |
| `statsskuld.json` | Riksgälden, t.o.m. 2025 prognos; uppd. 2026-03-24 | Uppdatera med 2025 utfall + 2026 (se 2.4) |
| `framtidsutmaningar.json` | uppd. 2025-03-24; Försvarsbeslut 2025–2030, NTP 2026–2037 | Mestadels aktuell; kontrollera mot ev. nytt försvarsbeslut/BP2027 |
| `oecd_utfall.json` | OECD Health at a Glance **2025** | Aktuell (nästa utgåva 2027) |
| `livslangd.json` | SCB BE0701 2018–2022, framskrivning 2025–2070; uppd. 2026-05-29 | Aktuell |
| `fasit_analys.json` / `fasit_full.json` | SCB FASIT 2022 | Senast tillgängliga; OK |

**Blandad prisårgång:** `index.html` anger omväxlande "2026 priser" och "2024 priser". Harmonisera till ett tydligt angivet basår (helst 2026) eller förklara skillnaden explicit.

---

## 3. Datakvalitet & integritet

- ✅ **Intern synk intakt** — `scripts/verify_data_sync.py`: 11/11 OK (statsskuld, befolkning 80+, sjukfrånvaro, Gini, internationell skuld, BDATA-summa vs BP2026, COFOG-andelar = 100 %).
- ⚠️ **COFOG-basår 2024** (3 011 Mdkr total offentlig sektor) — kan uppdateras till SCB NR COFOG 2025 när publicerad.
- ⚠️ **`budget_analys_2025.json` släpar** bakom `index.html` (Skr-version), se tabell ovan.
- 💡 **Förstärk källgranularitet** (från granskningarna): `LIVSFASER_V2` bör peka på specifika SCB FASIT-tabellnummer, inte bara "FASIT 2022"; Skolverket-posten (per elev) bör ange konfidensintervall; "Socialstyrelsen + SKR 2024" bör specificera rapport.
- 💡 **Valideringscheck att lägga till i verify-skriptet:** jämför modellens aggregerade skatteintäkt mot SCB:s faktiska skatteintäkt (sektorräkenskaperna); flagga vid >5 % avvikelse.

---

## 4. Modellsvagheter — status mot de externa granskningarna

De två granskningsdokumenten (`Modellgranskning_Skatteplattformen.docx`, 14 punkter, maj 2026; `Kritisk_granskning_v2.docx`, mars 2026) ligger i `~/Documents/Claude/Projects/Skatteplattformen/`.

**Redan åtgärdat (bekräftat i kod/CLAUDE.md):**
- ✅ Hushållsdimension (`HOUSEHOLD_MULT`, `currentHousehold`) — var granskningarnas enskilt största felkälla
- ✅ Inkomstgradient på förmåner (`incomeGradient`, decilbaserad)
- ✅ Karriär-/inkomstprofiler (`INCOME_PROFILES`: standard / kort_utb / lang_utb / avbruten)
- ✅ Kapitalinkomst + 30 % kapitalskatt (`#s-kapital`)
- ✅ Tornado-sensitivitetsanalys (kommunalskatt ±3 pp)
- ✅ Åldersdifferentierad arbetsgivaravgift (≥66 reducerad)
- ✅ COFOG "Socialt skydd" uppdelat i 5 underkategorier
- ✅ Diskontering (2 % real) i livscykelvyn
- ✅ Delnings-URL med parametrar (`buildShareURL`)
- ✅ Parametrar uppdaterade 2024 → 2026 (motbevisar granskningarnas "hårdkodat 2024")

**Kvarstår:**
- ⬜ **Formell osäkerhetshärledning / Monte Carlo** — ±22 %/±12 %-banden saknar fortfarande formell grund. Minst: dokumentera källan ("variationskoefficient i FASIT-decildata + KPP regional variation").
- ⬜ **Validering mot SCB sektorräkenskaper** (se §3).
- ⬜ **Kommunväljare i UI** — `ksOverride`-infrastrukturen finns (används av tornado), men ingen slutanvändar-toggle för egen kommun (kommunalskatt varierar 29,7–35,6 %, ~17 tkr/år skillnad).
- ⬜ **Inkomstdifferentierad pensionskvot** — fortfarande 70 %/50 % platt (för högt för hög-, för lågt för låginkomsttagare).
- ⬜ **Förstärkt JSA för 66+** — modellen saknar det högre jobbskatteavdraget för äldre arbetande (fel 5–10 tkr/år för gruppen).
- ⬜ **Nuvärde som default i hero-snabbkollen** — diskontering finns i livscykelvyn, men snabbkollens kumulativa saldo är nominellt (överskattar 25–40 % över lång horisont). Överväg KPI-deflator-toggle.

---

## 5. UX, kommunikation & tillgänglighet

**Redan bra:** prislistan ligger tidigt i navigationen (granskningens rekommendation), delnings-URL finns, oberoende-badge i footern, 36 prislappar (upp från 25).

**Inaktuell valframing (ny, tidskänslig):**
- ⬜ Sajten ramas in som byggd **"inför valet 2026"** — bl.a. meta-beskrivningen (rad 8) och Schema.org-`description` (rad 30: *"…faktasajt om svenska skatter och välfärd inför valet 2026."*). Riksdagsvalet hölls i **september 2026** och har passerat. Framingen bör uppdateras till efter-val/löpande kontext (t.ex. "om svenska skatter och välfärd" utan valkoppling, alternativt koppla till den nya regeringens BP2027). CLAUDE.md:s backlogpunkt "Val 2026-sektion" är därmed också överspelad i sin ursprungliga form.

**Kvarstår (från kommunikatörsgranskningen):**
- ⬜ **"Om oss"-sektion** — footern saknar person/organisation, finansiering och omnämnande av extern granskning. Detta är en **P1-trovärdighetspunkt**: en oberoende, partipolitiskt neutral plattform bör namnge vem som står bakom, hur den finansieras och att den granskats.
- ⬜ **Responsiva/tillgängliga SVG-diagram** — kontrollera etikettstorlek på mobil (390 px), aria-labels på alla diagram, synligare osäkerhetsband (opacity .07 är nära osynligt), `aria-valuetext` på sliders, WCAG AA-kontrast.
- ⬜ **Hero-snabbkollens informationstäthet** — granskningen föreslog max ~4 element ovanför "fold"; verifiera efter designomarbetningen.
- ⬜ **Kollapsbar metodfottext** — den täta metodnoten under livscykeldiagrammet kan bli en expanderbar "Visa metod"-ruta.
- 💡 **Neutralitet i tonalitet** — enstaka solidaritetstexter ("det är vad ett civiliserat samhälle gör …") är värderande; "Perspektiv"-badgen hjälper men formulera mer deskriptivt.

---

## 6. Prioriterad åtgärdslista

| Pri | Åtgärd | Typ | Varför nu |
|-----|--------|-----|-----------|
| **P1** | Uppdatera BP2026 → **BP2027** (BDATA, hero, budgetdiagram, källtexter) + justera `verify_data_sync.py` | Data | Gällande budget sedan sept 2026 |
| **P1** | Verifiera & fast-forwarda `origin/main` till kanonisk linje; bekräfta GitHub Pages-gren | Repo | Rätt version live |
| **P1** | "Om oss"-sektion (vem, finansiering, granskning, version) | UX/trovärdighet | Oberoende-anspråket kräver det |
| **P2** | Uppdatera "inför valet 2026"-framing (meta + Schema.org) till efter-val-kontext | UX/SEO | Valet har passerat (sept 2026) |
| **P2** | 2027 års skatteparametrar (PBB 59,6; skiktgräns ~660 tkr) | Data/modell | Ikraft 1 jan 2027, kända nu |
| **P2** | Statsskuld: 2025 utfall (1 217→slutlig) + 2026-serien | Data | Prognos → faktiskt utfall finns |
| **P2** | Följ upp SCB KPP-leverans + ESV 2025-utfall (överdragen självflaggad uppd.) | Data | Deadline 2026-09-01 passerad |
| **P2** | Synka `budget_analys_2025.json` (Skr. 2024/25:98 → 2025/26:98) | Data | Släpar efter HTML |
| **P3** | Kommunväljare i UI (bygg på befintlig `ksOverride`) | Modell/UX | Stor regional variation |
| **P3** | Responsiva + tillgängliga SVG-diagram, synligare osäkerhetsband | UX/a11y | Mobil + WCAG |
| **P3** | Validering mot SCB sektorräkenskaper i verify-skriptet | Data/QA | Fångar aggregatfel >5 % |
| **P3** | Harmonisera prisårgång (2024 vs 2026) i `index.html` | Data | Konsekvens |
| **P4** | Inkomstdifferentierad pensionskvot; förstärkt JSA 66+ | Modell | Finjustering |
| **P4** | Formalisera osäkerhetsintervall (dokumentera källa / Monte Carlo) | Modell | Vetenskaplig stringens |
| **P4** | Nuvärde-default/KPI-toggle i hero-snabbkollen | UX | Minska överskattning |

---

## 7. Granskningsmetod (för spårbarhet)

- `git` branch-/divergensanalys (fetch 2026-10-26).
- `scripts/verify_data_sync.py` körd — 11/11 OK.
- Alla 10 datafiler inspekterade för källa/årgång.
- `index.html` (4 763 rader) genomsökt för parametrar, årtal, källhänvisningar, sektioner, footer.
- `CLAUDE.md`, `CHANGELOG.md`, `docs/UTVECKLINGSPLAN_V3.md` lästa.
- Båda externa granskningsdokumenten (`~/Documents/Claude/Projects/Skatteplattformen/`) lästa i sin helhet.
- Webbresearch för BP2027, PBB/skiktgräns 2027, statsskuldsutfall 2025 (märkta "prel." — bekräfta mot primärkälla; flera 2027-värden var ej slutgiltiga när de publicerades).
