# Oppgave 2: Geografisk IT-utvikling

## Gruppe 11

# Optimale evakueringsruter ved naturkatastrofer

## 1. INTRODUKSJON
Denne applikasjonen er utviklet for å analysere og visualisere geografiske data relatert til optimale evakueringsruter i Agder i tilfelle en naturkatastrofe (jordskjelv, flom, skogbrann). Ved å bruke Supabase, Leaflet og andre teknologier, har vi bygget en fullstack-løsning som gir innsikt i geografiske risikoområder i Agder og hjelper med å planlegge trygge evakueringsruter for innbyggerne i regionen.

## 2. PROBLEMSTILLING
Naturkatastrofer som flom, jordskjelv og skogbrann kan utgjøre en alvorlig trussel mot befolkningen i Agder. Derfor er det avgjørende å identifisere:

- Hvilke områder er mest utsatt for naturkatastrofer?
- Hvor er de nærmeste tilfluktsrommene og nødhavnene?
- Hva er den tryggeste og raskeste evakueringsruten?

Løsningen vår kombinerer geospatiale analyser og sanntidsdata for å gi brukerne rask tilgang til kritisk informasjon under en krisesituasjon.

## 3. DATASETT
Vi har benyttet tre åpne datasett fra GeoNorge:

### 3.1 Jord- og Flomskreds Aktsomhet
- Viser hvilke områder som har høy risiko for jord- og flomskred.
- Viktig for å unngå risikofylte evakueringsruter.

### 3.2 Tilfluktsrom
- Inneholder informasjon om lokasjoner for offentlige tilfluktsrom.
- Brukes for å identifisere sikre oppholdssteder under en katastrofe.

### 3.3 Nødhavn
- Viser trygge havner for evakuering i kystområder.
- Kritisk for evakuering ved flom eller andre naturkatastrofer.

Disse datasettene er behandlet i QGIS og lastet opp til Supabase med PostGIS for videre analyse og visualisering.

## 4. TEKNOLOGIVALG

### 4.1 Backend
- **Supabase (PostgreSQL/PostGIS)** – Lagring og spørring av geografiske data.
- **Supabase API** – Eksponerer data til frontend.
- **Node.js** – Håndtering av serverlogikk og API-integrasjoner.

### 4.2 Frontend
- **Leaflet.js** – Interaktiv kartvisualisering.
- **JavaScript** – Dynamisk brukerinteraksjon.
- **HTML/CSS** – For webgrensesnitt.

### 4.3 Verktøy brukt i utviklingen
- **Visual Studio Code** – Hovedutviklingsmiljø.
- **QGIS** – For analyse og forberedelse av geodata.
- **PostGIS** – For romlige spørringer i databasen.
- **Turf.js** – For geospatiale beregninger, inkludert avstandsanalyse og evakueringsruter.

## 5. IMPLEMENTASJON

### 5.1 Kobling til Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a3F1d2dxeW90dW1lcGJ3dWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNzQ5MTgsImV4cCI6MjA1NDk1MDkxOH0.yGAsmLmdOvSDZERufGPtRmYl4ExYJcWhVIskOaxsFTk';
const supabase = createClient(supabaseUrl, supabaseKey);


### 5.2 Analyse og interaksjon
Geospatiale analyser utføres ved hjelp av Turf.js og PostGIS for å finne optimale evakueringsruter basert på sanntidsdata. Ved å kombinere topografiske forhold, risikoområder og nærmeste sikre lokasjoner, kan vi gi mer presise anbefalinger for beredskap og evakuering.



## 6. Hvordan kjøre prosjektet?

### 6.1 Installer avhengigheter
npm install
### 6.2 Start lokal utviklingsserver
npm run dev

### 6.3 Åpne nettleseren og naviger til
http://127.0.0.1:5500/public/Index.html

## 7. KONKLUSJON
Denne applikasjonen viser hvordan geografiske data kan brukes for å optimalisere evakueringsruter under naturkatastrofer. Ved å kombinere åpne data, geospatiale verktøy og interaktiv visualisering, gir vi et nyttig verktøy for både innbyggere og beredskapsmyndigheter.



## 8. Bilder med forklaring -->

                *                                       *
                    Liste med figurer av kart-oppgaver 
                *                                       *

