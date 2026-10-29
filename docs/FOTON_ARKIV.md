# Arkiverade foton (borttagna 2026-10-29)

Sajten använde mellan 28 och 29 oktober 2026 sex foton från Wikimedia Commons i vyhuvudena och i "Sex vägar in". De ersattes av tecknade scener i papperssnitt (symbolerna `vh-…`) när bildspråket gjordes enhetligt, och filerna togs bort ur repot.

## Var de låg

- Mapp: `img/foton/`
- Filer per vy (`budgeten`, `din-ekonomi`, `framtid`, `jamforelser`, `metod`, `prislistan`), i tre storlekar:
  - `<vy>.jpg`, 1 200 px bred, användes i vyhuvudet
  - `<vy>-800.jpg`, 800 px bred, för mobil
  - `<vy>-560.jpg`, 560 px bred, för korten i Sex vägar in och bildkrediterna
- `img/foton/KREDITER.md`, med fotografer och licenser (återgiven nedan)

## Återställa

Filerna finns kvar i git-historiken. Sista commit där de fanns: `5ee64d4`.

```
git checkout 5ee64d4 -- img/foton
```

Koden som visade dem (`VY_FOTON`, `FOTO_VER`, `.vy-foto img`, `.foto-info` och listan i `#bildkrediter`) togs bort i commit `dd5b236`. Den finns i `dd5b236^:index.html`.

## Data i koden (`VY_FOTON`, före `dd5b236`)

```js
const VY_FOTON = {
  'prislistan': {alt:"Gul-grön ambulans kör på en gata i Göteborg", av:"Marcusroos", lic:'CC BY-SA 3.0', licUrl:'https://creativecommons.org/licenses/by-sa/3.0/deed.sv', kalla:"https://commons.wikimedia.org/wiki/File:Ambulance_in_Gothenburg.jpg", pos:'center 55%'},
  'budgeten': {alt:"Riksdagshuset på Helgeandsholmen i sommarsol, sett över Norrström", av:"ArildV", lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.sv', kalla:"https://commons.wikimedia.org/wiki/File:Sveriges_riksdag_July_2025_01.jpg", pos:'45% 60%'},
  'jamforelser': {alt:"Öresundsbron mellan Sverige och Danmark, sedd från luften över ett blått Öresund", av:"Nick-D", lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.sv', kalla:"https://commons.wikimedia.org/wiki/File:%C3%98resund_Bridge_from_the_air_in_September_2015.jpg", pos:'center 55%'},
  'din-ekonomi': {alt:"Bostadshus vid en kanal i Västra hamnen i Malmö, med Turning Torso i bakgrunden", av:"ArildV", lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.sv', kalla:"https://commons.wikimedia.org/wiki/File:V%C3%A4stra_Hamnen_2026_01.jpg", pos:'center 40%'},
  'framtid': {alt:"Ljus perrong med plattformsdörrar på Citybanans station Stockholm City", av:"Arild Vågen", lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.sv', kalla:"https://commons.wikimedia.org/wiki/File:Stockholm_city_station_July_2017_01.jpg", pos:'center 50%'},
  'metod': {alt:"Den ljusa rotundan i Stockholms stadsbibliotek med böcker längs de runda väggarna", av:"Arild Vågen", lic:'CC BY-SA 4.0', licUrl:'https://creativecommons.org/licenses/by-sa/4.0/deed.sv', kalla:"https://commons.wikimedia.org/wiki/File:Stockholm_Public_Library_January_2015_03.jpg", pos:'center 45%'},
};
```

## Krediter (`img/foton/KREDITER.md`)

Alla foton kommer från Wikimedia Commons och används enligt sina licenser. Varje fil finns i två storlekar: 1 200 px bred (`namn.jpg`) och 800 px bred för mobil (`namn-800.jpg`). Filerna är bara nedskalade och omkomprimerade. På sajten visas fotografens namn och licens i bildens hörn, med länk till filsidan.

| Fil | Motiv | Fotograf | Licens | Källa |
|-----|-------|----------|--------|-------|
| prislistan.jpg | Gul-grön ambulans kör på en gata i Göteborg | Marcusroos | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.sv) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ambulance_in_Gothenburg.jpg) |
| budgeten.jpg | Riksdagshuset på Helgeandsholmen i sommarsol, sett över Norrström | ArildV | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.sv) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sveriges_riksdag_July_2025_01.jpg) |
| jamforelser.jpg | Öresundsbron mellan Sverige och Danmark, sedd från luften över ett blått Öresund | Nick-D | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.sv) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%C3%98resund_Bridge_from_the_air_in_September_2015.jpg) |
| din-ekonomi.jpg | Bostadshus vid en kanal i Västra hamnen i Malmö, med Turning Torso i bakgrunden | ArildV | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.sv) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:V%C3%A4stra_Hamnen_2026_01.jpg) |
| framtid.jpg | Ljus perrong med plattformsdörrar på Citybanans station Stockholm City | Arild Vågen | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.sv) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stockholm_city_station_July_2017_01.jpg) |
| metod.jpg | Den ljusa rotundan i Stockholms stadsbibliotek med böcker längs de runda väggarna | Arild Vågen | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.sv) | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stockholm_Public_Library_January_2015_03.jpg) |
