type PlayerColor = "blue" | "orange";

/**
 * Returns the player icon path.
 *
 * @param color - The player's color.
 * @returns The path to the player icon.
 */
function getPlayerIcon(color: PlayerColor): string {
  return color === "blue"
    ? "/src/assets/themes/Theme3/Player-blue.svg"
    : "/src/assets/themes/Theme3/Player-orange.svg";
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param value - The string to format.
 * @returns The formatted string.
 */
function capitalize(value: string): string {
  return value.charAt(0).toUpperCase()
    + value.slice(1);
}

/**
 * Creates the HTML markup for one player.
 *
 * @param color - The player's color.
 * @returns The HTML markup for the player.
 */
function playerTemplate(color: PlayerColor): string {
  const playerName = capitalize(color);

  return `
    <div class="game-result__player game-result__player--${color}">
      <img class="game-result__player-icon" src="${getPlayerIcon(color)}" alt="${playerName} Player">
      <span class="game-result__player-name">${playerName}</span>
      <span class="game-result__player-score game-result__player-score--${color}">0</span>
    </div>
  `;
}

/**
 * Creates the game-over screen.
 *
 * @returns The HTML markup for the game-over screen.
 */
function gameOverTemplate(): string {
  return `
    <div id="da-game-over" class="game-result__screen game-result__screen--game-over">
      <h1 class="game-result__title">GAME OVER</h1>
      <div class="game-result__score">
        <p class="game-result__score-title">Final score</p>
        <div class="game-result__players">
          ${playerTemplate("blue")}
          ${playerTemplate("orange")}
        </div>
      </div>
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
 * Creates the home button.
 *
 * @returns The HTML markup for the home button.
 */
function homeButtonTemplate(): string {
  return `
    <button class="game-result__button" type="button">
      Home
    </button>
  `;
}

/**
 * Creates the winner screen.
 *
 * @param color - The winning player's color.
 * @returns The HTML markup for the winner screen.
 */
function winnerTemplate(color: PlayerColor): string {
  const playerName = `${capitalize(color)} Player`;

  return `
    <div id="da-winner-${color}" class="game-result__screen game-result__screen--winner">
      ${confettiTemplate()}
      <p class="game-result__subtitle">The winner is</p>
      <h2 class="game-result__winner-name">${playerName}</h2>
      <img class="game-result__image" src="${getPlayerIcon(color)}" alt="${playerName}">
      ${homeButtonTemplate()}
    </div>
  `;
}

/**
 * Creates the draw screen.
 *
 * @returns The HTML markup for the draw screen.
 */
function drawTemplate(): string {
  return `
    <div id="da-draw" class="game-result__screen game-result__screen--draw">
      <p class="game-result__subtitle">It's a</p>
      <h2 class="game-result__draw-title">DRAW</h2>
      <img class="game-result__image" src="/src/assets/themes/Theme3/Scale_Icon.svg" alt="Draw">
      ${homeButtonTemplate()}
    </div>
  `;
}

/**
 * Creates the complete game-result template.
 *
 * @returns The HTML markup for all result screens.
 */
export function gameResultTemplate(): string {
  return `
    <div class="game-result__theme game-result__theme--da">
      ${gameOverTemplate()}
      ${winnerTemplate("blue")}
      ${winnerTemplate("orange")}
      ${drawTemplate()}
    </div>
  `;
}