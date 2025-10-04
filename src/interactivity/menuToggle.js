"use strict";

export function initMenuToggle(root = document) {
  const btn = root.querySelector('.menu-btn');
  const target = root.querySelector('.bottom-header');

  if (!btn || !target) return;

  btn.addEventListener('click', () => {
    target.classList.toggle('open');
  });
}
  /* brugt til at fejlsøge.
  
  console.trace('initMenuToggle called');

  btn.addEventListener('click', () => {
    console.log('menu button clicked');
    target.classList.toggle('open');
    */

