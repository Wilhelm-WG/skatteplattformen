# Granskning 2: faktagranskare (statistiker och källgranskare)

Granskare: roll 2, `faktagranskare`. Datum: 2026-11-14. Underlag: `index.html` i arbetskopian (7 128 rader) och den renderade sidan från en lokal server på port 8772.

## 1. Sammanfattning

Siffrorna håller hög kvalitet. Av 30 stickprov mot primärkällor stämmer 25 exakt. Två avviker i definitionen (grundskolans kostnad per elev och skatten på kvittot), två har småfel i källraden, och ett kunde jag inte verifiera. Jag hittade inga grova sakfel. De största problemen gäller spårbarheten. Den automatiska länkningen av källnamn (`linkaKallor`) skickar läsaren till fel dokument i flera källrader, och texten säger att skatten "stämmer med skattetabell 32 på någon krona när", vilket inte gäller beloppen som visas. Kontrollskriptet ger 0 fel. Länkskriptets "trasiga" länkar svarade nästan alla vid en ny körning.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Korrekthet | 4 | 25 av 30 stickprov stämmer exakt mot källan, och inget av dem är ett sakfel som ändrar en slutsats. |
| Spårbarhet | 3 | Källa och år står nästan överallt, men de automatiska länkarna pekar i flera fall på fel dokument eller på myndigheternas startsidor. |
| Konsistens | 4 | `NYCKELTAL` och kontrollskriptet håller nyckeltalen samstämmiga, men grundskolan och gymnasiet redovisas på olika kostnadsbas, och folkmängden anges på två sätt. |
| Aktualitet | 4 | Mycket färskt: Eurostats andra notifiering i oktober 2026, PISA 2025 och Skolverket i oktober 2026. Riksgäldens prognos från maj ersätts den 26 november. |

## 3. Det som fungerar

- **`NYCKELTAL` med `gamla`-listan och `scripts/kontroll.mjs`**: rättade värden kan inte komma tillbaka obemärkt, och skattemodellen prövas mot tabell 32 (inom ±2 kr när avgifterna läggs till).
- **Källraderna är ovanligt konkreta**: täljare, nämnare och år står ofta utskrivna, till exempel "48,4 mdkr / 10,6 miljoner invånare". Det gjorde de flesta av stickproven möjliga.
- **Två skattekvoter hålls isär**: SCB:s serie (40,8 % 2024, 40,5 % 2025) och OECD:s (41,4 %, med OECD-snittet 34,1 %) är tydligt märkta. SCB:s tabell bekräftar varje värde i serien 2000–2025.
- **Statsskuld och Maastrichtskuld är åtskilda**: 21 % av BNP för statsskulden och 35,1 % för den offentliga bruttoskulden, med var sin källa.
- **Rättelseloggen** är detaljerad och daterad, och den stämmer med koden.

## 4. Fynd

### faktagranskare-01. Skatten på kvittot är inte den skatt som dras på lönebeskedet, och texten säger att den stämmer med tabell 32

