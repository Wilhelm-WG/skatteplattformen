# Skatteplattformen – metodrapport v3.0

**Beräkningsmodell för skatter, offentliga utgifter och förmåner per ålder**

Version 3.0 · 5 november 2026 · Text och siffror: CC BY 4.0 · Kod: MIT · Partipolitiskt oberoende

Sajt: <https://wilhelm-wg.github.io/skatteplattformen/> · Källkod: <https://github.com/Wilhelm-WG/skatteplattformen>

Rapporten ersätter metodrapport v2.0 (27 oktober 2026). Alla siffror är kontrollerade mot `index.html` den 5 november 2026. Där koden och texten på sajten säger olika saker står det i avsnitt 13.

---

## Sammanfattning

Skatteplattformen visar vad skatten betalar för, vad offentliga tjänster kostar och hur skatter och förmåner fördelar sig över ett liv. Hela sajten är en HTML-fil. Alla beräkningar görs i webbläsaren med kod som går att läsa.

Modellen har fyra delar:

1. **En skattemodell** för inkomstskatt, arbetsgivaravgift och moms med 2026 års regler. Inkomstskatten stämmer med Skatteverkets skattetabell 32 på ±1 kr i 39 kontrollpunkter.
2. **En förmånsmodell** som ger det genomsnittliga värdet av skola, vård, omsorg och ersättningar per år för tio åldersgrupper. Summerat över befolkningen 2024 stämmer modellen inom 3 % med de faktiska utgifterna för hälso- och sjukvård (474 mdkr), äldreomsorg (166 mdkr) och socialt skydd utom äldreomsorg och inkomstpension (694 mdkr).
3. **Kvitton och hundralappen**, som fördelar skatten som den offentliga sektorns utgifter 2024 (Eurostat COFOG, 3 223 mdkr).
4. **Ett livsloppsdiagram** som visar netto per invånare och åldersgrupp 2024, med modellens skatt på SCB:s faktiska inkomster.

Sedan v2.0 har modellen ändrats på flera viktiga punkter. Totalen för offentliga utgifter är 3 223 mdkr i stället för 3 011. Inkomstpensionen är 363,7 mdkr i stället för cirka 800. Förmånerna beror bara på ålder. Hushålls- och inkomstjusteringarna är borttagna. Gemensamma utgifter (cirka 100 000 kr per invånare) visas för sig och ingår inte i jämförelsen mellan förmåner och skatt. Prislistan har 34 prislappar.

---

## 1. Syfte och avgränsning

### 1.1 Vad modellen visar

- **Skatten på en lön** med 2026 års regler: kommunalskatt, statlig inkomstskatt, jobbskatteavdrag, arbetsgivaravgift och en uppskattad moms. Kommunalskatten är rikssnittet 32,38 % om läsaren inte väljer en kommun.
- **Vad skatten går till**, fördelat som den offentliga sektorns utgifter 2024 (Eurostat COFOG). Startkvittot har sju rader. Kvittot i Din ekonomi har femton.
- **Vad arbetsgivaren betalar** ovanpå lönen, uppdelat på arbetsgivaravgiftens sju delar.
- **Genomsnittliga förmåner per år och åldersgrupp** i fyra kategorier: utbildning, hälso- och sjukvård, socialt skydd och äldreomsorg, i 2024 års priser.
- **Livsloppet**: netto per invånare i tio åldersgrupper för hela befolkningen 2024, och en punkt för läsarens ålder och lön.
- **En prislista** med 34 offentliga tjänster och vad de kostar.
- **Jämförelser** med sex andra länder (Norge, Danmark, Finland, Island, Tyskland och USA) i 28 diagram, och statsbudgeten 2026.

### 1.2 Vad modellen inte visar

- **Inkomst- och tilläggspensionen.** Den betalas med pensionsavgifter (18,5 % av den pensionsgrundande inkomsten) och ger egen rätt till pension. Den var 363,7 mdkr 2024 (Pensionsmyndigheten, Orange rapport 2024, tabell 2.1). Den ingår inte i förmånerna och inte i kvittonas fördelning. Ålderspensionsavgiften (10,21 %) räknas inte som skatt i kalkylatorns standardläge.
- **En prognos för en enskild person.** Alla i samma ålder får samma förmåner. Modellen tar inte hänsyn till inkomst, hushåll eller bostadsort på förmånssidan.
- **Gemensamma utgifter som en personlig förmån.** Försvar, rättsväsende, vägar, förvaltning och räntor (COFOG-funktionerna 01–06 och 08, 1 061,3 mdkr) motsvarar cirka 100 000 kr per invånare. Beloppet visas för sig och ingår inte i jämförelsen förmåner–skatt. Skälet är att skattesidan bara innehåller personens egna skatter. Bolagsskatt, punktskatter, avgifter och lån finansierar också det gemensamma.
- **Ett livstidsnetto.** Sajten visar ett år i taget. Beloppen är inte diskonterade eller justerade för inflation.
- **Formella konfidensintervall.** Osäkerheten är en bedömning (avsnitt 11).
- **Kapitalinkomster i standardvyn.** Reglaget för kapitalinkomst är borttaget. Koden räknar 30 % skatt på kapitalinkomst bara om en delad länk innehåller parametern `kapital`.

---

## 2. Datakällor

Förmånerna och kvittonas fördelning gäller 2024. Skatteregler, avgifter och statsbudget gäller 2026.

