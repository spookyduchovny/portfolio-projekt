"use strict";

import { renderSkipLink } from "./ui-components/skipLink.js";
import { renderScrollTopButton } from "./ui-components/scrollTopButton.js";
import { initScrollTopButton } from "./interactivity/scrollTopInteractivity.js";
import { initPortfolioPage } from "./pages/portfolioPage.js";
import { initCvPage } from "./pages/cvPage.js";
import { Header } from "./models/Header.js";

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM klar - main.js kører");

  const header = new Header();
  header.render();
  console.log("Header renderet");

  renderSkipLink(document.body);
  console.log("Skip-link renderet");

  renderScrollTopButton(document.body);
  const scrollBtn = document.querySelector('.scroll-top-btn');
  initScrollTopButton(scrollBtn);
  console.log("ScrollTopButton initialiseret");

  const bodyId = document.body.id;
  console.log("Body id:", bodyId);

  if (bodyId === "portfolio") {
    console.log("Initialiserer portfolioPage");
    initPortfolioPage();
  } else if (bodyId === "cv") {
    console.log("Initialiserer cvPage");
    initCvPage();
  } else {
    console.log("Ingen side-specifik initialisering for denne side");
  }

  console.log("main.js færdig");
});
