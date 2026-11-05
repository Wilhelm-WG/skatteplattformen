# Användartest: Elin, 19 år (sommarjobb på lager, 25 000 kr/mån, bara mobil)

Testat 2026-11-05 i mobilvy 390 px, med Chrome headless och mobilemulering via CDP så att det gick att klicka. Vyer: #start med `?lon=25000`, "Dela kvittot som bild" (Inlägg och Story), länken "Båda kvittona finns i Din ekonomi", #kalkylator för 19 år och 300 tkr/år, och quizet "Gissa först" i #pristabell, gjort hela vägen till sammanfattningen.

*Teknisk not:* Med en vanlig `--window-size=390` beskärs högerkanten på skärmbilderna, så text och kvitto ser avhuggna ut. Det beror på att headless Chrome har en minsta fönsterbredd, inte på sajten. I en riktig 390-viewport (iframe eller CDP) är `scrollWidth` = 390 och inget sticker ut. Bara karusellen "Sex vägar in" går utanför kanten, och det är meningen.

## 1. Första intryck (10 sekunder)
"Vad **fan** får vi för pengarna?" fångar direkt, det låter som något på TikTok. Jag fattar vad jag ska göra: "Skriv in din lön. Kvittot visar vad skatten på din lön betalar varje månad." Jag skriver 25 000 och kvittot dyker upp direkt under. Det ser ut som ett riktigt butikskvitto, och det är skitsnyggt. "Skatt/mån 4 466,00", "Kvar efter skatt 20 534,00", "Spara: skatten är 17,9 % av lönen". Svaret på "vart tar pengarna vägen" får jag på under 10 sekunder. Klart godkänt.

Men stycket under knapparna ("Kommunalskatt och statlig skatt minus jobbskatteavdraget … rikssnittet för kommunalskatt (32,38 %) … utom inkomstpensionen, som betalas med pensionsavgifter") skulle jag scrolla förbi direkt.

## 2. Uppgifter
| Uppgift | Resultat | Kommentar |
|---|---|---|
| Se vad skatten på min lön (25 000) går till | **Lyckades** | Kvittot laddas med en gång. Raderna "ca 1½ dagars hemtjänst för en äldre", "ca 21 minuter på intensiven" och "ca ungefär en skoldag för en elev" är roliga och lätta att fatta. |
| Ta reda på om "unga betalar mindre arbetsgivaravgift" | **Delvis** | Startsidan säger "Dessutom betalar arbetsgivaren 7 855 kr i arbetsgivaravgift", vilket är fel för mig. Svaret finns först inne i Din ekonomi på arbetsgivarens kvitto: "Nedsättning för unga −2 652,00 … ARBETSGIVARAVGIFTER 5 203,00 … AVGIFTERNA ÄR 20,8 % OVANPÅ LÖNEN". Det är exakt det jag ville veta, men jag måste veta att jag ska leta där. |
| Dela kvittot som bild | **Lyckades** | Knappen öppnar en snygg ruta med "Inlägg (4:5)" och "Story (9:16)", grön bakgrund, rubriken, kvittot, citatet och länken. Det funkar perfekt för en Insta-story. "Ladda ner" och "↗ Dela" finns. (Själva delningsmenyn går inte att testa i headless.) |
| Din ekonomi för 19 år | **Delvis** | Lönen följer med från startsidan (300 tkr/år), men åldern står på **22 år**. Jag måste dra ålders-reglaget (0–85 år på ca 274 px, alltså ca 3 px per år) till exakt 19. Det är pilligt på mobilen och det finns ingen ruta att skriva i. Med `?age=19` visas "Student / ung vuxen" och arbetsgivarens kvitto med nedsättningen. Sen kommer väldigt mycket text och tabeller. |
| Quizet "Gissa först" | **Lyckades** | Fattas lätt: "Du får se tio saker … Det tar ett par minuter." Svaret är tydligt: "Rätt belopp är 5 gånger så stort som din gissning. … Rätt svar 1,5 mnkr. Du betalar: 0 kr direkt". Slutet: "Du låg inom ±25 % på 0 av 10", plus en lista på var jag var mest fel, "Gissa tio nya" och "Dela resultatet". Delningstexten är "Jag gissade vad 10 saker … kostar och låg nära (±25 %) på 0. Testa själv:", och det är något jag faktiskt skulle skicka till kompisar. |

## 3. Förtroende
Jag litar på siffrorna. Det står källa överallt ("Skatteverket, arbetsgivaravgifter 2026", "Skolverket, 2025", "Uppdaterad 29 oktober 2026 · Källa och år på allt"). Att arbetsgivarens kvitto visar varje avgift med procent ("Allmän löneavgift 12,62 % … går till statsbudgeten") känns ärligt. Det finns också en rättelselogg. Att de själva skriver "Kalkylatorn räknade med full arbetsgivaravgift för 19–23-åringar" och rättat det ökar förtroendet.

Neutral eller politisk? Mest neutral. Men citatet "Du finansierar också andras barn, sjukvård och pension — det är innebörden av ett solidariskt samhällskontrakt" känns lite som en pekpinne när man bara ville se sitt kvitto. Inte jobbigt, men det märks. Det som **minskar** förtroendet lite är att startsidan säger 7 855 kr i arbetsgivaravgift när det för mig är cirka 5 200. Då undrar jag vad mer som inte gäller mig.

