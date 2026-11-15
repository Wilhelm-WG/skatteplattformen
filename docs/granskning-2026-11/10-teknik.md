# Granskning 10: teknik (prestanda, robusthet, delning)

Granskare: roll 10 `teknik`, 2026-11-14. Underlag: `index.html` i arbetskatalogen (md5 933d173b… vid start, samma som den publicerade sidan; ägarens ändringar under dagen, bland annat datumen, är inräknade där de berör fynden).

## 1. Sammanfattning

Sajten är tekniskt ren: inga konsolfel på någon vy, varken på dator eller mobil, `kontroll.mjs` ger 0 fel, URL-parametrarna kontrolleras och metadata är i stort sett korrekt. Det största problemet gäller iPhone med iOS 16.3 eller äldre. Där stoppar ett enda reguljärt uttryck (`svSiffror`, rad 7116) hela huvudskriptet, så kvittot, kalkylatorn och diagrammen aldrig ritas. Det näst största är tiden till första kvitto på långsam mobil: 3,4 s på Slow 4G och 7,4 s på 3G. Det beror främst på att typsnitten (320 kB) och förladdningen av `scener.svg` (88 kB) tävlar om bandbredden med HTML-filen, och det är den som bär kvittots kod. Dessutom hoppar sidan tillbaka till toppen om läsaren hinner scrolla innan sidan har laddat klart, och några delningsknappar misslyckas tyst.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Prestanda | 3 | Snabb första målning (0,4 s på Slow 4G), men kvittot dyker upp först efter 3,4 s (7,4 s på 3G), och sidan är 590 kB komprimerat med 17 000 DOM-element. |
| Robusthet | 3 | Inga konsolfel och säkra parametrar, men huvudskriptet stoppas helt i äldre Safari, sidan hoppar till toppen under laddning och fungerar inte alls utan JavaScript. |
| Delning och metadata | 4 | Korrekt Open Graph, giltig JSON-LD, canonical och delningslänkar som återskapar kvittot; bara kommunnamnet tappas och alla vyer ger samma förhandsvisning. |
| Kodhälsa | 3 | Kontrollskriptet är bra och id:n och interna länkar stämmer, men ett skriptblock på 3 750 rader gör att ett enda fel stoppar allt, och det finns död kod i parameterläsningen. |

## 3. Det som fungerar (bevara)

- **Inga konsolfel** på någon av 15 testade adresser (alla vyer och direktlänkar), varken på dator (1280 px) eller mobil (390 px). Inga misslyckade nätverksanrop.
- **Parameterläsningen är defensiv.** `readURLParams` (rad 4976) avvisar orimliga värden (`lon=-500`, `lon=2000000`, `age=200`, `barn=9`, `typ=constructor` ger standardkvittot och inga fel), och `canonical` pekar alltid på roten, så `?lon=`-länkar inte blir dubbletter i sökmotorer.
- **Metadata:** `og:image` är exakt 1200×630 med versionsparameter (`?v=4`) och alt-text, `twitter:card` är `summary_large_image`, JSON-LD går att tolka (`WebApplication`), och titel och beskrivning byts per vy (`visa`, rad ~3305).
- **Direktlänkar fungerar:** `#fakta-3`, `#kapitel-4`, `#gissa-ambulans`, `#jmf-sjukvard-9`, `#ordlista`, `#rattelser` öppnar rätt vy och scrollar till rätt ställe; okänd hash (`#finnsinte`) ger startsidan.
- **`scripts/kontroll.mjs`** (0 fel, 45 OK) fångar både modellfel och brutna interna länkar. Det är en bra grund att bygga vidare på (se teknik-09).

## 4. Fynd

