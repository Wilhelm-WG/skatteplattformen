# Granskning 06: klarspråk

Granskare: roll 6, `klarsprak` (språkvårdare, klarspråk i offentlig sektor och läsare med svenska som andraspråk). Datum: 2026-11-14. Underlag: `index.html` (7 128 rader) renderad lokalt på port 8776.

## 1. Sammanfattning

Kärntexterna är lätta att läsa: startsidans ingress har LIX 31, Skatter i korthet 24 och filmen som text 37, och frågerubrikerna i Jämförelser ("Hur länge lever man?") är förebildliga. Två saker drar ner: samma sak heter olika på olika ställen (socialt skydd har minst fem namn, snittet i Jämförelser fyra), och de förklarande raderna runt siffrorna (metodraden, diagramundertexterna, budget- och skuldtexterna) är tunga, med LIX 45–53 och facktermer som inte förklaras. Ordlistan har 29 termer men saknar flera som används ofta, till exempel *procentenhet* (25 gånger), *åldersstandardiserat* (23), *Gini-koefficient* (19) och *IVA* (67). Det finns ett grammatikfel som upprepas i alla 36 diagram ("Här är högre är bättre.") och en jämförelse på prislapparna som går att läsa fel. Det mesta går att rätta på några timmar utan att ändra sakinnehållet eller tonen.

## 2. Betyg

| Dimension | Betyg | Motivering |
|---|---|---|
| Begriplighet | 3 | Ingresser och rubriker är klara, men metodrader, diagramundertexter och Budget och Framtid kräver förkunskaper (LIX 45–53, långa kommakedjor). |
| Konsekvens | 2 | Kategorier, snitt, vårdplatser och åldersgränser har flera namn, och läsaren kan inte se att det är samma sak. |
| Ton | 4 | Lekfull i rubriker, kvitto och quiz, neutral i sak. Budget och Framtid blir torra, och citattecken kring "skatt" och "skatteförmån" ger en ironisk underton. |
| Lättläst för andraspråksläsare | 2 | Många långa sammansättningar och förkortningar (m.m., inkl., FK, IVA, UO) och facktermer utan förklaring. Tankstreck och semikolon gör satsbyggnaden svår att följa. |

## 3. Det som fungerar (bevara)

- **Frågor som rubriker** i Jämförelser och Prislistan ("Hur många överlever bröstcancer?", "Vad kostar en skoldag?"). De säger vad diagrammet svarar på, med vardagsord.
- **Startsidans ingress** ("Skriv in din lön eller pension. Kvittot visar vad skatten betalar varje månad, och vad det räcker till."): LIX 31, två korta meningar, uppmaning i du-form.
- **Filmen som text** (`#kapitel-…`): i snitt 9 ord per mening, en tanke per mening. Det är den lättaste längre texten på sajten och kan vara mall för Budget och Framtid.
- **Kvittots skämt** ("KASSÖR: ARBETSGIVAREN", "VÄLKOMMEN ÅTER NÄSTA LÖNEDAG", "ca 37 minuter på intensiven"). Där bärs den lekfulla tonen utan att sakuppgifterna påverkas.
- **"Om måttet"** och avsnitten om osäkerhet ("Det är inte en prognos för just dig") säger ärligt och kort vad siffran inte visar.

## 4. Fynd

### klarsprak-01. "Här är högre är bättre." står i alla diagram
- **Plats:** Jämförelser, "Om måttet" i alla 36 diagram. `index.html` rad 5952 (`const om = [...]`), med `jmfRiktn` på rad 5850.
- **Belägg:** "Direktlänk År, 2024. Här är högre är bättre. Den streckade linjen: OECD-länderna, 80,4 år." Samma fel i "Här är lägre är bättre."
- **Problem:** `jmfRiktn` ger "högre är bättre" och mallen lägger "Här är" framför, så det blir två "är".
- **Varför det spelar roll:** Ett grammatikfel som upprepas sänker förtroendet för en sajt som vill vara noggrann. Det syns för alla som öppnar ett diagram.
- **Förslag:** `ch.bast ? jmfRiktn(ch).replace(/^./, c => c.toUpperCase()) + '.' : 'Varken högre eller lägre är självklart bättre.'` ger "Högre är bättre." och "Lägre är bättre."
- **Allvar:** medel · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

### klarsprak-02. Prislapparnas jämförelse går att läsa fel
- **Plats:** Prislistan, alla prislappar från 200 kr och uppåt, och quizets svar. Rad 3885 (`pc-cmp`) och rad 4294.
- **Belägg:** "Lika mycket som all inkomstskatt från en medianlön under 1 år och 7 månader".
- **Problem:** "en medianlön under 1 år" kan läsas som "en medianlön som är lägre än …" eller "en medianlön under ett år". "Lika mycket som" saknar subjekt. Andraspråksläsare tolkar ofta *under* som "lägre än".
- **Varför det spelar roll:** Det är sajtens mest upprepade vardagsjämförelse (minst 34 gånger) och den ska göra beloppen begripliga.
- **Förslag:** "Det är vad en person med medianlön betalar i inkomstskatt på **1 år och 7 månader**." Kortare variant till kortet: "= inkomstskatten på en medianlön i **1 år och 7 månader**".
- **Allvar:** hög · **Säkerhet:** medel · **Insats:** S · **Typ:** rättelse

