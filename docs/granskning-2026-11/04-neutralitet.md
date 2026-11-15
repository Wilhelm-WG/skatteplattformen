# Granskare 4: neutralitet (saklighet och opartiskhet)

Granskat 2026-11-14 mot lokal kopia av `index.html` (port 8774). Radnummer avser `index.html`.

## 1. Sammanfattning

Sajten är i grunden saklig. Den visar svagheter öppet, till exempel vårdplatsbristen, PISA-raset, dödligt våld och boendekostnader, och den har en ovanligt ärlig rättelselogg. Ingen enskild text är partipolitisk. Ändå lutar *urvalet och betoningarna* på flera ställen åt en välfärdsorienterad läsning. Exempel är resultattavlan "18 av 24" i Jämförelser, den helt positiva sjukvårdsrubriken, Framtids rubrik som ställer en sjunkande skattekvot mot fler äldre, att förmögenhetsskattens avskaffande nämns flera gånger, att fackliga källor används utan märkning och att skatteutgifter kallas "subventioner". Några detaljer lutar åt andra hållet, främst att kvittot liknar förvaltningen vid en riksdagsledamots arvode. Den största svagheten i transparensen är att sajten inte skriver ut hur mått, livssituationer och snabbfakta väljs, och att citatet saknar avsändare. Därför kan en kritisk läsare med fog fråga varför just de här måtten finns med.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Saklig balans | 3/5 | Både styrkor och svagheter visas, men urvalet i Jämförelser, sjukvårdsrubriken, Framtids skattekvot och livssituationerna lutar åt samma håll. |
| Språklig neutralitet | 4/5 | Texten är nästan genomgående beskrivande. Undantagen är få men syns: "subventioner", "SKATTEN ÄR 20,1 %", "Ingen agenda", förvaltning = riksdagsarvode och citatet utan avsändare. |
| Transparens om avsändare och val | 3/5 | Metoden, koden och rättelseloggen är föredömliga. Däremot saknas urvalsprinciper, källpolicyn följs inte och det står lite om vem som står bakom. |

## 3. Det som fungerar (bevara)

- **"Livsloppet visar ett mönster, inte en skuld"** (Metod, punkt 04): "Vilka slutsatser man drar av det är en politisk fråga." Det är ett mönster för hur tolkningsfrågor bör skrivas.
- **Jämförelsernas öppenhet om svagheter**: sammanfattningen räknar upp "höga boendekostnader, dödligt våld och materialåtervinning". Den skriver också "Ingen sammanvägning", använder fast landsordning och har inga värdeord i meningarna (`jmfLede`).
- **Negativa fakta finns kvar**: polisens kort ("Sverige leder EU i dödliga skjutningar"), vårdplatsbristen (1 191 per dag), "63 % inom 90 dagar", PISA ("lägsta resultat hittills") och personalbristen.
- **ISK-avsnittet citerar båda sidor** med namngivna remissinstanser och ger regeringens svar sist (r. 2984–3000). Formen är bra, men se fynd 07.
- **Rättelseloggen** (`#rattelser`) redovisar även fel som gynnade en viss tolkning, till exempel "Obelagda jämförelser ('lägst i EU', Japan och USA) är borttagna". Det bygger förtroende hos läsare oavsett politisk hemvist.

## 4. Fynd

