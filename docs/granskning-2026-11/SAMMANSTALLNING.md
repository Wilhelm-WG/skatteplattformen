# Expertgranskningen november 2026: sammanställning

Tio granskare med var sin expertroll granskade Skatteplattformen 14 november 2026 med samma underlag, samma skalor och listan över redan åtgärdade problem (`KANT.md`). Rapporterna ligger i samma mapp (`01-forsta-intryck.md` … `10-teknik.md`), skisser i `skisser/`. Prompten finns i `docs/PROMPT_TIO_GRANSKARE.md`.

## 1. Helhetsbild

Sajten håller hög kvalitet i grunden. Skattemodellen räknar rätt på kronan, 25 av 30 stickprov stämmer exakt med primärkällan, inga konsolfel finns och axe hittar inga fel i sex av sju vyer. Bildspråket (kvittot, sedeln, scenerna), källangivelserna och rättelseloggen lyfts av flera roller som ovanligt starka. Bristerna ligger i tolkningen och presentationen snarare än i räkningen: vad kvittots "skatt" omfattar, hur urval och rubriker väljs (neutralitet), hur sajten beter sig på mobil och i äldre iPhone, och att samma sak heter olika på olika ställen. Avsändaren och arbetssättet (inklusive AI-stöd) beskrivs tunt.

| Roll | Betyg (1–5) |
|---|---|
| 01 Förstagångsbesökare | begriplighet 4, vägledning 3, navigering 4, engagemang 4, mobil 2 |
| 02 Faktagranskare | korrekthet 4, spårbarhet 3, konsistens 4, aktualitet 4 |
| 03 Ekonom | rimlighet 4, tydlighet om antaganden 3, rättvisande tolkningar 3 |
| 04 Neutralitet | saklig balans 3, språklig neutralitet 4, transparens 3 |
| 05 Journalist | nyhetsvärde 4, citerbarhet 3, felrisk 3, transparens 3 |
| 06 Klarspråk | begriplighet 3, konsekvens 2, ton 4, lättläst 2 |
| 07 Tillgänglighet | uppfattbar 4, hanterbar 3, begriplig 4, robust 3 |
| 08 Formgivare | hierarki 3, enhetlighet 3, diagram 3, karaktär 4, mobil 3 |
| 09 Pedagog | pedagogiskt värde 4, nivå 3, källkritik 4 |
| 10 Teknik | prestanda 3, robusthet 3, delning 4, kodhälsa 3 |

## 2. Redan rättat under granskningen (14 november, inte committat)

| Fynd | Vad |
|---|---|
| ekonom-02 | Filmens fördelning: kommun och region får hela kommunalskatten (median 7 600 + 4 300 kr), staten 5 100 kr, pensionen 6 600 kr |
| pedagog-01 | Kalkylatorn räknar skatt från 15 år (tidigare 0 kr under 19 år) |
| teknik-01 | Lookbehind i två reguljära uttryck borttagen (stoppade hela skriptet i Safari före 16.4); ny kontroll i `kontroll.mjs` |
| klarsprak-01, -02 | "Här är högre är bättre" (36 diagram) och prislapparnas "… medianlön under X" omskrivna |
| faktagranskare-01 (text) | Texten om skattetabell 32 förtydligad |
| ekonom-04, -05 | "Jämnas ut över livet" struket; förklaringen om momsen i livsloppet ersatt |
| tillganglighet-01, -02, -03, -07 | Fokus i detaljpanelen, flikarnas `aria-selected`, fokus vid vybyte, sökfältets fokusmarkering |
| forsta-intryck-01 | In-toningen visar avsnitt så fort en del syns (Din ekonomi såg tom ut) |
| neutralitet-06 (del) | Citatet ordagrant även i Din ekonomi |
| övrigt | Kollektivtrafikens finansiering, metodraden i födelseår, äldreboende sökbart, datum 14 november, metodrapportens tabeller för 35–44 år |

## 3. Fynd som flera roller hittat

