# Granskning 9: pedagog (lärare i samhällskunskap)

Granskare: roll 9 `pedagog`, 2026-11-14. Underlag: lokal kopia av `index.html` (server på port 8779), Chrome headless, Node (`vm`) och Skolverkets ämnesplan i samhällskunskap (SKOLFS 2023:130, nivå 1b).

## 1. Sammanfattning

Skatteplattformen fungerar redan bra som huvudkälla för en lektion om offentlig ekonomi. Filmen (1:26 med textversion), startkvittot, prislistan med quizet och jämförelserna med PISA ger konkreta ingångar som en 17-åring förstår, och varje siffra har källa och år. Den allvarligaste bristen för skolan är att Din ekonomi visar noll kronor i skatt för alla under 19 år, också med lön, och att texten där säger "Under 18 år". Eleven får alltså fel svar på just den fråga hon ställer, och startsidan säger något annat. I övrigt saknas en utskriftsvänlig form, ett gemensamt quiz för hela klassen och en koppling till vem som beslutar om skatterna (fullmäktige och riksdagen). Fem små tillägg skulle göra sajten mer användbar i klassrummet utan att den blir ett läromedel.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Pedagogiskt värde | 4 | Konkreta, personliga ingångar (min lön, mitt kvitto, gissa priset) och tydliga vardagsjämförelser; kalkylatorn ger fel svar för gymnasieelever. |
| Nivå | 3 | Rubriker, film och quiz passar en 17-åring, men flera ingresser och metodrader är täta och har höga LIX-värden (cirka 50–56). |
| Stöd för källkritik | 4 | Källa och år vid varje siffra, primärkällor, rättelselogg, känslighetsanalys och nedladdningsbara antaganden; däremot ingen källa i quizsvaren och ingen kort metod för att granska en siffra själv. |

## 3. Det som fungerar (bevara)

- **Filmen "Så går samhället runt"** (`#kretslopp`): 1 minut 26 sekunder, nio kapitel med direktlänkar (`#kapitel-N`) och "Läs filmen som text" (rad 1567). Fungerar som lektionsstart även utan röst, och kapitlen täcker samhällsekonomiska flöden mellan hushåll, Skatteverket, stat, region och kommun.
- **Startkvittot med vardagsjämförelser** ("ca 1½ skoldagar för en elev", "ca 37 minuter på intensiven"). Ger eleven en personlig ingång till fördelningen av skatten.
- **Gissa först** (`initGissa`, rad 4246) med återkoppling i klartext ("Du gissade 3,2 gånger för högt") och omräkning till "så lång tids inkomstskatt från en medianlön". Bra för förförståelse och diskussion om hur vi uppfattar kostnader.
- **Källkritiskt material**: "Hur säker är beräkningen?" (tornadodiagram), rättelseloggen, "Livsloppet visar ett mönster, inte en skuld", "Ladda ner alla antaganden" och ISK-avsnittet (rad 2994–2997), som visar en hel beslutsprocess med proposition, remissvar och riksdagsbeslut. ISK-avsnittet är ett ovanligt bra skolexempel.
- **Delbara lägen**: `?age=…&inc=…#kalkylator`, `#jmf-<flik>-<n>`, `#fakta-N` och `#gissa-<titel>` gör det lätt för läraren att dela exakt samma vy med klassen.

## 4. Fynd

