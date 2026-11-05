# Skatteplattformen: troliga missförstånd (granskning 5 nov 2026)

Underlag: index.html (radnummer gäller filen som den ser ut nu; filen ändrades under granskningen, så de kan förskjutas något) och skärmbilder av live-sajten. Marginalskattekortet tas inte upp eftersom det redan åtgärdas. 16 fynd, sorterade efter prioritet.

---

## HÖG

### 1. Skattesatserna i "Skatter i korthet" visas som stora tal utan effektiv nivå
**Plats:** #kalkylator → "Skatter i korthet" (#skatter), korten Kommunalskatt (~r. 2620), Statlig inkomstskatt, Arbetsgivaravgift (~r. 2644), Kapitalskatt. Samma sak gäller Snabbfakta nr 1 (FAKTA[0], ~r. 3907), vars delningsbild bara visar "32,38 % är kommunalskatten i snitt 2026".
**Citat:** "Kommunalskatt **32,4 %**", "Statlig inkomstskatt **20 %**", "Arbetsgivaravgift **31,42 %**".
**Troligt missförstånd:** Det är samma fel som med marginalskatten. Läsaren tror att 32 % av lönen går till kommunalskatt och att höginkomsttagare betalar 52 % av hela lönen. Arbetsgivaravgiften läses som 31 % av vad arbetet kostar.
**Vad som gäller:** Vid medianlön blir den faktiska inkomstskatten cirka 20 %, eftersom grundavdrag och jobbskatteavdrag drar ner den (sajten räknar själv fram detta i kortet "Effektiv inkomstskatt"). Den statliga skatten tas bara på den del av lönen som ligger över cirka 660 000 kr/år, och bara 11–13 % av de skattskyldiga betalar den. Arbetsgivaravgiften är 31,42 % av lönen men 23,9 % av den totala lönekostnaden (31,42/131,42).
**Förslag:** Lägg en rad under varje stort tal, till exempel: "I praktiken vid medianlön: ca 20 % av lönen" (kommunalskatt) och "Bara på lönedelen över 55 000 kr/mån. Vid 70 000 kr/mån blir den statliga skatten ca X % av hela lönen" (räkna fram X med modellen). Flytta kortet "Effektiv inkomstskatt" först i raden. Ändra delningsbildens text i Snabbfakta 1 till "32,38 % är satsen. Efter avdragen betalar en medianlönetagare ca 20 % av lönen."
**Prioritet:** Hög. Det rör kärnsiffran som alla tittar på, och korten och delningsbilden sprids utan sitt sammanhang.

### 2. Kalkylatorn räknar arbetsgivaravgift och moms som "Skatt du betalar" och summerar dem med inkomstskatten
**Plats:** #kalkylator, kortet "Skatt du betalar i år (vid … tkr/år)" (~r. 2556 och renderingen i JS).
**Citat:** Vid 300 tkr/år: "Summa, 4 466 kr i månaden 53 tkr … Arbetsgivaravgift (utan pensionsavgift) 40 tkr · Moms … 31 tkr · **Totalt per år 124 tkr**".
**Troligt missförstånd:** 124 tkr bredvid 300 tkr läses som att man betalar 41 % av lönen i skatt.
**Vad som gäller:** Inkomstskatten är 53 tkr, alltså 17,7 % av lönen. Arbetsgivaravgiften läggs ovanpå lönen, så basen är 340 tkr och inte 300 tkr. Momsen tas på konsumtionen av nettolönen. Summan är rimlig som "skatt som ditt arbete och din konsumtion ger upphov till", men den kan inte jämföras med bruttolönen.
**Förslag:** Byt rubriken till "Skatter kopplade till din lön i år". Visa en procentsats per rad: "Inkomstskatt 53 tkr (18 % av lönen)". Skriv "Totalt 124 tkr = 36 % av vad ditt arbete kostar (lön + avgift 340 tkr)" i stället för att låta summan stå bredvid bruttolönen. Gör samma översyn av texten "Totalt ca 236 tkr, cirka 42 % av lönen plus den avgiften" i kortet Effektiv inkomstskatt. Den är korrekt formulerad men lätt att läsa som "42 % av lönen".
**Prioritet:** Hög. Kalkylatorn är sajtens personliga vy, och felet ger samma överskattning som ägaren just rättar.

