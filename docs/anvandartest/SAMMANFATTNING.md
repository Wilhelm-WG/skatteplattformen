# Användartest november 2026: sammanfattning

Fem testpersoner (agenter med var sin persona) gick igenom den publicerade sajten 5 november 2026. Uppdraget finns i `UPPDRAG.md` och varje rapport i en egen fil.

| Testperson | Situation | Enhet | Skulle dela |
|---|---|---|---|
| Elin, 19 | Sommarjobb på lager, 25 000 kr/mån | Mobil | Kvittot som story och quizresultatet |
| Amira, 34 | Undersköterska i hemtjänsten, Sundsvall, två barn | Mobil | Kvittobilden i jobbets WhatsApp-grupp |
| Marcus, 29 | Snickare med egen firma (F-skatt), Örebro | Mobil och dator | Kanske Prislistan, inte resten |
| Johan, 47 | Controller på en kommun | Dator | Ja, med kollegor och nämndpolitiker |
| Birgitta, 71 | Pensionerad lärare, pension 22 000 kr/mån | Surfplatta | Sjukvårdsjämförelsen, inte kvittot |

## Det som fungerar

- Rubriken och kvittot förstås på några sekunder. Jämförelserna ("minuter på intensiven", "meter statlig väg", "dagars hemtjänst") fastnar.
- Förtroendet är högt hos alla fem: källa och år överallt, rättelseloggen, öppen kod och att det står vem som driver sajten.
- Johan kontrollräknade budgeten, kvittot, arbetsgivaravgiften och skatteutgifterna. Allt stämde, och begreppen (anslag/utfall, statsskuld/Maastricht, UO6/Nato) hålls isär.
- Dela kvittot som bild och quizet fungerar.
- Sjukvårdsjämförelsen och personalfliken i Framtid var bäst för Birgitta och Amira.

## Rättat direkt (5 november)

- Den fasta siffran överst i Din ekonomi ("4 466 kr på en lön på 25 000 kronor") togs för det egna resultatet av tre testare. Texten säger nu att det är ett exempel.
- Startsidans arbetsgivaravgift nämner att den är lägre för den som är född 2003–2007.
- "Förifyllt med medianlönen" står bara kvar när lönen är 38 300 kr.
- "Sjuksköterskor utanför yrket" heter "Sjuksköterskor utan arbete", som texten säger.
- Dataexporten beskrev pensionärsskatten som en schablon som "ska ersättas". Den följer Skatteverkets regler sedan länge.
- "Uppdaterad 29 oktober" är ändrat till 5 november.

Kontrollerat utan fel: skattekvoten i Framtid är SCB:s serie genom hela diagrammet (2010 43,1 %, 2025 40,5 %). ESV gick upp i Statskontoret 1 januari 2026 (SFS 2025:681), så "numera Statskontoret" stämmer.

## Förslag som kräver beslut

Ordnade efter hur många testare som tog upp dem och hur stor effekten är.

1. **Pensionsläge på startsidan** (Birgitta, delvis Johan). Kvittot säger "KASSÖR: ARBETSGIVAREN" och "BETALT MED: LÖN" och räknar som för den som är under 66 år. Ett val "Lön / Pension" kan återanvända Din ekonomis pensionärskvitto.
2. **Egenföretagare** (Marcus). Egenavgifter, F-skatt och enskild firma nämns inte. Minst en mening under kvittot, eller ett val "Anställd / Egen firma".
3. **Egen kommun** (Amira, Marcus). Kommunvalet har sju alternativ. SCB har kommunalskatten för alla 290 kommuner 2026.
4. **Citatet under kvittot** (Marcus, delvis Elin). Det enda värderande på startsidan, och det står nära "Vi försöker skriva utan värderande ord". Ägaren har bestämt att citatet ska stå kvar ordagrant; ett alternativ är att ange att det är sajtens hållning, eller lägga det i en ruta som tydligt är en kommentar.
5. **Sommarjobb och skatteåterbäring** (Elin). Allt räknas som helårslön. En mening om att den som bara jobbar en del av året ofta får tillbaka skatt.
6. **Barn i Din ekonomi** (Amira). Barnen går inte att räkna in; det finns bara scenariot "Barnfamilj".
7. **Åldersreglaget på mobil** (Elin). 0–85 år på cirka 274 px. Ett sifferfält bredvid reglaget.
8. **Pensionärsfall bland livssituationerna** och fältnamnet "Pension före skatt" vid 66+ (Birgitta).
9. **Språk** (Amira, Elin): tkr, mdkr, COFOG, Kolada N21006, "Nominella, ej diskonterade", "förvärvsarbetande". Skriv ut eller förklara i ordlistan.
10. **Läsbarhet** (Birgitta): mycket text i 11 px och grått på beige. Ordet "Meny" vid ☰.
11. **Mindre**: "U06/U09" i ett diagram men "UO6" i texten; hemtjänsten är svår att hitta i Prislistan utan sökrutan; quizet bryter "Fråga 1 av 10" på två rader vid 390 px; quizet jämför med medianlönen och inte den egna lönen; utjämningssystemet förklaras inte (Johan).

## Om testmetoden

Chrome headless med `--window-size=390` lägger ut sidan cirka 500 px bred, så skärmbilderna ser avhuggna ut. I riktig 390-vy (iframe, CDP-emulering, Playwright) får allt plats. Kontrollera ändå på en riktig telefon.
