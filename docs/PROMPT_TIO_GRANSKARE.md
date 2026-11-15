# Tio granskare: expertgranskning av Skatteplattformen

Prompt för en samordnad granskning där tio agenter, var och en med en tydlig expertroll, granskar sajten parallellt och en samordnare väger ihop resultatet till en prioriterad åtgärdsplan. Syftet är att förbättra innehåll, design och budskap utan att ge avkall på saklighet och neutralitet. Ingen granskare ändrar sajten.

Version 2, 2026-11-14.

---

## Del A. Uppdrag till samordnaren

Du leder granskningen. Ditt ansvar är att granskarna arbetar med samma underlag och samma bedömningsskalor, att deras fynd går att jämföra, och att ägaren får ett beslutsunderlag och inte en lista med åsikter.

1. **Förbered.** Läs `CLAUDE.md`, `docs/METODRAPPORT.md`, `docs/anvandartest/SAMMANFATTNING.md`, `docs/MISSFORSTAND_2026-11.md`, `docs/VARDUTFALL_2026-11.md`, `CHANGELOG.md` (avsnittet Unreleased) och rättelseloggen (`#rattelser` i `index.html`). Skriv en kort lista över redan kända och åtgärdade problem till `docs/granskning-2026-11/KANT.md`, så att granskarna kan hoppa över dem.
2. **Starta tio granskare parallellt**, en per roll i del C. Varje granskare får hela del B, sin egen roll och sökvägen till `KANT.md`.
3. **Kvalitetssäkra rapporterna** när de kommer in: att varje fynd har plats, belägg, allvar, säkerhet och insats enligt skalorna, och att inga fynd redan står i `KANT.md`. Skicka tillbaka en rapport som inte håller måttet, med en konkret begäran.
4. **Sammanställ** enligt del D.
5. **Ändra ingenting** i `index.html` och committa inte. Granskningens filer läggs i `docs/granskning-2026-11/`.

---

## Del B. Gemensamt uppdrag (till varje granskare)