### klarsprak-03. Samma utgiftskategori har olika namn i kvittona, hundralappen, Din ekonomi och prislistan
- **Plats:** `START_GRUPPER` (rad 4442–), Din ekonomi-kvittot (rad 5572), `WBAR_LABELS` (rad 5221), `wLabels` (rad 6503), prislistans `cl` (rad 3398–3402), hundralappen `HL100`.
- **Belägg:**
  - Startkvittot: "Sjukdom, barn och arbetslöshet", "Äldre: omsorg och garantipension", "Vägar, järnväg, näringsliv", "Förvaltning".
  - Din ekonomi-kvittot: "Sjukdom, funktionsneds.", "Familj och barn", "Arbetslöshet", "Övrigt socialt skydd", "Äldreomsorg, pension", "Näringsliv och transporter", "Allmän offentlig förvaltning".
  - Hundralappen: "Socialt skydd", "Näringsliv och infrastruktur", "Förvaltning".
  - Din ekonomi-staplarna och prislistan: "Social trygghet".
  - Budgeten: "Transporter och kommunikationer".
- **Problem:** Läsaren ser samma färg och pictogram men olika ord, och kan inte veta om "social trygghet" och "socialt skydd" är samma sak. Det blir tydligast när man går från startkvittot till Din ekonomi med samma lön.
- **Varför det spelar roll:** Det försvårar för alla och mest för andraspråksläsare, som slår upp ord.
- **Förslag:** Ett namn per kategori, i en gemensam konstant som alla vyer läser från. "Socialt skydd" är huvudnamnet (COFOG, hundralappen). Underraderna heter samma sak i båda kvittona. Se terminologilistan nedan. Startkvittots korta namn kan behållas om Din ekonomi-kvittot använder samma namn.
- **Allvar:** hög · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

### klarsprak-04. Begrepp som skrivs på flera sätt (snitt, vårdplatser, förmåner, budget och andra)
- **Plats:** hela sajten, se terminologilistan i avsnitt 4b.
- **Belägg:** "OECD-snitt" (119 gånger), "OECD-länderna 80,4" (7), "genomsnittet i OECD-länderna" (1). Sjukvårdens ingress: "minst antal vårdplatser per invånare i EU", diagrammet bredvid: "Sjukhussängar per 1 000 invånare". "Välj ett scenario" under rubriken "Fyra livssituationer", som i ingressen kallas "hushållstyper". Sidfoten "Bildkrediter" och "Om oss", men sektionerna heter "Illustrationerna" och "Om Skatteplattformen". Menyn har "Framtid", vyn heter "Framtid och historik".
- **Problem:** Varje variant kostar läsaren en tanke ("är det här något annat?"). Vårdplatser och sjukhussängar mäts dessutom olika i svensk och internationell statistik, så läsaren behöver få veta om det är samma sak eller inte.
- **Förslag:** Använd ett ord per begrepp enligt listan. Om två ord måste stå kvar ska sambandet förklaras en gång, till exempel: "I den internationella statistiken kallas vårdplatser för sjukhussängar."
- **Allvar:** medel · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

### klarsprak-05. Ålder och födelseår blandas i samma mening
- **Plats:** Startsidans metodrad (rad 1359), skatteutgiftsdiagrammet (rad 5081 "Jobbskatteavdrag (under 66)"), kodkommentarer och JSON-export (rad 7031).
- **Belägg:** "Lön räknas för den som är under 66 år, pension för den som är född 1959 eller tidigare".
- **Problem:** Läsaren måste själv räkna ut var gränsen går. Den som är född 1960 fyller 66 år 2026 och undrar vilken grupp hon hör till. (Juridiskt menas "inte fyllt 66 vid årets ingång", men det står inte.) Granskningen i november bytte till födelseår på andra ställen, men den här raden blev kvar.
- **Förslag:** "Lön: reglerna för den som är född 1960 eller senare. Pension: reglerna för den som är född 1959 eller tidigare." I skatteutgiftsdiagrammet: "Jobbskatteavdrag (född 1960 eller senare)".
- **Allvar:** medel · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

### klarsprak-06. Startsidans metodrad och texten under kvittot är tunga
- **Plats:** `#start`, `.start-metod` (rad 1359) och texten under kvittot (rad 4584).
- **Belägg:** Metodraden har LIX 53 och 21 ord per mening ("…och egen firma som överskott i enskild firma efter egenavgifter."). Texten under kvittot har LIX 48 och lägger två ämnen i samma stycke: arbetsgivaravgift och moms, och sedan vad jämförelserna bygger på ("FMV:s köp av 48 Archer-pjäser").
- **Problem:** Det här är raderna som ska ge förtroende för kvittot, men de är svårast att läsa på startsidan. "Archer-pjäs" och "FMV" är okända för de flesta, och kvittoraden "ca en 310 000-del av en Archer-pjäs" är svår att föreställa sig.
- **Förslag:** Se omskrivning 1 och 2. Förklara Archer en gång ("artilleripjäsen Archer") och skriv ut Försvarets materielverk.
- **Allvar:** medel · **Säkerhet:** hög (LIX uppmätt) · **Insats:** S · **Typ:** förbättring

