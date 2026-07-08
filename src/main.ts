import "./styles/style.scss";
import "./styles/setting.scss";

import { settingsTemplate } from "./components/settingsTemplate";

/**
 * Finds the play button on the home screen.
 * When the user clicks the button, the settings screen is rendered.
 */
const playButton = document.querySelector(".start-button");

/**
 * Replaces the current page content with the settings screen.
 */
playButton?.addEventListener("click", () => {
  document.body.innerHTML = settingsTemplate();
});