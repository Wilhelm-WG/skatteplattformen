# Användartest: Marcus, 29 år, snickare med enskild firma (F-skatt), Örebro

Underlag: sidan hämtad 2026-11-05 och sju skärmbilder: start (390 och 500 bred), kalkylator (390 och 1280), budget, prislistan. Texten lästes i HTML-källan.

> Teknisk not: i skärmbilderna med 390 bredd var text och kvitto avklippta till höger. Med 500 bredd såg allt rätt ut. Felet beror nästan säkert på att headless-Chrome inte kan rendera så smalt, och det är alltså inte en bugg på sajten. Jag rapporterar det inte som problem.

## 1. Första intryck (10 sekunder)
"Vad fan får vi för pengarna?" Okej, rubriken fångar mig. Den låter som något jag själv skulle säga. Jag förstår direkt vad jag ska göra: "Skriv in din lön. Kvittot visar vad skatten på din lön betalar varje månad". Rutan är redan ifylld med 40 000, vilket råkar vara precis vad jag tar ut. Kvittot är snyggt och kul, med "8 117,00 SKATT/MÅN" och "VÄLKOMMEN ÅTER NÄSTA LÖNEDAG".

Sedan kommer första gnisslet. Sajten utgår från att jag är anställd. Kvittot säger "KASSÖR: ARBETSGIVAREN", och under det står "Dessutom betalar arbetsgivaren 12 568 kr i arbetsgivaravgift". Jag har ingen arbetsgivare. Jag betalar egenavgifterna själv, och det är just de som svider.

## 2. Uppgifter jag försökte göra

| Uppgift | Resultat | Varför |
|---|---|---|
| Se vad min skatt går till (startkvittot) | **Delvis** | Kvittot är tydligt och roligt. Jämförelserna "ca 1/47 av en polis månadslön" och "ca 5 meter statlig väg underhålls ett år" fastnar. Men allt räknas som för en löntagare. |
| Räkna på egenavgifter för F-skatt | **Misslyckades** | Orden "egenavgift", "F-skatt", "enskild firma" och "egenföretagare" finns inte någonstans på sajten (sökt i hela källkoden). Kalkylatorn visar bara "Arbetsgivaravgift (utan pensionsavgift) 102 tkr" och "Betalas också, men syns inte på lönebeskedet". För mig syns den: jag betalar den själv. |
| Din ekonomi med min lön | **Delvis** | Med 40 000 kr/mån (480 tkr/år) får jag kommunalskatt 150 tkr, jobbskatteavdrag −52 tkr, arbetsgivaravgift 102 tkr, moms 48 tkr och "Totalt per år 247 tkr". Det är tydligt. Men stora rubriken överst står kvar på "4 466 kr i skatt per månad på en lön på 25 000 kronor", trots att jag har valt 40 000. Det förvirrar. |
| Välja min kommun (Örebro) | **Misslyckades** | Under "Fler inställningar" går det bara att välja Rikssnitt, Stockholm, Göteborg, Malmö, Uppsala, Österåker och Dorotea. Örebro saknas. |
| Moms | **Delvis** | Momsen finns med som "Moms när du handlar (uppskattning)". Men inget handlar om moms för den som driver företag, alltså momsredovisning och ingående och utgående moms. Det är begripligt, sajten handlar om privatpersoner. |
| ROT | **Delvis** | ROT finns bara som en stapel under "Skatteutgifter" i Budgeten, 10 mdkr med noten "Tillfälligt 50 % subvention maj–dec 2025, därför högre 2025 (22,1 mdkr)". Bra att det finns med, men det säger inget om hur ROT påverkar mig som hantverkare. |
| Budgeten | **Lyckades** | "1 542 mdkr", "Försvar och krisberedskap +33 %" och "Budgetsaldo −167 mdkr". Stapeldiagrammet över utgiftsområdena är lätt att läsa. Skatteutgifterna (jobbskatteavdraget störst) är intressanta, eftersom de visar att staten också "spenderar" genom avdrag. |
| Prislistan: polis och väg | **Lyckades** | "Polisen per invånare och år 4 600 kr" har källan "48,4 mdkr / 10,6 miljoner invånare". Vägunderhållet är "ca 163 000 kr per km och år" (Trafikverket). Det är precis den typen av siffror jag ville se. Kortet "Poliser vs mål: 24 746 … det saknas cirka 1 450" är bra. Jag hittade inget om vägskicket i Örebro, men det kanske är för mycket begärt. |
| Slöseri | **Misslyckades** | Ingenting tar upp slöseri, ineffektivitet eller misslyckade projekt. Ordet "effektivisering" står bara som ett av fyra sätt att möta åldrande ("högre skatteuttag, prioriteringar, effektivisering eller en kombination"). |

