# Granskning 7: tillgänglighet (WCAG 2.1 AA)

Granskare: roll 7, `tillganglighet`. Datum: 2026-11-14. Underlag: lokal kopia av `index.html` (7 128 rader), serverad på port 8777 och körd i Chrome 157 headless via CDP.

## 1. Sammanfattning

Sajten är i gott skick på kodnivå: axe-core 4.10.2 hittar inga fel i sex av sju vyer på dator, kontrastskriptet hittar 0 underkända textfall av cirka 4 000, och det finns ingen sidledsrullning vid 320 px. Det som brister är dynamiken, det vill säga vad som händer när man gör något. Detaljpanelen öppnas utan att fokus flyttas in i den. Flikarna i Framtid, Budgeten och Sjukvården visar fel vald flik för skärmläsare när man klickar eller följer en direktlänk. Vid vybyte hamnar fokus på `body` utan att något läses upp. Alla dessa går att rätta på under en timme var, och de ger störst effekt för tangentbords- och skärmläsaranvändare.

## 2. Betyg

| Princip | Betyg | Motivering |
|---|---|---|
| Uppfattbar | 4 | Kontrast, textalternativ och diagrambeskrivningar (`role="img"` med meningsfulla `aria-label`) håller hög nivå; avdrag för kapade kvittorader vid 400 % zoom och rubriker som bara är formaterade div-element. |
| Hanterbar | 3 | Allt går att nå med tangentbord och delningsfönstret är föredömligt, men detaljpanelen tar inte fokus, vybyten tappar fokus och två textfält saknar synlig fokusmarkering. |
| Begriplig | 4 | Språk anges (`lang="sv"`), vytitlar byts, etiketter finns på alla fält; ordlistans förklaringar är svåra att läsa med förstoring. |
| Robust | 3 | Bra ARIA-grund (dialoger, `aria-pressed`, levande regioner), men tillstånd uppdateras inte alltid: `aria-selected` på flikar, `aria-valuetext` på reglage och `aria-expanded` på mobilmenyn. |

## 3. Det som fungerar

- **axe-core utan fel** i Start, Din ekonomi, Budgeten, Prislistan, Framtid (alla åtta flikar) och Metod på 1 280 px, och i Jämförelsers alla sex flikar utom ett rubrikfel (se `tillganglighet-05`). Jämförelser-vyn, som stod som otestad i `KANT.md`, är därmed testad.
- **Kontrast:** `scripts/kontrast.js` ger 0 fall under 4,5:1 (3:1 för stor text) i alla vyer, med alla flikpaneler synliga, både vid 1 280 och 320 px.
- **Delningsfönstret** (`.sc-modal`): fokus flyttas till Stäng, fokusfällan håller, Escape stänger och fokus går tillbaka till knappen som öppnade det.
- **Rörelse:** `prefers-reduced-motion` stänger av alla CSS-övergångar (rad 94), och filmen hoppar över kamerarörelser, mynt och textövertoning (`reduce`, rad 1649). Filmen startar inte av sig själv och pausar när den rullas ur bild.
- **Hundralappens tårtbitar** är riktiga knappar i tillgänglighetsträdet (`role="button"`, `aria-pressed`, etikett som "Socialt skydd, 38 kronor"), och Jämförelsers flikar (`.oecd-tab`) sköter `aria-selected`, `tabindex` och piltangenter korrekt, även vid direktlänk.

## 4. Fynd

### tillganglighet-01. Detaljpanelen öppnas men fokus stannar kvar på sidan bakom

