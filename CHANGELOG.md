# Ändringslogg

Alla anmärkningsvärda förändringar i Skatteplattformen dokumenteras här.

Format inspirerat av [Keep a Changelog](https://keepachangelog.com/sv/1.1.0/).
Versionsschema: löst SemVer — `v2.x` är nuvarande linje, mindre fixar
ackumuleras under `Unreleased` tills nästa namngivna release.

---

## [Unreleased]

### Added (2026-10-28) — Ledsiffror, snabba svar och tydligare quiz (granskningens punkt 5–8)

- **Ledsiffra överst i varje vy** (`VYER[*].led`): ett stort tal, en mening och
  källa, synligt på första skärmen även på mobil. Startsidan: 285 000 kr per
  invånare och år (SCB, 2024) under rubriken, kortare ingress och daterad rad
  ovanför rubriken. På mobil är vyfotot en smal remsa (3:1).
- **"Snabba svar"** på startsidan: sex vardagsfrågor (lön efter skatt,
  gymnasiet, förskolan, tandvården, pensionen, kollektivtrafiken) med svar som
  har direkt källa, angiven på kortet. Inga modellberäkningar.
- **"Visste du att"-snurran borttagen** (23 roterande fakta, 11 utan källa i
  texten). Snabbfakta är sajtens faktaformat.
- **"Gissa först"** heter nu "Gissa vad det kostar" och förklarar vad som
  händer. Första frågan är alltid kriminalvården, resten slumpas. Prislistan
  döljs medan man gissar så att svaren inte syns. Resultatet kan delas.
- **Jämförelsediagrammen:** övriga nordiska länder i dämpat grönt, Tyskland och
  USA i sandfärg, Sverige i mörkgrönt, med förklaring i varje diagram.
- **Din ekonomi:** lönen kan skrivas in per månad (`#s-man`, synkat med
  reglaget). Standardprofil 22 år och 25 000 kr i månaden.

### Fixed (2026-10-28) — De fyra första åtgärderna ur designgranskningen

- **Trovärdighet:** svensk sifferformatering överallt (decimalkomma, mellanslag
  före %), även i diagram och kalkylatorn (`svSiffror`, körs på all text och vid
  ändringar). Livsloppets axel i tkr i stället för "200k". Matmomsen 6 % från
  1 april 2026 (prop. 2025/26:55). Statsskulden 21 % av BNP även i
  räntekortet. Årsetiketten i toppen rättad. Statsbudgeten 1 442 Mdkr märkt som
  utfall 2024. Utbildning: 7,2 % (Eurostat, inkl. förskola) och 5,3 % (OECD)
  med källa. "37 prislappar". Läkartätheten jämförs för samma år.
- **Mobil:** brödsmulan i vyhuvudet ärvde menyns `nav`-stil (klistrad, lager
  100) och låg över den öppna menyn. Mobilmenyn vänsterjusterad. Den stängda
  detaljpanelens skugga syntes längs högerkanten.
- **Rubriker som svar:** Budgeten ("Försvaret är statens största
  utgiftsområde 2026") med tre sifferrutor (1 542 Mdkr, försvaret +33 %,
  −167 Mdkr), Sjukvården, Framtiden och Historiken. Korta namn i vyernas
  innehållsförteckning (`data-toc`).
- **Neutralitet:** omskrivna formuleringar i sjukvården ("blottas systemets
  svagaste länk"), statsbidragen, Gini-texten, vaccin, föräldrapenning,
  arbetsmarknaden och metabeskrivningarna ("exakt").

### Changed (2026-10-28) — "Sex vägar in" som fotokort, diskretare fotokrediter

- **"Sex vägar in"** visas som fotokort: vyns foto med siffran i vitt på bilden,
  vyns namn med pil och en fråga riktad till läsaren. Tre kolumner på dator,
  två på surfplatta, svepbar rad på mobil. Nya 560 px-versioner av fotona.
- **Fotokrediter:** i vyhuvudena en liten i-knapp i bildens hörn som visar
  fotograf och licens vid hovring eller fokus och leder till den nya sidan
  **Bildkrediter** (`#bildkrediter`, i Metod och källor, genereras ur
  `VY_FOTON`). Fotokorten på startsidan har en samlad rad "Foton: Wikimedia
  Commons · Bildkrediter". Länk även i sidfoten.

### Fixed (2026-10-28) — Återställda jämförelser och försvarets andel av BNP

- **Återställda jämförelser** som togs bort i steg 4 för att källorna inte gick att
  hämta automatiskt: vuxnas läsförmåga (PIAAC 2023), läkemedelsutgifter per
  invånare (2022), utgifter per elev (2022), förtroende för regeringen (2023),
  höga boendekostnader (Eurostat 2025), dödligt våld (UNODC 2023) och
  försvarsutgifter (Nato 2024). Nu 28 jämförelsediagram. Detaljpanelerna för
  grundskolan, polisen och försvaret visar motsvarande diagram; höftledspanelen
  har väntetiderna (OECD 2023) som faktarad.
- **Försvaret:** "3,5 % av BNP 2026" → 2,8 % 2026 och 3,1 % från 2028; 3,5 % är
  målet till 2030 (regeringen, september 2025). Värderande formulering i
  försvarskortet borttagen.

### Changed (2026-10-28) — Så arbetar vi, rättelser, faktakontroll och nya foton

- **Så arbetar vi** (`#sa-arbetar-vi`) och **Rättelser** (`#rattelser`) i vyn
  Metod och källor, länkade från menyn Mer och sidfoten. Rättelseloggen tar upp
  sakfel som rättats, med datum, vad som var fel och källa.
- **Faktakontroll:** stroke 7,2 → 4,9 % (OECD-snitt 8,3, 2023); hjärtinfarkt,
  Socialstyrelsens siffra inklusive dödsfall utanför sjukhus 13 → 21 %;
  bröstcancer 93 % (2020); utbildningsutgifter 7,1 % → 5,3 % av BNP (2022, cirka
  13 % över OECD-snittet); kriminalvård 1,4 → 1,5 Mkr per intagen och år, 107
  intagna per 100 000 (2024); läkare 4,7 per 1 000 (2024). Vårdplatser: 2 230
  saknade platser enligt Socialstyrelsen (maj 2024), inte "stängda enligt IVO";
  "43 % av patienterna" var svarsfrekvensen i Läkarförbundets enkät (var fjärde
  läkare skriver varje vecka ut patienter för tidigt). Läkartäthet per region
  enligt Socialstyrelsen. IVA: 50 000–80 000 kr per vårddygn (Svenska
  Intensivvårdsregistret), 4,5 platser per 100 000 (2022).
- **Skolans kostnader** enligt Skolverket 2025: grundskola 143 000, gymnasium
  148 100 och kommunal förskola 199 200 kr (även i modellens livsfaser).
- **Medianlönens skatt** 7 750 kr enligt skattetabell 32, med förklaring i filmen
  av varför skatten är cirka 20 % och inte 32 %.
- **Nya foton:** Riksdagshuset, Öresundsbron, Västra hamnen i Malmö, Stockholm
  City-stationen och stadsbibliotekets rotunda (de flesta kvalitetsmärkta på
  Wikimedia Commons); ambulansen behålls. Vyhuvudet har text till vänster och
  foto till höger i naturliga färger, med fotokredit som diskret etikett i
  bildens hörn. Duotonen är borttagen.
- **Citatet** om "solidariskt samhällskontrakt" ersatt med en neutral formulering: "Skatten betalar för skola, vård och pension som var och en använder under olika delar av livet."
  "Granskning av tredje part" i Om oss ersatt med en inbjudan till granskning.

### Changed (2026-10-28) — Steg 8: foton, sifferrutor, källrader och sidfot

- **Foton i vyhuvudena:** sex foton från Wikimedia Commons (ambulans, pendeltåg,
  klassrum, förskolegård, reningsverk, bibliotek), färgtonade i sajtens grönt med
  CSS (`VY_FOTON`). Kreditrad vid varje bild; förteckning i
  `img/foton/KREDITER.md`. 1 600 och 800 px breda, laddas först när de behövs.
- **Linjeillustrationer** (ikonserien i stort format) i sjukvårdsdelen och i
  livsloppsdiagrammet, där fria foton saknas.
- **Sifferrutor:** en accentfärg (grönt streck, siffran i svart) i "Skatter i
  korthet" och sjukvårdens nyckeltal i stället för fyra färger.
- **Källrader** i budgetdiagrammens ram, och samma avgränsade format för
  källraderna under övriga diagram.
- **Licens:** text, siffror och diagram under CC BY 4.0 (sidfot,
  `<link rel="license">`, strukturerad data). Tidigare stod "Data: CC0".
  Eurostats licens rättad till CC BY 4.0 i källistan.
- **Sidfoten:** vyerna, Så räknar vi, Nyckeltal, Ordlista, Ändringslogg,
  Rapportera fel (GitHub-ärende) och principerna (partipolitiskt oberoende, ingen
  reklam, ingen besöksstatistik, varje siffra har källa och år).

### Changed (2026-10-28) — Steg 7: vyer, kortare sektioner och ett namn per verktyg

- **Sju vyer i samma fil:** Start, Prislistan, Budgeten, Jämförelser, Din ekonomi,
  Framtid och historik samt Metod och källor. Adressens #-del avgör vyn
  (`#budget`, `#oecd`, `#kalkylator` …). Alla gamla länkar fungerar: en länk till
  ett id öppnar vyn som innehåller det. Varje vy har brödsmula, rubrik, ingress,
  datum, innehållsförteckning och en "Nästa"-länk. Sidtiteln följer vyn. Utan
  JavaScript visas allt på en sida.
- **Längd på mobil:** den längsta vyn är cirka 8 600 px (tidigare 32 900 px för
  hela sidan).
- **Ny meny:** Start, Prislistan, Budgeten, Jämförelser, Din ekonomi, Framtid och
  Mer (Metod och källor, Nyckeltal, Ordlista, Om oss).
- **Startsidan:** "Fyra siffror" ersatt av "Sex vägar in", en ingång per vy.
- **Budgeten:** de tio största utgiftsområdena med "Visa alla 27", korta namn på
  mobil. Diagramrubriken rättad från 2025 till 2026.
- **Jämförelser:** ett diagram åt gången med bläddring och lista över diagrammen.
- **Din ekonomi:** ålder och inkomst först; kommun, hushåll, pension och kapital
  under "Fler inställningar". Modellbeskrivningen under "Så räknar vi". Verktyget
  heter "Din ekonomi" överallt. Dela-knappen heter "Dela min profil" i Din ekonomi
  och delar annars den vy man står på.
- **Upprepningar:** IVA-dygnet finns nu bara i prislistan (och quizet som drar ur
  den), inte i toppen, startsidans siffror eller "Visste du att".
- Hopplänken går till innehållet i aktuell vy.

### Changed (2026-10-28) — Steg 6: tillgänglighet och läsbarhet

- **Kontrast:** text med för låg kontrast minskade från cirka 300 till 5 av
  2 000 textställen (resten är avsiktligt nedtonade eller rör sig). Grå metadata
  (`--ink3`) är mörkare (#66615A). Nya texttoner `--amber-t` och `--red-t` för
  ockra och röda siffror på ljus bakgrund. Mörk text på ljusa stapelsegment i
  faktakorten och "Vem gör vad?". I kalkylatorn (mörk bakgrund) är grå text
  ljusare och grön text ljusgrön.
- **Osynliga axlar:** axeltexter och stödlinjer i diagrammen under "Hur har det
  förändrats?" och i livsloppsdiagrammet var ljusa på ljus bakgrund. De är nu
  mörka. Kollektivtrafikens stapel i scenarierna var osynlig.
- **Diagram på mobil:** linjediagrammen ritas smalare på mobil (`chartW`) och
  texten är minst cirka 11 px. Etiketter som krockar döljs på mobil (`.m-hide`).
- **Tangentbord:** prislapparna öppnas med en knapp i rubriken. Detaljpanelen är
  en dialog: fokus flyttas till Stäng, stannar i panelen och går tillbaka till
  prislappen vid Escape. Synlig fokusmarkering på reglage och sökfält.
- **Skärmläsare:** filmens textruta har inte längre en växlande rubrik. Den
  roterande prislappen och "Visste du att" läses bara upp när användaren själv
  bläddrar. Reglagen läser upp "19 år" och "300 000 kronor per år". Rubriknivån
  i toppen är rättad (h3 → h2).
- **`scripts/kontrast.js`:** kontrastmätningen som användes, för framtida kontroller.

### Changed (2026-10-28) — Steg 5: nya faktakort, första lönen och delningsbild

- **Ny uppsättning faktakort (10):** kommunalskatten och medianlönen är kvar. Nya
  kort: din första lön (25 000 kr ger 4 484 kr i skatt, tabell 32), pension
  (18,5 % av pensionsgrundande inkomst), gymnasiet (148 100 kr per elev och år,
  Skolverket 2025), vårdgarantin (91 % inom tre dagar), var skatterna kommer
  ifrån (arbete 57 %, konsumtion 26 %, kapital 15 %, 2025), offentlig skuld
  (35,1 % mot EU 81,7 %), tandvården (gratis t.o.m. 19 år) och
  kollektivtrafiken (46 % betalas av biljetter och andra intäkter, 2025).
  Borttaget: korten som upprepade andra sektioner, IVA-dygnet (siffran kunde inte
  verifieras), skattekvoten, vårdplatserna och försvarsbudgeten.
- **"Vad händer med min första lön?"** i toppen öppnar kalkylatorn vid 19 år och
  25 000 kr i månaden (`forstaLon`).
- **Arbetsgivaravgift för unga:** kalkylatorn räknar med den tillfälligt sänkta
  avgiften 20,81 % på lön upp till 25 000 kr/mån för 19–23-åringar (född
  2003–2007, lön utbetald april 2026–september 2027). Ordlistan och NYCKELTAL
  är uppdaterade.
- **Delningsbild och ikon:** `img/og.png` (1200×630, `og:image` och
  `twitter:image`), `img/favicon.svg` och `img/apple-touch-icon.png`. Mallen för
  delningsbilden finns i `img/og-mall.html`.
- **Nya källor i `KALLOR`:** Trafikanalys, Årsredovisning för staten 2025,
  Skolverket 2025, skattetabell 32, Pensionsmyndigheten och 1177.

### Changed (2026-10-28) — Steg 4: enhetliga och neutrala internationella jämförelser

- **Samma sju länder i alla diagram:** Sverige, Norge, Danmark, Finland, Island,
  Tyskland och USA, alltid i den ordningen. Sverige grönt, övriga grå. Saknade
  värden visas som "uppgift saknas". Japan, Italien, Frankrike, Storbritannien och
  Polen är borttagna.
- **OECD-snittet som streckad referenslinje.** Där OECD inte publicerar ett snitt
  är det ett ovägt medel av medlemsländerna (antal anges när det inte är 38).
  Eurostat-mått visar EU-snittet i stället.
- **En källa och ett år per diagram,** med klickbar källa och raden
  "Källa · År · Högre/Lägre är bättre". Värderande omdömen är ersatta med
  "Sverige: plats X av Y".
- **Ny data (hämtad 2026-10-28):** Världsbanken WDI (hälsoutgifter, medellivslängd
  2024, spädbarnsdödlighet, läkare, vårdplatser, förnybar energi), Eurostat
  (undvikbar dödlighet, döda i vägtrafiken, friska levnadsår, återvinning),
  OECD (PISA 2025, utbildningsutgifter, eftergymnasial utbildning, Gini,
  barn i hushåll med låg inkomst, äldreomsorgspersonal), Transparency
  International, World Justice Project 2026 och Global Carbon Project.
- **Borttaget i brist på jämförbar källa:** läkemedelsutgifter, bröstcancer-
  överlevnad (diagram), vuxnas läskunnighet, bostadskostnad, järnvägens
  elektrifiering, tillit till regeringen, samt fem jämförelser i detaljpanelerna
  (utgift per elev, väntetid höftled, mord, fångar, försvar med Polen).
- **Sjukvårdssektionen:** jämförelsediagrammen återanvänder de nya diagrammen
  (`data-jmf`). Vårdgarantin i nyckeltalsraden rättad till 91 % (aug 2026).
  Medellivslängd harmoniserad till 84,1 år (OECD-snitt 81,2, 2024).
- **Kontrollskriptet** kontrollerar nu att varje jämförelsediagram har sju länder,
  minst fem värden, källa, https-länk och år.

### Added (2026-10-28) — Steg 3: en sanningskälla, klickbara källor och kontroll före publicering

- **`NYCKELTAL`:** kanoniska värden (medianlön, kommunalskatt, statsbudget,
  budgetsaldo, offentliga utgifter, statsskuld, räntor, Maastrichtskuld,
  skattekvot, brytpunkt, prisbasbelopp, arbetsgivaravgift, vårdgaranti,
  medellivslängd, 80+, skolkostnader) med år och källa. Visas som tabell under
  Metod ("Nyckeltal och källor", även via Mer-menyn).
- **`KALLOR` och automatiska källänkar:** 21 källor med länk. Källrader i hela
  sajten (diagram, prislappar, faktakort, Metod) får länkar till dokumenten
  automatiskt, cirka 90 länkar.
- **`scripts/kontroll.mjs`** (node, inga beroenden) körs före publicering:
  skattemodellen mot Skatteverkets tabell 32 kolumn 1–3 (39 punkter,
  5 000–60 000 kr/mån), inga gamla värden kvar, alla prislappar och faktakort
  har källa, modellens robusthet över ålder 0–100 och inkomst 0–2 000 tkr, samt
  skillnader mot Python-modellens datafil.
- **80+-diagrammen** visade fortfarande gamla prognoser (601 000 → 668 000 →
  895 000 → 1 080 000). Ersatta med SCB:s verifierade värden (≈ 650 000 år 2024,
  812 000 år 2030); 2040 och 2050 borttagna eftersom de inte kunde beläggas.
- **Datafiler:** fyra inaktuella filer som sajten inte läser och som motsade
  den flyttade till `data/arkiv/` (statsskuld, oecd_utfall, budget_analys_2025,
  framtidsutmaningar); det gamla kontrollskriptet till `scripts/arkiv/`.
  `data/README.md` beskriver vad som används.

### Fixed (2026-10-28) — Steg 2: pensionärer och modellens kanter

- **Pensionärsskatten enligt Skatteverket:** förhöjt grundavdrag för den som
  fyllt 66 (SKV 433 avsnitt 6.2) i stället för schablonen "+40 %", som gav
  cirka 50 % för hög skatt på pension. Lön efter 66 får det förhöjda
  jobbskatteavdraget. Allmän pensionsavgift avräknas i rätt ordning.
  Kontroll mot skattetabell 32 kolumn 1–3: ±1 kr för 10 000–60 000 kr/mån.
- **Lön och pension hålls isär:** pension ger inget jobbskatteavdrag och ingen
  arbetsgivaravgift (tidigare togs 21,21 % ut på pension vid 65). Särreglerna
  för äldre gäller från 66 år, inte 65.
- **Ingen tröskel vid 50 tkr:** skatten hoppade från 0 till 17 tkr; nu jämn.
- **Hushållstyp och inkomst** påverkar bara vuxenår, inte den egna barndomen.
  Livsloppets summering och jämförelsen mellan profiler använder samma
  justerade förmåner som kalkylatorn.
- **Medianlönen 460 tkr överallt:** kalkylatorns startvärde (tidigare 500),
  delningsfunktionen (340), livsloppets texter ("genomsnittsinkomst"). Texten
  om när man blir nettobetalare rättad till 26 års ålder (modellen).
- **Inkomstfördelningens texter** förankrade i SCB:s lönestrukturstatistik
  (median 38 300, medel 42 900 kr/mån) och brytpunkten, i stället för
  percentiler utan källa.

### Fixed (2026-10-28) — Steg 1: sakfel och räknefel från helhetsgenomlysningen

Alla nya värden är kontrollerade mot primärkälla innan de skrevs in.

**Sakfel**
- **Vårdgarantin:** "~50 % inom 3 dagar" och "0–7–90–90" → **91 %** medicinsk
  bedömning inom 3 dagar och **63 %** operationer/åtgärder inom 90 dagar
  (Socialstyrelsen, aug 2026); garantin 0–3–90–90. Regiondiagrammet utan källa
  och värderande text borttagna.
- **Skattekvoten:** historiken rättad efter OECD Revenue Statistics via
  Ekonomifakta (2000 50,0 · 2010 43,1 · 2015 42,9 · 2020 42,6 · 2024 41,4;
  2025 40,5 prel.). "−5,5 pp ≈ 370 Mdkr" borttaget. Jämförelser görs nu för
  samma år (2024: Sverige 41,4, OECD 34,1, Danmark 45,2).
- **Statsskulden:** 1 316 Mdkr/19 % → **1 430 Mdkr/21 %**, underskott 196 Mdkr
  (Riksgälden maj 2026). Räntorna: 27,0 Mdkr 2026, ≈ 31 Mdkr 2025, 45 Mdkr 2024
  ("dubblats sedan 2024" var fel). Jämförelsen "19 % mot EU 83 %" (olika mått)
  ersatt med Maastrichtskuld 2025: Sverige 35,1 %, EU 81,7 % (Eurostat apr 2026);
  Japan/USA borttagna ur den jämförelsen.
- **Skolkostnader** (Skolverket 2023): grundskola 152 000 → **133 000** kr/elev,
  gymnasium 148 000 → **141 500**, förskola 185 000 → **181 800**. Även
  modellens livsfaser (grundskola 133, gymnasium 142, förskola 110 tkr).
- **Polisen:** 3 400 → **4 600** kr/invånare (anslag 48,4 Mdkr 2026).
- **80+ år:** fel prognos ersatt: cirka 650 000 (2024) → **812 000 (2030), +25 %**
  (SCB, Sveriges framtida befolkning 2025–2070).
- **Medellivslängd:** 83,4 år mot OECD-snitt 81,1 (OECD 2023); SCB 2025 kvinnor
  85,6, män 82,5. **Spädbarnsdödlighet:** 2,0 per 1 000 (FN IGME 2024); det
  felaktiga "OECD-snitt 5,7" borttaget.

**Räknefel i modellen**
- **Marginalskatten** beräknas nu direkt ur skattemodellen (24 % upp till
  ≈ 478 tkr, 32 % därefter, 52 % över brytpunkten) i stället för den gamla
  avtrappningen av jobbskatteavdraget.
- **Tornadodiagrammet:** skickade kronor där modellen räknar i tkr (340 Mkr),
  använde fel kommunalskatt och ojusterade förmåner. Basfall nu medianlön;
  mittlinje och etikett syns.
- **Scenarierna:** "Kronisk sjukdom" räknade sjukvården två gånger;
  "Barnfamilj" beskattar nu två löner à 375 tkr, räknar båda föräldrarnas
  förmåner och hämtar skolkostnader ur prislistan. Felaktig not om negativt
  netto borttagen. "Ensamstående" på medianlön (460 tkr).

**Motsägelser mellan avsnitt**
- "Du betalar 285 000 kr/år" → offentliga utgifter per invånare.
- Brytpunkten ≈ 660 000 kr (643 000 är skiktgränsen); hög marginalskatt
  "55–65 %" → drygt 52 %; kriminalvård 1,2 → 1,4 Mkr överallt; ett IVA-spann
  (35 000–80 000 kr); "3 280 Mdkr" (dubbelräknade statsbidrag) → 3 011 Mdkr
  (2024); "24 andra prislappar" räknas nu ur prislistan; försvaret 2025
  ≈ 16 000 kr/inv; "mer än hela rättsväsendets budget" borttaget.
- Den nedladdningsbara modellfilen genereras nu ur konstanterna i koden
  (skatteregler, COFOG-andelar, statsskuld, kontrollvärde för medianlön).

### Changed (2026-10-28) — Mobilgenomgång och isotyp för hundralappen

- **Mobilsidan 25 % kortare** (≈ 43 600 → 32 900 px vid 390 px bredd):
  - Prislistan visar 6 prislappar på mobil och 12 på dator, med knappen
    "Visa alla 37 prislappar" (11 500 → 2 600 px på mobil). Filter, sökning och
    "Gissa först" når fortfarande alla.
  - Sifferrutorna, Skatter i korthet och korten i "Vem gör vad?" ligger i
    svepbara rader på mobil i stället för en lång kolumn.
- **Ordlistan** markerar inte längre ord i versala etiketter och ögonbrynsrader
  (gav en konstig knapp i Budgetens rubrikrad).
- **Läsbarhet och tryckytor på mobil:** större text i prislappar, snabbfakta,
  diagramflikar och etiketter; större tryckytor för heroprickarna,
  "Visste du att"-knapparna och kortens länkar. Belopp i stapeldiagram bryts
  inte längre ("13 818 $").
- **Isotyp:** "Din 100-lapp" i heron visas som 100 prickar (en per krona) i
  kolumnvisa band per ändamål, med förklaring. Respekterar reducerad rörelse.

### Changed (2026-10-28) — Språket: begripligare för fler

- **Ordlista med förklaringar:** 24 fackord och förkortningar (Mdkr, tkr, BNP,
  COFOG, jobbskatteavdrag, grundavdrag, utgiftsområde, statsbidrag,
  kommunalekonomisk utjämning, prisbasbelopp m.fl.) får en prickad
  understrykning första gången de förekommer i varje sektion. Hovra eller tryck
  för en kort förklaring på enkel svenska. Källrader, siffror och rubriker
  markeras inte.
- **Ordlistan samlad** under Metod (`#ordlista`) och länkad från "Mer" i menyn.
- **"Miljarder kronor" i stället för "Mdkr"** i de mest lästa ingresserna:
  Budgeten, Skatteutgifter, Sensitivitet, sammanfattningsrutorna och rutan i
  Skatter i korthet. Sifferrutor, diagram och tabeller behåller "Mdkr".

### Added (2026-10-28) — Snabbfakta: ett diagram, en mening

- Ny sektion `#snabbfakta` efter "Fyra siffror som ramar in Sverige": tio
  numrerade faktakort i en svepbar rad. Varje kort har en rubrik skriven som
  påstående, ett litet diagram med direkta etiketter, en kort text och en
  källremsa (källa · år · uppdaterad).
- Bara siffror som redan finns på sajten eller verifierats mot källa:
  kommunalskattens delning, kommunernas intäkter, regionernas vårdandel,
  kommunernas skolkostnad, hundralappen (COFOG), medianlönens skatt,
  IVA-dygnet, skattekvoten mot OECD, vårdplatser och försvarsbudgeten.
- Delning: egen länk per kort (`#fakta-3`) och "Spara som bild" som ritar en
  1080×1350-bild (4:5) i sajtens typografi; på mobil öppnas delningsmenyn.
- Data i `FAKTA` i `index.html` (en post per kort).

### Fixed (2026-10-28) — Kalkylatorn spillde över på mobil

- Kalkylatorns kolumn växte några pixel bredare än skärmen på smala telefoner
  (reglagen klipptes i högerkanten). Rättat med `min-width:0`.

### Added (2026-10-28) — "Gissa först" i prislistan

- Tio slumpade prislappar: gissa beloppet (reglage på logaritmisk skala
  100 kr–2 Mkr eller skriv in), se sedan rätt svar, hur långt ifrån du låg,
  vad du själv betalar och vardagsjämförelsen i skattetid.
- Saklig återkoppling ("45 % för lågt", "3 gånger för högt"), inga poäng eller
  belöningar. Sammanfattning efter tio frågor med de tre största missarna.
- Delbara länkar: `#gissa` startar, `#gissa-iva` m.fl. börjar med en viss
  prislapp. Knapp för att kopiera länken till aktuell fråga.
- Ingen lagring och inga jämförelser med andra läsare (sajten är statisk).

### Fixed (2026-10-28) — Skattemodellen: jobbskatteavdraget följer nu Skatteverket exakt

- `jobbskatteavdrag2024` hade en egen avtrappning över 35 000 kr/mån som inte
  finns i lagen. Skatten överskattades med 13 % vid 30 000 kr/mån och upp till
  30 % vid 50 000 kr/mån. Ersatt med den exakta formeln i Skatteverkets
  tekniska beskrivning SKV 433 (2026), avsnitt 7.5.2. Grundavdraget avrundas
  nu uppåt till hundratal kr. Kontroll mot skattetabell 32: 20 000–80 000 kr/mån
  stämmer på ±1 kr.
- Påverkar kalkylatorn, skattekvittot, livsloppet och alla siffror som räknas
  fram ur `annualTax`.
- **Medianlön** uppdaterad till 38 300 kr/mån (SCB lönestrukturstatistik 2025).
  Kortet "Effektiv inkomstskatt": ~23 % → **~20 %** (92 tkr av 460 tkr).
  Filmens belopp: skatt ≈ 7 700, arbetsgivaravgift ≈ 12 000 (varav ≈ 3 900
  pension), moms ≈ 3 800, netto ≈ 30 600 kr/mån.
- "Visste du att"-raden om kapitalskatt rättad: den påstod att en sjuksköterska
  på medianlön har 30 % effektiv inkomstskatt (blandade ihop effektiv och
  marginell skatt). Omskriven sakligt.

### Changed (2026-10-28) — Ordning, navigering och prislappar

- **"Vem gör vad?" med filmen** flyttad tidigare: direkt efter "Skatter i
  korthet", före Prislistan.
- **Navigeringen** följer sidans ordning och har fått "Vem gör vad". Framtid,
  Historik, Metod och Om oss ligger under "Mer" (alla visas direkt i
  mobilmenyn). Mobilmenyn tar över vid ≤ 1 020 px så att raden aldrig spiller
  över.
- **Prislapparna:** ny vardagsjämförelse ("Motsvarar inkomstskatten från en
  medianlön under 7 månader"), räknad ur skattemodellen. Källtexten ligger nu
  bakom en hopfällbar "Källa och beräkning".

### Changed (2026-10-28) — Filmen: mobillayout, mjukare flöde och stöd för röst

- **Mobil (≤ 640 px):** egen stående layout där elementen placeras om i en
  kolumn i stället för att krympas, med större text. En kamera panorerar mjukt
  per kapitel så att bild, text och knappar ryms på en telefonskärm.
- **Flöde:** element tonas in ett i taget, linjerna rör sig i pengarnas riktning,
  det som inte hör till kapitlet dämpas, texten tonar mjukt mellan kapitlen och
  mynten rör sig i jämn fart.
- **Röst (valfritt):** sätt `data-audio="audio/kretslopp/"` på `#kretslopp` så
  läses `01.m4a`–`08.m4a`. Varje kapitel blir minst lika långt som sitt
  ljudspår. Ljudknapp i kontrollraden (valet sparas), och
  `data-voice-credit` lägger till en rad om rösten i källtexten. Ingen röst är
  aktiverad ännu.
- Talmanus i `docs/FILM_MANUS.md`, skrivet för uppläsning.

### Added (2026-10-28) — Film: "Hur skattepengarna går runt"

Animerad förklaring (drygt en minut, åtta kapitel) överst i sektionen
"Vem gör vad?": lön → preliminärskatt och arbetsgivaravgift → moms →
Skatteverket fördelar (kommun 20,69 %, region 11,69 %, staten) → statlig
utjämning → verksamhet per huvudman → livslinjen → kretsloppet sluts.

- Ren SVG + vanlig JS, inga bibliotek; använder sajtens ikonserie och färger.
  All CSS skopad under `#kretslopp`, id:n prefixade `kl-`.
- Spela/pausa, kapitelreglage, tangentbord (mellanslag, pilar), direktlänk till
  kapitel (`#kapitel-3`), pausar när filmen scrollas ur bild, respekterar
  `prefers-reduced-motion`. Hela manuset finns som text för skärmläsare.
- Månadsbeloppen kontrollerade mot `annualTax(40, 390)`: skatt ≈ 7 300 kr,
  moms ≈ 3 200 kr, netto ≈ 25 200 kr. Arbetsgivaravgiften visas som hela
  31,42 % (≈ 10 200 kr) med fotnot om att ≈ 3 300 kr är ålderspensionsavgift.

### Added (2026-10-28) — Ny sektion "Vem gör vad?" (stat, region, kommun)

Ny sektion mellan Prislistan och Budgeten som förklarar ansvarsfördelningen
och hur skatten hittar fram:

- **Tre kort** för staten, regionen och kommunen med ansvarsområden, skattesats
  2026 (kommun 20,69 %, region 11,69 %, snitt 32,38 %) och skatteintäkter 2025
  (kommuner 614 Mdkr, regioner 349 Mdkr). Regionerna lägger ≈ 90 % på
  hälso- och sjukvård; kommunerna ≈ 39 % på skola och barnomsorg.
- **"Så hittar skatten fram"** i fyra steg: arbetsgivaren/momsen → Skatteverket
  → kommunalskatten betalas ut direkt till kommun och region varje månad →
  staten jämnar ut (237 Mdkr i generella statsbidrag och utjämning 2025).
- **Missuppfattningsruta:** kommunen tar inte in skatten åt regionen; båda
  delarna betalas till Skatteverket.
- **Intäktsdiagram** (skatt 65/66 %, generella statsbidrag 15/17 %, övrigt) och
  **exempel** på hur en hundralapp i kommunalskatt används (Malmö stad 2025).
- Länk till sektionen från rutan "Skatteintäkterna 2026 fördelas så här".

Källor: SCB (Kommunalskatterna 2026; preliminära bokslut 2025), Skatteverket,
regeringen.se "Så styrs Sverige", Ekonomifakta, Malmö stad, BP2026.

### Changed (2026-10-28) — Egen ikonserie ersätter emoji

- Ny inline-SVG-ikonserie (≈ 40 linjeikoner, 24×24, `currentColor`) och
  hjälpfunktionen `ico(namn)`. Påverkar inte enfilsprincipen.
- Emoji ersatta i prislistans filter och kategorietiketter, sjukvårdsflikarna,
  livsfaserna i kalkylatorn, COFOG-kvittot, hushållsknapparna, scenarierna,
  Om oss-rubrikerna och dela-knappen. Gränssnittstecken (✕, ✓, ☰) är kvar.

### Added (2026-10-27) — OECD-jämförelsen vidgad: läkemedel, utbildning & klimat globalt

Fortsättning på den globala "vs världen"-utbyggnaden (samma länderuppsättning:
USA, Japan, Tyskland, Frankrike, Italien + OECD):

- **Läkemedel per capita** (nytt sjukvårdsdiagram): USA 1 432 $, Tyskland 1 042,
  Japan 836, OECD/Frankrike 766, Italien 748, **Sverige 576** (bland lägst).
  USA betalar ~2,5× Sverige — främst högre priser, inte mer medicin.
  Källa: OECD Health Statistics (PPP, 2020–2022).
- **PISA 2025 globaliserad** (matematik + naturvetenskap): Japan utklassar
  (525/538); Sverige (464/485) i nivå med OECD, under Östasien; USA starkare i
  naturvetenskap (502) än matte (463). Källa: OECD PISA 2025.
- **Klimat & energi** (fliken "Miljö" omdöpt): CO₂ per capita globaliserad —
  Sverige 3,6 t, Frankrike 4,5, Italien 5,2, OECD 6,4, Tyskland 7,0, Japan 7,9,
  **USA 14,3** (~4× Sverige). Källa: IEA / World Bank (2023).

### Added (2026-10-27) — OECD-jämförelsen: Sverige vs resten av världen

Sjukvård-fliken var tidigare nästan bara nordisk. Fyra nya globala diagram med
en bredare länderuppsättning (USA, Japan, Tyskland, Frankrike, Italien + OECD),
all data från OECD Health at a Glance 2025 / Health Statistics:

- **Hälsoutgifter per capita** (PPP$, 2023): USA 13 818, Tyskland 8 503, Sverige
  7 364, Frankrike 6 848, OECD ~6 000, Japan 5 619, Italien 4 847.
- **Medellivslängd** (2025): Japan 84,1, Sverige 83,4, Italien 82,7, Frankrike
  82,5, OECD 81,0, Tyskland 80,8, USA 78,4.
- **Undvikbar dödlighet** /100k (2023, lägre=bättre): Japan 134, Italien 146,
  Sverige 150, Tyskland 195, OECD 237, USA 336.
- **Läkare per 1 000** (2023–24): Italien 5,8, Tyskland 4,8, Sverige 4,5, OECD
  3,9, USA 2,7, Japan 2,6.

Berättelsen: USA spenderar ~1,9× Sverige men lever kortast och har mer än dubbelt
så hög undvikbar dödlighet; Japan/Italien spenderar mindre än Sverige med minst
lika bra utfall. Nya färgklasser för länderna; den statiska (och nu felaktiga)
legenden borttagen eftersom varje stapel redan är namnmärkt. De nordiska
detalj­diagrammen (spädbarnsdödlighet, sängar, cancer) behålls oförändrade.

### Fixed/Changed (2026-10-27) — Kriminalvård-kostnad + systematiskt språksvep

- **Kriminalvård uppdaterad:** nya underlag visar högre kostnad. Dygnskostnad
  2024 (Kriminalvårdens regeringsuppdrag): anstalt 3 874 kr/dygn ≈ **1,41 Mkr/år**
  (tidigare 1,2 Mkr), häkte 3 563 kr/dygn. Lade till utbyggnadskontexten:
  anslaget mångdubblas (~11 → 28,5 Mdkr) när platserna byggs ut (~9 000 → mål
  ~27 000 till 2033) och nybyggda platser är dyrare än befintliga.
- **Systematiskt språksvep:** bytte ut abstrakta/AI-stela begrepp i synlig copy —
  "välfärdslogiken" → "mönstret i välfärden" / "hur välfärden fungerar" (3 ställen
  + diagrammets aria-label), engelska "Framing" → "hur det framställs". Rättade
  ett grammatikfel i solidaritetstexten ("Det årets nettoflöde" → "Årets
  nettoflöde") och en inkonsekvent stavning ("netto-mottagare" → "nettomottagare").

### Fixed/Changed (2026-10-27) — Data- och språkgranskning (användarfeedback)

- **Kapitalskatt-kortet rättat:** stod att 30 % "tas ut via ISK/KF" — vilket är
  fel. ISK/KF beskattas med en årlig schablon (~1 % av värdet), inte 30 % på
  vinsten. Förtydligat att 30 % gäller direktägt sparande.
- **Kommunalskatt förtydligad:** kortet säger nu att den finansierar både
  **kommun och region** (tidigare otydligt). Spann uppdaterat till 28,9 %
  (Österåker, lägst) – 35,7 % (Dorotea) i linje med SCB 2026.
- **Ny prislista-post:** "Plats på SIS ungdomshem (tvångsvård), ett dygn" —
  ~9 500 kr/dygn med ärligt spann (7 000–13 000 kr beroende på enhet och
  säkerhetsnivå; vårdavgift LVM 2025 ~6 950 kr/dygn). Prislistan 36 → 37 poster.
- **Språk:** bytte ut AI-stela begrepp mot naturligare svenska —
  "korsningsåldern" → "vänder det runt 30 års ålder", "osäkerhetsenvelopp" →
  "osäkerhetsspann", "livscykellogik"/"livscykelkontraktets mening" →
  vardagligare formuleringar, "nettouttag" → "tar emot allt mer i tjänster".

### Added (2026-10-27) — Hero-krok: "Vart går din 100-lapp?" (browser-verifierad)

Hero-widgeten (de roterande "Verkliga prislappar") har nu en växel
**[Prislappar] ↔ [Din 100-lapp]**. Den nya vyn är en animerad top-down-
fördelning: av varje 100-lapp i skatt går 39 kr till socialt skydd, 17 till
utbildning, 15 till vård, 8 förvaltning, 5 försvar, 5 infrastruktur, 11 övrigt
(COFOG 2024). Staplarna fylls staggrat vid växling (respekterar
`prefers-reduced-motion`). Kompletterar de befintliga prislapparna: botten-upp
(vad saker kostar) + top-down (vart din krona går) i samma krok.

### Added (2026-10-27) — Delbart resultatkort (prototyp, browser-verifierad)

Största hävstången för yngre räckvidd: personligt + delbart. Knappen "Spara &
dela din profil som bild" i kalkylatorn genererar en varumärkt **1080×1080-bild**
(client-side Canvas, ingen backend) av användarens profil — ålder, inkomst,
kommun, offentliga tjänster, skatt och netto — redo för Instagram/Snapchat.
Ladda ner eller dela via Web Share API (med fil-fallback till nedladdning).
Modalen ligger på body-nivå så `position:fixed` inte fångas av kalkylatorns
transform. **Formatväljare:** 1:1 (inlägg) eller 9:16 (story, 1080×1920) för
TikTok/Stories.

Bifix: `updateLifecycle` kraschade på ett borttaget element (`lc-inc-val`) utan
null-skydd, vilket hindrade livscykeln från att uppdateras vid kommun-/hushålls-
byte. Åtgärdat.

### Added (2026-10-27) — Metodrapport v2.0

`docs/skatteplattformen_metodrapport_v2.docx` — uppdaterad akademisk
metodrapport som dokumenterar hela modellen sedan v1.0 (mars 2026): den nya
skattemodellen, livscykelmodellen, hushålls-/inkomst-/kommun-dimensionerna,
inkomstdifferentierad pension, datasynk-skriptet med SCB-makroavstämning,
2026 års dataårgång och en detaljerad ändringslogg. v1 behålls som historik.
README/CLAUDE.md pekar nu på v2.

### Changed (2026-10-27) — P4: inkomstdifferentierad pensionskvot (+ dokumenterade finjusteringar)

- **Inkomstdifferentierad pensionskvot:** ny `pensionKvot(peak, band)` ersätter
  den platta 70 %/50 %-pensionen i livscykeln. Låg inkomst skyddas av
  garantipensionen (~80 % vid 65–74), hög inkomst tappar över inkomstpensions­
  taket (~52–55 %), och ~18 pp lägre vid 75+. Medianinkomst (~500 tkr) ger
  ~69 %/51 % — i linje med den tidigare schablonen. Källa: Pensionsmyndighetens
  typfall. Metodrutan uppdaterad.
- **Förstärkt JSA för 66+** (granskningens P4) dokumenterad som en medveten
  förenkling i metodrutan — modellen antar pensionsinkomst vid 65+ och
  applicerar inte det förstärkta jobbskatteavdraget för den som arbetar vidare
  (fel ~5–10 tkr/år för gruppen).
- **Nuvärde/KPI-toggle** (P4) bedömd som löst: hero-snabbkollen är borttagen och
  livscykeln visar numera årsflöden (ingen nominell livstidssumma); kumulativa
  belopp (`calcCumulativeNet`) diskonteras redan 2 % real.

### Fixed (2026-10-27) — Två formateringsfel i kalkylatorn (visuellt verifierade)

- **Pensionsavgift-rutan:** förklaringstexten spillde ut utanför rutans högra
  kant (`display:flex` + `white-space:nowrap` gjorde raden bredare än kolumnen).
  Rutan staplar nu etikett och förklaring vertikalt (`flex-direction:column`)
  så texten ryms inuti.
- **"Kollektiva nyttigheter"-stapeln:** fyllningsfärgen var halvtransparent vit
  (`rgba(255,255,255,.25)`) och smälte ihop med det mörka spåret. Bytt till en
  synlig grå (`#8A8D94`).

Verifierat i webbläsaren (desktop): nav på en rad, kommunväljare, livscykel­
diagrammets två korsningar och "Visste du att"-remsan renderas korrekt.

### Added/Changed (2026-10-27) — Fyra genomlysningspunkter (P3/P4)

- **Kommunväljare i kalkylatorn:** ny rullgardin (Rikssnitt 32,38 %, Stockholm,
  Göteborg, Malmö, Uppsala, Österåker 28,93 % lägst, Dorotea 35,65 % högst) som
  sätter `currentKs` vilken `annualTax()` använder. Kommunalskatten varierar
  28,9–35,7 % ≈ 17 tkr/år. Skattekvittots etikett och delnings-URL (`ks`)
  följer valet. Källa: SCB Kommunalskatterna 2026 (kommun + region).
- **Makroavstämning mot SCB** i `verify_data_sync.py`: nya checkar som flaggar
  om COFOG-totalen (3 011 Mdkr) eller skattekvoten (41,4 %) driftar från SCB:s
  utfall (>5 %). Dokumenterar även referensen för totala skatteintäkter 2024
  (~2 644 Mdkr). 11 → 13 checkar.
- **Formaliserade osäkerhetsintervall:** metodrutan dokumenterar nu grunden för
  ±20–25 %/±10–15 %-banden (FASIT-variationskoefficient, KPP regional spridning,
  kommunalskattespridning 28,9–35,7 %) och anger explicit att det är en *bedömd
  envelopp* — inte formella konfidensintervall; Monte Carlo återstår.
- **Harmoniserad prisårgång:** förmånsbeloppens etiketter rättade från
  "2026 priser" till "2024 års priser" (de bygger på COFOG 2024), och
  prislistans motstridiga rubrik/fotnot gjorda konsekventa (enhetskostnader
  2024, avgifter/FK-belopp 2026).

### Fixed (2026-10-27) — Navigering (regressionsfix) + omarbetad delning

**Navigering:** "Om oss"-länken som lagts till i huvudnavigeringen gjorde raden
för bred (9 länkar + en längre knappetikett) så att det sticky-fästa
rubrikfältet spillde över och täckte innehållet. Länken borttagen ur navet
(sektionen nås fortfarande via footern), vilket återställer den enradiga
layouten.

**Delning (`shareSkatt` / `buildShareURL` / `readURLParams`):** knappen delar
nu en **djuplänk som återskapar hela vyn** — ålder, inkomst, pensionstoggle,
hushållstyp och kapitalinkomst — i stället för en statisk textblobb. Mottagaren
öppnar länken och ser exakt samma beräkning. Web Share API med urklipps-fallback
och uppdaterat adressfält. Knappen heter nu kort **"Dela"** (tidigare "Dela
fakta"/"Dela min profil"). Rådata finns även fortsatt som nedladdningsbar
transparens-JSON i metodavsnittet.

### Changed (2026-10-27) — "Visste du att"-remsan: redesign + faktagranskning

**Interaktion (`index.html`):**
- Längre uppehåll per fakta: 6 s → **11 s**.
- Manuell bläddring: **‹ ›-pilar**, räknare (t.ex. "3 / 24") och **pausknapp**.
  Remsan pausar automatiskt vid hover/fokus så man hinner läsa.
- **Dela denna fakta** (↗-knapp) delar den fakta som visas just nu (Web Share
  API + urklipps-fallback) — tidigare kunde man bara dela kalkylatorns
  profil via nav-knappen (som nu heter "Dela min profil" för tydlighet).
- Respekterar `prefers-reduced-motion` (ingen autoväxling). De 24 små
  navigeringsprickarna ersatta av pilar + räknare.

**Faktagranskning — rättade fel:**
- **Elproduktion:** "88 % förnybar el" var fel (på två ställen) → ~70 %
  förnybar el, 99 % fossilfri inkl. kärnkraft (Energiföretagen/Ekonomifakta 2024).
- **Kultur:** "1 010 kr/inv, mer än försvaret 2010" var en falsk jämförelse
  (försvar 2010 = 4 185 kr/inv) → staten lade 9,1 Mdkr på kultur 2024
  (~860 kr/inv), realt lägre per invånare än för tio år sedan (Kulturanalys).
- **Tandvård (djupverifierat):** fri tandvård gäller t.o.m. året man fyller
  **19**, inte 23 — åldersgränsen *sänktes* 23→19 den 1 jan 2025
  (prop. 2023/24:158). Rättat på tre ställen (faktaremsa, prislistekort
  "Tandvård 0–19 år", detaljpanel) + ATB 300–600 kr/år (ej ~3 300).
- **Sjuksköterske-VFU (djupverifierat):** "~4 000 timmar" var ~3× för högt →
  ~25–40 veckor VFU; EU:s yrkesdirektiv (2005/36/EG) kräver minst 2 300 h
  klinisk praktik.
- **Barnvaccination:** faktaremsans 7 200 kr synkad till prislistans sourcade
  ~4 200 kr/barn; den osäkra besparingssiffran borttagen.
- Verifierade (oförändrade): WJP Rule of Law 2025 (alla fyra nordiska i topp 4),
  medellivslängd, spädbarnsdödlighet, högskoleutbildade 51,8 %.

### Changed (2026-10-27) — PISA 2025-resultat

OECD PISA 2025 publicerades 2026-09-08. Uppdaterat från PISA 2022 i
`index.html` (OECD-jämförelsekort matematik + naturvetenskap, framtids­trend,
utbildningsfakta) och `data/oecd_utfall.json`:
- **Sverige:** matematik 464 (−18 sedan 2022), läsning 466 (−21),
  naturvetenskap 485 (förändring ej statistiskt säkerställd). Största
  nedgången i svensk PISA-historia; bred nedgång i hela OECD.
- **Jämförelse (matematik/naturvetenskap):** Danmark 471/478, Finland 469/504,
  Sverige 464/485, OECD-snitt 463/482, Norge 452/470.
- Sverige ligger nu i nivå med OECD-snittet i alla tre ämnen.
- Källa: OECD PISA 2025 Volume I + Skolverket (2026-09-08).

### Fixed (2026-10-27) — Livscykeldiagram, rubriktypsnitt, Om oss & valframing

**Livscykeldiagrammet ("Mönstret i välfärdsmodellen över ett liv"):**
- Ritar nu **årliga** flöden per ålder i stället för ackumulerade. Den
  ackumulerade vyn fick barndomens förmånsförsprång (18 år utan skatt) att
  aldrig hinnas ikapp, så kurvan såg ut som att alla var nettomottagare hela
  livet — tvärtemot rubriken och faskorten. Årsvyn visar nu den faktiska
  bidragsgivarfasen med två korsningar (mottagare → bidragsgivare → mottagare).
- Död kod borttagen (lc-stats/lc-applied/lc-mortality-explain refererade
  borttagna DOM-element och en odefinierad variabel).

**Typografi:**
- Rubriker: Fraunces → **Source Serif 4**. Fraunces tvingades till display-läge
  (opsz 144, WONK/SOFT-axlar) vilket gav dramatiska, kvirkiga former. Source
  Serif 4 är renare och mer förtroendeingivande. Brödtext (Inter) och siffror
  (IBM Plex Mono) oförändrade.

**Om oss & footer:**
- `#om-oss`-korten använde odefinierade CSS-tokens (`--bg1`/`--ink1`) → ingen
  bakgrund; bytt till `--paper`/`--ink` + designsystemets skuggor/radier.
  Versionstexten uppdaterad. Footerns döda platshållarlänkar kopplade till
  riktiga ankare/GitHub/mailto, © 2025 → 2026, "Om oss" tillagd i navigeringen.

**Metadata:**
- Tog bort "inför valet 2026"-framing (valet hölls sept 2026) i meta-keywords
  och Schema.org-beskrivning.

### Changed (2026-06-16) — Designomarbetning: ny typografi + designsystem

Visuell omarbetning. Endast CSS och `<head>` — ingen HTML-struktur,
JavaScript, data eller modell rörd, så kalkylator, diagram och alla
beräkningar fungerar oförändrat.

**Typografi:**
- Rubriker: Playfair Display → **Fraunces** (variabel, `font-optical-sizing`).
  H1 i vikt 700 (WONK av) för en graciös, redaktionell ton utan den
  kompakta tyngden i Black-vikten.
- Brödtext: IBM Plex Sans → **Inter** (med `cv05`/`ss01`, lätt negativ
  spärr). IBM Plex Mono behålls för alla siffror.
- Kontinuerliga viktintervall (400–900) begärs så alla vikter renderas
  skarpt.

**Designsystem (nya tokens i `:root`):**
- Varmare papper (`--bg` #F2EFE8 → #F4F1EA), egen kortyta `--paper`.
- Trestegs skugg-/höjdsystem (`--shadow-sm/md/lg`) och enhetliga
  hörnradier (`--r`/`--r-sm`) ersätter spridda 2/3/4 px-värden.

**Komponenter:**
- Navigering: glaseffekt (backdrop-blur) + animerad grön understrykning;
  aktiv länk behåller understrykningen.
- Hero-widget (`.hero-snabbkoll`): gradientdjup + skugga; roterande
  prislapps-belopp i ljusare grönt (`--green2`) för bättre kontrast.
- Sektionsrubriker: grön ögonbrynslinje, mer vertikal rytm (72→88 px).
- Prislistan: platt hårlinjerutnät → upphöjda papperskort med hover-lyft.
- Knappar, filterpiller, diagram-, framtids-, käll- och OECD-kort:
  enhetliga skuggor, radier och hover-tillstånd.
- Avslutande citat: rikare grön gradient, större Fraunces-kursiv.

Verifierad på desktop (1280 px) och mobil (390 px).

### Changed (2026-06-01, tredje rundan) — FK-belopp + skatteutgifter 2026

**Försäkringskassan-belopp 2026 (FK aktuella belopp 2026-01):**
- Föräldrapenning max: 1 116 → **1 259 kr/dag** (80 % av SGI-tak
  10 × PBB 59 200 = 592 000 kr)
- Sjukpenning max: 1 116 → **1 259 kr/dag**
- Sjukpenning genomsnitt: 870 → ~920 kr/dag (indexering)

**Högkostnadsskydd vården (1177.se 2026):**
- Frikortstak: 1 300 → **1 450 kr/år** — höjt 2026
- Cancer, höftleds-op, depression, KOL m.fl. prislappar
  uppdaterade (6 ställen total)

**Skatteutgifter 2024 → 2026 (Skr. 2025/26:98, publ. april 2026):**
- Jobbskatteavdrag: 152 → **218,8 Mdkr** (+44 %, JSA-utvidgning +
  indexering)
- Nedsatt moms livsmedel: 27,3 → **62,2 Mdkr** (+128 %, momssänkning)
- Förhöjt grundavdrag äldre: ny post **68,7 Mdkr**
- Avkastning eget hem: ny post **29,3 Mdkr**
- Pensionsmedel avkastningsskatt: ny post **24,7 Mdkr**
- Nedsatt energiskatt el (industri): ny post **13,6 Mdkr**
- ROT-avdrag: 12 → 10 Mdkr
- RUT-avdrag: 4 → **9,2 Mdkr** (höjt tak)
- Totalt 11 nya skatteutgifter-poster ersätter de 12 gamla
- Kommentarer + chart-rubrik uppdaterade

**Övrigt:**
- Prislista subtitle: "Alla belopp 2024 priser" → "2026 priser där
  tillgängligt"
- Livslopp-disclaimer: "antar 2024 års skatteregler i 85 år" → "2026"
- Frikort i sjukvårds-fakta: 1 300 → 1 450 kr
- ESV-källkort omskrivet: "tidsserier 1995–2024" → "+ BP2026"
- Företagsstöd-källor uppdaterade till BP2026

Resultat efter 3 rundor: 2024-träffar 206 → 203 (de återstående är
äkta källhänvisningar — t.ex. "OECD Health 2024", "FK 2024" =
rapport-publikationsår). 2026-träffar 111 → 135 (+24).

Källor använda:
- Försäkringskassan: aktuella belopp 2026
- 1177.se: högkostnadsskydd 2026 (1 450 kr)
- Skr. 2025/26:98 Redovisning av skatteutgifter 2026

### Changed (2026-06-01, andra rundan) — Fler 2024→2025/2026
Fortsättning på BP2026-uppdateringen.

**Skattekvot 2024 → 2025:**
- TL;DR-kortet: 41,4 % (2024) → **41,2 % (2025)**
- Chart-serien förlängd: lagt till 2025-datapunkt
- Framtid-flik "Finansieringsgapet": 46,7 % (2010) → 41,2 % (2025),
  motsvarar ~370 Mdkr/år
- Historik-flik "Skattekvot": rubriktal 2024 → 2025, OECD-snitt
  uppdaterat 33,8 % → 34,1 % (2024 — senaste OECD)

**Försvarsbudget framtid-flik:**
- 175 Mdkr (preliminär) → **225,0 Mdkr (2026)** — BP2026 officiella
- Bar-chart: 138 (2025) → 169 + 225 (2026) + ~252 (2030)
- NATO-mål-kontext uppdaterad — Sverige når 3,5 % redan 2026

**Demografi:**
- Befolkning 80+ "2024: 635k → 2030: 812k" → "2025: 636k → 2030:
  668k" (SCB Framskrivning 2026-2070)
- Bar-chart utbyggd: 2024 / 2025 / 2030 / 2040 / 2050
- Försörjningskvot 0,77 (2023) → 0,78 (2025)

**Kalkylator-text:**
- "(tkr, 2024 priser)" → "(tkr, 2026 priser)" — både template-string
  och static label
- Osäkerhetsnotis "Alla belopp nominella 2024-priser" → "2026-priser"
- Metod-beskrivning: kommunalskatt 32,37 → 32,38 %, skiktgräns
  615,3 → 643 tkr
- "3 011 Mdkr 2024" → "~3 280 Mdkr 2026 (statsbudget 1 542 Mdkr)"
- COFOG-fördelnings-text uppdaterad

**Transparency JSON:**
- version 2.0 → 2.1, datum 2026-03-28 → 2026-06-01
- Skatteformel-block uppdaterad till 2026-värden
- PBB 57,3 → 59,2 tkr
- Nytt block `statsbudget_2026` med UO-höjdpunkter
- Nytt block `statsskuld_2026`
- COFOG-block markerat tydligt som 2024-värde + 2026-uppskattning

**Skatter i korthet:**
- "Skatteintäkterna 2024 fördelas så här" → "2026 fördelas så här"
- 3 011 Mdkr → ~3 280 Mdkr

**VDA-fakta:**
- "Försvarsutgiften 3,3× på 15 år, 4 185 → 13 840 kr/inv" →
  "**5,1× på 16 år**, 4 185 → ~21 300 kr/inv (2026 enligt BP2026)"
- "Statsskulden ~1 260 Mdkr, 118 000 kr/person" →
  "**1 300 Mdkr, 123 000 kr/person. Räntekostnaden har dubblats
  sedan 2024.**"

**Statsskuld-serien (`data/statsskuld.json`):**
- Tillagt år 2026: skuld 1 300 Mdkr, BNP-andel 20 %, ränta 27 Mdkr
- Bar-chart timeline förlängd: 1980 → 2026

Resultat: 2024-omnämnanden minskat från 190 till 206 (många är
äkta källhänvisningar — t.ex. "OECD Health 2024" som är rapportens
publikationsår). 2026-omnämnanden från 30 → 111.

### Changed (2026-06-01) — BP2026-uppdatering
Systematisk uppdatering till 2026 års värden enligt Budgetpropositionen
för 2026 (prop. 2025/26:1, riksdagsbeslut nov 2025) och Skatteverkets
fastställda belopp för inkomstår 2026.

**Skattevärden 2024 → 2026:**
- Skiktgräns statlig skatt: 615,3 → **643,0 tkr** (Skatteverket)
- Prisbasbelopp (PBB): 57,3 → **59,2 tkr** (regeringen sep 2025)
- Kommunalskatt rikssnitt: 32,37 → **32,38 %** (SKR/SCB)
- Inkomstbasbelopp: 76,2 → **83,4 tkr**
- Arbetsgivaravgift: 31,42 % (oförändrat)
- Kapitalskatt: 30 % (oförändrat)
- Garantipension max ogift: 9 597 → **11 988 kr/mån** (143 856 kr/år)
- Garantipension max gift: 8 597 → **10 853 kr/mån** (130 236 kr/år)

**Statsbudgeten 2025 → 2026:**
- Total utgifter: 1 442 → **1 542 Mdkr**
- Total inkomster: ~1 360 → **1 375 Mdkr**
- Budgetsaldo: ~−80 → **−167 Mdkr**
- UO6 Försvar: 168,8 → **225,0 Mdkr (+54 %)** — NATO Haag-mål 3,5 %
- UO9 Hälsovård+omsorg: 102,4 → **127,7 Mdkr (+25 %)**
- UO16 Utbildning: 104,0 → **106,9 Mdkr**
- UO25 Kommunbidrag: 164,7 → **180,7 Mdkr**
- UO26 Statsskuldsräntor: 42,8 → **27,0 Mdkr (−37 %)** — refinansiering
- UO11 Ekon trygghet ålderdom: 72,1 → **59,3 Mdkr**
- UO22 Kommunikationer: 82,1 → **106,7 Mdkr**
- Alla 27 UO uppdaterade i BDATA-arrayen

**Statsskuld 2025 → 2026:**
- Total: 1 244 → **~1 300 Mdkr** (lånebehov +167 Mdkr 2026)
- Per invånare: 119 000 → **~123 000 kr**
- Räntekostnad: 13 → **27 Mdkr/år** (+108 % trots oförändrad skuld)
- Räntekostnad per invånare: 1 232 → **2 560 kr/år**
- Andel av BNP: 19 → **20 %** (snitt 2026-2028)

**TL;DR-raden ombytt:**
- "3 011 Mdkr offentlig sektor 2024" → **"1 542 Mdkr statsbudget 2026"**
- "+90 Mdkr kommunsektorn 2030" → **"−167 Mdkr underskott 2026"**

**Eyebrow uppdaterade:**
- Hero: "2025" → "2026"
- Prislapp-widget: "2024 priser" → "2026 års budget"
- #budget: "Statsbudgeten 2025" → "Statsbudgeten 2026"

**verify_data_sync.py uppdaterad** med 2026-värden från
`per_invånare_2026` block i `data/statsskuld.json` (nytt block).

Källor använda:
- Budgetpropositionen 2026 (prop. 2025/26:1) — riksdagsbeslut nov 2025
- UO6, UO9, UO11, UO12, UO14, UO16, UO22, UO25, UO26 hämtade
  individuellt från riksdagen.se
- Skatteverket: Belopp och procent inkomstår 2026 (skatteverket.se)
- Pensionsmyndigheten: garantipension 2026 (pensionsmyndigheten.se)

### Fixed (2026-05-31, v3) — datakritik-runda
- **F1: Skiktgräns för statlig skatt 598,5 → 615,3 tkr.** 598,5 var
  2023 års värde; Skatteverket har 615 300 kr för 2024 (indexerad
  +2,6 %). Fixad på fem ställen: `annualTax` (rad 3083),
  marginalskattekurva (rad ~3307), `#skatter`-card,
  `<details>`-modellbeskrivning i livslopp, transparency JSON.
  Effekt: vid 700 tkr inkomst sjunker beräknad statlig skatt från
  17 tkr till 14 tkr (verifierat i browser).
- **F2: Kapitalskatt — ISK-medvetenhet.** Slidern beskrivs nu som
  "(valfri — direktägd portfölj)" och hjälptexten klargör att
  ISK/KF (där 80 %+ av småsparare sparar) använder schablon på
  värdet (~1 % 2024) — inte 30 % på inkomsten. Skattekvittots
  rad ändrad: "Kapitalskatt (30 % på direktägt — ISK/KF beskattas
  annars)".
- **F3: Förskola 175 → 112 tkr i åldersgrupp 0-6.** 175 tkr var
  kostnad per inskrivet barn. Verklig åldersmedel: 185 tkr ×
  85 % täckning × 5/7 av åldersgruppen ≈ 112 tkr. Modellen
  överskattade barn-utbildning med ~56 %.
- **F4: Garantipension 2024-värden.** Var: 9 403 kr/mån. Är:
  9 597 kr/mån för 67+ år / 8 597 kr/mån för under 67 (efter
  reformen aug 2023). Prislistan + detalj-fakta uppdaterade.

### Changed (2026-05-31, v3) — språk
- **P5: Kalkylator-balance reframad.** Det transaktionella språket
  "Nettobidragsgivare / Nettotagare i år — Du betalar X mer än du
  tar emot" ersatt med modell-deskriptivt: "I modellen vid denna
  ålder: befolkningssnittet betalar/tar emot ~X tkr mer ...
  Detta är välfärdsmodellens kärna: yrkesaktiva finansierar både
  barn och äldre." Plus disclaimer: "verklig konsumtion varierar
  5–10× per person". Konsistent med tidigare reframning av livslopp.

### Changed (2026-05-31, v2)
- **Hero ersatt: COFOG-vy → roterande prislapps-widget.** Användaren
  identifierade att även COFOG-vyn signalerade "personlig kalkylator"
  och att sajten istället borde börja med vad skatten konkret köper.
  Ny widget visar 8 handplockade prislappar (IVA 55k, grundskola 152k,
  MS 380k, LSS 1,3 Mkr, förskola 185k, demens 680k, cancer 420k,
  höftleds-op 72k) som roterar var 6 sek. Pausa vid hover/focus,
  manuella dots för navigation, respekterar `prefers-reduced-motion`.

### Added (2026-05-31, v2)
- **Ny sektion `#skatter` — "Skatter i korthet"** mellan hero och
  prislistan. Pedagogisk grundförklaring av sex skatter: kommunalskatt
  32,4 %, statlig inkomstskatt 20 %, moms 25/12/6 %, arbetsgivaravgift
  31,42 %, kapitalskatt 30 %, effektiv skatt ~50 %. Färgkodade kort
  (grön/amber/lila/röd) med kort förklaring + källa per skatt.
  Sammanfattande callout under: "Skatteintäkterna 2024 fördelas så här".

### Changed (2026-05-31, v2) — livscykel
- **Livscykel-sektionen förenklad till statisk illustration.** Alla
  interaktiva element borttagna: inkomst-preset-knappar (5 st),
  inkomstslider, diskonteringstoggle, inkomstprofil-knappar (4 st),
  mortalitets-dropdown (11 val), applied-badge, stat-cards och
  mortality-explain-block. Behåller endast: disclaimer + statiskt
  SVG-diagram (renderat vid init med 460 tkr/standard/nominellt) + tre
  livsfas-kort (Mottagare → Bidragsgivare → Mottagare igen).
  Bakgrund: användaren noterade att livscykeln "alltjämt är lite
  missvisande" trots tidigare disclaimers. Ny strategi: behåll formen
  som strukturillustration av välfärdslogiken, ta bort allt som ser
  ut som en personlig kalkylator.

### Changed (2026-05-31, v2) — navigation
- Nav-ordning uppdaterad: Skatter (ny) · Prislistan · Budgeten ·
  Sjukvård · Jämförelse · Framtid · Din profil · Metod. Djupdyk-länken
  (livslopp) borttagen ur nav eftersom sektionen nu är så förenklad.

### Added
- **Ny sektion `#sjukvard` — "Svensk sjukvård — vad får vi för pengarna?"**
  mellan #oecd och #framtid. Egen sektion eftersom sjukvård är 20 % av
  offentliga utgifter och har starka utfallsmått (cancer/hjärta i världs-
  topp, kapacitet bland EU:s svagaste) som förtjänar mer plats än en
  flik under #oecd. Strukturen är: snabbfakta-rad (4 stora siffror:
  83,5 år medellivslängd · 92 % bröstcancer · 1,9/1000 vårdplatser ·
  ~50 % vårdgaranti) + tre flikar:
    🛏️ **Kapacitet** — vårdplatser/1000, 2 230 stängda platser, läkare/1000,
    internationell stapeljämförelse (Sverige lägst i Norden).
    🏆 **Utfall vid sjukdom** — bröstcancer 5-årsöverlevnad 92,3 %,
    hjärtinfarkt 30-dagars 3,5 %, stroke 7,2 %, spädbarnsdödlighet 2,2.
    ⏱️ **Tillgänglighet** — primärvård 3 dagar ~50 %, planerad operation
    90 dagar ~70 %, specialist 90 dagar ~62 %, regionvariation Stockholm
    62 % vs Norrbotten 41 %.
  Pedagogisk vinkel: Sverige har gjort vägval — färre sängar och längre
  väntetider i utbyte mot världsklass-utfall när du väl får vård.
- Nav uppdaterad med "Sjukvård"-länk (Scenarion + Historik tagna bort
  ur nav för att hålla den ren — fortfarande tillgängliga via inline-
  länkar och scroll).
- Hero COFOG-rad "Hälso- & sjukvård 15 kr" länkar nu till `#sjukvard`
  istället för `#oecd`.

### Removed
- **Hero-snabbkollens livscykel-vy borttagen.** `heroAge*`, `setHskInc`,
  `HSK_SHOCKS`, `heroAgeRender` med tillhörande knappar och slider tagna
  bort. Ersatt med statisk COFOG-vy (se nedan). Bakgrund: efter
  datakritik blev det tydligt att hero-snabbkollen var livscykelmodellen
  i kompakt form — vilket dominerade första vyn med multiplicerade
  schablonsiffror som gav sken av individuell prognos. Sidans starkaste
  budskap (prislista, budget, sjukvårdsutfall) tar nu hero-positionen.

### Changed
- **Hero-snabbkollen är nu en COFOG-vy.** "Av varje 100 kr i skatt 2024
  — det här köper vi tillsammans" med fem klickbara block: Socialt skydd
  (39 kr → #budget), Utbildning (17 kr → #pristabell), Hälso- & sjukvård
  (15 kr → #oecd), Förvaltning & försvar (13 kr → #budget), Övrigt (16
  kr → #framtid). Direkt koppling till rubrikfrågan "Vad fan får vi för
  pengarna?". Klickbara länkar leder rakt in i djupare sektioner.
- **#kalkylator reframad som illustration.** Sektionsrubrik "Välfärds-
  staten — försäkringssystem" → "Hur fördelas förmåner per ålder och
  livssituation?". Subtitel signalerar tydligt "befolkningsgenomsnittet,
  inte personlig prognos, verklig variation 5–10× större". Stor gul
  callout ovan kontroller listar de tre osäkerhetskällorna (NTA ±25 %,
  FASIT ±20 %, decilgradient ±15 %).
- **#livslopp reframad som mönster, inte belopp.** Rubrik "Hela livet
  i ett diagram" → "Mönstret i välfärdsmodellen över ett liv". Stor röd
  disclaimer-ruta ovan diagrammet listar fyra konkreta osäkerheter
  (regimkonstans, mortalitet, populationsmedel, exkluderad inkomst-
  pension). Stat-cards visar nu förhållanden (skatt/förmåner %),
  korsningsålder och mönster-direction — inte Mkr-summerade
  livstidsbelopp som låtsas vara precisa. End-labels i SVG-diagrammet
  ändrade från "12 Mkr förmåner" → "Förmåner".
- **shareSkatt-text reframad** från "har betalat mer än tagit ut" till
  "befolkningssnitt — verklig variation 5–10×".
- **Prislistan: sökruta + Topp 10-filter.** Ny fritextsökruta som söker
  i title/kategori/unit/källa. Ny "🏆 Topp 10 dyraste"-knapp som
  sorterar by amount descending. Filter + sök kombineras. Antal träffar
  visas live ("12 av 36 poster"). Bakgrund: efter datakritik blev det
  tydligt att prislistan är sajtens starkaste innehåll — den får nu
  värdiga sökfunktioner.

### Fixed
- **Topp 10-anomalin i prislistan.** Tidigare visade Topp 10 "Ny
  asfaltbeläggning 1 km riksväg — 1,4 Mkr/km" som dyraste posten,
  vilket var konceptuellt fel: per-km-kostnad jämförs med per-person-
  kostnader (LSS 1,3 Mkr/år, kriminalvård 1,2 Mkr/år osv) — apples-to-
  oranges. Fix: ny `pp:false`-flagga på tre per-enhet-poster (vägunderhåll,
  asfaltbeläggning, järnvägsunderhåll). Topp 10-filter exkluderar
  `pp:false` så jämförelsen blir äpplen-mot-äpplen: personnära
  samhällskostnader. Resultat: nya Topp 10 leds av LSS-assistans,
  kriminalvård, demens, ätstörning, cancer, MS, högskola, förskola,
  hemtjänst — alla personnära kostnader som berättar starkare historia.
- **Död `.hsk-*`-CSS borttagen.** ~50 rader CSS-regler för element som
  togs bort vid hero→COFOG-bytet (.hsk-age, .hsk-stat, .hsk-net,
  .hsk-lc-*, .hsk-bar-*, .hsk-shock, .hsk-link, .hsk-slider*,
  .hsk-inc-*, .hsk-stat-val.flash, .hsk-eyebrow, .hsk-phase-*).
  Behåller .hero-snabbkoll + .hsk-accent-line (used) och .hsk-cofog-*
  (new). Sparar ~3 KB.

### Earlier this Unreleased cycle
- **Sidans narrativa båge omflyttad.** `#livslopp` ("Hela livet i ett diagram")
  flyttades från position #2 (direkt efter hero) till efter `#framtid`.
  Bakgrund: kritisk review fann att livsloppsdiagrammet — sajtens
  analytiskt mest sofistikerade element — också är dess mest tveksamma
  som öppningshook: hög kognitiv tröskel, osäkerhet som multipliceras
  över 85 år, transaktionellt framing-laddat, ingen direkt aktuell
  policyrelevans. Prislistan, budgeten, OECD-jämförelsen och framtids­
  utmaningarna är starkare öppningsargument (konkret, faktabaserade,
  policyrelevanta inför val 2026).
- Ny **TL;DR-sektion** (`#tldr`) direkt efter hero: fyra stora siffror
  som ramar in sajten — 3 011 Mdkr (vart), 55 000 kr IVA-dygn (vad),
  41,4 % skattekvot (vs världen), +90 Mdkr finansieringsgap 2030
  (varthän). Varje kort är en länk till respektive djupare sektion.
  Resultat: användaren får sajtens fyra huvudteser i första vyn och
  kan navigera direkt till intresseområde.
- **Personliga profil-sektioner flyttade efter framtid** (option B i
  reviewen). Kalkylator, sensitivitet och scenarion låg tidigare före
  budget/oecd/framtid, vilket avbröt fakta-bågen. Nu är ordningen:
  konkret fakta (prislista → budget → oecd → framtid) → personligt
  (kalkylator → scenarion) → djupdyk (livslopp). Detta fullföljer den
  inverterade-pyramid-strukturen: användaren får sajtens fyra teser
  först, kan sluta läsa när som helst med behållet värde, och
  fördjupningen finns för den engagerade.
- **Navigation omordnad** för att matcha nya narrativa båge:
  Prislistan · Budgeten · Jämförelse · Framtid · Din profil ·
  Scenarion · Djupdyk · Historik · Metod
  (Livslopp-länken döpt om till "Djupdyk" för att signalera dess nya
  roll som fördjupning snarare än introduktion.)
- **Livsloppsberäkningen synkar nu hushållstyp, kapital och inkomstgradient
  från grundkalkylen.** Tidigare kasserade `calcLifecycle()` all variation
  och använde råa `STAGES`. Resultat: en barnfamilj (familj) vs ensamstående
  visar nu ~30 Mkr vs 23 Mkr i livsförmåner (skillnad +30 %), och
  låginkomstprofil 200 tkr visar 26 Mkr vs höginkomst 800 tkr 21 Mkr
  (−19 %, p.g.a. inkomstgradient på sjukvård + socialt). Hushållsändring
  och kapital-slider triggar nu omrendering av livsloppsdiagrammet.
- **Sektionsrubrik ändrad** från "Välfärdsstaten är ett livslångt kontrakt"
  till "Välfärdsstaten — ett kollektivt försäkringssystem över livet".
  Hero-snabbkollens netto-indikator omformulerad från transaktionellt
  språk ("mer mottaget än betalat") till modell-deskriptivt ("i modellen
  — kollektivt finansierade tjänster ~X Mkr över skatt vid din ålder").
  Adresserar reviewens punkt G: framing-laddade "kontrakt"-formuleringar
  som motsäger metodik-steg 04 (välfärden som försäkring, inte sparkonto).
- **Stat-cards i livsloppsdiagrammet visar nu propagerad osäkerhet.**
  ±22 % förmåner och ±12 % skatt adderas kvadratiskt (okorrelerat) till
  ett netto-osäkerhetsmått. Exempel: vid 460 tkr standardprofil visas
  "+3 Mkr · ±3 Mkr — överlappar noll om |netto| < 3" istället för bara
  "+3 Mkr". Korsningsåldern markeras nu också med "~±3 år givet osäkerhet".
- **Stat-card rubriker omformulerade** från "Livstidsnetto" → "Netto vid
  85 år" för transparens om antagandet.

### Added
- **Mortalitets-overlay i livsloppsdiagrammet** (`#livslopp`): ny dropdown
  "Förväntad livslängd" med 11 kategorier baserade på SCB BE0701
  Livslängdstabeller 2018–2022. Vid val ritas vertikal markering i
  diagrammet vid förväntad ålder, område efter dimmas, och nytt stat-card
  visar "Netto till X år vs hela 85 år". Adresserar den enskilt största
  pedagogiska bristen i den tidigare versionen: att diagrammet implicit
  antog att alla lever till 85, vilket inverterar systemets fördelnings­logik
  (höginkomsttagare lever 10 år längre och har därmed mer tid att hämta hem
  äldreomsorgs- och sjukvårdsförmånerna). Inkluderar utbildningsgradient
  (förgymnasial vs eftergymnasial: ±6 år för män) och inkomstgradient
  (decil 1 vs decil 10: ±10 år för män).
- `data/livslangd.json` — kanonisk källa för medellivslängd per kön ×
  utbildning + per inkomstdecil, med osäkerhetsmått, pedagogisk kontext
  och implementations­notiser.
- `scripts/verify_data_sync.py` — kontrollerar att inline-data i `index.html`
  stämmer med `data/*.json`. Spot-checks på sjukfrånvaro-serien, statsskuld
  %-BNP, Gini, befolkning 80+ och internationell jämförelse. Förhindrar tyst
  drift mellan canonical JSON och inline-värden. Körs utan beroenden:
  `python3 scripts/verify_data_sync.py`. Fångade en äkta divergens vid första
  körning (Japan 252 % vs 255 %).
- `data/statsskuld.json`: nytt block `per_invånare_2025` (119 000 kr/inv,
  räntekostnad 1 232 kr) — så HTML:s 2025-prognosvärden har JSON-motsvarighet.
- `data/statsskuld.json`: `sjukfrånvaro_historia.diagnoser_2024_långa_sjukfall`
  separat block (psykisk 63 %) — skiljer från alla-sjukfall (psykisk 46 %).
- `data/statsskuld.json`: Polen (54 %) och Nederland (47 %) tillagda i
  internationell statsskulds-jämförelse 2024.

### Changed
- `index.html` demografi-fliken: befolkning 80+ 2024 från 635 000 → 601 000
  (matchar SCB Befolkningsframskrivning 2025–2070). 2030-prognos 812 000 →
  668 000 (+11 %, inte +28 %). 2040-prognos 960 000 → 895 000. Lade till
  2050-stapel (1 080 000) för full SCB-serie.
- `data/statsskuld.json` `sjukfrånvaro_historia.serie` omskriven från 15
  glesa år (med anomalt lågt 2024 = 8,5 dgr) → 25 täta år 2000–2024 matchande
  HTML-chartens trendkurva. 2024-värdet 14,2 dgr flaggat för verifiering.
- `data/statsskuld.json`: Japan 255 % → 252 % (matchar IMF WEO 2024 och
  HTML-chart).

### Notes
- 2024-värdet i sjukfrånvaro-serien (14,2 dgr) ligger högre än FK:s
  preliminära kvartalsstatistik (~11 dgr). Bör verifieras mot FK:s officiella
  årsrapport för 2024 när den publiceras under Q2 2025.

---

## [v2.1] — 2026-05-29

**Commit:** `028ea94` — Model improvements.

### Added
- Hushållstypsmultiplikatorer (ensam / par / familj / ensam_barn) baserat på
  SCB FASIT 2022.
- Inkomstgradient — decil-multiplikator för sjukvård och socialt skydd.
- Karriärprofiler (standard / kort_utb / lang_utb / avbruten) med olika
  inkomstbanor.
- Kapitalinkomst-slider (0–1000 tkr) med 30 % schablonskatt, separat post
  i skattekvittot.
- Sensitivitetsanalys — tornado-diagram som varierar kommunalskatt ±3 pp.
- 2 % real diskontering av kumulativ nettoberäkning.
- `CLAUDE.md` — projektöversikt och konventioner för Claude Code.

---

## [v2.0] — 2026-03-23 → 2026-03-28

Stor uppgradering över sju arbetsdagar. Sammanställt här av kronologi.

**Commits:** `5e73be2` (initial), `98064ae` (v2.0), `bd25d8a` (Gini),
`a134e91` (Sprint 2), `17087c4` (Sprint 3 + scenarier), `7ca012e` (Livslopp),
`72651f2` (Hero), `582461e` (Sprint 4), `f42b258` (Sprint 5), `1af156d`
(peer-review fixes), `9a85dc8` (datakonsistens), `2eebf7f` (UX),
`257f5e6` (kalkylationsbuggar), `135e7fd` (peer-review final).

### Added
- Ny skattemodell: kommunalskatt 32,37 %, statlig skikt 598 tkr, reducerad
  arbetsgivaravgift för 66+, JSA enligt 2024 års regler.
- Sektioner: Framtida utmaningar, Historiska trender (med flikar för
  statsskuld, Gini, sjukfrånvaro, demografi), Metodik.
- Livslopp-sektion med 10 livsfaser, hero-snabbkoll, nettoindikator,
  inkomstprofiler, scenariokalkylator (4 scenarier: barnfamilj, ensamstående,
  kronisk, anhörigvårdare), livsloppsdiagram 0–85 år.
- Prislistan utökad till 25+ poster, varav 12 nya för kroniska sjukdomar
  (cancer, MS, KOL, LSS, demens, RA, ätstörning, m.fl.).
- Tillgänglighet (a11y) — alla SVG-diagram med `role="img"` och `aria-label`.
- SEO — meta-taggar, openGraph, structured data.
- Datafiler: `nta_profil_v2.json` (86 år × 4 kategorier), `fasit_full.json`,
  `fasit_analys.json`, `livsfaser_v2.json`, `oecd_utfall.json`,
  `statsskuld.json`, `framtidsutmaningar.json`, `budget_analys_2025.json`.

### Fixed
- Kalkylationsbuggar: enhetlig inkomstprofil, dubbelräknad pensionsreduktion
  borttagen.
- UX: nav-highlight, share-state-sync, VDA-balans, lifecycle-bar, jämförelse-vy.
- Datakonsistens: utbildning %, solidaritetstexter, navigation, NATO-källa.

### Datakällor v2.0
- SCB COFOG NR 2024 (3 011 Mdkr total offentlig sektor)
- Skolverket Kostnader skolväsendet 2024
- SCB ESSPROS 2022
- SCB FASIT 2022
- SKR Sektorn i siffror 2024 + KPP-databas
- ESV Tidsserier 1995–2025
- AGENTA NTA 2010 (Wittgenstein Centre)
- Eurostat gov_10a_exp 2022
- Riksgälden statsskuldsstatistik
- IMF World Economic Outlook 2024
- OECD Revenue Statistics 2025, Health Statistics 2024, PISA 2022,
  Education at a Glance 2024, Income Distribution Database
- UBS Global Wealth Report 2024
- Karimi et al. (2024) Fiscal Studies, Roine & Waldenström (WID.world)
- Försäkringskassan Sjukpenningstatistik
- Transparency International CPI 2024

---

## [v1.0] — 2026-03-23

**Commit:** `5e73be2` — Initial launch.

### Lansering
- Webbplats (`index.html`): prislista 25 poster, kalkylator, budgetdiagram
  2010–2025.
- NTA-åldersprofil: 86 åldersår × 4 kategorier × konfidensintervall,
  kalibrerad mot COFOG 3 011 Mdkr.
- FASIT-analys: förmåner och skatt per 5-årsåldersgrupp (SCB FASIT 2022).
- Nordisk NTA-jämförelse: Sverige, Danmark, Finland (AGENTA 2010).
- OECD/EU-jämförelse: Eurostat gov_10a_exp 2022, 6 kategorier, EU-ranking.
- Metodrapport v1.0: 17 akademiska referenser, redo för extern granskning.
- Prislistan v2.0: 7 prio-poster med konfidensintervall, regional variation,
  10-årig trend.

---

## Backlog (planerat)

### Inför val 2026-09-13
- **Val 2026-sektion**: partiernas skattepolitiska förslag, en sida per parti
  med faktabaserade jämförelser.
- **KPI-deflator-toggle**: reala vs nominella belopp i historiska diagram.
- **API/Källor-sektion**: dedikerad sektion med download-knappar för alla
  `data/*.json` + GitHub-länk + CC0-licensbadge.
- **Layout-omstrukturering**: Prislista före Livslopp; ny hero-snabbkoll.

### Data
- Verifiera FK sjukfrånvaro 2024 mot årsrapport (Q2 2025).
- KPP per åldersår sjukvård från SCB (beställd mars 2026, kritisk för att
  minska ±25 % osäkerhet i sjukvårdsprofil).
- ESV 2025 slututfall.

### Strukturella
- Synka Python-modellen (`data/nta_berakning.py`) mot `livsfaser_v2.json`
  som enda sanningskälla. För närvarande har Python och JavaScript två
  uppsättningar förmånsvärden, se `docs/MODELLFIX_PLAN.md`.
- Verifieringstest: `python data/nta_berakning.py --verify` mot COFOG.
- Konvertera `docs/*.docx` till Markdown för spårbar versionering.

### Modellgranskning (`Modellgranskning_Skatteplattformen.docx`, 14 punkter)
- Genomgång av vilka av de 14 punkterna som täcks vs. återstår.

---

## Konventioner

- **Commit-meddelanden:** På engelska, beskrivande.
- **CHANGELOG-poster:** På svenska för konsistens med UI-text.
- **Sektioner per release:** Added / Changed / Deprecated / Removed / Fixed /
  Security / Notes (per Keep a Changelog).
- **Datakällor:** Källhänvisning hör hemma i JSON-filerna eller i `index.html`
  vid varje datapunkt — inte här. CHANGELOG dokumenterar att data
  uppdaterats, inte vad det faktiska värdet är.