### neutralitet-01. Resultattavlan "18 av 24" blåses upp av urvalet och av mått som överlappar
- **Plats:** `#oecd`, översikten (`jmfSammanfattning`, r. ~6008). Den största siffran i vyn. Skärmbild: `/tmp/neutralitet-oecd.png`.
- **Belägg:** "18 av 24 på den bättre sidan av snittet". Räknat ur `JMF_DATA`: 10 av de 18 är sjukvårdsmått. Fyra av dem är canceröverlevnad med diagnosår 2010–2014. Undvikbar dödlighet *innehåller* åtgärdbar dödlighet, och båda räknas. Dödlighet i cancer räknas både totalt och för kvinnor. Slås de överlappande måtten ihop till ett per fenomen blir det ungefär 13 av 19. Det är fortfarande en majoritet, men en betydligt svagare.
- **Problem:** Ett räknetal ser ut som ett omdöme ("Sverige är bättre i tre av fyra"), men det bestäms helt av vilka mått som råkar finnas med. Ingen urvalsprincip anges (sökning på "urval" och "valt ut" ger inga träffar i texten).
- **Varför det spelar roll:** En skattekritisk läsare eller en journalist kan med fog kalla det körsbärsplockning. Talet delas lätt och är det första man ser i vyn.
- **Förslag:** (a) Räkna varje fenomen en gång: slå ihop cancermåtten till ett och räkna bara åtgärdbar dödlighet, inte undvikbar. (b) Skriv ut urvalsprincipen under tavlan, till exempel: "Måtten är valda för att täcka det skatten betalar: vård, skola, socialt skydd, trygghet och miljö. Vi har inte valt dem efter hur Sverige ligger till. Saknar du ett mått? Skriv till oss." (c) Alternativt kan siffran visas per område i stället för en total.
- **Allvar:** Hög · **Säkerhet:** hög (räknat i `JMF_DATA`) · **Insats:** M · **Typ:** förbättring (urvalsprincipen), beslut (räknesättet)

### neutralitet-02. Mått som båda läsarna väntar sig saknas i Jämförelser: arbetslöshet, skattenivå och PISA läsning
- **Plats:** `#oecd`, `JMF_DATA` (r. 5664 och framåt).
- **Belägg:** `grep` ger 0 träffar för "sysselsätt" och inget arbetsmarknadsmått i Jämförelser. Skattekvoten jämförs bara i Framtid, under fliken Skatter (r. 2430 och framåt), inte bland de 36 måtten. PISA har matematik och naturvetenskap (r. 5731, 5735) men inte läsning, trots att Framtid skriver "läsning −21 poäng sedan 2022" (r. 2414).
- **Problem:** Sverige har enligt Eurostat en av EU:s högsta arbetslösheter. Den exakta nivån 2025 kunde jag inte verifiera; primärkälla är Eurostat `une_rt_a`, https://ec.europa.eu/eurostat/databrowser/view/une_rt_a/default/table. Skattenivån är det en skattekritisk läsare först vill jämföra, och läsning är det PISA-område där Sverige föll mest. Alla tre saknas i en vy som annars ger Sverige övervägande goda betyg.
- **Varför det spelar roll:** Utan dem blir Jämförelser en lista över vad Sverige får, men varken priset (skattekvoten) eller ett av de mest debatterade måtten (arbetslösheten) syns. Båda politiska riktningarna reagerar, var och en på sitt sätt.
- **Förslag:** Lägg till minst "Arbetslöshet, 15–74 år (Eurostat/OECD)" och "Sysselsättningsgrad, 20–64 år" under Samhälle eller en ny flik Arbete, och "Skatteintäkter som andel av BNP (OECD Revenue Statistics)" utan riktning. Lägg också till PISA läsning, eller skriv i "Om måttet" varför läsning saknas.
- **Allvar:** Hög · **Säkerhet:** hög för att måtten saknas, medel för hur Sverige ligger till · **Insats:** M · **Typ:** förbättring

