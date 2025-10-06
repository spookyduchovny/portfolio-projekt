'use strict';

// HTML-skabelon til "scroll til toppen"-knappen
export const scrollTopButtonTemplate = `
  <button class="scroll-top-btn" aria-label="Til toppen">↑</button>
`;

// Funktion der indsætter scroll-knappen i DOM'en så den ikke skal indsættes manuelt på HTML sider.
export function renderScrollTopButton(parent = document.body) {
  const wrapper = document.createElement("div");       // Opretter en midlertidig wrapper div
  wrapper.innerHTML = scrollTopButtonTemplate.trim();  // Indsætter knap-skabelonen i wrapperen
  parent.appendChild(wrapper.firstElementChild);       // Tilføjer selve knappen til den ønskede parent
}
