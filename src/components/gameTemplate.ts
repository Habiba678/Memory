/**
 * Returns the blue player score.
 *
 * @returns The blue player score HTML.
 */
export function getBlueScoreTemplate(): string {
  return `
    <div class="game-score game-score--blue">
      <img id="blue-player-icon" class="game-score__icon"
        src="/src/assets/themes/theme1/cards/label.svg" alt="Blue player">
      <span class="game-score__name">Blue</span>
      <strong id="blue-score" class="game-score__points">0</strong>
    </div>
  `;
}

/**
 * Returns the orange player score.
 *
 * @returns The orange player score HTML.
 */
export function getOrangeScoreTemplate(): string {
  return `
    <div class="game-score game-score--orange">
      <img id="orange-player-icon" class="game-score__icon"
        src="/src/assets/themes/theme1/cards/label (1).svg" alt="Orange player">
      <span class="game-score__name">Orange</span>
      <strong id="orange-score" class="game-score__points">0</strong>
    </div>
  `;
}

/**
 * Returns the score section.
 *
 * @returns The score section HTML.
 */
export function getScoresTemplate(): string {
  return `
    <div class="game-header__scores">
      ${getBlueScoreTemplate()}
      ${getOrangeScoreTemplate()}
    </div>
  `;
}

/**
 * Returns the current player section.
 *
 * @returns The current player HTML.
 */
export function getCurrentPlayerTemplate(): string {
  return `
    <div class="game-header__current-player">
      <span class="game-header__current-text">Current player:</span>
      <img id="current-player-icon" class="game-header__current-icon"
        src="/src/assets/themes/theme3/card/chess_pawn.svg"
        alt="Current player">
      <strong id="current-player-name"
        class="game-header__current-name">Blue</strong>
    </div>
  `;
}

/**
 * Returns the exit game button.
 *
 * @returns The exit game button HTML.
 */
export function getExitButtonTemplate(): string {
  return `
    <button id="exit-game-button"
      class="game-header__exit" type="button">
      <img id="exit-game-icon" class="game-header__exit-icon"
        src="/src/assets/themes/theme3/blue_chess Kopie.svg" alt="">
      <span>Exit game</span>
    </button>
  `;
}

/**
 * Returns the complete game header.
 *
 * @returns The game header HTML.
 */
export function getGameHeaderTemplate(): string {
  return `
    <header class="game-header">
      ${getScoresTemplate()}
      ${getCurrentPlayerTemplate()}
      ${getExitButtonTemplate()}
    </header>
  `;
}

/**
 * Returns the memory card grid.
 *
 * @returns The game grid HTML.
 */
export function getGameGridTemplate(): string {
  return `
    <section id="game-grid"
      class="memory-game__grid memory-game__grid--16"
      aria-label="Memory cards">
    </section>
  `;
}

/**
 * Returns the continue game button.
 *
 * @returns The continue button HTML.
 */
export function getContinueButtonTemplate(): string {
  return `
    <button id="continue-game-button"
      class="exit-dialog__button exit-dialog__button--continue"
      type="button">
      Back to game
    </button>
  `;
}

/**
 * Returns the confirm exit button.
 *
 * @returns The confirm exit button HTML.
 */
export function getConfirmExitButtonTemplate(): string {
  return `
    <button id="confirm-exit-button"
      class="exit-dialog__button exit-dialog__button--exit"
      type="button">
      Exit game
    </button>
  `;
}

/**
 * Returns the exit dialog actions.
 *
 * @returns The dialog actions HTML.
 */
export function getExitDialogActionsTemplate(): string {
  return `
    <div class="exit-dialog__actions">
      ${getContinueButtonTemplate()}
      ${getConfirmExitButtonTemplate()}
    </div>
  `;
}

/**
 * Returns the exit confirmation dialog.
 *
 * @returns The exit dialog HTML.
 */
export function getExitDialogTemplate(): string {
  return `
    <dialog id="exit-dialog" class="exit-dialog">
      <div class="exit-dialog__content">
        <h2 class="exit-dialog__title">
          Are you sure you want to quit the game?
        </h2>
        ${getExitDialogActionsTemplate()}
      </div>
    </dialog>
  `;
}

/**
 * Returns the main game content.
 *
 * @returns The game content HTML.
 */
export function getGameContentTemplate(): string {
  return `
    <section class="memory-game__container">
      ${getGameHeaderTemplate()}
      ${getGameGridTemplate()}
      ${getExitDialogTemplate()}
    </section>
  `;
}

/**
 * Returns the complete memory game template.
 *
 * @returns The complete game HTML.
 */
export function gameTemplate(): string {
  return `
    <main id="memory-game"
      class="memory-game memory-game--code">
      ${getGameContentTemplate()}
    </main>
  `;
}