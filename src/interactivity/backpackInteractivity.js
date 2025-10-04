"use strict";
export function initBackpackInteractivity(tools, iconsWrapper, descBox) {
  if (!iconsWrapper || !descBox) return;

  const icons = iconsWrapper.querySelectorAll('.icon');

  icons.forEach(icon => {
    icon.addEventListener('click', () => {
      icons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');

      const toolKey = icon.getAttribute('data-tool');
      descBox.textContent = tools[toolKey]?.description || "Vælg et ikon for at se beskrivelse.";
    });
  });
}