### klarsprak-07. Diagramundertexterna i Jämförelser är kommakedjor med facktermer
- **Plats:** `JMF_DATA`, fältet `enh` (till exempel rad 5704, 5708, 5712), som visas under varje diagramrubrik och i "Om måttet".
- **Belägg:** "Bröstcancer, femårsöverlevnad, procent, åldersstandardiserad femårs nettoöverlevnad, diagnos 2010–2014". "Undvikbar dödlighet, dödsfall före 75 års ålder per 100 000 invånare som hade kunnat undvikas med förebyggande arbete eller vård, åldersstandardiserat, 2023" (27 ord utan verb i huvudsats).
- **Problem:** Frågan i rubriken är enkel, men raden under upprepar den med facktermer och utan satsbyggnad. "Åldersstandardiserat" (23 gånger) och "nettoöverlevnad" (9) förklaras ingenstans.
- **Förslag:** Under rubriken står bara mått, enhet och år i vanliga ord. Facktermen och förklaringen flyttas till "Om måttet". Exempel: "Andel som lever fem år efter diagnosen, procent. Diagnos 2010–2014." I "Om måttet": "Talen är justerade för att länderna har olika åldersfördelning (åldersstandardiserade). De visar överlevnaden som om cancern vore den enda dödsorsaken (nettoöverlevnad)."
- **Allvar:** medel · **Säkerhet:** hög · **Insats:** M · **Typ:** förbättring

### klarsprak-08. Ordlistan saknar termer som används ofta
- **Plats:** `ORDLISTA` (rad 4015–4044) och `#ordlista`.
- **Belägg:** Antal förekomster i synlig text utan förklaring i ordlistan: IVA 67, SKR 54, procentenhet(er) 25, åldersstandardiserat 23, Gini(-koefficient) 19, inkomstpension 15, Riksgälden 15, anslag 9, nettoöverlevnad 9, disponibel inkomst 8, köpkraftsjusterat 6, öppenvård 6, garantipension 6, Maastricht 4, premiepension 4, budgetsaldo 3, ISK, egenavgifter, ålderspensionsavgift, ekonomisk standard. Definitionen av jobbskatteavdrag använder "skattereduktion" och definitionen av skatteutgifter "reduktioner", som inte heller förklaras.
- **Problem:** Det finns en fungerande ordlista som markerar termer automatiskt, men just de termer som andraspråksläsare och unga fastnar på saknas. "Procentenhet" mot "procent" är den vanligaste källan till missförstånd i sifferjournalistik.
- **Förslag:** Lägg till minst följande (förslag på definitioner):
  - *Procentenhet*: skillnaden mellan två procenttal. Från 10 % till 12 % är 2 procentenheter, men 20 procent.
  - *Åldersstandardiserat*: omräknat som om alla länder hade samma åldersfördelning, så att länder med många äldre inte ser sämre ut.
  - *Köpkraftsjusterat*: omräknat så att samma summa räcker till lika mycket i alla länder.
  - *Gini-koefficient*: mått på hur jämnt något är fördelat. 0 betyder att alla har lika mycket, 1 att en person har allt.
  - *Disponibel inkomst*: det som finns kvar att leva på efter skatt, med bidrag inräknade.
  - *Offentlig bruttoskuld (Maastrichtskuld)*: hela den offentliga sektorns skuld, räknad på det sätt som EU använder.
  - *Anslag / utfall*: anslag är pengar som riksdagen har beslutat om. Utfall är vad som faktiskt betalades ut.
  - *Budgetsaldo*: statens inkomster minus utgifter. Minus betyder underskott, som lånas.
  - *Inkomstpension, premiepension, garantipension*: de tre delarna av den allmänna pensionen.
  - *Öppenvård*: vård där patienten inte läggs in, till exempel på vårdcentral.
  - *IVA*: intensivvårdsavdelning.
  - *SKR*: Sveriges Kommuner och Regioner.
  - *Riksgälden*: myndigheten som lånar pengar åt staten.
  - *Skattereduktion*: avdrag som görs direkt på skatten, inte på inkomsten.
- **Allvar:** hög · **Säkerhet:** hög · **Insats:** S · **Typ:** förbättring

### klarsprak-09. Förkortningar och kanslispråk i löptext och knappar
- **Plats:** budgetens källrad (rad 1993), budgetdiagrammets etiketter (rad 5051–5095), prislistans ingress (rad 1915), kopieringsmeddelanden (rad 6831, 6856), Din ekonomi.
- **Belägg:** "Statsbudgeten täcker ej kommunal skola och sjukvård direkt — dessa finansieras via …", "Ekon. trygghet sjukdom/funkt.", "Försvar & krisberedskap", "FK-belopp", "Kunde ej kopiera", "två löner à 375 tkr", "Därtill det alla delar på", "Skatteutgifter = intäkter staten avstår", "t.o.m.", "inkl.", "m.m.". Både "Länk kopierad" och "Länk kopierad!" förekommer.
- **Problem:** Språkrådet avråder från *ej*, *dessa* och *därtill* i texter till allmänheten. Förkortningar som FK och funkt. kan inte slås upp, och tecken som =, & och à används inte i löptext.
- **Förslag:** *inte* för *ej*, *de* eller upprepat substantiv för *dessa*, *Försäkringskassan* för *FK*, *och* för *&*, *var* för *à*. Diagrametiketterna skrivs med de korta namnen från terminologilistan ("Sjukdom och funktionsnedsättning"). Ett meddelande: "Länken är kopierad" och "Det gick inte att kopiera länken".
- **Allvar:** låg · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

