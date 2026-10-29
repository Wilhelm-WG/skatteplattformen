# Art director-analys och vidareutveckling av Skatteplattformens bildspråk

Du är art director för Skatteplattformen. Det är en oberoende svensk sajt som visar vad skatten betalar för, i kronor och med källa för varje siffra. Sajten finns på https://wilhelm-wg.github.io/skatteplattformen/ (en fil, `index.html`).

Ägaren gillar grunden i bildspråket. Det kan ändå bli **mer verklighetsnära, mindre naivt och skarpare**. Din uppgift är att analysera det som finns och föreslå hur det kan utvecklas, visuellt och konkret. Allt görs på designduken.

## Det här finns i dag

**Stil A, papperssnitt (scener):**
- platta former med en kort skugga (1,4/2,4 px, oskärpa 1,1, 28 %)
- ljus från vänster ovanifrån
- ett svagt pappersfiber
- högst fyra färger plus papper och himmel
- inga ansikten och ingen text i scenerna

**Stil B, pictogram:**
- fyllda tecken i 48×48 med hål (evenodd)
- en färg per kategori

**Kategorifärger:**

| Kategori | Färg |
|---|---|
| Socialt skydd | #5B3F8C |
| Vård | #2E7D5C |
| Utbildning | #1E4A8C |
| Infrastruktur | #B07B24 |
| Förvaltning | #66615A |
| Försvar | #3B5566 |
| Kommunbidrag | #B84A1E |
| Rättsväsende | #8E3816 |
| EU | #3E6FB0 |
| Arbetsmarknad | #4E7A63 |
| Räntor | #8C6A2C |
| Övrigt | #9A948A |

**Varumärkesgrönt och ytor:** #1B4D3E. Papper #FBFAF6, bakgrund #F4F1EA och beige #EAE6DC.

**Typsnitt:** Source Serif 4 för rubriker och stora tal, Inter för brödtext och IBM Plex Mono för källor och kvitton.

