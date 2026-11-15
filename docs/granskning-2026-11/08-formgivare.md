# Granskning 8: formgivare (art director och informationsdesigner)

Granskare: roll 8 `formgivare`, 2026-11-14. Underlag: `index.html` (identisk med den publicerade sidan, kontrollerat med `cmp`), skärmbilder på 1280 px och 390 px, mätningar i en lokal kopia (se Metod).

## 1. Sammanfattning

Skatteplattformen har ett eget och starkt bildspråk: termokvittot, sedeln och papperssnittsscenerna gör sajten igenkännbar och lekfull utan att bli oseriös. Det som drar ned är grunden under ytan. Två olika innehållsbredder blandas i samma vy, vyhuvudet har tre element som tävlar om att vara störst, och det finns sju knappstilar, sex sorters flikar, 48 hårdkodade textstorlekar och 20 olika hörnradier, trots att designsystemet har sju steg. Diagrammen är bäst där de är nyast (Jämförelser) och svagast där de är SVG med fast bredd: på mobil krymper känslighetsdiagrammets text till cirka 5 px och budgetens staplar får en tredjedel av bredden. De tre viktigaste åtgärderna är ett gemensamt raster, en tydligare hierarki i vyhuvudet och två diagrammönster som håller på 390 px. Alla tre finns som skisser.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Hierarki | 3 | Startsidan har en tydlig ordning, men i de sex andra vyerna är vynamnet (40 px) lika stort som första avsnittsrubriken och mindre än ledsiffran (54 px). |
| Enhetlighet | 3 | Färg, typsnitt och bildspråk är konsekventa, men raster, knappar, flikar, radier och textstorlekar har glidit isär (se fynd 01, 06, 07, 12). |
| Diagramkvalitet | 3 | Jämförelsernas punktskalor och staplar från noll är föredömliga; känslighetsdiagrammet, budgetstaplarna på mobil och dubbla skattekvotsdiagram drar ned. |
| Karaktär | 4 | Kvittot, hundralappen och scenerna är unika och bär tonen; prislistans piller, webbläsarblå länkar och Framtids lösa kort känns generiska. |
| Mobil | 3 | Svepbara kortrader och menyn fungerar, men startkvittot hamnar tre skärmar ned och flera SVG-diagram har oläslig text. |

## 3. Det som fungerar (bevara)

- **Termokvittot och sedeln.** Ovanliga, minnesvärda informationsbärare som gör en abstrakt fördelning konkret. Typografin (IBM Plex Mono, rivkant, streckkod) är genomarbetad.
- **Papperssnittsscenerna i vyhuvudena och Sex vägar in.** Ett enda bildspråk, samma ljus och skuggor, inga foton. Det ger sajten en egen röst.
- **Jämförelsernas "Alla mått i en bild".** Punktskala per mått, Sverige grönt, snittet streckat, värde och snitt i högerkolumnen, riktning ("sämre/bättre") utskriven. Det är god informationsgrafik och borde vara förebild för resten.
- **Diagramregeln** (grått för övriga, grönt för det texten handlar om, randigt för prognos) följs i nästan alla stapeldiagram, till exempel Försvar i budgeten och 2030-prognosen i Framtid.
- **Kategorifärgerna med pictogram** i hundralappen, kvittot och ämneskorten i Jämförelser: lätta att skilja, samma färg betyder samma sak.

## 4. Fynd

### formgivare-01: Två innehållsbredder i samma vy; vänsterkanten hoppar