| Källa | Data | År |
|---|---|---|
| Eurostat, offentliga utgifter efter ändamål (COFOG, gov_10a_exp) | Den offentliga sektorns utgifter, 3 223 mdkr, per funktion. Hälso- och sjukvård (GF07) 473,7 mdkr, socialt skydd (GF10) 1 223,5 mdkr, utbildning (GF09) 464,7 mdkr, övriga funktioner 1 061,3 mdkr | 2024 |
| Pensionsmyndigheten, Orange rapport 2024, tabell 2.1 | Inkomst- och tilläggspension 363,7 mdkr | 2024 |
| Kolada (N20043) | Kommunal äldreomsorg 15 686 kr per invånare, cirka 165,5 mdkr | 2024 |
| SCB, befolkningsstatistik | Folkmängd per ettårsklass 31 december, totalt 10 587 710 | 2024 |
| SCB, inkomststatistik (HE0110) | Sammanräknad förvärvsinkomst per ålder och inkomstklass (livsloppet) | 2024 |
| SCB, lönestrukturstatistik | Medianlön 38 300 kr i månaden; polisens medellön 43 900 kr | 2025 |
| SCB, Kommunalskatterna 2026 | Rikssnitt 32,38 % (kommun 20,69 + region 11,69); lägst 28,93 % (Österåker), högst 35,65 % (Dorotea) | 2026 |
| Skatteverket, teknisk beskrivning SKV 433 (2026) | Grundavdrag, förhöjt grundavdrag, jobbskatteavdrag, skiktgräns 643 000 kr | 2026 |
| Skatteverket, skattetabell 32 | Kontroll av skattemodellen | 2026 |
| Skatteverket, arbetsgivaravgifter | 31,42 % och dess sju delar; nedsättning för unga och äldre | 2026 |
| Skolverket, Kostnader för skolväsendet 2025 | Förskola 199 200 kr per barn (kommunal), grundskola 143 000 kr och gymnasium 148 100 kr per elev | 2025 |
| UKÄ, årsrapport 2026 | Högskola cirka 114 000 kr per helårsstudent | 2025 |
| Försäkringskassan | Åldersprofil för sjukförsäkring, föräldrapenning och barnbidrag | 2025–2026 |
| NTA-metoden (FN 2013) | Åldersprofil för hälso- och sjukvård | – |
| SCB, FASIT | Hur välfärdstjänster fördelas på ålder (används i bedömningen av osäkerheten) | 2022 |
| Budgetpropositionen 2026 (prop. 2025/26:1) | Statsbudgeten, 27 utgiftsområden, 1 542 mdkr | 2026 |
| Riksgälden | Statsskuld 1 430 mdkr (21 % av BNP), prognos | 2026 |
| Riksdagen | Riksdagsledamots arvode 81 400 kr i månaden | 2026 |
| FMV | 48 Archer-pjäser för cirka 5 mdkr | 2023 |
| OECD, Eurostat, Världsbanken m.fl. | Internationella jämförelser, en källa och ett år per diagram | 2022–2026 |

Källkatalogen `KALLOR` i `index.html` har 29 källor med länk. `NYCKELTAL` har 19 nyckeltal med värde, år och källa. Båda visas under Metod och källor.

---

## 3. Startkvittot

Startsidan börjar med ett kvitto. Läsaren skriver in sin månadslön. Fältet är förifyllt med medianlönen 38 300 kr.

### 3.1 Skatten

Kvittot visar **skatten på lönen**: kommunalskatt plus statlig skatt minus jobbskatteavdrag. Funktionen `startKvittoData` anropar `skattDelar` med ålder 40 och kommunalskatten 32,38 %. Arbetsgivaravgift och moms ingår inte i kvittots summa. De nämns i en rad under kvittot.

| Månadslön | Skatt per månad | Kvar efter skatt | Skatt i procent av lönen |
|---|---|---|---|
| 25 000 kr | 4 466 kr | 20 534 kr | 17,9 % |
| 38 300 kr | 7 692 kr | 30 608 kr | 20,1 % |

### 3.2 Fördelningen

Skatten fördelas med andelarna i `KVITTO_ANDELAR`. De är Eurostats COFOG-utgifter 2024 utan inkomst- och tilläggspensionen: 3 223 − 363,7 = cirka 2 859 mdkr. Premiepensionen ligger utanför den offentliga sektorn i nationalräkenskaperna och dras inte av.

| Post | Andel |
|---|---|
| Hälso- och sjukvård | 16,58 % |
| Utbildning | 16,25 % |
| Äldre (äldreomsorg, garantipension m.m.) | 12,10 % |
| Näringsliv och transporter | 10,78 % |
| Allmän offentlig förvaltning | 10,51 % |
| Sjukdom och funktionsnedsättning | 7,99 % |
| Familj och barn | 5,14 % |
| Försvar | 4,38 % |
| Rättsväsende och samhällsskydd | 3,56 % |
| Fritid, kultur och religion | 3,12 % |
| Arbetslöshet | 2,42 % |
| Övrigt socialt skydd | 2,42 % |
| Bostäder och samhällsutveckling | 1,78 % |
| Räntor | 1,75 % |
| Miljöskydd | 1,22 % |

Startkvittot slår ihop de femton posterna till sju grupper (`START_GRUPPER`): socialt skydd 30,07 %, hälso- och sjukvård 16,58 %, utbildning 16,25 %, polis, kultur, miljö och räntor 11,43 %, vägar, järnväg och näringsliv 10,78 %, förvaltning 10,51 % och försvar 4,38 %. Kontrollskriptet prövar att varje andel används exakt en gång.

Raderna avrundas till hela kronor. Avrundningsresten läggs på den största raden, så att raderna summerar exakt till skatten.

### 3.3 Jämförelserna

Varje rad säger vad beloppet räcker till. Beloppen står i `START_JMF`:

| Rad | Jämförelse | Belopp | Källa |
|---|---|---|---|
| Socialt skydd | Hemtjänst för en äldre | 385 000 kr per år | Prislistan (Kolada 2025) |
| Hälso- och sjukvård | Minuter på intensiven | 50 000 kr per dygn | Prislistan (Svenska Intensivvårdsregistret) |
| Utbildning | Skoldagar för en elev | 143 000 kr per läsår / 178 skoldagar | Prislistan (Skolverket 2025) |
| Polis, kultur, miljö, räntor | Andel av en polis månadslön | 43 900 kr | SCB 2025 |
| Vägar, järnväg, näringsliv | Meter statlig väg som underhålls ett år | 163 000 kr per km | Prislistan (Trafikverket) |
| Förvaltning | Andel av en riksdagsledamots arvode | 81 400 kr per månad | Riksdagen 2026 |
| Försvar | Andel av en Archer-pjäs | 5 mdkr / 48 | FMV 2023 |

