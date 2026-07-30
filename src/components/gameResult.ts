import { gameResultTemplatePart1 } from "./gameResultTemplatePart1";
import { gameResultTemplate } from "./gameResultTemplate";

export type GameResult =
  | "game-over"
  | "winner-blue"
  | "winner-orange"
  | "draw";

export type GameTheme =
  | "code"
  | "gaming"
  | "da";

export type GameScores = {
  blue: number;
  orange: number;
};

/**
 * Renders all available game-result templates.
 */
export function renderGameResult(): void {
  document.body.innerHTML =
    gameResultTemplatePart1() +
    gameResultTemplate();
}

/**
 * Updates the displayed final scores.
 *
 * @param activeTheme - The currently selected theme element.
 * @param scores - The final scores of both players.
 */
function updateFinalScores(
  activeTheme: HTMLElement,
  scores: GameScores,
): void {
  const blueScore = activeTheme.querySelector<HTMLElement>(
    ".game-result__player-score--blue",
  );

  const orangeScore = activeTheme.querySelector<HTMLElement>(
    ".game-result__player-score--orange",
  );

  if (blueScore) {
    blueScore.textContent = String(scores.blue);
  }

  if (orangeScore) {
    orangeScore.textContent = String(scores.orange);
  }
}

/**
 * Hides all game-result themes and screens.
 */
function hideGameResults(): void {
  const screens = document.querySelectorAll<HTMLElement>(
    ".game-result__screen",
  );

  const themes = document.querySelectorAll<HTMLElement>(
    ".game-result__theme",
  );

  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  themes.forEach((theme) => {
    theme.style.display = "none";
  });
}

/**
 * Displays the selected game-result screen.
 *
 * @param theme - The currently selected game theme.
 * @param result - The result screen that should be displayed.
 * @param scores - The final scores of both players.
 * @param onBackToStart - Runs when the navigation button is clicked.
 */
export function showGameResult(
  theme: GameTheme,
  result: GameResult,
  scores: GameScores,
  onBackToStart?: () => void,
): void {
  hideGameResults();

  const activeTheme = document.querySelector<HTMLElement>(
    `.game-result__theme--${theme}`,
  );

  const activeScreen = document.getElementById(
    `${theme}-${result}`,
  );

  if (!activeTheme || !activeScreen) {
    return;
  }

  updateFinalScores(activeTheme, scores);

  activeTheme.style.display = "flex";
  activeScreen.style.display = "flex";

  const backButton =
    activeScreen.querySelector<HTMLButtonElement>(
      ".game-result__button",
    );

  if (backButton) {
    backButton.onclick = () => {
      onBackToStart?.();
    };
  }
}