- **Plats:** alla vyer utom Prislistan. `.container` (max 1080 px, rad 103) och `.cw` (max 1280 px, rad 104) används om vartannat: `.cw` i `#tldr`, `#hundralapp`, `#snabbfakta`, `#vem-gor-vad`, `#pristabell`, `#budget`, `#skatter`, `#scenarion`, `#livslopp`, `#sparande`, `#sensitivitet`, `#sa-arbetar-vi`, `#rattelser`, `#bildkrediter`; `.container` i heron, `#skuld-forsvar`, `#oecd`, `#sjukvard`, `#framtid`, `#kalkylator`, `#metod`, `#citat`, `#om-oss` och i vyhuvudet och menyn.
- **Belägg:** skärmbilder 1280 px. På `#start` börjar rubriken "Vad fan får vi för pengarna?" vid x ≈ 132 px, "Sex vägar in" och hundralappen vid x ≈ 32 px. På `#metod` ligger "Så räknar vi" vid 132 px och "Hur säker är beräkningen?" och "Så arbetar vi" vid 32 px i samma vy. På `#budget` ligger vyhuvudet vid 132 px och statsbudgeten vid 32 px. Luften mellan avsnitt varierar dessutom: 72 px i klass (`.budget-section`, `.framtid-section`, `.metod-section`, `.oecd-section`), 2rem, 2,5rem eller 3rem i inline-stilar.
- **Problem:** Logotyp, vynamn och rubriker delar inte vänsterkant. Ögat måste hitta en ny kant i varannan sektion, och sidan ser hopsatt ut snarare än redigerad.
- **Varför det spelar roll:** alla läsare på dator; det är den mest synliga skillnaden mellan sajten och en redaktionell publikation.
- **Förslag:** Ett innehållsmått. Ersätt `.cw` med `.container` överallt (eller låt `.cw` ärva 1080 px) och låt bara bakgrundsband (`--bg2`, citatbandet) gå kant i kant. Inför `--avsnitt-luft: 72px` (48 px under 640 px) och ta bort `style="padding:…"` på sektionerna. Diagram och kortrutnät som behöver mer bredd får gå till 1080 px, inte till 1280. Se skiss `skisser/08-raster-dator.png` och `08-raster-mobil.png` (HTML: `08-raster.html`).
- **Allvar:** hög. **Säkerhet:** hög (mätt). **Insats:** M. **Typ:** förbättring.

### formgivare-02: Vyhuvudet har tre konkurrerande toppnivåer och två ingresser

- **Plats:** vyhuvudet i alla vyer utom Start: `.vy-titel` (rad 1033), `.vy-led` (rad 978–981), `.vy-ingress` (rad 1034), genvägspillren; data i `VYER[*].led`.
- **Belägg:** `.vy-titel` = `clamp(2rem,5vw,var(--fs-avsnitt))` = 40 px; `.vy-led b` = upp till 3,4rem = 54 px; första `.s-title` i vyn = 40 px. Din ekonomi: "4 466 kr / i skatt per månad … Räkna på din egen lön och ålder nedan." följt av ingressen "Räkna på din egen skatt, se vad du får tillbaka …" (samma uppmaning två gånger). Före första knappen finns fem textnivåer och två metadata-rader i mono (källa, "Uppdaterad 5 november 2026"). Genvägarna är upp till sex piller som bryts på tre rader (Din ekonomi, Metod).
- **Problem:** Det största på sidan är ett exempeltal, inte vynamnet. Vynamnet och nästa avsnittsrubrik är lika stora, så sidan saknar en tydlig topp. Pillren ser ut som filter men är ankarlänkar.
- **Varför det spelar roll:** förstagångsbesökare som landar direkt i en vy från en delad länk; mobilläsare där vyhuvudet tar en hel skärm.
- **Förslag:** `.vy-titel` till `--fs-hjalte` (`clamp(2.6rem,6vw,4rem)`, som startsidans `h1`). Ledsiffran till `--fs-avsnitt` i en pappersruta med källa och datum på en rad. En ingress per vy (slå ihop `led.text` och ingressen). Genvägarna som en rad korta textlänkar under rubriken "På den här sidan" (svepbar på mobil; använd inte `<nav>`, se CLAUDE.md). Skiss: `skisser/08-vyhuvud-dator.png`, `08-vyhuvud-mobil.png`.
- **Allvar:** medel. **Säkerhet:** hög (mätt i CSS). **Insats:** M. **Typ:** förbättring.

### formgivare-03: Diagramtext under 11 px; känslighetsdiagrammet blir oläsligt på mobil

