"use strict";

import { tools } from "../data/tools.js";
import { renderBackpack } from "../ui-components/backpack.js";
import { initBackpackInteractivity } from "../interactivity/backpackInteractivity.js";
import { initCvTabs } from "../ui-components/tabs.js";
import { initBackButtons } from "../interactivity/navigation.js";

export function initHomePage() {
  initCvTabs();
  initBackButtons();

  const { iconsWrapper, descBox } = renderBackpack('#backpack', tools);
  initBackpackInteractivity(tools, iconsWrapper, descBox);
}