- **Plats:** Metod, känslighetsanalysen (`index.html` rad 2923): "Inkomstskatten följer Skatteverkets regler och stämmer med skattetabell 32 på någon krona när". Din ekonomi, rad 2786: "Ditt kvitto visar skatten som dras från lönen". Startkvittot, faktakort 2 och 3 och ledsiffran i Din ekonomi (4 466 kr och 7 692 kr). `skattDelar`.
- **Belägg:** I Skatteverkets tabell 32 för 2026, kolumn 1, är avdraget 4 484 kr för lönebandet 24 801–25 000 kr och 7 750 kr för 38 201–38 400 kr. Sajten visar 4 466 kr och 7 692 kr ([tabell 32 via Skatteverkets öppna data](https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95/json?%C3%A5r=2026&tabellnr=32), primärkälla). Kontrollskriptet når ±2 kr bara för att det räknar med 30,84 % kommunalskatt plus 1,16 % (`scripts/kontroll.mjs` rad 52 och 68–73) och lägger till begravningsavgift, public service-avgift och skattereduktionen för förvärvsinkomst. Sajtens egna belopp innehåller inte de posterna. Jag räknade med sajtens funktioner (`/tmp/fk-scripts/skatt.mjs`): med en genomsnittlig begravningsavgift på 0,292 %, public service-avgiften och skattereduktionen blir skatten cirka 4 505 kr och 7 773 kr, alltså 40–80 kr mer i månaden. Rättelseloggen den 29 oktober beskriver valet av rikssnittet i stället för tabellen, men texten på rad 2923 ändrades inte.
- **Problem:** Det som visas är kommunal och statlig inkomstskatt minus jobbskatteavdraget, utan avgifter. Det är ett rimligt val, men det står inte där beloppet visas, och två texter beskriver det som något annat.
- **Varför det spelar roll:** Den som jämför med sitt lönebesked får en annan siffra, och sajten säger att den stämmer på kronan. Det är sajtens mest delade tal (startkvittot, delningsbilden och faktakorten), och skillnaden tär på förtroendet för allt annat.
- **Förslag:** Ändra rad 2923 till: "Inkomstskatten räknas med Skatteverkets regler för 2026 och rikssnittet för kommunalskatt. Med samma skattesats och samma avgifter stämmer modellen med skattetabell 32 på någon krona när." Lägg till en mening i metodraden under kvittona: "Begravningsavgift (i snitt 0,29 %) och public service-avgift ingår inte, och inte heller skattereduktionen för förvärvsinkomst. På ditt lönebesked blir skatten därför ofta 20–150 kr högre." Ändra rad 2786 till "Ditt kvitto visar inkomstskatten på lönen och vad den går till."
- **Allvar:** medel. **Säkerhet:** hög för tabellvärdena och för vad modellen innehåller, medel för storleken på begravningsavgiften. **Insats:** S. **Typ:** rättelse.

### faktagranskare-02. Grundskolans kostnad per elev räknas på annan bas än gymnasiets

- **Plats:** `CARDS` "Ett år i grundskolan" (rad 3383), `DETAILS['Ett år i grundskolan']` (rad 3425 och framåt, raden "Övrigt (bl.a. skolskjuts, administration)" på rad 3440), `NYCKELTAL.grundskola` (rad 3971), `START_JMF.grundskolaLasar`, ledsiffran i Prislistan (`VYER`), faktakort 12 (rad 4147), `LIVSFASER_V2` elev `utb:143`.
- **Belägg:** Skolverket, *Kostnader för skolväsendet och annan pedagogisk verksamhet 2025* (pdf13436, primärkälla). Tabell 1 "Samtliga verksamheter": grundskolan har total kostnad 162 091 258 tkr och **146 900 kr per elev**, och gymnasieskolan **148 100 kr**. Fotnot 6: "Inklusive kostnad för skolskjuts och nystartade eller nedlagda fristående skolor." Delkostnadstabellen (tabell 2A) summerar till 143 000 kr: undervisning 78 700, lokaler 26 200, måltider 8 200, lärverktyg 6 400, elevhälsa 5 100 och övrigt 18 400. För gymnasiet anger Skolverket 144 000 kr exklusive skolskjuts.
- **Problem:** Grundskolan visas exklusive skolskjuts (143 000 kr) och gymnasiet inklusive (148 100 kr). Prislappen säger "alla kostnadsslag", fast skolskjutsen (cirka 3 900 kr per elev) saknas. Detaljpanelen säger att skolskjutsen ligger i "Övrigt", vilket den inte gör, eftersom raderna summerar till 143 000 och inte till 146 900.
- **Varför det spelar roll:** Faktakort 12 ställer förskola, grundskola och gymnasium mot varandra. Med sajtens tal ser gymnasiet 3,6 % dyrare ut än grundskolan, men på samma bas är skillnaden 0,8 % (146 900 mot 148 100) eller 0,7 % (143 000 mot 144 000). Lärare och journalister citerar just den här jämförelsen.
- **Förslag:** Använd Skolverkets totalkostnad, 146 900 kr, för grundskolan (prislappen, `NYCKELTAL`, `START_JMF`, ledsiffran och faktakorten), och lägg till "varav skolskjuts m.m. cirka 3 900 kr" i detaljpanelen. Ändra "Övrigt (bl.a. skolskjuts, administration)" till "Övrigt (administration, kompetensutveckling m.m.)" och lägg till en rad "Skolskjuts m.m., 3 900". Det andra alternativet är att använda 143 000 och 144 000, båda märkta "exklusive skolskjuts". Flytta 143 000 till `gamla` och kör kontrollen.
- **Allvar:** medel. **Säkerhet:** hög för källvärdena, medel för att skillnaden utgörs just av skolskjuts (härlett ur fotnoterna). **Insats:** S. **Typ:** rättelse.