#### 8.1 Figur (1)
![Figur1](https://github.com/Zakahashi03/GeoAI/blob/main/IMAGES/Skjermbilde%202025-03-04%20kl.%2012.33.44.png)

* Kartet over Kristiansand viser at det er en betydelig dominans av tilfluktsrom (oransje) sammenlignet med nødhavner (røde). Totalt finnes det fem nødhavner i området, mens antallet tilfluktsrom er mer enn fire ganger høyere. Dette indikerer en god beredskap for å gi innbyggerne trygge steder under kriser. Videre viser kartet at Kristiansand kommune generelt har lav risiko for jord- og flomskred, imidlertid er enkelte områder, hovedsakelig nær sentrum, mer utsatt for flom. Disse observasjonene viser viktigheten av å være oppmerksom på potensielle risikoer i ulike deler av kommunen for å sikre et godt tilpasset beredskapsplan i fremtiden. 

#### 8.2 Figur (2)
![Figur2](https://github.com/Zakahashi03/GeoAI/blob/main/IMAGES/Skjermbilde%202025-03-04%20kl.%2012.33.00.png)

* Vi har valgt tre datasett som gir en helhetlig forståelse av beredskapsstrukturen i Agder. På dette bildet kan vi se jord- og flomaktsoner (svart), nødhavner (rødt) og tilfluktsrom (oransje). Disse elementene er viktige for å vurdere hvordan kommunene i Agder er rustet til å håndtere krisesituasjoner. I analysen vil vi undersøke hvordan disse områdene er fordelt, med fokus på tilgjengeligheten av nødhavner og tilfluktsrom. Vi vil også vurdere hvor stor  flom- og jordskredrisiko hver av kommunene som blir analysert har. Vi vil også gjennom denne analysen identifisere styrker og svakheter i den eksisterende beredskapsstrukturen i de forskjellige kommunene. 

#### 8.3 Figur (3)
![Figur3](https://github.com/Zakahashi03/GeoAI/blob/main/IMAGES/Skjermbilde%202025-03-04%20kl.%2012.33.17.png)

* På dette bildet ser vi kommunen Flekkefjord. Sør for Flekkefjord er det nesten like mange nødhavner som tilfluktsrom, noe som indikerer en god balanse mellom tilgjengelige trygge steder. Videre kan vi observere at Flekkefjord ikke har en høy risiko for jord- og flomskred, noe som bidrar til et tryggere miljø for innbyggerne.

#### 8.4 Figur (4)
![Figur4](https://github.com/Zakahashi03/GeoAI/blob/main/IMAGES/Skjermbilde%202025-03-04%20kl.%2012.33.32.png)

* På bildet ovenfor kan vi se tre ulike kommuner: Farsund, Lyngdal og Mandal. I disse kommunene har nødhavnene en klar dominans. Både i Farsund og Lyngdal finnes det bare ett tilfluktsrom i hver kommune, mens Mandal har flere tilfluktsrom tilgjengelig. Det er imidlertid viktig å merke seg at nord for Farsund og nordvest for Lyngdal er områdene ganske utsatt for jord- og flomskred
 

## 9. Refleksjon

### Hvordan vi løste problemstillingen
* Vår problemstilling er hvordan vi kan finne ut av optimale evakueringsruter i tilfelle en naturkatastrofe som (jordskjelv, flom, skogbrann) skjer. For å sikre en trygg og effektiv evakuering i tilfelle en naturkatastrofe, er det viktig å benytte hovedveiene som primære fluktveier. Hovedveiene er ofte bedre vedlikeholdt, har høyere kapasitet og er mindre utsatt for ras sammenlignet med mindre veier og stier. 
* I områder med høy risiko for jord- og flomskred bør alternative ruter være kartlagt på forhånd, slik at innbyggerne har flere valgmuligheter dersom en vei blir sperret. I tillegg bør nødhavner og tilfluktsrom være lett tilgjengelige og godt skiltet, slik at evakuerte raskt kan finne trygghet. Kommunene bør også sørge for at kritisk infrastruktur, som broer og tunneler er i god stand for å forhindre flaskehalser under evakuering. Videre kan teknologi som GPS-baserte evakueringsruter og sanntidsoppdateringer om veiforhold bidra til mer effektive fluktruter. En koordinert beredskapsplan mellom kommuner og nødetater vil også sikre en raskere og mer strukturert respons i en krisesituasjon.

