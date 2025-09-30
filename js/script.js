"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Menu
  document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.bottom-header').classList.toggle('open');
  });

  // CV tabs
  document.querySelectorAll('.cv-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.cv-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.cv-tab-content').forEach(content => content.style.display = 'none');
      document.getElementById(tab.dataset.tab).style.display = 'block';
    });
  });

  // Backpack element
  const descriptions = {
    chatgpt: "ChatGPT: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ChatGPT bruges til AI-baseret tekstgenerering.",
    davinci: "DaVinci: Lorem ipsum dolor sit amet, consectetur adipiscing elit. DaVinci bruges til avanceret videoredigering.",
    javascript: "JavaScript: Lorem ipsum dolor sit amet, consectetur adipiscing elit. JavaScript bruges til webudvikling.",
    capcut: "CapCut: Lorem ipsum dolor sit amet, consectetur adipiscing elit. CapCut bruges til hurtig og nem videoredigering.",
    "content-writing": "Content Writing: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Content Writing bruges til tekstproduktion.",
    indesign: "InDesign: Lorem ipsum dolor sit amet, consectetur adipiscing elit. InDesign bruges til layout og design af tryksager.",
    illustrator: "Illustrator: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illustrator bruges til vektorgrafik.",
    photoshop: "Photoshop: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Photoshop bruges til billedredigering.",
  };

  const icons = document.querySelectorAll('.backpack-icons .icon');
  const descBox = document.getElementById('backpack-description');

  icons.forEach(icon => {
    icon.addEventListener('click', function () {
      icons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
      const tool = icon.getAttribute('data-tool');
      descBox.textContent = descriptions[tool] || "Vælg et ikon for at se beskrivelse.";
    });
  });

  // Tilbage-knap
  document.querySelectorAll('.folder-close, .folder-close-mobile, #back-btn, #back-btn-mobile')
    .forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
      });
    });
});