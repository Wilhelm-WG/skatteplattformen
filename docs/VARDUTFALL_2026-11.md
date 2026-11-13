# Canceröverlevnad: hur Sverige står sig mot andra länder, och hur det kan visas sakligt

*Underlag för Skatteplattformen. Sammanställt 2026-11-13. Ingenting i repot har ändrats.*

**Kort svar:** Sverige ligger högt i jämförelsen, men inte överst på allt. För bröstcancer, lungcancer och "all cancer" ligger Sverige i topp bland de nordiska länderna och klart över OECD-snittet. För tjock- och ändtarmscancer ligger Sverige i mitten. Sverige har relativt hög dödlighet i prostatacancer, trots att överlevnaden är mycket hög. Dödligheten i cancer totalt är bland de lägsta i EU, men det beror till stor del på att få svenskar röker. För kvinnor ligger dödligheten i cancer nära EU-snittet. Sajten bör därför visa **två eller tre mått sida vid sida** och inte bara den bästa siffran.

Förkortningar: RS = relativ överlevnad, NS = nettoöverlevnad, KI = 95 % konfidensintervall, ESP = European Standard Population 2013.

---

## 1. Hur canceröverlevnad mäts bäst och säkrast

### 1.1 Måtten

| Begrepp | Vad det är | Kommentar |
|---|---|---|
| **Observerad överlevnad** | Andelen patienter som lever efter 5 år, oavsett dödsorsak | Går inte att jämföra mellan länder, eftersom den beror på hur länge befolkningen lever i övrigt. |
| **Relativ överlevnad (RS)** | Patienternas observerade överlevnad delad med den förväntade överlevnaden i en jämförbar del av befolkningen (enligt livslängdstabeller) | Standardmåttet i Norden: NORDCAN och Socialstyrelsen. Tolkas som överlevnaden "om cancern vore den enda dödsorsaken". |
| **Nettoöverlevnad (NS)** | Samma idé, men skattad med Pohar Perme-metoden, som hanterar den högre konkurrerande dödligheten hos äldre korrekt | CONCORD och OECD använder detta. Skillnaden mot RS är liten i praktiken. NORDCAN och Socialstyrelsen använder också Pohar Perme men kallar resultatet "relativ överlevnad". |
| **Åldersstandardisering** | Viktar om måttet till en gemensam åldersfördelning | Internationellt används ICSS-vikterna (International Cancer Survival Standard). **Socialstyrelsens siffror i *Cancer i Sverige* är standardiserade till svenska patienter 2019–2023, och myndigheten skriver själv att de är "mindre lämpliga för internationella jämförelser"** (Cancer i Sverige 2025, s. 36). |
| **Femårsöverlevnad** | Det vanligaste tidsmåttet | Brukar användas som indikator på hur bra vården är. För bröst- och prostatacancer är 10 år mer informativt. |
| **Kohortanalys** | Följer alla som fick diagnos en viss period | Ger "faktisk" överlevnad men visar en äldre bild. |
| **Periodanalys** | Använder överlevnadsrisken under en kalenderperiod, för personer som fått diagnos tidigare | Ger en mer aktuell skattning. CONCORD-3 använde periodanalys för 2010–2014. NORDCAN och Socialstyrelsen använder den för den senaste perioden. |

### 1.2 Källorna

| Källa | Vad den täcker | Senaste period | Status |
|---|---|---|---|
| **CONCORD-3** (Allemani m.fl., *Lancet* 2018;391:1023–75, doi:10.1016/S0140-6736(17)33326-3) | 71 länder, 37,5 miljoner patienter, diagnos 2000–2014; NS, ICSS | 2010–2014 | Primärkälla. Ingår i OECD:s data. |
| **OECD Health Care Quality Indicators** ("Cancer care", DSD_HCQO@DF_CC) | Bröst, tjocktarm, ändtarm, lunga, magsäck, livmoderhals, barnleukemi (ALL). **Prostata saknas.** | 2010–2014 (= CONCORD-3) | Det är dessa siffror som *Health at a Glance 2025* fortfarande använder. Data hämtade via DBnomics (indexerade 2025-12-06). |
| **CONCORD-4, barn** (*Lancet* 2026;407:1335–59, publicerad 26 mars 2026, doi:10.1016/S0140-6736(26)00189-3) | 613 021 barn i 68 länder, diagnos 1990–2019; "Cancer Survival Index" | 2015–2019 | Primärkälla. **Sverige, Finland och Island finns inte med i tabellerna.** Danmark, Norge, Tyskland och USA finns. |
| **CONCORD-4, vuxna** | Över 83 miljoner vuxna, 22 cancerformer, diagnos 1990–2022, 75 länder | – | Presenterades vid LSHTM under London Global Cancer Week (3 nov 2026). **Jag kunde inte verifiera att artikeln är publicerad** per 2026-11-13. Bör bevakas: den ersätter 2010–2014 som internationell referens. |
| **EUROCARE-6** | Europa, diagnos 2000–2013, uppföljning till 2014 | ~2010–2014 | Barncancerdelen är publicerad (*Lancet Oncol* 2022). **Jag hittade inga publicerade landsvärden för vuxna.** Ingår inte i rekommendationen. |
| **NORDCAN 2.0** (IARC och de nordiska cancerregistren) | DK, FI, IS, NO, SE (plus Färöarna och Grönland); RS med Pohar Perme, ICSS-standardiserad, periodanalys för sista perioden | **2020–2024** | Primärkälla, mest aktuell och direkt jämförbar inom Norden. **Saknar OECD- och EU-snitt, Tyskland och USA.** |
| **Socialstyrelsen** (*Cancer i Sverige 2025 – Relativ överlevnad 1974–2023*, art.nr 2025-5-9540; *Cancer bland barn*, art.nr 2026-10-10446) | Endast Sverige | 2019–2023 (vuxna), 2020–2024 (barn) | Bra för svensk utveckling över tid. Inte för jämförelser med andra länder. |
| **Eurostat** hlth_cd_asdr2 | Åldersstandardiserad dödlighet (ESP 2013) per 100 000 | **2023** | Primärkälla för dödlighet i EU/EES. USA saknas. |
| **OECD** "Causes of mortality" (DSD_HEALTH_STAT@DF_COM) | Åldersstandardiserad dödlighet (OECD:s standardbefolkning) | 2022–2023 | Har med USA. Värdena är inte jämförbara med Eurostats, eftersom standardbefolkningen är en annan. |

### 1.3 Fallgropar

