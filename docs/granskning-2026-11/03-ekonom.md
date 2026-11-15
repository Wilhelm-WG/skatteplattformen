# Granskning 03: ekonom (nationalekonom, offentlig ekonomi)

Granskare: roll 3 `ekonom`, 2026-11-14. Underlag: `index.html` (lokal kopia, port 8773), `docs/METODRAPPORT.md`, `KANT.md`.

## 1. Sammanfattning

Skattemodellen håller hög klass. Jag räknade om tre exempel för hand och fick samma resultat som sajten på kronan, och förmånsmodellen är kalibrerad mot COFOG och Kolada. De stora problemen gäller hur resultaten tolkas, inte räknefel. Det viktigaste fyndet är att den "skatt" som kvittona fördelar innehåller den allmänna pensionsavgiften på 7 % av lönen, ungefär en tredjedel av inkomstskatten på medianlönen, samtidigt som inkomstpensionen den betalar för är borttagen ur fördelningen. Dessutom visar filmen fel belopp till kommun, region, stat och pension. Livsloppet och kalkylatorns nettotext säger mer än modellen kan bära, bland annat att flödena "jämnas ut över livet", vilket modellens egna siffror motsäger.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Rimlighet i modellen | 4 | Inkomstskatten stämmer exakt med SKV 433 och förmånerna är kalibrerade. Avdraget för pensionen är dock inkonsekvent: arbetsgivarens del räknas bort, men inte den anställdas del på 7 % (ekonom-01). |
| Tydlighet om antaganden | 3 | Ovanligt öppen redovisning, men känslighetsanalysen tar bara upp de små antagandena. De konventioner som avgör om nettot blir plus eller minus syns inte där (ekonom-06), och metodrapporten har kvar gamla tal (ekonom-10). |
| Rättvisande tolkningar | 3 | Kvittots metodrad är bra. Nettotexterna för den som arbetar, påståendet att det "jämnas ut över livet" och filmens penningflöden ger däremot en bild som modellen inte stöder (ekonom-02, 03, 04, 05). |

## 3. Det som fungerar

- **Skattemodellen.** `skattDelar` följer SKV 433 i varje steg: grundavdragets avrundning, avräkningen av den allmänna pensionsavgiften före jobbskatteavdraget, förhöjt grundavdrag i tolv intervall och åldersgränser i födelseår. Mina handräkningar (avsnitt 7) stämmer med sajten på kronan.
- **Kalibreringen** av sjukvård, äldreomsorg och socialt skydd mot de faktiska utgifterna 2024, kontrollerad av `kontroll.mjs` (±3 %, i dag inom 0,6 %).
- **Gemensamma utgifter redovisas för sig** (100 tkr per invånare) med motiveringen att skattesidan saknar bolagsskatt, punktskatter och lån. Det är ekonomiskt korrekt och ovanligt ärligt.
- **Kvittots metodrad på startsidan**: "I verkligheten går kommunalskatten till kommun och region, men alla skatter tillsammans betalar alla utgifter." Den bär det proportionella kvittot väl.
- **Genomsnittsskatt bredvid marginalskatt** (rad 2763) med riktiga trappsteg: 24, 32 och 52 %. Jag har kontrollerat dem i modellen (24,3 % vid 459,6 tkr, 32,4 % vid 480 tkr, 52,4 % vid 700 tkr).

## 4. Fynd

### ekonom-01. "Skatten" i kvittona innehåller pensionsavgiften för den inkomstpension som har räknats bort