Exempel med medianlönen (7 692 kr): socialt skydd 2 314 kr ger "ca 2 dagars hemtjänst", vård 1 275 kr "ca 37 minuter på intensiven", utbildning 1 250 kr "ca 1½ skoldagar", försvar 337 kr "en 310 000-del av en Archer-pjäs". Kontrollskriptet prövar att beloppen i `START_JMF` är desamma som i prislistan.

### 3.4 Kvittot i Din ekonomi och hundralappen

Kvittot i Din ekonomi använder samma femton andelar. Det räknar skatten för läsarens ålder, lön och kommun. Momsen står i en not under kvittot.

Hundralappen (`HL100`) har två lägen:

- **Hela offentliga sektorn 2024** (3 223 mdkr, inklusive inkomstpensionen): socialt skydd 38 kr, hälso- och sjukvård 15, utbildning 14, näringsliv och infrastruktur 10, förvaltning 9, försvar 4 och övrigt 10.
- **Statsbudgeten 2026** (1 542 mdkr, prop. 2025/26:1): socialt skydd 19 kr, försvar och krisberedskap 15, bidrag till kommuner och regioner 12, övrigt 11, utbildning och studiestöd 9, vård och omsorg 8, vägar, järnväg och bostäder 7, EU-avgift och bistånd 7, rättsväsendet 6 och arbetsmarknad 6.

Hundralappen för 2024 räknar med inkomstpensionen. Kvittona gör det inte. Därför skiljer sig andelarna.

---

### 3.5 Pension och egen firma (från 5 november 2026)

Startkvittot har ett val mellan lön, pension och egen firma, och ett kommunval med alla 290 kommuner (SCB, Kommunalskatterna 2026).

- **Pension** räknas som för en person som är född 1959 eller tidigare: förhöjt grundavdrag, inget jobbskatteavdrag och ingen arbetsgivaravgift (`skattDelar(70, …, {pension:true})`).
- **Egen firma** gäller överskott i enskild firma. Egenavgifterna är 28,97 % av överskottet efter avdrag för egenavgifterna, minus nedsättningen 7,5 % av underlaget, högst 15 000 kr per år (Skatteverket 2026, SFS 2022:889). Avgifterna löses ut så att avdraget och avgiften stämmer med varandra (`egenavgifter()`). Inkomstskatten räknas på överskottet efter egenavgifter, med jobbskatteavdrag eftersom aktiv näringsverksamhet räknas som arbetsinkomst. Exempel: överskott 40 000 kr i månaden ger cirka 8 016 kr i egenavgifter och 6 160 kr i skatt. Sjukförsäkringsavgiften förutsätter 7 dagars karens. Moms på det man säljer ingår inte.

## 4. Skattemodellen

Skatten räknas i funktionerna `skattDelar` (inkomstskattens delar, oavrundade) och `annualTax` (alla delar, avrundade till tkr). Alla belopp är i tusen kronor per år. Prisbasbeloppet (PBB) är 59 200 kr 2026.

### 4.1 Ålder och typ av inkomst

- Under 19 år eller utan inkomst: ingen skatt.
- **Ålder** räknas som 2026 minus födelseår.
- **Pension eller lön:** från 65 år räknar modellen inkomsten som pension, före 65 som lön. Det går att ändra med `opts.pension`. Pension ger inget jobbskatteavdrag och ingen arbetsgivaravgift.
- **Förhöjt grundavdrag och jobbskatteavdrag för äldre** (`is66`) gäller den som har fyllt 66 vid årets ingång, alltså född 1959 eller tidigare (ålder 67 eller mer).
- **Lägre arbetsgivaravgift för äldre** (`agAldre`) gäller den som har fyllt 67 vid årets ingång, alltså född 1958 eller tidigare (ålder 68 eller mer).

### 4.2 Grundavdrag

Grundavdraget följer SKV 433 (2026). Inkomst = fastställd förvärvsinkomst.

| Inkomst | Grundavdrag |
|---|---|
| upp till 0,99 PBB | 0,423 PBB |
| 0,99–2,72 PBB | 0,423 PBB + 20 % av inkomsten över 0,99 PBB |
| 2,72–3,11 PBB | 0,770 PBB (cirka 45 600 kr) |
| 3,11–7,88 PBB | 0,770 PBB − 10 % av inkomsten över 3,11 PBB |
| över 7,88 PBB | 0,293 PBB (cirka 17 350 kr) |

Avdraget avrundas uppåt till hela hundratal kronor och blir aldrig större än inkomsten.

För den som har fyllt 66 vid årets ingång läggs det förhöjda grundavdraget till (`forhojtGrundavdrag2026`, SKV 433 avsnitt 6.2). Det är en styckvis linjär funktion i tolv intervall, från 0,687 PBB vid låga inkomster till 2,732 PBB mellan 8,08 och 11,16 PBB och 1,691 PBB över 12,84 PBB. Summan av de två avdragen avrundas uppåt till hundratal kronor.

### 4.3 Kommunalskatt och statlig skatt

- **Beskattningsbar inkomst** = inkomst − grundavdrag.
- **Kommunalskatt** = beskattningsbar inkomst × kommunalskattesatsen. Standard är rikssnittet 32,38 % (SCB). Läsaren kan välja Stockholm (30,55 %), Göteborg (32,60 %), Malmö (32,42 %), Uppsala (32,85 %), Österåker (28,93 %) eller Dorotea (35,65 %).
- **Statlig inkomstskatt** = 20 % av den beskattningsbara inkomsten över skiktgränsen 643 000 kr. Brytpunkten är cirka 660 000 kr i lön.

### 4.4 Allmän pensionsavgift

Den allmänna pensionsavgiften är 7 % av lönen, avrundad till hundratal kronor. Den avräknas mot kommunal och statlig skatt med en skattereduktion på 100 %. Det som inte ryms läggs på kommunalskatten. Jobbskatteavdraget ryms bara i den kommunalskatt som är kvar efter avräkningen. På pension räknar modellen ingen allmän pensionsavgift.

### 4.5 Jobbskatteavdrag

Under 66 vid årets ingång (`jobbskatteavdrag2024`, SKV 433 avsnitt 7.5.2). Arbetsinkomsten (AI) avrundas nedåt till hundratal kronor.

