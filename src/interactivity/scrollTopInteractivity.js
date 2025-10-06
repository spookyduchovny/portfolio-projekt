export function initScrollTopButton(btn) {
  // Stop funktionen, hvis knappen ikke findes. Som f.eks. i desktop udgaven.
  if (!btn) return;

  // Når brugeren klikker på knappen, scrolles der blødt op til toppen af siden
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Når brugeren scroller på siden:
  window.addEventListener("scroll", () => {
    // Hvis man har scrollet mere end 200px ned, vis knappen
    if (window.scrollY > 200) {
      btn.classList.add("show"); // Gør knappen synlig
    } else {
      btn.classList.remove("show"); // Skjul knappen igen
    }
  });

  // Sørger for, at knappen er skjult fra start, hvis skærmen er bredere end 900px (desktop)
  if (window.innerWidth > 900) {
    btn.style.display = "none";
  }
}