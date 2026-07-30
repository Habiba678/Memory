type PlayerColor = "blue" | "orange";

interface ThemeConfig {
  name: string;
  title: string;
  blueIcon: string;
  orangeIcon: string;
  blueWinnerImage: string;
  orangeWinnerImage: string;
  drawIcon: string;
  buttonLabel: string;
}

/**
 * Creates the HTML markup for one player.
 *
 * @param color - The player's color.
 * @param icon - The path to the player's icon.
 * @returns The HTML markup for the player.
 */
function playerTemplate(color: PlayerColor, icon: string): string {
  const playerName = capitalize(color);

  return `
    <div class="game-result__player game-result__player--${color}">
      <img class="game-result__player-icon" src="${icon}" alt="${playerName} Player">
      <span class="game-result__player-name">${playerName}</span>
      <span class="game-result__player-score game-result__player-score--${color}">0</span>
    </div>
  `;
}

/**
 * Creates the game-over screen for one theme.
 *
 * @param theme - The current theme configuration.
 * @returns The HTML markup for the game-over screen.
 */
function gameOverTemplate(theme: ThemeConfig): string {
  return `
    <div id="${theme.name}-game-over" class="game-result__screen game-result__screen--game-over">
      <h1 class="game-result__title">${theme.title}</h1>
      <div class="game-result__score">
        <p class="game-result__score-title">Final score</p>
        <div class="game-result__players">
          ${playerTemplate("blue", theme.blueIcon)}
          ${playerTemplate("orange", theme.orangeIcon)}
        </div>
      </div>
    </div>
  `;
}

/**
 * Creates the winner screen for one player.
 *
 * @param theme - The current theme configuration.
 * @param color - The winning player's color.
 * @returns The HTML markup for the winner screen.
 */
function winnerTemplate(
  theme: ThemeConfig,
  color: PlayerColor,
): string {
  const playerName = getWinnerName(theme.name, color);
  const winnerImage = getWinnerImage(theme, color);

  return `
    <div id="${theme.name}-winner-${color}" class="game-result__screen game-result__screen--winner">
      ${confettiTemplate()}
      <p class="game-result__subtitle">The winner is</p>
      <h2 class="game-result__winner-name">${playerName}</h2>
      <img class="game-result__image" src="${winnerImage}" alt="${capitalize(color)} Player">
      ${buttonTemplate(theme.buttonLabel)}
    </div>
  `;
}

/**
 * Returns the winner image for the selected player.
 *
 * @param theme - The current theme configuration.
 * @param color - The winning player's color.
 * @returns The path to the winner image.
 */
function getWinnerImage(
  theme: ThemeConfig,
  color: PlayerColor,
): string {
  return color === "blue"
    ? theme.blueWinnerImage
    : theme.orangeWinnerImage;
}

/**
 * Creates the draw screen for one theme.
 *
 * @param theme - The current theme configuration.
 * @returns The HTML markup for the draw screen.
 */
function drawTemplate(theme: ThemeConfig): string {
  return `
    <div id="${theme.name}-draw" class="game-result__screen game-result__screen--draw">
      <p class="game-result__subtitle">It's a</p>
      <h2 class="game-result__draw-title">DRAW</h2>
      <img class="game-result__image" src="${theme.drawIcon}" alt="Draw">
      ${buttonTemplate(theme.buttonLabel)}
    </div>
  `;
}

/**
 * Creates all result screens for one theme.
 *
 * @param theme - The current theme configuration.
 * @returns The complete HTML markup for the theme.
 */
function themeTemplate(theme: ThemeConfig): string {
  return `
    <div class="game-result__theme game-result__theme--${theme.name}">
      ${gameOverTemplate(theme)}
      ${winnerTemplate(theme, "blue")}
      ${winnerTemplate(theme, "orange")}
      ${drawTemplate(theme)}
    </div>
  `;
}

/**
 * Creates the confetti image.
 *
 * @returns The HTML markup for the confetti image.
 */
function confettiTemplate(): string {
  return `
    <img
      class="game-result__confetti"
      src="/src/assets/themes/Confetti.png"
      alt=""
    >
  `;
}

/**
 * Creates a navigation button.
 *
 * @param label - The text displayed inside the button.
 * @returns The HTML markup for the navigation button.
 */
function buttonTemplate(label: string): string {
  return `
    <button class="game-result__button" type="button">
      ${label}
    </button>
  `;
}

/**
 * Creates the displayed winner name.
 *
 * @param themeName - The name of the current theme.
 * @param color - The winning player's color.
 * @returns The formatted winner name.
 */
function getWinnerName(
  themeName: string,
  color: PlayerColor,
): string {
  const playerName = `${capitalize(color)} Player`;

  return themeName === "code"
    ? playerName.toUpperCase()
    : playerName;
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param value - The string that should be formatted.
 * @returns The string with an uppercase first letter.
 */
function capitalize(value: string): string {
  return value.charAt(0).toUpperCase()
    + value.slice(1);
}

/**
 * Contains the configuration for the code theme.
 */
const codeTheme: ThemeConfig = {
  name: "code",
  title: "Game over",
  blueIcon: "/src/assets/themes/theme1/cards/label.svg",
  orangeIcon: "/src/assets/themes/theme1/cards/label (1).svg",
  blueWinnerImage: "/src/assets/themes/theme1/cards/blue-player.svg",
  orangeWinnerImage: "/src/assets/themes/theme1/cards/orange-player.svg",
  drawIcon: "/src/assets/themes/theme1/cards/Scale_Icon.svg",
  buttonLabel: "Back to start",
};

/**
 * Contains the configuration for the gaming theme.
 */
const gamingTheme: ThemeConfig = {
  name: "gaming",
  title: "GAME OVER",
  blueIcon: "/src/assets/themes/Theme2/card/label (1).svg",
  orangeIcon: "/src/assets/themes/Theme2/card/label.svg",
  blueWinnerImage: "/src/assets/themes/Theme2/Player-blue.svg",
  orangeWinnerImage: "src/assets/themes/Theme2/pockal 1 (1).svg",
  drawIcon: "/src/assets/themes/Theme2/Scale_Icon.svg",
  buttonLabel: "Home",
};

/**
 * Creates the complete game-result template.
 *
 * @returns The HTML markup for all result screens.
 */
export function gameResultTemplatePart1(): string {
  return `
    ${themeTemplate(codeTheme)}
    ${themeTemplate(gamingTheme)}
  `;
}