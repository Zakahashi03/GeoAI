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
  *  ![lalala](https://github.com/Zakahashi03/GeoAI/blob/main/IMAGES/Skjermbilde%202025-03-04%20kl.%2012.33.44.png)


#### 8.2 Figur (2)
  *


#### 8.3 Figur (3)
  *


#### 8.4 Figur (4)
  *

