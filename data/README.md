# data/

**Sajten (`index.html`) läser inga filer härifrån.** Allt som visas på sajten ligger
inline i `index.html`. De kanoniska nyckeltalen och källorna finns i objekten
`NYCKELTAL` och `KALLOR` där, och kontrolleras med `node scripts/kontroll.mjs`.

## Filer som används

| Fil | Används av | Status |
|---|---|---|
| `livsfaser_v2.json` | `nta_berakning.py` (Python-forskningsmodellen) | Egen modell med delvis andra definitioner än sajten (t.ex. förskola per barn i stället för åldersmedel). `kontroll.mjs` redovisar skillnaderna. |
| `nta_profil_v2.json` | Skrivs av `nta_berakning.py` | Åldersprofil (NTA) |
| `fasit_full.json`, `fasit_analys.json` | Dokumentation | SCB FASIT 2022 |
| `livslangd.json` | Dokumentation | SCB medellivslängd och framskrivning |
| `nta_berakning.py` | Fristående | Reproducerar åldersprofilen |

## arkiv/

Inaktuella filer som inte längre används och som innehöll värden som motsäger
sajten (rättade 2026-10-28): `statsskuld.json`, `oecd_utfall.json`,
`budget_analys_2025.json`, `framtidsutmaningar.json`. Sparas som historik.
Det gamla kontrollskriptet som byggde på dem ligger i `scripts/arkiv/`.