| Tema | Roller | Kärnan |
|---|---|---|
| Sjukvårdsrubriken | neutralitet-03, journalist-02, klarsprak-10 | Visar bara det positiva och "bland de lägsta dödstalen som vården kan förhindra" är svagt: Sverige är trea av sex med data (Norge 54,6, Island 57,7, Sverige 58,4), långt under EU-snittet 86,8 |
| Vad "skatt" betyder | ekonom-01, journalist-04, faktagranskare-01, neutralitet-10 | Kvittot visar inkomstskatt inklusive allmän pensionsavgift (7 %), utan begravnings- och public service-avgift; livsloppet räknar in arbetsgivaravgift och moms |
| Mobilkvittot för långt ner | forsta-intryck-02, formgivare-05 | Kvittot börjar ca 1 100 px ned bakom en metodtext på nio rader |
| Citatets avsändare | neutralitet-06, formgivare (fråga), pedagog-11 | Citatet står utan avsändare nära "Ingen agenda. Bara siffror" |
| Avsändare och transparens | journalist-01, -10, neutralitet-12 | Tunn beskrivning av vem som står bakom; AI-stödet redovisas inte |
| Sammanfattningen "18 av 24" | neutralitet-01, -02 | Tio av måtten är vårdmått som delvis överlappar; arbetslöshet, skattenivå och PISA läsning saknas |
| Samma sak, olika namn | klarsprak-03, forsta-intryck-07 | Socialt skydd har fem namn; kvittot och hundralappen delar in olika |
| Diagram på mobil | formgivare-03, -04, tillganglighet-12 | Text under 11 px (tornado, livslopp, film), budgetstaplar med liten bredd |
| Direktlänkar med nummer | journalist-08, teknik (fråga) | `#fakta-N`, `#jmf-…-N` kan tyst peka på fel siffra när ordningen ändras |

## 4. Prioriterad åtgärdsplan

### 4a. Rättelser före nästa publicering (kan göras direkt)

| # | Vad | Fynd | Insats |
|---|---|---|---|
| 1 | Sjukvårdsrubriken saklig: "…och har längst medellivslängd av de sju länderna"; ingressen: "Dödstalen som vården kan förhindra ligger långt under EU-snittet, i mitten av Norden." | journalist-02, neutralitet-03 | S |
| 2 | Källänkarna: rätta `KALLOR`-matchningar som leder till fel dokument (Eurostat april/oktober, Skatteverket SKV 433 vid ISK, startsidor för SKR m.fl.) och lägg till en kontroll | faktagranskare-03 | M |
| 3 | Stoppa hoppet till toppen när man scrollar under laddningen | teknik-03 | S |
| 4 | Räntejämförelsen: jämför budget mot budget (28,8 → 27,0) eller utfall mot utfall | faktagranskare-04 | S |
| 5 | Grundskolans kostnad på samma bas som gymnasiet (eller båda märkta "exklusive skolskjuts") | faktagranskare-02 | S |
| 6 | Kvittobilden och `og.png`: lägg till källa och en metodrad ("inkomstskatt, fördelad som de offentliga utgifterna 2024") | journalist-03 | S |
| 7 | Ord: "inkomstskatt" där det gäller, i kvittot, faktakortens bilder och skattetid | journalist-04 | S |
| 8 | Kvittoraderna får radbrytas vid 320 px (kapas i dag) | tillganglighet-06 | S |
| 9 | Övriga tillgänglighetsfel: quizets fokus, rubriknivåer, ordlistans hovring, reglagens `aria-valuetext`, mobilmenyns `aria-expanded` och Escape, symboltecken i delningsknappar | tillganglighet-04, -05, -08, -09, -11, -13 | M |
| 10 | Småfel i källrader (särskilt boende, hemtjänstens nämnare, sjukpenningens faktor, folkmängd, barnbidragets realvärde, prislistans prisår) | faktagranskare-06, journalist-12 | S |
| 11 | Nettotexten: "i din ålder, med din lön" i stället för "inkomstgrupp"; pensionärstexten om att inkomstpensionen inte ingår | ekonom-03 (del), ekonom-08 | S |
| 12 | Delning: fall tillbaka på nedladdning eller kopierad länk när delningen misslyckas; `twitter:image:alt`; `404.html` | teknik-04, -11, -12 | S |

### 4b. Förbättringar (inget beslut behövs)

| # | Vad | Fynd | Insats |
|---|---|---|---|
| 13 | Snabbare första kvitto: ta bort förladdningen av `scener.svg`, hämta scenerna efter kvittot, banta typsnitten | teknik-02 | M |
| 14 | Ett namn per begrepp: gemensam konstant för kategorinamnen; terminologilistan | klarsprak-03, -04 | M |
| 15 | Ordlistan: procentenhet, åldersstandardiserat, Gini, IVA, SKR, genomsnittsskatt, moms, statsskuld, budgetsaldo m.fl. | klarsprak-08, pedagog-06 | S |
| 16 | Diagram som håller på mobil: tornadon i HTML, etiketter ovanför staplar, ingen text under 11 px (skiss `08-mobildiagram`) | formgivare-03, -04 | M |
| 17 | Ett raster: alla avsnitt i samma container, mellanrum som token (skiss `08-raster`) | formgivare-01 | M |
| 18 | Prislistan: sökord (äldreboende, sjukhus, vårdplats) och hjälpsamt meddelande vid tom sökning | forsta-intryck-04, -05 | S |
| 19 | Utskriftsstil (`@media print`) | pedagog-02 | S |
| 20 | Quizet visar källan i svaret; klassläge `#gissa-klass` med samma tio frågor | pedagog-04, -03 | S |
| 21 | Diagramundertexterna (`JMF_DATA.enh`) i vanlig svenska; facktermer till "Om måttet" | klarsprak-07 | M |
| 22 | `<noscript>` med medianlönekvittot | teknik-05 | S |
| 23 | Rätt kommun i delad länk (spara kommunen, inte bara satsen) | teknik-06 | S |
| 24 | Knappar och flikar: färre varianter; länkfärg globalt | formgivare-06, -07, -10 | M |