- **Plats:** Prislistan och Jämförelser (prislappar `.pc-btn` och `.jk-pris`), `openDetail()` rad 3797–3804; CSS `.detail-panel` rad 418–419.
- **Belägg:** Tangentbordstest: fokus på "Ett år i grundskolan", Enter. Panelen syns (skärmbild `/tmp/a11y7/dlg-detail.png`, fokusramen ligger kvar på kortet bakom panelen), men `document.activeElement` är fortfarande `.pc-btn`. 40 tryck på Tab: fokus lämnar panelen direkt och går vidare bland korten bakom. Samma sak från Jämförelsers prislapp. Felsökning: `focus()` på `.dp-close` misslyckas direkt och i `requestAnimationFrame`, men lyckas efter 50 ms. Med `prefers-reduced-motion: reduce` (inga övergångar) fungerar det. Orsaken är alltså att panelen ännu inte räknas som fokuserbar under `visibility`/`transform`-övergången när `focus()` anropas.
- **Problem:** Panelen har `role="dialog"` och `aria-modal="true"` men fokus kommer aldrig in, och fokusfällan (rad 3818–3825) gör ingenting eftersom fokus inte är i panelen. Tangentbordsanvändaren tabbar runt bland osynliga kort under den grå överlagringen. En skärmläsare får ingen signal om att en dialog öppnats. Escape och återgång fungerar.
- **Varför det spelar roll:** Prislapparna och jämförelsernas prislappar är en av sajtens kärnfunktioner. Det slår mot alla som använder tangentbord eller skärmläsare. `CLAUDE.md` säger att dialoger ska flytta fokus in, så det här är en regression.
- **WCAG:** 2.4.3 Fokusordning, 2.1.1 Tangentbord (i praktiken), 4.1.2.
- **Förslag:** Flytta fokus när panelen faktiskt syns, med en reserv om `transitionend` inte kommer:
  ```js
  const st = panel.querySelector('.dp-close');
  let klar = false; const fokus = () => { if(!klar){ klar = true; st.focus(); } };
  panel.addEventListener('transitionend', fokus, {once:true});
  setTimeout(fokus, 60);
  ```
  (Uppmätt: fördröjning på 50 ms räcker i Chrome 157.) Pröva också i Safari.
- **Allvar:** Hög. **Säkerhet:** hög (mätt i Chrome; Safari och Firefox inte prövade). **Insats:** S. **Typ:** rättelse.

### tillganglighet-02. Flikarna i Framtid, Budgeten och Sjukvården visar fel vald flik för skärmläsare

- **Plats:** `showFt()` rad 6115 och `showSjukv()` rad 6127; flikinitieringen rad 6762–6787 (`.ft-tabs`). Berör `#framtid` (8 flikar), `#skuld-forsvar` och `#sjukvard` (3 flikar).
- **Belägg:** Klick på "Skola" i Framtid: före `Befolkning:true/0 Vård:false/-1 Skola:false/-1`, efter `Befolkning:true/0 … Skola:false/-1` (oförändrat, fast Skola visas). Direktlänk `#ft-skola`: Skola får klassen `on` men `aria-selected="false"`, medan Befolkning fortfarande har `true`. Panelerna `.ft-panel` saknar `role="tabpanel"` och flikarna saknar `aria-controls` (`ft-forsvar:null:null`).
- **Problem:** `aria-selected` och `tabindex` uppdateras bara när man använder piltangenterna. Klick med mus, pekskärm (även VoiceOvers dubbeltryck, som skickar klick) och direktlänkar lämnar det gamla tillståndet kvar. Skärmläsaren säger "Befolkning, vald" medan Skola visas, och Tab leder till fel flik eftersom `tabindex="0"` ligger kvar på den gamla. Jämförelsers `showOecd()` gör rätt och kan användas som mall.
- **Varför det spelar roll:** Skärmläsaranvändare på mobil (VoiceOver), där flikar väljs med "klick", får motsägelsefull information i tre vyer.
- **WCAG:** 4.1.2 Namn, roll, värde; 1.3.1 Information och relationer.
- **Förslag:** Låt `showFt` och `showSjukv` sätta tillståndet som `showOecd` gör:
  ```js
  section.querySelectorAll('.ft-tab').forEach(b => { const on = b === btn; b.classList.toggle('on', on); b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
  ```
  Ge varje `.ft-panel` `role="tabpanel"` och `aria-labelledby`, och varje flik ett `id` och `aria-controls`. Se till att kodvägen för direktlänkar (`oppnaFlik`, rad 7088–7094, `btn.click()`) går genom samma funktion.