### neutralitet-03. Sjukvårdens rubrik tar bara med det positiva, och tillgängligheten jämförs knappt internationellt
- **Plats:** `#sjukvard`, h2 (r. 2230). Fliken Tillgänglighet (r. 2246 och framåt). Källraden r. 2275.
- **Belägg:** Rubriken lyder "Sverige lägger störst andel av BNP på vård i Norden, och har längst medellivslängd och bland de lägsta dödstalen som vården kan förhindra". Sajten skriver själv: "Väntetider och hur patienter upplever vården syns inte i de här måtten." Under Tillgänglighet finns bara ett internationellt mått, höftledsoperation, där Sverige ligger i mitten.
- **Problem:** Den som bara läser rubriken drar slutsatsen att svensk vård är bäst i Norden. Det som ofta kritiseras, köer och tillgänglighet, finns bara som svenska mått utan jämförelse. Detta är inte samma fynd som MISSFORSTAND nr 13, som handlade om BNP-andel mot kostnad per invånare. Här gäller det att rubriken bara bär fram det positiva.
- **Varför det spelar roll:** En läsare som har väntat länge på vård uppfattar rubriken som reklam, och den läsaren finns i båda politiska lägren.
- **Förslag:** En rubrik som visar båda sidor, till exempel: "Lång medellivslängd och låg dödlighet som vården kan förhindra, men minst antal vårdplatser och var tredje väntar längre än vårdgarantin på operation." Lägg också in ett jämförbart mått på tillgänglighet, till exempel Eurostats självrapporterade ouppfyllda vårdbehov på grund av väntetid (`hlth_silc_08`) eller OECD:s väntetider för fler ingrepp än höftled, *oavsett hur Sverige ligger till*.
- **Allvar:** Medel · **Säkerhet:** hög för textanalysen, kunde inte verifiera Sveriges placering i `hlth_silc_08` · **Insats:** S för rubriken, M för måttet · **Typ:** förbättring

### neutralitet-04. Framtid ställer en sjunkande skattekvot mot fler äldre, och förmögenhetsskatten nämns i tre sammanhang
- **Plats:** `#framtid`, h2 "Fler äldre, fler i vården och en skattekvot som sjunkit" (r. 2306). Rutan "Två trender möts" ligger på *Befolkning*-fliken (r. 2350). "Strukturfrågan" (r. 2478). Skattekvotskortet (r. 2430). Ojämlikhetsrutan (r. 2613). Förmögenhetsfördelningen (r. ~2593). Skärmbild: `/tmp/neutralitet-framtid.png`.
- **Belägg:** "Det kan hanteras med högre skatteuttag, prioriteringar, effektivisering eller en kombination" och "Skillnaden behöver hanteras med högre intäkter, prioriteringar …": skattehöjning står först båda gångerna. Skattekvotskortet nämner bara sänkningar som orsaker ("jobbskatteavdraget, och förmögenhetsskatten slopades. Bolagsskatten och arbetsgivaravgifterna sänktes också"). "Förmögenhetsskatten avskaffades 2007" står också i förmögenhetsdiagrammet och i rutan om utjämning, där den saknar koppling till Gini-talet.
- **Problem:** Rubriken, rutan på första fliken och upprepningen bildar tillsammans ett argument: skatterna har sänkts, behoven ökar, alltså behövs högre skatt. MISSFORSTAND nr 79–82 föreslog redan att rubriken skulle delas upp. Meningen om skatteintäkter i kronor kom till, men rubriken är kvar.
- **Varför det spelar roll:** Den skattekritiska läsaren uppfattar en politisk slutsats. Den välfärdsorienterade läsaren får en slutsats bekräftad som sajten inte har belägg för att dra.
- **Förslag:** Rubrik: "Fler äldre och fler i vården: så har befolkning, skatter och välfärd förändrats". Flytta "Två trender möts" till fliken Skatter. Variera ordningen eller skriv "genom prioriteringar, effektivisering, högre skatteuttag eller en kombination". Lägg den offentliga sektorns *utgifter* som andel av BNP bredvid skattekvoten, så att båda sidor av kalkylen syns. Nämn förmögenhetsskatten en gång, i skattekvotskortet, och stryk den i Gini-rutan.
- **Allvar:** Hög · **Säkerhet:** hög · **Insats:** S · **Typ:** förbättring