### 3. Startkvittot säger "DIN SKATT" och visar vad den går till, fast fördelningen är en modell
**Plats:** #start, hero-kvittot (KVITTO_ANDELAR ~r. 4207, raderna ~r. 4245–4251).
**Citat:** "KVITTO · DIN SKATT 2026 … FÖRSVAR 337,00 ca en 310 000-del av en Archer-pjäs … VÄGAR, JÄRNVÄG 829,00".
**Troligt missförstånd:** Läsaren tror att just hens 7 692 kr bokstavligen går till dessa poster, till exempel att 337 kr av hens skatt går till försvaret.
**Vad som gäller:** För en medianlönetagare består inkomstskatten nästan helt av kommunalskatt, som enligt lag går till kommunen och regionen. Ingen statlig inkomstskatt betalas. Kvittot fördelar i stället skatten i proportion till hela den offentliga sektorns utgifter (COFOG 2024 utan inkomstpension). Det är en rimlig pedagogisk modell, men det framgår bara av den finstilta texten.
**Förslag:** Skriv på själva kvittot (inte bara i fottexten) en rad som "FÖRDELAT SOM ALLA OFFENTLIGA UTGIFTER 2024", eller ändra rubriken till "Om din skatt delades som hela den offentliga sektorns utgifter". Lägg gärna till: "I praktiken går kommunalskatten till kommun och region, som också får statsbidrag."
**Prioritet:** Hög. Det är det första läsaren ser, och kvittot delas som bild.

### 4. Förmånerna i kalkylatorn är snitt för åldern, även när läsaren uppger lön
**Plats:** #kalkylator, kortet "Offentliga tjänster och förmåner i år, genomsnitt för 22 år (tkr)" (~r. 2539, JS ~r. 5219).
**Citat:** Vid 22 år och lön 25 000 kr: "Utbildning 51 tkr · Hälso- och sjukvård 13 tkr · Social trygghet 42 tkr · Totalt **106 tkr/år**".
**Troligt missförstånd:** En 22-åring som jobbar heltid tror att hen själv tar emot 51 tkr i utbildning och totalt 106 tkr. Det gäller generellt: "du tar emot" läses som "jag".
**Vad som gäller:** Beloppet är ett snitt för alla 22-åringar, inklusive studenter, och modellen tar inte hänsyn till inkomst. Det står i ingressen och i den utfällbara rutan, men inte på själva kortet.
**Förslag:** Byt etiketten till "Snitt för alla 22-åringar (inte du personligen)". När en lön är ifylld kan en rad visas: "Snittet inkluderar studenter. Om du arbetar heltid får du sannolikt mindre utbildning." Byt också "Var i livet befinner du dig?" och "betalar … mer i skatt än den tar emot" till "en genomsnittlig person i din ålder", som redan används på ett ställe.
**Prioritet:** Hög. Alla som använder kalkylatorn påverkas.

### 5. Rubriken "Försvar … är statens största utgiftsområde" ger fel bild av vad staten lägger mest på
**Plats:** #budget, h2 (~r. 1746), stapeldiagrammet över utgiftsområden.
**Citat:** "Försvar och krisberedskap är statens största utgiftsområde 2026".
**Troligt missförstånd:** Läsaren tror att försvaret är statens största kostnad.
**Vad som gäller:** Påståendet stämmer formellt, men bara för att socialförsäkringarna är uppdelade på flera utgiftsområden. UO10 (122,0), UO11 (59,3) och UO12 (104,2) blir tillsammans cirka 285 mdkr, mot 225 mdkr för UO6. I UO6 ingår dessutom 39,7 mdkr i militärt stöd till Ukraina. Hundralappen på startsidan säger "Försvar 4 kr" av 100, vilket ger två motstridiga bilder.
**Förslag:** Byt rubriken till "Försvaret växer mest: +33 % till 225 mdkr 2026". Alternativt: "… största enskilda utgiftsområde. Ersättningar till hushåll (UO10–12) är tillsammans större." Lägg en rad under diagrammet som säger att utgiftsområdena är administrativa indelningar.
**Prioritet:** Hög. Rubriken är det läsaren minns från budgetvyn.