- **Plats:** tornadodiagrammet i `#sensitivitet` (rad 6720–6750): `W=680`, värden `font-size="9"`, "Utgångsläge" `font-size="10"`, SVG `width:100%;max-width:680px`. Även `renderLifecycle` (rad 6634–6650, `font-size="10"`), linjediagrammen i Framtid (rad 6175–6380), filmens `.svc-t` (rad 247, 10,5 px i viewBox).
- **Belägg:** Mätning av renderad textstorlek (fontstorlek × skalning av viewBox) i en lokal kopia vid 500 px fönsterbredd: `#sensitivitet` 13 textnoder på 6,2–7,6 px, `#livslopp` 29 noder på 10 px, `#skuld-forsvar` 13 noder på 8–10 px, `#vem-gor-vad` (filmen) 55 noder på 6,8–9,2 px. På 390 px skalas SVG-texten ytterligare cirka 0,78 gånger, så tornadons värden hamnar runt 5 px (se mobilskärmbild av Metod: "−38 tkr" är inte läsbart). På dator är tornadons värden 9 px, och diagrammet fyller bara halva bredden av sitt avsnitt.
- **Problem:** Bryter CLAUDE.md:s regel "Ingen text under 11 px". Siffrorna är diagrammets poäng.
- **Varför det spelar roll:** alla mobilläsare, och läsare med nedsatt syn (koppling till WCAG 1.4.4 överlåts till roll 7).
- **Förslag:** Rita tornadon i HTML (rader med etikett och två staplar kring en mittlinje) så att texten följer sidans typskala, med etiketten ovanför staplarna på mobil och teckenförklaringen vid diagrammet. För övriga SVG: räkna ut `font-size` som `11 / skala` eller använd `chartW()` med större textstorlek under 640 px. Skiss: `skisser/08-mobildiagram-mobil.png` (höger kort). Filmens text är egen formgivning (KANT nämner bara vad som döljs i stående format); bör ses över i samma veva.
- **Allvar:** hög. **Säkerhet:** hög för tornadon (mätt och sett), medel för filmen (mätt vid 500 px, inte vid 390). **Insats:** M. **Typ:** rättelse.

### formgivare-04: Stapeldiagrammen på mobil ger staplarna en tredjedel av bredden

- **Plats:** budgetens `renderBars` (rad 5102–5114) och `.brow` (rad 502–508, mobil rad 867: `grid-template-columns:120px 1fr 60px`); skatteutgifterna; samma mönster i Framtids `.ft-bar`.
- **Belägg:** På 390 px blir stapelytan cirka 150 px av 358; etiketter som "Sjukdom och funktionsnedsättning" bryts på två eller tre rader (mobilskärmbild av Budgeten). Varje stapel har dessutom ett ljust spår till 100 % (`.brow-t{background:var(--bg2)}`), vilket antyder ett tak som inte finns. Staplarnas grå är hårdkodad `#B9B3A6`, inte `--d-neutral2` (`#A39C8F`).
- **Problem:** Skillnaderna, som är diagrammets innehåll, blir små; spåret ger visuellt brus och en falsk referens.
- **Varför det spelar roll:** mobilläsare (majoriteten av delningstrafik).
- **Förslag:** Under 640 px: etiketten på egen rad ovanför stapeln, stapeln får hela bredden, värdet direkt vid stapelns ände. Ta bort spåret på alla bredder. Byt `#B9B3A6` mot `var(--d-neutral2)`. Skiss: `skisser/08-mobildiagram-mobil.png` och `-dator.png` (vänster kort).
- **Allvar:** medel. **Säkerhet:** hög. **Insats:** S–M. **Typ:** förbättring.

### formgivare-05: Startkvittot hamnar tre skärmar ned på mobil

- **Plats:** `#start`, heron: `.start-metod` (rad 1359, CSS rad 1173) ligger mellan knapparna och `#start-kvitto` (rad 1363).
- **Belägg:** Mobilskärmbild 390 px: kvittot börjar cirka 1 100 px ned. Mellan knappen "Hela kvittot och vad du får tillbaka" och kvittot ligger ett stycke på cirka 90 ord i 12 px grått.
- **Problem:** Sajtens starkaste bild, och svaret på frågan läsaren just ställt, skjuts bort av metodtext. Knappen "Hela kvittot …" syns innan man sett kvittot.
- **Varför det spelar roll:** alla förstagångsbesökare på mobil.
- **Förslag:** Flytta `.start-metod` under kvittot (bredvid `.start-kv-not`) eller lägg den i en `<details>` "Så räknar vi". På mobil: lönerutan, kommunvalet, sedan kvittot, sedan knapparna.
- **Allvar:** hög. **Säkerhet:** hög (sett). **Insats:** S. **Typ:** förbättring.

### formgivare-06: Sju knappstilar

