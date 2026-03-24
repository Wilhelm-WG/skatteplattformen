# Modellfix: Synka Python- och JavaScript-beräkningarna

## Problem 1: Två separata förmånsmodeller som ger helt olika siffror

### Vad som är fel

Python-skriptet (`nta_berakning.py`) och JavaScript-kalkylatorn i `index.html` har **två helt oberoende uppsättningar förmånsvärden per livsfas** som aldrig synkats.

**Exempel — ålder 0–5, sjukvård:**
- Python (`LIVSFASER`): 70 tkr/år
- JavaScript (`STAGES`): 48 tkr/år

**Totaleffekt över ett helt liv (0–80 år):**
- Python: 12 338 tkr totala förmåner
- JavaScript: 23 780 tkr totala förmåner
- **Skillnad: +93%** — JavaScript visar nästan dubbelt så höga förmåner

### Varför de skiljer sig

1. **Olika kategoriindelning.** Python har 10 poster (sjukvård, sjukförsäkring, familj, studiemedel, högskola, skola, infra, kommunal service, äldreomsorg, garantipension). JavaScript slår ihop dessa till 5 kategorier (utbildning, sjukvård, socialt, kollektivt, omsorg).

2. **JavaScript inkluderar "kollektiva nyttigheter" (60 tkr/år alla åldrar).** Python-modellen har ingen motsvarighet. Det är ca 600 Mdkr/år (försvar, rättsväsende, administration) som fördelats platt. Bara den posten = 60 × 81 år = **4 860 tkr extra** i JavaScript.

3. **Åldersintervallen matchar inte exakt.** Python: 0–5, 6–15, 16–19, 20–24, 25–34, 35–44, 45–64, 65–80. JavaScript: 0–6, 7–15, 16–18, 19–25, 26–34, 35–44, 45–54, 55–64, 65–74, 75–85. Mer granulära faser i JavaScript fångar bättre de höga kostnaderna 75–85.

4. **Sjukvårdskostnaderna divergerar kraftigt i övre åldrar.** Python: 195 tkr/år för 65–80. JavaScript: 235 tkr/år för 65–74 OCH 380 tkr/år för 75–85. JavaScript stämmer bättre med Socialstyrelsens data.

### Lösning

**En enda sanningskälla.** Vi skapar en ny JSON-fil `data/livsfaser_v2.json` som blir den kanoniska modellen. Både Python och JavaScript läser från den.

**Steg:**

1. **Definiera enhetlig kategoristruktur:**
   - `utbildning` (förskola + grundskola + gymnasium + högskola + CSN)
   - `sjukvård` (UO9 + regional sjukvård + läkemedel)
   - `socialt_skydd` (sjukförsäkring + barnbidrag + föräldrapenning + pension)
   - `äldreomsorg` (hemtjänst + särskilt boende)
   - `kollektivt` (försvar + rättsväsende + infrastruktur + administration)

2. **Använd JavaScript-faserna (10 faser, 0–85)** som utgångspunkt — de är mer granulära och stämmer bättre med verkligheten efter 65.

3. **Kalibrera varje fas mot COFOG 3 011 Mdkr:**
   - Summera: `per_capita × åldersgrupp_befolkning` för alla faser
   - Kontrollera att summan matchar COFOG-totalen
   - Justera proportionellt om det inte stämmer

4. **Varje värde ska ha en källhänvisning** i JSON:en:
   ```json
   {
     "fas": "0-6",
     "utbildning": {"tkr": 185, "källa": "Skolverket 2024: förskola 185 000 kr/barn"},
     "sjukvård": {"tkr": 50, "källa": "NTA-profil 0-4 år: BVC + barnmedicin"}
   }
   ```

5. **Python-skriptet uppdateras** att läsa `livsfaser_v2.json` istället för hårdkodade `LIVSFASER`.

6. **JavaScript uppdateras** att läsa samma JSON via inline-data (eller fetch).

---

## Problem 2: Skatteberäkningen skiljer 35% mellan Python och JS

### Vad som är fel