**Diagramregel:** grått för det mesta, grönt för det som texten handlar om, randigt för prognoser. "Tar emot" är grönt och "skatt" är sandfärgat (#C9A66B).

**Föremål med egen form:**
- **Hundralappen:** en tecknad sedel med en tårta och sju eller tio bitar.
- **Termokvittot:** rivkanter, monospace, rader med pictogram och en streckkod. Det är startsidans hjälte.

**Vyhuvuden:** sju scener i 360×270, symbolerna `vh-…`.

## Designduken

- **Artifact:** https://claude.ai/artifact/WwJco6UbwxXm9qiHnd7ESS (typen Design).
- **Lokala filer:** `$CLAUDE_JOB_DIR/tmp/canvas/project/`
  - `canvas.json`: ritytornas placering, titlar, ordning och anteckningar.
  - `*.dc.html`: en fil per rityta i formatet `<x-dc>…</x-dc>` med `<helmet>`, ett skript `text/x-dc` och `$preview`-mått. Utgå från en befintlig fil som mall.
- **Ritytor som finns:** Main (stil A), StilB, StilC, Kategorier, Pictogram, Regler, Hundralapp, HundralappMobil, Kvitto, Vyhuvuden, Tomma, StartKvitto och StartKvittoMobil.
- **Läsa på sajten:** du kan hämta https://wilhelm-wg.github.io/skatteplattformen/ med curl. Där finns spriten med alla `il-`, `pk-` och `vh-`symboler.
- **Kontrollrendering:** `python3 check/mk.py project/X.dc.html check/x.html`. Rendera sedan med Chrome headless, till exempel `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=B,H --screenshot=check/x.png file://…/check/x.html`, och titta på bilden.
- **Publicering:** anropa Artifact med `url` för duken, `root` = `$CLAUDE_JOB_DIR/tmp/canvas`, `file_path` = `…/project/canvas.json` och `files` = `{"project/Ny.dc.html": "project/Ny.dc.html", …}`. Publicera också `canvas.json` när du lägger till ritytor.

## Uppgift

1. **Analys (rityta "AD-analys").**
   - Bedöm varje del: scenerna, pictogrammen, sedeln, kvittot, vyhuvudena, typografin, färgerna och kompositionen på startsidan.
   - Säg vad som fungerar och vad som känns naivt, generiskt eller oskarpt. Var konkret, till exempel "människorna är för runda och barnsliga" eller "sedeln saknar tryckteknisk trovärdighet".
   - Visa skärmbilder eller utsnitt från sajten med korta kommentarer.

2. **Riktning (rityta "Riktning").**
   - Formulera en tydligare och mer vuxen riktning i några få principer.
   - Utgå från verkliga referenser: svensk informationsgrafik och offentlig formgivning, sedel- och frimärkstryck (guilloche, mikrotext, djuptryck), myndighetsblanketter, termopapper, tidningsgrafik och kartografi.
   - Behåll lekfullheten i tonen men höj hantverket.

3. **Förslag (två till fyra ritytor, före och efter).**
   - **Hundralappen:** mer trovärdig sedel. Guillochemönster, mikrotext, ett vattenmärkesfält, en serienummerrad och djuptryckskänsla, men tydligt en illustration utan att imitera en riktig svensk sedel. Ingen text som "ej betalmedel".
   - **Termokvittot:** ännu mer realistiskt. Termotryckets gråskala och ojämnhet, perforering, kassans logotyp och kvittonummer.
   - **Scenerna:** samma papperssnitt men skarpare. Mer verkliga proportioner, svenska detaljer (byggnader, fordon och skyltar utan text) och mer djup med fler lager. Ritas om två scener som exempel, till exempel vård och infrastruktur.
   - **Pictogrammen:** stramare rutnät, jämn linjetjocklek och optisk balans. Visa före och efter för fyra av dem.
   - **Typografi och detaljer:** siffernivåer, tabellsiffror, etiketter och en förfinad skala.

4. **Uppdatera kvittoskisserna StartKvitto och StartKvittoMobil så att de stämmer med sajten.**
   - Medianlönen är 38 300 kr. Skatten blir 7 692,00 och kvar efter skatt 30 608,00.
   - Raderna, med det de räcker till:

     | Rad | Belopp | Räcker till |
     |---|---|---|
     | Socialt skydd | 2 243 | ≈ 2 dagars hemtjänst för en äldre |
     | Hälso- och sjukvård | 1 291 | ≈ 37 minuter på intensiven |
     | Utbildning | 1 266 | ≈ 1½ skoldagar för en elev |
     | Polis, kultur, miljö, räntor | 891 | ≈ 1/49 av en polis månadslön |
     | Vägar, järnväg, näringsliv | 840 | ≈ 5 meter riksväg underhålls ett år |
     | Förvaltning | 819 | ≈ en hundradel av en riksdagsledamots månadsarvode |
     | Försvar | 342 | ≈ en 300 000-del av en Archer-pjäs |

   - Under kvittot står citatet i grön kursiv: "Du finansierar också andras barn, sjukvård och pension — det är innebörden av ett solidariskt samhällskontrakt."
   - Under citatet står raden om arbetsgivaravgiften: 12 034 kr.
   - Beloppen kan ändras med några kronor efter en omkalibrering. Det gör inget i en skiss.

5. **Sammanfattning (rityta "Att göra").**
   - En prioriterad lista med förslag: vad ger mest för minst arbete, vad kräver ny illustration, och vilken risk det finns för att något går förlorat.

## Regler

- **Bilder:** inga AI-genererade bilder och inga foton. Allt ritas som SVG.
- **Människor:** inga ansiktsdrag, inga stereotyper och variation i ålder och hudton.
- **Neutralitet:** inga partifärger, flaggor eller värderande symboler.
- **Text:** svenska och klarspråk. Tonen är neutral i sak men lekfull. Rubriken "Vad fan får vi för pengarna?" ska vara kvar.
- **Avgränsning:** ändra inte `index.html` eller något annat i repot `~/Desktop/skatteplattformen`. Du arbetar bara på designduken.
- **Ritytor:** behåll befintliga ritytor, utom StartKvitto och StartKvittoMobil som ska uppdateras. Lägg de nya ritytorna i ett nytt band på duken med en rubrik, till exempel "Steg 4: art director", under det som redan finns.
- **Kontroll:** rendera och titta på varje ny rityta innan du publicerar.
- **Slutrapport:** svara med en kort rapport på svenska. Ange vilka ritytor du lade till och dina fem viktigaste förslag i prioritetsordning.
