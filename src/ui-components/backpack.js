"use strict";

/**
 * Render the backpack structure using template literals, accessible for keyboard and screen readers.
 */
export function renderBackpack(containerSelector = '#backpack', tools = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return null;

  // Lav HTML-strukturen som template string med tabindex og aria-label
  const iconsHTML = Object.entries(tools).map(([key, tool]) => `
    <div class="icon" data-tool="${key}" tabindex="0" role="button" aria-label="${tool.label}" aria-describedby="backpack-description">
      <img src="${tool.img}" alt="${tool.label}">
      <span>${tool.label}</span>
    </div>
  `).join('');

  const template = `
    <div class="backpack-icons">
      ${iconsHTML}
    </div>
    <div class="backpack-divider"></div>
    <div class="backpack-description" id="backpack-description" aria-live="polite">
      Vælg et ikon for at se beskrivelse.
    </div>
  `;

  container.innerHTML = template;

  const iconsWrapper = container.querySelector('.backpack-icons');
  const descBox = container.querySelector('#backpack-description');

  // Returnér references til de vigtige elementer
  return { iconsWrapper, descBox };
}