- **Allvar:** Hög. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### tillganglighet-03. Vybyte: fokus hamnar på `body` och inget läses upp

- **Plats:** `visa()` och `route()` i `initVyer`, rad 3295–3335.
- **Belägg:** Fokus på menylänken "Budgeten", Enter: `document.activeElement` blir `BODY`, sidan rullar till toppen och titeln byts till "Budgeten · Skatteplattformen". Nästa Tab hamnar på ordlisteknappen "utgiftsområden" mitt i Budgeten, efter vyrubriken, brödsmulan och innehållsförteckningen. Samma sak med "Nästa: Jämförelser →" längst ned i Prislistan (nästa Tab: "OECD" i sjukvårdstexten).
- **Problem:** Det är en ensidesapplikation där innehållet byts utan sidladdning. Skärmläsaren meddelar inte att en ny vy visas (titelbyten läses i regel inte upp), och tangentbordsanvändaren hoppar över vyns rubrik och innehållsförteckning.
- **Varför det spelar roll:** Det gäller varje navigering mellan de sju vyerna, för alla som använder skärmläsare eller tangentbord.
- **WCAG:** 2.4.3 Fokusordning, 4.1.3 Statusmeddelanden (stöd).
- **Förslag:** När vyn byts genom en användarhandling och det inte finns något annat scrollmål: ge vyns `h1` `tabindex="-1"` och flytta fokus dit (`h1.focus({preventScroll:true})`). Gör det inte vid första sidladdningen. Då läser skärmläsaren upp "Budgeten, rubrik nivå 1", och Tab fortsätter till brödsmulan.
- **Allvar:** Hög. **Säkerhet:** medel (fokusbeteendet är mätt; exakt uppläsning varierar mellan skärmläsare och kunde inte testas). **Insats:** S. **Typ:** rättelse.

### tillganglighet-04. Gissa först: fokus försvinner när quizet startar

- **Plats:** `initGissa`, `start()` rad 4327; `#gq-start` och `#gq-play` rad 1936–1957.
- **Belägg:** Fokus på "Börja gissa", Enter: `document.activeElement` blir `BODY` (knappen döljs). Första frågan ("Hemtjänst, ett år", skärmbild `/tmp/a11y7/quiz-numfocus.png`) läses inte upp. Efter "Visa svaret" flyttas fokus däremot korrekt till "Nästa fråga", och svaret står i en levande region.
- **Problem:** Skärmläsaranvändaren får ingen återkoppling på att frågan har kommit, och tangentbordsfokus tappas.
- **Varför det spelar roll:** Quizet är en ingång för nya besökare och för skolbruk (roll 9).
- **WCAG:** 2.4.3 Fokusordning.
- **Förslag:** Ge `#gq-q` `tabindex="-1"` och anropa `$('gq-q').focus()` i `ask()` vid första frågan. Då läses frågan upp och nästa Tab går till reglaget.
- **Allvar:** Medel. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### tillganglighet-05. Rubrikstrukturen: hoppade nivåer i Sjukvården och inga rubriker i Framtids kort

- **Plats:** `#sjukvard`, `.sv-par` rad 2252 och följande (`<h4>Vårdplatser som saknas</h4>` direkt under en `h2`); Framtid `.ft-card-title` (CSS rad 521, till exempel rad 2323 "80+ år: snabb ökning").
- **Belägg:** axe `heading-order` (måttlig) i alla tre sjukvårdsflikar: `#sjukv-kapacitet > .sv-par > div:nth-child(1) > h4`, `.sv-par4 > div:nth-child(1) > h4`, `#sjukv-tillganglighet > .sv-par > div:nth-child(1) > h4`. Det är det enda axe-felet i Jämförelser-vyn. Framtid-vyn har bara en rubrik (`h2` "Fler äldre, fler i vården …") för åtta flikar med cirka 30 kort, där korttitlarna är `div`.
- **Problem:** Skärmläsaranvändare navigerar ofta med rubrikerna. I Framtid går det inte att hoppa mellan korten, och i Sjukvården saknas nivå 3.
- **WCAG:** 1.3.1 Information och relationer; 2.4.6 Rubriker och etiketter; axe best-practice.
- **Förslag:** Byt `h4` till `h3` i `.sv-par` (justera CSS-väljaren). Gör `.ft-card-title` till `<h3 class="ft-card-title">` (samma utseende), och ge varje flikpanel en dold `h3` eller använd flikens namn som rubrik.
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### tillganglighet-06. Kvittoraderna kapas med "…" vid 320 px och 400 % zoom

