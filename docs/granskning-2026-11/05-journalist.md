# Granskning 5: journalist (granskande reporter)

Granskare: roll 5, `journalist`. Datum: 2026-11-14. Underlag: `index.html` lokalt (port 8775), git-historiken och de delningsbilder som sajtens egen kod ritar.

## 1. Sammanfattning

Sajten har ovanligt högt nyhetsvärde för en ideell sajt. Den har en tydlig ingång (skattekvittot), konkreta prislappar och en rättelselogg som är mer utförlig än hos de flesta redaktioner. De största riskerna för felaktiga rubriker finns i tre rubriker och bilder som säger mer än underlaget. Sjukvårdsrubriken håller inte mot sajtens egna diagram. Kvittobilden som delas saknar källa och metod. Ordet "skatt" betyder olika saker i olika vyer. Ur ansvarssynpunkt saknas två uppgifter som en reporter frågar efter först: vem personen bakom sajten är, och om AI har använts för att ta fram text, siffror och kod (git-historiken visar att den har det).

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Nyhetsvärde | 4 | Kvittot, prislistan och budgetens försvarsökning är konkreta, aktuella och lätta att göra rubriker av. |
| Citerbarhet | 3 | Faktakorten har källa, år och direktlänk, men prislappar saknar egna länkar och ankarna bygger på ordningsnummer. |
| Felrisk vid citat (5 = låg risk) | 3 | De flesta tal har sitt sammanhang nära, men några rubriker och delningsbilder tappar det helt. |
| Transparens om avsändare | 3 | Rättelseloggen och den öppna koden är förebildliga, men avsändaren beskrivs med en mening och AI-användningen redovisas inte. |

## 3. Det som fungerar (bevara)