## 4. Språk och begrepp
- "jobbskatteavdraget", "rikssnittet för kommunalskatt (32,38 %)", "inkomstpensionen" i texten under startknapparna. Det är för tungt för första skärmen.
- "Visar genomsnitt för personer i din ålder (SCB och Eurostat **COFOG**)". Ingen aning vad COFOG är. Det finns en ordlistknapp, men ordet skrämmer.
- "ca en 530 000-del av en **Archer-pjäs**". Vad är en Archer? Rolig rad, men jag fattar inte jämförelsen. "ca 1/174 av en riksdagsledamots månadsarvode" går också knappt att föreställa sig.
- "Ålderspensionsavgift", "Efterlevandepensionsavgift", "Arbetsmarknadsavgift" på arbetsgivarens kvitto: många ord, men okej eftersom det står "blir din allmänna pension".
- Quizet: "Kriminalvård, per intagen och år (kr/år)", "per plats i anstalt (dygnskostnad × 365)", "LSS — insats per person och år", "1,5 mnkr" (mnkr?) och "Motsvarar inkomstskatten från en **medianlön** under 16 år". Jag hade hellre sett *min* lön där.
- "Marginalskatt på bruttolön — vad din nästa intjänade krona kostar". Hoppar över.

## 5. Problem
1. **Startsidan visar full arbetsgivaravgift för alla.** *Plats:* #start, raden under kvittot ("Dessutom betalar arbetsgivaren 7 855 kr i arbetsgivaravgift"). Koden räknar `lon * 0.3142` oavsett ålder. *Vad hände:* Precis det jag hade hört talas om ("unga betalar mindre") syns inte, och siffran är fel för alla födda 2003–2007. Texten "Är du född 2003–2007 är avgiften tillfälligt lägre, cirka 5 200 kronor" finns i sajtens data (ett faktakort) men syns inte här. *Allvar:* **Medel.** *Förslag:* Lägg till en mening på startsidan: "(född 2003–2007: ca 5 200 kr just nu)", eller en liten knapp "Är du 19–23?".
2. **Ålder väljs bara med reglage, och standard är 22.** *Plats:* #kalkylator, "Din ålder". *Vad hände:* När jag kommer från startsidan står det 22 år. Reglaget går 0–85 på ca 274 px, så det är svårt att träffa 19 med tummen. *Allvar:* **Medel** för mobilanvändare. *Förslag:* Lägg till −/+-knappar eller en sifferruta, eller fråga om ålder redan på startsidan.
3. **Sommarjobb räknas som helårslön.** *Plats:* #start och #kalkylator. *Vad hände:* Allt utgår från att jag tjänar 25 000 i tolv månader (300 tkr/år). Jag jobbar bara på sommaren. Ingenstans står det att den som bara jobbar några månader ofta får tillbaka skatt i deklarationen, för att skattetabellen räknar som om man tjänade lika mycket hela året. Jag sökte efter "sommarjobb" och "skatteåterbäring" och hittade inget. *Allvar:* **Medel** för just unga. *Förslag:* En rad eller ett faktakort: "Jobbar du bara del av året? Då får du ofta tillbaka skatt i deklarationen."
4. **Din ekonomi är en textvägg på mobilen.** *Plats:* #kalkylator. *Vad hände:* Efter reglagen kommer tabeller, rutor med "I modellen vid denna ålder …", marginalskattstabellen, "Så räknar vi …" och sedan två långa kvitton. Jag scrollar förbi det mesta. Mitt kvitto där har 15 rader i torrt språk ("Sjukdom, funktionsneds.", "Övrigt socialt skydd") i stället för startsidans roliga jämförelser. *Allvar:* **Låg–medel.** *Förslag:* Visa de två kvittona först och fäll ihop tabellerna som standard.
5. **"Fråga 1 av 10" bryts på två rader** i quizet ("Fråga 1 av / 10") bredvid kategorietiketten vid 390 px. *Allvar:* **Låg.** *Förslag:* `white-space: nowrap`.
6. **Quizet jämför med medianlönen, inte min lön.** *Plats:* #pristabell, "Motsvarar inkomstskatten från en medianlön under 16 år". *Allvar:* **Låg.** *Förslag:* Använd lönen från startsidan om den finns ("din skatt i X år"). Det hade varit mycket roligare att dela.
7. **Svåra jämförelser på kvittot** ("Archer-pjäs", "riksdagsledamots månadsarvode"). *Allvar:* **Låg.** *Förslag:* Byt ut eller förklara med ett ord ("en Archer-kanon").

## 6. Det bästa
- **Kvittot.** Skriva in sin lön och direkt få ett kvitto med "ca 21 minuter på intensiven" är exakt rätt nivå. Det är kul, konkret och går snabbt.
- **"Dela kvittot som bild" med Story-format.** Snyggt, färdigt för Instagram, med länk som öppnar sajten med samma lön.
- **Quizet.** Kort, lagom svårt och ger chock-effekt ("Personlig assistans … rätt svar 2,2 mnkr"). "Dela resultatet" med färdig text är perfekt.
- **Arbetsgivarens kvitto för 19-åringar** med "Nedsättning för unga −2 652" svarar exakt på det jag undrade, när man väl hittar det.

## 7. Skulle jag dela den?
Ja, kvittot som story och quizresultatet i gruppchatten med kompisar som också har sommarjobb ("kolla vad din lön betalar för"). Det är tillräckligt snyggt och roligt för att inte kännas som läxa. Jag skulle **inte** dela Din ekonomi. Den är för lång och plugg-aktig, och jag skulle inte orka visa någon den. Om startsidan hade sagt "unga 19–23 har lägre arbetsgivaravgift: 5 203 kr i stället för 7 855" hade jag delat den raden också, för det är precis det alla på lagret snackar om.
