# 01 Första intryck: UX-forskare, förstagångsbesök

Granskare: roll 1 `forsta-intryck`. Datum: 2026-11-14. Underlag: lokal kopia av `index.html` (7 128 rader), serverad på port 8771.

## 1. Sammanfattning

På dator förstår en ny besökare sajten på fem sekunder: rubriken, ett lönefält med ett förifyllt värde och ett kvitto som ändras medan man skriver visar syftet utan förklaring. På mobil syns kvittot inte ovanför vecket. Det börjar 1 085 px ner, efter en metodtext på nio rader, så man ser inte att något händer när man skriver, och den som får en delad länk möter samma allmänna startsida. Ett tekniskt fel i in-tonandet av sektioner gör att Din ekonomi (dator och mobil), Jämförelser och Metod (mobil) visar en tom yta under vyhuvudet tills man scrollar. Av de tre uppgiftsflödena fungerar (a) och (c) men tar onödiga omvägar, och (b) "äldreboende" går inte att lösa med sökningen i Prislistan.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Begriplighet | 4 | Rubriken, kvittot och vardagsjämförelserna ("ca 37 minuter på intensiven") förklarar syftet direkt, men kvittot och hundralappen på samma sida delar in utgifterna på olika sätt. |
| Vägledning | 3 | Startsidans knappar leder rätt, men nästa vy börjar med en siffra som inte är användarens egen, och sökningen i Prislistan kan sluta i en återvändsgränd. |
| Navigering | 4 | Menyn, brödsmulan, innehållschipsen i varje vyhuvud, "Nästa:"-länken och alla direktlänkar fungerar, men sjukvården hittar man bara via etiketten "Jämförelser". |
| Engagemang | 4 | Kvittot, "Gissa först" och delningsbilderna lockar till att fortsätta, men filmen ligger sist på en startsida som är 9 600 px lång på mobil. |
| Mobilupplevelse | 2 | Resultatet (kvittot) ligger under vecket på startsidan, och tre vyer visar en tom yta under huvudet tills man scrollar. |

## 3. Det som fungerar (bevara)

- **Dator, startsidan ovanför vecket:** rubrik, ett enda fält med förifylld medianlön, tre tydliga lägen (Lön, Pension, Egen firma) och kvittot bredvid som uppdateras direkt. Det är ett ovanligt rent förstaintryck för en offentlig ekonomisajt.
- **Kvittometaforen med vardagsenheter** ("ca 1½ skoldagar för en elev", "ca 5 meter statlig väg"). Man förstår beloppen utan att kunna något om budgetar.
- **Orienteringen i varje vy:** brödsmula "Start › Vy", innehållschips under ingressen och "Nästa: …" i slutet. Man hittar alltid tillbaka.
- **Lägen och val följer med:** en delad länk (`?lon=25000&typ=pension&ks=0.3388`) återskapar Pension, 25 000 kr och Sundsvall. Klickar man vidare till Din ekonomi följer ålder (70), inkomst och kommun med.
- **Direktlänkar** (`#gissa-ambulans`, `#jmf-sjukvard-9`, `#kapitel-4`) öppnar rätt vy och scrollar till rätt ställe, också på mobil.

## 4. Fynd

### forsta-intryck-01: Första sektionen i flera vyer är osynlig tills man scrollar