| Arbetsinkomst | Underlag |
|---|---|
| upp till 0,91 PBB | AI |
| 0,91–3,24 PBB | 0,91 PBB + 38,74 % av AI över 0,91 PBB |
| 3,24–8,08 PBB | 1,813 PBB + 25,1 % av AI över 3,24 PBB |
| över 8,08 PBB | 3,027 PBB |

Jobbskatteavdraget = (underlag − grundavdrag) × kommunalskattesatsen. Det blir aldrig större än kommunalskatten. Avdraget trappas inte av för höga inkomster. Det slutar växa vid 8,08 PBB, cirka 478 000 kr.

Från 66 vid årets ingång (`jobbskatteavdrag66`): 22 % av AI upp till 1,75 PBB, 0,2635 PBB + 7 % av AI upp till 5,24 PBB och 0,6293 PBB därefter. Beloppet multipliceras inte med kommunalskattesatsen.

### 4.6 Marginalskatt

Marginalskatten räknas direkt ur modellen. Vid medianlönen är den cirka 24 %. Över cirka 478 000 kr är den lika med kommunalskatten, 32,38 %. Över brytpunkten tillkommer 20 % statlig skatt, cirka 52 %.

### 4.7 Exempel

En 35-åring med 460 000 kr om året (medianlönen) och rikssnittet:

| Del | tkr per år |
|---|---|
| Grundavdrag | 18,0 |
| Kommunalskatt | 143 |
| Statlig skatt | 0 |
| Jobbskatteavdrag | −51 |
| Arbetsgivaravgift utan ålderspensionsavgift (21,21 %) | 98 |
| Moms (uppskattning) | 46 |
| **Summa** | **236** |

Direkt inkomstskatt är cirka 92 tkr, 20 % av lönen. Med moms och arbetsgivaravgift är summan cirka 42 % av lönen plus avgiften (558 tkr). Kortet "Effektiv inkomstskatt" i Skatter i korthet visar samma siffror.

### 4.8 Vad skattemodellen inte räknar med

- Skattereduktion för förvärvsinkomst (högst 1 500 kr per år).
- Public service-avgift (högst 1 184 kr per år).
- Begravningsavgift och kyrkoavgift.
- Andra avdrag och reduktioner (resor, ROT, RUT, ränteavdrag).

### 4.9 Kontroll mot skattetabell 32

`scripts/kontroll.mjs` jämför modellen med Skatteverkets skattetabell 32 för 2026 i kolumn 1–3. Kontrollen omfattar 13 lönenivåer från 5 100 till 60 200 kr i månaden, alltså 39 punkter. Kontrollen räknar med 30,84 % kommunalskatt plus 1,16 procentenheter, totalt 32 %. Den lägger till de poster som tabellen innehåller men som sajten inte redovisar som skatt: skattereduktion för förvärvsinkomst och public service-avgift. Den 5 november 2026 låg alla 39 punkter inom ±1 kr.

---

## 5. Arbetsgivaravgifter

Arbetsgivaravgiften 2026 är 31,42 % (Skatteverket, socialavgiftslagen 2000:980). Delarna står i `AG_AVG`:

| Avgift | Sats |
|---|---|
| Ålderspensionsavgift | 10,21 % |
| Efterlevandepensionsavgift | 0,30 % |
| Sjukförsäkringsavgift | 3,55 % |
| Föräldraförsäkringsavgift | 2,00 % |
| Arbetsmarknadsavgift | 2,64 % |
| Arbetsskadeavgift | 0,10 % |
| Allmän löneavgift | 12,62 % |
| **Summa** | **31,42 %** |

**Vad räknas som skatt.** I standardläget räknar kalkylatorn 21,21 % som skatt, alltså allt utom ålderspensionsavgiften. Med valet "pensionsavgift" räknas hela 31,42 %.

**Unga.** För den som är född 2003–2007 (19–23 år 2026) är avgiften tillfälligt 20,81 % på lön upp till 25 000 kr i månaden. Nedsättningen gäller lön som betalas ut 1 april 2026–30 september 2027. I årsberäkningen (`annualTax`) räknas nedsättningen, 10,61 procentenheter på högst 300 000 kr, för 9 av 12 månader. Arbetsgivarens kvitto visar en månad och drar av hela nedsättningen.

**Äldre.** För den som är född 1958 eller tidigare betalas bara ålderspensionsavgiften, 10,21 %. I standardläget blir det 0 % skatt.

**Pension.** På pension betalas ingen arbetsgivaravgift. Arbetsgivarens kvitto visar då inga avgifter.

**Exempel.** På 38 300 kr i månaden betalar arbetsgivaren 12 034 kr (38 300 × 31,42 %), varav 3 910 kr ålderspensionsavgift. På 25 000 kr är avgiften 7 855 kr, och cirka 5 200 kr för den som är född 2003–2007.

---

## 6. Moms

Moms beror på vad man köper och hur mycket man sparar. Modellen uppskattar den så här:

1. **Disponibel inkomst** = lön − kommunalskatt − statlig skatt + jobbskatteavdrag.
2. **Konsumtion** = disponibel inkomst × (1 − sparkvot).
3. **Moms** = konsumtion × e / (1 + e), där e är en effektiv momssats.

Sparkvoten och momssatsen beror på lönen före skatt:

| Lön per år | Sparkvot | Effektiv momssats (e) |
|---|---|---|
| under 300 tkr | 5 % | 14,5 % |
| 300–500 tkr | 12 % | 16,5 % |
| 500–700 tkr | 18 % | 17,5 % |
| över 700 tkr | 25 % | 18,5 % |

Koden anger SCB:s hushållsundersökning (HUT) som grund för nivåerna. De exakta nivåerna är ett antagande. Momssatserna 2026 är 25 %, 12 % och 6 %. Momsen på livsmedel är tillfälligt 6 % från 1 april 2026 till 31 december 2027 (prop. 2025/26:55).

Vid medianlönen blir konsumtionen cirka 323 tkr och momsen cirka 46 tkr, ungefär 14 % av konsumtionen.

---

## 7. Förmånsmodellen och kalibreringen

### 7.1 Livsfaserna