### klarsprak-10. Sjukvårdens rubrik har 24 ord
- **Plats:** `#sjukvard`, h2 (rad 2230).
- **Belägg:** "Sverige lägger störst andel av BNP på vård i Norden, och har längst medellivslängd och bland de lägsta dödstalen som vården kan förhindra". På mobil blir den fem rader lång.
- **Problem:** En rubrik med tre påståenden blir en mening som läsaren måste hålla i huvudet. Formuleringen ändrades 13 november efter granskningen av vårdens utfall, så innehållet ska stå kvar. Förslaget gäller bara uppdelningen.
- **Förslag:** Rubrik: "Sjukvården: störst andel av BNP i Norden och längst medellivslängd". Ingressen börjar: "Sverige har också bland de lägsta dödstalen som vården kan förhindra." Alternativ: frågerubrik som i resten av vyn, "Vad får Sverige för sina vårdpengar?", med alla tre påståendena i ingressen.
- **Allvar:** medel · **Säkerhet:** medel · **Insats:** S · **Typ:** beslut (ingressens ordval berör neutraliteten, roll 4)

### klarsprak-11. Valet "Inkludera pensionsavgift i skatt" är svårt att förstå
- **Plats:** Din ekonomi, "Fler inställningar" (rad 2710–2712).
- **Belägg:** "Av = standard (pensionsavgift 10,21% ger individuell pensionsrätt — inte en "skatt"). På = brutto arbetsgivaravgift 31,42%."
- **Problem:** Hjälptexten består av förkortade uttryck (= standard, brutto) och citattecken. "Individuell pensionsrätt" är fackspråk, och mellanslag saknas före %.
- **Förslag:** Etikett: "Räkna pensionsavgiften som skatt". Hjälptext: "Av (standard): ålderspensionsavgiften, 10,21 % av lönen, räknas inte som skatt, eftersom den blir din egen pension. På: hela arbetsgivaravgiften, 31,42 %, räknas som skatt."
- **Allvar:** medel · **Säkerhet:** hög · **Insats:** S · **Typ:** förbättring

### klarsprak-12. Citattecken som markerar avstånd
- **Plats:** Din ekonomi (rad 2712, 2722), Gini-rutan i Framtid (rad 2567).
- **Belägg:** "inte en "skatt"", "inte en "skatteförmån"", "Vi visar inte heller ett "livstids-netto" — se nedan varför.", "inte en skala från "bäst" till "sämst"".
- **Problem:** Citattecken runt vanliga ord läses ofta som ironi ("så kallad"). Det skaver mot den neutrala hållningen, och andraspråksläsare vet inte om ordet ska tas bokstavligt. "Livstids-netto" är ett ord som sajten hittat på.
- **Förslag:** Skriv vad som menas utan citattecken. Se omskrivning 12.
- **Allvar:** låg · **Säkerhet:** medel · **Insats:** S · **Typ:** förbättring

### klarsprak-13. Budget- och skuldtexterna bygger på nominaliseringar och fackord
- **Plats:** `#budget` och `#skuld-forsvar`: statsbudgetens ingress (rad 1980), räntekortet (rad 2114), statsskuldens text (rad 2161).
- **Belägg:** LIX: statsbudgetens ingress 46, försvarskortet 47, statsskuldsrutorna 43. "Räntekänslighetens effekt", "Statsskulden amorteras inte aktivt", "Riksgälden refinansierar löpande, så effekten dröjer 3–5 år", "budgetsaldo −167 miljarder", "räntor på statsskulden −6 % (utgiftsområde 26, budget mot budget)".
- **Problem:** Substantiv i stället för verb ("räntekänslighetens effekt" i stället för "om räntan stiger") och ord som *amortera* och *refinansiera* gör att bara läsare med ekonomisk bakgrund förstår. Filmen förklarar samma sak med enkla ord ("Skillnaden, 167 miljarder, lånas").
- **Förslag:** Se omskrivning 7–9. Använd filmens formuleringar som mall.
- **Allvar:** medel · **Säkerhet:** hög · **Insats:** S · **Typ:** förbättring

### klarsprak-14. Ledtexterna högst upp i vyerna: dubbel ökning och symboler
- **Plats:** `VYER` (rad 3217–3222), `led` och `ingress`.
- **Belägg:** Framtid: "+26 % fler personer över 80 år 2030 än 2024" (både plus och *fler*, och tre tal efter varandra: "80 år 2030 än 2024"). Metod: "Källa + år". Budgetens vyingress har LIX 62 och Jämförelsers 57 (korta texter, så värdet är osäkert, men andelen långa ord är 43–50 %).
- **Problem:** Det är den första meningen på varje vy, och läsaren snubblar på den.
- **Förslag:** Framtid: tal "+26 %", text "så mycket väntas antalet personer över 80 öka från 2024 till 2030. Det är den grupp som behöver mest vård och omsorg." Metod: "Källa och år". Budget: "Vad staten och hela den offentliga sektorn lägger pengarna på, år 2026."
- **Allvar:** låg · **Säkerhet:** hög · **Insats:** S · **Typ:** förbättring

