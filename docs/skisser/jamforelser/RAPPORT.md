# Jämförelser – designgenomgång och förslag

6 november 2026. Underlag: skärmbilder av livesajten (`nu/`), koden i `index.html` (`#oecd`, `JMF_DATA`, `jmfKort`, `initOecd`, `#sjukvard`) och CLAUDE.md. Inget i repot är ändrat.

Skisser (fristående HTML med riktiga siffror ur `JMF_DATA`, plus PNG för dator 1280 px och mobil 390 px):

| Skiss | Visar förslag | Filer |
|---|---|---|
| 1. Ingången | 1, 2, 3, 4, 9 | `skiss1-oversikt.html`, `-dator.png`, `-mobil.png` |
| 2. Diagramkortet | 5, 6, 7, 8 | `skiss2-diagramkort.html`, `-dator.png`, `-mobil.png` |
| 3. Sjukvården | 4, 10 | `skiss3-sjukvard.html`, `-dator.png`, `-mobil.png` |

Källkoden till skisserna finns i `src/`. `python3 src/bygg.py` bygger dem, och `src/rendera.sh <namn> <höjd dator> <höjd mobil>` renderar dem. Mobilbilden ritas i en iframe som är 390 px bred, eftersom headless-Chrome annars lägger ut sidan cirka 500 px bred.

---

## Vad som fungerar

- **Datat och reglerna är sajtens styrka.** Varje mått har en källa och ett år, minst 5 av 7 länder, en riktning (`bast`) och en not om tolkningen. Det ska vara kvar som det är.
- **Diagramregeln följs.** Sverige är grönt, övriga Norden mörkare grått, Tyskland och USA ljusare grått och snittet en streckad linje. Det är lugnt och lätt att läsa.
- **Översikten är en bra idé.** En rad per mått med Sveriges placering och en länk till diagrammet ger snabb överblick.
- **Vyhuvudet (`vh-jamforelser`) är vyns bästa bild.** Sju hus längs en kaj, med det faluröda huset en bit framför de andra, är en färdig metafor för sju länder.
- **Sjukvården har en scen (`il-vard`) och nyckeltal.** Den sidan har redan mer liv än jämförelsen ovanför.

## Vad som gör det tråkigt

1. **Ingen färg och ingen bild efter vyhuvudet.** Under kajbilden kommer en beige yta med 28 likadana tabellrader, och sedan ett grått stapeldiagram åt gången. Kategorifärgerna och pictogrammen (`pk-vard`, `pk-utb`, `pk-soc`, `pk-ratt`, `pk-miljo`) och scenerna (`il-vard`, `il-utb`, `il-soc`, `il-ratt`, `il-miljo`) finns men används inte här, fast varje flik motsvarar en kategori.
2. **Rubriken beskriver men väcker ingen nyfikenhet.** "Sverige jämfört med andra länder" följs av en ingress på fem rader om metoden: sju länder, streckad linje, OECD eller EU, en källa. Läsaren får reglerna innan hen fått en anledning att bry sig.
3. **Ingen sammanfattning.** 28 mått, men ingenstans står det vad de säger tillsammans.
4. **Placeringsprickarna tappar storleken på skillnaden.** "4:e högst av 7" i hälsoutgifter ser likadant ut oavsett om Sverige ligger 1 % eller 50 % från grannen. Raderna blandar dessutom två skalor, "Bäst–Sämst" och "Högst–Lägst", på samma position, och man måste läsa liten text för att veta vilken som gäller.
5. **Staplar från noll gör många diagram platta.** Medellivslängden (78,9–84,1 år), PISA (441–504), CPI och rättsstatsindex ser ut som sju nästan lika långa staplar. Skillnaderna, som är själva poängen, syns knappt. Det bidrar mycket till intrycket att det är "färglöst och tråkigt".
6. **Ett diagram åt gången, och navigeringen tar plats.** Flikar, sedan ‹ 1 av 8 ›, sedan åtta knappar med måttens namn, och först därefter diagrammet. På mobil döljs listan, så där kan man bara bläddra.
7. **Diagramkortet är jämntjockt.** Rubriken är 14 px Inter 500, sedan staplar, en förklaring, "Sverige: 4:e högst av 7" i liten text, en not och en källrad i mono. Inget är stort, så kortet saknar en självklar startpunkt.
8. **Fast landsordning.** Den gör det lätt att jämföra mellan diagram men svårt att se rangordningen i ett enskilt diagram.
9. **Sjukvården lovar tre sidor men har två flikar.** Ingressen nämner kapacitet, utfall och *tillgänglighet*, men "Tillgänglighet" är bara en länkruta. Landssiffror står uppräknade i löptext ("Norge 3,4 · Finland 2,6 · …") direkt ovanför ett diagram som visar samma sak. Scenen ligger som en liten lös bild mellan rubrik och ingress, och nyckeltalen har inline-stilar och visar Sverige utan grannländerna.
10. **Ingen koppling till resten av sajten.** Prislistan länkar redan till jämförelsediagram (`DETAILS[*].jmf`), men jämförelsen länkar inte tillbaka till en enda prislapp, och det finns ingen direktlänk till ett enskilt diagram.

