import { headerTemplate } from "../ui-components/headerTemplate.js"; // Importerer HTML-skabelonen til headeren
import { initMenuToggle } from "../interactivity/menuToggle.js";     // Importerer funktionen der styrer menuens åben/luk-funktion

export class Header {
  constructor() {
    // Elementet laves når en ny header er oprettet
    this.element = this.create();
  }

  // Funktion der opretter headerens HTML-indhold
  create() {
    const wrapper = document.createElement("div"); // Opretter et tomt <div>-element
    wrapper.innerHTML = headerTemplate.trim();     // Indsætter skabelonens HTML i div'en
    return wrapper;                                // Returnerer det færdige element
  }

  // Funktion der viser headeren på siden
  render(parent = document.body) {
    parent.prepend(this.element);  // Tilføjer headeren øverst i dokumentet
    initMenuToggle(this.element);  // Aktiverer menuens interaktivitet i headeren
  }
}