- **Plats:** `.kv-rad span:nth-child(2)` rad 1140 (`white-space:nowrap; overflow:hidden; text-overflow:ellipsis`). Startkvittot, arbetstagarens och arbetsgivarens kvitto.
- **Belägg:** Vid 320 px bredd (motsvarar 400 % zoom på 1 280 px) är 4 rader i startkvittot och minst 10 i Din ekonomi kapade, till exempel "Sjukdom, barn och arbetslöshet" (214 px text i 156 px), "Äldre: omsorg och garantipension", "Föräldraförsäkringsavgift 2,00 %" och "Allmän löneavgift 12,62 %". Med WCAG:s textavstånd (1.4.12) kapas fem rader i arbetsgivarens kvitto även på dator. Ingen `title` eller annan väg till hela texten.
- **Problem:** Innehåll går förlorat visuellt vid förstoring. Det är ofta procentsatsen i slutet av raden som försvinner, alltså själva informationen.
- **Varför det spelar roll:** Gäller synsvaga som zoomar och alla med smal mobil. Kvittot är sajtens bärande grafik.
- **WCAG:** 1.4.10 Omflödning; 1.4.12 Textavstånd.
- **Förslag:** Låt etiketten radbryta i stället för att kapas: `white-space:normal; overflow:visible; text-overflow:clip`. Behåll kvittokänslan med `hyphens:auto` och lite mindre radavstånd (`line-height:1.25`) i `.kv-rad`. Alternativt: radbryt bara under 400 px.
- **Allvar:** Medel. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### tillganglighet-07. Två textfält saknar tydlig fokusmarkering

- **Plats:** Prislistans sökfält `#pgrid-search` rad 1961–1965; quizets svarsfält `.gq-num input` CSS rad 173.
- **Belägg:** Tabbgenomgång av Prislistan: `INPUT#pgrid-search` har `outline-style: none` vid fokus. Inline-stilen `outline:none` i elementet slår ut regeln `#pgrid-search:focus-visible{outline:2px solid var(--green)}` på rad 463. Kvar blir en kantlinje på 1 px som byter färg. Quizets fält har `outline:none` och en understrykning som ser likadan ut med och utan fokus (skärmbild `/tmp/a11y7/quiz-numfocus.png`).
- **Problem:** Den som använder tangentbord ser inte var fokus är.
- **WCAG:** 2.4.7 Synligt fokus (1.4.11 för fokusmarkeringens kontrast).
- **Förslag:** Ta bort `outline:none` ur sökfältets inline-stil (och gärna `onfocus`/`onblur`), så att regeln på rad 463 gäller. För quizet: `.gq-num:focus-within{box-shadow:0 2px 0 var(--green)}` eller `outline:2px solid var(--green); outline-offset:4px` på fältet.
- **Allvar:** Medel. **Säkerhet:** hög. **Insats:** S. **Typ:** rättelse.

### tillganglighet-08. Ordlistans förklaringar försvinner innan man hinner läsa dem med förstoring

