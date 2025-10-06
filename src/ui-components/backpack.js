'use strict';


 //Render backpack-komponenten i DOM'en 
export function renderBackpack(containerSelector = '#backpack', tools = {}) {
  // Find containeren hvor backpacken skal indsættes
  const container = document.querySelector(containerSelector);
  if (!container) return null; // Stop hvis containeren ikke findes

  // Lav HTML for hvert ikon ud fra tools-objektet
  // Tilføjer tabindex, role, aria-label og aria-describedby for tilgængelighed
  const iconsHTML = Object.entries(tools).map(([key, tool]) => `
    <div class="icon" data-tool="${key}" tabindex="0" role="button" aria-label="${tool.label}" aria-describedby="backpack-description">
      <img src="${tool.img}" alt="${tool.label}">
      <span>${tool.label}</span>
    </div>
  `).join('');

  // Saml hele backpack-strukturen
  const template = `
    <div class="backpack-icons">
      ${iconsHTML}
    </div>
    <div class="backpack-divider"></div>
    <div class="backpack-description" id="backpack-description" aria-live="polite">
      Vælg et ikon for at se beskrivelse.
    </div>
  `;

  // Indsæt HTML i containeren
  container.innerHTML = template;

  // Find elementer til interaktivitet
  const iconsWrapper = container.querySelector('.backpack-icons');
  const descBox = container.querySelector('#backpack-description');

  // Returnér referencer, så de kan bruges til interaktivitet
  return { iconsWrapper, descBox };
}
