'use strict';

// HTML-skabelon til "skip link"
export const skipLinkTemplate = `
   <a href="#main-content" class="skip-link" tabindex="0">Spring til indhold</a>
`;

// Funktion der indsætter skip-linket i DOM'en
export function renderSkipLink(parent = document.body) {
  const wrapper = document.createElement("div");       // Opretter en midlertidig wrapper div
  wrapper.innerHTML = skipLinkTemplate.trim();         // Indsætter skip-link skabelonen i wrapperen
  parent.prepend(wrapper.firstElementChild);           // Tilføjer linket øverst i dokumentet

  // Sørger for at <main> har et id, så skip-linket virker korrekt
  const mainEl = document.querySelector("main");
  if (mainEl && !mainEl.id) {
    mainEl.id = "main-content"; // Tilføjer id, hvis det ikke allerede findes
  }
}