- **Plats:** in-toningen "PERFORMANCE — IntersectionObserver for lazy section animation", `index.html` rad 6793–6809 (`threshold:0.05`, `rootMargin:'0px 0px -60px 0px'`, `opacity:0` på alla `section:not(.hero)`).
- **Belägg:** mätt med CDP vid inladdning. Din ekonomi på mobil (390×844): `kalkylator top=743 h=5405 op=0`, och efter 120 px scroll fortfarande `op=0`. Dator (1280×800): `kalkylator top=614 op=0`. Jämförelser på mobil: `oecd top=634 op=0`. Metod på mobil: `metod top=678 op=0`. Skärmbilderna `/tmp/fi/v-d-kalkylator.png`, `/tmp/fi/c-m-ek-scrolled.png` och `/tmp/fi/v-m-oecd.png` visar en tom beige yta under vyhuvudet.
- **Problem:** 5 % av en sektion på 5 400 px är 270 px. Så mycket av sektionen måste synas innan den tonas in, och på mobil krävs ungefär 230 px scroll innan kalkylatorn alls syns. Vyn ser trasig eller tom ut.
- **Varför det spelar roll:** Din ekonomi är målet för startsidans huvudknapp. Den som klickar "Hela kvittot och vad du får tillbaka →" landar på en vy där inget att räkna med syns, på både dator och mobil.
- **Förslag:** låt sektioner som redan ligger i fönstret vara synliga direkt, och använd ett tröskelvärde som inte beror på höjden:
  ```js
  const observer = new IntersectionObserver(…, {rootMargin:'0px 0px -60px 0px', threshold:0});
  document.querySelectorAll('section:not(.hero)').forEach(sec => {
    if(sec.getBoundingClientRect().top < innerHeight) return; // redan i fönstret: tona inte
    …
  });
  ```
  Kör det också när en vy byts (i `visa()`), eftersom dolda vyer har höjden 0 när sidan laddas. Det enklaste alternativet är att ta bort in-toningen för den första sektionen i varje vy.
- **Allvar:** hög. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### forsta-intryck-02: På mobil syns inte kvittot när man skriver, och en delad länk visar inte kvittot

- **Plats:** `#start`, hero (`section.hero`, rad cirka 1340–1366). Metodtexten `p.start-metod` (rad 1359) står mellan knapparna och kvittot.
- **Belägg:** mobil 390×844, `kvittoTop=1085` (CDP). Ovanför vecket syns bara rubrik, fält och knappar (`/tmp/fi/m-start.png`). Med den delade länken `?lon=25000&typ=pension&ks=0.3388#start` ser mottagaren samma allmänna hero, med 25 000 och Sundsvall ifyllda men inget kvitto (`/tmp/fi/c-m-delad.png`). Metodtexten är nio rader liten text (`/tmp/fi/m-start-c1.png`).
- **Problem:** när man skriver sin lön på mobil ändras ingenting man kan se, och det man har kommit för ligger en och en halv skärmhöjd ner. Den som öppnar ett delat kvitto får ingen signal om att kvittot finns längre ner.
- **Varför det spelar roll:** mobil är den vanligaste vägen in från en delad länk eller sociala medier. Femsekunderstestet på mobil ger "en räknare", inte "ett kvitto över vad skatten betalar".
- **Förslag:**
  1. På mobil (≤ 640 px): placera kvittot direkt efter kommunvalet och före knapparna, och flytta metodtexten under kvittot som en hopfälld `<details><summary>Så räknar kvittot</summary>…</details>`.
  2. Om sidan öppnas med `lon` eller `typ` i adressen: scrolla till kvittot, eller visa en rad under fältet: "Kvittot för pension 25 000 kr i Sundsvall ↓".
  3. Billigaste varianten om layouten ska vara kvar: en sammanfattning under fältet som uppdateras live, "Skatt 7 692 kr/mån · se kvittot ↓".
- **Allvar:** hög. **Säkerhet:** hög (mätt) för placeringen, medel för effekten. **Insats:** M. **Typ:** förbättring.

### forsta-intryck-03: Din ekonomi börjar med ett exempel som inte stämmer med användarens egen siffra

- **Plats:** `VYER`, posten `din-ekonomi`, `led:{tal:'4 466 kr', text:'i skatt per månad på en lön på 25 000 kronor, som exempel…'}` (rad 3217). Vyhuvudet byggs i `initVyer`.
- **Belägg:** startsidan med pension 25 000 kr i Sundsvall visar "SKATT/MÅN 4 616,00". Efter klick på "Hela kvittot och vad du får tillbaka →" är den första stora siffran i Din ekonomi "4 466 kr i skatt per månad på en lön på 25 000 kronor" (`/tmp/fi/c-m-ekonomi.png`). Kalkylatorn har ändå fått 70 år, 25 000 och Sundsvall.
- **Problem:** användaren valde pension och får en stor siffra om lön som skiljer sig från hennes kvitto. Eftersom kalkylatorn samtidigt är osynlig (fynd 01) är det den enda siffran som syns.
- **Varför det spelar roll:** det rubbar förtroendet just när användaren går från kvittot till fördjupningen ("räknar de fel?").
- **Förslag:** visa användarens egen siffra när man kommer från startsidan: "**4 616 kr** i skatt per månad på din pension på 25 000 kronor i Sundsvall." Utan eget värde kan exemplet stå kvar men tonas ner: "Exempel: 4 466 kr i skatt per månad på 25 000 kr i lön."
- **Allvar:** medel. **Säkerhet:** hög. **Insats:** S–M. **Typ:** förbättring.

