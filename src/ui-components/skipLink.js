"use strict";

export const skipLinkTemplate = `
   <a href="#main-content" class="skip-link" tabindex="0">Spring til indhold</a>
`;

export function renderSkipLink(parent = document.body) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = skipLinkTemplate.trim();
  parent.prepend(wrapper.firstElementChild);

    const mainEl = document.querySelector("main");
  if (mainEl && !mainEl.id) {
    mainEl.id = "main-content";
  }
}