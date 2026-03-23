# Skatteplattformen

**Vad fan får vi för pengarna?**

Oberoende, partipolitiskt neutral databas som visar hur svenska skattepengar används — i kronor och ören, per tjänst och per ålder. Byggd för val 2026.

## Webbplatsen

Öppna `index.html` (döp om från `skatteplattformen.html`) i en webbläsare, eller hosta via GitHub Pages.

## Innehåll i detta repo

| Fil | Beskrivning |
|-----|-------------|
| `index.html` | Komplett webbplats — prislista, kalkylator, budgetdiagram |
| `skatteplattformen_data.xlsx` | Excel-modell: ESV-tidsserier 2010–2025, FASIT-analys, KPI-justering |
| `skatteplattformen_metodrapport_v1.docx` | Akademisk metodrapport, 17 refs, redo för extern granskning |
| `data/nta_profil_v2.json` | NTA-åldersprofil: 86 åldersår × 4 kategorier × konfidensintervall |
| `data/fasit_full.json` | FASIT-rekonstruktion: förmåner och skatt per 5-årsåldersgrupp |
| `data/fasit_analys.json` | Kalibrerad fördelningsanalys 2022 |
| `data/nta_berakning.py` | Python-skript som reproducerar åldersprofilen från öppna källor |

## Metodik

Modellen kombinerar:
- **SCB COFOG 2024** — 3 011 Mdkr total offentlig sektor
- **Skolverket 2024** — enhetskostnader per skolform
- **SCB ESSPROS 2022** — socialt skydd per funktion
- **NTA-metodik (UN 2013)** — åldersprofil sjukvård, kalibrerad mot AGENTA NTA 2010
- **Eurostat gov_10a_exp 2022** — EU-ranking per utgiftskategori

Fullständig metoddokumentation: se `METODRAPPORT.docx`.

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
python data/nta_berakning.py
```

Producerar `nta_profil_v2.json` från scratch. Alla makrototaler kalibreras mot offentliga COFOG-siffror.

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