### klarsprak-15. Prislistans ingress och kortnamn
- **Plats:** `#pristabell`, ingress (rad 1915) och kortet "Ett år på högskola / universitetet" (rad 3385 m.fl.).
- **Belägg:** "Faktiska samhällskostnader — vad du betalar och vad skatten täcker. Alla belopp beräknade som totalkostnad delat med volym." (två meningar utan verb, och *volym* i betydelsen antal). "högskola / universitetet" blandar obestämd och bestämd form.
- **Förslag:** Se omskrivning 10. Kortet: "Ett år på högskola eller universitet".
- **Allvar:** låg · **Säkerhet:** hög · **Insats:** S · **Typ:** rättelse

## 4a. LIX-mätning

LIX = ord per mening + andelen långa ord (fler än sex bokstäver) i procent. Skala enligt Björnsson: under 30 mycket lätt, 30–40 lätt, 40–50 medelsvår (vanlig tidningstext), 50–60 svår (myndighetstext), över 60 mycket svår. Mätt på renderad text. Meningsgräns vid punkt, kolon, semikolon, frågetecken och utropstecken (semikolon räknas inte i standard-LIX, vilket ger något för låga värden där semikolon förekommer).

| Text | LIX | Ord | Ord/mening | Långa ord |
|---|---|---|---|---|
| Start, ingress | 31 | 18 | 9,0 | 22 % |
| Start, metodrad | **53** | 84 | 21,0 | 32 % |
| Start, text under kvittot | **48** | 78 | 19,5 | 28 % |
| Hundralappen, ingress | 39 | 37 | 9,2 | 30 % |
| Vem gör vad, ingress | 26 | 34 | 11,3 | 15 % |
| Filmen som text (alla kapitel) | 37 | 444 | 9,2 | 27 % |
| Din ekonomi, vyingress | 31 | 22 | 22,0 | 9 % |
| Din skatt, inledning och "Så räknar vi" | 37 | 110 | 12,2 | 25 % |
| Marginalskattskortet | 35 | 145 | 16,1 | 19 % |
| Skatter i korthet, ingress | 24 | 49 | 8,2 | 16 % |
| Livsloppet, ingress | 40 | 63 | 12,6 | 27 % |
| Budgeten, vyingress | **62** | 12 | 12,0 | 50 % |
| Statsbudgeten, ingress | **46** | 106 | 9,6 | 37 % |
| Skatteutgifter, ingress | 40 | 51 | 12,8 | 27 % |
| Försvaret, kort | **47** | 70 | 14,0 | 33 % |
| Statsskulden, rutor | 43 | 202 | 14,4 | 29 % |
| Prislistan, vyingress | 36 | 14 | 7,0 | 29 % |
| Prislistan, ingress | 38 | 29 | 7,2 | 31 % |
| Quizet, ingress | 31 | 46 | 11,5 | 20 % |
| Jämförelser, vyingress | **57** | 14 | 14,0 | 43 % |
| Jämförelser, ingress | 34 | 25 | 6,2 | 28 % |
| Jämförelser, sammanfattning | 30 | 43 | 8,6 | 21 % |
| Om måtten | 28 | 52 | 10,4 | 17 % |
| Sjukvård, ingress | 36 | 55 | 9,2 | 27 % |
| Sjukvård, Kapacitet | **45** | 49 | 16,3 | 29 % |
| Sjukvård, Utfall | **47** | 58 | 14,5 | 33 % |
| Sjukvård, Tillgänglighet | 40 | 44 | 14,7 | 25 % |
| Framtid, vyingress | **48** | 15 | 15,0 | 33 % |
| Framtid, "Två trender möts" | 40 | 50 | 10,0 | 30 % |
| Inkomstskillnader (Gini) | 34 | 83 | 7,5 | 27 % |
| Skatt på sparande, ingress | 32 | 35 | 11,7 | 20 % |
| ISK jämfört med depå | 35 | 69 | 17,2 | 17 % |
| Metod, vyingress | 37 | 12 | 12,0 | 25 % |
| Så räknar vi (01–05) | 43 | 271 | 13,6 | 30 % |
| Hur säker är beräkningen? | 37 | 108 | 18,0 | 19 % |
| Så arbetar vi | 42 | 264 | 12,0 | 30 % |
| Om Skatteplattformen | 41 | 113 | 8,7 | 32 % |
| Snabbfakta 1 (kommunalskatten) | 38 | 56 | 9,3 | 26 % |
| Snabbfakta 3 (medianlönen) | 43 | 49 | 12,2 | 31 % |

Mål för en sajt som vill nå breda grupper: under 40 i ingresser och korttexter, under 45 i förklarande texter. Värdena över målet står i fetstil.

## 4b. Terminologilista: ett ord per begrepp