1. **Blanda inte källor.** Samma svenska patienter ger olika siffror beroende på metod. Bröstcancer, diagnos 2010–2014: **88,8 %** i CONCORD-3/OECD (NS, ICSS) men **91,1 %** i NORDCAN (RS). Bröstcancer i dag: **93,4 %** i NORDCAN 2020–2024, och sajtens nuvarande "93 % 2020" kommer från Socialstyrelsen. Ett svenskt värde från Socialstyrelsen får aldrig ställas mot ett OECD-snitt från CONCORD.
2. **Screening, överdiagnostik och lead-time bias.** Om en cancer upptäcks tidigare förlängs tiden från diagnos till död, även när ingen behandling förlänger livet. Överdiagnostik lägger dessutom till fall som aldrig hade blivit farliga. Båda höjer femårsöverlevnaden. **Prostatacancer är skolexemplet.** Sverige har 96,0 % femårsöverlevnad (NORDCAN 2020–2024), men en dödlighet på 47,2 per 100 000 män mot EU-snittet 34,6 (Eurostat 2023, plats 21 av 27). Hög överlevnad betyder alltså inte att färre dör. (Welch, Schwartz & Woloshin, *JAMA* 2000;283:2975–8, "Are increasing 5-year survival rates evidence of success against cancer?", är den klassiska referensen. Jag har citerat den ur egen kunskap och inte hämtat den.)
3. **Stadium vid diagnos.** Länder med mer screening och bättre diagnostik hittar fler tidiga fall. Överlevnaden speglar då både hur tidigt cancern hittas och hur bra behandlingen är.
4. **Registerkvalitet.** Socialstyrelsen skriver att cancerregistret har "ett visst bortfall" för cancer som hittas sent och har dålig prognos, till exempel bukspottkörtel- och lungcancer. Det leder till "en viss överskattning av relativ överlevnad" för dessa cancerformer (Cancer i Sverige 2025, s. 35). Andra problem i internationella jämförelser: fall som bara är kända från dödsbevis (DCO), patienter som försvinner ur uppföljningen, hur stor del av befolkningen registret täcker (USA ca 86 % i CONCORD-3) och olika regler för in situ-tumörer.
5. **"All cancer" påverkas av vilka cancerformer som är vanliga.** Ett land med många prostata-, bröst- och hudcancerfall får högre total överlevnad. Använd hellre NORDCAN:s mått "all cancer utom icke-melanom hudcancer, bröst och prostata", eller CONCORD-4:s index när det publiceras.
6. **Dödlighet och incidens ger andra bilder.** Dödligheten beror också på hur många som insjuknar, alltså på rökning, alkohol, övervikt och ålder. Sveriges låga dödlighet totalt drivs till stor del av att svenska män har EU:s lägsta dödlighet i lungcancer, vilket främst beror på låg rökning och inte på vården. För kvinnor ligger Sverige nära EU-snittet (181,1 mot 183,7).
7. **Små länder.** Islands värden har mycket breda konfidensintervall och hoppar mellan åren. Ett exempel: dödligheten i lungcancer för kvinnor var 56,8 år 2022 och 46,7 år 2023. Rangordna inte Island utan att visa osäkerheten.
8. **Gamla data.** De senaste internationella överlevnadsdata (CONCORD-3/OECD) gäller patienter som fick diagnos 2010–2014, alltså för 12–16 år sedan.
9. **Covid.** NORDCAN:s period 2020–2024 och dödlighet 2020–2022 kan vara påverkade av pandemin, både genom försenade diagnoser och genom överdödlighet.

### 1.4 Vad experterna rekommenderar

CONCORD, OECD och IARC menar att **överlevnad, incidens och dödlighet ska tolkas tillsammans**. Överlevnad är det bästa måttet på hur väl hela vårdkedjan fungerar, från diagnos till behandling. Dödlighet är det bästa måttet på den totala bördan och påverkas inte av lead-time bias. OECD:s *Health at a Glance* visar därför båda: dödlighet under "Health status" och femårsnettoöverlevnad under "Quality of care". Om ett land har både hög överlevnad och låg eller fallande dödlighet är det ett starkt tecken på god cancervård. Hög överlevnad tillsammans med hög dödlighet, som för prostatacancer i Sverige, tyder i stället på överdiagnostik eller hög incidens. (Det här är en sammanfattning av vedertagen praxis. Jag har inte kunnat ta fram ett exakt citat ur *Health at a Glance 2025*, eftersom oecd.org blockerade hämtningen med HTTP 403.)

---

## 2. Femårsöverlevnad: Sverige jämfört med de sex andra länderna

### 2.1 Internationellt: CONCORD-3 via OECD, diagnos 2010–2014 (femårsnettoöverlevnad i %, åldersstandardiserad med ICSS, vuxna 15+)

Källa: OECD Health Care Quality Indicators, dataset DSD_HCQO@DF_CC, hämtat via DBnomics: https://db.nomics.world/OECD/DSD_HCQO@DF_CC (primärkälla: CONCORD-3). OECD-snittet är **min egen beräkning**: oviktat medelvärde av de 34 OECD-länder som har data (Grekland, Ungern, Luxemburg och Mexiko saknas). För bröstcancer ger det exakt 84,3, samma värde som OECD själva anger och som sajten redan använder. Det talar för att metoden stämmer.

| Cancer | SE | NO | DK | FI | IS | DE | USA | OECD-snitt | Sveriges plats bland 34 OECD-länder |
|---|---|---|---|---|---|---|---|---|---|
| Bröst (kvinnor) | **88,8** (88,2–89,4) | 87,2 | 86,1 | 88,5 | 89,1 (85,1–93,1) | 86,0 | 90,2 | **84,3** | 5:a |
| Tjocktarm | **64,9** (64,0–65,8) | 64,9 | 61,6 | 64,9 | 68,2 | 64,8 | 64,9 | 61,2 | 11:a |
| Ändtarm | **64,7** (63,5–65,8) | 68,3 | 64,8 | 64,4 | 63,0 | 62,3 | 64,1 | 59,8 | 12:a |
| Lunga | **19,5** (18,7–20,2) | 18,1 | 16,6 | 13,0 | 20,2 | 18,3 | 21,2 | 17,1 | 10:a |
| Barnleukemi (ALL, 0–14 år) | **89,0** (84,6–93,3) | 83,0 | 94,0 | 95,2 | 92,4 | 91,1 | 89,5 | 85,6 | 14:e |
| Magsäck (som jämförelse) | 24,8 | 26,2 | 19,9 | 25,7 | 28,1 | 33,5 | 33,1 | 29,6 | **26:e (under snittet)** |
| Prostata | – | – | – | – | – | – | – | – | Finns inte i OECD:s data. CONCORD-3-värden kunde inte verifieras. |

Så kan tabellen läsas:
- **Bröstcancer:** Sverige ligger högt. Bland de europeiska OECD-länderna har bara Island ett högre värde, och Islands konfidensintervall överlappar Sveriges. Ett EU-land utanför OECD, Cypern, har 92,8. USA ligger högre än Sverige.
- **Tjock- och ändtarm:** Sverige ligger över OECD-snittet men på samma nivå som Norden, Tyskland och USA. Sverige är inte i topp.
- **Lunga:** Sverige ligger över snittet men under USA.
- **Barnleukemi:** Sverige ligger över snittet men under Danmark och Finland. Konfidensintervallen är breda.
- **Magsäck:** Sverige ligger under OECD-snittet.