### faktagranskare-03. De automatiska källänkarna leder till fel dokument

- **Plats:** `KALLOR` (rad 3923 och framåt) och `linkaKallor()`. Det gäller särskilt `eurostat` (rad 3938, match `'Eurostat'`), `skatteverket` (rad 3930, match `'Skatteverket'`) och `skr` (rad 3944).
- **Belägg:** Jag räknade länkarna i den renderade sidan (Chrome headless `--dump-dom`, 98 källänkar):
  - Ordet "Eurostat" länkas på 3 ställen till Eurostats skuldpressmeddelande från **april 2026** (`2-22042026-bp`). Det gäller (a) faktakort 8 om offentlig skuld, (b) källraden till sjukvårdens vårdplatser (rad 2258) och (c) utbildningsutgifternas COFOG-mått på 7,2 % av BNP (rad 2409). Aprilmeddelandet anger EU-skulden till **81,7 %**, men sajten visar 81,5 %, som kommer från [oktobermeddelandet 2026](https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-21102026-ap) (primärkälla, kontrollerad: "in the EU from 80.3% to 81.5%", Sverige 35,1 %). Vårdplatserna och utbildningsutgifterna har inget med skuldmeddelandet att göra.
  - Ordet "Skatteverket" länkas på 4 ställen till SKV 433, den tekniska beskrivningen av skattetabellerna, även i källraderna "Skatteverket, Skatt på investeringssparkonto" (ISK, faktakort 11 och sparavsnittet) och "Skatteverket, skatteregler och arbetsgivaravgifter 2026".
  - "SKR" länkas 11 gånger till skr.se:s startsida, bland annat för KPP-prislapparna. "Skolverket" länkas 6 gånger och "Socialstyrelsen" 5 gånger till startsidor eller allmänna statistiksidor.
  - KALLOR-namnet "Eurostat, offentlig skuld (april 2026)" och tabellen Nyckeltal i Metod säger april, men texten på rad 2111 säger "Eurostat, oktober 2026".
- **Problem:** Länken ser ut som ett belägg men leder till ett dokument som inte innehåller siffran. I ett fall innehåller dokumentet till och med en annan siffra.
- **Varför det spelar roll:** "Källa + år för varje siffra" är sajtens löfte (ledsiffran i Metod). En granskare som klickar och inte hittar siffran drar slutsatsen att siffran är fel.
- **Förslag:** (1) Byt `KALLOR.eurostat` till `{namn:'Eurostat, offentligt underskott och skuld (oktober 2026)', match:['Eurostat oktober 2026','Eurostat, oktober 2026'], url:'https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-21102026-ap'}`, så att ett ensamt "Eurostat" inte länkas alls. Skriv ut tabellkoden i källraderna för vårdplatser (`hlth_rs_bds1`) och utbildning (`gov_10a_exp`). (2) Begränsa `skatteverket.match` till `['SKV 433']` och lägg till en egen post för ISK (Skatteverkets sida om investeringssparkonto) och för arbetsgivaravgifter. (3) Länka "SKR" bara när det finns en mer specifik källa, till exempel KPP-databasen, och låt annars namnet stå olänkat. (4) Lägg till en kontroll i `kontroll.mjs`: ingen `match` får vara ett ensamt organisationsnamn när `url` pekar på ett enskilt dokument.
- **Allvar:** hög. **Säkerhet:** hög. **Insats:** S–M. **Typ:** rättelse.

### faktagranskare-04. Räntekostnaden jämför budget 2026 med utfall 2025

