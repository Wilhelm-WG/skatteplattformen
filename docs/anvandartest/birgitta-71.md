# Användartest: Birgitta, 71 år, pensionerad mellanstadielärare i Linköping (pension ca 22 000 kr/mån)

Testat 2026-11-05 med headless Chrome i 820 px (surfplatta) och 390 px (mobil). Vyer: #start (`?lon=22000`), #kalkylator (`?age=71&inc=264`) och #oecd. Ungefär tio skärmbilder samt läsning av HTML-texten.

## 1. Första intryck (10 sekunder)
Rubriken "Vad fan får vi för pengarna?" fångar mig, och jag förstår direkt att det handlar om skatt. Instruktionen "Skriv in din lön" och den stora rutan med "38 300 kr i månaden" är tydliga. Men det står **lön**, och jag har pension. Jag skriver ändå in 22 000 och får ett fint kvitto. Först i den lilla grå texten under knapparna ser jag att det gäller "för den som är under 66 år". Då undrar jag om kvittot alls gäller mig.

## 2. Uppgifter
**a) Startsidans kvitto med min pension: delvis.**
Kvittot är begripligt och roligt. "ca 18 minuter på intensiven" och "ca 1 dags hemtjänst för en äldre" är saker jag förstår. Men allt på kvittot förutsätter lön: "KASSÖR: ARBETSGIVAREN", "BETALT MED: LÖN", "VÄLKOMMEN ÅTER NÄSTA LÖNEDAG" och "Dessutom betalar arbetsgivaren 6 912 kr i arbetsgivaravgift". Inget av det stämmer för en pensionär. Kvittot säger 3 739 kr i skatt. I Din ekonomi får jag 3 689 kr för samma belopp som pension. Skillnaden är liten, men startsidan har inget val för "Jag är pensionär". Den enda ledtråden är "under 66 år" i liten grå text.

**b) Din ekonomi för 71 år med 22 000 kr i pension: delvis lyckat.**
Bra:
- Åldern ger etiketten "Ny pensionär".
- Pensionärskvittot säger rätt saker: "KASSÖR: PENSIONSMYNDIGHETEN", "BETALT MED: PENSION" och "SPARA: SKATTEN ÄR 16,8 % AV PENSIONEN".
- Arbetsgivarens kvitto säger "PÅ PENSION BETALAS INGEN ARBETSGIVARAVGIFT."
- Staplarna visar vad jag får: "Hälso- och sjukvård 88 tkr", "Äldreomsorg 29 tkr", "Totalt 208 tkr/år".

Förvirrande:
- Överst står fortfarande "4 466 kr i skatt per månad på en lön på 25 000 kronor … Kvar blir 20 534 kronor". Det står kvar även när jag har valt 71 år och 22 000 kr, och även efter 15 sekunders väntan. Jag tror först att det är min siffra.
- Fältet heter "LÖN FÖRE SKATT", och skatterutan säger "DRAS FRÅN LÖNEN".
- Ett reglage för ålder och ett för lön. Jag är inte van vid sådana. Rutan där man skriver in beloppet fungerar bättre.
- "I modellen vid denna ålder: en genomsnittlig person … tar emot cirka 137 tkr mer i offentliga tjänster än den betalar i skatt / år. Skillnaden betalas av skatt från dem som arbetar." Det är sakligt, men det känns lite som en pekpinne mot pensionärer. Meningen i den gröna rutan räddar det delvis: "Pension, vård och omsorg betalas nu av dagens skatter … på samma sätt som du under arbetslivet betalade för den tidens pensionärer."
- Under "Fyra livssituationer" finns Barnfamilj, Ensamstående, Kronisk sjukdom och Anhörigvårdare, men ingen pensionär.

**c) Betalar pensionärer för mycket skatt?: misslyckades.**
Ingenstans svarar sajten rakt på det. Svaret finns bara i metodtexten, i ett dolt "Så räknar vi"-avsnitt: "Pensionärsskatt: förhöjt grundavdrag och inget jobbskatteavdrag på pension." Jag fick själv jämföra startsidans 3 739 kr med 3 689 kr i Din ekonomi. Det gör ingen pensionär.

**d) Sjukvård i Jämförelser: lyckades, och det här var bäst.**
Rubriken "Sverige lägger störst andel av BNP på vård i Norden, men har minst antal vårdplatser" säger precis det jag undrar över. Rutorna "84,1 år medellivslängd", "1,9 vårdplatser per 1 000" och "1 191 vårdplatser saknas per dag" är tydliga och har källa (Socialstyrelsen, Världsbanken). Översikten med prickar ("BÄST ●●●○ SÄMST", "plats 1 av 7") gick att förstå efter en stund, men prickarna och texten "ingen självklar riktning" är små. Flikarna "Översikt / Sjukvård / Utbildning …" och "Kapacitet / Utfall vid sjukdom" ser ut som knappar, men jag är osäker på vad som händer om jag trycker.

**e) Läsbarhet: delvis.**
Brödtext och rubriker är fina. Men mycket text är väldigt liten och grå. Den vanligaste textstorleken i koden är 0,6875 rem (11 px). Det gäller förklaringen under kvittot, källraderna under staplarna, "Skatten räknas med Skatteverkets regler …", och etiketterna i versaler som "DIN LÖN FÖRE SKATT" och "HITTA RÄTT". Kontrasten för grå text (#66615A på beige) är godkänd, men liten text på beige blir ändå tung för mig. Kvittot i maskinskrift med ljusgröna underrader ("ca 18 minuter på intensiven") är svårast att läsa.

**f) Hitta tillbaka: delvis.**
Vid 820 px finns ingen synlig meny. Det finns bara en liten knapp "☰" utan text. Jag vet inte att den betyder meny. Logotypen "Skatteplattformen" leder hem, men det syns inte. Bra är brödsmulan "Start › Din ekonomi" och länken "Nästa: …" längst ner i varje vy. Sidfoten har tydliga länkar till alla vyer. På surfplattan såg jag dock inte "Start › Jämförelser" ordentligt. I skärmbilden (820 px) låg brödsmulan delvis dold under den fasta toppraden.

