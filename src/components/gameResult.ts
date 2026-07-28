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

export function renderGameResult(): void {
  document.body.innerHTML =
    gameResultTemplatePart1() +
    gameResultTemplate();
}

export function showGameResult(
  theme: GameTheme,
  result: GameResult,
  onBackToStart?: () => void
): void {
  const screens =
    document.querySelectorAll<HTMLElement>(
      ".game-result__screen"
    );

  const themes =
    document.querySelectorAll<HTMLElement>(
      ".game-result__theme"
    );

  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  themes.forEach((themeElement) => {
    themeElement.style.display = "none";
  });

  const activeTheme =
    document.querySelector<HTMLElement>(
      `.game-result__theme--${theme}`
    );

  const activeScreen =
    document.getElementById(
      `${theme}-${result}`
    );

  if (!activeTheme || !activeScreen) {
    return;
  }

  activeTheme.style.display = "flex";
  activeScreen.style.display = "flex";

  const backButton =
    activeScreen.querySelector<HTMLButtonElement>(
      ".game-result__button"
    );

  backButton?.addEventListener(
    "click",
    () => {
      onBackToStart?.();
    }
  );
}