---

## MEDEL

### 6. "Så används 100 kr i kommunalskatt" (Malmö) gäller bara kommunens del
**Plats:** #start → Vem gör vad, rutan "Exempel: Malmö stad 2025" (~r. 1656).
**Citat:** "Så används 100 kr i kommunalskatt … Utbildning 45 kr".
**Troligt missförstånd:** En Malmöbo tror att 45 % av hela hens kommunalskatt (32,42 %) går till skolan.
**Vad som gäller:** Ungefär en tredjedel av kommunalskatten går till Region Skåne, främst sjukvård. Malmö stads siffror gäller bara den kommunala delen. Kommunens verksamhet finansieras dessutom delvis med statsbidrag och avgifter (enligt sajten är 35 % inte egen skatt).
**Förslag:** Skriv "Så används 100 kr av **kommunens** del av skatten (ca 21 av 32 procentenheter). Regionens del går främst till sjukvård."
**Prioritet:** Medel.

### 7. "Vem gör vad" ställer statens budgetutgifter mot kommunernas och regionernas skatteintäkter
**Plats:** #start, kretsloppsfilmen och korten (~r. 1315–1317, 1599–1621).
**Citat:** "Staten … budget 1 542 mdkr" / "Regionen … skatt 11,69 % · 349 mdkr" / "Kommunen … skatt 20,69 % · 614 mdkr".
**Troligt missförstånd:** Läsaren jämför storlekarna och tror att staten är 2,5 gånger så stor som kommunerna och 4,4 gånger så stor som regionerna.
**Vad som gäller:** Det är olika mått: utgifter 2026 mot skatteintäkter 2025. I statens 1 542 mdkr ingår bidrag till kommuner och regioner (UO25 180,7 mdkr plus riktade bidrag), som sedan räknas en gång till på mottagarsidan. Enligt Eurostat 2024 hade kommuner och regioner 1 652 mdkr i utgifter och staten 2 004 mdkr, alltså nästan lika mycket.
**Förslag:** Använd samma mått för alla tre, till exempel utgifter 2024 (Eurostat: staten 2 004, kommuner och regioner 1 652), eller skriv "Skatteintäkter" och "Budget" tydligt och lägg till: "Staten för ca 240 mdkr vidare till kommuner och regioner."
**Prioritet:** Medel.

### 8. Skattekvoten jämförs med OECD utan att det framgår att Sverige beskattar transfereringar
**Plats:** #framtid → Skatter (~r. 2234–2245) och diagrammet hist-skatt-chart (~r. 5693). Även Skatter i korthet ("Alla skatter … ca 41 % av BNP").
**Citat:** "Sverige 41,4 %, OECD-snittet 34,1 %".
**Troligt missförstånd:** Läsaren tror att svenskarna betalar 7 procentenheter av BNP mer i skatt än genomsnittslandet, och att skillnaden motsvarar så mycket mer offentlig service.
**Vad som gäller:** Sverige beskattar pensioner, sjukpenning, föräldrapenning och a-kassa som inkomst. En del av skatten är därför pengar som staten först betalar ut och sedan tar tillbaka. I länder där motsvarande ersättningar är skattefria eller lägre beskattade blir skattekvoten lägre vid samma nettoutfall. Dessutom räknas hela arbetsgivaravgiften, även ålderspensionsavgiften som ger egen pensionsrätt, som skatt i skattekvoten. Ingen av sakerna nämns. Ordlistan definierar bara "skatter och avgifter som andel av BNP".
**Förslag:** Lägg en mening under jämförelsen: "Sverige beskattar de flesta ersättningar, som pension och sjukpenning. Det gör skattekvoten högre än i länder där de är skattefria, utan att hushållen får mer kvar. Pensionsavgiften räknas också som skatt." Komplettera ordlistan.
**Prioritet:** Medel. Det gäller den mest citerade internationella jämförelsen.