Förmånerna står i `LIVSFASER_V2` i `index.html`. Det är tio åldersgrupper med ett belopp per kategori. Beloppen är genomsnitt för alla i åldersgruppen, i tusen kronor per år och 2024 års priser. `getStage(age)` returnerar livsfasen för åldern. Inkomst och hushåll påverkar inte beloppen sedan 29 oktober 2026.

| Ålder | Livsfas | Utbildning | Hälso- och sjukvård | Socialt skydd | Äldreomsorg | Summa |
|---|---|---|---|---|---|---|
| 0–6 | Spädbarn och förskola | 121 | 20 | 43 | 0 | 184 |
| 7–15 | Grundskoleelev | 143 | 9 | 28 | 0 | 180 |
| 16–18 | Gymnasieelev | 148 | 10 | 29 | 0 | 187 |
| 19–25 | Student / ung vuxen | 51 | 13 | 42 | 0 | 106 |
| 26–34 | Ung förvärvsarbetande | 6 | 15 | 47 | 0 | 68 |
| 35–44 | Barnfamiljsfas | 42 | 26 | 96 | 1 | 165 |
| 45–54 | Mitt i karriären | 5 | 39 | 59 | 2 | 105 |
| 55–64 | Senior förvärvsarbetande | 3 | 55 | 73 | 5 | 136 |
| 65–74 | Ny pensionär | 2 | 88 | 89 | 29 | 208 |
| 75+ | Senior pensionär | 1 | 141 | 106 | 109 | 357 |

Varje livsfas har dessutom 100 tkr i gemensamma utgifter (`KOLL_PER_INV`). De ingår inte i summan ovan.

### 7.2 Utbildning

Utbildning bygger på kostnad per elev och student, omräknad till ett genomsnitt för åldersgruppen:

- **0–6 år:** förskola 199,2 tkr per inskrivet barn × 85 % av 1–5-åringarna × 5/7 av åldersgruppen = cirka 121 tkr (Skolverket 2025).
- **7–15 år:** grundskola 143 tkr per elev, alla huvudmän (Skolverket 2025).
- **16–18 år:** gymnasium 148,1 tkr per elev (Skolverket 2025).
- **19–25 år:** högskola 114 tkr per helårsstudent × 45 % som studerar = cirka 51 tkr (UKÄ 2025).
- **35–44 år:** 5 tkr, egen vuxenutbildning som för grannåldrarna. Fram till 5 november 2026 stod här 42 tkr, som var barnens skolgång och räknades två gånger (cirka 52 mdkr).

Summerat över befolkningen blir utbildning cirka 382 mdkr. COFOG GF09 är 464,7 mdkr 2024. Koden säger att GF09 innehåller mer än enhetskostnaderna. Utbildning är inte kalibrerad mot GF09.

### 7.3 Hälso- och sjukvård, socialt skydd och äldreomsorg

Åldersprofilerna kommer från NTA-metoden (sjukvård), Försäkringskassan (sjukförsäkring, föräldrapenning, barnbidrag), Pensionsmyndigheten (garantipension, bostadstillägg) och Kolada (äldreomsorg). Nivåerna är skalade så att summan över befolkningen 2024 blir lika med de faktiska utgifterna. Socialt skydd för 65–74 och 75+ höjdes med 16 tkr per person 30 oktober 2026, när inkomstpensionen ändrades från cirka 400 till 363,7 mdkr.

### 7.4 Kalibreringen

Befolkningen är SCB:s folkmängd 31 december 2024 per ettårsklass, summerad per livsfas (totalt 10 587 710). `scripts/kontroll.mjs` summerar modellen över befolkningen och kräver att varje kategori ligger inom ±3 % av målet.

| Kategori | Mål | Källa för målet | Modellen | Avvikelse |
|---|---|---|---|---|
| Hälso- och sjukvård | 473,7 mdkr | Eurostat COFOG GF07 2024 | 472,4 mdkr | −0,3 % |
| Äldreomsorg | 165,5 mdkr | Kolada N20043 2024 (15 686 kr per invånare) | 166,5 mdkr | +0,6 % |
| Socialt skydd utom äldreomsorg och inkomstpension | 693,8 mdkr | GF10 1 223,5 − äldreomsorg 165,5 − inkomst- och tilläggspension 363,7 | 691,8 mdkr | −0,3 % |
| Gemensamma utgifter | 1 061,3 mdkr | COFOG GF01–06 och GF08 2024 | 1 058,8 mdkr | −0,2 % |
| Utbildning | (ingen kalibrering) | Skolverket och UKÄ 2025; COFOG GF09 464,7 mdkr | cirka 382 mdkr | −18 % mot GF09 |

Förmånerna (utan gemensamma utgifter) summerar till cirka 1 713 mdkr. Före kalibreringen 29 oktober summerade modellen till cirka 940 mdkr för sjukvård och cirka 366 mdkr för äldreomsorg.

### 7.5 Gemensamma utgifter

COFOG-funktionerna 01–06 och 08 (allmän förvaltning inklusive räntor, försvar, samhällsskydd och rättsskipning, näringsliv och transporter, miljöskydd, bostäder och samhällsutveckling, fritid och kultur) var 1 061,3 mdkr 2024. Delat lika på 10 587 710 invånare blir det cirka 100 tkr per person. Lika fördelning per invånare följer NTA-metoden för kollektiva nyttigheter.

---

## 8. Livsloppet

Livsloppsdiagrammet visar netto per invånare i tio åldersgrupper för hela befolkningen 2024 (`LIVSLOPP_BEF`).

- **Förmåner (f)** är modellens förmåner per livsfas, utan gemensamma utgifter.
- **Skatt (s)** är modellens inkomstskatt, arbetsgivaravgift och moms på SCB:s faktiska inkomster 2024 (HE0110, per ettårsålder och inkomstklass), delat på alla invånare i gruppen, även de utan inkomst.

