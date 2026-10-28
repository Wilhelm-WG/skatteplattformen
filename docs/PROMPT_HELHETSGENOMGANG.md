Gör en systematisk helhetsgenomgång av Skatteplattformen innan vi ändrar något mer.

**Bakgrund.** Sajten (repo ~/Desktop/skatteplattformen, en fil `index.html`, live på https://wilhelm-wg.github.io/skatteplattformen/) har ändrats mycket på kort tid: vyer, nya sektioner, faktakort, ledsiffror, lönetabell, ISK-avsnitt, borttagna och återställda jämförelser. Varje ändring var motiverad för sig, men helheten har inte setts över. Saker har flyttats runt, en del upprepas och en del har hamnat på konstiga ställen. Läs CLAUDE.md, CHANGELOG.md och docs/ först.

**Syftet med plattformen.** Att upplysa Sveriges befolkning, särskilt yngre väljare men också äldre, om hur vårt system fungerar och vad kostnaden är för ett välfärdssamhälle. Sajten är partipolitiskt neutral, och varje siffra ska ha källa och år.

**Arbeta i den här ordningen, och ändra ingenting i koden förrän jag godkänt planen:**

1. **Inventering.** Gå igenom varje vy (Start, Prislistan, Budgeten, Jämförelser, Din ekonomi, Framtid och historik, Metod och källor) och varje sektion, på mobil (390 px) och dator. För varje element: vad det är, vilken fråga det besvarar, vilka siffror det visar och var de kommer ifrån, och om samma uppgift finns någon annanstans. Redovisa som en tabell.

2. **Helheten.** Vilken berättelse ska en besökare få, från första skärmen till slutet? Föreslå en tydlig ordning för vyerna och för sektionerna i varje vy. Pröva varje del mot frågan: behövs den, och ligger den där läsaren väntar sig den? Peka ut dubbletter, sådant som hamnat fel och sådant som saknas.

3. **Varje vy för sig.** Rubrik, ledsiffra, ingress, sektioner, diagram och källrader. Skriv om rubriker och ingresser som är otydliga, värderande eller för långa. Ett exempel som ska ses över: kalkylatorns ingress i Din ekonomi ("Visar befolkningsgenomsnittet … verklig variation är 5–10× större än modellen visar"). Den är svår att förstå, och påståendet om 5–10 gånger saknar källa.

4. **Genomgående.**
   - **Siffror:** samma uppgift ska ha samma värde överallt, och varje siffra ska ha källa och år.
   - **Språk:** neutralt, klarspråk, inga värdeord.
   - **Design:** en kortstil per typ, samma stil för stora tal, samma färglogik i diagrammen.
   - **Tillgänglighet och mobil.**
   - **Länkar mellan vyerna.**

5. **Plan.** En prioriterad lista med ändringar. För varje ändring ska det framgå:
   - vad som ändras,
   - varför,
   - vad som tas bort eller flyttas,
   - risk,
   - insats.

   Gruppera ändringarna i steg som kan göras och granskas ett i taget.

**Regler.**
- Ta inte bort något som har en källa utan att först kontrollera källan. Tidigare har uppgifter tagits bort för att en webbplats blockerade hämtningen, inte för att de var fel. Kontrollera mot primärkällor och redovisa vad du kontrollerat.
- Föreslå inte ändringar bara för sakens skull. Varje förslag ska vara motiverat. Säg också uttryckligen vad som fungerar och ska vara kvar.
- Behåll det som fungerar enligt den oberoende designgranskningen (https://claude.ai/artifact/F1Nq7LJqLKu5jmHFcYvCSe), om du inte har ett tungt skäl att ändra det.
- Kör `node scripts/kontroll.mjs` efter varje ändring.
- Committa och pusha bara när jag säger till.

**Leverans.** Publicera inventeringen och planen som en läsbar sida (artifact) med en sammanfattning överst. Svara sedan kort i chatten med de viktigaste slutsatserna och vad du föreslår som första steg.
