"use strict";

// Funktion der styrer menuens åben/luk-tilstand
export function initMenuToggle(root = document) {
  // Finder menu-knappen i dokumentet
  const btn = root.querySelector('.menu-btn');

  // Finder det område i headeren der skal åbnes/lukkes
  const target = root.querySelector('.bottom-header');

  // Stop funktionen, hvis knappen eller menuområdet ikke findes f.eks. i tabletformat
  if (!btn || !target) return;

  // Når brugeren klikker på menu-knappen:
  btn.addEventListener('click', () => {
    // Skifter mellem at tilføje og fjerne klassen "open"
    target.classList.toggle('open');
  });
}
  /* brugt til at fejlsøge.
  
  console.trace('initMenuToggle called');

  btn.addEventListener('click', () => {
    console.log('menu button clicked');
    target.classList.toggle('open');
    */