## Flaggor och landsymboler

CLAUDE.md förbjuder inte flaggor uttryckligen, men de krockar med tre regler. Grönt är reserverat för det texten handlar om, medan Norges, Danmarks och USA:s flaggor är röda och blå och skulle bli starkare än det gröna Sverige. Kategorifärgerna får inte konkurrera. Och bildspråket är papperssnitt utan ikoner i cirklar, som de flesta flaggikoner är. **Rekommendation: inga flaggor.** Vill man ha landsymboler är husen ur `vh-jamforelser` ett eget alternativ, ett litet hus per land som i vyhuvudet. Det är en möjlig senare insats och finns inte i skisserna. Landsnamn i klartext räcker.

---

## Förslag, sorterade efter effekt per arbetsinsats

### 1. Frågerubrik och kortare ingress *(skiss 1)*
**Vad:** "Hur står sig Sverige mot grannländerna?" i stället för "Sverige jämfört med andra länder". Ingressen kortas till två meningar: 28 mått, sju länder, Sverige grönt och snittet streckat. Metodtexten ("en källa och ett år…") flyttas till "Om måtten" under översikten.
**Varför:** En fråga bjuder in. Reglerna behövs, men inte först.
**Hur:** Ändra `.s-title` och `.s-sub` i `#oecd` (rad cirka 1977–1979).
**Risk:** Ingen. Frågan är neutral och har inget svar inbyggt.

### 2. En sammanfattningsrad överst *(skiss 1)*
**Vad:** "I 16 av 28 mått finns en riktning. Där ligger Sverige på den bättre sidan av snittet i 11, ungefär som snittet i 2 (PISA, inom 2 %) och på den sämre sidan i 3: höga boendekostnader, dödligt våld och materialåtervinning." Under siffrorna står en rad små rutor och "Ingen sammanvägning: måtten är olika viktiga."
**Varför:** Ger vyn en ingång och en anledning att läsa vidare. Den nämner uttryckligen de mått där Sverige ligger sämre, så den blir inte en reklamruta.
**Hur:** Räkna fram ur `JMF_DATA` i `initOecd` på samma sätt som översikten gör: `bast`, `ref.v` och en tolerans på 2 %. Siffrorna uppdateras automatiskt när data ändras.
**Risk:** Låg till medel för neutraliteten. Använd bara `bast`, aldrig egna omdömen. Behåll toleransen, annars räknas PISA matematik (464 mot 463) som "bättre". Rutorna är i bläckgrått, inte rött och grönt, eftersom grönt betyder Sverige. Lägg gärna en kontroll i `scripts/kontroll.mjs` så att texten inte kan gå ur synk.

### 3. Ämneskort med scener och pictogram i stället för textflikar *(skiss 1)*
**Vad:** Fem kort, ett per ämne. Varje kort har en beskuren `il-…`-scen, ett pictogram i kategorifärg, antalet mått och en rad: "Störst skillnad mot snittet: Sjukhussängar, 1,9 (OECD-snitt 4,4)". På mobil blir korten en svepbar rad (`m-swipe` finns redan). Flikarna i diagramläget får samma pictogram (skiss 2).
**Varför:** Det här är det som ger färg. Scenerna och kategorifärgerna finns redan och används så här i resten av sajten. Raden om största skillnaden väljs automatiskt, oavsett om skillnaden är till Sveriges fördel eller nackdel, så den blir neutral.
**Hur:** En liten tabell `JMF_AMNE = {sjukvard:{pk:'vard', il:'il-vard'}, …}`. Korten är `<button>` som anropar `showOecd`. Scenen visas med `<svg viewBox="0 30 360 225" preserveAspectRatio="xMidYMid slice"><use href="#il-vard"/></svg>`.
**Risk:** Låg. Klimat och energi saknar en `--k-`-variabel: kvittot använder `#2E8B57`, som är grönt och krockar med diagramregeln. Skissen använder `--k-ovrigt`. Bestäm en färg, eller låt pictogrammet vara i `--ink2`. "Samhälle" passar inte helt till `pk-ratt`, men det är den närmaste symbolen.