| Ålder | Förmåner (tkr) | Skatt (tkr) | Netto (tkr) |
|---|---|---|---|
| 0–6 | 184 | 0 | +184 |
| 7–15 | 180 | 0 | +180 |
| 16–18 | 187 | 0 | +187 |
| 19–25 | 106 | 77 | +29 |
| 26–34 | 68 | 184 | −116 |
| 35–44 | 165 | 243 | −78 |
| 45–54 | 105 | 290 | −185 |
| 55–64 | 136 | 263 | −127 |
| 65–74 | 208 | 122 | +86 |
| 75+ | 357 | 79 | +278 |

Plus betyder att gruppen tar emot mer än den betalar. Summerat är förmånerna 1 713 mdkr och skatterna 1 575 mdkr. Sajten skriver att skillnaden främst beror på att momsen är en försiktig uppskattning.

Läsarens punkt räknas med `getStage` för åldern och `annualTax` för lönen. Efter 65 år räknas inkomsten som pension.

Skatten i diagrammet är räknad med 2026 års regler på 2024 års inkomster. Förmånerna gäller 2024. Beloppen är nominella och inte diskonterade. Värdena i `LIVSLOPP_BEF` räknades 29 oktober 2026 och räknas inte om automatiskt när modellen ändras.

---

## 9. Arbetstagarens och arbetsgivarens kvitton

Din ekonomi visar två kvitton för samma lön.

- **Arbetstagarens kvitto** visar skatten på lönen (och på kapital om det finns) per månad, fördelad på de femton posterna i avsnitt 3.2. Momsen anges i en not.
- **Arbetsgivarens kvitto** visar bruttolönen, de sju avgifterna, en eventuell nedsättning för unga och lönekostnaden per månad. Varje avgift avrundas till hela kronor för sig.

---

## 10. Prislistan och jämförelserna

### 10.1 Prislistan

Prislistan (`CARDS`) har 34 prislappar i sex kategorier:

| Kategori | Antal |
|---|---|
| Utbildning | 4 |
| Hälso- och sjukvård | 7 |
| Kroniska sjukdomar och funktionsnedsättning | 10 |
| Infrastruktur och kommunal service | 4 |
| Social trygghet | 5 |
| Rättsväsende och försvar | 4 |

Varje prislapp har belopp, enhet, källa och beräkning. Exempel: ett år i grundskolan 143 000 kr, ett dygn på IVA 50 000 kr, hemtjänst 385 000 kr per person och år, underhåll av 1 km statlig väg 163 000 kr per år, polisen 4 600 kr per invånare och år, försvar och krisberedskap 21 300 kr per invånare 2026.

Några belopp är egna beräkningar (täljare delat med nämnare). Det står då i källraden. Ett belopp, barnvaccinationsprogrammet, är märkt som Skatteplattformens uppskattning.

**Skattetid.** Prislapparna anger hur länge en medianlöntagare betalar inkomstskatt för att täcka beloppet (`skattetid`). Beräkningen använder inkomstskatten på 38 300 kr i månaden med rikssnittet, cirka 92 tkr per år.

Kontrollskriptet prövar att alla prislappar har källa och positivt belopp, att inga titlar finns två gånger och att de 23 detaljrutorna hör till en prislapp.

### 10.2 Internationella jämförelser

Jämförelserna (`JMF_DATA`) har 28 diagram. Varje diagram visar samma sju länder i samma ordning: Sverige, Norge, Danmark, Finland, Island, Tyskland och USA, med OECD- eller EU-snittet som referenslinje. Reglerna:

- en källa och ett år per diagram,
- minst fem av sju länder med uppgift, och Sverige måste ha en uppgift,
- inga värderande omdömen.

Kontrollskriptet prövar reglerna.

### 10.3 Faktakort och nyckeltal

Snabbfakta har 12 faktakort. Alla har källa och år. Faktakorten om första lönen och medianlönen räknas med samma modell som kvittona (4 466 och 7 692 kr). Kontrollskriptet prövar att beloppen i texten stämmer med modellen.

---

## 11. Osäkerhet och känslighetsanalys

### 11.1 Osäkerheten

Osäkerheten är en bedömning, inte ett formellt konfidensintervall.

- **Förmånerna:** ungefär ±20–25 %. Sajten skriver att intervallet speglar variationen i SCB FASIT:s decildata och den regionala spridningen i SKR:s kostnad per patient. Det största bidraget är sjukvårdens åldersprofil (±25 %), som bygger på NTA-vikter och inte på registerdata per ålder.
- **Inkomstskatten:** följer Skatteverkets regler och stämmer med skattetabell 32 på ±1 kr.
- **Momsen:** en uppskattning. Konsumtionen och momssatsen är antaganden. Antagandefilen anger ±15 %.
- **Kommunalskatten:** varierar från 28,93 % till 35,65 % mellan kommuner.
- **Individen:** förmånerna är genomsnitt. En person med kronisk sjukdom kan använda flera gånger så mycket vård som en frisk person i samma ålder.

### 11.2 Känslighetsanalysen

Diagrammet "Hur säker är beräkningen?" i Metod visar hur nettot ändras när ett antagande ändras och resten är oförändrat. Nettot är skatt minus förmåner för en 35-åring med medianlönen (460 tkr om året, rikssnittet). I utgångsläget är skatten 236 tkr och förmånerna 165 tkr. Nettot är 71 tkr, alltså betalar 35-åringen 71 tkr mer än hen tar emot.

| Antagande | Ändring | Nettot ändras med |
|---|---|---|
| Förmånerna | ±25 % | ±41 tkr |
| Lönen | ±15 % | −38 / +40 tkr |
| Kommunalskatten | ±3 procentenheter | −8 / +7 tkr |
| Momsen | ±2 procentenheter | ±5 tkr |

Momsens ändring räknas som konsumtionen × 0,02 / 1,25, alltså två procentenheter på normalsatsen.

Kommunalskatten ger en mindre effekt än man kanske väntar sig. Det beror på att jobbskatteavdraget och momsen också ändras när kommunalskatten ändras.

---

## 12. Vad som har ändrats sedan v2.0

Rättelseloggen på sajten (`#rattelser`) har 38 poster från 28 oktober till 5 november 2026. Ändringsloggen (`CHANGELOG.md`) beskriver alla ändringar. Här är de viktigaste för modellen och siffrorna.

### 12.1 Grundsiffror (28 oktober)

