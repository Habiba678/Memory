import { settingsTemplate } from "./settingsTemplate";
import { gameTemplate } from "./gameTemplate";
import { initSettings } from "./setting";
import { initGame } from "./game";

function openGame(): void {
  document.body.innerHTML = gameTemplate();
  initGame(openSettings);
}

function openSettings(): void {
  document.body.innerHTML = settingsTemplate();
  initSettings(openGame);
}

function addPlayButtonListener(): void {
  const playButton =
    document.querySelector<HTMLButtonElement>(".start-button");

  playButton?.addEventListener("click", openSettings);
}

export function initStartGame(): void {
  addPlayButtonListener();
}