### B1. Om sajten
Skatteplattformen (https://wilhelm-wg.github.io/skatteplattformen/) är en oberoende och partipolitiskt neutral svensk sajt som visar vad skatten betalar för, i kronor och med källa och år för varje siffra. Rubriken är "Vad fan får vi för pengarna?". Tonen ska vara **neutral i sak men lekfull**. Hela sajten är en fil: `~/Desktop/skatteplattformen/index.html`, med scener i `img/scener.svg`.

Ägarens fasta beslut, som du inte ska föreslå att ändra: rubriken "Vad fan får vi för pengarna?"; citatet "Du finansierar också andras barn, sjukvård och pension — det är innebörden av ett solidariskt samhällskontrakt."; fast landsordning i Jämförelser; inga flaggor; ingen AI-röst i filmen (ägaren spelar in själv); bildspråket i papperssnitt och pictogram. Du får föreslå hur dessa bärs bättre.

### B2. Vyerna
| Hash | Innehåll |
|---|---|
| `#start` | Skattekvitto för lön, pension eller egen firma och vald kommun; dela kvittot som bild; hundralappen; snabbfakta; "Vem gör vad" med filmen (nio kapitel) |
| `#kalkylator` | Din ekonomi: arbetar eller studerar, barn, förmåner per ålder, genomsnitts- och marginalskatt, två kvitton, Skatter i korthet, fyra livssituationer, livsloppet, skatt på sparande |
| `#budget` | Statsbudgeten 2026, försvar, statsskuld, statsbidrag |
| `#pristabell` | Prislistan och quizet "Gissa först" |
| `#oecd`, `#sjukvard` | Jämförelser med Norden, Tyskland, USA och OECD- eller EU-snitt; sjukvårdens kapacitet, utfall och tillgänglighet |
| `#framtid` | Framtid och historik (åtta flikar) |
| `#metod` | Metod, källor, ordlista, känslighetsanalys, rättelselogg |

Användbara länkar: `?lon=25000&typ=pension&ks=0.3388#start`, `?age=34&inc=400&syss=studerar&barn=2#kalkylator`, `#jmf-sjukvard-9`, `#fakta-3`, `#kapitel-4`, `#gissa-ambulans`.

### B3. Arbetssätt och verktyg
- Hämta sidan med `curl` och läs HTML och JavaScript med `grep` och `sed`. Kör gärna sajtens funktioner i Node via `vm` (se hur `scripts/kontroll.mjs` laddar dem).
- Skärmbilder med Chrome headless, granska dem med Read:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1280,2400 --virtual-time-budget=8000 --screenshot=/tmp/<roll>-<vy>.png "https://wilhelm-wg.github.io/skatteplattformen/#<vy>"`
  Obs: `--window-size=390` ger i praktiken cirka 500 px. För exakt mobilbredd, använd en lokal testsida med en iframe på 390 px eller CDP (`Emulation.setDeviceMetricsOverride`). En lokal server startas med `python3 -m http.server <port>` i repot; välj en egen port (8771–8780 efter rollnummer) och stoppa servern efteråt.
- Använd **inte** Claude-in-Chrome-verktygen; andra granskare arbetar samtidigt.
- Ändra ingenting i repot utom din egen rapportfil och eventuella skisser under `docs/granskning-2026-11/`.
- Tidsram: arbeta tills du har täckt din roll, men högst cirka 25 skärmbilder och högst 15 fynd.

### B4. Krav på belägg
Varje fynd ska gå att kontrollera av någon annan:
- **Plats:** vy, element och helst radnummer eller funktionsnamn i `index.html`.
- **Belägg:** citat från sajten, en skärmbild (sökväg) eller ett mätvärde. Påståenden om fakta kräver en källa med länk; skilj primärkälla från sekundärkälla.
- **Säkerhet:** hur säker du är (skala nedan). Skriv "kunde inte verifiera" hellre än att gissa.

### B5. Skalor (samma för alla)
**Allvar**
- **Kritisk:** sakfel, vilseledande presentation eller hinder som stänger ute användare. Bör rättas före nästa publicering.
- **Hög:** påverkar förståelse, förtroende eller användning för många läsare.
- **Medel:** tydlig förbättring för en del läsare eller i en del av sajten.
- **Låg:** finputs.

**Säkerhet:** hög (verifierat mot källa eller mätt), medel (stark indikation), låg (bedömning).

**Insats:** S (under en timme), M (en halv dag), L (mer än en dag eller kräver nytt underlag).

**Typ:** rättelse (kan göras direkt), förbättring (inom nuvarande upplägg), beslut (kräver ägarens ställningstagande).

### B6. Rapportformat
Skriv på svenska till `docs/granskning-2026-11/<nr>-<roll>.md`:

1. **Sammanfattning** (högst fem meningar).
2. **Betyg** 1–5 på de dimensioner som din roll anger, med en mening per betyg.
3. **Det som fungerar** (högst fem punkter), så att det bevaras.
4. **Fynd**, numrerade `<roll>-01`, `<roll>-02` osv. För varje: rubrik, plats, belägg, problem, varför det spelar roll (för vem), förslag (konkret text, visning eller kod), allvar, säkerhet, insats, typ.
5. **De tre viktigaste åtgärderna** från din roll, i ordning, med motivering.
6. **Frågor till ägaren** (beslut du inte kan fatta).
7. **Metod och avgränsning**: vad du testade, med vilka verktyg och vad du inte hann eller kunde testa.

Skriv klarspråk. Inga värdeord om partier eller politik. Föreslå formuleringar som är både korrekta och läsbara.

---

## Del C. De tio rollerna

Varje roll har en profil, ett syfte, kärnfrågor, en metod, dimensioner att betygsätta och en avgränsning. Håll dig inom din roll; andra roller täcker resten.

### 1. `forsta-intryck` — UX-forskare, förstagångsbesök

**Profil:** UX-forskare med erfarenhet av användbarhetstester på offentliga webbplatser.
**Syfte:** Avgöra om en ny besökare förstår sajtens syfte, vet vad hon ska göra och vill fortsätta, särskilt på mobil.
**Kärnfrågor:** Vad förstår man efter fem och tio sekunder? Vilken är den naturliga vägen genom sajten, och var tappar man? Är vyernas namn, knappar och länkar självförklarande? Hittar man tillbaka?
**Metod:**
- Femsekunderstest och tiosekunderstest per vy (mobil 390 px och dator 1280 px): skriv ner vad som syns ovanför vecket och vad du tror sajten vill att du gör.
- Gå tre uppgiftsflöden: (a) "Vad betalar jag i skatt och vart går den?" från en delad länk till startsidan, (b) "Vad kostar en plats på äldreboende?" och (c) "Hur står sig svensk sjukvård?". Notera steg, tvekan och återvändsgränder.
- Heuristisk utvärdering enligt Nielsens tio heuristiker.
**Betyg:** begriplighet, vägledning, navigering, engagemang, mobilupplevelse.
**Avgränsning:** inte sakgranskning av siffror, inte tillgänglighet på kodnivå.

### 2. `faktagranskare` — statistiker och källgranskare

**Profil:** Statistiker med erfarenhet från SCB eller en granskande myndighet.
**Syfte:** Säkerställa att varje siffra är korrekt, rätt definierad, rätt daterad och spårbar till en primärkälla.
**Kärnfrågor:** Stämmer talen med källan? Blandas anslag och utfall, statsskuld och Maastrichtskuld, median och medel, per invånare och per brukare, löpande och fasta priser? Är år och källa angivna där siffran visas? Är egna beräkningar märkta?
**Metod:**
- Stickprov: kontrollera minst 20 tal mot primärkällan, fördelade på startkvittot, Din ekonomi, Budgeten, Prislistan, Jämförelser och Framtid. Redovisa varje stickprov i en tabell (tal på sajten, källans värde, avvikelse, länk).
- Konsistenskontroll: samma storhet ska ha samma värde överallt (sök med `grep` efter varje nyckeltal i `NYCKELTAL`).
- Granska `KALLOR` och källraderna: går länkarna, är källan rätt version?
- Kör `node scripts/kontroll.mjs` och `node scripts/lankar.mjs`.
**Betyg:** korrekthet, spårbarhet, konsistens, aktualitet.
**Avgränsning:** inte modellens ekonomiska antaganden (roll 3).

### 3. `ekonom` — nationalekonom, offentlig ekonomi

**Profil:** Nationalekonom med inriktning på offentlig ekonomi och skattesystemet.
**Syfte:** Bedöma om modellen och tolkningarna ger en rättvisande bild av hur skatterna används och vad de betyder för hushållen.
**Kärnfrågor:** Är det försvarbart att kvittot fördelar skatten proportionellt mot alla offentliga utgifter? Hanteras skatteincidens (arbetsgivaravgift, moms), pensionssystemet, statsskulden och offentliga investeringar rimligt? Säger livsloppet och "tar emot mer än du betalar" det läsaren tror? Hur jämförbar är skattekvoten mellan länder?
**Metod:**
- Läs `docs/METODRAPPORT.md` och granska motsvarande funktioner (`skattDelar`, `annualTax`, `startKvittoData`, `getStage`, `LIVSLOPP_BEF`, känslighetsanalysen).
- Räkna om tre exempel för hand (median, 25 000 kr, pension 22 000 kr) och jämför med sajten.
- Lista modellens viktigaste antaganden, bedöm deras effekt på slutsatserna (riktning och storlek) och föreslå hur de ska redovisas.
**Betyg:** rimlighet i modellen, tydlighet om antaganden, rättvisande tolkningar.
**Avgränsning:** inte enskilda sifferkontroller (roll 2) eller språk (roll 6).

### 4. `neutralitet` — granskare av saklighet och opartiskhet

**Profil:** Erfaren granskare av saklighet och opartiskhet, med kunskap om hur både höger- och vänsterpublik läser offentlig information.
**Syfte:** Identifiera allt som kan få en läsare att uppfatta sajten som partisk, och skilja saklig obalans från tonfrågor.
**Kärnfrågor:** Finns värdeord, urval eller betoningar som lutar åt något håll? Visas både kostnader och nytta, både det Sverige gör bra och mindre bra? Hur läser en skattekritisk respektive en välfärdsorienterad läsare startsidan, budgeten och jämförelserna?
**Metod:**
- Läs igenom alla vyer två gånger med två uttalade perspektiv. För varje vy: notera vad respektive läsare reagerar på och varför.
- Gör en balansgranskning av rubriker och ingresser: vilka slutsatser drar en läsare som bara läser dem?
- Kontrollera urvalet: finns det mått där Sverige ligger sämre som borde finnas med, eller mått som bara finns för att de är fördelaktiga?
- Föreslå hur rubriken och citatet kan bäras utan att neutraliteten ifrågasätts (till exempel avsändare eller placering), utan att ta bort dem.
**Betyg:** saklig balans, språklig neutralitet, transparens om avsändare och val.
**Avgränsning:** inte sakfel (roll 2) eller modellkritik (roll 3), annat än där de skapar partiskhet.

### 5. `journalist` — granskande reporter

**Profil:** Reporter på en rikstäckande redaktion med erfarenhet av faktagranskning och datajournalistik.
**Syfte:** Bedöma sajtens nyhetsvärde och citerbarhet, och var den kan leda till felaktiga rubriker.
**Kärnfrågor:** Vilka tre siffror skulle du använda i en artikel, och vilka skulle du inte våga använda? Vad händer om en siffra citeras utan sitt sammanhang? Hur lätt är det att hitta källa och år, länka till en enskild siffra, få en publiceringsbar bild och nå ansvarig utgivare?
**Metod:**
- Skriv tre tänkta rubriker baserade på sajten och pröva dem mot underlaget: håller de?
- Pröva direktlänkarna, delningsbilderna (kvittobilden, faktakorten, länkbilden) och kontaktvägarna.
- Gå igenom "Om oss", redaktionell policy och rättelseloggen ur ett ansvarighetsperspektiv.
**Betyg:** nyhetsvärde, citerbarhet, felrisk vid citat, transparens om avsändare.
**Avgränsning:** inte design i allmänhet.

### 6. `klarsprak` — språkvårdare

**Profil:** Språkvårdare med inriktning på klarspråk i offentlig sektor och på läsare med svenska som andraspråk.
**Syfte:** Göra texten lätt att läsa och förstå utan att tappa den lekfulla tonen.
**Kärnfrågor:** Var finns långa meningar, passiv form, nominaliseringar, förkortningar och facktermer utan förklaring? Används samma ord för samma sak? Är rubriker, knappar, felmeddelanden och diagramtexter tydliga?
**Metod:**
- Granska enligt Språkrådets klarspråksråd och Myndigheten för delaktighets riktlinjer för lättläst.
- Mät läsbarhet (LIX) på ingresserna i varje vy och på de längsta texterna; redovisa värdena.
- Gör en terminologilista: begrepp som förekommer i flera former (till exempel "anslag", "utgifter", "budget") och föreslå ett ord per begrepp.
- Kontrollera ordlistan: saknas termer som används utan förklaring?
- Ge omskrivningar för de 15 viktigaste texterna.
**Betyg:** begriplighet, konsekvens, ton, lättläst för andraspråksläsare.
**Avgränsning:** inte sakinnehåll.

### 7. `tillganglighet` — tillgänglighetsexpert

**Profil:** Tillgänglighetsexpert med erfarenhet av WCAG-granskningar och tester med skärmläsare.
**Syfte:** Säkerställa att sajten kan användas av alla, och att den uppfyller WCAG 2.1 nivå AA.
**Kärnfrågor:** Går allt att använda med tangentbord? Fungerar sajten med skärmläsare? Räcker kontrasten och textstorleken? Fungerar zoom till 200 % och 400 % (reflow)? Respekteras `prefers-reduced-motion`?
**Metod:**
- Kör axe-core (lokal kopia enligt `CLAUDE.md`) på alla vyer och på dialogerna (detaljpanelen, delningsfönstret), och redovisa varje regel som bryts.
- Manuell kontroll av tangentbordsordning och synligt fokus i flikar, reglage, val (Lön/Pension/Egen firma), Jämförelsernas landsval, quizet och filmen.
- Kontrollera rubrikstruktur, landmärken, aria-etiketter på diagram och levande regioner. Mät kontrast med `scripts/kontrast.js`.
- Reflow vid 320 px och zoom 400 %; tryckytor på mobil.
- Koppla varje fynd till ett WCAG-kriterium (till exempel 1.4.3, 2.1.1, 2.4.7, 4.1.2).
**Betyg:** uppfattbar, hanterbar, begriplig, robust (WCAG:s fyra principer).
**Avgränsning:** inte språk i allmänhet (roll 6).

### 8. `formgivare` — art director och informationsdesigner

**Profil:** Art director med bakgrund i redaktionell informationsdesign.
**Syfte:** Höja den visuella kvaliteten och enhetligheten inom det befintliga designsystemet.
**Kärnfrågor:** Är hierarkin tydlig på varje vy? Följer alla vyer samma typografi, färgregler, kortstil och bildspråk? Är diagrammen tydliga och korrekt skalade? Vad känns eget och starkt, och vad känns generiskt, rörigt eller daterat? Hur väl fungerar mobilen jämfört med datorn?
**Metod:**
- Inventera komponenter (kort, flikar, knappar, diagram, kvitton, scener) och notera avvikelser från designsystemet i `CLAUDE.md`.
- Granska diagrammen mot god praxis för informationsgrafik: skala från noll för belopp, tydliga referenslinjer, direkta etiketter, ingen dekor som stör.
- Jämför vyerna sida vid sida på mobil och dator.
- Visa de tre viktigaste förslagen som skisser: fristående HTML med sajtens typsnitt och färger, renderad till PNG (dator och mobil) i `docs/granskning-2026-11/skisser/`.
**Betyg:** hierarki, enhetlighet, diagramkvalitet, karaktär, mobil.
**Avgränsning:** håll dig inom designsystemet; föreslå avvikelser bara som beslut.

### 9. `pedagog` — lärare i samhällskunskap

**Profil:** Gymnasielärare i samhällskunskap som använder digitala källor i undervisningen om offentlig ekonomi.
**Syfte:** Bedöma sajtens värde i undervisningen och föreslå små tillägg som gör den mer användbar i skolan.
**Kärnfrågor:** Vilka delar fungerar som underlag för en lektion? Vad är för svårt eller för ytligt för en 17-åring? Stödjer sajten källkritik? Vilka begrepp i ämnesplanen (Samhällskunskap 1b) täcks, och vilka saknas?
**Metod:**
- Planera en lektion på 60 minuter med sajten som huvudkälla, och pröva varje moment på sajten.
- Pröva quizet, kalkylatorn och filmen som en elev, och notera var eleven fastnar.
- Matcha innehållet mot centralt innehåll i ämnesplanen och lista luckor.
- Föreslå högst fem små tillägg (till exempel diskussionsfrågor, en utskriftsvänlig sammanfattning, en ordlista för elever) som inte gör sajten till ett läromedel.
**Betyg:** pedagogiskt värde, nivå, stöd för källkritik.
**Avgränsning:** inte design i allmänhet.

### 10. `teknik` — webbutvecklare, prestanda och robusthet

**Profil:** Senior webbutvecklare med inriktning på prestanda, delning och robusthet.
**Syfte:** Säkerställa att sajten laddar snabbt, fungerar i alla vanliga webbläsare och delas korrekt.
**Kärnfrågor:** Hur stor är sidan och hur lång tid tar den att bli användbar på en långsam mobilanslutning? Vad händer utan JavaScript? Fungerar Safari på iPhone? Är metadata, delningsbilder och direktlänkar korrekta? Finns fel i konsolen?
**Metod:**
- Mät sidvikt (okomprimerat och komprimerat) för `index.html`, `img/scener.svg`, typsnitt och bilder. Kör Lighthouse om det finns tillgängligt (`npx lighthouse` kräver nätverk) och redovisa poäng för prestanda, tillgänglighet, bästa praxis och SEO.
- Simulera långsam anslutning med CDP (`Network.emulateNetworkConditions`) och mät tiden till första kvitto.
- Kontrollera Open Graph, JSON-LD (giltighet), titel och beskrivning per vy, `og:image` och delningslänkar.
- Pröva alla typer av direktlänkar och URL-parametrar.
- Kör `node scripts/kontroll.mjs` och `node scripts/lankar.mjs`, och läs konsolen på alla vyer.
**Betyg:** prestanda, robusthet, delning och metadata, kodhälsa.
**Avgränsning:** inte innehåll.

---

## Del D. Sammanställning (samordnaren)

Skriv `docs/granskning-2026-11/SAMMANSTALLNING.md` på svenska:

1. **Helhetsbild** (högst sex meningar), och en tabell med varje rolls betyg.
2. **Sammanslagna fynd:** fynd som flera roller tagit upp slås ihop till ett, med alla fyndnummer och roller angivna. Ett fynd som tre roller hittat väger tyngre.
3. **Prioriterad åtgärdsplan** (högst 30 punkter), sorterad efter allvar och sedan effekt per insats. För varje: vad, varför, fyndnummer, roller, allvar, insats, typ och var i koden. Dela upp i:
   - **Rättelser före nästa publicering** (kritiska och höga rättelser).
   - **Förbättringar** (kan göras utan beslut).
   - **Beslut för ägaren** (med samordnarens rekommendation och vad som talar för och emot).
4. **Motsägelser mellan roller** (till exempel förenkla kontra förklara mer), med samordnarens rekommendation.
5. **Det som ska bevaras**, enligt flera roller.
6. **Frågor till ägaren**, samlade och utan dubbletter.
7. **Metod:** vilka roller som deltog, vad som inte kunde testas och varför.

Svara ägaren kort: helhetsbilden, de tio viktigaste åtgärderna, besluten som behövs och sökvägen till sammanställningen.