- **Offentliga sektorns utgifter:** 3 011 → 3 223 mdkr (Eurostat gov_10a_exp, 2024). Hundralappen, kvittonas andelar och rutan om hela offentliga sektorn är uppdaterade.
- **Inkomstpensionen:** "cirka 800 mdkr per år" var fel.
- **Skatteutgifterna:** "cirka 385 mdkr" → drygt 600 mdkr (cirka 565 mdkr efter skattesanktioner), skr. 2025/26:98.
- **Skolkostnader** (Skolverket 2025): grundskola 143 000 kr, gymnasium 148 100 kr, kommunal förskola 199 200 kr. Högskola 114 000 kr per helårsstudent (UKÄ 2025), inte 240 000.
- **Prislappar med fel nämnare:** hemtjänst, personlig assistans, ambulans, högskola, väg- och järnvägsunderhåll och föräldrapenning. Räddningstjänsten visas per invånare. Asfalt per km och en rättegång i tingsrätten är borttagna.
- **Skattemodellen:** jobbskatteavdraget hade en avtrappning som inte finns i lagen. Det följer nu SKV 433 exakt. Pensionärsskatten använder det förhöjda grundavdraget i stället för en schablon (+40 %). Pension ger inte längre arbetsgivaravgift. Arbetsgivaravgiften för unga är nedsatt.
- **Övrigt:** statsskulden 1 430 mdkr (21 %), skattekvoten (SCB- och OECD-serier hålls isär), vårdgarantin, momsen på livsmedel 6 %, taxor och tak, polisen 4 600 kr per invånare.
- **Kontroll:** `scripts/kontroll.mjs`, `KALLOR` och `NYCKELTAL` infördes.

### 12.2 Förmånsmodellen (29–30 oktober)

- Sjukvård och äldreomsorg summerade till cirka 940 och 366 mdkr. Nu är de kalibrerade mot 474 mdkr (Eurostat) och 166 mdkr (Kolada).
- **Hushålls- och inkomstjusteringarna är borttagna.** De saknade källa och bröt kalibreringen. Förmånerna beror bara på ålder.
- **Gemensamma utgifter** räknades tidigare in med en schablon på 50 tkr. Nu visas cirka 100 tkr för sig och ingår inte i jämförelsen.
- **Livsloppet** bygger på SCB:s faktiska inkomster 2024 i stället för en påhittad inkomstbana. Karriärprofiler, korsningsetiketter och den diskonterade livstidssumman är borttagna.
- **Inkomstpensionen** i kvittona: uppskattningen 400 mdkr ersattes med 363,7 mdkr (Orange rapport 2024). Socialt skydd på medianlönen ändrades från 2 243 till 2 314 kr. Förmånerna för 65+ höjdes med cirka 16 000 kr per år.
- **Skatten på 25 000 kr:** alla delar av sajten visar 4 466 kr med rikssnittet. På medianlönen visas 7 692 kr.
- **Startkvittot** ersatte löneskalan och prislappskortet på startsidan.

### 12.3 Statistikgranskningen (4–5 november)

En granskning av alla vyer gav 98 fynd. Alla höga och medelallvarliga fynd rättades 4 november, de låga 5 november.

- **Arbetsgivaravgiftens delar:** efterlevandepensionsavgift 0,30 % (inte 0,60) och allmän löneavgift 12,62 % (inte 12,32). Summan 31,42 % var rätt.
- **Åldersgränser i födelseår:** förhöjt grundavdrag för född 1959 eller tidigare (ålder 67+). Lägre arbetsgivaravgift för född 1958 eller tidigare (ålder 68+), inte från 66 år.
- **Ungdomsnedsättningen** räknas för 9 av 12 månader 2026.
- **Metodtexter:** pension belastas inte med arbetsgivaravgift; yrkeslivet som betalar mer är 26–64 år; 3 223 mdkr i stället för "cirka 3 000"; kalkylatorn säger inte längre att hushåll och inkomst påverkar förmånerna.
- **Utgiftsområde 6:** 225 mdkr är anslagen till försvar och samhällets krisberedskap, inte "försvarsbudgeten" (försvar 214,3 varav Ukrainastöd 39,7, krisberedskap 10,1, strålsäkerhet 0,7 mdkr).
- **Prislistan:** föräldrapenning per barn cirka 345 000 kr, SiS cirka 18 200 kr per dygn, diabetesläkemedel cirka 5 700 kr, demens (Kolada 2025). Prislappen för KOL är borttagen. Prislistan har nu 34 prislappar.
- **Jämförelser och Framtid:** vårdplatser, sjukpenningtalet, Gini-serier, medianförmögenhet, medellivslängd och flera OECD-snitt.
- **Känslighetsanalysen:** momsen räknas på konsumtionen.

---

## 13. Kända begränsningar och öppna frågor

### 13.1 Begränsningar i modellen

1. **Sjukvårdens åldersprofil** bygger på NTA-vikter, inte på registerdata om kostnad per patient och ålder. Det är den största osäkerheten (±25 %).
2. **Förmånerna beror bara på ålder.** Inkomst, hushåll och bostadsort påverkar bara skatten.
3. **Utbildning är inte kalibrerad.** Modellen summerar till cirka 382 mdkr mot COFOG GF09 464,7 mdkr. Skillnaden är bland annat vuxenutbildning och administration som inte fördelas på ålder.
4. **Momsen är en uppskattning** med antagna sparkvoter och momssatser i fyra inkomstklasser.
5. **Skattemodellen saknar** skattereduktion för förvärvsinkomst, public service-avgift, begravningsavgift, kyrkoavgift och andra avdrag.
6. **Inkomst efter 65 år räknas som pension.** Lön efter 65 kan bara räknas med `opts.pension:false` i koden.
7. **Livsloppet blandar år:** förmåner 2024, inkomster 2024 och skatteregler 2026. `LIVSLOPP_BEF` räknas inte om automatiskt.
8. **Statsbudgeten** bygger på budgetpropositionen 2026. Budgetpropositionen för 2027 är inte inarbetad.
9. **Osäkerhetsintervallen** är bedömningar. Ingen Monte Carlo-simulering är gjord.

### 13.2 Motsägelser mellan kod och text

