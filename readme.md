# DT207G – Laboration 3 – Frontend (Webbplats)
En fristående webbplats med flersidig struktur som konsumerar den separata backend-webbtjänsten för att visa, lägga till och radera arbetserfarenheter via Fetch API.

## Publicerad webbplats
https://dt208g-lab4.netlify.app/

## GitHub-repo
https://github.com/ardalansale/dt207g-lab3-workexperience-client


## Funktionalitet
- Dynamisk hämtning och visning av sparade arbetserfarenheter i tabellform (`Fetch API`).
- Formulär för att lägga till nya erfarenheter med klientvalidering.
- Möjlighet att radera befintliga poster.
- Realtidssökning och filtrering direkt bland erfarenheterna.
- Responsiv och stilren design anpassad med enhetlig CSS-bas och `DM Sans`-typsnitt.

## Komponenter och struktur
- `index.html` – Startsida med tabell, sökfält och raderingsfunktion.
- `add.html` – Formulär för att lägga till nya arbetserfarenheter.
- `about.html` – Om-sida med information om projektets uppbyggnad.
- `app.js` – Gemensam JavaScript-logik för API-anrop, DOM-manipulation och validering.
- `app.css` – Global stilmall med reset och komponentstilar.

## Tekniker
- HTML5
- CSS3 (Global stilmall med `DM Sans` + komponentanpassad CSS)
- JavaScript (ES6+, Fetch API, Asynkrona anrop)

## Körning
1. Säkerställ att backend-servern körs (lokalt på `http://localhost:3000`).
2. Öppna `index.html` i en webbläsare eller via Live Server.