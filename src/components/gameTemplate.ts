export function gameTemplate(): string {
  return `
    <main
      id="memory-game"
      class="memory-game memory-game--code"
    >
      <section class="memory-game__container">

        <header class="game-header">

          <div class="game-header__scores">

            <div class="game-score game-score--blue">
              <img
                id="blue-player-icon"
                class="game-score__icon"
                src="/src/assets/themes/theme1/cards/label.svg"
                alt="Blue player"
              >

              <span class="game-score__name">
                Blue
              </span>

              <strong
                id="blue-score"
                class="game-score__points"
              >
                0
              </strong>
            </div>

            <div class="game-score game-score--orange">
              <img
                id="orange-player-icon"
                class="game-score__icon"
                src="/src/assets/themes/theme1/cards/label (1).svg"
                alt="Orange player"
              >

              <span class="game-score__name">
                Orange
              </span>

              <strong
                id="orange-score"
                class="game-score__points"
              >
                0
              </strong>
            </div>

          </div>

         <div class="game-header__current-player">
           <span class="game-header__current-text">
           Current player:
        </span>

        <span class="game-header__current-icon-wrapper">
          <img
          id="current-player-icon"
          class="game-header__current-icon"
          src="/src/assets/themes/theme3/card/chess_pawn.svg"
          alt="Current player"
        >
        </span>

        <strong
          id="current-player-name"
        class="game-header__current-name"
        >
          Blue
        </strong>
        </div>

          <button
            id="exit-game-button"
            class="game-header__exit"
            type="button"
          >
            <img
              id="exit-game-icon"
              class="game-header__exit-icon"
              src="/src/assets/themes/theme3/blue_chess Kopie.svg"
              alt=""
            >

            <span>
              Exit game
            </span>
          </button>

        </header>

        <section
          id="game-grid"
          class="memory-game__grid memory-game__grid--16"
          aria-label="Memory cards"
        ></section>

      <dialog
        id="exit-dialog"
        class="exit-dialog"
      >
        <div class="exit-dialog__content">

          <h2 class="exit-dialog__title">
            Are you sure you want to quit the game?
          </h2>

          <div class="exit-dialog__actions">

            <button
              id="continue-game-button"
              class="exit-dialog__button exit-dialog__button--continue"
              type="button"
            >
              Back to game
            </button>

            <button
              id="confirm-exit-button"
              class="exit-dialog__button exit-dialog__button--exit"
              type="button"
            >
              Exit game
            </button>

          </div>

        </div>
      </dialog>

    </main>
  `;
}