## 3. Förtroende
**Siffrorna:** Jag litar mer på dem än jag trodde att jag skulle göra. Varje prislapp har en källa ("Budgetpropositionen 2026, UO4 anslag 1:1"), och det finns en öppen rättelselogg med datum där de erkänner fel, till exempel "Totalen angavs som 3 011 mdkr. Eurostat anger 3 223 mdkr". Det övertygar mig mer än vilken myndighetssida som helst. "Skattemodellen och alla beräkningar är öppna på GitHub" är också bra.

**Neutral eller politisk?** Mest neutral. Men det finns några saker som gör mig misstänksam:
- **Citatet** under kvittot: *"Du finansierar också andras barn, sjukvård och pension — det är innebörden av ett solidariskt samhällskontrakt."* Det är det enda stället på startsidan där sajten talar om för mig vad jag ska tycka. Jag har just sett att jag betalar 8 117 kr i månaden, och direkt efter får jag en liten moralpredikan. Ord som "solidariskt" och "samhällskontrakt" låter som Socialdemokraternas valaffischer. Det står i kursiv, centrerat, som en slutkläm. Det är just här jag tänker "aha, där kom vänstervridningen". Samma citat återkommer längre ner, precis före "Redaktionell policy", där det står "Vi försöker skriva utan värderande ord". Det krockar rätt rejält.
- **Det som ökar förtroendet:** ISK-avsnittet citerar både Svenskt Näringsliv och Konjunkturinstitutet och ESV. Skattekvoten jämförs ärligt ("48,6 % år 2000, 40,8 % år 2024") och sänkningarna nämns sakligt. Sverige jämfört med OECD-snittet, "41,4 % mot 34,1 %", visar att vi faktiskt har höga skatter. Den siffran gillar jag att den står där.
- **Det som minskar förtroendet:** att allt utgår från löntagare, och att perspektivet är "så här mycket får du tillbaka". Det finns inget om vad skatten kostar i form av effektivitet eller slöseri. Det gör att sajten mer känns som att den förklarar varför skatten är bra än som att den granskar.
- "Vem står bakom: drivs av Wilhelm Wennergren, utan extern finansiering" är bra att se. Då är det i alla fall inte statlig propaganda.

## 4. Språk och begrepp
- "solidariskt samhällskontrakt" är politiskt laddat, se ovan.
- "KASSÖR: ARBETSGIVAREN" stämmer inte för en egenföretagare.
- "Betalas också, men syns inte på lönebeskedet" är fel för mig, jag ser den på varje skattekonto-dragning.
- "COFOG", "tkr", "mdkr" och "NTA-metoden" fattade jag med lite ansträngning. COFOG är förklarat med understrykning, men jag vet inte vad det betyder.
- "Ung förvärvsarbetande" är ett märkligt byråkratiskt ord om mig själv.
- "ca en 290 000-del av en Archer-pjäs" är kul men obegripligt, jag vet inte vad en Archer är.
- "Vad fan…" gillar jag, det gör att det inte känns statligt.

## 5. Problem