### 4. Värdeskala i stället för placeringsprickar i översikten *(skiss 1, mini i skiss 3)*
**Vad:** Varje rad får en tunn skala där de sju länderna står som prickar efter sitt faktiska värde. Sverige är en större grön prick med namnet ovanför, snittet en streckad linje. För mått med riktning ligger "bättre" alltid till höger. För övriga mått ligger "högre" till höger, och ändarna är märkta "sämre/bättre" eller "lägre/högre". Sveriges värde och snittet står i en kolumn till höger.
**Varför:** Man ser på en gång om Sverige ligger nära grannarna eller långt ifrån, och på vilken sida av snittet. Raderna blir olika varandra, och det är just den variationen som gör en översikt intressant. Samma rad "grön prick till höger om strecket" kan läsas för alla 28 mått.
**Hur:** Byt `.ov-skala` i `initOecd`: skala min–max över `v` och `ref.v` med 6 % marginal, spegla när `bast === 'lagre'`. Drygt 20 rader JS och 15 rader CSS. Placeringen ("plats 1 av 7") kan stå kvar som text i `aria-label`.
**Risk:** Låg. Att spegla axeln kräver tydliga ändetiketter, vilket skissen har. Skalorna är olika per rad och ska inte jämföras med varandra. Säg det i en mening.

### 5. Punktdiagram när nollan inte betyder något *(skiss 2)*
**Vad:** Lägg till `form:'punkt'` i `JMF_DATA` för medellivslängd, PISA ×2, PIAAC, CPI, rättsstatsindex och förtroende. De ritas då som prickar på en axel som inte börjar på noll, med tal på axeln och raden "Axeln börjar på 78 år" i källraden. Utgifter, andelar och antal behåller staplar från noll.
**Varför:** Löser problemet med platta diagram (punkt 5 ovan). Diagramreglerna gäller fortfarande: Sverige grönt, övriga grått, snittet streckat.
**Hur:** En gren i `jmfKort`: om `ch.form === 'punkt'` ritas `<i class="d-pt">` i stället för `.oecd-bar-fill`, och axeln får tal. Cirka 30 rader.
**Risk:** Låg till medel. En axel som inte börjar på noll kan överdriva skillnader. Säg det därför alltid i källraden, och använd det bara för index och poäng, aldrig för belopp.

### 6. Sveriges siffra och en mening först i diagramkortet *(skiss 2)*
**Vad:** Kortet delas i två kolumner. Till vänster står en frågerubrik ("Hur länge lever man?"), måttets namn i liten text, Sveriges värde stort i serif och grönt, och en mening: "3,7 år mer än genomsnittet i OECD-länderna. Högst av de sju länderna." Under den står en riktningsetikett. Till höger står diagrammet. Noten flyttas till "Om måttet".
**Varför:** Ger kortet en startpunkt och följer typskalan (`--fs-under` och stora siffror som i `kpi-tal`). Meningen räknas fram, så den blir aldrig värderande: "mer/mindre än snittet" och "högst/lägst/3:e högst av N".
**Hur:** Ett nytt valfritt fält `fraga` i `JMF_DATA` (fallback till `t`). Meningen byggs av `ref`, `bast` och placeringen som `jmfKort` redan räknar fram. På mobil läggs kolumnerna under varandra.
**Risk:** Låg. Frågorna måste skrivas en gång för 28 mått och hållas neutrala ("Hur mycket …?", "Hur många …?"). `jmfKort` används också i Prislistans detaljpanel och i `data-jmf`. Lägg därför den stora layouten bakom en flagga, `jmfKort(ch, {stor:true})`, så att detaljpanelen behåller den kompakta formen.

### 7. Sortera efter värde, med "Fast ordning" som alternativ *(skiss 2)*
**Vad:** En liten växlingsknapp ovanför diagrammet: *Efter värde* (förval) eller *Fast ordning*. Länder utan uppgift hamnar sist.
**Varför:** Rangordningen syns utan att man behöver läsa talen. Den fasta ordningen finns kvar för den som vill jämföra mellan diagram.
**Hur:** Sortera `JMF_LAND.map((l,i)=>…)` i `jmfKort`, och lägg till en knapp med `aria-pressed` via `vaxlingsknappar()`. Spara valet i `localStorage` som en bekvämlighet.
**Risk:** Låg. CLAUDE.md säger "fast ordning", så uppdatera den raden. Översiktens skala påverkas inte.