- **Plats:** `initOrdlista`, `show()`/`hide()` rad 4075–4091.
- **Belägg:** `mouseout` från termen döljer rutan direkt (rad 4087). Rutan ligger 8 px nedanför termen, så pekaren kan inte flyttas in i den. Rutan stängs också vid varje scroll (rad 4091). Escape stänger (bra).
- **Problem:** Innehåll som visas vid hovring ska gå att föra pekaren över utan att det försvinner. Den som använder skärmförstorare måste ofta flytta pekaren för att se rutan, och då försvinner den.
- **WCAG:** 1.4.13 Innehåll vid hovring eller fokus (kravet "går att hovra").
- **Förslag:** Låt rutan vara kvar när pekaren är över den: dölj med en fördröjning på cirka 300 ms, avbryt fördröjningen vid `mouseenter` på `#term-pop` och dölj vid `mouseleave`. Stäng inte vid scroll om rutan öppnats med klick eller tryck.
- **Allvar:** Medel. **Säkerhet:** hög (kodläsning; beteendet är entydigt). **Insats:** S. **Typ:** rättelse.

### tillganglighet-09. Reglagen i Din ekonomi läser upp fel värde efter en delad länk

- **Plats:** `#s-age` och `#s-inc` rad 2667 och 2678; uppdateringen av `aria-valuetext` sker bara vid `input` (rad 6816–6817).
- **Belägg:** `?age=34&inc=400#kalkylator`: `s-age value=34 valuetext="22 år"`, `s-inc value=400 valuetext="300 000 kronor per år"`. Skärmläsaren säger "22 år" fast reglaget står på 34. Att skriva i lönefältet `#s-man` uppdaterar däremot texten korrekt.
- **Problem:** Värdet som skärmläsaren läser upp stämmer inte med det som visas, efter delade länkar och vid sidladdning med parametrar.
- **Varför det spelar roll:** Delade länkar är en uttalad funktion ("Dela min beräkning").
- **WCAG:** 4.1.2 Namn, roll, värde.
- **Förslag:** Lägg uppdateringen i en funktion och anropa den från `readURLParams()` och `updateCalc()`. Enklast: ta bort `aria-valuenow` och `aria-valuetext` ur HTML-koden och sätt dem bara i `updateCalc()`.
- **Allvar:** Medel. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### tillganglighet-10. ISK-tabellerna rullar i sidled men går inte att nå med tangentbord i alla webbläsare

- **Plats:** `.isk-tbl-wrap` (CSS rad 1011; HTML rad 2957 och 2971), Din ekonomi, `#sparande`.
- **Belägg:** axe vid 320 px: `scrollable-region-focusable` (allvarlig), 2 förekomster. Chrome från version 130 gör rullbara ytor fokuserbara själv, men Safari gör det inte.
- **Problem:** I Safari kan den som använder tangentbord inte rulla fram tabellens högra kolumner på smal skärm eller vid zoom.
- **WCAG:** 2.1.1 Tangentbord.
- **Förslag:** `<div class="isk-tbl-wrap" tabindex="0" role="region" aria-label="Tabell: skatt på ISK, rulla i sidled">` och en fokusram på omslaget.
- **Allvar:** Medel. **Säkerhet:** medel (axe-fynd; Safari inte prövad). **Insats:** S. **Typ:** rättelse.

### tillganglighet-11. Mobilmenyn: fel `aria-expanded` efter val, och Escape stänger inte

- **Plats:** `.nav-hamburger` rad 1312 (inline-`onclick`).
- **Belägg:** 390 px: öppna Meny med Enter (`aria-expanded="true"`). Escape: menyn är fortfarande öppen. Välj "Start": menyn stängs men `aria-expanded` står kvar på `"true"`. Knappen saknar `aria-controls`; dess namn läses som "☰ Meny" (tecknet ligger i `aria-hidden`, så i praktiken "Meny", vilket är bra).
- **Problem:** Skärmläsaren uppger att menyn är öppen när den är stängd. Menyn "Mer" på dator gör rätt (Escape, `aria-expanded`, `aria-controls`, rad 7071–7079) och kan användas som mall.
- **WCAG:** 4.1.2 Namn, roll, värde.
- **Förslag:** Flytta logiken till en funktion `setMeny(v)` som sätter klassen och `aria-expanded`; anropa den vid klick på menylänkar, vid Escape (och flytta då fokus till knappen) och vid klick utanför. Lägg till `aria-controls` som pekar på menylistans id.
- **Allvar:** Låg. **Säkerhet:** hög (mätt). **Insats:** S. **Typ:** rättelse.