### pedagog-01. Din ekonomi visar noll kronor i skatt för alla under 19 år, också med lön
- **Plats:** Din ekonomi, kortet "Skatt du betalar i år". `skattDelar` (rad 5338) och `annualTax` (rad 5360): `if(age < 19 || inc <= 0) return {… 0 …}`. Meddelandet på rad 5506.
- **Belägg:** `?age=17&inc=60#kalkylator` (5 000 kr i månaden) visar "Under 18 år eller ingen inkomst — inga skattebetalningar." (skärmbild `/tmp/pedagog-alder17b.png`). Sajtens egen modell ger 350 kr i månaden i inkomstskatt för samma lön vid 19 år, och startkvittot (som räknar med ålder 40) visar också cirka 350 kr. Körning i Node: `skattDelar(17,60)` ger 0, `skattDelar(19,60)` ger 350 kr i månaden. Samma sak gäller en 18-åring med 10 000 kr i månaden (`annualTax(18,120)` = 0), trots att texten säger "Under 18 år". Inkomstskatten har ingen åldersgräns: Skatteverket anger att den som sommarjobbar slipper skatt bara om årsinkomsten är under gränsen för grundavdraget, 24 873 kr för 2025 (primärkälla: [Skatteverket, Vem ska deklarera?](https://www.skatteverket.se/privat/etjansterochblanketter/svarpavanligafragor/skattekontoochslutligskatt/privatskattekontofaq/varforharmittbarnfattettslutskattebeskedmedskattattbetalatrotsatthoninteharfattnagondeklarationsblankett.5.10cbb69314111c2d94bc47.html)). Den tillfälliga nedsättningen av arbetsgivaravgiften gäller bara personer födda 2003–2007 ([Skatteverket, Lägre arbetsgivaravgifter för ungdomar](https://skatteverket.se/omoss/pressochmedia/nyheter/2026/nyheter/lagrearbetsgivaravgifterforungdomar.5.70685bee19c85dd5dd02b10.html)), så för yngre betalas i regel full avgift. Det regelverket kunde jag inte verifiera i detalj för den som är under 15 år.
- **Problem:** Den grupp som oftast använder kalkylatorn i skolan, gymnasieelever med sommar- eller extrajobb, får veta att de inte betalar skatt. Det säger emot startsidan, lönebeskedet de själva får och Skatteverkets regler. Dessutom stämmer inte texten ("Under 18 år") med villkoret (under 19 år).
- **Varför det spelar roll:** För elever och lärare. En elev som jämför med sitt eget lönebesked ser direkt att det är fel, och förtroendet för resten av sajten sjunker.
- **Förslag:** Ta bort åldersvillkoret för inkomstskatten och låt bara `inc <= 0` ge noll: `if(inc <= 0) return …`. Räkna arbetsgivaravgiften med full sats för den som är född 2008 eller senare (kontrollera regeln för den som är under 15 år mot Skatteverket). Ändra meddelandet till "Ingen inkomst, ingen inkomstskatt. Moms betalar du ändå när du handlar." Kör sedan `node scripts/kontroll.mjs` och räkna om `LIVSLOPP_BEF` om livsloppet påverkas.
- **Allvar:** Kritisk. **Säkerhet:** hög (inkomstskatten), medel (arbetsgivaravgiften under 19 år). **Insats:** S–M. **Typ:** rättelse.

### pedagog-02. Ingen utskriftsvänlig form och ingen sida för lärare
- **Plats:** Hela sajten. `index.html` saknar `@media print` (sökning på "print" ger noll träffar).
- **Belägg:** Utskrift till PDF med Chrome headless ger 11 sidor för `#start` och 13 sidor för `#kalkylator` (`/tmp/pedagog-print-start.pdf`, `/tmp/pedagog-print-kalkylator.pdf`). Jag kunde inte granska sidorna visuellt.
- **Problem:** Lärare delar ofta ut ett blad eller lägger ett underlag i lärplattformen. Nu får man med menyn, knappar, illustrationer och interaktiva delar som inte fungerar på papper, utan någon sammanfattning.
- **Varför det spelar roll:** För lärare som planerar lektioner och för elever utan egen dator.
- **Förslag:** (a) En enkel utskriftsstil: dölj `nav`, knappar, vyhuvudenas scener, filmens kontroller och "Nästa"; skriv ut länkarnas adress efter källnamnen (`a[href^="http"]::after{content:" (" attr(href) ")"}`); undvik sidbrytning inne i kort (`break-inside:avoid`). (b) En kort sektion "För lärare" under Metod (`#for-larare`) med ett lektionsupplägg på 60 minuter (se avsnitt 7), fem diskussionsfrågor och direktlänkar. Det håller sajten utanför läromedelsfacket men gör den lätt att använda.
- **Allvar:** Hög. **Säkerhet:** hög. **Insats:** M. **Typ:** förbättring.

### pedagog-03. Quizet slumpar frågorna, så klassen kan inte jämföra svaren
- **Plats:** Prislistan, Gissa först. `pick()` i `initGissa` (rad 4259–4262); `fromHash()` (rad 4321–4326).
- **Belägg:** `pick` blandar med `sort(()=>Math.random()-.5)`, så varje elev får nio olika frågor. `#gissa` utan slug startar dessutom med en slumpad fråga, inte med den fasta första frågan (`FORSTA`, kriminalvården), som bara knappen "Börja gissa" ger (skärmbild `/tmp/pedagog-gissa.png`: Fråga 1 av 10 är räddningstjänsten).
- **Problem:** I klassrummet vill läraren gå igenom samma tio frågor efteråt ("Vem gissade närmast på IVA-dygnet?"). Det går inte nu.
- **Varför det spelar roll:** För lärare. Gemensam genomgång är det som gör ett quiz till undervisning.
- **Förslag:** Ett klassläge via länk, till exempel `#gissa-klass`, som alltid ger samma tio frågor i samma ordning (en fast lista med titlar ur `CARDS`), och en rad i sammanfattningen: "Alla som använder den här länken får samma frågor." Låt också `#gissa` utan slug starta med `FORSTA`.
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** förbättring.

### pedagog-04. Quizsvaret visar inte källan
- **Plats:** `reveal()` i `initGissa` (rad 4287–4297).
- **Belägg:** Svaret visar gissning, rätt svar, `c.vs` (vad man själv betalar) och omräkningen till skattetid, men inte `c.src`, som finns för varje prislapp (till exempel "SKR: regionernas barn- och ungdomstandvård …", rad 3391).
- **Problem:** Eleven får ett tal utan avsändare i just det ögonblick då hon är som mest nyfiken på det. Prislistans kort har "Källa och beräkning", men quizet döljer prislistan medan man gissar.
- **Varför det spelar roll:** För källkritiken. Det är en enkel vana att träna: "Vem säger det, och vilket år?"
- **Förslag:** Lägg till en rad efter svaret: `<p class="gq-info">Källa: ${c.src}</p>`, gärna kortad till källnamn och år, och med länk via `linkaKallor()`.
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** förbättring.

### pedagog-05. Sajten säger inte vem som beslutar om skatterna
- **Plats:** Vem gör vad (korten Staten, Regionen, Kommunen, cirka rad 1840–1880) och Skatter i korthet, kortet Kommunalskatt (rad 2817).
- **Belägg:** Sökning i `index.html`: "kommunfullmäktige" och "regionfullmäktige" ger noll träffar. Kortet Staten har underrubriken "riksdag och regering", men kommunens och regionens kort nämner inte vem som beslutar. Kommunalskatten "varierar 28,9 % (Österåker) till 35,7 % (Dorotea)" utan förklaring till varför.
- **Problem:** Ämnesplanen för nivå 1b tar upp "Politiska system lokalt och nationellt i Sverige samt på EU-nivå. Ansvarsutkrävande och medborgarnas möjligheter att påverka på de olika nivåerna" (SKOLFS 2023:130). Sajten visar vart pengarna går men inte vem man kan ställa till svars för skattesatsen, och därmed inte varför den skiljer sig mellan kommuner.
- **Varför det spelar roll:** För elever, som ofta tror att staten bestämmer kommunalskatten. Länken mellan skatt och val är kärnan i medborgarkunskap och går att ge helt neutralt.
- **Förslag:** En rad på varje kort i Vem gör vad: "Skattesatsen beslutas av kommunfullmäktige, som väljs vart fjärde år." / "… av regionfullmäktige …" / "Statens skatter och budget beslutas av riksdagen." I Kommunalskatt-kortet: "Varje kommun- och regionfullmäktige beslutar sin egen skattesats, därför skiljer den sig."
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** förbättring.

### pedagog-06. Ordlistan saknar de begrepp en elev oftast behöver
- **Plats:** `ORDLISTA` (Metod, "Ordlista: förkortningar och begrepp").
- **Belägg:** Ordlistan har 28 poster: mdkr, mnkr, Kolada, Eurostat, Förvärvsarbetande, tkr, BNP, Skattekvot, OECD, COFOG, Utgiftsområde, Transfereringar, Skatteutgifter, Statsbidrag, Kommunalekonomisk utjämning, Preliminärskatt, Arbetsgivaravgift, Grundavdrag, Jobbskatteavdrag, Prisbasbelopp, Brytpunkt, Marginalskatt, Medianlön, SGI, LSS, KPP, FASIT, NTA. Det saknas bland annat: Kommunalskatt, Genomsnittsskatt, Moms, Statsskuld, Budgetsaldo (underskott), Offentlig sektor, Välfärd, Prognos, Löpande och fasta priser, Gini-koefficient och Primärkälla.
- **Problem:** Termerna markeras automatiskt i löptexten (`initOrdlista`), så varje ny post blir en förklaring där eleven behöver den. Flera av de ord som bär lektionen saknas.
- **Varför det spelar roll:** För elever, särskilt de med svenska som andraspråk.
- **Förslag:** Lägg till de elva posterna med en mening var, till exempel: *Genomsnittsskatt*: "Hur stor del av hela lönen som går till skatt. Lägre än kommunalskattesatsen, eftersom grundavdraget och jobbskatteavdraget sänker skatten." *Budgetsaldo*: "Statens inkomster minus utgifter under ett år. Är det negativt lånar staten skillnaden." *Primärkälla*: "Den som har tagit fram uppgiften, till exempel SCB eller Skatteverket."
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** förbättring.

### pedagog-07. Budgetens ingress är för tät för en 17-åring
- **Plats:** Budgeten, ingressen under "Försvar och krisberedskap är statsbudgetens största enskilda utgiftsområde 2026" (rad 1980).
- **Belägg:** Ett stycke på cirka 110 ord med 14 tal (1 542, 27, 1 375, −167, 10–12, 285, 3 200, 2024, +33 %, 40, +6 %, 120,5, 127,7, −6 %) och fyra utgiftsområdesnummer. Ungefärligt LIX-värde 56 (räknat med `/tmp/ped-lix.py`; meningsgränserna är osäkra på grund av decimaltal och förkortningar). LIX över 50 räknas som svår text. Som jämförelse har Din ekonomis ingress (rad 2650) LIX cirka 32.
- **Problem:** Budgeten är den vy där eleven ska förstå helheten, men ingressen läses som en tabell i textform.
- **Varför det spelar roll:** För elever och för alla ovana läsare av budgetsiffror.
- **Förslag:** Tre korta meningar och en lista: "Staten räknar med att ge ut 1 542 miljarder kronor 2026 och få in 1 375 miljarder. Skillnaden, 167 miljarder, lånas. Pengarna fördelas på 27 utgiftsområden." Följt av "Störst förändring mot 2025:" som punktlista (försvaret +33 %, vården +6 %, räntorna −6 %). Resten (socialförsäkringarna och den offentliga sektorns 3 200 miljarder) står redan i kortet "Hela den offentliga sektorn 2024".
- **Allvar:** Medel. **Säkerhet:** medel (LIX är ungefärligt). **Insats:** S. **Typ:** förbättring.

### pedagog-08. Källkritiken finns i materialet men inte som en metod eleven kan använda
- **Plats:** Metod, "Så räknar vi" och "Så arbetar vi" (rad 3010–3108).
- **Belägg:** Sajten har allt som behövs (primärkällor, år, egna beräkningar märkta i noter som "Skatteplattformens beräkning", känslighetsanalys, rättelselogg), men ingenstans står hur en läsare själv kan granska en siffra. Ämnesplanen tar upp "metoder för att söka, bearbeta, tolka, värdera och kritiskt granska information … Källkritik och källtillit" (SKOLFS 2023:130, nivå 1b).
- **Problem:** Läraren måste själv skriva instruktionen, och eleven ser inte att sajten är byggd för att granskas.
- **Varför det spelar roll:** För lärare och elever. Sajten är ett ovanligt bra övningsobjekt för källkritik eftersom allt går att följa till källan.
- **Förslag:** En kort ruta i Metod, "Granska en siffra själv": 1) Vem står som källa, och är det den som tagit fram uppgiften (primärkälla) eller någon som återger den? 2) Vilket år gäller siffran, och är det utfall, budget eller prognos? 3) Är det en uppgift från källan eller Skatteplattformens egen beräkning? 4) Följ länken och hitta talet. Stämmer det? Hittar du ett fel: rapportera det (länk), och se rättelseloggen.
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** förbättring.