- **Plats:** `startKvittoData` (rad 4549), kvittot i Din ekonomi (`skattDelar`, rad 5333), `LIVSLOPP_BEF` (rad 6610), `skattetid`, texten i Skatter i korthet (rad 2854), metodraden på startsidan (rad 1359).
- **Belägg:** På 38 300 kr i månaden ger `skattDelar(40, 459.6)` kommunalskatt 142,96 tkr och jobbskatteavdrag 50,66 tkr, alltså skatten 7 692 kr i månaden. I den summan finns den allmänna pensionsavgiften, 7 % av 459 600 kr = 32 200 kr om året eller **2 683 kr i månaden**. Den betalas in och kvittas direkt mot skatten med en skattereduktion på 100 %, så den syns inte som en egen rad (koden: "Allmän pensionsavgift 7 % av lönen avräknas först mot skatten", rad 5346). Ändå fördelas hela beloppet med `KVITTO_ANDELAR`, där inkomstpensionen (363,7 mdkr) är borttagen med motiveringen att den "betalas med pensionsavgifter". Pensionsavgiften till inkomstpensionen är 18,5 % av den pensionsgrundande inkomsten, vilket är 10,21 % från arbetsgivaren plus 7 % från den anställda. Sajten räknar bort bara arbetsgivarens del. Källa (primär): lag (1994:1744) om allmän pensionsavgift, <https://lagen.nu/1994:1744>. Pensionsmyndigheten beskriver avgiften som 7 % som tas ut tillsammans med den preliminära skatten: <https://pensionsmyndigheten.se/content/dam/pensionsmyndigheten/blanketter---broschyrer---faktablad/broschyrer-och-faktablad/faktablad/PM-7623-Sa-har-tjanar-du-in-till-din-pension-25-01.pdf>.
- **Problem:** Kvittot är inte konsekvent med sig självt. Om inkomstpensionen räknas som "egna avgifter, inte skatt" måste den anställdas egen avgift också räknas bort. Som det är nu ser det ut som att 35 % av medianlönens inkomstskatt (2 683 av 7 692 kr) går till vård, skola och försvar. I själva verket ger de 2 683 kronorna egen pensionsrätt. Samma fel finns i livsloppet: arbetsåldrarna betalar enligt modellen in cirka 7 % av lönen mer än de "betalar för andra". Skattetiden på prislapparna (92 tkr om året) innehåller också avgiften.
- **Varför det spelar roll:** Det här är sajtens huvudsiffra, och den gäller alla löntagare. En ekonom eller journalist som ser motsägelsen kan börja misstro hela kvittot.
- **Förslag:** Välj en av två konsekventa lösningar (ägarens beslut).
  - **(a) Rekommenderas:** Visa pensionsavgiften som en egen rad överst på kvittot och fördela bara resten. Till exempel: "Din allmänna pension (7 % av lönen) 2 683 kr. Resten, 5 009 kr, fördelas som de offentliga utgifterna." I koden: `apa = Math.round(inc*0.07*10)/10` finns redan i `skattDelar`. Returnera den och dra av den innan `START_GRUPPER` och `KVITTO_ANDELAR` används. Gör samma sak i `LIVSLOPP_BEF` och `skattetid`. Lägg till "och den allmänna pensionsavgiften (7 %)" på rad 2854 och i filmens text.
  - **(b)** Behåll summan men lägg tillbaka inkomstpensionen i fördelningsbasen (3 223 mdkr, som hundralappen). Då får kvittot en pensionsrad på cirka 11 %, men det blandar ihop skatt och avgift.
- **Allvar:** Hög. **Säkerhet:** hög för mekanismen och beloppet per person, låg för den samlade summan (i storleksordningen 130–150 mdkr, inte verifierat). **Insats:** M. **Typ:** beslut.

### ekonom-02. Filmen visar fel belopp till kommun, region, stat och pension