| Begrepp | Former på sajten | Förslag |
|---|---|---|
| Statens budget | statsbudgeten (25), statens budget (6), budgeten | **statsbudgeten** i löptext. Vynamnet "Budgeten" kan stå kvar. |
| Beslutade och faktiska pengar | utgifter, anslag, utfall, budget 2025 | **utgifter** i ingresser. **anslag** och **utfall** bara där skillnaden spelar roll, och förklarade i ordlistan. |
| Hela det offentliga | den offentliga sektorn, hela den offentliga sektorn, offentlig sektor, "stat, kommuner, regioner och pensionssystemet" | **hela den offentliga sektorn**, förklarat första gången i varje vy. |
| Socialt skydd | socialt skydd (15), social trygghet (prislistan, Din ekonomi), "Sjukdom, barn och arbetslöshet", "Övrigt socialt skydd" | **socialt skydd** som huvudnamn. Samma underrader i båda kvittona. |
| Äldre | "Äldre: omsorg och garantipension", "Äldreomsorg, pension", "Äldreomsorg" | **Äldreomsorg och pension** i kvittona, **Äldreomsorg** där bara omsorgen avses. |
| Förvaltning | Förvaltning, Allmän offentlig förvaltning | **Förvaltning** |
| Transporter och näringsliv | Näringsliv och infrastruktur, Vägar, järnväg, näringsliv, Näringsliv och transporter, Infrastruktur, Transporter och kommunikationer | **Vägar, järnväg och näringsliv** i kvitton och hundralappen. Budgetens UO-namn får stå, men med kortnamnet. |
| Genomsnitt i jämförelser | OECD-snitt (119), OECD-snittet, OECD-länderna (7), genomsnittet i OECD-länderna, snittet, medelvärde | **OECD-snittet** och **EU-snittet**. Medianen kallas alltid **OECD-medianen**. |
| Vårdplats | vårdplatser (18), sjukhussängar (7) | **vårdplatser**, med en mening om att internationell statistik kallar dem sjukhussängar. |
| Det man får | förmåner, det du får tillbaka, tar emot, offentliga tjänster och förmåner, det personen själv använder | **det du får tillbaka** i rubriker. **förmåner** i text, förklarat en gång som "skola, vård, omsorg och ersättningar". |
| Gemensamma utgifter | det gemensamma, det alla delar på, gemensamma utgifter, Gemensamma tjänster | **det alla delar på (försvar, vägar och annat)** |
| Exempelhushåll | livssituation, scenario, hushållstyp | **livssituation** |
| Kalkylatorn | Din ekonomi, kalkylatorn | **Din ekonomi** i text som vänder sig till läsaren. |
| Belopp | miljarder kronor, mdkr, miljarder kr | Enligt `CLAUDE.md`: **miljarder kronor** i ingresser och löptext, **mdkr** i tabeller och diagram. Avvikelser: Budgetens ledtext, rutan om hela offentliga sektorn ("Statsbudgeten 2026 är 1 542 mdkr"), skatteutgifternas källrad. |
| Ungefär | cirka (98), ca (51) | **cirka** utanför kvittona och filmens grafik. `CLAUDE.md` kräver "ca" bara i kvitton. |
| Intensivvård | IVA (67), intensivvård (8), intensiven | **intensivvård (IVA)** första gången, sedan IVA. "intensiven" kan stå kvar i kvittots skämtrad. |
| Åldersgränser | under 66 år, född 1959 eller tidigare, över 65, 65+ | **födelseår** när en regel avses, **ålder** när statistik avses. |
| Sidor i Metod | Bildkrediter / Illustrationerna, Om oss / Om Skatteplattformen, Nyckeltal och källor / Nyckeltal | Sidfoten och menyn ska använda sektionens rubrik. |

## 4c. Omskrivningar av femton viktiga texter

Sakinnehållet är oförändrat i alla omskrivningar. Faktagranskaren (roll 2) bör ändå läsa nr 15.

**1. Startsidans metodrad** (rad 1359)
Före: "Kommunalskatt och statlig skatt minus jobbskatteavdraget, med Skatteverkets regler 2026 och kommunalskatten i den kommun du väljer (rikssnittet 32,38 % om du inte väljer). Lön räknas för den som är under 66 år, pension för den som är född 1959 eller tidigare, och egen firma som överskott i enskild firma efter egenavgifter. Kvittot fördelar skatten …"
Efter: "Så räknar vi: kommunalskatt plus statlig skatt, minus jobbskatteavdraget, enligt Skatteverkets regler för 2026. Väljer du ingen kommun används rikssnittet, 32,38 %. Lön räknas med reglerna för den som är född 1960 eller senare och pension med reglerna för den som är född 1959 eller tidigare. Egen firma räknas på överskottet efter egenavgifter. Kvittot delar upp skatten på samma sätt som den offentliga sektorn använde pengarna 2024, utom inkomstpensionen, som betalas med pensionsavgifter. I verkligheten går kommunalskatten till kommunen och regionen, men tillsammans betalar alla skatter alla utgifter." (LIX cirka 41)

**2. Texten under kvittot** (rad 4584)
Före: "Dessutom betalar arbetsgivaren 12 034 kr i arbetsgivaravgift (mindre om du är född 2003–2007), och du betalar moms när du handlar. Kvittot räknar som om du har lönen hela året; sommarjobbar du får du ofta tillbaka skatt i deklarationen."
Efter: "Utöver skatten betalar arbetsgivaren 12 034 kr i arbetsgivaravgift. Är du född 2003–2007 blir avgiften lägre. Du betalar också moms när du handlar. Kvittot räknar som om du har samma lön hela året. Har du bara sommarjobb får du ofta tillbaka skatt när du deklarerar."
Jämförelseraden (eget stycke): "Exemplen på kvittot bygger på prislapparna, Försäkringskassans ersättning för vård av sjukt barn (i snitt 1 185 kr per dag 2025), polisens medellön (SCB), riksdagsledamöternas arvode och vad Försvarets materielverk betalade för 48 artilleripjäser av typen Archer: 5 miljarder kronor."

**3. Prislapparnas jämförelse** (rad 3885, 4294)
Före: "Lika mycket som all inkomstskatt från en medianlön under 1 år och 7 månader"
Efter: "Det är vad en person med medianlön betalar i inkomstskatt på 1 år och 7 månader."