### pedagog-09. De fyra livssituationerna saknar en ung person
- **Plats:** Din ekonomi, "Fyra livssituationer" (`#scenarion`, rad 2863; `SCENARIER`, rad 6392).
- **Belägg:** Scenarierna är Barnfamilj, Ensamstående, Kronisk sjukdom och Anhörigvårdare. Inget av dem motsvarar en gymnasieelev eller någon som just fått sitt första jobb, trots att faktakortet "Din första lön" (rad 4107) finns.
- **Problem:** Eleven hittar ingen situation att känna igen sig i.
- **Varför det spelar roll:** För elever på gymnasiet och för unga vuxna i allmänhet.
- **Förslag:** Ett femte scenario, "Första jobbet", med 19 år och 25 000 kr i månaden (som faktakortet), eller "Gymnasieelev med sommarjobb", med 17 år och sommarlön. Det senare förutsätter att pedagog-01 är rättat.
- **Allvar:** Låg. **Säkerhet:** hög. **Insats:** S. **Typ:** förbättring.

### pedagog-10. Ekonomisk politik och konjunktur saknas som sammanhang för underskottet
- **Plats:** Budgeten (rad 1980–1983) och filmens kapitel 6 ("Och lånar det som fattas").
- **Belägg:** Budgetsaldot −167 miljarder och Riksgäldens prognos −196 miljarder visas, men inte varför staten lånar i vissa år eller vilka regler som styr (det finanspolitiska ramverket). Sökning: "finanspolitik", "överskottsmål" och "balansmål" ger noll träffar; "konjunktur" förekommer bara i källnamn (Konjunkturinstitutet, SNS Konjunkturråd).
- **Problem:** Ämnesplanen tar upp "Resursanvändning, tillväxt, konjunkturer och ekonomisk politik" (nivå 1b). Utan sammanhang blir underskottet antingen en larmsiffra eller en icke-fråga för eleven.
- **Varför det spelar roll:** För elever och lärare som vill koppla budgeten till ekonomisk politik.
- **Förslag:** En neutral mening under budgetsaldot, med källa: "Hur mycket staten får låna styrs av riksdagens budgetmål. Underskottet beror också på konjunkturen: i en lågkonjunktur minskar skatteinkomsterna och utgifterna för till exempel arbetslöshet ökar." Länka till Finanspolitiska rådets eller regeringens beskrivning av ramverket. Formuleringen bör stämmas av med roll 3 (ekonom); jag har inte verifierat budgetmålens exakta lydelse för 2026–2027.
- **Allvar:** Medel. **Säkerhet:** medel. **Insats:** S–M. **Typ:** beslut (om sajten ska ta in ekonomisk politik över huvud taget).

