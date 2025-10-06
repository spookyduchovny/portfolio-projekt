'use strict';

import { tools } from "../data/tools.js"; // Importerer data om værktøjer til backpack
import { initCvTabs } from "../interactivity/tabsInteractivity.js"; // Importerer funktion til CV faner
import { renderBackpack } from "../ui-components/backpack.js"; // Importerer funktion der laver backpack UI
import { initBackpackInteractivity } from "../interactivity/backpackInteractivity.js"; // Importerer interaktivitet til backpack

export function initCvPage() {
  // Aktiver faner på CV-siden
  initCvTabs();

  // Render backpack-komponent på siden
  const { iconsWrapper, descBox } = renderBackpack('#backpack', tools);

  // Tilføj interaktiv funktionalitet til backpacken
  initBackpackInteractivity(tools, iconsWrapper, descBox);
}