Arbetet med rapporten hittade tolv ställen där koden och texten på sajten inte stämde överens. Nio av dem rättades samma dag, 5 november 2026:

- Metodsteg 01 och 02 och rutan "Vad mäts här?" säger nu att kvittona fördelar skatten på 2 859 mdkr (utan inkomstpensionen), att källorna är Skolverket, UKÄ, Försäkringskassan, Kolada och åldersprofiler för vården, och att vård, äldreomsorg och socialt skydd är avstämda mot 2024 medan utbildningen stämmer ungefär.
- Antagandefilen beskriver pensionärsskatten enligt SKV 433, och kontrollintervallet mot skattetabell 32 anges överallt som 5 000–60 000 kr i månaden.
- Momsen beskrivs som en effektiv momssats på 14,5–18,5 % på priset utan moms, cirka 13–16 % av det man betalar.
- Arbetsgivarens kvitto justerar avrundningen så att summan blir 12 034 kr på medianlönen, som på startsidan.
- Hundralappen 2024 nämner pensionssystemet.
- Lagrummen: statlig inkomstskatt 65 kap., grundavdrag 63 kap. och jobbskatteavdrag 67 kap. inkomstskattelagen.
- `CLAUDE.md` beskriver åldersgränserna i födelseår (67 år för förhöjt grundavdrag, 68 år för lägre arbetsgivaravgift).

Kvar:

1. **Utbildning 35–44 år** var 42 tkr per person och år, vilket var barnens skolgång och räknades två gånger (cirka 52 mdkr). Rättat 5 november 2026 till 5 tkr. Utbildningens summa blev cirka 382 mdkr och livsloppets förmåner 1 713 mdkr; 35–44-åringarna betalar nu i snitt cirka 115 000 kr mer än de tar emot.
2. **Inaktuella kodkommentarer** i förmånsmodellen ("kalibrerade mot en äldre total … omkalibreras i steg 3", "snitt 285 tkr/inv/år") och vid grundavdraget (2024 års prisbasbelopp). De syns inte för läsaren.
3. **Antal invånare** skiljer sig mellan prislapparna (10,55 miljoner för försvaret, 10,6 miljoner för polisen) och förmånsmodellen (10 587 710).

### 13.3 Öppna frågor

- Beställa en tabell från SCB med välfärdstjänster per åldersgrupp och COFOG-kategori (utkast i `correspondence/`).
- Ersätta NTA-vikterna med registerdata om kostnad per patient och ålder.
- Inarbeta budgetpropositionen 2027 (prop. 2026/27:1) och statslåneräntan 30 november 2026 (skatten på ISK).
- Ta fram formella osäkerhetsintervall.
- Stämma av Python-modellen mot sajten eller tydligt märka den som äldre.
- Låta en extern part granska metoden.

---

## 14. Reproducerbarhet

All kod finns i `index.html`. Sajten läser inga filer i `data/`. Följande skript och filer finns i repot:

| Fil | Vad den gör | Hur den körs |
|---|---|---|
| `scripts/kontroll.mjs` | Prövar skattemodellen mot skattetabell 32 (39 punkter), att gamla värden i `NYCKELTAL` inte finns kvar, att prislappar, faktakort och jämförelser har källa, kvittonas andelar och grupper, arbetsgivaravgifterna, beloppen i text mot modellen, dubbla id, interna länkar, modellens robusthet (ålder 0–100, inkomst 0–2 000 tkr) och förmånsmodellens summor mot målen (±3 %). | `node scripts/kontroll.mjs` (inga beroenden). Avslutar med kod 1 vid fel. |
| `scripts/lankar.mjs` | Prövar alla externa länkar i `index.html`. OECD och doi.org svarar ofta 403 till skript och listas för manuell kontroll. | `node scripts/lankar.mjs` (kräver nätverk) |
| `scripts/kontrast.js` | Mäter textkontrast. | I webbläsarens konsol |
| `data/nta_berakning.py` | Python-modell som räknar en åldersprofil och skriver `data/nta_profil_v2.json`. | `python3 data/nta_berakning.py` (kräver `openpyxl` och `skatteplattformen_data.xlsx`) |

Den 5 november 2026 gav `kontroll.mjs` 0 fel, 45 OK och 5 informationsrader.

**Python-modellen har delvis andra definitioner än sajten.** Den läser `data/livsfaser_v2.json`, som har äldre värden:

- COFOG-totalen 3 011 mdkr och befolkningen 10 550 000.
- Gemensamma utgifter 50 tkr per person.
- Utbildning per barn eller student i stället för genomsnitt för åldersgruppen: förskola 175 tkr (sajten 121), grundskola 148 (143), gymnasium 145 (148), högskola 110 (51).
- Andra nivåer för sjukvård, socialt skydd och äldreomsorg (före kalibreringen).
- En förenklad skatt: 32 % kommunalskatt utan grundavdrag, skiktgräns 598 tkr (2024), arbetsgivaravgift 31,42 % och moms 6,5 % av disponibel inkomst.

`kontroll.mjs` redovisar skillnaderna i utbildning som information. Skriptet `nta_berakning.py` läser och skriver `skatteplattformen_data.xlsx` i repots rot. Filen finns inte i repot, så skriptet går inte att köra utan den.

Det äldre kontrollskriptet `verify_data_sync.py` ligger i `scripts/arkiv/` och används inte. Fyra inaktuella datafiler ligger i `data/arkiv/`.

---

## 15. Licens

Enligt `index.html` (sidfoten, metadata och Om Skatteplattformen):

- **Text, siffror och diagram:** CC BY 4.0. De får användas fritt med källhänvisning till Skatteplattformen.
- **Illustrationer:** CC BY 4.0.
- **Kod:** MIT.
- **Underliggande statistik:** enligt respektive källas villkor.

Denna metodrapport får användas under CC BY 4.0. Metodrapport v2.0 angav CC0 för data. Det gäller inte längre.

---

*Skatteplattformen drivs av Wilhelm Wennergren utan extern finansiering, annonser eller partibidrag. Fel kan rapporteras som ärende på GitHub eller via e-post (se Så arbetar vi på sajten).*
