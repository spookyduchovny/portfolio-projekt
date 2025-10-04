export function initScrollTopButton(button) {
  if (!button) return;

  // Scroll til toppen ved klik
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Vis/skjul knappen ved scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}