### pedagog-11. Citatet behöver en ram när sajten används i undervisning
- **Plats:** Metod, det gröna citatbandet (`#citat`, rad 3064), direkt före "Så arbetar vi", där det står "Vi tar inte ställning i politiska frågor". Också filmens sista kapitel och startkvittot.
- **Belägg:** Citatet står utan avsändare och utan kommentar (skärmbild `/tmp/pedagog-metod.png`).
- **Problem:** En elev som tränar källkritik reagerar på att en sajt som säger att den inte tar ställning har en värdering i stor stil. Det är inget fel att ha citatet (det är ägarens fasta beslut), men eleven behöver se att det är en värdering och inte en siffra.
- **Varför det spelar roll:** För lärare som vill använda sajten utan att få invändningen "den är partisk", och som ett bra diskussionsunderlag om skillnaden mellan fakta och värdering.
- **Förslag:** Behåll citatet och lägg till en kort rad under det i Metod: "Skatteplattformens utgångspunkt. Det är en värdering, inte en siffra; siffrorna på sajten kan användas oavsett om man håller med." I en lärarsektion (pedagog-02) kan citatet bli en diskussionsfråga: "Håller du med? Vad skulle någon som tycker annorlunda säga?"
- **Allvar:** Låg. **Säkerhet:** låg (bedömning). **Insats:** S. **Typ:** beslut.