1. **Ingen hjälp för egenföretagare.** Plats: Start (kvittot) och Din ekonomi (skatt du betalar). Allt räknas som anställning med arbetsgivaravgift. Egenavgifter, F-skatt och enskild firma nämns aldrig, trots att över en miljon har F-skatt. Allvar: **hög** för min målgrupp. Förslag: ett val "Anställd / Egen firma" som byter till egenavgifter (28,97 % minus schablonavdrag) och skriver "du betalar själv" i stället för "arbetsgivaren betalar". Det räcker med en mening under kvittot: "Har du enskild firma betalar du egenavgifter i stället, ungefär lika mycket."

2. **Moraliserande citat.** Plats: Start, under kvittot, och nere i Metod före Redaktionell policy. "…det är innebörden av ett solidariskt samhällskontrakt" är en värdering och går emot den egna policyn "utan värderande ord". Allvar: **medel**, eftersom det är precis där en skeptiker som jag hoppar av. Förslag: om citatet ska stå kvar, märk det som ett citat (vem har sagt det?) eller ställ det mot en motröst. Alternativt en neutralare formulering, som "Skatten betalar också för andras barn, vård och pension, och för din egen när du behöver den".

3. **Rubriken i Din ekonomi följer inte min lön.** Plats: #kalkylator, överst. Det står "4 466 kr i skatt per månad på en lön på 25 000 kronor" medan inmatningen visar 40 000 och kortet nedanför säger "8 117 kr i månaden". Allvar: **medel**, för man tror att något är fel. Förslag: låt rubrikens siffra följa lönen, eller skriv tydligt "Exempel:".

4. **Örebro saknas i kommunvalet.** Plats: #kalkylator, "Fler inställningar". Bara sju alternativ finns. Allvar: **medel**. Förslag: alla 290 kommuner (SCB-listan finns), eller ett sökfält.

5. **Inget om slöseri eller effektivitet.** Plats: hela sajten. Den som misstänker att skattepengar slösas bort får inga svar. Allvar: **medel**, eftersom det är en vanlig fråga. Förslag: ett avsnitt med Riksrevisionens granskningar och kostnadsöverskridanden i stora projekt. Det kan vara lika neutralt och källbelagt som resten.

6. **Arbetsgivaravgiften är dold i kvittot.** Plats: Start. Kvittot visar 8 117 kr, medan arbetsgivaravgiften på 12 568 kr bara står i finstilt under kvittot. Allvar: **låg** (för löntagare). Förslag: en rad "+ arbetsgivaravgift" på själva kvittot.

7. **Desktop: rubriken hamnar under menyn.** Plats: #kalkylator på 1280 bredd. Sidan scrollas så att toppen av hero-texten ("4 466 kr …") hamnar precis under menyraden med ett tomt fält ovanför. Allvar: **låg**. Kan bero på ankarscroll i headless-läge.

## 6. Det bästa
- Kvittoformatet. Det är konkret, kul och går att dela. "5 meter statlig väg" och "1/47 av en polis månadslön" säger mer än procent.
- Prislistan, med polisen 4 600 kr per invånare och statlig väg 163 000 kr/km och år. Allt med källa och uträkning.
- Rättelseloggen och öppen kod. Det märks att någon faktiskt kontrollerar.
- Att skattekvoten jämförs med OECD och att både Svenskt Näringsliv och KI citeras. Det är inte bara en sida.

## 7. Skulle jag dela den?
Kanske, med polare i byggbranschen. Skälet vore i så fall Prislistan och kvittot ("kolla vad polisen kostar per person"), inte för att sajten övertygade mig om att skatten är rimlig. Men jag skulle tveka. Den räknar inte på oss med egen firma, och citatet om "solidariskt samhällskontrakt" skulle få mina kompisar att avfärda hela grejen som sosse-propaganda innan de ens tittat på siffrorna. Ta bort eller balansera citatet, lägg till egenavgifter, så skulle jag dela den utan att skämmas.