| Komponent | Python | JavaScript | Skillnad |
|-----------|--------|------------|----------|
| Kommunalskatt | 32,00% | 31,75% | -0,25 ppt |
| Statlig skatt | 20% >598 tkr | 20% >598 tkr | Lika |
| Arbetsgivaravgift | **31,42%** (full) | **14,2%** (ex pension) | **-17,2 ppt** |
| Moms | 6,5% av netto | 6,5% av netto | Lika |
| **Total per år (500 tkr)** | **339 tkr** | **252 tkr** | **+87 tkr (+35%)** |
| **Total 40 år** | **13 568 tkr** | **10 077 tkr** | **+3 491 tkr** |

### Kärnfrågan: Ska pensionsavgiften räknas som skatt?

**Argument FÖR (Pythons modell):**
- Arbetsgivaravgiften är 31,42% totalt, varav ca 10,21% är ålderspensionsavgift
- Arbetsgivaren betalar det oavsett — det syns inte på lönebeskedet
- Ekonomiskt är det en kostnad för att anställa dig

**Argument MOT (JavaScripts modell):**
- Pensionsavgiften ger dig en individuell pensionsrätt — det är inte en "skatt" i samma mening som kommunalskatt
- Modellen exkluderar redan inkomstpensionen som förmån, så om vi räknar in pensionsavgiften som skatt utan att räkna pensionen som förmån skapas en systematisk obalans

**Rekommendation: JavaScript har rätt.** Eftersom vi exkluderar inkomstpensionen (ca 800 Mdkr) från förmånssidan, ska vi exkludera pensionsavgiften (ca 10,21%) från skattesidan. Annars jämför vi äpplen med päron.

Dock bör det **synas tydligt** att pensionsavgiften existerar — en fotnot eller "toggle" som visar "med/utan pensionsavgift".

### Lösning

1. **Standardisera på JavaScript-modellens skatteberäkning** (14,2% arbetsgivaravgift exkl. pension).

2. **Lägg till en toggle i kalkylatorn:** "Inkludera pensionsavgift som skatt" (av som standard).

3. **Fixa momsberäkningen.** Nuvarande 6,5% av nettoinkomst underskattar rejält. Realistiskt betalar svenska hushåll ca 10–12% av disponibel inkomst i moms (SCB HE0201 Hushållens utgifter). Beräkningslogik:
   - Disponibel inkomst = brutto − kommunalskatt − statlig skatt
   - Sparkvot ca 15% (SCB sparkvot 2024)
   - Konsumtion = disponibel × 0,85
   - Genomsnittlig momsats på konsumtion: ca 18% (blandning 25%/12%/6%)
   - Effektiv moms = konsumtion × 0,18 / 1,18 ≈ **~12% av disponibel**
   - Nytt momsbelopp (500 tkr brutto): ca 41 tkr/år vs nuvarande 22 tkr

4. **Pensionärshantering** (JavaScript har, Python saknar):
   - Pensionärer: lägre inkomst (70–80% av yrkesaktiv), ingen arbetsgivaravgift
   - Lägre kommunalskatt (jobbskatteavdraget gäller ej)
   - Lägg till i Python-modellen

### Sammanfattning: Ny skattemodell

```
skatt(brutto, ålder):
  kommunalskatt   = brutto × 0.3175
  statlig_skatt   = max(0, brutto − 598) × 0.20
  arbetsgivaravg  = brutto × 0.142 (ex pension)  # toggle: 0.3142 inkl pension
  disponibel      = brutto − kommunalskatt − statlig_skatt
  konsumtion      = disponibel × 0.85
  moms            = konsumtion × 0.18 / 1.18

  if ålder >= 65:
    brutto = brutto × 0.75  # pensionsinkomst ca 75% av slutlön
    arbetsgivaravg = 0
    kommunalskatt = brutto × 0.3175 + jobbskatteavdrag_diff

  return kommunalskatt + statlig_skatt + arbetsgivaravg + moms
```

---

## Implementationsordning

1. Skapa `data/livsfaser_v2.json` — enda sanningskällan
2. Uppdatera skatteberäkningen i JavaScript (moms + toggle pension)
3. Synka Python-skriptet att läsa från samma JSON
4. Kalibrera totaler mot COFOG 3 011 Mdkr
5. Lägg till verifieringstest: `python data/nta_berakning.py --verify`
6. Uppdatera CHANGELOG.md
