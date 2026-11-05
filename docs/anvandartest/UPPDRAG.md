# Användartest av Skatteplattformen

Skatteplattformen (https://wilhelm-wg.github.io/skatteplattformen/) är en oberoende svensk sajt som visar vad skatten betalar för, i kronor och med källa för varje siffra. Rubriken är "Vad fan får vi för pengarna?". Ägaren vill att sajten ska vara neutral i sak men lekfull i ton.

Vyer (hash-routing): #start (skriv in lön → skattekvitto, "Dela kvittot som bild"), #kalkylator (Din ekonomi: ålder/lön, vad du tar emot och betalar, två kvitton, livslopp, scenarier, skatter i korthet, ISK), #budget (statsbudgeten, försvar, statsskuld), #pristabell (Prislistan: vad saker kostar, quiz "Gissa först"), #oecd (Jämförelser med Norden m.fl.), #framtid (Framtid och historik), #metod (Metod och källor, rättelselogg).

## Ditt uppdrag
Du är en testperson (persona nedan). Gå igenom sajten som den personen skulle göra, på det sätt personen faktiskt använder internet, och rapportera ärligt vad som fungerar och inte.

## Så här gör du
- Hämta sidan: `curl -s https://wilhelm-wg.github.io/skatteplattformen/ -o $DIR/sida.html` (en enda HTML-fil; JS sköter vyerna).
- Ta skärmbilder med Chrome headless och titta på dem med Read-verktyget, till exempel:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=390,2400 --virtual-time-budget=6000 --screenshot=$DIR/start.png "https://wilhelm-wg.github.io/skatteplattformen/#start"`
  Byt hash för andra vyer. Mobil = 390 bred, dator = 1280 bred. Lönen kan sättas med `?lon=25000#start`, kalkylatorn med `?age=34&inc=400#kalkylator` (inc = tkr per år).
- Läs texten i sidan (grep/sed i HTML-filen) när du behöver förstå innehåll som inte syns i skärmbilden.
- Använd inte Claude-in-Chrome-verktygen (andra testare delar webbläsaren). Ändra ingenting i ~/Desktop/skatteplattformen.
- Ägna dig åt det din persona bryr sig om. Max cirka 15 skärmbilder.

## Rapport
Skriv rapporten på svenska till `$DIR/<ditt-namn>.md` och svara också med den. Format:
1. **Första intryck** (de första 10 sekunderna): förstod du vad sajten är och vad du ska göra?
2. **Uppgifter du försökte göra** och hur det gick (lyckades / delvis / misslyckades, och varför).
3. **Förtroende:** litar du på siffrorna? Upplevs sajten neutral eller politisk? Vad ökar eller minskar förtroendet?
4. **Språk och begrepp:** ord eller meningar du inte förstod eller stör dig på (citera).
5. **Problem**, var för sig: plats (vy + vad), vad som hände, allvar (hög/medel/låg), förslag.
6. **Det bästa** med sajten.
7. **Skulle du dela den?** Med vem och varför/varför inte.
Var konkret och citera texten på sidan. Hitta inte på saker du inte sett.
