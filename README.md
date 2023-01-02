# DT193G Fullstack-utveckling med ramverk 
## Moment 3 - Frontend-ramverk-christinejohanson

Repository som är integrerat med Moment 2 - Restwebbtjänst med Laravel där API publicerades via Heroku. 

### Länk

Länk till API finns URL: https://chjo2104moment2heroku.herokuapp.com/api/snowboard

### Syfte

Syfte med uppgiften är att utvärdera och använda JavaScript-ramverket Vue.js för webbutveckling, konsumera webbtjänsten som skapades i tidigare moment, 
skapa ett gränssnitt för att läsa ut, radera samt lägga till data (Create, Read, Delete) samt publicera till en webbhost som inte är FTP-baserad.  

### Information

Vue-projekt skapat med CLI där npm använts för att installera nödvändiga paket för projektet. Detta paket är baserad på byggsystemet Vite som är väldigt
snabbt och hjälper till att packa ihop källkodsfilerna samt genererar nya filer som används för publicering.

CSS-ramverket Bootstrap används för CSS-styling.  

### Views
Webbplatsen är skapad med s.k. SPA (single page application) med Vues routing-system för navigering och handlar om mitt största fritidsintresse snowboard.

HomeView - startsidan

InfoView - undersidan med information om Vue

SnowboardlistView - undersidan med lista på befintliga snowboards samt formulär för att lägga till fler. 

### Components
Med hjälp av Vue-komponenter skapas en bra struktur för webbplatsen som importeras på de olika sidorna där de används, sk. Single File Components. 
De är uppbyggda av en <template>, en <script> och en <style>. Komponenterna stylas med sk. komponent-specifik CSS. Options API används i detta projekt för skriva komponenterna.

Addsnow - komponent med post-anrop till APIet för att lägga till fler snowboards.

Banner - bannerbild på startsidan.

Footer - footer med lite information.

Header - navigering för webbplatsen.

Snow - skriver ut alla snowboard i listan.
 
Webbplatsen är publicerad på Netlify: 

## https://chjo2104snowboardlist.netlify.app/