### 2.2 Norden i dag: NORDCAN 2.0, period 2020–2024 (relativ femårsöverlevnad i %, åldersstandardiserad, med KI)

Källa: NORDCAN 2.0, IARC och de nordiska cancerregistren, https://nordcan.iarc.who.int/en/dataviz/survival. Hämtat via NORDCAN:s API `https://canapi.iarc.who.int/api/nordcan/v2/961/survival/population/5/{kön}/208_246_578_752_352/all/?surv_period=5&years=2020` (2026-11-13). Tyskland, USA och OECD/EU-snitt finns inte i NORDCAN.

| Cancer (kön) | SE | NO | DK | FI | IS |
|---|---|---|---|---|---|
| Bröst (kvinnor) | **93,4** (92,9–93,9) | 91,6 | 91,1 | 92,0 | 91,3 (88,3–94,5) |
| Prostata (män) | **96,0** (95,5–96,4) | 95,1 | 90,7 | 94,2 | 89,7 |
| Tjock- och ändtarm (män) | 71,7 (70,9–72,6) | 72,2 | 72,2 | 69,6 | 72,9 |
| Tjock- och ändtarm (kvinnor) | 72,2 (71,4–73,1) | 73,9 | 74,4 | 72,8 | 70,6 |
| Lunga (män) | **31,3** (30,0–32,7) | 30,8 | 28,1 | 17,9 | 29,0 |
| Lunga (kvinnor) | **38,9** (37,7–40,1) | 38,4 | 37,2 | 30,8 | 35,5 |
| All cancer utom hudcancer (icke-melanom), bröst och prostata (män) | 66,7 (66,3–67,0) | 66,8 | 64,3 | 57,6 | 62,2 |
| Samma mått (kvinnor) | 67,3 (66,9–67,6) | **69,0** | 66,7 | 64,5 | 62,7 |
| All cancer utom hudcancer (icke-melanom) (män) | **78,0** | 76,5 | 71,0 | 69,9 | 71,9 |
| All cancer utom hudcancer (icke-melanom) (kvinnor) | **75,1** | 75,0 | 73,6 | 73,6 | 71,6 |

Så kan tabellen läsas:
- **Bröst, prostata och lunga:** Sverige har högst värde i Norden, men skillnaden mot Norge är ofta inom felmarginalen.
- **Tjock- och ändtarm:** Sverige ligger i mitten eller lägre i Norden. Kvinnor i Sverige har signifikant lägre värde än i Danmark.
- **All cancer utom hudcancer, bröst och prostata:** Sverige och Norge ligger i topp. För kvinnor har Norge ett högre värde.

Som jämförelse, period 2015–2019 (NORDCAN): bröst 92,7 i Sverige, prostata 95,2, lunga 24,8 för män och 32,7 för kvinnor. Alla värden har stigit.

### 2.3 Barncancer

| Källa | Mått | Period | Värden |
|---|---|---|---|
| CONCORD-4, *Lancet* 2026;407:1335–59, tabell 3 | 5-årigt Cancer Survival Index, alla barncancerformer, 0–14 år | Diagnos 2015–2019 | **NO 89,0** (87,1–90,9) · USA 87,1 (86,6–87,5) · DE 85,2 (84,0–86,5) · DK 83,1 (80,8–85,4) · **SE, FI och IS finns inte med** |
| OECD/CONCORD-3 | Barnleukemi (ALL), NS | 2010–2014 | Se tabellen i 2.1 (SE 89,0) |
| Socialstyrelsen, *Cancer bland barn* (art.nr 2026-10-10446, s. 7) | Relativ femårsöverlevnad, 0–17 år | 2020–2024 | **SE 89 %** (flickor 89, pojkar 88), att jämföra med 83 % 2005–2009. Lymfom 96 %, leukemi 94 %. |

**Socialstyrelsens 89 % kan inte jämföras med CONCORD-4:s värden.** Åldrarna, standardiseringen och perioden skiljer sig. Någon jämförbar internationell siffra för svensk barncancer totalt kunde jag inte hitta.

### 2.4 Sverige totalt, svensk källa

Enligt *Cancer i Sverige 2025* (Socialstyrelsen) var den relativa femårsöverlevnaden för all cancer utom icke-melanom hudcancer, 20–89 år, period 2019–2023, **"över 73 procent för kvinnor och 76 procent för män"**. För lungcancer var den 26 % för män och 33 % för kvinnor. Värdena är standardiserade till svenska patienter och ska bara användas för att visa utvecklingen över tid i Sverige.

---

## 3. Cancerdödlighet (åldersstandardiserad, per 100 000)

### 3.1 Eurostat, år 2023 (ESP 2013, båda könen om inget annat anges)

Källa: Eurostat hlth_cd_asdr2, hämtat med `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_cd_asdr2?format=JSON&unit=RT&age=TOTAL&icd10=C&...` (2026-11-13). USA finns inte i Eurostat.

| Dödsorsak | SE | NO | DK | FI | IS | DE | **EU27** | Sveriges plats i EU27 (1 = lägst) |
|---|---|---|---|---|---|---|---|---|
| All cancer (C00–C97) | **202,6** | 211,8 | 262,7 | 208,0 | 224,4 | 234,8 | **233,1** | 4:e av 27 |
| – män | 234,3 | 250,1 | 317,5 | 260,8 | 261,3 | 292,3 | 302,8 | 2:a |
| – kvinnor | 181,1 | 185,3 | 222,2 | 170,6 | 195,3 | 193,4 | 183,7 | **15:e (mitten)** |
| Bröst (kvinnor) | **23,1** | 22,0 | 34,2 | 23,9 | 32,3 | 33,8 | 29,8 | 3:e |
| Prostata (män) | **47,2** | 42,3 | 56,2 | 39,4 | 53,6 | 37,4 | 34,6 | **21:a (hög)** |
| Tjock- och ändtarm, inkl. anus (C18–C21) | 25,7 | 29,5 | 27,0 | 24,0 | 20,7 | 23,6 | 26,5 | 12:e |
| Lunga (C33–C34) | **31,5** | 40,8 | 53,9 | 33,6 | 40,5 | 46,8 | 46,7 | **1:a (lägst)** |

Utvecklingen i Sverige, all cancer: 216,7 (2019), 214,1, 206,6, 205,0, 202,6 (2023).

### 3.2 OECD, med USA (OECD:s standardbefolkning, senaste år)

Källa: OECD "Causes of mortality", DSD_HEALTH_STAT@DF_COM, via https://db.nomics.world/OECD/DSD_HEALTH_STAT@DF_COM.