### neutralitet-05. Källor från intresseorganisationer används utan märkning, trots att sajten lovar "bara offentliga källor"
- **Plats:** "Så arbetar vi → Källor" (r. 3082): "Vi använder bara offentliga källor: myndigheter …, regeringens propositioner och internationella organisationer". Avvikelser: LO:s beräkning (ISK, r. 2989); "62% av fackombud rapporterar otillräcklig bemanning (Kommunal 2023)" (hemtjänst, r. 3696); Läkarförbundets enkät och IVA-platser (r. 2253, 2258, 3517); UBS Global Wealth Report (r. 2580 och framåt); WEF:s vägranking (r. 3550); Ekonomifakta, som drivs av Svenskt Näringsliv (r. 1902, 2439).
- **Problem:** Fackliga källor och arbetsgivarnas källor används som neutrala fakta. Fackets källor dominerar och stöder alla budskapet att något är underfinansierat. Löftet i källpolicyn stämmer inte.
- **Varför det spelar roll:** En kritisk läsare som hittar "enligt LO:s beräkning" eller "Kommunal 2023" kan avfärda hela sajten som partisk, och källpolicyn gör det lätt att visa att sajten bryter mot sina egna regler.
- **Förslag:** (a) Byt till primärkällor där de finns. För ISK finns regeringens fördelningsanalys i prop. 2024/25:1 eller en egen FASIT-beräkning; att kronbeloppet blir störst för den översta tiondelen följer av reglerna och kan märkas "egen beräkning". (b) Behålls en intresseorganisation ska den märkas: "Kommunal (fackförbund), enkät till fackombud 2023". (c) Skriv om policyn: "Vi använder i första hand myndigheter och internationella organisationer. Uppgifter från intresseorganisationer anges med avsändare."
- **Allvar:** Hög · **Säkerhet:** hög · **Insats:** S–M · **Typ:** rättelse (policytexten), förbättring (källorna)

### neutralitet-06. Citatet saknar avsändare och finns i tre versioner
- **Plats:** Startkvittot (r. 1364), filmens slut (r. 1595), det gröna citatbandet i Metod (r. 3066, `#citat`), delningsbilden (r. 4706) och reservtexten i Din ekonomi (r. 5544).
- **Belägg:** I Metod står citatet inom citattecken *utan avsändare*, direkt före "Vi tar inte ställning i politiska frågor … Vi försöker skriva utan värderande ord" (r. 3086). Sidfoten säger "Ingen agenda. Bara siffror, med källa." (r. 3365). Reservtexten i r. 5544 har en annan och mer ömsesidig lydelse: "… och de finansierar dina. Det är innebörden …".
- **Problem:** Citattecken utan avsändare får läsaren att undra vem som säger det. "Solidariskt samhällskontrakt" är en värderande formulering, och den står närmast motsägelsefullt intill neutralitetslöftet och "Ingen agenda". Användartestet (punkt 4) noterade detsamma.
- **Varför det spelar roll:** Det är det enda värderande på startsidan, och det följer med när kvittot delas som bild.
- **Förslag (citatet står kvar ordagrant):** (a) Ange avsändare: "— Skatteplattformens utgångspunkt" under citatbandet och i liten text under startkvittot. (b) Lägg till en mening i "Så arbetar vi → Neutralitet": "Sajten har en utgångspunkt som vi säger öppet: skatten är gemensam och går till andra än en själv. Hur mycket skatten ska vara och vad den ska gå till tar vi inte ställning till." (c) Byt sidfotens "Ingen agenda. Bara siffror" mot "Oberoende fakta om svenska skattepengar, med källa och år." (d) Beslut: ska reservtexten i r. 5544 ha samma lydelse som citatet, eller ska den behållas som förklaring utan att presenteras som citatet?
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** beslut (a, b, d), förbättring (c)