### 9. "Två trender möts": en sjunkande skattekvot läses som minskade skatteintäkter
**Plats:** #framtid, h2 "Fler äldre, fler i vården och en skattekvot som sjunkit" och rutan "Två trender möts" (~r. 2112, 2157).
**Citat:** "skattekvoten har sjunkit med cirka 2,6 procentenheter sedan 2010, samtidigt som antalet personer över 80 år väntas öka … Det kan hanteras med högre skatteuttag …".
**Troligt missförstånd:** Läsaren tror att det finns mindre skattepengar i dag än 2010 och att sänkningen orsakar ett finansieringsproblem för äldreomsorgen. Formuleringen antyder också en värdering.
**Vad som gäller:** Skattekvoten är en andel av BNP. I kronor har skatteintäkterna vuxit (2 699 mdkr 2025 enligt sajtens egen snabbfakta). Det finansieringsrelevanta är hur utgiftsbehoven växer i förhållande till intäkterna.
**Förslag:** Lägg till: "Skatteintäkterna i kronor har ökat. Det är andelen av BNP som har minskat." Överväg att skilja rubrikens två delar åt, eller skriv neutralare: "Fler äldre. Skatterna är en mindre andel av BNP än 2010."
**Prioritet:** Medel.

### 10. Sjukfrånvarons "+68 %" räknas från bottenåret
**Plats:** #framtid → Sjukfrånvaro, nyckeltal (~r. 2432). Data finns ~r. 5898.
**Citat:** "**+68 %** Ökning 2010–2025".
**Troligt missförstånd:** Läsaren tror att sjukskrivningarna har ökat kraftigt över tid.
**Vad som gäller:** 2010 (6,0 dagar) är seriens lägsta punkt. Jämfört med 2000 (15,0) har sjukpenningtalet sjunkit 33 %, och jämfört med toppen 2002 (18,6) har det sjunkit 46 %. Sedan 2015 har nivån legat stilla på 9–11 dagar.
**Förslag:** Ersätt med "10,1 dagar 2025, lika mycket som 2015 och hälften av toppen 2002", eller visa både "−46 % sedan 2002" och "+68 % sedan 2010".
**Prioritet:** Medel.

### 11. Hundralappen heter "Din hundralapp" men inkluderar inkomstpensionen
**Plats:** #start, hundralappen (~r. 1216, sedeltexten ~r. 4557).
**Citat:** "Din hundralapp i offentliga utgifter · 2024 · 3 223 miljarder kronor", "Socialt skydd **38 kr**".
**Troligt missförstånd:** Läsaren läser det som att 38 kr av hens skattehundralapp går till socialt skydd. Hen ser samtidigt att kvittot ovanför ger socialt skydd cirka 30 % och förstår inte varför siffrorna skiljer sig.
**Vad som gäller:** Hundralappen omfattar hela sektorn, även inkomstpensionen (364 mdkr), som betalas med pensionsavgifter och inte med skatt. Kvittot räknar bort den (2 859 mdkr). Dessutom finansieras utgifterna inte bara med skatt utan också med avgifter och underskott.
**Förslag:** Byt "Din hundralapp" mot "Varje hundralapp som det offentliga gör av med". Lägg till en rad: "Inklusive inkomstpensionen, som betalas med pensionsavgifter. Kvittot ovan räknar utan den." Alternativt kan hundralappen visas utan inkomstpension så att den stämmer med kvittot.
**Prioritet:** Medel.

### 12. Kvittoraden "Socialt skydd" illustreras helt som hemtjänst
**Plats:** #start, kvittot (~r. 4245).
**Citat:** "SOCIALT SKYDD 2 314,00 · ca 2 dagars hemtjänst för en äldre".
**Troligt missförstånd:** Läsaren tror att posten är äldreomsorg.
**Vad som gäller:** Av posten (30,1 % av skatten) är äldreomsorg 12,1 procentenheter, alltså cirka 40 %. Resten är sjukpenning och sjukersättning, familjestöd som föräldrapenning och barnbidrag, arbetslöshetsstöd och övrigt.
**Förslag:** Byt undertexten till "sjukpenning, föräldrapenning, äldreomsorg m.m." eller dela upp jämförelsen: "varav ca 900 kr äldreomsorg = ca 1 dags hemtjänst".
**Prioritet:** Medel.

