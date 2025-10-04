"use strict";

export const scrollTopButtonTemplate = `
  <button class="scroll-top-btn" aria-label="Rul til toppen">↑</button>
`;

export function renderScrollTopButton(parent = document.body) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = scrollTopButtonTemplate.trim();
  const button = wrapper.firstElementChild;
  parent.append(button);
}