### neutralitet-07. ISK är den enda reformen som granskas med för- och emotargument, och emotsidan namnges mer
- **Plats:** `#sparande`, "Vem sparar, och vem får kapitalinkomsterna?" och "Vad regeringen och remissinstanserna sa" (r. 2984–3000).
- **Belägg:** "Fem avstyrkte: Konjunkturinstitutet, Ekonomistyrningsverket, LO, Saco och TCO". Tillstyrkarna nämns bara som "en majoritet". "Tiondelen med högst ekonomisk standard fick nära 80 % av alla kapitalinkomster" står både här och i Inkomstskillnader. Ingen annan beslutad reform granskas på samma sätt, varken sänkt matmoms, jobbskatteavdraget, försvarsökningen eller RUT.
- **Problem:** När bara en av regeringens reformer får en egen genomgång med fördelningsfakta och remisskritik ser det ut som att sajten har valt ut den.
- **Varför det spelar roll:** Läsare som stöder reformen uppfattar avsnittet som riktat, och det gäller även om varje mening stämmer.
- **Förslag:** Namnge tillstyrkarna lika konkret, till exempel Fondbolagens förening, som redan finns i källraden, och Näringslivets skattedelegation. Ersätt LO:s kronbelopp enligt fynd 05. Beslut: ta antingen bort genomgången av remissvaren och behåll fakta om reglerna, eller gör samma format till en princip för de största skatteändringarna 2025–2026.
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S (namnge), L (princip) · **Typ:** förbättring, beslut

### neutralitet-08. Skatteutgifter kallas "subventioner", och jobbskatteavdraget pekas ut
- **Plats:** `#budget`, h2 "Skatteutgifter — subventioner via skattesystemet" (r. 1999). Källraden (r. 2007): "Jobbskatteavdraget (218,8 mdkr) är klart största posten — drygt tre gånger så stor som den näst största".
- **Problem:** Att en skattesänkning är en "subvention" är en tolkning som beror på vilken norm man jämför med. Skrivelsen beskriver skatteutgifter i förhållande till en norm, och storleken beror på hur normen väljs. Meningen om "drygt tre gånger så stor" lägger betoning på en enskild reform.
- **Varför det spelar roll:** En skattekritisk läsare hör att "det staten avstår från att ta" beskrivs som en kostnad. Det är en välkänd skiljelinje i debatten.
- **Förslag:** Rubrik: "Skatteutgifter: avdrag och nedsatta skattesatser". Ingress: "… jämfört med en tänkt norm för hur skatten skulle se ut utan avdrag. Hur stora de blir beror på hur normen väljs." Stryk "klart" och "drygt tre gånger så stor" och låt stapeldiagrammet tala.
- **Allvar:** Medel · **Säkerhet:** medel (jag har inte läst skr. 2025/26:98 i original) · **Insats:** S · **Typ:** rättelse

### neutralitet-09. Kvittots jämförelser behandlar välfärd som tjänster och förvaltning och försvar som kostnader
- **Plats:** `#start`, startkvittot, `START_GRUPPER` (r. ~4447–4455).
- **Belägg:** Välfärdsraderna beskrivs som tjänster till människor: "en dag hemma med ett sjukt barn", "37 minuter på intensiven", "21 timmars hemtjänst". Förvaltningen blir "en hundradel av en riksdagsledamots månadsarvode", försvaret "en 310 000-del av en Archer-pjäs" och polisraden "1/50 av en polis månadslön".
- **Problem:** Förvaltningen (COFOG) är myndigheter, skatteuppbörd, EU-avgift och bistånd, och riksdagens arvoden är en försumbar del av den. Att knyta förvaltningen till politikerlöner lockar fram en politikerkritisk läsning. Bråkdelar av en kanon eller en lön känns abstrakta, medan minuter av vård känns konkreta. Bilden lutar åt olika håll beroende på läsaren. Detta skiljer sig från MISSFORSTAND nr 3, som handlade om att kvittot är en modell.
- **Varför det spelar roll:** Kvittot är det första läsaren ser och det delas som bild.
- **Förslag:** En princip för alla rader, där varje belopp blir en tjänst. Förvaltning: "ca X minuter av Skatteverkets arbete för hela landet" eller bara innehållet: "myndigheter, skatteuppbörd, EU-avgift". Försvar: "ca X sekunder av Sveriges försvar" (UO6 delat på årets sekunder). Polis och övrigt: "ca X minuter av polisens arbete i hela landet".
- **Allvar:** Medel · **Säkerhet:** hög för texten, låg för hur läsarna faktiskt uppfattar den · **Insats:** S · **Typ:** förbättring

