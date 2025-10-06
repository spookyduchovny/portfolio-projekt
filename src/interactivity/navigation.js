'use strict';

export function initBackButtons(selector = '.folder-back,  #back-btn') {
  // Finder alle knapper, der skal fungere som "tilbage"-knapper
  const buttons = document.querySelectorAll(selector);

  // Stop funktionen, hvis der ikke findes nogen knapper (ikke nødvendigt da jeg kun referer til portfolio pages, men i tilfælde af jeg vil have den på andre sider i fremtiden)
  if (!buttons || buttons.length === 0) return;

  // Gennemgår alle fundne knapper
  buttons.forEach(btn => {
    // Når brugeren klikker på en "tilbage"-knap:
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Forhindrer standardhandling (så fx et link ikke følger sin href)
      history.back();     // Sender brugeren tilbage til den forrige side i browserens historik
    });
  });
}
