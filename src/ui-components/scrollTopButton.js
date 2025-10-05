"use strict";

export const scrollTopButtonTemplate = `
  <button class="scroll-top-btn" aria-label="Til toppen">↑</button>
`;

export function renderScrollTopButton(parent = document.body) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = scrollTopButtonTemplate.trim();
  parent.appendChild(wrapper.firstElementChild);
}