### 8. Välj ett land att jämföra med *(skiss 2)*
**Vad:** Knappar under diagrammet, "Jämför med: Norge Danmark Finland Island Tyskland USA". Det valda landet får en ihålig mörk ring eller kontur och fet etikett, och en mening räknas fram: "Norge: 83,2 år, 0,9 år kortare än i Sverige." Valet gäller alla diagram tills man byter.
**Varför:** Gör det möjligt att jämföra själv, vilket är det mest inbjudande. Många läsare har en egen fråga, till exempel "hur är det jämfört med Norge?".
**Hur:** Ett globalt `jmfVal` (index 1–6). `jmfKort` lägger till klassen `val` på raden. Ringen är `--ink2`, inte en ny färg, så diagramregeln håller. Valet kan också ligga i URL:en, till exempel `#oecd?land=norge`.
**Risk:** Medel. Kräver tester av fokus och skärmläsare. Meningen ska bara beskriva skillnaden, aldrig vilket land som är bättre.

### 9. Prislistan och direktlänkar *(skiss 2 och 3)*
**Vad:** Lägg en prislapp i diagramkortet när det finns en som hör ihop: "Ett år i grundskolan 143 000 kr" vid utgifter per elev, IVA-dygn och läkarbesök vid vårdmåtten, polisen vid dödligt våld, statlig väg vid trafikdöda, sophantering vid återvinning, hemtjänst vid äldreomsorgen och försvar per invånare vid försvarsutgifter. Ge dessutom varje diagram en direktlänk, `#jmf-sjukvard-3`.
**Varför:** Knyter jämförelsen till det sajten handlar om, vad skatten betalar. Kopplingen finns redan åt andra hållet (`DETAILS[*].jmf`).
**Hur:** Ett fält `pris:'Ett år i grundskolan'` i `JMF_DATA`. Hämta beloppet ur `CARDS` efter titel, som hundralappen gör, och öppna detaljpanelen vid klick. Lägg `^jmf-` i `VY_PREFIX`.
**Risk:** Låg. Prislappen är svenska kronor och måttet köpkraftsjusterade dollar. Skriv "I Sverige kostar …" och räkna inte om mellan dem.

### 10. Sjukvården: scenen bredvid texten, jämförelseskalor i nyckeltalen och tre flikar *(skiss 3)*
**Vad:** Lägg rubrik och ingress till vänster och scenen till höger, som i vyhuvudena. Nyckeltalen blir hälsoutgifter som andel av BNP, medellivslängd, undvikbar dödlighet och sjukhussängar, var och en med en mini-värdeskala från förslag 4 i stället för länder uppräknade i text. Vårdgarantin flyttas till en riktig flik "Tillgänglighet", så att ingressens tre sidor motsvaras av tre flikar. Prislapparna (IVA-dygn, läkarbesök) blir knappar under panelen. Inline-stilarna ersätts av `.kpi`/`.kpi-tal`.
**Varför:** Gör delavsnittet konsekvent med översikten, tar bort upprepningen mellan text och diagram och håller ingressens löfte.
**Hur:** HTML i `#sjukvard` (rad cirka 1999–2110). Mini-skalan blir en liten funktion `jmfMini(ch)` som delas med översikten. Tillgänglighetsfliken kan börja med vårdgarantin, 91 % (Socialstyrelsen, augusti 2026), och väntetidsdata som redan finns på sajten.
**Risk:** Låg. Ta inte bort texten om att "fler sängar betyder inte bättre vård i sig". Den finns i måttets not och kan stå i panelens ingress.

### Mindre saker
- Typografi: `.oecd-card-title` är 14 px Inter. Använd serif och `--fs-under` för kortets rubrik, och etikettstilen för "Högre är bättre".
- Tomrum: sektionen har 72 px luft upptill men ingen bild. Om förslag 3 inte görs räcker det långt att lägga en beskuren `vh-jamforelser` till höger om rubriken.
- Mobil: knappen "Nästa diagram" (‹ ›) har inget namn på nästa mått. Visa "Nästa: Spädbarnsdödlighet ›".
- Översikten blandar "Bäst/Sämst" och "Högst/Lägst" på samma position. Värdeskalan i förslag 4 löser det.

## Ordning att göra det i

1–2 (en timme), 4 (en halv dag), 3 (en halv dag), 5–6 (en dag), 10 (en halv dag), 7–9 (en dag var). Efter varje steg: kör axe på vyn, kontrollera 320 och 390 px utan sidledsrullning och kör `node scripts/kontroll.mjs`.
