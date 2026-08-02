/**
 * Returns the blue player score for the code theme.
 *
 * @returns The blue player score HTML.
 */
export function getCodeBluePlayerTemplate(): string {
    return `
      <div class="game-result__player game-result__player--blue">
        <img class="game-result__player-icon"
          src="/src/assets/themes/theme1/cards/label.svg"
          alt="Blue Player">
        <span class="game-result__player-name">Blue</span>
        <span class="game-result__player-score
          game-result__player-score--blue">0</span>
      </div>
    `;
  }
  
  /**
   * Returns the orange player score for the code theme.
   *
   * @returns The orange player score HTML.
   */
  export function getCodeOrangePlayerTemplate(): string {
    return `
      <div class="game-result__player game-result__player--orange">
        <img class="game-result__player-icon"
          src="/src/assets/themes/theme1/cards/label (1).svg"
          alt="Orange Player">
        <span class="game-result__player-name">Orange</span>
        <span class="game-result__player-score
          game-result__player-score--orange">0</span>
      </div>
    `;
  }
  
  /**
   * Returns the player score section for the code theme.
   *
   * @returns The code player score HTML.
   */
  export function getCodePlayersTemplate(): string {
    return `
      <div class="game-result__players">
        ${getCodeBluePlayerTemplate()}
        ${getCodeOrangePlayerTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the game-over screen for the code theme.
   *
   * @returns The code game-over screen HTML.
   */
  export function getCodeGameOverTemplate(): string {
    return `
      <div id="code-game-over"
        class="game-result__screen game-result__screen--game-over">
        <h1 class="game-result__title">Game over</h1>
        <div class="game-result__score">
          <p class="game-result__score-title">Final score</p>
          ${getCodePlayersTemplate()}
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
        src="/src/assets/themes/Confetti.png"
        alt="">
    `;
  }
  
  /**
   * Returns the back-to-start button.
   *
   * @returns The back-to-start button HTML.
   */
  export function getBackToStartButtonTemplate(): string {
    return `
      <button class="game-result__button" type="button">
        Back to start
      </button>
    `;
  }
  
  /**
   * Returns the blue winner screen for the code theme.
   *
   * @returns The blue winner screen HTML.
   */
  export function getCodeBlueWinnerTemplate(): string {
    return `
      <div id="code-winner-blue"
        class="game-result__screen game-result__screen--winner">
        ${getConfettiTemplate()}
        <p class="game-result__subtitle">The winner is</p>
        <h2 class="game-result__winner-name">BLUE PLAYER</h2>
        <img class="game-result__image"
          src="/src/assets/themes/theme1/cards/blue-player.svg"
          alt="Blue Player">
        ${getBackToStartButtonTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the orange winner screen for the code theme.
   *
   * @returns The orange winner screen HTML.
   */
  export function getCodeOrangeWinnerTemplate(): string {
    return `
      <div id="code-winner-orange"
        class="game-result__screen game-result__screen--winner">
        ${getConfettiTemplate()}
        <p class="game-result__subtitle">The winner is</p>
        <h2 class="game-result__winner-name">ORANGE PLAYER</h2>
        <img class="game-result__image"
          src="/src/assets/themes/theme1/cards/orange-player.svg"
          alt="Orange Player">
        ${getBackToStartButtonTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the draw screen for the code theme.
   *
   * @returns The code draw screen HTML.
   */
  export function getCodeDrawTemplate(): string {
    return `
      <div id="code-draw"
        class="game-result__screen game-result__screen--draw">
        <p class="game-result__subtitle">It's a</p>
        <h2 class="game-result__draw-title">DRAW</h2>
        <img class="game-result__image"
          src="/src/assets/themes/theme1/cards/Scale_Icon.svg"
          alt="Draw">
        ${getBackToStartButtonTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the complete code theme.
   *
   * @returns The complete code theme HTML.
   */
  export function getCodeThemeTemplate(): string {
    return `
      <div class="game-result__theme game-result__theme--code">
        ${getCodeGameOverTemplate()}
        ${getCodeBlueWinnerTemplate()}
        ${getCodeOrangeWinnerTemplate()}
        ${getCodeDrawTemplate()}
      </div>
    `;
  }

  /**
 * Returns the blue player score for the gaming theme.
 *
 * @returns The blue player score HTML.
 */
export function getGamingBluePlayerTemplate(): string {
    return `
      <div class="game-result__player game-result__player--blue">
        <img class="game-result__player-icon"
          src="/src/assets/themes/Theme2/card/label (1).svg"
          alt="Blue Player">
        <span class="game-result__player-name">Blue</span>
        <span class="game-result__player-score
          game-result__player-score--blue">0</span>
      </div>
    `;
  }
  
  /**
   * Returns the orange player score for the gaming theme.
   *
   * @returns The orange player score HTML.
   */
  export function getGamingOrangePlayerTemplate(): string {
    return `
      <div class="game-result__player game-result__player--orange">
        <img class="game-result__player-icon"
          src="/src/assets/themes/Theme2/card/label.svg"
          alt="Orange Player">
        <span class="game-result__player-name">Orange</span>
        <span class="game-result__player-score
          game-result__player-score--orange">0</span>
      </div>
    `;
  }
  
  /**
   * Returns the player score section for the gaming theme.
   *
   * @returns The gaming player score HTML.
   */
  export function getGamingPlayersTemplate(): string {
    return `
      <div class="game-result__players">
        ${getGamingBluePlayerTemplate()}
        ${getGamingOrangePlayerTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the game-over screen for the gaming theme.
   *
   * @returns The gaming game-over screen HTML.
   */
  export function getGamingGameOverTemplate(): string {
    return `
      <div id="gaming-game-over"
        class="game-result__screen game-result__screen--game-over">
        <h1 class="game-result__title">GAME OVER</h1>
        <div class="game-result__score">
          <p class="game-result__score-title">Final score</p>
          ${getGamingPlayersTemplate()}
        </div>
      </div>
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
   * Returns the blue winner screen for the gaming theme.
   *
   * @returns The blue winner screen HTML.
   */
  export function getGamingBlueWinnerTemplate(): string {
    return `
      <div id="gaming-winner-blue"
        class="game-result__screen game-result__screen--winner">
        ${getConfettiTemplate()}
        <p class="game-result__subtitle">The winner is</p>
        <h2 class="game-result__winner-name">Blue Player</h2>
        <img class="game-result__image"
          src="src/assets/themes/Theme2/pockal 1.svg"
          alt="Blue Player">
        ${getHomeButtonTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the orange winner screen for the gaming theme.
   *
   * @returns The orange winner screen HTML.
   */
  export function getGamingOrangeWinnerTemplate(): string {
    return `
      <div id="gaming-winner-orange"
        class="game-result__screen game-result__screen--winner">
        ${getConfettiTemplate()}
        <p class="game-result__subtitle">The winner is</p>
        <h2 class="game-result__winner-name">Orange Player</h2>
        <img class="game-result__image"
          src="/src/assets/themes/Theme2/pockal 1 (1).svg"
          alt="Orange Player">
        ${getHomeButtonTemplate()}
      </div>
    `;
  }

  /**
 * Returns the draw screen for the gaming theme.
 *
 * @returns The gaming draw screen HTML.
 */
export function getGamingDrawTemplate(): string {
    return `
      <div id="gaming-draw"
        class="game-result__screen game-result__screen--draw">
        <p class="game-result__subtitle">It's a</p>
        <h2 class="game-result__draw-title">DRAW</h2>
        <img class="game-result__image"
          src="/src/assets/themes/Theme2/Scale_Icon.svg"
          alt="Draw">
        ${getHomeButtonTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the complete gaming theme.
   *
   * @returns The complete gaming theme HTML.
   */
  export function getGamingThemeTemplate(): string {
    return `
      <div class="game-result__theme game-result__theme--gaming">
        ${getGamingGameOverTemplate()}
        ${getGamingBlueWinnerTemplate()}
        ${getGamingOrangeWinnerTemplate()}
        ${getGamingDrawTemplate()}
      </div>
    `;
  }
  
  /**
   * Returns the complete game-result template.
   *
   * @returns The complete game-result HTML.
   */
  export function gameResultTemplatePart1(): string {
    return `
      ${getCodeThemeTemplate()}
      ${getGamingThemeTemplate()}
    `;
  }