- **Rättelseloggen** (`#rattelser`, rad 3109): datum, vad som var fel, vad som gäller nu och källa. Mer utförlig än hos de flesta medier. Den gör sajten trovärdig.
- **Faktakortens delningsbilder** (`faktaBild`, rad 4202): stor siffra, en mening, källa och år direkt i bilden (se `/tmp/j5/fakta4-canvas.png`). Bilderna går att publicera som de är.
- **Delningsbilden "Min ekonomi"** (rad 6910–6928) bär sina förbehåll i själva bilden: "Försvar, vägar och annat gemensamt ingår inte" och "Genomsnitt i en modell, inte en exakt beräkning för en person".
- **Jämförelsekorten säger själva var Sverige ligger**: till exempel "Tredje lägst av de sex länderna med uppgift" (`#jmf-sjukvard-9`). Den meningen räknas fram ur data och är svår att citera fel.
- **Kvittots vardagsjämförelser har källa och stämmer**: riksdagsarvodet 81 400 kr från januari 2026 ([riksdagen.se](https://riksdagen.se/sv/sa-funkar-riksdagen/ledamoternas-arvoden-och-villkor/ledamoternas-arvoden/), primärkälla; [Affärsvärlden](https://www.affarsvarlden.se/artikel/sa-mycket-hojs-riksdagsledamoternas-arvoden), sekundärkälla) och FMV:s köp av 48 Archer för cirka 5 miljarder kronor i september 2023 ([BAE Systems](https://www.baesystems.com/en/article/sweden-awards-bae-systems-contract-for-additional-48-archer-artillery-systems) och [Janes](https://www.janes.com/defence-news/land-forces/latest/dsei-2023-sweden-orders-48-more-archer-sphs-as-it-delivers-others-to-uk), båda sekundärkällor).

### Tre tänkta rubriker, prövade mot underlaget

| Rubrik | Håller den? |
|---|---|
| "Försvaret är statens största utgift 2026" | **Delvis.** Utgiftsområde 6 (225 mdkr) är störst, men det omfattar 39,7 mdkr militärt stöd till Ukraina och 10,1 mdkr krisberedskap. Försvaret i snäv mening (214,3 − 39,7 = 174,6 mdkr) är mindre än bidragen till kommunerna (UO25, 180,7 mdkr). Ingressen säger det, men rubriken gör det inte (journalist-07). |
| "Var femte lönekrona går till skatt" | **Bara för inkomstskatten.** 7 692 av 38 300 kr är 20,1 %. Med arbetsgivaravgiften är det (7 692 + 12 034) / 50 334 = 39 % av lönekostnaden, och då är momsen inte medräknad. Faktakortets delningsbild säger "skatt", inte "inkomstskatt" (journalist-04). |
| "Sverige lägger mest på vård i Norden och har lägst vårddödlighet" | **Nej.** Per invånare lägger Norge mest (9 523 mot 7 512 dollar). I åtgärdbar dödlighet ligger Sverige trea av fem nordiska länder, efter Norge och Island. Sajtens rubrik uppmuntrar till just den här rubriken (journalist-02). |

**De tre siffror jag skulle använda:** skatten på 25 000 kr och på medianlönen (4 466 och 7 692 kr, kontrollerade mot skattetabellen och med öppen metod), statsbudgeten 1 542 mdkr med UO6 225 mdkr (prop. 2025/26:1) och 148 100 kr per gymnasieelev (Skolverket 2025).
**De siffror jag inte skulle våga använda:** kvittots fördelning som om den gällde "min" skatt (den är en proportionell modell), livsloppets "betalar 115 000–185 000 kr mer än man tar emot" (gemensamma utgifter ingår inte) och ambulansens 9 600 kr (kostnad från 2025 delad med antal från 2023, och kortet säger själv att beloppet blir för högt).

## 4. Fynd

### journalist-01. AI-användningen redovisas inte
- **Plats:** Metod → Så arbetar vi (`#sa-arbetar-vi`, rad 3070–3105) och Om oss (`#om-oss`, rad 3172–3195).
- **Belägg:** `grep -E "\bAI\b|Claude|språkmodell" index.html` ger inga träffar. `git log` har 98 commits med raden "Co-Authored-By: Claude". Repot är publikt och länkas från sajten ("Källkod på GitHub").
- **Problem:** Policyn beskriver källor, beräkningar och kontroller men inte att text, siffror och kod till stor del har tagits fram med en AI-assistent.
- **Varför det spelar roll:** En reporter som hittar det i git-historiken har en färdig vinkel: "Skattesajten skrevs av AI". Det kan skada förtroendet mer än själva användningen gör. Ett pressetiskt minimum i dag är att redovisa AI-användning öppet.
- **Förslag:** Ett nytt stycke i Så arbetar vi, under Beräkningar: "**AI-stöd.** Texter, kod och sammanställningar tas fram med hjälp av en AI-assistent (Claude). Varje siffra kontrolleras mot den källa som anges, och skattemodellen prövas mot Skatteverkets tabeller före varje publicering. Ansvaret för innehållet är vårt." Lägg gärna samma sak i metodrapporten.
- **Allvar:** Hög · **Säkerhet:** hög (mätt) · **Insats:** S · **Typ:** beslut

### journalist-02. Sjukvårdsrubriken håller inte mot sajtens egna diagram
- **Plats:** Jämförelser, `#sjukvard`, rubriken: "Sverige lägger störst andel av BNP på vård i Norden, och har längst medellivslängd och bland de lägsta dödstalen som vården kan förhindra".
- **Belägg:** I `JMF_DATA.sjukvard` (rad 5664 och framåt) är åtgärdbar dödlighet 58,4 för Sverige, 54,6 för Norge och 57,7 för Island. Kortet `#jmf-sjukvard-9` säger själv "Tredje lägst av de sex länderna med uppgift" (`/tmp/j5/jmf-sjukvard-9.png`). Hälsoutgifter per invånare: Norge 9 523, Sverige 7 512 dollar. Rubriken ändrades 13 november (står i KANT.md), men den nya formuleringen har fortfarande problemet nedan.
- **Problem:** Eftersom "i Norden" står först läser man hela meningen som en nordisk jämförelse. Där är Sverige inte bland de lägsta i åtgärdbar dödlighet, utan i mitten. "Störst andel av BNP" stämmer, men en citerande reporter skriver "lägger mest på vård", och per invånare stämmer det inte.
- **Varför det spelar roll:** Rubriken är den mening som citeras, och den här kan granskas sönder med sajtens egna diagram. Både en skattekritisk och en välfärdsvänlig läsare kan använda det mot sajten.
- **Förslag:** "Sverige lägger störst andel av BNP på vård i Norden och har längst medellivslängd av de sju länderna. Dödstalen som vården kan förhindra ligger i mitten av Norden och långt under EU-snittet." Alternativt en kortare rubrik med bara de två mått som håller och utfallet i ingressen.
- **Allvar:** Hög · **Säkerhet:** hög (egna data). Medellivslängden 84,1 år har jag inte kunnat verifiera mot Världsbanken, eftersom API:et blockerade anrop. · **Insats:** S · **Typ:** rättelse

### journalist-03. Den delade kvittobilden och länkbilden saknar källa och metod
- **Plats:** `ritaKvittoBild` (rad 4692–4750), knappen "Dela kvittot som bild" (`openShareCard('kvitto')`, rad 1365) och `img/og.png`.
- **Belägg:** `/tmp/j5/kvitto-post-canvas.png` och `img/og.png`. Bilden visar "KVITTO · DIN SKATT 2026", raderna till exempel "Hälso- och sjukvård 1 275,00" och "Försvar 337,00", rubriken, citatet och adressen. Den har ingen källa, inget år för utgifterna och ingen mening om att fördelningen är proportionell mot de offentliga utgifterna 2024. Länkbilden lovar "med källa för varje siffra" men har själv ingen källrad.
- **Problem:** Bilden är sajtens mest spridda yta och den som lättast hamnar i ett flöde eller en artikel utan sammanhang. Den läses som "1 275 kr av min skatt gick till vården", alltså som ett faktiskt flöde och inte som en modell. Faktakortens bilder har källraden, men kvittobilden har det inte.
- **Varför det spelar roll:** Det är exakt det fel en faktagranskare (till exempel SVT Verifierat eller DN:s faktakoll) letar efter. Bilden har också den stora rubriken och citatet, så en saknad metodrad kan tas som tecken på att sajten är ett debattinlägg.
- **Förslag:** Lägg en rad i bildens fot, ovanför adressen, i samma stil som faktabilderna: "Skatten fördelad som de offentliga utgifterna 2024 (Eurostat COFOG, utan inkomstpension). Skatteregler 2026." Rita om `og.png` med samma rad och höj `?v=`.
- **Allvar:** Hög · **Säkerhet:** hög (mätt) · **Insats:** S · **Typ:** förbättring

### journalist-04. "Skatt" betyder olika saker i olika vyer, och en delningsbild tappar ordet "inkomst"
- **Plats:** `FAKTA[2].bild.rad` (rad ca 4114): "i skatt per månad på medianlönen 38 300 kr, ungefär var femte krona". Startkvittot ("DIN SKATT", bara inkomstskatt). Livsloppet (`#livslopp`): "Skatten är inkomstskatt, arbetsgivaravgift och moms".
- **Belägg:** Kortets rubrik säger "inkomstskatt", men bilden som delas säger bara "skatt". Kvittot räknar `komm + stat − jsa`. Livsloppet räknar in arbetsgivaravgift och moms.
- **Problem:** Samma ord ger 20 % på ett ställe och cirka 39 % av lönekostnaden på ett annat. En reporter som citerar "var femte krona i skatt" underskattar skattetrycket. Den som citerar livsloppets tal bredvid kvittots tal jämför två olika saker.
- **Varför det spelar roll:** "Var femte krona" är sajtens mest citerbara mening och den lättaste att angripa ("de räknar inte arbetsgivaravgiften").
- **Förslag:** Ändra `bild.rad` till "i inkomstskatt per månad på medianlönen 38 300 kr, ungefär var femte krona. Arbetsgivaren betalar dessutom 12 034 kr." Skriv "inkomstskatt" i kvittots summarad på bilden ("INKOMSTSKATT/MÅN") eller lägg arbetsgivaravgiften som en rad under. Lägg till ordet "skatt" i ordlistan och förklara att det betyder olika saker i kvittot och i livsloppet.
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

### journalist-05. "Sparas till din allmänna pension" är fel om inkomstpensionen
- **Plats:** Snabbfakta nr 4, rubriken "Drygt 17 procent av lönen sparas till din allmänna pension" (`FAKTA[3].h`).
- **Belägg:** Inkomstpensionen (16 procentenheter av 18,5) är ett fördelningssystem. Avgifterna betalar dagens pensioner och ger en pensionsrätt, men de sparas inte. Bara premiepensionen (2,5 %) placeras i fonder. Det står också på [Pensionsmyndigheten](https://www.pensionsmyndigheten.se) (primärkälla; exakt undersida inte kontrollerad).
- **Problem:** "Sparas" ger intrycket att pengarna ligger på ett konto.
- **Varför det spelar roll:** Pension är ett område där läsare och reportrar redan blandar ihop begreppen. En sajt som granskar siffror bör inte förstärka det.
- **Förslag:** "Drygt 17 procent av lönen ger rätt till allmän pension". I texten: "Inkomstpensionen (16 %) betalar dagens pensioner och ger dig en pensionsrätt; premiepensionen (2,5 %) placeras i fonder."
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

### journalist-06. Uppdateringsdatumen stämmer inte med när innehållet ändrades
- **Plats:** `SAJT_UPPDATERAD = '5 november 2026'` (rad 3214), visas under varje vyrubrik (rad 3269) och i heron (rad 1344). JSON-LD `dateModified: "2026-11-05"` (rad 41). `downloadTransparencyJSON` har `datum: '2026-10-29'`.
- **Belägg:** Jämförelser gjordes om och sjukvårdens utfall lades till 13 november (git log, CHANGELOG, rättelseloggen 13 nov), men vyn säger "Uppdaterad 5 november 2026". Policyn lovar: "Datumet under varje rubrik visar när sidan senast uppdaterades."
- **Problem:** Datumet är gemensamt för alla vyer och uppdateras inte när en enskild vy ändras.
- **Varför det spelar roll:** En reporter daterar sitt citat efter sidans datum. När policyn uttryckligen lovar något som inte stämmer, blir det ett trovärdighetsproblem.
- **Förslag:** Lägg `uppdaterad` per vy i `VYER` och visa det i `vy-datum`. Låt `dateModified` och JSON-filens `datum` följa senaste ändring. Lägg en kontroll i `scripts/kontroll.mjs` som varnar om ett datum är äldre än den senaste posten i rättelseloggen.
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

### journalist-07. Budgetrubriken: försvaret är störst bara med Ukrainastödet och krisberedskapen
- **Plats:** Budgeten, rubriken "Försvar och krisberedskap är statsbudgetens största enskilda utgiftsområde 2026" (rad 1979). `BDATA` (rad 5047).
- **Belägg:** UO6 225,0 mdkr, UO25 180,7 mdkr. Utan stödet till Ukraina (39,7) är UO6 185,3 mdkr, alltså bara 4,6 mdkr före UO25. Utan krisberedskap och strålsäkerhet blir försvaret 174,6 mdkr och hamnar efter UO25.
- **Problem:** Rubriken är korrekt men leder till rubriken "Försvaret är statens största utgift", och den håller inte. Uppdelningen står längre ned i ingressen ("varav knappt 40 miljarder är militärt stöd till Ukraina").
- **Varför det spelar roll:** Försvarssiffror är politiskt laddade och citeras ofta. Rubrikens formulering är det som sprids.
- **Förslag:** Behåll rubriken men gör första meningen i ingressen till: "Av de 225 miljarderna är knappt 40 miljarder militärt stöd till Ukraina och 10 miljarder krisberedskap. Utan Ukrainastödet är utgiftsområdet ungefär lika stort som de allmänna bidragen till kommunerna, 181 miljarder."
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** förbättring

### journalist-08. Direktlänkarna bygger på ordningsnummer och kan peka på fel siffra
- **Plats:** `#fakta-N` (rad 4167, `id="fakta-'+(i+1)`), `#jmf-<flik>-<n>` (`jmfFranHash`, rad ca 6100).
- **Belägg:** Ankaret är kortets plats i listan. CHANGELOG 13 nov: de nya sjukvårdsdiagrammen lades "efter de befintliga" just för att inte flytta numren. Det visar att risken är känd men bara hanteras manuellt.
- **Problem:** Om ett kort tas bort eller läggs in i mitten pekar en länk i en publicerad artikel tyst på en annan siffra.
- **Varför det spelar roll:** En artikellänk lever i flera år. En länk som pekar fel utan att det syns är värre än en länk som inte fungerar.
- **Förslag:** Ge varje kort ett fast namn (`#fakta-medianlonen`, `#jmf-sjukvard-atgardbar-dodlighet`). Låt de gamla numren gå till samma kort via en tabell (`FAKTA_ALIAS`). Låt "Kopiera länk" ge den namngivna länken. Lägg en kontroll i `kontroll.mjs` att namnen är unika och aldrig tas bort.
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

### journalist-09. Prislapparna går inte att länka till
- **Plats:** Prislistan (`CARDS`, rad 3383 och framåt), detaljpanelen. `#gissa-ambulans` (rad 1928).
- **Belägg:** `/tmp/j5/gissa-ambulans.png`: länken öppnar quizet med "Din gissning 10 000 kr" och knappen "Visa svaret". Prislappen (9 600 kr), källan och förbehållet syns inte. Detaljpanelen har ingen egen hash.
- **Problem:** Prislistan är sajtens mest citerbara innehåll ("ett år i grundskolan kostar 143 000 kr"), men det finns ingen länk som visar ett visst belopp med sin källa.
- **Varför det spelar roll:** En reporter vill länka till exakt den siffra som citeras. Om länken öppnar en gissningslek ser det oseriöst ut i en nyhetsartikel.
- **Förslag:** `#pris-<slug>` öppnar detaljpanelen för prislappen, med beloppet, "Du betalar", källraden och en knapp "Kopiera länk". Behåll `#gissa-…` för quizet.
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

### journalist-10. Avsändaren beskrivs med en mening
- **Plats:** "Vem står bakom" i både Så arbetar vi och Om oss (rad 3100 och 3190). Om oss ligger sist i Metod och nås via "Mer".
- **Belägg:** "Skatteplattformen drivs av Wilhelm Wennergren, utan extern finansiering." Det finns ingen bakgrund, ingen uppgift om egna uppdrag eller partitillhörighet och inget telefonnummer. Kontakten är en Gmail-adress och GitHub-ärenden, som kräver ett konto. Texten säger genomgående "vi" och har en "redaktionell policy", men det finns ingen redaktion eller ansvarig utgivare.
- **Problem:** En reporter som ska citera en "oberoende" källa frågar: vem är det, vad har personen för koppling till politik eller intressen, och hur når jag personen i dag? Sajten svarar bara på det första, med ett namn.
- **Varför det spelar roll:** Utan de svaren skriver en försiktig redaktion "en privatperson står bakom sajten". En kritisk redaktion skriver "okänd avsändare". "Vi" utan redaktion kan läsas som att sajten överdriver sin egen storlek.
- **Förslag (beslut):** Ett kort stycke: "Wilhelm Wennergren är [yrke/bakgrund]. Han är inte medlem i något parti och har inga uppdrag för organisationer som arbetar med skattefrågor." Ange: "Sajten har inget utgivningsbevis och därmed ingen ansvarig utgivare enligt yttrandefrihetsgrundlagen; ansvarig för innehållet är Wilhelm Wennergren." Ange en svarstid ("Vi svarar inom två arbetsdagar") och gärna en kontaktadress med namn eller egen domän. Slå ihop de två "Vem står bakom" till ett och länka till det från sidfoten med texten "Kontakt och ansvarig".
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** S · **Typ:** beslut

### journalist-11. Det finns inget stöd för att citera rätt version
- **Plats:** Metod och rättelseloggen.
- **Belägg:** Det finns ingen text om hur man citerar sajten och ingen länk till tidigare versioner. Rättade siffror är inte markerade där de visas. Den som citerade 7 750 kr den 28 oktober hittar i dag 7 692 kr utan någon notis vid siffran, och måste leta i loggen.
- **Problem:** En reporter kan inte enkelt visa vad sajten sa ett visst datum, och läsare av en äldre artikel ser en annan siffra än den som citerades.
- **Varför det spelar roll:** Det skyddar både sajten och den som citerar när någon ifrågasätter en siffra i efterhand.
- **Förslag:** En ruta "Så citerar du" i Metod: "Skatteplattformen, [vy/kort], hämtad [datum], wilhelm-wg.github.io/skatteplattformen/#fakta-…. Alla tidigare versioner finns i [GitHub-historiken]." Markera en rättad siffra på plats i 30 dagar med en liten etikett "Rättad 4 nov" som länkar till posten i loggen.
- **Allvar:** Medel · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

### journalist-12. Prislistans gemensamma källrad anger fel år
- **Plats:** Prislistan, källraden under sökfältet (rad 1969).
- **Belägg:** "Källor: SCB Kostnader utbildningsväsendet 2024 · … Enhetskostnader i 2024 års priser". Korten säger nu Skolverket 2025 (grundskolan, rad 3383), Kolada 2025 (hemtjänsten, ambulansen) och så vidare.
- **Problem:** Den samlade raden motsäger korten. En reporter som citerar från listvyn skriver "2024 års priser".
- **Varför det spelar roll:** Året är en av de två uppgifter som sajten lovar för varje siffra.
- **Förslag:** "Källa och år står på varje prislapp. De flesta kostnader gäller 2024–2025; avgifter och Försäkringskassans belopp gäller 2026." Ta bort uppräkningen eller generera den ur `CARDS`.
- **Allvar:** Låg · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

### journalist-13. Underlaget går inte att ladda ner som tabell
- **Plats:** Metod, "Ladda ner alla antaganden" (`downloadTransparencyJSON`, rad 3033).
- **Belägg:** Bara en JSON med modellens antaganden (version 2.3, daterad 29 oktober). Diagrammen i Jämförelser (`JMF_DATA`), budgeten (`BDATA`) och prislistan (`CARDS`) går inte att ladda ner.
- **Problem:** En datareporter vill kunna öppna siffrorna i ett kalkylark och kontrollera dem.
- **Varför det spelar roll:** Det sänker tröskeln för att använda sajten som källa, och det gör att sajtens egna rättelser kan granskas utifrån.
- **Förslag:** En knapp "Ladda ner som CSV" på varje jämförelsekort och under budgetdiagrammet och prislistan (land/post, värde, år, källa, länk). Datumet i JSON-filen ska följa senaste ändring (se journalist-06).
- **Allvar:** Låg · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

## 5. De tre viktigaste åtgärderna

1. **Rätta sjukvårdsrubriken (journalist-02).** Den kan motbevisas med sajtens egna diagram, och den är den mening som citeras mest om vården. Det tar några minuter.
2. **Lägg källa och metod i den delade kvittobilden och i `og.png` (journalist-03), och skriv "inkomstskatt" där det gäller (journalist-04).** Bilderna sprids utan sammanhang, och där blir modellen ett påstått faktum.
3. **Redovisa AI-användningen och avsändaren (journalist-01 och journalist-10).** Det är den första fråga en granskande reporter ställer. Uppgiften finns redan offentligt i git-historiken, och det är bättre att sajten säger det själv än att någon annan berättar det.

## 6. Frågor till ägaren

1. Vill du redovisa AI-stödet på sajten, och med vilken formulering (journalist-01)?
2. Vill du berätta mer om dig själv: yrke, bakgrund och eventuella partipolitiska eller organisatoriska kopplingar (journalist-10)?
3. Ska sajten ha en kontaktadress med namn eller egen domän i stället för Gmail, och vill du lova en svarstid?
4. Ska "vi" bytas mot "jag", eller ska det stå uttryckligen att "vi" betyder dig och dem som bidrar via GitHub?
5. Kan direktlänkarna få fasta namn (journalist-08)? Det kräver en tabell som översätter de gamla numren.

## 7. Metod och avgränsning

- **Verktyg:** `grep` och `sed` i `index.html`. Chrome headless styrd via CDP med ett eget skript (`/tmp/j5/cdp.mjs`) för skärmbilder, synlig text och för att rita sajtens egna delningsbilder (`ritaKvittoBild`, `faktaBild`) till PNG. `git log` för historiken. Webbsökning för riksdagsarvodet och Archer-köpet. Lokal server på port 8775, stoppad efteråt.
- **Skärmbilder:** `/tmp/j5/kvitto-post-canvas.png`, `/tmp/j5/fakta4-canvas.png`, `/tmp/j5/start-1280.png`, `/tmp/j5/metod-1280.png`, `/tmp/j5/gissa-ambulans.png`, `/tmp/j5/jmf-sjukvard-9.png`, `/tmp/j5/omoss-390.png`, samt `img/og.png`.
- **Prövat:** tre rubriker, direktlänkarna `#fakta-N`, `#jmf-sjukvard-9`, `#gissa-ambulans` och `#om-oss`, delningsbilderna (kvittot, faktakorten, länkbilden), delningstexten i `shareSkatt`, kontaktvägarna, Så arbetar vi, Om oss och rättelseloggen.
- **Inte testat:** delning på riktiga telefoner (Web Share API), hur länkbilden visas i sociala medier (förhandsvisning på Facebook och LinkedIn) och om mejladressen besvaras. Medellivslängden och hälsoutgifterna kunde inte kontrolleras mot Världsbanken, eftersom API:et blockerade anropen (WAF-fel 502). Enskilda sifferkontroller utöver de två i avsnitt 3 lämnas till roll 2.
