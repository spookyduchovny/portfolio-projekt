"use strict";

export function initBackButtons(selector = '.folder-back,  #back-btn') {
  const buttons = document.querySelectorAll(selector);
  if (!buttons || buttons.length === 0) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
  });
}
