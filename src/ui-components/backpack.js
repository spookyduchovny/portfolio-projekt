"use strict";

/**
 * Render the backpack structure into a container.
 */
export function renderBackpack(containerSelector = '#backpack', tools = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return null;

  const iconsWrapper = document.createElement('div');
  iconsWrapper.classList.add('backpack-icons');

  Object.entries(tools).forEach(([key, tool]) => {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');
    iconDiv.setAttribute('data-tool', key);

    const img = document.createElement('img');
    img.src = tool.img;
    img.alt = tool.label;

    const span = document.createElement('span');
    span.textContent = tool.label;

    iconDiv.appendChild(img);
    iconDiv.appendChild(span);
    iconsWrapper.appendChild(iconDiv);
  });

  const divider = document.createElement('div');
  divider.classList.add('backpack-divider');

  const descBox = document.createElement('div');
  descBox.classList.add('backpack-description');
  descBox.id = 'backpack-description';
  descBox.textContent = 'Vælg et ikon for at se beskrivelse.';

  container.innerHTML = '';
  container.appendChild(iconsWrapper);
  container.appendChild(divider);
  container.appendChild(descBox);

  return { iconsWrapper, descBox };
}