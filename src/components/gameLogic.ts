import {
    playerImages,
    type Player,
    type Theme,
  } from "./gameBoard";
  
  import {
    renderGameResult,
    showGameResult,
    type GameScores,
  } from "./gameResult";
  
  /**
   * Initializes the cards and game logic.
   *
   * @param theme - The currently selected theme.
   * @param startPlayer - The player who starts the game.
   * @param onBackToStart - Runs after leaving the result screen.
   */
  export function initCards(
    theme: Theme,
    startPlayer: Player,
    onBackToStart: () => void,
  ): void {
    const cards =
      document.querySelectorAll<HTMLButtonElement>(
        ".memory-card",
      );
  
    const blueScoreElement =
      document.querySelector<HTMLElement>(
        "#blue-score",
      );
  
    const orangeScoreElement =
      document.querySelector<HTMLElement>(
        "#orange-score",
      );
  
    const currentPlayerIcon =
      document.querySelector<HTMLImageElement>(
        "#current-player-icon",
      );
  
    const currentPlayerName =
      document.querySelector<HTMLElement>(
        "#current-player-name",
      );
  
    let currentPlayer = startPlayer;
    let blueScore = 0;
    let orangeScore = 0;
    let matchedPairs = 0;
    let gameFinished = false;
    let gameStarted = false;
    let openCards: HTMLButtonElement[] = [];
  
    const totalPairs = cards.length / 2;
  
    /**
     * Updates the current-player display.
     */
    function updateCurrentPlayer(): void {
      if (currentPlayerIcon) {
        currentPlayerIcon.src =
          getCurrentPlayerImage(
            theme,
            currentPlayer,
            gameStarted,
          );
      }
  
      if (currentPlayerName) {
        currentPlayerName.textContent =
          currentPlayer === "blue"
            ? "Blue"
            : "Orange";
      }
    }
  
    /**
     * Updates the displayed scores.
     */
    function updateScores(): void {
      if (blueScoreElement) {
        blueScoreElement.textContent =
          String(blueScore);
      }
  
      if (orangeScoreElement) {
        orangeScoreElement.textContent =
          String(orangeScore);
      }
    }
  
    /**
     * Changes the current player.
     */
    function switchPlayer(): void {
      currentPlayer =
        currentPlayer === "blue"
          ? "orange"
          : "blue";
  
      updateCurrentPlayer();
    }
  
    /**
     * Displays the winner or draw screen.
     *
     * @param scores - The final scores.
     */
    function showFinalResult(
      scores: GameScores,
    ): void {
      if (scores.blue > scores.orange) {
        showGameResult(
          theme,
          "winner-blue",
          scores,
          onBackToStart,
        );
  
        return;
      }
  
      if (scores.orange > scores.blue) {
        showGameResult(
          theme,
          "winner-orange",
          scores,
          onBackToStart,
        );
  
        return;
      }
  
      showGameResult(
        theme,
        "draw",
        scores,
        onBackToStart,
      );
    }
  
    /**
     * Finishes the game and displays the result.
     */
    function finishGame(): void {
      if (gameFinished) {
        return;
      }
  
      gameFinished = true;
  
      const scores: GameScores = {
        blue: blueScore,
        orange: orangeScore,
      };
  
      renderGameResult();
  
      showGameResult(
        theme,
        "game-over",
        scores,
      );
  
      window.setTimeout(() => {
        showFinalResult(scores);
      }, 2500);
    }

    /**
   * Adds one point to the current player.
   */
  function addPoint(): void {
    if (currentPlayer === "blue") {
      blueScore++;
    } else {
      orangeScore++;
    }

    matchedPairs++;
    updateScores();

    if (matchedPairs === totalPairs) {
      finishGame();
    }
  }

  /**
   * Compares the last two opened cards.
   */
  function compareOpenedCards(): void {
    if (openCards.length < 2) {
      return;
    }

    const firstCard =
      openCards.at(-2);

    const secondCard =
      openCards.at(-1);

    if (!firstCard || !secondCard) {
      return;
    }

    const samePair =
      firstCard.dataset.pairId ===
      secondCard.dataset.pairId;

    const alreadyScored =
      firstCard.dataset.scored ===
        "true" ||
      secondCard.dataset.scored ===
        "true";

    if (samePair && !alreadyScored) {
      firstCard.dataset.scored =
        "true";

      secondCard.dataset.scored =
        "true";

      addPoint();
      return;
    }

    if (!samePair) {
      switchPlayer();
    }
  }

  /**
   * Opens the selected memory card.
   *
   * @param card - The card that should be opened.
   */
  function openCard(
    card: HTMLButtonElement,
  ): void {
    if (gameFinished) {
      return;
    }

    if (!gameStarted) {
      gameStarted = true;
      updateCurrentPlayer();
    }

    card.classList.add(
      "memory-card--flipped",
    );

    openCards.push(card);

    compareOpenedCards();
  }

  /**
   * Closes the selected memory card.
   *
   * @param card - The card that should be closed.
   */
  function closeCard(
    card: HTMLButtonElement,
  ): void {
    if (gameFinished) {
      return;
    }

    card.classList.remove(
      "memory-card--flipped",
    );

    openCards = openCards.filter(
      (openCard) =>
        openCard !== card,
    );
  }

  /**
   * Handles a click on a memory card.
   *
   * @param card - The card that was clicked.
   */
  function handleCardClick(
    card: HTMLButtonElement,
  ): void {
    if (gameFinished) {
      return;
    }

    const isOpen =
      card.classList.contains(
        "memory-card--flipped",
      );

    if (isOpen) {
      closeCard(card);
      return;
    }

    openCard(card);
  }

  cards.forEach((card) => {
    card.addEventListener(
      "click",
      () => handleCardClick(card),
    );
  });

  updateScores();
  updateCurrentPlayer();
}

/**
 * Returns the current-player image.
 *
 * @param theme - The selected theme.
 * @param player - The current player.
 * @param gameStarted - Indicates whether the game has started.
 * @returns The matching player-image path.
 */
function getCurrentPlayerImage(
  theme: Theme,
  player: Player,
  gameStarted: boolean,
): string {
  if (
    !gameStarted &&
    (theme === "gaming" ||
      theme === "da")
  ) {
    return (
      playerImages[theme].white ??
      playerImages[theme].blue
    );
  }

  return player === "blue"
    ? playerImages[theme].blue
    : playerImages[theme].orange;
}