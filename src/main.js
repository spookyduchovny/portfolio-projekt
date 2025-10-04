// src/main.js
"use strict";

import { renderSkipLink } from "./ui-components/skipLink.js";
import { initHomePage } from "./pages/homePage.js";
import { Header } from "./models/Header.js";
import { renderScrollTopButton } from "./ui-components/scrollTopButton.js";
import { initScrollTopButton } from "./interactivity/scrollTopInteractivity.js";

document.addEventListener('DOMContentLoaded', () => {

  // 1) render skip-link tidligt (så keyboard-brugere kan hoppe direkte til indhold)
  renderSkipLink(document.body);

  // 2) header
  const header = new Header();
  header.render();

  // 3) scroll-to-top: render og init
  renderScrollTopButton(document.body);
  const scrollBtn = document.querySelector('.scroll-top-btn');
  initScrollTopButton(scrollBtn);

  // 4) init restante side-specifikke greb
  initHomePage();
});