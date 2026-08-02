import {
  playerImages,
  renderCards,
} from "./gameBoard";

import { initCards } from "./gameLogic";

import type {
  BoardSize,
  Player,
  Theme,
} from "./gameBoard";

/**
 * Gets the selected game theme from local storage.
 */
const exitImages: Record<Theme, string> = {
  code: "/src/assets/themes/theme1/cards/move_item.svg",
  gaming: "/src/assets/themes/theme1/cards/move_item.svg",
  da: "/src/assets/themes/Theme3/card/back-icon-2.svg",
};

/**
 * Updates the player images for the selected theme.
 *
 * @param theme The currently selected theme.
 */
function updatePlayerImages(
  theme: Theme,
): void {
  const bluePlayerIcon =
    document.querySelector<HTMLImageElement>(
      "#blue-player-icon",
    );

  const orangePlayerIcon =
    document.querySelector<HTMLImageElement>(
      "#orange-player-icon",
    );

  if (bluePlayerIcon) {
    bluePlayerIcon.src =
      playerImages[theme].blue;
  }

  if (orangePlayerIcon) {
    orangePlayerIcon.src =
      playerImages[theme].orange;
  }
}

/**
 * Updates the exit icon for the selected theme.
 *
 * @param theme The currently selected theme.
 */
function updateExitImage(
  theme: Theme,
): void {
  const exitGameIcon =
    document.querySelector<HTMLImageElement>(
      "#exit-game-icon",
    );

  if (exitGameIcon) {
    exitGameIcon.src =
      exitImages[theme];
  }
}

/**
 * Updates the exit-dialog button labels.
 *
 * @param theme The currently selected theme.
 */
function updateExitButtonLabels(
  theme: Theme,
): void {
  const continueButton =
    document.querySelector<HTMLButtonElement>(
      "#continue-game-button",
    );

  const confirmExitButton =
    document.querySelector<HTMLButtonElement>(
      "#confirm-exit-button",
    );

  if (!continueButton || !confirmExitButton) {
    return;
  }

  const isGaming = theme === "gaming";

  continueButton.textContent = isGaming
    ? "No, back to game"
    : "Back to game";

  confirmExitButton.textContent = isGaming
    ? "Yes, quit game"
    : "Exit game";
}

/**
 * Applies the selected theme to the game.
 *
 * @param theme The currently selected theme.
 */
function applyTheme(
  theme: Theme,
): void {
  const memoryGame =
    document.querySelector<HTMLElement>(
      "#memory-game",
    );

  memoryGame?.classList.remove(
    "memory-game--code",
    "memory-game--gaming",
    "memory-game--da",
  );

  memoryGame?.classList.add(
    `memory-game--${theme}`,
  );

  updatePlayerImages(theme);
  updateExitImage(theme);
  updateExitButtonLabels(theme);
}

/**
 * Opens the exit confirmation dialog.
 *
 * @param exitButton The exit button.
 * @param exitDialog The exit dialog.
 */
function openExitDialog(
  exitButton: HTMLButtonElement,
  exitDialog: HTMLDialogElement | null,
): void {
  exitButton.classList.add("active");
  exitDialog?.showModal();
}

/**
 * Closes the exit confirmation dialog.
 *
 * @param exitButton The exit button.
 * @param exitDialog The exit dialog.
 */
function closeExitDialog(
  exitButton: HTMLButtonElement | null,
  exitDialog: HTMLDialogElement | null,
): void {
  exitDialog?.close();
  exitButton?.classList.remove("active");
}

/**
 * Initializes the exit confirmation dialog.
 *
 * @param onExit Runs after confirming the game exit.
 */
function initExitDialog(
  onExit: () => void,
): void {
  const exitButton =
    document.querySelector<HTMLButtonElement>(
      "#exit-game-button",
    );

  const continueButton =
    document.querySelector<HTMLButtonElement>(
      "#continue-game-button",
    );

  const confirmExitButton =
    document.querySelector<HTMLButtonElement>(
      "#confirm-exit-button",
    );

  const exitDialog =
    document.querySelector<HTMLDialogElement>(
      "#exit-dialog",
    );

  exitButton?.addEventListener("click", () => {
    openExitDialog(exitButton, exitDialog);
  });

  continueButton?.addEventListener("click", () => {
    closeExitDialog(exitButton, exitDialog);
  });

  confirmExitButton?.addEventListener("click", () => {
    closeExitDialog(exitButton, exitDialog);
    onExit();
  });
}

/**
 * Returns the theme stored in local storage.
 *
 * @returns The selected game theme.
 */
function getSelectedTheme(): Theme {
  const storedTheme =
    localStorage.getItem("selectedTheme");

  if (
    storedTheme === "gaming" ||
    storedTheme === "da"
  ) {
    return storedTheme;
  }

  return "code";
}

/**
 * Returns the starting player stored in local storage.
 *
 * @returns The selected starting player.
 */
function getSelectedPlayer(): Player {
  const storedPlayer =
    localStorage.getItem("selectedPlayer");

  return storedPlayer === "orange"
    ? "orange"
    : "blue";
}

/**
 * Returns the board size stored in local storage.
 *
 * @returns The selected number of cards.
 */
function getSelectedBoard(): BoardSize {
  const storedBoard =
    localStorage.getItem("selectedBoard");

  const boardNumber = Number.parseInt(
    storedBoard ?? "16",
    10,
  );

  if (
    boardNumber === 24 ||
    boardNumber === 36
  ) {
    return boardNumber;
  }

  return 16;
}

/**
 * Initializes the complete memory game.
 *
 * @param onExit Runs after confirming the game exit.
 * @param onBackToGame Runs after leaving the result screen.
 */
export function initGame(
  onExit: () => void,
  onBackToGame: () => void,
): void {
  const selectedTheme = getSelectedTheme();
  const selectedPlayer = getSelectedPlayer();
  const selectedBoard = getSelectedBoard();

  applyTheme(selectedTheme);

  renderCards(
    selectedTheme,
    selectedBoard,
  );

  initCards(
    selectedTheme,
    selectedPlayer,
    onBackToGame,
  );

  initExitDialog(onExit);
}