### neutralitet-10. Snabbfakta och kvittot lyfter det minsta skattemåttet och det bästa vårdmåttet
- **Plats:** Snabbfakta nr 6 (`FAKTA`, r. 4123): "Nio av tio får en medicinsk bedömning i primärvården inom tre dagar". Startkvittot (r. 4580): "SPARA: SKATTEN ÄR 20,1 % AV LÖNEN".
- **Belägg:** 63 % inom 90 dagar står bara i brödtexten. Kvittots "SKATTEN" betyder inkomstskatt. Med sajtens egna tal för medianlönen blir inkomstskatt, arbetsgivaravgift utan pensionsavgift (12 034 − 3 910 kr) och moms (3 800 kr) tillsammans 19 616 kr av en lönekostnad på 50 334 kr, alltså cirka 39 % (egen beräkning).
- **Problem:** Rubriken på ett faktakort, som delas som bild, väljer den gynnsammaste siffran. Kvittot kallar det smalaste måttet för "skatten". Att arbetsgivaravgiften står under kvittot hjälper, men delningsbilden visar bara 20,1 %. Vilket mått som är rätt ur ekonomisk synvinkel är roll 3:s fråga. Här gäller det vad måttet kallas.
- **Varför det spelar roll:** En skattekritisk läsare ser en underskattning, och en vårdkritisk läsare ser ett utvalt mått.
- **Förslag:** Kortrubrik: "Nio av tio får bedömning inom tre dagar, men var tredje väntar längre än 90 dagar på operation". Kvittot: "INKOMSTSKATTEN ÄR 20,1 % AV LÖNEN", och under kvittot en rad: "Med arbetsgivaravgift och moms: cirka 39 % av vad lönen kostar arbetsgivaren (egen beräkning)."
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** förbättring

### neutralitet-11. Fyra livssituationer: tre av fyra är personer som tar emot mycket eller har låg inkomst
- **Plats:** `#scenarion`, `SCENARIER` (r. ~6390–6475).
- **Belägg:** Barnfamilj ("Tar emot mer än betalar: +320 tkr/år"), en ensamstående med medianlön, en person med MS som arbetar deltid och en anhörigvårdare på 240 tkr. Ingen har hög inkomst, ingen är egenföretagare och ingen är pensionär. Pensionären efterfrågades i användartestet, punkt 8.
- **Problem:** Urvalet visar välfärden som generös och skatten som rimlig. Den som betalar mest, till exempel den som tjänar 60 000 kr eller mer och betalar 52 % i marginalskatt, syns inte.
- **Varför det spelar roll:** En skattekritisk läsare saknar sig själv, och en pensionär saknar sig själv.
- **Förslag:** Byt eller lägg till "Högre inkomst (65 000 kr/mån, 45 år, inga barn)" och "Pensionär (75 år, 18 000 kr i pension)", så att profilerna täcker både dem som betalar mer och dem som tar emot mer. Skriv urvalet i ingressen: "Fyra exempel som visar spridningen, från dem som betalar mest till dem som tar emot mest."
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

### neutralitet-12. Det står för lite om vem som står bakom sajten
- **Plats:** `#om-oss` och "Så arbetar vi → Vem står bakom" (r. ~3090 och framåt).
- **Belägg:** "Skatteplattformen drivs av Wilhelm Wennergren, utan extern finansiering." Det finns ingen mening om bakgrund, eventuella uppdrag eller partitillhörighet, eller hur neutraliteten granskas.
- **Problem:** Sajten ber läsaren lita på dess urval men berättar nästan inget om avsändaren. Ett tidigare fynd om "Perspektiv"-märkning (GENOMLYSNING 2026-10) tyder på att tolkningsfrågan har diskuterats, men det syns inte för läsaren.
- **Varför det spelar roll:** Den första frågan en skeptisk läsare eller journalist ställer är vem som ligger bakom.
- **Förslag:** Två eller tre meningar: yrkesbakgrund, "har inga partipolitiska uppdrag och är inte medlem i något parti" (om det stämmer), och "Sajten granskas regelbundet av utomstående; senast i november 2026 av tio granskare med olika inriktning" med länk till sammanställningen.
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** beslut

