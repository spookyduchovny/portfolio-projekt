"use strict";

/**
 * Initialize buttons that should go back in history.
 */
export function initBackButtons(selector = '.folder-close, .folder-close-mobile, #back-btn, #back-btn-mobile') {
  const buttons = document.querySelectorAll(selector);
  if (!buttons || buttons.length === 0) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
  });
}