| Dödsorsak | SE (2023) | NO (2022) | DK (2022) | FI (2023) | IS (2022) | DE (2023) | USA (2022) | OECD-snitt 2021* |
|---|---|---|---|---|---|---|---|---|
| Elakartade tumörer totalt | 172,2 | 185,3 | 220,9 | 173,2 | 196,3 | 190,7 | 178,5 | ~194,9 |
| Bröst (kvinnor) | 20,2 | 19,9 | 27,6 | 21,1 | 27,4 | 28,6 | 23,2 | ~24,5 |
| Prostata (män) | 37,8 | (45,6 år 2016) | 43,9 | 29,5 (2022) | 46,4 | 31,7 (2020) | 23,6 | ~32,6 |
| Tjock- och ändtarm | 21,8 | 25,8 | 23,4 | 20,3 | 18,8 | 19,4 | 16,1 | ~22,0 |
| Lunga | 26,5 | 36,5 | 47,4 | 28,3 | 43,4 | 39,1 | 38,2 | ~36,9 |

\* Min egen beräkning: oviktat medel av de 36 OECD-länder som har data för 2021. **Det är inte OECD:s officiella snitt.** *Health at a Glance 2025* gick inte att hämta (HTTP 403). Värdena kan inte jämföras med Eurostats, eftersom standardbefolkningen är en annan.

USA har lägre dödlighet än Sverige i tjock- och ändtarmscancer och i prostatacancer, men högre i lungcancer och i cancer totalt.

---

## 4. Rekommendation

### 4.1 Mått att visa (tre, eventuellt fyra)

1. **Femårsöverlevnad i bröstcancer: Sverige mot OECD-snittet, med de sju länderna som punkter.** Källa OECD/CONCORD-3, diagnos 2010–2014. Värden: SE 88,8, OECD 84,3, USA 90,2, IS 89,1, FI 88,5, NO 87,2, DK 86,1, DE 86,0. Visa som ett **punktdiagram (dot plot) med en linje för OECD-snittet** och skriv ut diagnosperioden. Det här är sajtens befintliga mått, nu med sammanhang.
2. **En överlevnadspanel med flera cancerformer** (bröst, tjocktarm, ändtarm, lunga, barnleukemi) från samma källa, med Sverige som punkt och OECD-snittet som streck. Det visar ärligt att Sverige ligger över snittet överallt men inte alltid i topp. Ta gärna med magsäck för balansens skull, eller nämn att Sverige där ligger under snittet.
3. **Dödlighet i cancer per 100 000 (Eurostat 2023): Sverige mot EU27 och de nordiska länderna och Tyskland,** som stapel eller punkt. Visa totalt (202,6 mot 233,1) **och för kvinnor (181,1 mot 183,7)**, eller förklara i text att den låga totalsiffran drivs av låg dödlighet i lungcancer. Lägg USA i en fotnot med OECD-värdet 178,5 (2022, annan standardbefolkning), eller utelämna USA.
4. *(Valfritt, mer aktuellt)* **NORDCAN 2020–2024, Norden:** bröst 93,4 i Sverige mot 91,1–92,0 i grannländerna, plus lunga och prostata, med KI. Märk tydligt "endast Norden, annan metod än OECD-siffrorna".

**Referens:** Använd OECD-snittet för överlevnad, eftersom det är det enda snitt som finns med USA. Använd EU27-snittet för dödlighet från Eurostat. Blanda inte de två.

**Uppdatering:** När CONCORD-4 för vuxna publiceras (diagnos fram till 2015–2019) och OECD tar in den i sin databas bör mått 1 och 2 bytas ut.

### 4.2 Formuleringar som stämmer

- ✅ "Sverige har bland de högsta femårsöverlevnaderna för bröstcancer i Europa: 88,8 procent för kvinnor som fick diagnos 2010–2014, mot 84,3 procent i snitt i OECD (OECD/CONCORD-3)." *Det stämmer: bland de europeiska OECD-länderna har bara Island ett högre värde, och skillnaden ligger inom felmarginalen.*
- ✅ "För de vanligaste cancerformerna ligger överlevnaden i Sverige över OECD-snittet. För tjock- och ändtarmscancer är den ungefär som i övriga Norden, Tyskland och USA."
- ✅ "Dödligheten i cancer i Sverige är bland de lägsta i EU: 203 per 100 000 invånare år 2023, mot 233 i EU-snittet (Eurostat, åldersstandardiserat). Det beror till stor del på att få dör av lungcancer, alltså på att få röker. För kvinnor ligger dödligheten nära EU-snittet."
- ✅ "I Norden har Sverige högst femårsöverlevnad för bröst-, prostata- och lungcancer (NORDCAN 2020–2024), men skillnaderna mot Norge är små."
- ✅ "Av de barn som får cancer i Sverige lever i dag 89 procent efter fem år (Socialstyrelsen, 2020–2024)." *Bara som svensk siffra, utan jämförelse med andra länder.*

### 4.3 Vad sajten inte bör påstå

- ❌ "Sverige har världens bästa cancervård" eller "bäst i världen på cancer". USA och Australien ligger högre för flera cancerformer, och Sverige ligger under snittet för magsäckscancer.
- ❌ Att hög prostataöverlevnad visar att vården är bra. Dödligheten i prostatacancer är hög i Sverige (plats 21 av 27 i EU).
- ❌ Att låg cancerdödlighet visar att vården är bra. Den speglar främst låg rökning.
- ❌ Att jämföra en siffra från Socialstyrelsen (till exempel bröstcancer 93 % 2020) med OECD-snittet 84,3. Det är olika metoder och olika perioder. I dagens text står de två bredvid varandra, och den bör skrivas om så att det tydligt framgår att det är olika källor.
- ❌ Att presentera överlevnad för 2010–2014 som "i dag" utan att ange diagnosperioden.
- ❌ Att rangordna Island utan att visa felmarginalen.
- ❌ Att ange CONCORD-4-värden för vuxna innan artikeln är publicerad.

---

## 5. Osäkerheter

- **CONCORD-4 för vuxna:** Jag kunde inte verifiera att den är publicerad (resultaten presenterades 3 nov 2026). Den ger troligen nyare och delvis annorlunda internationella värden.
- **OECD:s officiella snitt för dödlighet och texten i *Health at a Glance 2025*** kunde inte hämtas (HTTP 403). Snitten i 3.2 är egna, oviktade beräkningar. Snitten för överlevnad är också egna beräkningar men stämmer exakt med OECD:s 84,3 för bröstcancer.
- **Prostata internationellt:** Jag kunde inte verifiera CONCORD-3-värden för prostatacancer.
- **Barncancer:** Det finns ingen jämförbar internationell siffra för Sverige (Sverige saknas i CONCORD-4-artikeln om barn).
- **EUROCARE-6:** Jag hittade inga landsvärden för vuxna.
- **Primärkälla eller sekundärkälla:** Eurostat, NORDCAN (via API), CONCORD-4-artikeln om barn (PDF) och Socialstyrelsens PDF:er har jag läst själv i primärkällan. OECD-data har jag läst via **DBnomics**, som speglar OECD:s data. DBnomics är alltså en sekundär spegel, men värdena kommer från OECD. CONCORD-3:s metodbeskrivning kommer från PMC (PMC5879496). JAMA-referensen (Welch 2000) har jag citerat ur egen kunskap och inte hämtat.


