"use strict";

import { renderSkipLink } from "./ui-components/skipLink.js";
import { renderScrollTopButton } from "./ui-components/scrollTopButton.js";
import { initScrollTopButton } from "./interactivity/scrollTopInteractivity.js";
import { initPortfolioPage } from "./pages/portfolioPage.js";
import { initCvPage } from "./pages/cvPage.js";
import { Header } from "./models/Header.js";

// Vent til DOM'en er fuldt indlæst
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM klar - main.js kører"); //bruges til fejlsøgning

  // Opret og render headeren
  const header = new Header();
  header.render();
  console.log("Header renderet"); //bruges til fejlsøgning

  // Render skip-link øverst i dokumentet
  renderSkipLink(document.body);
  console.log("Skip-link renderet"); //bruges til fejlsøgning

  // Render scroll-top-knappen og initialiser interaktivitet
  renderScrollTopButton(document.body);
  const scrollBtn = document.querySelector('.scroll-top-btn'); // Find knappen i DOM
  initScrollTopButton(scrollBtn);                              // Tilføj klik og scroll-event
  console.log("ScrollTopButton initialiseret"); //bruges til fejlsøgning

  // Tjek body id for at finde ud af hvilken side vi er på
  const bodyId = document.body.id;
  console.log("Body id:", bodyId); //bruges til fejlsøgning

  // Initialiser side-specifik funktionalitet
  if (bodyId === "portfolio") {
    console.log("Initialiserer portfolioPage"); //bruges til fejlsøgning
    initPortfolioPage();
  } else if (bodyId === "cv") {
    console.log("Initialiserer cvPage"); //bruges til fejlsøgning
    initCvPage();
  } else {
    console.log("Ingen side-specifik initialisering for denne side"); //bruges til fejlsøgning
  }

  console.log("main.js færdig"); //bruges til fejlsøgning
});
