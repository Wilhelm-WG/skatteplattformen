# Användartest: Johan, 47, kommunal controller (dator 1280 px)

Testat: #start (lön 42 000), #budget, #kalkylator (47 år, 600 tkr), #oecd, #metod inklusive rättelseloggen. Fem skärmbilder och den fullständiga sidtexten (grep).

## 1. Första intryck
Jag förstod direkt vad sajten gör: skriv in lönen och få ett kvitto. Kvittot summerar rätt (2 635+1 453+1 424+1 002+945+921+384 = 8 764 kr). Arbetsgivaravgiften 13 196 kr är exakt 31,42 % av 42 000. Det första jag letade efter var metodraden under formuläret, och den finns: "Skatten fördelas som den offentliga sektorns utgifter 2024, utom inkomstpensionen". Det är ett ovanligt ärligt val att redovisa. Rubriken "Vad fan…" stör mig inte. Den gör sajten lättare att komma ihåg.

## 2. Uppgifter
- **Stämma av statsbudgeten (lyckades).** Siffrorna hänger ihop internt: 1 375 − 1 542 = −167, UO6 168,8 → 225,0 = +33 %, UO9 120,5 → 127,7 = +6 % och 1 542 mdkr / 10,6 miljoner ≈ 145 000 kr. Anslag och utfall hålls isär ("utfall 2020 och 2024, budget 2025 och 2026"). UO26 redovisas både med och utan Riksbankens kapitaltillskott på 25 mdkr. Det är snyggt.
- **Statsskuld kontra Maastrichtskuld (lyckades).** Begreppen hålls isär. Statsskulden är 1 430 mdkr, 21 % av BNP (Riksgälden). Den offentliga bruttoskulden är 35,1 % (Eurostat), och texten säger uttryckligen att den "även omfattar kommuner och regioner". Budgetbeslutets saldo (−167) och Riksgäldens prognos (−196) står bredvid varandra med källa.
- **Statsbidragen (delvis).** Det finns 190 riktade bidrag, och kommunerna fick 45 och regionerna 19 mdkr (Statskontoret 2026:25). UO25 ligger på 180,7 mdkr. Men utjämningssystemet förklaras inte alls. "Generella statsbidrag och utjämning" (15 % av kommunernas intäkter) är en enda klump. Inkomstutjämning, kostnadsutjämning och LSS-utjämning nämns inte, och inte heller att kostnadsutjämningen är mellankommunal. Den som vill förstå varför Västsverige får som det får blir inte klokare. Den ärliga fotnoten om att SCB:s generella statsbidrag omfattar mer än anslaget (läkemedelsbidraget) uppskattar jag.
- **Metod och rättelselogg (lyckades, med reservation).** Loggen är ovanligt öppen, med datum och "fel → rätt". Den visar också hur många fel det har funnits: ett hundratal rättelser på en vecka, bland annat statsskuld 16 % i stället för 39 % 1980 och sjukvård som summerade till 940 mdkr i stället för 474 mdkr. Det sänker mitt förtroende för siffror som ännu inte har granskats.
- **Din ekonomi (lyckades).** Vid 600 tkr: kommunalskatt 189 tkr, jobbskatteavdrag −52 tkr och arbetsgivaravgift utan pensionsdel 127 tkr (21,2 %). Det ser rimligt ut, och marginalskattetabellen (32 % vid 600 tkr, 52 % över brytpunkten) stämmer med texten. Bra att det står "Det är inte en prognos för just dig".
- **Jämförelser (lyckades).** Översikten med sju länder, år och "lägre är bättre / ingen självklar riktning" är bra och neutral. Varje rad har sitt eget år (2021–2026), vilket är redovisat.

## 3. Förtroende och neutralitet
Mitt förtroende är **ganska högt för budgetdelen**. Källor med propositionsnummer (prop. 2025/26:1, skr. 2025/26:98, Statskontoret 2026:25, gov_10a_exp) är precis vad jag vill se. Det som drar ner förtroendet är serieblandningen för skattekvoten (se problem 1), uppdateringsdatum som inte stämmer och mängden rättelser.

Sajten är **i huvudsak neutral**. Ett par formuleringar lutar ändå:
- I Framtid står: "Två trender möts: skattekvoten har sjunkit med cirka 2,6 procentenheter sedan 2010, samtidigt som antalet personer över 80 år väntas öka". Kopplingen antyder att skattesänkningar och äldrevården hör ihop. Sedan räknas bara sänkningar upp ("jobbskatteavdraget… förmögenhetsskatten slopades… Bolagsskatten och arbetsgivaravgifterna sänktes"). Det är faktamässigt sant men urvalet styr läsningen.
- Citatet "Du finansierar också andras barn, sjukvård och pension — det är innebörden av ett solidariskt samhällskontrakt" är värderande, men det är tydligt en redaktionell röst och inte en siffra. Det stör mig inte, men det krockar lite med policyns "Vi försöker skriva utan värderande ord".

