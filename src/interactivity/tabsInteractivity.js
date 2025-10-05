"use strict";

export function initCvTabs() {
  const tabs = document.querySelectorAll(".cv-tab");
  const contents = document.querySelectorAll(".cv-tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Fjern active fra alle tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Skjul alle tab contents
      contents.forEach(c => (c.style.display = "none"));

      // Vis den korrekte content
      const targetId = tab.dataset.tab;
      const targetEl = document.getElementById(targetId);
      if (targetEl) targetEl.style.display = "block";
    });
  });

  // Vis første tab som default
  const firstTab = tabs[0];
  if (firstTab) {
    firstTab.classList.add("active");
    const firstId = firstTab.dataset.tab;
    const firstContent = document.getElementById(firstId);
    if (firstContent) firstContent.style.display = "block";
  }
}