---

# Vårdens utfall i internationell jämförelse – underlag för Skatteplattformen

*Forskarrapport, 2026-11-13. Omfattar sjukvårdens utfall utom canceröverlevnad. Inget i repot är ändrat.*

## Källäge och metod

- **Primärkällor jag hämtat själv:**
  - Eurostat API `hlth_cd_apr` (undvikbar dödlighet) och `hlth_silc_08` (ouppfyllda vårdbehov).
  - OECD Health Statistics 2025 via DBnomics spegel. Dataset: `DSD_HCQO@DF_AC` (akutvård), `DF_PC` (primärvård/undvikbara inläggningar), `DF_PS` (patientsäkerhet), `DSD_HEALTH_STAT@DF_AM` (undvikbar dödlighet) och `DSD_HEALTH_PROC@DF_WAITING`. DBnomics indexerade dem 2025-11/12, alltså samma datautgåva som Health at a Glance 2025.
  - PaRIS-rapporten *Does Healthcare Deliver?* (OECD, feb 2025, PDF).
  - Commonwealth Fund, *Mirror, Mirror 2024* (PDF).
- **Sekundärt:** oecd.org (Health at a Glance 2025, HaaG) blockeras av en Cloudflare-robotkontroll, både för curl och för webbläsaren. Den har jag inte försökt ta mig förbi. OECD-snitten ur HaaG-texten (6,5 / 8,6 / 7,7 / 12,1 / 77 / 145 / 155 / 111) kommer därför från sökmotorutdrag av HaaG-kapitlen och landsnoterna. De bör kontrolleras mot oecd.org i en vanlig webbläsare innan publicering. Alla landsvärden nedan har jag däremot läst direkt ur OECD:s och Eurostats data.
- Socialstyrelsens 28-dagarssiffror (hjärtinfarkt 21 %, stroke 22 %, 2024) är verifierade via Socialstyrelsens pressmeddelanden och statistiksidor i sökresultat. De är sekundärt verifierade men konsekventa.

---

## 1. Vilka mått håller, och deras fallgropar

| Mått | Bedömning | Viktigaste fallgropar |
|---|---|---|
| **Åtgärdbar (treatable) dödlighet** | **Bäst tillgängliga övergripande mått på vårdens effekt.** Dödsfall före 75 år i orsaker som vården kan bota när de väl uppstått (t.ex. hjärtinfarkt, stroke, flera cancerformer, diabetes, blindtarmsinflammation). | Definitionen är OECD/Eurostats gemensamma lista från 2019 (uppdaterad 2022). Orsaker som är både förebyggbara och åtgärdbara (t.ex. ischemisk hjärtsjukdom) delas 50/50. Mäter bara dödsfall före 75 år. Påverkas av kodning av dödsorsaker. **OECD och Eurostat använder olika standardbefolkningar** (OECD 2010 respektive European Standard Population 2013), så deras värden får aldrig blandas i samma diagram. |
| **Förebyggbar (preventable) dödlighet** | Mäter främst folkhälsa och levnadsvanor (alkohol, rökning, olyckor, självmord, narkotika, delvis ischemisk hjärtsjukdom och lungcancer). | **Inte ett mått på sjukvårdens kvalitet.** Sajtens nuvarande diagram visar *summan* (”undvikbar”), där den förebyggbara delen väger cirka 2/3. Det ger ett missvisande intryck av att vården förklarar hela skillnaden. |
| **30-dagarsdödlighet efter hjärtinfarkt och ischemisk stroke** | Bra kliniskt mått på akutvården. Personer 45+, ålders- och könsstandardiserat. | **Olänkade data** räknar bara dödsfall på det sjukhus där patienten lades in, och påverkas av överflyttningar och vårdtidens längd. Länder med korta vårdtider och få vårdplatser, som Sverige, ser bättre ut. **Länkade data** följer patienten (dödsregister) och är robustare. Tyskland och USA rapporterar bara olänkat. Små tal för Island ger stora svängningar. Fånger inte dem som dör innan de når sjukhus. |
| **Undvikbara sjukhusinläggningar** (astma+KOL, hjärtsvikt, diabetes) | Indirekt mått på primärvårdens förmåga att hålla kroniskt sjuka stabila. | Beror på sjukdomsförekomst, hur sjukhusen tar in patienter (antal vårdplatser) och kodning. Få vårdplatser ger få inläggningar oavsett primärvård. Inte ett rent utfallsmått. |
| **Diabetes: amputationer** | Klassiskt mått på långsiktig diabetesvård. | **Nämnaren avgör bilden.** Per 100 000 invånare (OECD:s databas) ligger Sverige *högt* bland de nordiska länderna, 7,5 mot Danmark 3,3. Per 100 000 vuxna med diabetes (nytt i HaaG 2025) anges Sverige bland de *lägsta*. Mindre amputationer görs ofta i öppenvård i Sverige och missas. **Bör inte visas.** |
| **Patientsäkerhet** (t.ex. förlossningsbristningar, blodpropp och sepsis efter operation) | Viktigt men olämpligt för rangordning. | Sjukhus och länder som registrerar noggrant får *högre* tal. OECD varnar själv för att jämföra nivåer. Sverige har t.ex. 9,4 % bristningar vid instrumentell förlossning (Norge 4,4 %), vilket delvis kan bero på registrering. |
| **PaRIS** (OECD:s enkät till patienter 45+ i primärvården, resultat feb 2025) | Metodmässigt det bästa internationella patientrapporterade måttet. | **Sverige, Danmark, Finland och Tyskland deltog inte.** Deltagare: Australien, Belgien, Kanada, Tjeckien, Frankrike, Grekland, **Island**, Italien, Luxemburg, Nederländerna, **Norge**, Portugal, Rumänien, Saudiarabien, Slovenien, Spanien, Schweiz, Wales och **USA** (PaRIS-rapporten, Box 2.1). **Kan inte användas för Sverige.** |
| **Väntetider** | Mäter tillgänglighet, inte hur frisk man blir. | Mäts olika i olika länder. OECD:s median för höftledsoperation finns bara för några länder (inte Tyskland och USA). |
| **Ouppfyllda vårdbehov** (EU-SILC) | Harmoniserad EU-enkät, bättre än nöjdhetsmått för tillgänglighet. | Självrapporterat. Tidsseriebrott, bland annat för Tyskland. USA saknas. |
| **Förtroende och nöjdhet** | Svaga som kvalitetsmått. | Speglar förväntningar, kultur, medier och politiskt förtroende mer än medicinska utfall. Frågorna skiljer sig mellan undersökningar. Svag koppling till dödlighet och överlevnad. |
| **Euro Health Consumer Index (EHCI)** | **Bör undvikas.** | Producerades av den privata svenska tankesmedjan Health Consumer Powerhouse, senast 2018 (Sverige 8:a). Godtyckliga vikter och poänggränser och delvis expertbedömningar, inte data. Har kritiserats av forskare vid European Observatory (Cylus, Nolte, Figueras, McKee, BMJ-blogg 2016). Föråldrat. |
| **Commonwealth Fund, Mirror Mirror 2024** | Kan nämnas med förklaring, men inte som rangordning av ”bäst vård”. | Tio länder, varav bara **Sverige, Tyskland och USA** av sajtens länder (Norge hoppade av efter 2021). Bygger främst på telefonenkäter. **Sverige fick inte vara med i jämlikhetsdomänen** (svenska integritetsregler stoppade inkomstfrågor), och Sveriges ”overall”-rang räknas utan den. Rangen är känslig för val av mått. Sverige: totalt 6, hälsoutfall 6, tillgänglighet 4, vårdprocess **10 (sist)**. Tyskland: 9 / 9. USA: 10 / 10. |