## 5. De tre viktigaste åtgärderna

1. **Skriv ut urvalsprinciper och gör resultattavlan i Jämförelser rättvis (fynd 01 och 02).** Det är sajtens mest synliga omdöme om Sverige. Lägg till arbetslöshet, skattenivå och PISA läsning, räkna varje fenomen en gång och skriv hur måtten valts. Det är den enskilt största källan till anklagelser om partiskhet.
2. **Ta bort argumentationsmönstret i Framtid och sjukvårdsrubriken (fynd 03 och 04).** Rubrikerna är det enda många läser. Rubriker som visar båda sidor och en annan placering kostar under en timme och tar bort de tydligaste tecknen på att sajten driver en linje.
3. **Följ källpolicyn och ange avsändare för citatet (fynd 05 och 06).** Byt eller märk fackliga källor och arbetsgivarnas källor, skriv om policytexten och ange att citatet är "Skatteplattformens utgångspunkt". Då blir det sajtens öppet redovisade hållning i stället för en dold.

## 6. Frågor till ägaren

1. Får citatet en avsändare ("Skatteplattformens utgångspunkt") och en mening i neutralitetsavsnittet? Ska reservtexten i Din ekonomi (r. 5544, "… och de finansierar dina") få samma lydelse som citatet?
2. Ska resultattavlan "18 av 24" stå kvar som ett tal, eller visas per område?
3. Ska ISK-avsnittets genomgång av remissvaren tas bort, eller göras till en princip för alla större skatteändringar?
4. Vill du skriva några meningar om din bakgrund och om eventuella uppdrag på sidan Om oss?
5. Ska livssituationerna bytas, eller ska en femte och sjätte läggas till (högre inkomst, pensionär)?

## 7. Metod och avgränsning

- **Underlag:** Jag renderade hela sidan i Chrome headless (`--dump-dom`, lokal server på port 8774) och tog ut den synliga texten per sektion med ett Python-skript. Jag läste alla vyer två gånger, en gång som en skattekritisk läsare och en gång som en välfärdsorienterad läsare, och kontrollerade sedan rubriker, ingresser, faktakort, kvittorader och detaljpanelernas fakta. Jag sökte efter värdeord och efter källor från intresseorganisationer med `grep` i `index.html` och räknade resultattavlan manuellt ur `JMF_DATA`.
- **Skärmbilder (1280 px):** `/tmp/neutralitet-start.png`, `-oecd.png`, `-framtid.png`, `-budget.png`, `-sjukvard.png`. Den sista blev tom på grund av renderingen, men sjukvården finns med i texten från DOM-dumpen.
- **Jämfört med:** `KANT.md`, `MISSFORSTAND_2026-11.md` (nr 3, 13 och 79–82 berörs men rapporteras från en annan vinkel), användartestets sammanfattning (punkt 4 och 8) och `GENOMLYSNING_2026-10.md`.
- **Inte gjort:** Jag har inte verifierat Sveriges värden för arbetslöshet, `hlth_silc_08` eller PISA läsning mot primärkällan (det är roll 2:s område; länkarna finns i fynden). Jag har inte läst skr. 2025/26:98 i original. Jag har inte bedömt mobilvy, filmen i rörelse eller tillgänglighet. Jag har inte testat bilden med riktiga läsare, så omdömena om hur läsare reagerar är expertbedömningar.
- **Utanför min roll men noterat:** Flera påståenden i prislistans detaljkort saknar källa ("Upplevd trygghet kvällstid: Sverige rankas #38 av 40", "Sjukfrånvaro: Sverige högre än OECD-snitt — debatt om generositet vs behov", "Väntetiderna har ökat sedan pandemin"), r. 3550–3700. Lämnas till roll 2.