- **Plats:** Filmen `#kretslopp`, kapitlet "Skatteverket fördelar pengarna" (`SCENES`, rad 1585), `filmTal()` (rad 1601–1613), etiketterna `kl-t-fkom`, `kl-t-freg`, `kl-t-fstat`, `kl-t-fpen`.
- **Belägg:** `filmTal` sätter `kommunal = skatt − stat` (7 692 kr) och delar det mellan kommun och region. Staten får `stat + moms + (avg − pen)` och pensionen bara 10,21 %. Så fungerar det inte i verkligheten. Kommun och region får hela kommunalskatten på den beskattningsbara inkomsten. Jobbskatteavdraget och reduktionen för pensionsavgiften betalas av staten, och pensionsavgiften förs till pensionssystemet. Ekonomifakta: "kommunernas och regionernas skatteintäkter beräknas exklusive jobbskatteavdraget" (sekundärkälla, <https://www.ekonomifakta.se/fakta/skatter/skatt-pa-arbete/jobbskatteavdraget>; primärkälla för pensionsavgiften: lag 1994:1744). Medianlönen räknad med sajtens egna funktioner, kronor i månaden:

  | Mottagare | Filmen visar | Med verkliga flöden |
  |---|---|---|
  | Kommunen | ca 4 900 | ca 7 600 (11 913 × 20,69/32,38) |
  | Regionen | ca 2 800 | ca 4 300 |
  | Staten (moms + arbetsgivaravgift utom pension − jobbskatteavdrag − pensionsavgift) | ca 12 000 | ca 5 100 |
  | Pensionen (10,21 % + 7 %) | ca 3 900 | ca 6 600 |
  | Summa | 23 559 | 23 558 |

- **Problem:** Filmen ska visa vem som får pengarna, men visar kommun och region drygt 4 000 kr för lite och staten nästan 7 000 kr för mycket. Pensionssystemet får 2 700 kr för lite.
- **Varför det spelar roll:** Filmen är sajtens förklaring av hur pengarna flödar och används gärna i undervisning (roll 9). Fördelningen mellan kommun och stat är en grundläggande fakta.
- **Förslag:** I `filmTal`: `const d = skattDelar(40, lon*12/1000, {ksOverride:0.3238}); kommunalBrutto = d.komm*1000/12; apa = Math.round(lon*12*0.07/100)*100/12; kom = kommunalBrutto*20.69/32.38; reg = kommunalBrutto - kom; staten = stat + moms + (avg - pen) - d.jsa*1000/12 - apa; pen = lon*0.1021 + apa`. Ny text för `mer`: "Kommunen och regionen får hela kommunalskatten. Jobbskatteavdraget betalas av staten, och 7 % av lönen går som allmän pensionsavgift till pensionssystemet, liksom arbetsgivarens ålderspensionsavgift." Flödenas tjocklek följer `TAL.w` och blir rätt automatiskt.
- **Allvar:** Hög. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### ekonom-03. Nettot för den som arbetar räknar med förmåner som går till dem som inte arbetar

- **Plats:** `getStage` (rad 5249), `SYSS_UTB` (rad 5242), nettorutan i kalkylatorn (rad 5498–5504), punkten "Du" i `renderLifecycle` (rad 6621). Skärmbild: `/tmp/ekonom/ekonom-kalkylator.png`.
- **Belägg:** Standardläget är 22 år, 25 000 kr i månaden och "Vet inte". Förmånerna blir då 106 tkr, varav 51 tkr i högskola (45 % av åldersgruppen studerar), och sajten skriver att personen "betalar cirka 18 tkr mer". Väljer man "Arbetar" blir förmånerna 60 tkr och nettot 64 tkr. Skillnaden är 46 tkr på samma lön. Även med "Arbetar" ingår socialt skydd som åldersgenomsnitt, till exempel 73 tkr för 55–64 år. Det är till stor del sjukersättning, sjukpenning och arbetslöshetsersättning som går till dem som inte har lön, och en heltidsanställd med full lön tar sällan emot dem samma år. Texten säger "en genomsnittlig person i din ålder **och inkomstgrupp**", men förmånerna beror inte på inkomst (KANT: "Förmånerna … beror på ålder, inte på inkomst").
- **Problem:** Skatten gäller en person med den angivna lönen, men förmånerna gäller hela åldersgruppen, inklusive studenter och sjukskrivna. Därför underskattar nettot vad en heltidsarbetande betalar netto, med 30–50 tkr om året i vanliga fall.
- **Varför det spelar roll:** Det här är det personliga svaret på frågan "vad får jag för pengarna", och det är det besökarna delar.
- **Förslag:** (1) Ändra "i din ålder och inkomstgrupp" till "i din ålder, med din lön". (2) Förvälj "Arbetar" när lönen är över cirka 10 000 kr i månaden och åldern 19–64, och behåll "Vet inte" vid låg eller ingen lön. (3) Lägg till en mening: "Ersättningarna (sjukpenning, a-kassa, föräldrapenning) är snittet för alla i din ålder. För dig som arbetar är de främst ett skydd om du blir sjuk eller arbetslös, inte pengar du får i år." Alternativ som kräver beslut: visa ersättningarna som ett "försäkringsskydd" i en egen stapel som inte räknas in i nettot.
- **Allvar:** Hög. **Säkerhet:** hög för siffrorna, medel för hur stor andel som är ersättningar till personer utan lön (uppdelningen av `soc` finns inte i koden). **Insats:** M. **Typ:** förbättring (punkt 1–3), beslut (alternativet).

### ekonom-04. "Över livet jämnas flödena ut" motsägs av livsloppets egna siffror

- **Plats:** `SCENARIER.barnfamilj.noter` (rad 6417): "Över livet jämnas flödena ut (se Livsloppet)". Liknande text i `solidarityTexts.barnfamilj` (rad 5537).
- **Belägg:** Summerar man nettot i `LIVSLOPP_BEF` år för år från 0 till 88 år (75+ räknat som 13 år) får man ungefär +8,1 mkr som tas emot och −5,3 mkr som betalas. Över livet blir det alltså cirka **2,8 miljoner kronor mer mottaget än betalt**, och då ingår inte de gemensamma utgifterna på 100 tkr om året. På hela befolkningen visar modellen samma sak: förmåner 1 713 mdkr mot skatter 1 575 mdkr.
- **Problem:** Livsloppet kan inte visa att flödena jämnas ut, eftersom skattesidan saknar ungefär 40 % av de offentliga inkomsterna (bolagsskatt, punktskatter, kapital- och fastighetsskatt, avgifter). Hänvisningen till livsloppet pekar därför på ett diagram som visar motsatsen.
- **Varför det spelar roll:** En uppmärksam läsare som summerar staplarna drar slutsatsen att alla "får mer än de betalar". Det skadar förtroendet och går att använda politiskt åt båda håll.
- **Förslag:** Ändra till "Nettot gäller ett enskilt år. Under livet växlar det: som barn och äldre tar man emot mer, under arbetslivet betalar man mer (se Livsloppet)." Stryk "Över hela livet jämnas flödena ut" på rad 5537.
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### ekonom-05. Förklaringen till skillnaden mellan förmåner och skatter i livsloppet håller inte

- **Plats:** Livsloppets metodruta (rad 2921): "Summa förmåner 1 713 mdkr och skatter 1 575 mdkr; skillnaden beror främst på att momsen är en försiktig uppskattning."
- **Belägg:** Modellens moms är 46 tkr på en konsumtion av 323 tkr vid medianlönen, alltså 14 % av konsumtionen inklusive moms, och sajten anger 13–16 %. Det är inte uppenbart försiktigt, eftersom hyror är momsfria och livsmedel har 6 % från april 2026. Skillnaden har dessutom större förklaringar: förmånerna finansieras också av skatter som inte finns på skattesidan (bolagsskatt, punktskatter, kapital- och fastighetsskatt), och skattesidan innehåller den allmänna pensionsavgiften, som hör till inkomstpensionen (ekonom-01). Att de två summorna inte ska vara lika stora är alltså väntat.
- **Problem:** Förklaringen pekar ut momsen som felkälla utan belägg och döljer att jämförelsen bara gäller en del av skatterna.
- **Förslag:** "Förmånerna (1 713 mdkr) och skatterna i diagrammet (1 575 mdkr) behöver inte vara lika stora. Förmånerna betalas också med bolagsskatt, punktskatter, skatt på kapital och fastigheter och med lån, som inte ingår i skattesidan. Momsen är en uppskattning."
- **Allvar:** Medel. **Säkerhet:** medel (en exakt fördelning av skillnaden kräver HE0110-körningen). **Insats:** S. **Typ:** rättelse.

### ekonom-06. Känslighetsanalysen visar små antaganden men inte de konventioner som avgör svaret

- **Plats:** `#sensitivitet`, tornadodiagrammet (rad 6676–6730). Skärmbild: `/tmp/ekonom/ekonom-sensitivitet.png`.
- **Belägg:** Utgångsläget (35 år, 460 tkr) är skatt 236 tkr minus förmåner 128 tkr, alltså ett netto på 108 tkr. Siffran visas inte i diagrammet, bara ändringarna. De fyra staplarna ger ±5 till ±40 tkr. Modellens konventioner flyttar nettot mycket mer:

  | Konvention | Nettot ändras med | Nytt netto |
  |---|---|---|
  | Arbetsgivaravgiften (21,21 %) räknas inte som den anställdas skatt | −98 tkr | 10 tkr |
  | Den allmänna pensionsavgiften räknas bort (ekonom-01) | −32 tkr | 76 tkr |
  | De gemensamma utgifterna (100 tkr) räknas in | −100 tkr | 8 tkr |
  | Momsen ±15 % (antagandefilens intervall) | ±7 tkr | |

- **Problem:** Läsaren tror att svaret är säkert på ±40 tkr, men det beror mest på avgränsningar som inte prövas. En nationalekonom ser dem direkt.
- **Förslag:** Visa utgångsläget i diagrammet ("Utgångsläge: betalar 108 tkr mer än hen tar emot"). Lägg till en tabell under diagrammet, "Vad som räknas", med de tre konventionerna ovan, med text som: "Räknar man inte arbetsgivaravgiften som din skatt blir nettot 10 tkr. Räknar man in din del av det gemensamma (100 tkr) blir det 8 tkr." Det är beräkningar ur sajtens egna funktioner och kräver inget nytt underlag.
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** M. **Typ:** förbättring.

### ekonom-07. Arbetsgivaravgiften presenteras som den anställdas skatt utan att det sägs att det är ett antagande

- **Plats:** Kalkylatorn, "Betalas också, men syns inte på lönebeskedet" (rad 5487) under rubriken "Skatt du betalar i år". Livsloppets skattesida.
- **Belägg:** Att arbetsgivaravgiften i längden bärs av löntagaren är ett vanligt antagande (OECD:s skattekil räknar likadant), men det är omstritt. Den mest relevanta svenska studien finner att sänkningen av arbetsgivaravgiften för unga inte gav högre löner, utan att effekten hamnade hos företagen och i fler jobb: Saez, Schoefer och Seim (2019), "Payroll Taxes, Firm Behavior, and Rent Sharing: Evidence from a Young Workers' Tax Cut in Sweden", *American Economic Review* 109(5), <https://doi.org/10.1257/aer.20171937> (primärkälla).
- **Problem:** Det är ett modellval och inget faktum. Det är också det antagande som påverkar nettot mest (ekonom-06).
- **Förslag:** Lägg till en mening i noten under skatterna: "Arbetsgivaren betalar avgiften, men den räknas här som en del av din skatt, eftersom den är en kostnad för att anställa dig. Forskningen är inte enig om hur mycket som i praktiken bärs av löntagaren."
- **Allvar:** Medel. **Säkerhet:** medel. **Insats:** S. **Typ:** förbättring.

### ekonom-08. Texten för pensionärer säger "pension", men inkomstpensionen ingår inte i modellen

- **Plats:** `lcText` för ålder 65+ (rad cirka 5517): "I den här åldern tar de flesta emot mer i vård, omsorg och pension än de betalar i skatt."
- **Belägg:** Förmånerna för 65–74 och 75+ innehåller garantipension och bostadstillägg, men inte inkomstpensionen (`LIVSFASER_V2.pensionar.note`: "Inkomstpensionen … ingår inte").
- **Problem:** Läsaren tror att hela pensionen räknas som en förmån som betalas med skatt. Det strider mot sajtens egen avgränsning och mot ekonom-01.
- **Förslag:** "I den här åldern tar de flesta emot mer i vård, omsorg och garantipension än de betalar i skatt. Inkomstpensionen räknas inte här, eftersom den betalas med egna avgifter."
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### ekonom-09. Pensionsavgift tas ut på inkomster där den inte gäller

- **Plats:** `skattDelar` (rad 5345–5349).
- **Belägg:** `apa = inc*0.07` tas ut på alla inkomster, och det som inte ryms i skatten (`apaRest`) läggs på kommunalskatten. Modellen ger skatten 1 100 kr på 15 tkr om året, 1 400 kr på 20 tkr och 1 700 kr på 24 tkr. Enligt lagen (1994:1744) tas ingen allmän pensionsavgift ut om inkomsten är under 42,3 % av prisbasbeloppet, cirka 25 000 kr 2026. Gränsen har jag inte kontrollerat mot 2026 års belopp. På startkvittot slår det igenom på månadslöner under cirka 2 100 kr, till exempel en liten deltidslön som kvittot räknar som årslön.
- **Problem:** Litet fel, men det drabbar unga med låg inkomst, som sajten vänder sig till. Avgiften är dessutom ingen skatt (ekonom-01).
- **Förslag:** `const apa = inc < 0.423*59.2 ? 0 : Math.round(inc*0.07*10)/10;` och därefter en kontroll i `kontroll.mjs`.
- **Allvar:** Låg. **Säkerhet:** medel. **Insats:** S. **Typ:** rättelse.

### ekonom-10. Metodrapporten har kvar talen från före rättelsen av utbildning för 35–44 år

- **Plats:** `docs/METODRAPPORT.md`, avsnitt 7.1 (tabellen: utbildning 42, summa 165 för 35–44), 8 (förmåner 165, netto +78 betalt), 11.2 (förmåner 165 tkr, netto 71 tkr) och känslighetstabellen (±41 tkr).
- **Belägg:** Koden har `utb:5` och `LIVSLOPP_BEF` har `f:128` för 35–44 (rad 5193 och 6614). Tornadodiagrammet visar ±32 tkr för förmånerna, och nettot i utgångsläget är 108 tkr. Avsnitt 7.2 och 13.2 i samma rapport beskriver rättelsen.
- **Problem:** Rapporten säger emot sig själv, och just det avsnitt en extern granskare läser först (7.1) är inaktuellt.
- **Förslag:** Uppdatera tabellerna i 7.1 (5 och 128), 8 (128, netto −115) och 11.2 (förmåner 128, netto 108, förmånerna ±32 tkr).
- **Allvar:** Låg. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### ekonom-11. Skattekvoten: avgifter till privata system nämns inte som felkälla i jämförelsen

- **Plats:** Framtid och historik, fliken Skatter, kortet "Jämförelse: Sverige vs OECD" (rad 2433–2434).
- **Belägg:** Kortet förklarar redan att ersättningar beskattas och att pensionsavgiften räknas som skatt (det står i KANT). Det säger inte att lagstadgade eller avtalade avgifter till privata system inte räknas som skatt: tjänstepensionen i Sverige (cirka 4,5–6 % av lönen), obligatorisk privat pension i andra länder och arbetsgivarbetald sjukförsäkring i USA. OECD redovisar dem separat som "non-tax compulsory payments" (Revenue Statistics, sekundärt underlag; jag har inte verifierat siffror per land).
- **Problem:** Skillnaden mellan Sverige och OECD-snittet ser större ut än skillnaden i vad hushållen faktiskt måste betala.
- **Förslag:** Lägg till: "Avgifter till privata system, som tjänstepension eller privat sjukförsäkring i USA, räknas inte som skatt, även när de är obligatoriska."
- **Allvar:** Låg. **Säkerhet:** medel. **Insats:** S. **Typ:** förbättring.

## 4b. Modellens viktigaste antaganden: riktning och storlek

Exemplen gäller en 35-åring med medianlönen, med nettot 108 tkr betalt mer än mottaget, om inget annat anges.

| Antagande | Påverkar | Riktning | Storlek | Redovisas i dag | Förslag |
|---|---|---|---|---|---|
| Kvittot fördelar skatten proportionellt mot alla utgifter | Kvittona | Visar en "andel" av försvaret m.m. som inte motsvarar hur pengarna faktiskt flyttas (kommunalskatten går till kommun och region) | Kvalitativ | Ja, metodraden | Behåll, och rätta filmen (ekonom-02) så att den visar de verkliga flödena |
| Allmän pensionsavgift räknas som skatt | Kvitton, livslopp, skattetid | Överskattar skatten till det gemensamma | 35 % av inkomstskatten vid medianlönen | Nej | ekonom-01 |
| Arbetsgivaravgiften bärs av den anställda | Nettot, livsloppet | Ökar nettobetalningen | 98 tkr | Delvis | ekonom-06, 07 |
| Gemensamma utgifter räknas inte in | Nettot | Ökar nettobetalningen | 100 tkr | Ja | Visa i känslighetsanalysen |
| Förmånerna är åldersgenomsnitt, också ersättningar | Nettot för den som arbetar | Minskar nettobetalningen | 30–50 tkr | Delvis | ekonom-03 |
| Momsen med antagen sparkvot och momssats | Skatten | Båda hållen | ±7 tkr (±15 %) | Ja | – |
| Utgifterna 2024 räknas brutto, inklusive investeringar, verksamhet som betalas med avgifter och underskott | Kvittona | Andelarna för investeringstunga områden (transporter) blir något högre än den löpande kostnaden | Liten | Nej | En mening i metoden |
| Tvärsnitt 2024, inte en kohort | Livsloppet | Dagens unga kommer att ha högre reala löner och längre liv | Okänd | Delvis ("ett år i taget") | Skriv "dagens åldersgrupper, inte en persons livslopp" i diagramrubriken |
| Skatteregler 2026 på inkomster och förmåner 2024 | Livsloppet | Skatten underskattas något (inkomsterna har ökat) | Några procent | Ja | – |

## 5. De tre viktigaste åtgärderna

1. **Gör pensionsavgiften konsekvent (ekonom-01).** Det är sajtens huvudsiffra och den enda fråga där modellen motsäger sin egen avgränsning. Lösning (a), en egen rad för den allmänna pensionen överst på kvittot, är både korrekt och pedagogisk: läsaren ser att en del av "skatten" är hennes egen pension. Rättelsen påverkar startkvittot, Din ekonomi, livsloppet och skattetiden, så den bör göras i ett svep tillsammans med `og.png`.
2. **Rätta filmens penningflöden (ekonom-02).** Den här ändringen är liten, belagd och kan göras direkt. Filmen är det enda stället som visar vem som faktiskt får pengarna, och där är felen störst (flera tusen kronor per mottagare).
3. **Stäm av nettotexterna mot vad modellen kan bära (ekonom-03, 04, 05, 08).** Förvälj "Arbetar" när det finns en lön, stryk "inkomstgrupp" och "jämnas ut över livet", och byt förklaringen om momsen. Det är fyra små textändringar som tar bort de tolkningar en ekonom först skulle invända mot.

## 6. Frågor till ägaren

1. Ska den allmänna pensionsavgiften visas som en egen rad (lösning a) eller ska inkomstpensionen läggas tillbaka i fördelningsbasen (lösning b)? Lösning a ändrar beloppen per rad på alla kvitton och delningsbilder.
2. Ska ersättningar som sjukpenning och a-kassa räknas in i nettot för den som har valt "Arbetar", eller visas som ett försäkringsskydd vid sidan av?
3. Får känslighetsanalysen visa att nettot för en medianlöntagare kan bli nära noll med andra rimliga konventioner? Det är sant, men det ändrar budskapet "under arbetslivet betalar man mer".
4. Ska livsloppet räknas om automatiskt (ett skript som läser HE0110-underlaget) när modellen ändras? En rättelse enligt ekonom-01 kräver en omräkning.

## 7. Metod och avgränsning

- **Läst:** del B och roll 3 i `PROMPT_TIO_GRANSKARE.md`, `KANT.md`, hela `METODRAPPORT.md`, `CLAUDE.md` och funktionerna `skattDelar`, `annualTax`, `startKvittoData`, `egenavgifter`, `getStage`, `LIVSFASER_V2`, `LIVSLOPP_BEF`, `renderLifecycle`, tornadodiagrammet, `filmTal` och `SCENES`, nettotexterna i `updateCalc`, `SCENARIER` och skattekvotskorten.
- **Handräkning:** jag räknade om tre exempel steg för steg med SKV 433 och PBB 59 200 kr och jämförde med sajtens funktioner, som jag körde i Node via `vm`, på samma sätt som `kontroll.mjs`:
  - Medianlön 38 300 kr: grundavdrag 18,1 tkr, kommunalskatt 142,96, jobbskatteavdrag 50,66, alltså **7 692 kr** i månaden. Stämmer.
  - 25 000 kr: grundavdrag 34,0 tkr, kommunalskatt 86,13, jobbskatteavdrag 32,54, alltså **4 466 kr**. Stämmer.
  - Pension 22 000 kr (född 1959 eller tidigare): grundavdrag 37,6 plus förhöjt grundavdrag 89,66, avrundat 127,3 tkr, kommunalskatt 44,26 tkr, alltså **3 689 kr** i månaden. Stämmer med modellen. Jag har inte kontrollerat beloppet mot skattetabellens kolumn för pensionärer.
- **Övrigt:** marginalskatt vid fem lönenivåer, låga inkomster (15–40 tkr), utgångsläget i känslighetsanalysen och livstidssumman ur `LIVSLOPP_BEF`. `node scripts/kontroll.mjs` gav 0 fel, 45 OK och 5 info.
- **Skärmbilder:** fyra stycken med Chrome headless mot en lokal server på port 8773 (stoppad efteråt), sparade i `/tmp/ekonom/` (utanför repot): `ekonom-start.png`, `ekonom-kalkylator.png`, `ekonom-sensitivitet.png`, `ekonom-livslopp.png`. I skärmbilden av `#sensitivitet` ligger ett stort tomt fält ovanför sektionen och menyn mitt på sidan. Det är troligen en artefakt av den långa headless-bilden, men roll 8 och 10 bör titta på det.
- **Inte gjort:** Jag har inte räknat om `LIVSLOPP_BEF`, eftersom HE0110-underlaget inte finns i repot. Därför är den samlade storleken av ekonom-01 i livsloppet en uppskattning. Jag har inte granskat egenföretagarmodellen i detalj, inte barnrutan (`barnPerAr`) och inte prislappar eller enskilda siffror (roll 2). Gränsen 42,3 % av prisbasbeloppet för den allmänna pensionsavgiften och OECD:s uppgifter om obligatoriska avgifter är inte verifierade mot 2026 års primärkälla.