### tillganglighet-12. Filmens kapitelknappar är 10–18 px breda på mobil

- **Plats:** `#kretslopp .chapters button` CSS rad 224 (`flex:1; height:28px`), nio knappar i `#kl-chapters`.
- **Belägg:** axe `target-size` vid 320 px: 9 knappar på 10,4 × 28 px. Vid 390 px: 18 × 28 px. `CLAUDE.md` anger minst 24 px.
- **Problem:** Svåra att träffa för den med nedsatt motorik. Det finns andra vägar (spela/pausa och piltangenter), så det är inget hinder, men det bryter mot sajtens egen regel och mot WCAG 2.2.
- **WCAG:** 2.5.8 Målstorlek (WCAG 2.2 AA; inte krav i 2.1).
- **Förslag:** I stående mobilformat: visa kapitlen som en rad på 3 × 3 eller som "Föregående/Nästa kapitel"-knappar på 44 px, och behåll den tunna förloppslinjen som dekor (`aria-hidden`).
- **Allvar:** Låg. **Säkerhet:** hög. **Insats:** M. **Typ:** förbättring.

### tillganglighet-13. Delningsfönstrets knappar inleds med symboltecken som läses upp

- **Plats:** `#sc-overlay` rad 3346–3359: "⬛ Inlägg (1:1)", "▬ Story (9:16)", "⬇ Ladda ner", "↗ Dela".
- **Belägg:** Tecknen ligger direkt i knapptexten utan `aria-hidden`. VoiceOver läser till exempel "svart stor kvadrat, Inlägg" och "nedåtpil, Ladda ner" (beteendet är känt; inte prövat med skärmläsare här). `CLAUDE.md` säger att ikoner ska användas i stället för emoji och symboltecken i innehållet.
- **Problem:** Brus i uppläsningen, och avsteg från sajtens ikonregel. Bakgrunden görs inte heller `inert` när fönstret är öppet (fokusfällan finns, men skärmläsarens bläddringsläge kan nå sidan bakom i webbläsare som inte respekterar `aria-modal`).
- **WCAG:** 1.1.1 Icke-textuellt innehåll (stöd); best-practice.
- **Förslag:** Byt tecknen mot `ico('download')`, `ico('share')` med `aria-hidden="true"`, eller lägg dem i `<span aria-hidden="true">`. Sätt `main.inert = true` medan fönstret och detaljpanelen är öppna.
- **Allvar:** Låg. **Säkerhet:** medel. **Insats:** S. **Typ:** förbättring.

## 5. De tre viktigaste åtgärderna

1. **Flytta fokus in i detaljpanelen (`tillganglighet-01`).** Det är en regression i en av sajtens mest använda funktioner, den stänger i praktiken ute tangentbordsanvändare från panelens innehåll, och rättelsen är några rader.
2. **Rätta flikarnas tillstånd i Framtid, Budgeten och Sjukvården (`tillganglighet-02`).** Tre vyer ger skärmläsare fel information vid varje klick. Mallen finns redan i `showOecd()`.
3. **Flytta fokus till vyns rubrik vid vybyte (`tillganglighet-03`), och samma princip i quizet (`tillganglighet-04`).** Vybyten är sajtens grundläggande navigering. Att flytta fokus till rubriken vid varje byte ger skärmläsaranvändaren samma orientering som en vanlig sidladdning.

Därefter kommer de snabba CSS-rättelserna: radbrutna kvittorader (`-06`) och fokusmarkeringar (`-07`).

## 6. Frågor till ägaren

- **Ska sajten sikta på WCAG 2.2 AA?** Det skulle göra målstorlek (2.5.8) och dolt fokus under den klistrade menyn (2.4.11) till krav. Det berör framför allt filmens kapitelknappar.
- **Får kvittoraderna bli två rader på smal skärm?** Det ändrar kvittots utseende något, men är den enklaste vägen till 1.4.10.
- **Vill du ha en tillgänglighetsredogörelse** (till exempel under Metod: "Så arbetar vi") med mål, kända brister och kontaktväg? Det är inget lagkrav för en privat sajt, men stärker förtroendet.