- **Plats:** Budgeten, kortet "Räntekostnad 2026 (UO26)" (rad 2104–2106): "27,0 miljarder kronor 2026, jämfört med 31 miljarder kronor 2025 och 20 miljarder kronor 2024". På rad 1980 och i `BDATA`-kommentaren står "−6 % (budget mot budget)" och "UO26 budget 28,8 → 27,0".
- **Belägg:** Årsredovisning för staten 2025 (skr. 2025/26:101, primärkälla): "Räntor 31 505 … varav Räntor på statsskulden 30 119 [mnkr]" för 2025, och 20 119 mnkr för 2024. Ökningen 2025 "beror främst på att Riksgäldskontoret betalade ut inflationskompensation i samband med förfall av en realobligation".
- **Problem:** På samma sajt ställs 27,0 mot både 28,8 (budget 2025) och 31 (utfall 2025, och då hela räntekategorin, inte statsskuldsräntorna). Siffran 31 inkluderar dessutom en engångspost. Läsaren kan tro att räntorna faller med 13 %.
- **Varför det spelar roll:** Anslag och utfall blandas i en tidsserie, vilket är just det rollen ska fånga.
- **Förslag:** "Utgiftsområde 26 beräknas till 27,0 miljarder kronor 2026 (budget 2025: 28,8 miljarder). Utfallet för räntorna på statsskulden var 30,1 miljarder kronor 2025, högre än normalt eftersom en realobligation förföll, och 20,1 miljarder 2024 (Årsredovisning för staten)."
- **Allvar:** medel. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### faktagranskare-05. Skattekvoternas källrad pekar på fel serie, och stapeldiagrammet saknar källa

- **Plats:** Framtid, fliken Skatter (rad 2424–2475). Källraden på rad 2439: "svensk serie via Ekonomifakta; diagrammet visar OECD:s serie för både Sverige och OECD-snittet". Stapeldiagrammet "Skattekvot … Sverige 2010–2025" på rad 2448 och framåt.
- **Belägg:** Ekonomifaktas tabell (den länkade sidan, sekundärkälla) anger "OECD via Macrobond" och värdena 50,0 (2000), 43,1, 42,9, 42,6 och 41,4 (2024). Det är OECD:s serie, inte en svensk serie. Stapeldiagrammets värden (43,1, 42,9, 42,6, 40,8, 40,5) stämmer exakt med SCB:s tabell `SkattekvotBNP` (NR0103J), hämtad via SCB:s API. Där skiljer sig serierna bara för 2000 (48,6 mot 50,0) och 2024 (40,8 mot 41,4).
- **Problem:** "Svensk serie via Ekonomifakta" leder till OECD-serien, och stapeldiagrammet med SCB:s serie saknar egen källrad. Det var just blandningen av serierna som rättades den 28 oktober, och märkningen gör den svår att kontrollera.
- **Förslag:** Ändra källraden till: "Källor: linjediagrammet OECD Revenue Statistics 2025 (Sverige och OECD-snittet). Stapeldiagrammet och siffran 40,5 %: SCB, nationalräkenskaperna (skattekvot i procent av BNP), 2024–2025 preliminära." Länka SCB-delen till `KALLOR.scb_skattekvot` och ta bort Ekonomifakta-länken eller märk den "OECD:s serie".
- **Allvar:** låg. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### faktagranskare-06. Småfel i prislapparnas källrader

- **Plats och belägg:**
  - *Demens, särskilt boende* (rad 3418): "Kolada (N23009) … 1 125 650 kr per brukare 2025". Kolada:s API (v3, kommun 0000, 2025) ger i dag 1 122 432 kr, en avvikelse på 0,3 %. Värdet kan ha reviderats efter att det hämtades.
  - *Hemtjänst* (rad 3402): "räknat på genomsnittligt antal under året". Enligt Kolada:s definition av N21006 är nämnaren sedan 2021 "en kommunindividuell median" av månaderna. Beloppet 384 968 kr stämmer.
  - *Sjukpenning* (rad 3401): "max 1 259 kr/dag (80 % × 10 PBB 59,2 tkr / 365)". Den formeln ger 1 297 kr. Faktorn 0,97 saknas (0,8 × 0,97 × 592 000 / 365 = 1 259).
  - *Försvar per invånare* (rad 3404): "10,55 miljoner invånare". På andra ställen står 10,6 miljoner (rad 2161 och 3403), och SCB anger 10 587 700 den 31 december 2024. Med 10,59 miljoner blir det 21 250 kr, alltså oförändrat avrundat till 21 300 kr.
  - *Barnbidrag* (rad 3398 och `DETAILS`, rad 3528): "realt −25 %" och "tappat ca 25 % i köpkraft", utan källa. SCB:s KPI (skuggindex 2020=100) är 96,97 i mars 2018 och 125,97 i oktober 2026, vilket ger en köpkraft på 1/1,299, alltså **−23 %**. Med årsmedel 2018–2025 blir det cirka −22 %.
  - *Kollektivtrafiken* (faktakort 10, rad 4139): "46 % … Resten betalas med skatt …, cirka 37 miljarder kronor". Siffrorna stämmer med Trafikanalys (64,5 mdkr i kostnader, 29,5 mdkr i intäkter, 46 % och "drygt 37 miljarder … 3 474 kr"). Men 54 % av 64,5 är 34,8 mdkr. Bidragen var större än kostnaderna minus intäkterna, så ordet "resten" stämmer inte.
