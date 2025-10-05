export function initScrollTopButton(btn) {
  if (!btn) return;

  // Scroll til toppen ved klik
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll event: vis knap kun hvis man scroller
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {  // ved 200px
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
    // Sørg for, at den starter skjult på desktop
  if (window.innerWidth > 900) {
    btn.style.display = "none";
  }
}