**4. Diagramundertext, cancer** (rad 5704–5712, fältet `enh`)
Före: "Bröstcancer, femårsöverlevnad, procent, åldersstandardiserad femårs nettoöverlevnad, diagnos 2010–2014"
Efter (under rubriken): "Andel som lever fem år efter diagnosen, procent. Diagnos 2010–2014."
Efter (Om måttet): "Talen är justerade för att länderna har olika åldersfördelning och visar överlevnaden som om cancern vore den enda dödsorsaken."

**5. Diagramundertext, undvikbar dödlighet**
Före: "Undvikbar dödlighet, dödsfall före 75 års ålder per 100 000 invånare som hade kunnat undvikas med förebyggande arbete eller vård, åldersstandardiserat, 2023"
Efter: "Dödsfall före 75 år som hade kunnat undvikas med förebyggande arbete eller vård. Per 100 000 invånare, 2023." (Åldersstandardiseringen förklaras i Om måttet och i ordlistan.)

**6. Sjukvårdens rubrik och ingress** (rad 2230–2231), se klarsprak-10.
Efter: Rubrik "Sjukvården: störst andel av BNP i Norden och längst medellivslängd". Ingress: "Sverige har också bland de lägsta dödstalen som vården kan förhindra, och spädbarnsdödligheten är bland de lägsta. Samtidigt har Sverige minst antal vårdplatser per invånare i EU. Här ser du tre sidor av vården: kapacitet, utfall vid sjukdom och tillgänglighet. Sverige är den gröna pricken. Tryck på ett nyckeltal för att se hela diagrammet."

**7. Statsbudgetens ingress** (rad 1980)
Före: "Statsbudgeten 2026: 1 542 miljarder kronor fördelat på 27 utgiftsområden — inkomster 1 375 miljarder, budgetsaldo −167 miljarder."
Efter: "Staten räknar med att betala ut 1 542 miljarder kronor 2026, fördelat på 27 utgiftsområden. Inkomsterna väntas bli 1 375 miljarder. Skillnaden, 167 miljarder, lånar staten."

**8. Budgetens källrad** (rad 1993)
Före: "Statsbudgeten täcker ej kommunal skola och sjukvård direkt — dessa finansieras via kommunalskatt och generella statsbidrag (UO25)."
Efter: "Skolan och sjukvården syns inte direkt i statsbudgeten. Kommuner och regioner betalar dem med kommunalskatt och med generella statsbidrag från staten (utgiftsområde 25)."

**9. Räntekortet och statsskulden** (rad 2114, 2161)
Före: "Räntekänslighetens effekt … Riksgälden refinansierar löpande, så effekten dröjer 3–5 år." och "Statsskulden amorteras inte aktivt; som andel av BNP minskar den när ekonomin växer snabbare än skulden."
Efter: Rubrik "Om räntan stiger en procentenhet". Text: "… kostar statsskulden på sikt cirka 14 miljarder kronor mer per år. Det tar 3–5 år innan hela kostnaden syns, eftersom staten byter ut gamla lån mot nya lite i taget." Och: "Staten betalar inte av på skulden enligt någon plan. Skulden blir ändå mindre som andel av BNP när ekonomin växer snabbare än skulden."

**10. Prislistans ingress** (rad 1915)
Före: "Faktiska samhällskostnader — vad du betalar och vad skatten täcker. Alla belopp beräknade som totalkostnad delat med volym. Källa och år står på varje prislapp; patientavgifter och FK-belopp gäller 2026."
Efter: "Vad samhällets tjänster kostar, vad du själv betalar och vad skatten betalar. Varje pris är den totala kostnaden delad med antalet, till exempel elever eller vårddygn. Källa och år står på varje prislapp. Patientavgifter och belopp från Försäkringskassan gäller 2026."

**11. Pensionsavgiften i Din ekonomi** (rad 2710–2712), se klarsprak-11.

**12. "Vad visas inte?" i Din ekonomi** (rad 2722)
Före: "Vad visas inte? Inkomstpension är avgiftsbaserad — dina egna inbetalningar, inte en "skatteförmån". Vi visar inte heller ett "livstids-netto" — se nedan varför."
Efter: "Vad visas inte? Inkomstpensionen, eftersom den betalas med dina egna pensionsavgifter och inte med skatt. Vi räknar inte heller ihop vad du betalar och får under hela livet. Varför står längre ner."

**13. Framtids ledtext** (rad 3221)
Före: "+26 % fler personer över 80 år 2030 än 2024, den grupp som behöver mest vård och omsorg."
Efter: tal "+26 %", text: "så mycket väntas antalet personer över 80 öka från 2024 till 2030. Det är den grupp som behöver mest vård och omsorg."

**14. Gini-rutan i Framtid** (rad 2567)
Före: "Jämför inte de fyra talen rakt av. De mäter helt olika fenomen: förmögenhets-Gini (0,75) mäter ackumulerat kapital och ärvda tillgångar; marknadsinkomst-Gini (0,48) mäter inkomst innan skatter och bidrag; …"
Efter: "De fyra talen mäter olika saker och ska inte jämföras med varandra. Förmögenhet (0,75): det man äger, till exempel sparade och ärvda pengar. Inkomst före skatter och bidrag (0,48). Inkomst efter skatter och bidrag, med vinster när man har sålt aktier eller bostad (0,314). Inkomst efter skatter och bidrag (0,288): den siffra som oftast citeras. Gini-koefficienten är 0 om alla har lika mycket och 1 om en person har allt."