### forsta-intryck-04: Uppgift (b): "äldreboende" ger noll träffar i Prislistan

- **Plats:** `#pristabell`, sökfältet `#pgrid-search` och filtret i `applyPgridFilters` (rad 3845–3852 söker bara i `title`, `cl`, `unit` och `src`). Kortet `Demens — vård sista levnadsåren`, `unit:'per plats i särskilt boende och år'` (rad 3418).
- **Belägg:** sökningen kördes mot `CARDS` (34 kort) i Node och i webbläsaren: `äldreboende`, `sjukhus` och `vårdplats` ger INGA träffar. `boende` ger "LSS" och "Demens", och `äldre` ger "Hemtjänst", "Diabetes — läkemedel" och "Demens". På sidan: "Inga prislappar matchade "äldreboende" i den valda kategorin."
- **Problem:** priset på en plats på äldreboende finns, men bara under rubriken Demens i kategorin Kroniska sjukdomar. En förstagångsbesökare letar under "äldreboende" eller "Social", inte "Demens", och sökningen slutar i en återvändsgränd.
- **Varför det spelar roll:** äldreomsorg är en av de vanligaste frågorna om vad skatten räcker till, och startsidan pekar själv på "Äldre: omsorg och garantipension".
- **Förslag:** lägg till ett fält med sökord per kort och sök också i det, till exempel `sok:'äldreboende särskilt boende vårdboende äldreomsorg'` på Demenskortet och `sok:'sjukhus vårdplats'` på IVA-kortet:
  `(c.sok && c.sok.includes(q))` i filtret. Om sakgranskningen godkänner det kan rubriken också bli "Plats på äldreboende (särskilt boende), ett år", med demens i underraden.
- **Allvar:** hög (en kärnuppgift misslyckas). **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### forsta-intryck-05: Meddelandet vid tom sökning är missvisande och visar ingen väg vidare

- **Plats:** `applyPgridFilters`, rad 3867–3872.
- **Belägg:** med kategorin "Alla" vald står det ändå "… i den valda kategorin".
- **Problem:** användaren tror att ett filter begränsar sökningen, och meddelandet föreslår inget annat än "Rensa sök".
- **Varför det spelar roll:** Nielsens heuristik 9 (hjälpa användaren att förstå och komma vidare från fel).
- **Förslag:** "Ingen prislapp heter "äldreboende". Pröva ett annat ord, till exempel *skola*, *omsorg* eller *vård*, eller visa alla 34." Säg "i kategorin Hälsa" bara när en kategori är vald.
- **Allvar:** låg. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### forsta-intryck-06: Uppgift (c): sjukvården går bara att hitta via etiketten "Jämförelser" och ligger på två ställen

- **Plats:** menyn (rad 1314–1329), kortet Jämförelser i "Sex vägar in", `#oecd` (fliken "Sjukvård 16") och `#sjukvard` (sektionen "Sjukvården").
- **Belägg:** ordet sjukvård finns inte i menyn. Vägen är Meny → Jämförelser → chipet "Sjukvården" i vyhuvudet (tre tryck). Den som i stället scrollar möter först översikten med fliken "Sjukvård 16", och den egna sjukvårdssektionen med kapacitet, utfall och tillgänglighet börjar först cirka 4 500 px ner på dator (`/tmp/fi/f-d-oecd.png`), längre ner på mobil (sidan är 10 707 px). Kortet i Sex vägar in säger "Hur står sig Sverige mot Norden, Tyskland, USA och OECD-snittet?" och nämner inte vården.
- **Problem:** "Jämförelser" beskriver metoden, inte innehållet. Det är inte heller självklart vad som skiljer fliken Sjukvård i översikten från sektionen Sjukvården längre ner.
- **Varför det spelar roll:** "Hur står sig svensk sjukvård?" är en av de vanligaste frågorna, och svaret hör till sajtens starkaste innehåll.
- **Förslag:** (1) Kortet i Sex vägar in: "Hur står sig Sverige, och vården, mot Norden, Tyskland och USA?" (2) Lägg "Sjukvården" under Mer eller som underrad till Jämförelser i mobilmenyn (länk `#sjukvard`). (3) Låt fliken "Sjukvård 16" få en rad överst: "Kapacitet, utfall och tillgänglighet i detalj: se Sjukvården ↓".
- **Allvar:** medel. **Säkerhet:** medel. **Insats:** S. **Typ:** förbättring.

