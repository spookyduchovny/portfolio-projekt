import { headerTemplate } from "../ui-components/headerTemplate.js";
import { initMenuToggle } from "../interactivity/menuToggle.js";

export class Header {
  constructor() {
    this.element = this.create();
  }

  create() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = headerTemplate.trim();
    return wrapper;
  }

render(parent = document.body) {
  parent.prepend(this.element);
  initMenuToggle(this.element);
}
}