**Slutsats:** De säkraste måtten på ”hur bra vården är på att göra folk friska” är (1) **åtgärdbar dödlighet** och (2) **30-dagarsdödlighet efter hjärtinfarkt och stroke med länkade data**. Undvikbara inläggningar kan komplettera med tydlig brasklapp. Index och nöjdhetsmått bör inte användas för rangordning.

---

## 2. Var Sverige ligger: värden

### 2a. Åtgärdbar dödlighet, Eurostat (`hlth_cd_apr`, mortalit=TRT, icd10=TOTAL, unit=RT, sex=T), 2023
Dödsfall före 75 år per 100 000 invånare, åldersstandardiserat (ESP 2013). Primärkälla: Eurostat API, hämtat 2026-11-13. 2023 är senaste året.

| | SE | NO | DK | FI | IS | DE | USA | EU-27 |
|---|---|---|---|---|---|---|---|---|
| Åtgärdbar | **58,4** | 54,6 | 66,1 | 68,2 | 57,7 | 83,3 | – | 86,8 |
| Förebyggbar | **105,7** | 116,3 | 139,2 | 154,9 | 123,1 | 157,1 | – | 150,9 |
| Summa (undvikbar) | **164,1** | 170,9 | 205,3 | 223,1 | 180,7 | 240,4 | – | 237,7 |

→ Sverige har **lägst förebyggbar dödlighet** men ligger **trea på åtgärdbar dödlighet** (efter Norge och Island, skillnaderna är små) och cirka en tredjedel under EU-snittet. Den svenska ledningen i ”undvikbar dödlighet” drivs alltså främst av den förebyggbara delen (folkhälsan), inte av vården.

URL: https://ec.europa.eu/eurostat/databrowser/view/hlth_cd_apr/default/table

### 2b. Åtgärdbar dödlighet, OECD (Health Statistics 2025 / HaaG 2025), OECD-standardbefolkning
Primärkälla för landsvärdena: OECD `DSD_HEALTH_STAT@DF_AM` (TRTM, DT_10P5HB) via DBnomics. Snittet 77 är från HaaG 2025 (sekundärt, sökutdrag av kapitlet *Avoidable mortality* och landsnoterna).

| SE | NO | DK | FI | IS | DE | USA | OECD |
|---|---|---|---|---|---|---|---|
| 47 (2023) | saknas* | 55 (2022) | 57 (2022) | 49 (2022) | 66 (2020) | 95 (2022) | 77 (2023) |

\*I OECD:s databas slutar Norges serie 2016, och HaaG 2025:s landsnot för Norge anger att jämförbara data saknas. Olika år gör tabellen sämre för diagram. Den är dock enda källan som har med **USA**.

### 2c. 30-dagarsdödlighet efter hjärtinfarkt (45+, ålders- och könsstandardiserat), procent
Primärkälla: OECD `DSD_HCQO@DF_AC`. MORTAMII = ”during same hospital admission, unlinked data”, MORTAMIO = ”in- and out of hospital, linked data”. OECD-snitten är från HaaG 2025 (sekundärt).

| | SE | NO | DK | FI | IS | DE | USA | OECD |
|---|---|---|---|---|---|---|---|---|
| Olänkat (samma sjukhus), 2023 | **3,4** | 2,6 | 4,5 | 7,0 | 2,5 (2024: 3,0) | 7,9 | 5,2 (2022) | 6,5 |
| Länkat (in- och utom sjukhus), 2023 | **6,4** | 5,9 | 6,5 | 7,8 | 4,7 (2024: 4,5) | – | (9,2 år 2014) | 8,6 |

### 2d. 30-dagarsdödlighet efter ischemisk stroke (45+), procent
Primärkälla: OECD `DF_AC` (MORTISTI / MORTISTO).

| | SE | NO | DK | FI | IS | DE | USA | OECD |
|---|---|---|---|---|---|---|---|---|
| Olänkat, 2023 | **4,9** | 4,0 | 4,9 (2021) | 9,4 | 8,9 (2024: 5,9) | 7,0 | 4,5 (2022) | 7,7 |
| Länkat, 2023 | **9,5** | 7,7 | 8,3 | 9,9 | 13,4 (2024: 11,9) | – | – | 12,1 (24 länder) |

→ Sverige ligger klart under OECD-snittet men **i mitten av Norden**. Norge har lägre dödlighet i alla fyra måtten, Danmark i länkad stroke. Olänkat ger Sverige en fördel, eftersom kvoten olänkat/länkat är cirka 0,53 för Sverige mot cirka 0,69 för Danmark. Det är förenligt med kort vårdtid.

### 2e. Undvikbara sjukhusinläggningar, per 100 000 invånare 15+, ålders- och könsstandardiserat
Primärkälla: OECD `DSD_HCQO@DF_PC`. OECD-snitten är från HaaG 2025 (sekundärt): astma+KOL 155, diabetes 111. Hjärtsvikt: kunde inte verifiera OECD-snittet (EU-snitt 232 år 2023 enligt OECD:s rapport *The State of Cardiovascular Health in the EU*).

| | SE 2023 | NO 2023 | DK 2023 | FI 2023 | IS 2023 | DE 2023 | USA 2022 | OECD 2023 |
|---|---|---|---|---|---|---|---|---|
| Astma + KOL | **120** | 207 | 278 | 115 | 118 | 250 | 123 | 155 |
| Hjärtsvikt | **203** | 192 | 221 | 211 | 191 | 380 | 387 | kunde inte verifiera |
| Diabetes | **60** | 60 | 90 | 85 | 34 | 180 | 223 | 111 |

