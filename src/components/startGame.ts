import { settingsTemplate } from "./settingsTemplate";
import { gameTemplate } from "./gameTemplate";
import { initSettings } from "./setting";
import { initGame } from "./game";

/**
 * Opens the game screen and initializes the memory game.
 */
function openGame(): void {
  document.body.innerHTML = gameTemplate();

  initGame(
    openSettings,
    openGame,
  );
}

/**
 * Opens the settings screen and initializes the settings controls.
 */
function openSettings(): void {
  document.body.innerHTML = settingsTemplate();
  initSettings(openGame);
}

/**
 * Adds the click event listener to the main play button.
 */
function addPlayButtonListener(): void {
  const playButton =
    document.querySelector<HTMLButtonElement>(
      ".start-button",
    );

  playButton?.addEventListener(
    "click",
    openSettings,
  );
}

/**
 * Initializes the start screen navigation.
 */
export function initStartGame(): void {
  addPlayButtonListener();
}