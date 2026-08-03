import bluePlayerIcon from "../assets/themes/Theme3/Player-blue.svg";
import orangePlayerIcon from "../assets/themes/Theme3/chess_pawn.svg";
import confettiImage from "../assets/themes/Confetti.png";
import drawImage from "../assets/themes/Theme3/Scale_Icon.svg";

/**
 * Returns the blue player score.
 *
 * @returns The blue player score HTML.
 */
export function getBluePlayerTemplate(): string {
  return `
    <div class="game-result__player game-result__player--blue">
      <img class="game-result__player-icon"
        src="${bluePlayerIcon}"
        alt="Blue Player">
      <span class="game-result__player-name">Blue</span>
      <span class="game-result__player-score
        game-result__player-score--blue">0</span>
    </div>
  `;
}

/**
 * Returns the orange player score.
 *
 * @returns The orange player score HTML.
 */
export function getOrangePlayerTemplate(): string {
  return `
    <div class="game-result__player game-result__player--orange">
      <img class="game-result__player-icon"
        src="${orangePlayerIcon}"
        alt="Orange Player">
      <span class="game-result__player-name">Orange</span>
      <span class="game-result__player-score
        game-result__player-score--orange">0</span>
    </div>
  `;
}

/**
 * Returns the player score section.
 *
 * @returns The player score section HTML.
 */
export function getPlayersTemplate(): string {
  return `
    <div class="game-result__players">
      ${getBluePlayerTemplate()}
      ${getOrangePlayerTemplate()}
    </div>
  `;
}

/**
 * Returns the game-over screen.
 *
 * @returns The game-over screen HTML.
 */
export function getGameOverTemplate(): string {
  return `
    <div id="da-game-over"
      class="game-result__screen game-result__screen--game-over">
      <h1 class="game-result__title">GAME OVER</h1>
      <div class="game-result__score">
        <p class="game-result__score-title">Final score</p>
        ${getPlayersTemplate()}
      </div>
    </div>
  `;
}

/**
 * Returns the confetti image.
 *
 * @returns The confetti image HTML.
 */
export function getConfettiTemplate(): string {
  return `
    <img class="game-result__confetti"
      src="${confettiImage}"
      alt="">
  `;
}

/**
 * Returns the home button.
 *
 * @returns The home button HTML.
 */
export function getHomeButtonTemplate(): string {
  return `
    <button class="game-result__button" type="button">
      Home
    </button>
  `;
}

/**
 * Returns the blue winner screen.
 *
 * @returns The blue winner screen HTML.
 */
export function getBlueWinnerTemplate(): string {
  return `
    <div id="da-winner-blue"
      class="game-result__screen game-result__screen--winner">
      ${getConfettiTemplate()}
      <p class="game-result__subtitle">The winner is</p>
      <h2 class="game-result__winner-name">Blue Player</h2>
      <img class="game-result__image"
        src="${bluePlayerIcon}"
        alt="Blue Player">
      ${getHomeButtonTemplate()}
    </div>
  `;
}

/**
 * Returns the orange winner screen.
 *
 * @returns The orange winner screen HTML.
 */
export function getOrangeWinnerTemplate(): string {
  return `
    <div id="da-winner-orange"
      class="game-result__screen game-result__screen--winner">
      ${getConfettiTemplate()}
      <p class="game-result__subtitle">The winner is</p>
      <h2 class="game-result__winner-name">Orange Player</h2>
      <img class="game-result__image"
        src="${orangePlayerIcon}"
        alt="Orange Player">
      ${getHomeButtonTemplate()}
    </div>
  `;
}

/**
 * Returns the draw screen.
 *
 * @returns The draw screen HTML.
 */
export function getDrawTemplate(): string {
  return `
    <div id="da-draw"
      class="game-result__screen game-result__screen--draw">
      <p class="game-result__subtitle">It's a</p>
      <h2 class="game-result__draw-title">DRAW</h2>
      <img class="game-result__image"
        src="${drawImage}"
        alt="Draw">
      ${getHomeButtonTemplate()}
    </div>
  `;
}

/**
 * Returns the complete game-result content.
 *
 * @returns The complete game-result content HTML.
 */
export function getGameResultContentTemplate(): string {
  return `
    ${getGameOverTemplate()}
    ${getBlueWinnerTemplate()}
    ${getOrangeWinnerTemplate()}
    ${getDrawTemplate()}
  `;
}

/**
 * Returns the complete game-result template.
 *
 * @returns The complete game-result HTML.
 */
export function gameResultTemplate(): string {
  return `
    <div class="game-result__theme game-result__theme--da">
      ${getGameResultContentTemplate()}
    </div>
  `;
}