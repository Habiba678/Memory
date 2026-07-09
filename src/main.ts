import "./styles/style.scss";
import "./styles/setting.scss";

import { settingsTemplate } from "./components/settingsTemplate";
import { initSettings } from "./components/setting";

/**
 * Finds the play button on the home screen.
 */
const playButton = document.querySelector(".start-button");

/**
 * Opens the settings screen after clicking the play button.
 */
playButton?.addEventListener("click", () => {
  document.body.innerHTML = settingsTemplate();
  initSettings();
});