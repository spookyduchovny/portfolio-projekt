'use strict';
//Styrer rygsækkens interaktivitet
export function initBackpackInteractivity(tools, iconsWrapper, descBox) {
  // Finder alle ikoner
  const icons = iconsWrapper.querySelectorAll('.icon');

  // Gennemgår alle ikoner ét for ét
  icons.forEach(icon => {
    // Finder den rigtige beskrivelse i "tools"-objektet
    const toolKey = icon.getAttribute('data-tool');

    // Funktion der viser beskrivelsen af det valgte ikon
    const showDescription = () => {
      // Fjerner klassen "selected" fra alle ikoner, så kun det aktive ikon markeres
      icons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected'); // Markerer det valgte ikon som aktivt

      // Opdaterer tekstboksen med beskrivelsen af det valgte værktøj
      // Hvis der ikke findes en beskrivelse, vises en standardtekst i stedet
      descBox.textContent = tools[toolKey]?.description || "Vælg et ikon for at se beskrivelse.";
    };

    // Tilføjer en EventListener i form af et klik
    icon.addEventListener('click', showDescription);

    // Gør det også muligt at bruge tastaturet (Enter eller Mellemrum) for tilgængelighed.
    icon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { // Tjekker om brugeren trykker Enter eller Space
        e.preventDefault(); // Stopper standardhandling (så siden ikke scroller)
        showDescription();  // Kører samme funktion som ved klik
      }
    });
  });
}
