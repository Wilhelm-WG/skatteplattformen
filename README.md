# Skatteplattformen

**Vad fan får vi för pengarna?**

Oberoende, partipolitiskt neutral databas som visar hur svenska skattepengar används — i kronor och ören, per tjänst och per ålder. Byggd för val 2026.

## Webbplatsen

Öppna `index.html` i en webbläsare, eller hosta via GitHub Pages.

## Innehåll i detta repo

| Fil | Beskrivning |
|-----|-------------|
| `index.html` | Komplett webbplats — prislista, kalkylator, budgetdiagram |
| `data/livsfaser_v2.json` | **Enda sanningskällan**: 10 livsfaser, förmåner per kategori, skattemodell, kalibrering |
| `data/nta_profil_v2.json` | Genererad åldersprofil (av `nta_berakning.py`) som webbplatsen använder |
| `data/fasit_full.json` | FASIT-rekonstruktion: förmåner och skatt per 5-årsåldersgrupp |
| `data/fasit_analys.json` | Kalibrerad fördelningsanalys 2022 |
| `data/nta_berakning.py` | Python-skript som reproducerar `nta_profil_v2.json` från `livsfaser_v2.json` |
| `docs/skatteplattformen_metodrapport_v1.docx` | Akademisk metodrapport, 17 refs, redo för extern granskning |
| `docs/MODELLFIX_PLAN.md` | Plan/resonemang bakom v2.1-modellfixen |

> `skatteplattformen_data.xlsx` (ESV-tidsserier, FASIT) genereras lokalt och är gitignorerad — den krävs **inte** för att bygga webbplatsen eller regenerera JSON-modellen.

## Metodik

Modellen kombinerar:
- **SCB COFOG 2024** — 3 011 Mdkr total offentlig sektor
- **Skolverket 2024** — enhetskostnader per skolform
- **SCB ESSPROS 2022** — socialt skydd per funktion
- **NTA-metodik (UN 2013)** — åldersprofil sjukvård, kalibrerad mot AGENTA NTA 2010
- **Eurostat gov_10a_exp 2022** — EU-ranking per utgiftskategori

Fullständig metoddokumentation: se `docs/skatteplattformen_metodrapport_v1.docx`.

## Konfidensintervall

| Kategori | Osäkerhet | Källa |
|----------|-----------|-------|
| Utbildning | ±5% | Bekräftade enhetskostnader (Skolverket) |
| Sjukvård | ±25% | NTA-vikter, ej faktisk KPP-tabell |
| Social omsorg | ±20% | ESSPROS-fördelning + SKR |
| Kollektivt | ±10% | Platt fördelning, alternativa principer möjliga |

## Licenser

- **Kod:** MIT
- **Data:** CC0 (fri att använda utan krav på attribution)
- **Metodrapport:** CC BY 4.0

## Reproducerbarhet

```bash
python data/nta_berakning.py           # regenererar data/nta_profil_v2.json
python data/nta_berakning.py --verify   # kör verifieringstester (fasstruktur, skattemodell, COFOG-kalibrering)
```

Skriptet läser `data/livsfaser_v2.json` (enda sanningskällan för förmåner, skattesatser och befolkningsvikter) och regenererar `nta_profil_v2.json`. Finns den lokala Excel-filen byggs även dess `Beräkningsmodell`-flik; saknas den hoppas Excel-steget tyst över. Alla makrototaler kalibreras mot offentliga COFOG-siffror.

## Kända begränsningar

1. Åldersprofil sjukvård baseras på NTA-vikter, ej faktisk SKR KPP per åldersår (beställd från SCB mars 2026)
2. Inkomstpension (~800 Mdkr/år) ingår inte — avgiftsbaserad, ej skattesubvention
3. NTA-data för Norden från 2010 (senast tillgängliga via AGENTA)

## Rättelsepolicy

Fel erkänns omedelbart, rättas och loggas i `CHANGELOG.md`. Inga tysta uppdateringar.

## Kontakt & bidrag

Pull requests välkomna. Hittar du ett fel — öppna ett Issue.

---

*Skatteplattformen är partipolitiskt oberoende. Inga annonsörer. Inga partibidrag. Bara fakta.*
