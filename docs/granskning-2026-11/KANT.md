# Redan känt och åtgärdat (läs före granskningen)

Rapportera inte det här som nya fynd. Om du ser att något i listan **inte** fungerar som beskrivet, rapportera det som en regression.

## Granskningar som redan gjorts (oktober–november 2026)
- **Statistikgranskning, 98 fynd** (4–5 nov): alla rättade, se rättelseloggen `#rattelser` och CHANGELOG. Bland annat arbetsgivaravgiftens delar 2026, åldersgränser i födelseår, försvarets UO6-utfall, statsskuldens historik, räntor 2024, föräldrapenning, SiS, garantipension, vårdplatser, sjukpenningtalet, Gini (SCB 2011–2024), medianförmögenhet, personalmåtten, CPI 2025, Eurostats skuld oktober 2026, SCB:s befolkningsframskrivning 2026.
- **Användartest med fem personas** (5 nov), `docs/anvandartest/`: åtgärdat pensionsläge, egen firma, alla 290 kommuner, barn i Din ekonomi, ålder som siffra, sommarjobb, ordlista, större småtext, "Meny".
- **Missförstånd** (5 nov), `docs/MISSFORSTAND_2026-11.md`: genomsnittsskatt bredvid marginalskatt, Skatter i korthet flyttad, "största enskilda utgiftsområde", Malmöexemplet, skattekvoten och beskattade ersättningar, sjukfrånvaro från bottenåret, proportionellt kvitto, hundralappen med inkomstpension.
- **Vårdens utfall** (13 nov), `docs/VARDUTFALL_2026-11.md`: åtgärdbar dödlighet, diabetesinläggningar, canceröverlevnad (CONCORD-3, diagnos 2010–2014), cancerdödlighet; hjärtinfarkt och stroke förklarar olänkade och länkade data.

## Medvetna val (ändra inte, men föreslå gärna hur de bärs bättre)
- Rubriken "Vad fan får vi för pengarna?" och citatet om samhällskontraktet.
- Kvittot fördelar skatten i samma proportioner som de offentliga utgifterna 2024 utan inkomstpensionen (2 859 mdkr). Det står i metodraden.
- Förmånerna i Din ekonomi beror på ålder (och valet arbetar/studerar), inte på inkomst eller hushåll. Barnen visas i en egen ruta och läggs inte i den vuxnes staplar.
- Jämförelser: fast landsordning, inga flaggor, sammanfattningen räknas fram ur `JMF_DATA`.
- Filmen har nio kapitel; i stående mobilformat visas inte pensionsnoden och beloppen per mottagare.
- Bildspråk: papperssnittsscener och pictogram; linjeikoner bara i gränssnittet.

## Kända öppna punkter (behöver inte rapporteras igen)
- Filmen saknar röst (ägaren spelar in). Tandvård har linjeikon i filmen.
- CONCORD-4 (cancerdiagnoser till 2022) är inte inlagt än.
- OECD-snitten för länkad hjärtinfarkt- och strokedödlighet (8,6 och 12,1) är inte verifierade och står bara i text.
- Statistik för 2027 (budgetpropositionen 2027, statslåneräntan 30 november) väntar på ägarens beslut.
- Python-modellen i `data/` använder äldre definitioner (se metodrapporten 13.2 och kontrollskriptets info-rader).
- axe-test av den nya Jämförelser-vyn är inte gjort (bra uppgift för tillgänglighetsgranskaren).