**15. ISK, fördelningseffekten** (rad 2989)
Före: "Enligt regeringen ökar den hushållens ekonomiska standard med cirka 0,2 % i snitt, mest räknat i procent i inkomstgrupp 3–9."
Efter: "Enligt regeringen får hushållen i genomsnitt cirka 0,2 % mer att leva på (ekonomisk standard). Räknat i procent ökar det mest i inkomstgrupp 3–9 av 10." (Roll 2 bör bekräfta att "mer att leva på" är en rimlig förklaring av ekonomisk standard i propositionen.)

Ytterligare en att överväga (Skatter i korthet, rad 2824): "Statlig skatt betalas på den del av lönen som är över cirka 55 000 kr i månaden (660 000 kr om året), den så kallade brytpunkten. I lagen står gränsen som 643 000 kr (skiktgränsen), men den gäller inkomsten efter grundavdraget."

## 5. De tre viktigaste åtgärderna

1. **Ett namn per begrepp (klarsprak-03 och 04).** Lägg kategorinamnen i en gemensam konstant och följ terminologilistan. Det är den enskilda förändring som gör mest för att läsaren ska kunna följa en siffra mellan vyerna, och det minskar risken för att samma sak beskrivs på två sätt i framtiden.
2. **Rätta de två texter som upprepas överallt (klarsprak-01 och 02).** "Här är högre är bättre" och "Lika mycket som all inkomstskatt från en medianlön under …" syns i 36 diagram respektive minst 34 prislappar. Båda tar mindre än en timme och tar bort ett grammatikfel och en tvetydighet som många läsare möter.
3. **Fyll på ordlistan och flytta facktermerna ner i "Om måttet" (klarsprak-08 och 07).** Ordlistans automatiska markering finns redan. Med 14 nya termer och kortare diagramundertexter blir Jämförelser och Budget läsbara för andraspråksläsare och gymnasieelever, utan att något sakinnehåll försvinner.

## 6. Frågor till ägaren

1. Vilket kategorinamn ska gälla för COFOG-gruppen social protection: "socialt skydd" (myndighetsspråk, COFOG) eller "social trygghet" (vardagligare)? Jag rekommenderar "socialt skydd" eftersom det är Eurostats och SCB:s svenska term.
2. Ska startkvittots korta, vardagliga radnamn ("Sjukdom, barn och arbetslöshet") också användas i Din ekonomi-kvittot, eller ska båda använda de formella namnen? Jag rekommenderar de vardagliga namnen i båda kvittona.
3. Ska Sjukvårdens rubrik delas (klarsprak-10)? Bör beslutas tillsammans med neutralitetsgranskaren.
4. Vill du att Budget och Framtid får något av kvittots lekfullhet, till exempel frågerubriker som i Jämförelser ("Vad kostar räntan?")? Det skulle göra tonen jämnare mellan vyerna.
5. Ska kvittoraden "ca en 310 000-del av en Archer-pjäs" bytas mot en jämförelse som är lättare att föreställa sig? Det är en innehållsfråga, inte bara en språkfråga.

## 7. Metod och avgränsning

- **Underlag:** `index.html` serverad lokalt (`python3 -m http.server 8776`) och renderad med Chrome headless (`--dump-dom`, alla vyer). Synlig text extraherades med ett eget Python-skript (stdlib `html.parser`, utan script, style och svg), sammanlagt 1 617 textblock. Källrader i koden kontrollerades med `grep` och `sed`.
- **LIX:** eget skript (`/tmp/klar-scripts/lix.py`) på 43 textavsnitt. Ord = token som innehåller bokstav eller siffra, långt ord = fler än sex bokstäver. Meningsgränsen räknar även semikolon, vilket ger något lägre värden än standard-LIX.
- **Terminologi:** frekvensräkning av varianter i den synliga texten och genomgång av `ORDLISTA`, `START_GRUPPER`, `WBAR_LABELS`, `wLabels`, prislistans `cl` och `JMF_DATA`.
- **Skärmbilder:** `/tmp/klarsprak-start.png` (1280 px), `/tmp/klarsprak-sjukvard-mobil.png` (cirka 500 px), `/tmp/klarsprak-budget.png`, `/tmp/klarsprak-kalkylator.png`. Iakttagelse som jag inte undersökte vidare och som hör till roll 10: direktlänken `#sjukvard` och `#jmf-sjukvard-9` gav en tom skärmbild i 1280 px headless (`/tmp/klarsprak-sjukvard.png`). Det kan bero på headless-läget.
- **Riktlinjer:** Språkrådets klarspråksråd (aktiv form, verb före substantiv, ett ord per begrepp, förklara facktermer, undvik *ej*, *dessa*, *därtill*) och MFD:s riktlinjer för lättläst (en tanke per mening, vanliga ord, inga förkortningar).
- **Inte testat:** delningsbilderna (`faktaBild`, kvittobilden) och quizets alla frågor som text, filmens textrutor i stående format, aria-etiketter i detalj (roll 7), och om omskrivningarna är sakligt korrekta i alla detaljer (roll 2). Ingen läsning med verkliga andraspråksläsare. Bedömningen bygger på riktlinjer och mätvärden.
