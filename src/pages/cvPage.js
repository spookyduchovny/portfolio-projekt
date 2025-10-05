"use strict";

import { tools } from "../data/tools.js";
import { initCvTabs } from "../interactivity/tabsInteractivity.js";
import { renderBackpack } from "../ui-components/backpack.js";
import { initBackpackInteractivity } from "../interactivity/backpackInteractivity.js";
import { initBackButtons } from "../interactivity/navigation.js";

export function initCvPage() {
  // Bind tab interactivity på de eksisterende HTML-tabs
  initCvTabs();

  // Back buttons
  initBackButtons();

  // Backpack
  const { iconsWrapper, descBox } = renderBackpack('#backpack', tools);
  initBackpackInteractivity(tools, iconsWrapper, descBox);
}