### teknik-01. Huvudskriptet stoppas helt i Safari före 16.4 (iPhone med iOS 15 och tidiga iOS 16)
- **Plats:** `index.html` rad 7116 i `svSiffror` (sist i skriptblocket rad 3377–7131). Även rad 4057 i `initOrdlista` (`new RegExp('(?<!…')`).
- **Belägg:** Rad 7116: `.replace(/(?<![\d,.])(\d{1,3})((?:[  ]\d{3})+)(?![\d,]?\d)/g, …)`. Regex-lookbehind (`(?<!`, `(?<=`) stöds i Safari först från version 16.4 (mars 2023), se [caniuse: js-regexp-lookbehind](https://caniuse.com/js-regexp-lookbehind) (sekundärkälla) och [WebKit: Safari 16.4 release notes](https://webkit.org/blog/13966/webkit-features-in-safari-16-4/) (primärkälla). Ett regex-*literal* tolkas när skriptet läses in, så i äldre Safari blir hela blocket ett `SyntaxError`, inte bara den raden. Blocket innehåller `startKvitto`, kalkylatorn, prislistan, jämförelserna och diagrammen. Vyväxlaren ligger i ett eget block (rad 3207–3350) och fungerar, så sidan ser hel ut men är tom på innehåll.
- **Problem:** Alla som har iPhone 6s, 7 eller SE (första generationen) kan inte uppgradera förbi iOS 15 och får en sajt utan kvitto och utan siffror. Detsamma gäller den som inte har uppdaterat iOS 16.
- **Varför det spelar roll:** Det stänger ute en liten men verklig grupp, ofta äldre personer eller personer med begagnade telefoner, och de får inget felmeddelande.
- **Förslag:** Skriv om båda uttrycken utan lookbehind. Rad 7116 kan till exempel bli `.replace(/(^|[^\d,.])(\d{1,3})((?:[  ]\d{3})+)(?![\d,]?\d)/g, (m, f, a, b) => f + a + b.replace(/ /g, ' '))`. Rad 4057 kan fånga föregående tecken som en grupp på samma sätt, eller prövas i `try` med en reservvariant utan avgränsning. Lägg till en kontroll i `kontroll.mjs` (se teknik-09) som slår larm på `(?<=` och `(?<!` i källan.
- **Allvar:** Hög (stänger ute användare helt; andelen bedöms till någon procent av iPhone-trafiken). **Säkerhet:** hög för mekanismen, låg för andelen (inte testat på en riktig enhet). **Insats:** S. **Typ:** rättelse.

### teknik-02. Första kvittot dröjer 3,4 s på långsam mobil, mest för att typsnitten och scenfilen tar bandbredden
- **Plats:** `<head>` rad 60 (`<link rel="preload" href="img/scener.svg" as="fetch">`) och rad 63 (Google Fonts: Source Serif 4 upprätt och kursiv med axlarna `opsz` och `wght`, Inter, IBM Plex Mono). Kvittot ritas av `startKvitto` (rad 4569) i skriptblocket sist i filen.
- **Belägg (mätt med CDP, mobil 390 px, 4× CPU-strypning, gzip som på GitHub Pages):**

  | Profil | Första målning | Scener inlagda | DOMContentLoaded | **Kvitto synligt** | TBT |
  |---|---|---|---|---|---|
  | Bredband | 0,16 s | 0,21 s | 0,21 s | 0,16 s | 26 ms |
  | Slow 4G (150 ms, 1,6 Mbit/s) | 0,42 s | 2,28 s | 3,39 s | **3,41 s** | 223 ms |
  | 3G (300 ms, 0,7 Mbit/s) | 0,74 s | 5,14 s | 7,35 s | **7,38 s** | 200 ms |
  | Slow 4G, utan scenfilen | 0,41 s | – | 2,83 s | 2,85 s | 252 ms |
  | Slow 4G, utan typsnitten | 0,42 s | 1,24 s | 1,78 s | 1,80 s | 221 ms |
  | Slow 4G, utan båda | 0,38 s | – | 1,29 s | 1,31 s | 168 ms |

  Överförda byte vid första besök: `index.html` 180 kB (gzip, 625 kB okomprimerat), `scener.svg` 88 kB (516 kB), typsnitt 321 kB (Source Serif 4 upprätt 122 kB och kursiv 130 kB, Inter 49 kB, Plex Mono 2×10 kB), totalt cirka 590 kB. Den kursiva serif-filen på 130 kB används på startvyn i tre element (citatet, logotypen och rubrikens "fan") och i nio CSS-regler.
- **Problem:** Rubriken syns snabbt, men kvittot, som är sajtens huvudsak, kommer först när hela HTML-filen har laddats. Typsnitten och den förladdade scenfilen tar bandbredd från HTML-filen. Att ta bort typsnitten sparar 1,6 s, och att ta bort scenfilen sparar 0,6 s.
- **Varför det spelar roll:** Den som öppnar en delad länk på mobilen ser en lönruta och ett tomt fält i flera sekunder. På 3G tar det mer än sju sekunder.
- **Förslag, i ordning efter effekt per insats:**
  1. Ta bort `<link rel="preload" … scener.svg>` (rad 60) och starta hämtningen av scenerna först efter att kvittot har ritats, till exempel i `load` eller med `requestIdleCallback` (med `setTimeout` som reserv i Safari). Scenerna är dekor och kan tona in.
  2. Självhosta typsnitten som WOFF2 med bara latinska tecken. Ta bort axeln `opsz` om den inte behövs, och hämta den kursiva serifen bara för de tecken som används (Google Fonts parameter `&text=`) eller ersätt den med en statisk vikt. Målet är under 120 kB typsnitt totalt.
  3. Lägg en färdigritad HTML-version av medianlönens kvitto direkt i `<figure id="start-kvitto">` (som `startKvitto` sedan ersätter). Kvittot syns då vid första målningen och utan JavaScript (se teknik-05).
- **Allvar:** Hög. **Säkerhet:** hög (mätt; Lighthouse kunde inte köras, se avsnitt 7). **Insats:** S för punkt 1, M för punkt 2 och 3. **Typ:** förbättring.

### teknik-03. Sidan hoppar tillbaka till toppen om man hinner scrolla innan den har laddat klart
- **Plats:** vyväxlaren, rad 3345: `window.addEventListener('load', () => { aktiv = null; route(); });`, och `scrolla` i `visa` (rad ~3318: `else if(byte) window.scrollTo(0, 0)`). Det första anropet `route()` när parsern når rad 3344 gör samma sak.
- **Belägg:** Mätt på 3G-profil, mobil: efter 3,5 s, medan sidan fortfarande laddar, scrollade jag 900 px med mushjulet (CDP `Input.dispatchMouseEvent`). Läget var `y=900`. Efter att sidan laddats klart var det `y=0`. Upprepat efter ägarens ändringar i `visa` samma dag, med samma resultat.
- **Problem:** Eftersom `aktiv` nollställs räknas varje anrop som ett vybyte, och då scrollar koden till toppen. På långsam anslutning kan läsaren hinna scrolla i 3–7 s (teknik-02) och förlorar då sitt läge.
- **Varför det spelar roll:** Mobilanvändare på långsam anslutning, de som redan väntar längst.
- **Förslag:** Scrolla vid laddningen bara om det finns ett mål i hashen, eller om läsaren inte har scrollat själv:
  `window.addEventListener('load', () => { if(location.hash && location.hash !== '#start' && scrollY < 50) { aktiv = null; route(); } });`
  och i `scrolla`: `else if(byte && !forsta) window.scrollTo(0, 0);`.
- **Allvar:** Medel. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### teknik-04. Delning misslyckas tyst, och i Safari kan delningen av snabbfakta tappa användarens tryck
- **Plats:** `faktaBild` (rad 4207–4246), `shareShareCard` (rad 6979), nav-knappens delning (rad ~6838 och ~6859), quizets delning (rad ~4318). Samtliga har `navigator.share(...).catch(()=>{})`.
- **Belägg:** `faktaBild` gör `await Promise.all([... document.fonts.load(...)])` (rad 4210), ritar en bild på 1080×1350 eller 1080×1920 och anropar `navigator.share` inuti `c.toBlob(...)`. Delningen sker alltså efter två asynkrona steg från trycket. Safari kräver att `navigator.share` anropas med en färsk användaraktivering ([MDN: Navigator.share, Exceptions: NotAllowedError](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)) och avvisar annars med `NotAllowedError`. Felet fångas av `catch(()=>{})` och ingenting händer.
- **Problem:** Om typsnitten inte redan är laddade, eller om telefonen är långsam, händer ingenting när man trycker "Dela" på ett faktakort: ingen delningsruta, ingen nedladdning och inget meddelande. Samma tysta beteende gäller om delningen nekas av andra skäl.
- **Varför det spelar roll:** Delning är sajtens spridningsväg, och just på iPhone är risken störst.
- **Förslag:** Förbered bilden innan användaren trycker (rita den när kortet visas, eller ladda typsnitten i förväg), och skilj avbrott från fel i alla delningsanrop:
  `navigator.share(data).catch(e => { if(e.name !== 'AbortError') laddaNer(); });`
  där `laddaNer` är den befintliga reservvägen (nedladdning, eller att kopiera länken och visa "Länk kopierad").
- **Allvar:** Medel. **Säkerhet:** medel (koden är verifierad, men det kunde inte provas i Safari på iPhone). **Insats:** S. **Typ:** förbättring.

### teknik-05. Utan JavaScript syns ett tomt kvitto, alla vyer staplade och knappar som inte gör något
- **Plats:** hela sidan; `<figure id="start-kvitto">` (rad 1363) är tom i HTML; det finns ingen `<noscript>`.
- **Belägg:** Skärmbild med JavaScript avstängt (CDP `Emulation.setScriptExecutionDisabled`, 390 px): `/tmp/teknik-nojs-start.png`. Sidan blir 35 966 px hög eftersom alla sju vyer visas efter varandra. Kvittot och hundralappen är tomma ytor, och flikarna Lön/Pension/Egen firma och "Hela kvittot …" gör ingenting.
- **Problem:** Det finns inget meddelande om att sidan kräver JavaScript, och huvudinnehållet saknas helt. Samma tomma innehåll ser verktyg som läser HTML utan att köra skript (vissa läsarlägen, översättningstjänster och arkivering).
- **Varför det spelar roll:** Det gäller få personer, men för dem är sidan obegriplig.
- **Förslag:** (a) `<noscript><p class="notis">Kvittot och räknarna kräver JavaScript. Siffrorna och källorna finns under Metod.</p></noscript>` överst i `main`. (b) Ett färdigritat medianlönskvitto i HTML (samma åtgärd som teknik-02 punkt 3). (c) Dölj de inaktiva vyerna utan JavaScript med CSS: `html:not(.har-vyer) main > [data-vy]:not([data-vy="start"]):not([data-vy="metod"]){display:none}` (klassen `har-vyer` sätts redan på rad 3290).
- **Allvar:** Låg. **Säkerhet:** hög (testat). **Insats:** S för (a) och (c), M för (b). **Typ:** förbättring.

### teknik-06. Delad länk visar fel kommun för 170 av 290 kommuner
- **Plats:** `startDelLank` (rad 6891) och `buildShareURL` (rad 5021) sparar bara skattesatsen (`ks=`); `kommunVal` (rad ~4524) väljer första kommunen i bokstavsordning med samma sats.
- **Belägg:** `?lon=38300&ks=0.35#start` visar "Bjurholm — 35,00 %" i kommunväljaren, även om avsändaren valde Laxå eller Robertsfors (samma sats). 170 av 290 kommuner delar skattesats med minst en annan kommun (räknat ur `KOMMUNER`). Kvittots belopp blir rätt eftersom satsen är densamma.
- **Problem:** Mottagaren ser en annan kommun än avsändaren valde.
- **Varför det spelar roll:** Det sänker förtroendet ("jag valde ju Laxå") och gör länken svårare att förstå.
- **Förslag:** Optionernas värde innehåller redan namnet (`0.3500|Laxå`). Lägg till `&kommun=Laxå` i båda länkbyggarna och välj optionen på namnet vid inläsning, med `ks` som reserv.
- **Allvar:** Låg. **Säkerhet:** hög (testat). **Insats:** S. **Typ:** rättelse.

### teknik-07. Alla vyer och faktakort ger samma förhandsvisning när de delas
- **Plats:** `<head>` rad 13–30; routningen sker bara i hashen (`#fakta-3`, `#kalkylator`).
- **Belägg:** Tjänster som bygger förhandsvisningar (Facebook, LinkedIn, Slack, iMessage, WhatsApp) skickar inte hashen till servern och kör inte JavaScript. Titlarna som `visa` sätter per vy syns därför aldrig i förhandsvisningen, och en delad `#fakta-3` visar samma kort som startsidan.
- **Problem:** Faktakorten är gjorda för att delas (`faktaBild`), men en delad länk visar inte kortet.
- **Varför det spelar roll:** Den som tar emot länken ser ingen anledning att klicka på just det faktumet.
- **Förslag (beslut):** Generera små statiska sidor, till exempel `fakta/3/index.html` med egen `og:title`, `og:description` och `og:image` (bilden som `faktaBild` redan ritar, sparad som PNG), som omedelbart skickar vidare till `../../#fakta-3`. Detsamma kan göras för de sju vyerna. Det kräver ett litet byggsteg, eller att filerna skapas av `kontroll.mjs`.
- **Allvar:** Låg. **Säkerhet:** hög. **Insats:** M. **Typ:** beslut.

### teknik-08. Död kod och avvikande gränser i parameterläsningen
- **Plats:** `readURLParams` (rad 4976–5018) och `buildShareURL` (rad 5021).
- **Belägg:** (a) Parametern `kapital` och elementet `#s-kapital` finns i koden (rad ~5008, 5030, 5419, 6626, 6879), men elementet finns inte i HTML. Enligt `CLAUDE.md` är det ett medvetet val att koden ska läsa parametern "om den finns", men utan elementet ignoreras `?kapital=50` helt (den kommer inte med i `buildShareURL`). Ändå fäller den ut `.calc-mer` (rad 4985, liksom `hh`). (b) `inc` godtas upp till 2000, men reglaget `#s-inc` har `max="1200"`. `?inc=1500` ger reglaget 1200 men `hskIncome=1500`. (c) `?lon=1e5` ger ett kvitto på 1 kr (`parseInt('1e5')` = 1).
- **Problem:** Inga synliga fel för normala länkar, men koden lovar mer än den gör och är svårare att underhålla.
- **Förslag:** Bestäm om kapitalparametern ska fungera. Om den ska det: läs den till en variabel i stället för till det saknade reglaget, och ta med den i `buildShareURL`. Annars tar du bort grenen och uppdaterar `CLAUDE.md`. Ta bort grenen för `hh`. Sätt gränsen för `inc` till reglagets `max` och läs den därifrån (`+slider.max`). Läs `lon` med `Number()` och avrunda, eller avvisa allt som inte är bara siffror (`/^\d+$/`).
- **Allvar:** Låg. **Säkerhet:** hög (testat). **Insats:** S. **Typ:** rättelse.

### teknik-09. Ett skriptblock på 3 750 rader och inget skydd mot syntax som äldre webbläsare inte klarar
- **Plats:** `<script>` rad 3377–7131 (cirka 290 kB).
- **Belägg:** teknik-01 visar följden: ett enda uttryck som inte stöds stoppar allt innehåll. `kontroll.mjs` laddar funktionerna i Node, som stöder all modern syntax, och märker därför inte sådana fel.
- **Problem:** Varje framtida ändring kan på samma sätt tyst stänga ute en webbläsare.
- **Förslag:** (a) Dela blocket i några block efter ansvar (beräkning, startsidan, kalkylatorn, jämförelser, diagram, typografi), så att ett fel i till exempel `svSiffror` inte stoppar kvittot. (b) Lägg till ett steg i `kontroll.mjs` som, utan npm-beroenden (projektets regel), söker i varje skriptblock efter `(?<=`, `(?<!` och andra kända luckor för Safari 15 (`.at(`, `structuredClone`, `Object.groupBy`, `findLast`, `toSorted`) och ger fel om något hittas. Kör också `new Function(blocktext)` per block, så att syntaxfel i allmänhet upptäcks. (c) Skriv målplattformen i `CLAUDE.md`, till exempel "Safari 15 och senare".
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S för (b) och (c), M för (a). **Typ:** förbättring.

### teknik-10. Stort DOM-träd: 17 000 element, varav 7 600 från scenfilen och 7 400 i dolda vyer
- **Plats:** inläsningen av scener (rad 1258–1265: hela `scener.svg` läggs in med `innerHTML`); alla vyer ligger i DOM samtidigt.
- **Belägg:** Mätt på `#start`: 17 009 element totalt; scenbehållaren 7 623, dolda vyer 7 405, spritarna 187. Lighthouse varnar normalt vid mer än cirka 1 400 element ([Chrome for Developers: Avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size), primärkälla). Längsta långa uppgift 196 ms vid 4× CPU-strypning.
- **Problem:** Det kostar minne och stilberäkning vid varje vybyte och varje `resize` (som `visa` skickar ut). Det märks främst på äldre telefoner.
- **Förslag:** Lägg bara in de scensymboler som den aktiva vyn använder (dela upp `scener.svg` per vy, eller hämta symbolerna vid behov). Att rendera dolda vyer först vid första besöket är en större ändring som kan vänta.
- **Allvar:** Låg. **Säkerhet:** hög (mätt). **Insats:** M. **Typ:** förbättring.

### teknik-11. Delningsbilden är nära WhatsApps storleksgräns och saknar Twitter-alt
- **Plats:** `img/og.png` (270 814 byte), `<head>` rad 21–29.
- **Belägg:** 1200×630 PNG på 265 kB. WhatsApp visar enligt flera utvecklarrapporter inte förhandsbilder över cirka 300 kB (sekundärkälla, kunde inte verifiera mot officiell dokumentation). `twitter:image:alt` saknas, medan `og:image:alt` finns.
- **Förslag:** Komprimera bilden (till exempel `pngquant` eller `oxipng`, eller JPEG med kvalitet 85) till under 120 kB och höj `?v=4` till `?v=5`. Lägg till `<meta name="twitter:image:alt" content="…">` med samma text som `og:image:alt`.
- **Allvar:** Låg. **Säkerhet:** medel. **Insats:** S. **Typ:** rättelse.

### teknik-12. Felaktiga sökvägar ger GitHubs engelska 404-sida
- **Plats:** `404.html` saknas i repots rot.
- **Belägg:** `https://wilhelm-wg.github.io/skatteplattformen/finnsinte` ger HTTP 404 med GitHubs standardsida. `robots.txt` och `sitemap.xml` ger också 404; `robots.txt` måste i så fall ligga i domänens rot, alltså i ett annat repo.
- **Problem:** Gissade adresser som `/skatteplattformen/kalkylator` (utan `#`) leder till en engelsk återvändsgränd.
- **Förslag:** Lägg till en `404.html` som skickar vidare till startsidan och översätter sökvägen till en hash: `<script>location.replace('/skatteplattformen/#' + location.pathname.split('/').filter(Boolean).pop())</script>`, med en svensk länk som reserv. Lägg gärna till en enkel `sitemap.xml` med rot-adressen.
- **Allvar:** Låg. **Säkerhet:** hög. **Insats:** S. **Typ:** förbättring.

## 5. De tre viktigaste åtgärderna

1. **Ta bort regex-lookbehind på rad 7116 och 4057 (teknik-01)** och lägg till en syntaxkontroll i `kontroll.mjs` (teknik-09 b). Det tar en kvart och öppnar sajten för alla iPhones med iOS 15 och tidiga iOS 16, som i dag får en sajt utan innehåll.
2. **Gör första kvittot snabbare på mobil (teknik-02):** ta bort förladdningen av `scener.svg` och hämta scenerna efter att kvittot har ritats (en rad, cirka −0,6 s), självhosta och banta typsnitten (cirka −1,5 s) och lägg ett färdigritat medianlönskvitto i HTML. Kvittot är det delade länkar leder till, och på Slow 4G kommer det i dag efter 3,4 s.
3. **Stoppa hoppet till toppen under laddningen (teknik-03)** och **låt delningen falla tillbaka på nedladdning när den misslyckas (teknik-04).** Båda är små ändringar som tar bort irritationsmoment på långsamma telefoner och i Safari, där sajten mest används och delas.

## 6. Frågor till ägaren

1. **Vilka webbläsare ska sajten stödja?** Förslag: Safari 15 och senare, och de två senaste versionerna av Chrome, Firefox och Edge. Svaret styr hur strikt kontrollen i teknik-09 ska vara.
2. **Får typsnitten självhostas i repot**, och är den kursiva Source Serif viktig nog för att motivera 130 kB, eller räcker en statisk kursiv vikt (eller syntetisk kursiv) för citatet och logotypen?
3. **Vill du ha statiska delningssidor per faktakort och vy (teknik-07)?** Det kräver att några filer skapas av ett skript vid varje publicering.
4. **Din dator har NordVPN Threat Protection**, som bryter upp HTTPS-trafiken i Chrome och lägger in ett eget skript i sajten (se avsnitt 7). Det påverkar inte besökarna, men det gör att konsolen, nätverkspanelen och prestandamätningar i din egen Chrome visar saker som inte kommer från sajten. Vill du stänga av funktionen när du testar?

## 7. Metod och avgränsning

**Testat:**
- Sidvikt med `wc` och `gzip -9` lokalt och med `curl` mot GitHub Pages (som skickar gzip och `cache-control: max-age=600`). Den publicerade `index.html` var byte för byte identisk med den lokala vid start.
- Laddningstider med ett eget CDP-skript (Node 24 med inbyggd WebSocket mot headless Chrome 157), med `Network.emulateNetworkConditions`, `Emulation.setCPUThrottlingRate` (4×), mobil 390×844 och iPhone-UA. Jag mätte mot en lokal server på port 8780 som komprimerar med gzip som GitHub Pages och sätter samma `cache-control`. Mätpunkter: PerformanceObserver (paint, LCP, longtask, layout-shift) och en poll för när `#start-kvitto` får innehåll. Jag blockerade typsnitt och scenfil med `Network.setBlockedURLs` för att se hur mycket var och en kostar. Skripten ligger i `/tmp/teknik/` (`perf.mjs`, `konsol.mjs`, `param.mjs`, `hopp.mjs`, `nojs.mjs`).
- Konsolen (`Runtime.consoleAPICalled`, `exceptionThrown`, `Log.entryAdded`, misslyckade nätverksanrop och HTTP ≥ 400) på 15 adresser på dator och 7 vyer på mobil. Resultat: inga fel och inga varningar.
- URL-parametrar: 10 varianter för startkvittot och 6 för Din ekonomi, inklusive ogiltiga värden.
- Utan JavaScript: skärmbild `/tmp/teknik-nojs-start.png`.
- `node scripts/kontroll.mjs`: 0 fel, 45 OK, 5 info (Python-modellen, redan känt).
- `node scripts/lankar.mjs`: 16 av 60 länkar svarade 200, 3 gav 403 (OECD blockerar automatiska anrop och står som "pröva i webbläsaren"), och 41 gav tidsgräns (ETIMEDOUT). Tidsgränserna drabbade också `schema.org` och myndighetssajter som normalt svarar. Jag bedömer därför att de beror på testmiljön (se nedan) och inte på sajten: **kunde inte verifiera**, kör om skriptet på ett annat nät.

**Upptäckt om testmiljön:** När jag laddade den publicerade sajten i headless Chrome lades ett okänt skript in först i `<head>`, med slumpmässig sökväg på `wilhelm-wg.github.io`. Det gjorde egna anrop (POST av JSON och hämtning av CSS och typsnitt). TLS-certifikatet som Chrome fick var utfärdat av **"NordVPN Threat Protection"**, inte av GitHubs utfärdare. `curl` fick den orörda filen (samma md5 som lokalt), och skriptadressen ger 404 direkt från GitHub. Det är alltså datorns säkerhetsprogram som bryter upp trafiken, inte sajten. Därför gjorde jag alla prestandamätningar mot den lokala servern.

**Inte testat:**
- **Lighthouse:** jag fick inte behörighet att hämta `npx lighthouse`, så det finns inga Lighthouse-poäng. Mina CDP-mätningar (FCP, LCP, TBT, CLS 0,004, DOM-storlek) täcker de viktigaste prestandamåtten.
- **Riktig Safari och iPhone:** teknik-01 och teknik-04 bygger på källkoden och dokumenterat webbläsarstöd, inte på test på en enhet. Telefontestet bör omfatta en iPhone med iOS 15 eller 16.0–16.3 om det går.
- Firefox, delning till de verkliga tjänsterna (WhatsApp, Facebook) och skärmbilder av alla vyer (det täcker formgivaren och tillgänglighetsgranskaren).