- **Förslag:** Byt till 1 122 400 kr (eller ange hämtdatum), skriv "median av årets månader", skriv "80 % × 0,97 × 10 PBB / 365", använd 10,6 miljoner överallt (eller `BEF_2025` som konstant), skriv "drygt 20 % (KPI mars 2018–oktober 2026, egen beräkning)", och skriv "Regioner, kommuner och staten bidrog med cirka 37 miljarder kronor, 3 500 kronor per invånare."
- **Allvar:** låg. **Säkerhet:** hög, utom för Kolada-revideringen (medel). **Insats:** S. **Typ:** rättelse.

## Stickprov (30 tal mot källan)

P = primärkälla, S = sekundärkälla. ✓ = stämmer, ≈ = avrundning, ✗ = avvikelse.

| # | Vy | Tal på sajten | Källans värde | Avvikelse | Källa |
|---|---|---|---|---|---|
| 1 | Start, faktakort 1 | Kommunalskatt 32,38 % (20,69 + 11,69) | 32,38 % (20,69 + 11,69) | ✓ | [SCB, Kommunalskatterna 2026](https://www.scb.se/hitta-statistik/statistik-efter-amne/offentlig-ekonomi/finanser-for-den-kommunala-sektorn/kommunalskatterna/pong/statistiknyhet/kommunalskatterna-2026/) P |
| 2 | Start, faktakort 3 | Medianlön 38 300 kr (2025) | 38 300 kr (P50, hela ekonomin) | ✓ | [SCB lönespridning 2025](https://www.scb.se/hitta-statistik/statistik-efter-amne/arbetsmarknad/loner-och-arbetskostnader/lonestrukturstatistik-hela-ekonomin/pong/tabell-och-diagram/lonespridning-efter-sektor-och-kon-2024/) P |
| 3 | Start, kvittot | Skatt 4 466 kr på 25 000 kr | Tabell 32: 4 484 kr (24 801–25 000) | ✗ definition, se -01 | [Skatteverket, tabell 32](https://skatteverket.entryscape.net/rowstore/dataset/88320397-5c32-4c16-ae79-d36d95b17b95/json?%C3%A5r=2026&tabellnr=32) P |
| 4 | Start, faktakort 3 | Skatt 7 692 kr på 38 300 kr | Tabell 32: 7 750 kr (38 201–38 400) | ✗ definition, se -01 | samma P |
| 5 | Start, jämförelser | Riksdagsarvode 81 400 kr (2026) | 81 400 kr från 1 jan 2026 | ✓ | [Riksdagens arvodesnämnd 27 okt 2025](https://www.riksdagen.se/globalassets/06.-kontakt-och-besok/riksdagens-myndigheter-och-namnden/arvodesnamnden/riksdagens-arvodesnamnd-protokollsutdrag-27-oktober-2025.pdf) P |
| 6 | Start, jämförelser | Polisens medellön 43 900 kr (2025) | 43 900 kr (yrke 3360) | ✓ | [SCB lönestatistik, polis](https://www.scb.se/lonestatistik/polis/) P |
| 7 | Start, jämförelser | Archer: 48 pjäser för cirka 5 mdkr | FMV sept 2023: 48 pjäser, cirka 5 mdkr | ✓ | [Nordic Defence Sector](https://nordicdefencesector.com/en/article/fmv-procures-48-archer-artillery-systems) S |
| 8 | Start, faktakort 4 | Pensionsrätt 4 301 kr på 25 000 kr (18,5 % av 93 %) | 25 000 × 0,93 × 0,185 = 4 301 | ✓ | [Pensionsmyndigheten](https://www.pensionsmyndigheten.se/forsta-din-pension/sa-fungerar-pensionen/sa-tjanar-du-in-till-din-pension) P |
| 9 | Start, faktakort 7 | 2 699 mdkr i skatter 2025, 57 % från arbete | 2 699,1 mdkr; skatt på arbete 1 551,0 (57,5 %) | ✓ | [Årsredovisning för staten 2025](https://www.regeringen.se/contentassets/1f1553b2b7f74ded921df946bd64dba8/arsredovisning-for-staten-2025-skr.-202526101.pdf) P |
| 10 | Start, faktakort 10 | Kollektivtrafik: 46 %, 64,5 mdkr, 37 mdkr | 46 %, 64,5, drygt 37 mdkr, 3 474 kr/inv | ✓ (formulering, se -06) | [Trafikanalys 2025](https://www.trafa.se/globalassets/statistik/kollektivtrafik/kollektivtrafik/2025/regional-linjetrafik-2025.pdf) P |
| 11 | Din ekonomi, ISK | 1,065 % över 300 000 kr | SLR 2,55 % + 1 = 3,55 % × 30 % = 1,065 %; 300 000 kr skattefritt | ✓ | [Forvis Mazars om SLR](https://www.forvismazars.com/se/sv/insikter/nyhetsbrev-artiklar/artiklar-fraan-forvis-mazars-nyhetsbrev/statslaaneraenta-foer-2025-aer-faststaelld) S; Skatteverket P |
| 12 | Din ekonomi, ordlistan | Brytpunkt ca 660 000 kr, skiktgräns 643 000 kr | 660 400 kr, 643 000 kr | ≈ | [Skatteverket, belopp och procent 2026](https://www.skatteverket.se/privat/skatter/beloppochprocent/2026) P |
| 13 | Budget | Utgifter 1 542, inkomster 1 375, saldo −167 mdkr | 1 542 / 1 375 / −167 | ✓ | [Prop. 2025/26:1](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/_HD031/) P |
| 14 | Budget | UO6 225,0 mdkr | ram 225 022 485 tkr | ✓ | [Prop. 2025/26:1, UO6](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/yttrande/utgiftsram-for-utgiftsomrade-6-forsvar-och_hd05f%C3%B6u2y/) P |
| 15 | Budget | Saldo −196 mdkr, statsskuld 1 430 mdkr (21 %) | Statsupplåning 2026:1 (28 maj): −196, 1 430, cirka 21 % | ✓ | [Riksgälden 2026:1](https://mfn.se/a/riksgalden/riksgalden-lanar-mer-for-att-tacka-statens-underskott) P |
| 16 | Budget och faktakort 8 | Maastrichtskuld 35,1 %, EU 81,5 % (2025) | Okt 2026: Sverige 35,1 %, EU 81,5 % | ✓ (länken går till april, se -03) | [Eurostat 21 okt 2026](https://ec.europa.eu/eurostat/web/products-euro-indicators/w/2-21102026-ap) P |
| 17 | Budget | Räntor UO26: 31 mdkr 2025, 20 mdkr 2024 | Statsskuldsräntor 30,1 (2025), 20,1 (2024); alla räntor 31,5 | ✗ definition, se -04 | Årsredovisning för staten 2025 P |
| 18 | Prislistan | Grundskola 143 000 kr per elev | Total 146 900 kr; delkostnader 143 000 | ✗ bas, se -02 | [Skolverket pdf13436](https://www.skolverket.se/download/18.615052d71a0adaf499e4b1f6/1790336879514/pdf13436.pdf) P |
| 19 | Prislistan | Gymnasium 148 100 kr (144 000 exkl.) | 148 100; 144 000 | ✓ | samma P |
| 20 | Prislistan | Förskola 199 200 kr (kommunal); fristående 172 800 | 199 200; 172 800 | ✓ | samma P |
| 21 | Prislistan | Garantipension 11 988 kr/mån ogift, 10 853 gift | 11 988; 10 853 | ✓ | [Pensionsmyndigheten PM 7615 (26-01)](https://www.pensionsmyndigheten.se/content/dam/pensionsmyndigheten/blanketter---broschyrer---faktablad/broschyrer-och-faktablad/faktablad/2025/PM-7615-Garantipension-26-01.pdf) P |
| 22 | Prislistan | Maxtaxa förskola 1 547 kr/mån från 1 juli 2026 | 1 547 kr | ✓ | [Regeringen jan 2026](https://www.regeringen.se/pressmeddelanden/2026/01/regeringen-sanker-avgiften-for-forskolan/) P, kommuner S |
| 23 | Prislistan | Hemtjänst 385 000 kr (N21006) | 384 968 kr (2025, riket) | ≈ (definition, se -06) | [Kolada API v3](https://api.kolada.se/v3/data/kpi/N21006/municipality/0000/year/2025) P |
| 24 | Prislistan | Särskilt boende 1 125 650 kr (N23009) | 1 122 432 kr (2025, riket) | ✗ −0,3 % | [Kolada API v3](https://api.kolada.se/v3/data/kpi/N23009/municipality/0000/year/2025) P |
| 25 | Prislistan | Räddningstjänst 1 007 kr/inv | 1 007 kr (N07009, 2025) | ✓ | [Kolada API v3](https://api.kolada.se/v3/data/kpi/N07009/municipality/0000/year/2025) P |
| 26 | Prislistan | Högkostnadsskydd läkemedel 3 800 kr | 3 800 kr (perioder från 1 juli 2025) | ✓ | [1177](https://www.1177.se/Stockholm/undersokning-behandling/behandling-med-lakemedel/att-fa-recept-och-att-kopa-lakemedel/lakemedel-pa-recept--kostnader/) S |
| 27 | Jämförelser, ledsiffran | Vård 11,2 % av BNP (2023) | 11,2 % (SCB SHA 2023) | ✓ | [SCB, System of Health Accounts 2023](https://www.scb.se/en/finding-statistics/statistics-by-subject-area/national-accounts/national-accounts/system-of-health-accounts-sha/pong/statistical-news/system-of-health-accounts-2023) P |
| 28 | Jämförelser | PISA 2025: matematik 464, naturvetenskap 485 | Naturvetenskap 485; matematik 482 − 18 = 464 | ✓ | [Skolverket via TT, 8 sept 2026](https://via.tt.se/pressmeddelande/4531809/pisa-2025-fortsatt-nedgang-for-15-aringar-i-sverige-och-andra-lander) P |
| 29 | Framtid | Skattekvot SCB 48,6 (2000), 43,1 (2010), 42,9 (2015), 42,6 (2020), 40,8 (2024), 40,5 (2025) | Identiska | ✓ | SCB `SkattekvotBNP` (NR0103J), API P |
| 30 | Framtid och ledsiffran | 80+: 648 000 (2024) → 817 000 (2030), +26 % | Framskrivningen 2025 gav 812 000; 2026 års tal hittades inte i sökbar form | kunde inte verifiera | [SCB, framskrivningen 2026–2070](https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/befolkningens-sammansattning-och-utveckling/befolkningsframskrivningar/pong/statistiknyhet/sveriges-framtida-befolkning-2026-2070/) P |

Dessutom kontrollerat utan avvikelse: medellivslängd 84,1 år (Världsbankens WDI 2024 = 84,06 enligt sekundära sammanställningar; SCB:s egen siffra 2024 är 85,4 för kvinnor och 82,3 för män, så valet av Världsbanken för alla länder är konsekvent), OECD-snittet för skattekvoten 34,1 % (OECD Revenue Statistics 2025), statsbudgetens 27 utgiftsområden (summa 1 543,2 mdkr, avrundning), hundralappen 2026 (andelarna stämmer med `BDATA`), offentliga utgifter 3 223 mdkr 2024 (Eurostats tabell: 50,0 % av BNP 6 443 mdkr), arbetsgivaravgiften 7 855 kr och 12 034 kr samt 3 910 kr ålderspension, och ISK-exemplet 7 455 kr.

## 5. De tre viktigaste åtgärderna

1. **Rätta källänkarna (faktagranskare-03).** Spårbarheten är sajtens främsta löfte, och i dag leder flera länkar till dokument utan siffran, ett av dem med en annan siffra (81,7 mot 81,5). Det går fort att rätta i `KALLOR` och att kontrollera i skriptet.
2. **Säg vad skatten på kvittot är (faktagranskare-01).** Det är sajtens mest spridda tal. Texten "stämmer med skattetabell 32 på någon krona när" stämmer inte för beloppet som visas, och den som jämför med sitt lönebesked får en annan siffra. Två meningar räcker.
3. **Lägg grundskola och gymnasium på samma kostnadsbas (faktagranskare-02).** Jämförelsen förskola–grundskola–gymnasium citeras ofta, och i dag ger den en skillnad som inte finns i källan.

## 6. Frågor till ägaren

- **Kvittots skattebegrepp:** ska kvittot visa inkomstskatt utan avgifter, som nu och bara tydligare märkt, eller skatteavdraget så som det blir på lönebeskedet (med begravningsavgift och public service-avgift)? Det andra kräver ett antagande om begravningsavgift och ändrar tal på många ställen.
- **Grundskolan:** 146 900 kr (Skolverkets totalkostnad, samma bas som gymnasiet) eller 143 000 och 144 000 (båda exklusive skolskjuts)?
- **Riksgälden publicerar en ny prognos den 26 november 2026.** Ska budgetsaldot −196 mdkr och statsskulden 1 430 mdkr uppdateras då, eller ingår det i beslutet om 2027 års statistik?
- **Försvarets ökning:** sajten skriver +33 % mot budgeten för 2025 (168,8 mdkr). Regeringen och riksdagen skriver att anslagen ökar med 26,6 mdkr, eller 18 %, mot 2025, alltså mot en annan bas, troligen inklusive ändringsbudgetarna. Jag kunde inte verifiera vilken bas 168,8 avser. Det bör stå i källraden vilken jämförelse som görs.

## 7. Metod och avgränsning

- **Verktyg:** `node scripts/kontroll.mjs` (0 fel, 45 OK, 5 info om Python-modellen, som redan är känd). `node scripts/lankar.mjs`: 60 länkar, 40 svarade 200, 3 gav 403 (OECD blockerar robotar) och 17 timeout. En ny körning med curl gav 200 för de flesta av dessa, så de verkar bero på samtidiga anrop, inte på döda länkar. Världsbankens API och data.worldbank.org blockerade mina anrop (WAF), så Världsbankens värden kontrollerades via sekundära sammanställningar.
- **Primärkällor hämtade direkt:** Skolverket pdf13436, Trafikanalys Regional linjetrafik 2025 och Årsredovisning för staten 2025. Texten extraherades med ett eget skript (`/tmp/fk-scripts/pdftxt.py`, filerna i `/tmp/fk-dl/`). Dessutom Eurostats pressmeddelande 21 oktober 2026, Skatteverkets tabell 32 (öppna data), Kolada API v3 och SCB:s API (skattekvot och KPI). Övriga värden kontrollerades med webbsökning mot myndighetssidor. Säkerheten är angiven per fynd.
- **Sajtens funktioner** kördes i Node `vm` på samma sätt som i `kontroll.mjs` (`/tmp/fk-scripts/skatt.mjs`). Den renderade sidan dumpades med Chrome headless (`--dump-dom`) från en lokal server på port 8772 för att räkna källänkarna. Servern är stoppad. Inga skärmbilder behövdes för fynden.
- **Inte kontrollerat:** de flesta av de 36 jämförelsediagrammen i `JMF_DATA` (bara vårdutgiften och PISA), vårdgarantin 91 % och 63 % (augusti 2026), Kriminalvårdens dygnskostnad 4 110 kr, KPP-baserade prislappar (förlossning, höftled, kroniska sjukdomar), Framtids flikar om personal, investeringar och sjukfrånvaro, samt livsloppsdiagrammet (`LIVSLOPP_BEF`). Modellens antaganden ligger hos roll 3.
- **Ändringar i repot:** inga utom den här filen.