- **Plats:** `.btn-p` (rad 354), `.btn-g` (rad 358, "Se vad saker kostar", vit utan synlig kant), `.vy-nasta` (rad 1040, kantlinje 16 px text), menyns "DELA" (versaler, svart kant), "Dela kvittot som bild" (liten grön kant med ikon), "Visa alla 34 prislappar"/"Visa alla 27 utgiftsområden" (`.pg-more`, rundad pill), "Spara & dela din profil som bild" (fullbredd grön), "Ladda ner alla antaganden" (grå fyrkant, Metod), "Börja gissa" (mörkgrön fyrkant).
- **Belägg:** skärmbilder av Start, Din ekonomi, Prislistan och Metod.
- **Problem:** Samma handling (dela) har tre utseenden; primär och sekundär går inte att skilja på form. Hörnradierna varierar mellan 4, 5, 6 px och helt rundat.
- **Varför det spelar roll:** igenkänning av vad som är klickbart och vad som är viktigast.
- **Förslag:** Tre stilar: primär (fylld grön, `--r-sm`), sekundär (grön kant, `--r-sm`), textlänk med pil. Dela-knappar alltid sekundär med ikonen `i-dela`. "Visa alla" som sekundär. Menyns "DELA" i gemener som övriga knappar.
- **Allvar:** medel. **Säkerhet:** hög. **Insats:** M. **Typ:** förbättring.

### formgivare-07: Sex sorters flikar och växlare; Framtids flikar är minst

- **Plats:** `.ft-tab` (rad 515, 0,72rem ≈ 11,5 px, padding 7 px), `.sv-tabs .ft-tab` (rad 770, 14 px, 40 px hög), Jämförelsernas flikar (pictogram och antal), budgetens "Alla/Välfärdsområden", hundralappens växlare i `--bg2`-ram, Lön/Pension/Egen firma (fyrkantig segmentknapp).
- **Belägg:** skärmbilder av Framtid, Jämförelser, Budgeten och Start.
- **Problem:** Samma funktion, sex utseenden. Framtids åtta flikar är svagast trots att de är vyns enda navigering.
- **Förslag:** Två komponenter: flikar (Jämförelsernas stil, 40 px höjd, 14 px text; används i Framtid, Sjukvården, Jämförelser) och växlare (segmentknapp som Lön/Pension, används för Alla/Välfärd, hundralappen, arbetar/studerar).
- **Allvar:** medel. **Säkerhet:** hög. **Insats:** M. **Typ:** förbättring.

### formgivare-08: Gröna rutor med kant bryter yt- och färgregeln

- **Plats:** `.solidarity-box` (rad 490: `background:rgba(46,125,92,.12);border:1px solid …`) med inline-etiketten "Så fungerar det" i egen kantram (rad 2774); `.stage-chip` "Student / ung vuxen" (rad 466, grön ton och kant, radie 4 px).
- **Belägg:** Din ekonomi, skärmbild 1280 och 390 px.
- **Problem:** CLAUDE.md: "Notisruta = `--bg2`, `--r-sm`, ingen kant" och "Grönt betyder aldrig en kategori" (livsfasen är en kategori). Grönt används här som dekor.
- **Förslag:** `.solidarity-box{background:var(--bg2);border:0;border-radius:var(--r-sm)}`, etiketten som `.card-label`. `.stage-chip` som neutral etikett (`--bg2`, `--ink2`) med pictogram.
- **Allvar:** låg. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### formgivare-09: Prislistans kategorietiketter använder linjeikoner och egna färger

- **Plats:** `CAT_ICO` (rad 3913) och `ico(CAT_ICO[c.cat])` i prislappen (rad 3880) och quizet (rad 4271); färger `.cat-helse{background:#DCE7E3;color:#17605E}` m.fl. (rad 391–395).
- **Belägg:** Prislistan, skärmbild: konturikoner (mössa, kors i ruta, bro) i tonade piller.
- **Problem:** CLAUDE.md säger att kategorier har fyllda pictogram (`pk-…`) och samma färg "i … prislistans etiketter". Här är det linjeikoner och hårdkodade toner som inte är `--k-*`.
- **Förslag:** Byt till `pk-utb`, `pk-vard` osv. via `pkMap`, färga pictogrammet med `--k-*` och lägg texten i `--ink2` på papper (ingen tonad bakgrund), som i hundralappens lista.
- **Allvar:** medel. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### formgivare-10: Nio källänkar i webbläsarens standardblått

