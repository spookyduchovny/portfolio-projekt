"use strict";

export function initBackpackInteractivity(tools, iconsWrapper, descBox) {
  if (!iconsWrapper || !descBox) return;

  const icons = iconsWrapper.querySelectorAll('.icon');

  icons.forEach(icon => {
    const toolKey = icon.getAttribute('data-tool');

    const showDescription = () => {
      // Fjern selected fra alle ikoner og marker aktuelt
      icons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');

      // Opdater beskrivelsen
      descBox.textContent = tools[toolKey]?.description || "Vælg et ikon for at se beskrivelse.";
    };

    // Klik
    icon.addEventListener('click', showDescription);

    // Keyboard (Enter / Space)
    icon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showDescription();
      }
    });
  });
}
        