### 13. Sjukvårdsrubriken "störst andel av BNP i Norden" utan per-invånare-mått
**Plats:** #oecd → Sjukvård, h2 (~r. 1996), samt startbilden "11,2 % … mest i Norden".
**Citat:** "Sverige lägger störst andel av BNP på vård i Norden".
**Troligt missförstånd:** Läsaren tror att Sverige lägger mest pengar på vården i Norden.
**Vad som gäller:** Per invånare (köpkraftsjusterat, 2023) ligger Norge på 9 523 $ och Sverige på 7 512 $, och Tyskland på 8 306 $. Norges BNP-andel blir lägre delvis för att landets BNP är stort tack vare oljan. Siffrorna gäller dessutom alla finansieringskällor, inte bara skatt.
**Förslag:** Lägg till i ingressen: "Per invånare lägger Norge mer (9 523 $ mot 7 512 $)". Eller skriv rubriken som "… näst mest per invånare i Norden …".
**Prioritet:** Medel.

---

## LÅG

### 14. Prislistans "Motsvarar inkomstskatten från en medianlön under X"
**Plats:** #pristabell, varje prislapp (~r. 3690) och gissa-läget (~r. 4099).
**Citat:** "Ett dygn på IVA 50 000 kr … Motsvarar inkomstskatten från en medianlön under 6 månader".
**Troligt missförstånd:** Läsaren tror att ett halvårs skatt betalar ett IVA-dygn och att hela skatten går dit.
**Vad som gäller:** Jämförelsen gäller bara storleken. Bara cirka 17 % av skatten går till vård, så en medianlönetagares "vårdskatt" räcker till ett IVA-dygn på ungefär 3 år.
**Förslag:** Skriv "Lika mycket som en medianlönetagare betalar i inkomstskatt på 6 månader", eller lägg till en tooltip: "all skatt, inte bara vårdens andel".
**Prioritet:** Låg–medel.

### 15. Investeringsdiagrammet ställer olika tidsperioder och typer av belopp mot varandra
**Plats:** #framtid → Investeringar (~r. 2345).
**Citat:** Staplarna "Kommunalt 2 300 · Väg och järnväg, nytt 607 · Vägar, underhåll 354 · Järnväg, underhåll 210".
**Troligt missförstånd:** Läsaren tror att kommunerna har en plan på 2 300 mdkr som är fyra gånger större än statens.
**Vad som gäller:** Kommunsektorns siffra är 230 mdkr/år i nuvarande takt, uppräknad över 10 år, och omfattar alla slags investeringar. Transportsiffrorna är en fastställd 12-årsplan. Det står i diagramrubriken, men staplarna jämförs ändå rakt av.
**Förslag:** Räkna om till kronor per år (kommunalt 230, transporter cirka 98/år) eller visa kommunsektorn i ett separat diagram.
**Prioritet:** Låg.

### 16. Försvarsdiagrammet 2020–2026 är i löpande priser och blandar utfall och budget
**Plats:** #budget → Försvaret, stapeldiagrammet (~r. 1834).
**Citat:** "2020 63 · 2024 128 · 2025 (budget) 169 · 2026 (budget) 225".
**Troligt missförstånd:** Läsaren uppfattar en real ökning till 3,6 gånger, där allt är försvarsförmåga.
**Vad som gäller:** Siffrorna är nominella (prisnivån steg ungefär 20 % 2020–2026), och 2026 innehåller 39,7 mdkr i stöd till Ukraina. Utfall och budget är märkta, men skillnaden syns inte i staplarna.
**Förslag:** Markera budgetåren med streckade eller ljusare staplar, så som statsskulddiagrammet redan gör med prognosen. Skriv "löpande priser" och "varav Ukrainastöd" i staplen för 2026.
**Prioritet:** Låg.

Mindre konsekvensfel: filmens etikett "20–65 år · betalar in mer än du får" (~r. 1346) och texten "de flesta" (~r. 1396) stämmer inte med livsloppet. Där tar 19–25-åringar i snitt emot mer än de betalar, och modellen visar snitt, inte "de flesta". Föreslag: "ca 26–64 år · betalar i snitt in mer än man får". Prioritet: låg.