## 5. De tre viktigaste åtgärderna

1. **Rätta skatten för den som är under 19 år (pedagog-01).** Det är ett sakfel som träffar precis den målgrupp som använder sajten i skolan, och det säger emot sajtens egen startsida. Utan rättelsen kan jag inte rekommendera kalkylatorn till elever.
2. **Gör sajten lätt att använda i klassrummet: utskriftsstil, en kort sektion för lärare och ett klassläge i quizet (pedagog-02 och pedagog-03).** Små ingrepp som gör att läraren kan planera en lektion på en kvart, och att hela klassen kan prata om samma frågor.
3. **Koppla skatten till beslut och källkritik: vem beslutar (pedagog-05), källan i quizsvaret (pedagog-04) och "Granska en siffra själv" (pedagog-08).** Det binder sajten till ämnesplanens kärna (ansvarsutkrävande och källkritik) med några rader text, utan att sajten tar ställning.

## 6. Frågor till ägaren

1. Vill du ha en egen sektion för lärare (`#for-larare`) under Metod, eller ska skolmaterialet ligga utanför sajten, till exempel som ett dokument i `docs/`?
2. Ska sajten säga något om ekonomisk politik och budgetregler (pedagog-10), eller hålla sig till vad pengarna används till?
3. Är du beredd att lägga en kort rad som ramar in citatet i Metod (pedagog-11)? Rubriken och citatet stannar i båda fallen.
4. Ska Din ekonomi visa arbetsgivaravgift för den som är under 19 år, och i så fall med vilken regel för den som är under 15 år? Det behöver kontrolleras mot Skatteverket innan pedagog-01 rättas fullt ut.