### 2f. Övrigt (bör inte visas som diagram)
- **Diabetesamputation (större, per 100 000 invånare, olänkat), 2023:** SE 7,5, NO 6,5, DK 3,3, FI 6,5, IS 1,5, DE 8,6. USA saknas. I HaaG 2025 (per vuxna med diabetes) anges Sverige bland länderna med lägst tal, under 12 per 100 000. Det kunde jag inte verifiera i primärkällan. Bilden är motstridig, så måttet bör inte användas.
- **Patientsäkerhet, 2023:** förlossningsbristningar vid instrumentell förlossning SE 9,4 %, NO 4,4 %, FI 3,8 %, DE 6,5 %, USA 11,7 % (2022). Blodpropp i lungan efter höft- och knäplastik per 100 000 utskrivningar: SE 414, NO 58, FI 831, DE 340. Detta speglar registrering i hög grad.
- **Höftfrakturoperation inom 2 dygn (65+), 2023:** SE 93,5 %, NO 98,4 %, DE 93,8 %. Är ett processmått.
- **Väntetid till höftledsoperation (median, dagar):** SE 82 (2023) / 80 (2024), DK 49 / 44, FI 134 / 142, NO 176 (2023). Primärkälla: OECD `DF_WAITING`. **Sajtens värden för 2023 stämmer.** 2024 finns för SE, DK och FI.
- **Ouppfyllda vårdbehov på grund av kostnad, avstånd eller väntelista (16+), Eurostat `hlth_silc_08`, 2025:** SE 2,1 %, NO 1,9 %, DK 2,9 %, FI 7,8 %, DE 1,0 % (tidsseriebrott), EU 2,4 %. Island och USA saknas. Enbart väntelista: SE 1,7 %, NO 0,9 %, DK 2,3 %, FI 7,3 %, EU 1,2 %.
- **Commonwealth Fund 2024, hälsoutfall:** Sverige 6:a av 10.
- **EHCI 2018:** Sverige 8:a (sekundärkälla, Wikipedia). Bör inte användas.

### 2g. Kontroll av sajtens nuvarande värden

| Sajtens uppgift | Kontroll | Status |
|---|---|---|
| Undvikbar dödlighet 2023: 164,1 / 170,9 / 205,3 / 223,1 / 180,7 / 240,4, EU 237,7 | Eurostat `hlth_cd_apr`, TOTAL, 2023: exakt samma | ✅ Stämmer. **Men** diagramtiteln och ingressen (”lägst undvikbar dödlighet”) blandar ihop vård och folkhälsa, se rekommendation. |
| Hjärtinfarkt 3,4 %, 2023, OECD-snitt 6,5 | OECD MORTAMII SE 2023 = 3,4. HaaG 2025: 6,5 (2023, olänkat) | ✅ Stämmer. Beskrivningen ”samma sjukhusvistelse” är korrekt. Saknar upplysning om att länkade data ger 6,4 mot 8,6. |
| Stroke 4,9 %, 2023, OECD-snitt 7,7 | OECD MORTISTI SE 2023 = 4,9. HaaG: 7,7 (olänkat) | ✅ Stämmer. Sajten skriver ”på sjukhus”. Länkat: 9,5 mot 12,1. |
| Hjärtinfarkt 21 % inom 28 dagar inklusive dödsfall utanför sjukhus (Socialstyrelsen 2024) | Socialstyrelsen: ”knappt 21 procent”, preliminära siffror för 2024 | ✅ Stämmer. Bör märkas ”preliminärt” och avser alla åldrar, så det är inte jämförbart med OECD:s 45+. |
| Stroke 22 % inom 28 dagar 2024 (Socialstyrelsen) | Socialstyrelsen: ”omkring 22 procent”. Avser **alla strokefall**, inte bara ischemisk | ✅ Stämmer. Texten anger ”alla strokefall”. |
| Höftled: 82 / 49 / 134 / 176 dagar, 2023 | OECD `DF_WAITING` 2023: exakt samma | ✅ Stämmer. 2024 finns (SE 80, DK 44, FI 142). |
| Källtexten ”OECD Health Care Quality Indicators (via DBnomics)” | Datasetet heter nu *Healthcare quality and outcomes* (`DSD_HCQO`) | Mindre: namnbyte. |
| Ingressen: ”…lägst undvikbar dödlighet” | Korrekt för summan, men Sverige är inte lägst i *åtgärdbar* dödlighet (Norge 54,6, Island 57,7, Sverige 58,4) | ⚠️ Inte fel, men risk för feltolkning, eftersom fliken heter ”Utfall vid sjukdom”. |

---

## 3. Rekommendation

### Visa (3–5 mått)

**1. Åtgärdbar dödlighet (ersätter eller kompletterar ”Undvikbar dödlighet” i `JMF_DATA.sjukvard`).**
Form: stapeldiagram, 6 länder + EU-snitt, 2023. Källa: Eurostat `hlth_cd_apr` (mortalit=TRT). Förslag:
```
{t:'Åtgärdbar dödlighet', q:'Hur många dör i förtid av sjukdomar som vården kan behandla?', per:'per 100 000 invånare',
 enh:'dödsfall före 75 års ålder per 100 000 invånare i sjukdomar som hade kunnat behandlas med god vård i tid, åldersstandardiserat',
 ar:2023, bast:'lagre', dec:0, v:[58.4,54.6,66.1,68.2,57.7,83.3,null], ref:{v:86.8,lbl:'EU-snitt'},
 kalla:'Eurostat, åtgärdbar dödlighet (hlth_cd_apr)', url:'https://ec.europa.eu/eurostat/databrowser/view/hlth_cd_apr/default/table',
 not:'Eurostat redovisar inte USA. I OECD:s beräkning, med en annan standardbefolkning och därför inte jämförbar med staplarna, har USA 95 och Sverige 47 per 100 000 (OECD-snitt 77). Måttet visar vårdens bidrag. Dödsfall som främst kan förebyggas med levnadsvanor och folkhälsoarbete räknas inte in.'}
```
Behåll gärna det nuvarande ”Undvikbar dödlighet” men med texten ”undvikbar dödlighet (förebyggbar + åtgärdbar)”, och lägg in förklaringen att Sverige främst ligger lågt i den förebyggbara delen.

**2. Hjärtinfarkt: dödlighet inom 30 dagar, länkade data** (i stället för, eller bredvid, det olänkade).
Form: punktdiagram, SE / NO / DK / FI / IS + OECD-snitt, 2023. Värden: 6,4 / 5,9 / 6,5 / 7,8 / 4,7, OECD 8,6. Källa: OECD Health Statistics 2025 (`DSD_HCQO@DF_AC`, MORTAMIO) / HaaG 2025. Tyskland och USA: ”redovisar inte länkade data”.
Formulering: *”Av personer 45 år och äldre som lades in på sjukhus för hjärtinfarkt dog 6,4 procent inom 30 dagar i Sverige 2023, oavsett var dödsfallet inträffade. OECD-snittet var 8,6 procent. Norge och Island hade lägre dödlighet, Danmark ungefär samma och Finland högre.”*
Om sajten behåller 3,4 %: lägg till *”Siffran räknar bara dödsfall på det sjukhus där patienten lades in. Följer man patienten även efter utskrivning blir siffran 6,4 procent (OECD-snitt 8,6).”*

