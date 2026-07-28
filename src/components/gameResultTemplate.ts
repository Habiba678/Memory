export function gameResultTemplate(): string {
  return `
      <div class="game-result__theme game-result__theme--da">

        <div
          id="da-game-over"
          class="game-result__screen game-result__screen--game-over"
        >
          <h1 class="game-result__title">
            GAME OVER
          </h1>

          <div class="game-result__score">

            <p class="game-result__score-title">
              Final score
            </p>

            <div class="game-result__players">

              <div
                class="
                  game-result__player
                  game-result__player--blue
                "
              >
                <img
                  class="game-result__player-icon"
                  src="/src/assets/themes/Theme3/Player-blue.svg"
                  alt="Blue Player"
                >

                <span class="game-result__player-name">
                  Blue
                </span>

                <span
                  class="
                    game-result__player-score
                    game-result__player-score--blue
                  "
                >
                  0
                </span>
              </div>

              <div
                class="
                  game-result__player
                  game-result__player--orange
                "
              >
                <img
                  class="game-result__player-icon"
                  src="/src/assets/themes/Theme3/Player-orange.svg"
                  alt="Orange Player"
                >

                <span class="game-result__player-name">
                  Orange
                </span>

                <span
                  class="
                    game-result__player-score
                    game-result__player-score--orange
                  "
                >
                  0
                </span>
              </div>

            </div>

          </div>
        </div>

        <div
          id="da-winner-blue"
          class="
            game-result__screen
            game-result__screen--winner
          "
        >
          <img
            class="game-result__confetti"
            src="/src/assets/themes/Confetti.png"
            alt=""
          >

          <p class="game-result__subtitle">
            The winner is
          </p>

          <h2 class="game-result__winner-name">
            Blue Player
          </h2>

          <img
            class="game-result__image"
            src="/src/assets/themes/Theme3/Player-blue.svg"
            alt="Blue Player"
          >

          <button
            class="game-result__button"
            type="button"
          >
            Home
          </button>
        </div>

        <div
          id="da-winner-orange"
          class="
            game-result__screen
            game-result__screen--winner
          "
        >
          <img
            class="game-result__confetti"
            src="/src/assets/themes/Confetti.png"
            alt=""
          >

          <p class="game-result__subtitle">
            The winner is
          </p>

          <h2 class="game-result__winner-name">
            Orange Player
          </h2>

          <img
            class="game-result__image"
            src="/src/assets/themes/Theme3/Player-orange.svg"
            alt="Orange Player"
          >

          <button
            class="game-result__button"
            type="button"
          >
            Home
          </button>
        </div>

        <div
          id="da-draw"
          class="
            game-result__screen
            game-result__screen--draw
          "
        >
          <p class="game-result__subtitle">
            It's a
          </p>

          <h2 class="game-result__draw-title">
            DRAW
          </h2>

          <img
            class="game-result__image"
            src="/src/assets/themes/Theme3/Scale_Icon.svg"
            alt="Draw"
          >

          <button
            class="game-result__button"
            type="button"
          >
            Home
          </button>
        </div>

      </div>
  `;
}