## 7. Metod och avgränsning

**Lektionsplan som prövades på sajten (60 minuter, Samhällskunskap nivå 1b):**

| Tid | Moment | Sajtens del | Fungerade? |
|---|---|---|---|
| 0–5 | Start: "Hur går skattepengarna runt?" | Filmen (1:26) och "Läs filmen som text" | Ja. Fungerar utan röst tack vare textrutan. |
| 5–15 | Förförståelse i par | Gissa först | Delvis. Alla får olika frågor, så den gemensamma genomgången går inte (pedagog-03). |
| 15–30 | Min skatt | Startkvittot med egen eller tänkt lön, sedan Din ekonomi med egen ålder | Startkvittot ja. Din ekonomi visar noll skatt för 17-åringar (pedagog-01). |
| 30–45 | Grupparbete och källkritik: varje grupp tar ett mått i Jämförelser eller en post i Budgeten, hittar källa och år och kontrollerar talet hos källan | `#jmf-<flik>-<n>`, Budgeten, Prislistans "Källa och beräkning" | Ja. Direktlänkar, källa och år finns vid varje diagram. Budgetens ingress är tung (pedagog-07). |
| 45–55 | Diskussion: fakta och värdering | Citatet, "Livsloppet visar ett mönster, inte en skuld", ISK-avsnittet | Ja, med lärarens ram (pedagog-11). |
| 55–60 | Exit ticket: "Vem beslutar om din kommunalskatt?" | Vem gör vad | Nej. Sajten svarar inte på frågan (pedagog-05). |

**Matchning mot centralt innehåll, nivå 1b (SKOLFS 2023:130):**
- *Täcks väl:* samhällsekonomiska strukturer och flöden (filmen, Vem gör vad); välfärd (Din ekonomi, prislistan, livsloppet); privatekonomi: inkomster och sparande (kvittona, Skatt på sparande); jämlikhet (Gini under Framtid); politiska system lokalt, nationellt och EU-nivå i fråga om ansvarsfördelning (Vem gör vad, EU-avgiften i budgeten); källkritik och källtillit (Metod).
- *Luckor:* ansvarsutkrävande och påverkan på de olika nivåerna (pedagog-05); konjunkturer och ekonomisk politik (pedagog-10); grundläggande prisbildning och företagande (utanför sajtens syfte, ingen åtgärd föreslås); ideologiska skiljelinjer (bör av neutralitetsskäl inte finnas på sajten, men kan tas upp i diskussionsfrågor i en lärarsektion).

**De fem små tilläggen som föreslås (högst fem enligt uppdraget):** 1) lärarsektion med lektionsupplägg och diskussionsfrågor (pedagog-02), 2) utskriftsstil (pedagog-02), 3) klassläge i quizet (pedagog-03), 4) elva nya ordlisteposter (pedagog-06), 5) rutan "Granska en siffra själv" (pedagog-08).

**Verktyg:** lokal server (`python3 -m http.server 8779`), Chrome headless (skärmbilder 1280 px av sex vyer, quizet, filmavsnittet och kalkylatorn med `?age=17&inc=60`; cirka 13 skärmbilder i `/tmp/pedagog-*.png`), utskrift till PDF med Chrome headless (sidantal räknat i PDF-filen), Node med `vm` för `skattDelar` och `annualTax` (`/tmp/ped-test.mjs`, samma laddning som `scripts/kontroll.mjs`), ett enkelt LIX-skript (`/tmp/ped-lix.py`), `grep` för begrepp och ordlista. Ämnesplanen hämtades från Skolverket ([syllabuswebb.skolverket.se, SAMH](https://syllabuswebb.skolverket.se/subject/SAMH/1/pdf)).

**Inte testat:** mobilvy (roll 1 och 8 täcker den), ljud och röst i filmen (finns inte än, känt), utskrifternas utseende (jag kunde räkna sidorna men inte visa dem), riktiga elever. Några headless-skärmbilder tagna mot ett ankare längre ner på sidan blev tomma eller visade menyn mitt på sidan; det beror troligen på hur skärmbilden tas med rullning och inte på sajten, men det kan roll 10 (teknik) kontrollera. Sakuppgifterna i övrigt har jag inte granskat (roll 2).