### 4c. Beslut för ägaren (med rekommendation)

| # | Fråga | Rekommendation | För / emot |
|---|---|---|---|
| A | **Allmän pensionsavgift i kvittot** (ekonom-01): egen rad "Din allmänna pension (7 %)" eller lägga tillbaka inkomstpensionen i fördelningen | Egen rad överst och fördela resten | För: konsekvent och sant. Emot: beloppen per rad ändras på alla kvitton, `og.png` och livsloppet behöver räknas om |
| B | **"18 av 24"** (neutralitet-01, -02) | Räkna varje fenomen en gång, lägg till arbetslöshet, skattenivå och PISA läsning, och skriv urvalsprinciperna under | För: tavlan är sajtens mest synliga omdöme. Emot: ändrar en nyss godkänd vy |
| C | **Citatets avsändare** (neutralitet-06, formgivare) | Märk "Skatteplattformens utgångspunkt" och byt sidfotens "Ingen agenda. Bara siffror" | För: bär citatet utan att ändra det. Emot: inget |
| D | **AI-stöd och avsändare** (journalist-01, -10, neutralitet-12) | En kort redovisning under Om oss: vem du är, inga partikopplingar, att text och kod tas fram med AI-stöd och granskas av dig | För: uppgiften finns redan i det publika repot. Emot: en ny fråga för läsarna |
| E | **Mobilkvittot** (forsta-intryck-02, formgivare-05) | Kvittot före knapparna på mobil, metodtexten hopfälld under "Så räknas kvittot"; delad länk visar kvittot direkt | För: två roller, stor effekt. Emot: inget |
| F | **Nettot för den som arbetar** (ekonom-03) | Förvälj "Arbetar" när lönen är över ca 10 000 kr och åldern 19–64 | För: rättvisande svar. Emot: ändrar standardläget |
| G | **Framtids rubrik och "Två trender möts"** (neutralitet-04) | Neutral rubrik och flytta rutan till fliken Skatter; nämn förmögenhetsskatten en gång | För: tar bort ett implicit argument. Emot: inget |
| H | **Källpolicy** (neutralitet-05) | Märk källor från intresseorganisationer (LO, Kommunal, Läkarförbundet, UBS, WEF, Ekonomifakta) eller byt dem | För: följer egen policy. Emot: några siffror saknar offentlig motsvarighet |
| I | **Livssituationerna** (neutralitet-11, pedagog-09) | Lägg till en med högre inkomst och en pensionär | För: balans. Emot: mer innehåll |
| J | **Grundskolans bas** (faktagranskare-02) | 146 900 kr, samma bas som gymnasiet | |
| K | **Vyhuvudet** (formgivare-02) | Vynamnet i hjältestorlek, en ingress per vy, ledsiffran i en ruta med källa (skiss `08-vyhuvud`) | |
| L | **Lärarsektion** (pedagog) | Ett kort avsnitt "För lärare" under Metod med lektionsupplägg och diskussionsfrågor | |
| M | **Webbläsarstöd** (teknik) | Safari 15 och senare, två senaste av övriga | |
| N | **Direktlänkar med fasta namn** (journalist-08) | Ja, med en tabell som översätter gamla nummer | |

## 5. Motsägelser mellan roller

- **Förenkla eller förklara mer?** Klarspråk vill kortare texter; ekonom och faktagranskare vill fler förbehåll. *Rekommendation:* korta synliga texter, förbehållen i "Om måttet" och metoden.
- **Lekfull ton i fler vyer?** Klarspråk föreslår frågerubriker i Budget och Framtid; neutralitet varnar för rubriker som drar slutsatser. *Rekommendation:* frågerubriker som är öppna ("Vad kostar räntan?") är förenliga med båda.
- **Sjukvårdsrubriken:** ägaren ville ha en positiv rubrik; journalist och neutralitet vill att den håller mot egna data. *Rekommendation:* positiv och sann ("längst medellivslängd"), resten i ingressen (punkt 1).