### forsta-intryck-07: Kvittot och hundralappen på samma sida delar in utgifterna på olika sätt

- **Plats:** `#start`. Kvittots rader (`START_GRUPPER`) mot hundralappens grupper (`HL100`, `#hundralapp`).
- **Belägg:** kvittot har åtta rader: "Sjukdom, barn och arbetslöshet", "Hälso- och sjukvård", "Utbildning", "Äldre: omsorg och garantipension", "Polis, kultur, miljö, räntor", "Vägar, järnväg, näringsliv", "Förvaltning" och "Försvar". Hundralappen strax nedanför har sju grupper: "Socialt skydd", "Hälso- och sjukvård", "Utbildning", "Näringsliv och infrastruktur", "Förvaltning", "Försvar" och "Övrigt" (`/tmp/fi/d-start-full.png`).
- **Problem:** samma sak heter olika ("Vägar, järnväg, näringsliv" och "Näringsliv och infrastruktur"), och äldreomsorgen är en egen rad i kvittot men ingår i Socialt skydd i hundralappen. Skillnaden i inkomstpension är förklarad, men inte skillnaden i indelning.
- **Varför det spelar roll:** en ny besökare jämför de två bilderna och får inte ihop dem ("var är äldreomsorgen i hundralappen?").
- **Förslag:** använd samma namn där grupperna är desamma. Där de skiljer sig, skriv en rad under hundralappen: "Här ingår äldreomsorgen i Socialt skydd; i kvittot står den för sig." Om indelningen ska bli helt gemensam är det ett beslut.
- **Allvar:** medel. **Säkerhet:** låg (bedömning, inte testat på användare). **Insats:** S för namnen, M för gemensam indelning. **Typ:** beslut.

### forsta-intryck-08: Metodtexten på startsidan blandar ålder och födelseår och är för tät för ett förstaintryck

- **Plats:** `p.start-metod`, rad 1359.
- **Belägg:** "Lön räknas för den som är under 66 år, pension för den som är född 1959 eller tidigare, och egen firma som överskott i enskild firma efter egenavgifter." Hela texten är 85 ord.
- **Problem:** åldersgränsen anges på två sätt, så läsaren måste räkna ut vad som gäller den som är född 1960. Texten är metod men står i hero, där den skjuter ner kvittot (fynd 02).
- **Varför det spelar roll:** den som är kring 65 år, alltså målgruppen för läget Pension, blir osäker på om hennes kvitto stämmer.
- **Förslag:** skriv gränsen på ett sätt (födelseår, som i resten av sajten), och låt faktagranskaren bekräfta att alla födelseår täcks. Gör texten hopfällbar: "Så räknar kvittot ▸".
- **Allvar:** medel. **Säkerhet:** medel. **Insats:** S. **Typ:** förbättring.

### forsta-intryck-09: "Uppdaterad 5 november 2026" står på alla vyer, trots senare ändringar

- **Plats:** `const SAJT_UPPDATERAD = '5 november 2026'` (rad 3214), som skrivs ut i hero och i varje vyhuvud.
- **Belägg:** enligt CHANGELOG (Unreleased) gjordes Jämförelser om 2026-11-13, och vårdutfallen lades till samma dag. Vyhuvudet för Jämförelser säger ändå "Uppdaterad 5 november 2026" (`/tmp/fi/v-d-oecd.png`).
- **Problem:** datumet underskattar hur aktuell sajten är, och det stämmer inte med rättelseloggen.
- **Varför det spelar roll:** datumet är ett av de första förtroendetecknen ("Källa och år på allt").
- **Förslag:** ett datum per vy (`VYER[i].uppdaterad`), eller uppdatera konstanten vid varje publicering och lägg in en kontroll i `scripts/kontroll.mjs` mot CHANGELOG:s senaste datum.
- **Allvar:** låg. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### forsta-intryck-10: Filmen ligger sist på en startsida som är 9 600 px lång på mobil

