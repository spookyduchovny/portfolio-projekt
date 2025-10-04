// src/ui-components/tabs.js
"use strict";

/**
 * Initialize CV tab switching.
 */
export function initCvTabs(tabSelector = '.cv-tab', contentSelector = '.cv-tab-content') {
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  if (!tabs || tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      contents.forEach(c => (c.style.display = 'none'));
      const id = tab.dataset.tab;
      if (id) {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
      }
    });
  });

  if (tabs.length > 0) {
    const first = tabs[0];
    first.classList.add('active');
    const firstId = first.dataset.tab;
    if (firstId) {
      const el = document.getElementById(firstId);
      if (el) el.style.display = 'block';
    }
  }
}
