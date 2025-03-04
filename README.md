Oppgave 2: Geografisk IT-utvikling
                 
Gruppe 11

OPTIMALE EVAKUERINGSRUTER VED NATURKATASTROFER

1.INTRODUKSJON
Denne applikasjonen er utviklet for å analysere og visualisere geografiske data relatert til optimale evakueringsruter i tilfelle en naturkatastrofe (jordskjelv, flom, skogbrann). Ved å bruke Supabase, Leaflet og andre teknologier har vi bygget en fullstack-løsning som gir innsikt i geografiske risikoområder og hjelper med å planlegge trygge evakueringsruter.

2.PROBLEMSTILLING
Naturkatastrofer som flom, jordskjelv og skogbrann kan utgjøre en alvorlig trussel mot befolkningen. Derfor er det avgjørende å identifisere:

Hvilke områder er mest utsatt for naturkatastrofer?
Hvor er de nærmeste tilfluktsrommene og nødhavnene?
Hva er den tryggeste og raskeste evakueringsruten?
Løsningen vår kombinerer geospatiale analyser og sanntidsdata for å gi brukerne rask tilgang til kritisk informasjon under en krisesituasjon.

3.DATASETT
Vi har benyttet tre åpne datasett fra GeoNorge:

A) Jord- og Flomskreds Aktsomhet
Viser hvilke områder som har høy risiko for jord- og flomskred.
Viktig for å unngå risikofylte evakueringsruter.
B) Tilfluktsrom
Inneholder informasjon om lokasjoner for offentlige tilfluktsrom.
Brukes for å identifisere sikre oppholdssteder under en katastrofe.
C) Nødhavn
Viser trygge havner for evakuering i kystområder.
Kritisk for evakuering ved flom eller andre naturkatastrofer.
Disse datasettene er behandlet i QGIS og lastet opp til Supabase med PostGIS for videre analyse og visualisering.

4.TEKNOLOGIVALG
4.1 Backend
 Supabase (PostgreSQL/PostGIS) – Lagring og spørring av geografiske data.
 Supabase API – Eksponerer data til frontend.
 Node.js – Håndtering av serverlogikk og API-integrasjoner.

4.2 Frontend
 Leaflet.js – Interaktiv kartvisualisering.
 JavaScript – Dynamisk brukerinteraksjon.
 HTML/CSS – For webgrensesnitt.

4.3 Verktøy brukt i utviklingen
 Visual Studio Code – Hovedutviklingsmiljø.
 QGIS – For analyse og forberedelse av geodata.
 PostGIS – For romlige spørringer i databasen.
 Turf.js – For geospatiale beregninger, inkludert avstandsanalyse og evakueringsruter.

5️.IMPLEMENTASJON
5.1 Kobling til Supabase


5.2 Kartimplementasjon i Leaflet



5.3 Analyse og interaksjon

6️.HVORDAN KJØRE PROSJEKTET?
6.1 Installer avhengigheter
  npm install
6.2 Start lokal utviklingsserver
  npm run dev
6.3 Åpne nettleseren og naviger til
  http://localhost:3000

7.KONKLUSJON
Denne applikasjonen viser hvordan geografiske data kan brukes for å optimalisere evakueringsruter under naturkatastrofer. Ved å kombinere åpne data, geospatiale verktøy og interaktiv visualisering, gir vi et nyttig verktøy for både innbyggere og beredskapsmyndigheter.

            *                                                      *
            Implementering av bilder med forklaring -> steg for steg             
            *                                                      *