- **Plats:** `#skuld-forsvar` (rad 2163, 2183 m.fl.: "Statsupplåning 2026:1", "Budgetpropositionen 2026, UO26", "Eurostat, offentlig skuld 2025") och `#framtid` (rad 2346 "Sveriges framtida befolkning 2026–2070", rad 2439 "OECD Revenue Statistics 2025", "Ekonomifakta", "SCB, nationalräkenskaperna …", "Lägesbild och statistik – tillgänglighet").
- **Belägg:** Mätning av beräknad färg: 9 länkar har `rgb(0, 0, 238)`. Det finns ingen global `a{}`-regel; varje sektion färgar sina länkar själv (rad 596, 626, 754, 780, 781, 924, 933, 1031).
- **Problem:** Ser trasigt ut och avviker från resten av källraderna (grönt).
- **Förslag:** En global regel: `a{color:var(--green);text-underline-offset:2px}` och `.ft-source a{color:inherit;text-decoration-color:rgba(26,24,19,.35)}`; ta sedan bort de sektionsvisa reglerna.
- **Allvar:** låg. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### formgivare-11: Framtidspanelerna saknar fast mall; skattekvoten visas två gånger

- **Plats:** `#framtid`, panelerna `ft-befolkning`, `ft-skatter` m.fl.
- **Belägg:** I fliken Skatter visas skattekvoten först som linjediagram (OECD-serien, Sverige 41,4 % 2024) och längre ned som stapeldiagram (SCB, 40,5 % 2025, staplar 43,1–40,5 som nästan inte skiljer sig åt). Faktakorten ligger i ett rutnät med tre kolumner men två kort, så en tredjedel är tom; enskilda kort ("Medellivslängd", "Regionernas resultat") står ensamma efter en källrad. Varje panel har två eller tre källrader. Kortsiffrorna har enheten som upphöjd serif (`+26 %till 2030`) i stället för etikettstilen.
- **Problem:** Samma storhet med två värden i samma panel ser ut som en motsägelse; layouten känns som lösa block.
- **Varför det spelar roll:** läsare som söker utvecklingen över tid; Framtid är den vy där diagram borde bära mest.
- **Förslag:** En mall per panel: ingress, ett huvuddiagram, högst tre faktakort i en rad, en källrad. I Skatter: behåll linjediagrammet och lägg SCB:s senaste värde som en mening ("SCB:s preliminära värde för 2025 är 40,5 %; SCB och OECD räknar olika") i stället för staplarna. Låt rutnätet vara `repeat(auto-fit,minmax(16rem,1fr))`.
- **Allvar:** medel. **Säkerhet:** hög (sett). **Insats:** M. **Typ:** förbättring.

### formgivare-12: Tokendrift: typskalan och radierna används sällan

- **Plats:** hela `<style>` och JS-genererade inline-stilar.
- **Belägg:** `var(--fs-…)` förekommer 34 gånger; 48 olika hårdkodade `font-size` i rem/px (vanligast .75rem 129 ggr, .78rem 54, .72rem 29, .8rem 24, .85rem 13, .82rem 10, .76rem 8, .74rem 7 …). 20 olika `border-radius` (2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 20, 24, 99, 999 px, 50 %) mot två tokens. 344 `style="`-attribut. `.vy-gv` (Sex vägar in) har 12 px radie och kant, mot regeln "kort = `--r`, ingen kant".
- **Problem:** Det är orsaken till fynd 06–08: när ett värde inte är en token glider det.
- **Förslag:** Mappa i ett svep: .72–.8rem → `--fs-liten` eller `--fs-etikett`; .82–.95rem → ny token `--fs-mindre` (14 px) om den behövs, annars `--fs-brod`; radier → `--r-sm`, `--r`, `--r-pill` (99 px). Lägg en kontroll i `scripts/kontroll.mjs` som räknar hårdkodade `font-size` och varnar om antalet ökar.
- **Allvar:** medel. **Säkerhet:** hög (räknat med grep). **Insats:** L. **Typ:** förbättring.

### formgivare-13: Citatbandet har raka citattecken