## 3. Förtroende
Jag litar ganska mycket på siffrorna. Det finns källa och år överallt ("Socialstyrelsen", "Kolada", "Eurostat COFOG"), ett datum ("Uppdaterad 29 oktober 2026") och en rättelselogg. Det ger förtroende. "Det är inte en prognos för just dig" är ärligt. Sajten upplevs mest neutral. "Du finansierar också andras barn, sjukvård och pension, det är innebörden av ett solidariskt samhällskontrakt" tycker jag är fint, inte partipolitiskt.

Två saker drar ner förtroendet:
- Den fasta siffran "4 466 kr … 25 000 kronor" som inte stämmer med det jag skrivit in.
- Pensionärsskatten är en förenkling. I dataexporten står det "Förenklat: förhöjt grundavdrag som schablon (+40 %) … Ska ersättas med SKV 433:s regler." Det betyder att just min skatt är den minst exakta på sajten.

## 4. Språk och begrepp
- "Vad fan" i rubriken: lite fräckt, men jag ler.
- "COFOG", "BNP", "tkr", "brytpunkt", "marginalskatt", "sparkvot", "NTA-metoden": för mycket fackspråk. "tkr/år" förstår jag till slut, men "kronor per år" vore enklare.
- "Social trygghet 89 tkr": ingår min pension där eller inte? Det står på annat ställe att "inkomstpensionen ingår inte", men det framgår inte vid stapeln.
- "ca en 640 000-del av en Archer-pjäs": vad är en Archer-pjäs?
- "Lön före skatt" och "Dras från lönen" när jag har pension.

## 5. Problem
1. **Startsidan saknar pensionärsval.** Kvittot räknar för den som är under 66 år och pratar om lön, arbetsgivare och lönedag. Allvar: **hög** för min målgrupp. Förslag: en ruta eller knapp "Jag har pension" som byter till Din ekonomis pensionsberäkning och kvittotext ("BETALT MED: PENSION").
2. **Din ekonomi, översta siffran.** "4 466 kr … på en lön på 25 000 kronor" står kvar oavsett vad jag fyller i. Allvar: **medel**. Förslag: låt siffran följa inmatningen, eller märk den tydligt som "Exempel".
3. **Din ekonomi, fältnamn för pensionärer.** "LÖN FÖRE SKATT" och "DRAS FRÅN LÖNEN" står kvar vid 71 år. Allvar: **medel**. Förslag: byt till "Pension före skatt" när åldern är 66 år eller mer.
4. **Inget svar på om pensionärer betalar mer eller mindre skatt.** Allvar: **medel**. Förslag: en rad i pensionsläget, till exempel "Med samma belopp som lön hade skatten varit 3 739 kr", plus en mening om förhöjt grundavdrag.
5. **Fyra livssituationer saknar pensionär.** Allvar: **låg till medel**. Förslag: lägg till "Pensionär som bor ensam" eller "Pensionärspar".
6. **Liten text.** Mycket text är 11 px, grå och på beige bakgrund (källrader, förklaringar, etiketter i versaler, kvittots underrader). Allvar: **medel**. Förslag: minst 14 px för förklarande text, mörkare grå, och gärna en knapp för större text.
7. **Menyn vid 820 px.** Den syns bara som "☰" utan ord. Allvar: **medel**. Förslag: skriv "Meny" bredvid symbolen, eller visa menyraden på surfplatta.
8. **Brödsmulan.** "Start › Jämförelser" låg delvis dold under den fasta toppraden i skärmbilderna (820 px, #oecd och #kalkylator). Allvar: **låg**, och det kan delvis bero på hur skärmbilden togs. Förslag: kontrollera avståndet till toppen.
9. **Reglage för ålder och lön.** Svåra för ovana användare och med darriga fingrar. Allvar: **låg**. Det finns en ruta för beloppet. Förslag: lägg till en sifferruta för ålder också.
10. **Mobil 390 px.** I skärmbilderna var text och kvitto avskurna till höger. Allvar: **oklart**. Det kan bero på att headless Chrome inte går under en viss bredd, så det bör kontrolleras på en riktig telefon.

## 6. Det bästa
- Sjukvårdsdelen i Jämförelser: ärlig, konkret och med källor. "1 191 vårdplatser saknas per dag" och "nära var fjärde läkare … skriver ut patienter för tidigt" är precis vad vi pratar om i fikarummet.
- Pensionärskvittot i Din ekonomi med "KASSÖR: PENSIONSMYNDIGHETEN", och att sajten tydligt säger att ingen arbetsgivaravgift betalas på pension.
- Jämförelserna i vardagstermer ("ca 1 dags hemtjänst för en äldre").
- Den gröna rutan om generationskontraktet. Den känns rättvis mot oss pensionärer.

## 7. Skulle jag dela den?
Ja, delvis. Sjukvårdsjämförelsen skulle jag skicka till väninnorna i PRO och till min dotter. Startsidans kvitto skulle jag inte dela med andra pensionärer förrän det finns ett pensionsläge, eftersom de skulle säga "det här gäller ju inte oss, det står lön".