## 6. Det som ska bevaras

Startkvittot och jämförelserna "räcker till", sedeln och papperssnittsscenerna, frågerubrikerna i Jämförelser, källa och år vid varje siffra, rättelseloggen, metodrapporten, känslighetsanalysen och möjligheten att ladda ner antagandena, den neutrala tonen i sakfrågor, filmens textversion, delningen av kvittot.

## 7. Samlade frågor till ägaren

1. Pensionsavgiften i kvittot: egen rad eller inkomstpensionen tillbaka (A)?
2. "18 av 24": räkna om, per område eller ta bort (B)?
3. Citatets avsändare och sidfotens text (C)?
4. Redovisning av AI-stöd, din bakgrund, kontaktadress, "vi" eller "jag" (D)?
5. Mobilkvittots placering (E), standardläget "Arbetar" (F)?
6. Framtids rubrik (G), källpolicyn (H), livssituationerna (I), grundskolans bas (J)?
7. Vyhuvudet (K), lärarsektion (L), webbläsarstöd (M), fasta direktlänkar (N)?
8. Ska sajten sikta på WCAG 2.2 AA, och ska en tillgänglighetsredogörelse finnas?
9. Riksgälden publicerar ny prognos 26 november: uppdateras budgetsaldo och statsskuld då, eller ingår det i 2027-beslutet?
10. Försvarets ökning: +33 % mot budget 2025 (sajten) eller +18 % som regeringen anger mot en annan bas?

## 8. Metod

Alla tio roller deltog. Testat i Chrome headless (dator och mobil), Node och CDP; axe-core 4.10.2. Inte testat: riktiga skärmläsare, Safari och iPhone (teknik-01 och tillganglighet-01 bör prövas där), Lighthouse (behörighet saknades), riktiga användare. Faktagranskaren kunde inte nå Världsbankens API. Extern länkkontroll gav många tidsgränser och bör köras om på annat nät. Obs: ägarens dator har NordVPN Threat Protection som lägger in ett skript i sidor i Chrome; det påverkar egna tester men inte besökarna.

## 9. Genomfört 14 november 2026

Ägaren beslutade "kör punkt 1–12 och följ dina rekommendationer på A–E". Allt nedan är testat lokalt i Chrome (inga konsolfel) och `kontroll.mjs` ger 0 fel. Detaljer i `CHANGELOG.md` och rättelseloggen.

| Punkt | Status |
|---|---|
| 1 Sjukvårdsrubriken | Klar: "…och har längst medellivslängd"; ingressen om dödstalen som vården kan förhindra |
| 2 Källänkar | Klar: `KALLOR` rättad, ny kontroll (ensamt organisationsnamn får inte länka till ett enskilt dokument) |
| 3 Scrollhopp | Klar |
| 4 Räntor | Klar: budget mot budget, utfall 30,1 mdkr |
| 5 Grundskolan | Klar: 146 900 kr med skolskjuts (147 tkr i livsfasen) |
| 6 Kvittobild och länkbild | Klar: källrad, `img/og.jpg?v=5` (157 kB) |
| 7 "Inkomstskatt" | Klar: kvittonas rubrik och summa, faktakortets bild |
| 8 Kvittoraderna | Klar: radbryts |
| 9 Tillgänglighet | Klar: tillg-04, -05, -07 (quiz), -08, -09, -10, -11, -13 |
| 10 Källrader | Klar, plus Danmarks skuld 27,2 % och skattekvotens källrad |
| 11 Nettotexten | Klar, plus meningen om ersättningar (ekonom-03) |
| 12 Delning och 404 | Klar: `delaMedReserv`, `twitter:image:alt`, `404.html` |
| A Pensionsavgiften | Klar: egen rad, inte med i jämförelsen skatt–förmåner; livsloppet omräknat |
| B Sammanfattningen | Klar: 14 av 21 (var 18 av 24); nya mått PISA läsning, arbetslöshet, skattekvot |
| C Citatet | Klar: "Skatteplattformens utgångspunkt", ny sidfot |
| D Om oss och AI | Delvis: AI-stöd och ansvar redovisat. Ägarens bakgrund och partitillhörighet är inte ifyllda (kräver ägarens egna uppgifter) |
| E Mobilkvittot | Klar: kvittot före knapparna, metoden hopfälld på mobil |

Kvar: beslut F–N och frågorna i avsnitt 7, ägarens bakgrund (D), test i Safari och på riktig telefon. OECD:s skattekvot (Revenue Statistics) gick inte att hämta; Jämförelser använder Eurostats skattekvot, utan USA.