- **Plats:** `#citat`, rad 3066: `"Du finansierar också … samhällskontrakt."`
- **Belägg:** källkoden och skärmbild av Metod. Startsidans version av citatet (`.start-kv-citat`) saknar citattecken.
- **Problem:** Raka tecken ("") i 34 px kursiv serif ser maskinskrivna ut; svensk typografi använder ”…”. Citatet är ett av ägarens fasta beslut och förtjänar bästa möjliga sättning.
- **Förslag:** `”Du finansierar också andras barn, sjukvård och pension — det är innebörden av ett solidariskt samhällskontrakt.”` (svenska citattecken ” på båda sidor; orden och tankstrecket oförändrade). Överväg en avsändarrad under citatet i etikettstil ("Skatteplattformens utgångspunkt") så att det läses som sajtens hållning och inte som ett anonymt citat.
- **Allvar:** låg. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse (tecknen), beslut (avsändarraden).

## 5. De tre viktigaste åtgärderna

1. **Ett raster (fynd 01, skiss 08-1).** Den största synliga kvalitetshöjningen för minst arbete per vy: alla avsnitt på samma vänsterkant och samma luft mellan avsnitt. Det får sajten att se redigerad ut, och det gör de övriga åtgärderna enklare.
2. **Diagram som håller på mobil (fynd 03 och 04, skiss 08-3).** Text på 5 px och staplar på 150 px gör att mobilläsaren inte ser det sajten vill visa. Tornadon i HTML och etiketten ovanför stapeln är två återanvändbara mönster.
3. **Vyhuvudets hierarki och startkvittots plats (fynd 02 och 05, skiss 08-2).** Vynamnet ska vara störst, en ingress räcker, ledsiffran får en egen ruta med källa. På startsidan ska kvittot komma direkt efter lönerutan. Det påverkar de första sekunderna i varje vy.

## 6. Frågor till ägaren

1. Ska Jämförelser och Metod ha `--bg2` som bakgrund för hela avsnittet (i dag) när regeln är "ljust överallt"? Jag föreslår ljust och `--bg2` bara för band som avgränsar (till exempel "Om oss").
2. Vill du att citatet får en avsändarrad ("Skatteplattformens utgångspunkt")? Det bär citatet utan att ändra det.
3. Får vynamnet ta hjältestorleken (64 px) i alla vyer, så att startsidans rubrik inte längre är ensam om den?
4. Ska filmen följa regeln om minst 11 px text, eller räknas den som egen formgivning i likhet med kvittot och sedeln?

## 7. Metod och avgränsning

- **Underlag:** `index.html` lokalt, kontrollerad byte för byte mot https://wilhelm-wg.github.io/skatteplattformen/ (identiska). CLAUDE.md:s designsystem som norm.
- **Skärmbilder (cirka 22):** Chrome headless på 1280 px för alla sju vyer och `#ft-skatter`, `#livslopp`, `#sjukvard`, `#snabbfakta`, `#vem-gor-vad`; 390 px via en lokal testsida med en iframe på 390 px mot den publicerade sidan. `#skuld-forsvar` gick inte att fånga (innehållet tonas in vid rullning och blev tomt i headless). Den lokala servern på port 8778 nekades av miljöns behörighetskontroll, så jag använde den publicerade sidan och en lokal kopia med `<base href>` mot den.
- **Mätningar:** en lokal kopia av sidan (i `/tmp`, utanför repot) med ett skript som räknar länkar med standardfärg och renderad textstorlek (inklusive SVG-skalning) per sektion, läst med `--dump-dom`. Fönsterbredden blev i praktiken 500 px; värden för 390 px är omräknade (×0,78) och märkta. `grep` för tokens, radier, inline-stilar och containerklasser.
- **Skisser:** `docs/granskning-2026-11/skisser/08-raster.html`, `08-vyhuvud.html`, `08-mobildiagram.html`, var och en renderad till `-dator.png` (1280 px) och `-mobil.png` (390 px). De använder sajtens tokens, typsnitt och diagramregel. Scenen i skiss 1 är en platshållare.
- **Inte gjort:** detaljpanelen, delningsbilderna (canvas), quizet steg för steg, filmen kapitel för kapitel, dialoger, mörkt läge (finns inte), Safari. Kontrast och tangentbord lämnas till roll 7, språk till roll 6. Inga ändringar i `index.html`, ingen commit.
