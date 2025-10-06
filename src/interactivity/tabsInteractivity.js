'use strict';

export function initCvTabs() {
  // Finder alle tabs og indholdsområderne der hører til
  const tabs = document.querySelectorAll(".cv-tab");
  const contents = document.querySelectorAll(".cv-tab-content");

  // Gennemgår hver fane og tilføjer klikfunktion
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Fjern "active" fra alle faner, så kun den valgte vises som aktiv
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active"); // Markér den valgte fane

      // Skjul alt faneblad-indhold
      contents.forEach(c => (c.style.display = "none"));

      // Find den tilhørende indholdsboks ud fra data-tab attributten
      const targetId = tab.dataset.tab;
      const targetEl = document.getElementById(targetId);

      // Vis den korrekte indholdsboks, hvis den findes
      if (targetEl) targetEl.style.display = "block";
    });
  });

  // Gør den første fane aktiv som standard, når siden indlæses
  const firstTab = tabs[0];
  if (firstTab) {
    firstTab.classList.add("active"); // Marker første fane
    const firstId = firstTab.dataset.tab; // Hent ID for det første indhold
    const firstContent = document.getElementById(firstId);
    if (firstContent) firstContent.style.display = "block"; // Vis første indhold
  }
}