## 7. Metod och avgränsning

**Verktyg:** axe-core 4.10.2, hämtad från cdnjs till `/tmp/a11y7/` (utanför repot) och injicerad med CDP (`Runtime.evaluate`). Ingen fil lades i repot. Regeltaggar: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, `best-practice`. Chrome 157 headless styrdes med egna Node-skript över CDP (tangenthändelser via `Input.dispatchKeyEvent`, viewport via `Emulation.setDeviceMetricsOverride`, `prefers-reduced-motion` via `Emulation.setEmulatedMedia`, tillgänglighetsträdet via `Accessibility.getFullAXTree`). Kontrast mättes med `scripts/kontrast.js`.

**Testat:**
- axe på alla sju vyer vid 1 280 och 320 px. Viktigt: sektionerna tonas in med `IntersectionObserver` (rad 6795–6810) och har `opacity:0` tills de syns, och axe hoppar över osynligt innehåll. Därför kördes axe en andra gång med alla sektioner tvingade synliga; resultaten ovan kommer från den körningen.
- axe på varje flik: Jämförelser (6), Framtid (8), Sjukvården (3), plus detaljpanelen (från Prislistan och Jämförelser), delningsfönstret och quizet. Panelerna och fönstret gav inga axe-fel.
- Tabbgenomgång från sidans topp i alla vyer (37–98 fokusstopp per vy): fokusmarkering (`outline`/`box-shadow`), osynliga mål och mål i `aria-hidden`. Inga osynliga fokusmål hittades. Tårtbitarna saknar `outline` men har en egen markering (`stroke`, rad 1100), vilket godtogs.
- Dialoger: fokus in, fokusfälla, Escape, fokus tillbaka. Flikar: klick, piltangenter och direktlänkar. Hoppa-till-innehåll fungerar. Menyn "Mer" och mobilmenyn.
- Omflödning vid 320 px (`scrollWidth` = 320 i alla vyer), trunkerad text, textavstånd enligt 1.4.12, tryckytor vid 390 px. Länkar i löptext och ordlisteknappar räknades inte, eftersom de är undantagna som inline-mål.
- `prefers-reduced-motion` i CSS och i filmens JS.

**Skärmbilder** (11 st., utanför repot): `/tmp/a11y7/dlg-detail.png`, `dlg-share.png`, `quiz-1.png`, `quiz-focus.png`, `quiz-numfocus.png`, `m390-start.png`, `m390-oecd.png`, `m-menu.png`, `r320-start.png`, `r320-kalkylator.png`, `r320-oecd.png`, `skip.png`.

**Inte testat:**
- Riktiga skärmläsare (VoiceOver, NVDA, TalkBack). Uppläsningen i fynd 03 och 13 är därför bedömd utifrån tillgänglighetsträdet och känt beteende.
- Safari och Firefox. Fynd 01 och 10 bör prövas där.
- Riktig webbläsarzoom. 400 % simulerades med 320 px viewport, vilket motsvarar zoomen enligt WCAG.
- Kontrast i SVG-text och canvasbilder (kvittobilden, faktakortens delningsbilder). Delningsbilderna är dekorativa kopior av innehåll som också finns som text.
- Windows högkontrastläge (`forced-colors`).
- Ett axe-fall vid 320 px om `color-contrast` (vit text i tre faktakorts staplar, uppmätt 4,46:1 mot en blandad bakgrund `#3a8464`) togs inte med som fynd. Grundfärgen `#2E7D5C` ger 5,0:1 med vitt, och orsaken till blandningen kunde inte fastställas. Det bör kontrolleras vid nästa axe-körning.

Lokal server (port 8777) och Chrome stoppades efter testet. Inga filer i repot ändrades utöver denna rapport.