## 4. Språk och begrepp
- "Kommunalskatt (32,38 %)". Juridiskt riktigt, eftersom regionskatten ingår, och sajten förklarar uppdelningen 20,69 + 11,69 under #start. Bra.
- "U06", "U09" i budgetdiagrammet men "UO6" i texten. Det ska vara UO, inte noll.
- "Kommunalskatten ±3" i känslighetsdiagrammet. Enheten (procentenheter) står bara i bildtexten.
- "Ekonomistyrningsverket (numera Statskontoret)". Det känner jag inte igen. Redaktionell policy listar samtidigt "Ekonomistyrningsverket" som källa och budgetdiagrammet anger "ESV". Antingen stämmer påståendet inte, eller så är resten av texten inte uppdaterad.

## 5. Problem
1. **Framtid, skattekvot: serierna är troligen fortfarande blandade.** Diagrammet "Skattekvot … Sverige 2010–2025" anger SCB som källa och visar 2010 43,1 % och 2024 40,8 %. Enligt rättelseloggen (28 okt) är 43,1 % för 2010 **OECD:s** värde ("2000 50,0 %, 2010 43,1 %, 2024 41,4 %"). Påståendet "sjunkit med cirka 2,6 procentenheter sedan 2010" (43,1 − 40,5) kan därmed blanda OECD 2010 med SCB 2025. Det är just det felet som loggen säger är rättat. *Allvar: medel–hög.* *Förslag:* hämta 2010 till 2020 ur SCB:s egen serie och räkna om skillnaden.
2. **Datumen stämmer inte.** Budgeten, Jämförelser, Din ekonomi och Metod säger "Uppdaterad 29 oktober 2026". #start säger "UPPDATERAD 29 OKTOBER 2026". Men rättelser som gäller just de vyerna är daterade 4–5 november. *Medel.* *Förslag:* låt datumet följa senaste rättelse per vy.
3. **"Ekonomistyrningsverket (numera Statskontoret)"** (Metod, primärkällor). Uppgifterna motsäger varandra på samma sida. *Medel.* Kontrollera och skriv konsekvent.
4. **Startsidan: hjälptexten "Förifyllt med medianlönen (SCB, 2025)" är statisk.** Den står kvar när lönen kommer från en delad länk (`?lon=42000`), och då står 42 000 bredvid ordet "medianlönen". Medianlönen är 38 300 enligt resten av sajten. *Medel*, eftersom delade länkar sprids. *Förslag:* dölj eller byt texten när värdet avviker från 38 300.
5. **Statsbidragen: utjämningssystemet saknas.** "Bidrag och utjämning" nämns men förklaras inte, och beloppet för generella bidrag står bara som stapel i UO25. *Medel* för en sakkunnig läsare. *Förslag:* lägg till en kort ruta om kommunalekonomisk utjämning (inkomst-, kostnads- och LSS-utjämning, strukturbidrag och regleringspost), med belopp och källa (SCB eller Statskontoret).
6. **Kvittots rad "POLIS, KULTUR, MILJÖ, RÄNTOR".** Enligt COFOG ligger statsskuldsräntor under 01 Allmän offentlig förvaltning, inte under ordning och säkerhet. Sajten har kanske flyttat dem medvetet, men det syns inte i metodraden. *Låg.* *Förslag:* nämn grupperingen i metoden.
7. **Metod punkt 01: "Statens budget för 2026 är 1 542 miljarder kronor, ungefär hälften av det [3 223 mdkr 2024]".** Här jämförs olika år och olika avgränsningar, eftersom statsbudgeten inkluderar transfereringar till kommunsektorn. *Låg.* *Förslag:* skriv "utfallet 2024 var 1 442" eller förklara konsolideringen.
8. **Din ekonomi, toppen.** Rubriktexten säger "i skatt per månad på en lön på 25 000 kronor" fast jag valt 600 tkr/år (50 000 kr), och den översta siffran döljs delvis under den fasta menyn när vyn öppnas. *Låg.*
9. **Kvittot nämner inte public service-avgiften.** Kvittot säger "Kommunalskatt och statlig skatt", men public service-avgiften (max 1 184 kr) finns bara i skattesammanställningen. *Låg.*
10. **Jämförelser, läkare per 1 000 invånare.** Samma kort visar 4,7 (Eurostat 2024) och 4,4 (Världsbanken 2021). Det är redovisat men förvirrande. *Låg.*

## 6. Det bästa
- Rättelseloggen med "fel → rätt" och datum. Ingen myndighet gör det så tydligt.
- Budgetdelen håller isär anslag och utfall, budgetbeslut och prognos, statsskuld och Maastrichtskuld, och UO6 och Natos definition ("kan inte jämföras direkt med anslagen ovan").
- Skatteutgifterna med skrivelsenummer, och de summerar (461,5 mdkr för de elva posterna).
- Kvittots metodrad om att inkomstpensionen undantas, och känslighetsanalysen i Metod.

## 7. Skulle jag dela den?
Ja, med kollegor i ekonomiavdelningen och med politiker i nämnderna som en pedagogisk ingång. Statsbudgeten och kvittot håller. Jag skulle **inte** använda skattekvotsavsnittet i Framtid som underlag förrän serieblandningen är utredd. För kommunsektorn saknas utjämningssystemet, och det är där våra frågor finns.