- **Plats:** `#start`, delarna `hero` (2 232 px), `tldr`, `hundralapp`, `snabbfakta` och `vem-gor-vad` (3 129 px) på mobil. Sidan är 9 639 px hög (CDP).
- **Belägg:** filmen "Så går samhället runt" (1:26, nio kapitel) börjar efter cirka 6 500 px på mobil. Inget ovanför vecket säger att den finns.
- **Problem:** sajtens mest berättande inslag nås bara av den som scrollar sju skärmhöjder.
- **Varför det spelar roll:** filmen förklarar flödet stat, region och kommun bättre än något annat på sajten, och den som inte orkar räkna kan börja där.
- **Förslag:** en sekundär länk under kvittot eller knapparna: "▶ Se hur pengarna går runt (1½ min)", som pekar på `#kapitel-1`. Ändra inte filmens plats.
- **Allvar:** låg. **Säkerhet:** låg (bedömning). **Insats:** S. **Typ:** förbättring.

## 5. De tre viktigaste åtgärderna

1. **Rätta in-toningen (fynd 01).** Den gör att huvudknappens mål ser tomt ut på både dator och mobil, och rättelsen tar under en timme.
2. **Visa kvittot ovanför eller precis vid vecket på mobil, och möt mottagaren av en delad länk med kvittot (fynd 02, med 08).** Det avgör om mobilbesökaren förstår sajten på fem sekunder.
3. **Låt sökningen i Prislistan hitta vardagsord som "äldreboende" (fynd 04, med 05).** En av tre kärnuppgifter misslyckas i dag, och sökord löser det utan nya siffror.

## 6. Frågor till ägaren

- Får kvittot flytta upp före knapparna på mobil, och får metodtexten fällas ihop (fynd 02, 08)?
- Ska kvittot och hundralappen ha samma indelning och samma namn, eller ska skillnaden förklaras (fynd 07)?
- Får sjukvården en egen ingång i menyn eller i Sex vägar in (fynd 06)? Rubriken "Sex vägar in" behöver inte ändras om kortet för Jämförelser får nämna vården.
- Ska Demenskortet byta rubrik till äldreboende, eller räcker sökord (fynd 04)?

## 7. Metod och avgränsning

- **Femsekunders- och tiosekunderstest** ovanför vecket på alla sju vyer, mobil (390×844 via CDP `Emulation.setDeviceMetricsOverride` med `mobile:true`) och dator (1280×800). Cirka 25 skärmbilder i `/tmp/fi/` (tillfälliga, ligger inte i repot).
- **Uppgiftsflöden:** (a) från den delade länken `?lon=25000&typ=pension&ks=0.3388#start` till kvittot och vidare till Din ekonomi, (b) "äldreboende" via menyn, kategorierna och sökningen i Prislistan (sökningen också kontrollerad mot `CARDS` i Node `vm`), (c) sjukvård via menyn, Sex vägar in och Jämförelser.
- **Mätningar med CDP:** sidhöjd och sektionshöjder per vy, kvittots läge, opacitet för sektionerna efter inladdning och scroll, och att state förs vidare från start till kalkylatorn.
- **Heuristisk utvärdering enligt Nielsen:** synlighet för systemstatus (01, 02), överensstämmelse med verkligheten (04, 06, 07), konsekvens (03, 07), felhantering (05), estetik och minimalism (08, 10).
- **Inte gjort:** test med riktiga användare (bedömningar är markerade med låg eller medel säkerhet), Safari och iOS (kunde inte testas, bara Chrome headless), filmens uppspelning och ljud, och sakgranskning av siffrorna. Ett skenbart scrollfel i Chrome headless med `--screenshot` vid direktlänkar visade sig vara ett artefakt (CDP ger `scrollY=0`) och rapporteras inte.
- Den lokala servern på port 8771 och den headless Chrome jag startade är stoppade. Inget i repot är ändrat utom den här filen.