**3. Ischemisk stroke: dödlighet inom 30 dagar, länkade data.**
Värden 2023: SE 9,5 / NO 7,7 / DK 8,3 / FI 9,9 / IS 13,4, OECD 12,1 (24 länder). Samma form och not som ovan. Notera att Islands tal bygger på få fall.

**4. Undvikbara sjukhusinläggningar för kroniska sjukdomar (diabetes, eventuellt astma+KOL).**
Form: stapel, 7 länder + OECD-snitt. Diabetes: SE 60 / NO 60 / DK 90 / FI 85 / IS 34 / DE 180 / USA 223 (2022), OECD 111. Källa: OECD `DSD_HCQO@DF_PC` (ADMRDBUC), HaaG 2025.
Formulering: *”Sjukhusinläggningar för diabetes som ofta kan undvikas med god uppföljning i primärvården: 60 per 100 000 vuxna i Sverige 2023, mot OECD-snittet 111.”* Not: *”Antalet påverkas också av hur vanlig sjukdomen är och av hur många vårdplatser som finns, så måttet säger inte allt om primärvårdens kvalitet.”*

**5. (Tillgänglighet, valfritt) Ouppfyllda vårdbehov på grund av kostnad, avstånd eller väntelista**, Eurostat `hlth_silc_08`, 2025: SE 2,1 %, NO 1,9 %, DK 2,9 %, FI 7,8 %, DE 1,0 %, EU 2,4 %. Bättre än förtroendemått. Not om att Island och USA saknas och om tidsseriebrott för Tyskland.

### Föreslagen ny ingresstext för fliken ”Utfall vid sjukdom”
*”Hur bra är vården på att rädda liv? Dödligheten i sjukdomar som vården kan behandla, före 75 års ålder, är en tredjedel lägre i Sverige än EU-snittet men ungefär i nivå med Norge och Island. Efter hjärtinfarkt och stroke är dödligheten lägre än OECD-snittet, men något högre än i Norge. Dödlighet påverkas också av levnadsvanor, ålder och inkomster i befolkningen.”*

### Sajten bör INTE påstå
- Att Sverige har ”världens bästa” eller ”Nordens bästa” vård, eller att svensk vård ”rankas som nummer X”. Inget robust underlag finns för det.
- Rangordningar från **Euro Health Consumer Index**, eller från **Mirror Mirror** utan förklaring: där saknas jämlikhetsdomänen för Sverige, bara tre av sajtens länder är med och Sverige är sist i vårdprocess.
- Att lägst **undvikbar** dödlighet visar att **vården** är bäst. Den svenska fördelen ligger främst i den förebyggbara delen.
- Att den olänkade 30-dagarsdödligheten (3,4 %) visar att Sverige är bättre än Danmark eller Finland, utan att nämna länkade data.
- PaRIS-resultat för Sverige: **Sverige deltog inte.**
- Jämförelser av patientsäkerhetsindikatorer eller diabetesamputationer som ”bättre/sämre”. De beror på registrering och nämnare.
- Förtroende och nöjdhet som mått på kvalitet.
- Att blanda OECD:s och Eurostats värden för undvikbar dödlighet i samma diagram.

---

## 4. Största osäkerheter
1. **OECD-snitten** (6,5 / 8,6 / 7,7 / 12,1 / 77 / 145 / 155 / 111) är verifierade via sökutdrag av HaaG 2025, inte direkt på oecd.org, som blockerades. Landsvärdena kommer från OECD:s databas och är säkra.
2. **Hjärtsviktssnittet för OECD** kunde inte verifieras.
3. **Norges** åtgärdbara dödlighet saknas hos OECD (serien slutar 2016) men finns hos Eurostat. Därför bör Eurostat vara huvudkällan.
4. **USA** saknas i Eurostat och i länkade 30-dagarsdata (senaste länkade värde 2014). En helt jämförbar sjulandsbild finns bara för olänkade data och undvikbara inläggningar.
5. **Island:** små tal ger stora svängningar mellan åren.
6. **Diabetesamputation:** HaaG 2025:s nya nämnare (per person med diabetes) kunde inte kontrolleras i primärdata.
7. Socialstyrelsens siffror för 2024 är **preliminära**.

## Källor
- Eurostat, Preventable and treatable mortality (`hlth_cd_apr`): https://ec.europa.eu/eurostat/databrowser/view/hlth_cd_apr/default/table · API: `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/hlth_cd_apr`
- Eurostat, Unmet needs (`hlth_silc_08`): https://ec.europa.eu/eurostat/databrowser/view/hlth_silc_08/default/table
- OECD Health Statistics 2025 via DBnomics: https://db.nomics.world/OECD/DSD_HCQO@DF_AC · https://db.nomics.world/OECD/DSD_HCQO@DF_PC · https://db.nomics.world/OECD/DSD_HCQO@DF_PS · https://db.nomics.world/OECD/DSD_HEALTH_STAT@DF_AM · https://db.nomics.world/OECD/DSD_HEALTH_PROC@DF_WAITING
- OECD, Health at a Glance 2025: kapitlen *Mortality following AMI*, *Mortality following ischaemic stroke*, *Avoidable mortality*, *Avoidable hospital admissions*, *Effective care for chronic conditions* och landsnoter (Sverige, Danmark, Island, Tyskland, USA, Norge): https://www.oecd.org/en/publications/health-at-a-glance-2025_8f9e3f98-en.html (sekundärt verifierat)
- OECD (2025), *Does Healthcare Deliver? Results from the Patient-Reported Indicator Surveys (PaRIS)*: https://www.oecd.org/content/dam/oecd/en/publications/reports/2025/02/does-healthcare-deliver_978507f1/c8af05a5-en.pdf (Box 2.1, deltagande länder)
- Commonwealth Fund, *Mirror, Mirror 2024*, Exhibit 1 och metodavsnittet: https://www.commonwealthfund.org/sites/default/files/2024-09/Blumenthal_mirror_mirror_2024_final_v2.pdf
- Socialstyrelsen, Statistik om hjärtinfarkter 2024 (2025-11-9911) och Statistik om stroke 2024 (2025-11-9883): https://www.socialstyrelsen.se/statistik-och-data/statistik/statistikamnen/hjartinfarkter/ · https://socialstyrelsen.se/statistik-och-data/statistik/alla-statistikamnen/stroke/
- Cylus, Nolte, Figueras, McKee, ”What, if anything, does the EuroHealth Consumer Index actually tell us?”, BMJ blogs 2016: https://blogs.bmj.com/bmj/2016/02/09/what-if-anything-does-the-eurohealth-consumer-index-actually-tell-us/
