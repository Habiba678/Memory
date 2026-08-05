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
 * Selects the correct icon for the current player.
 *
 * @param theme The active game theme.
 * @param player The player whose icon is displayed.
 * @param gameStarted Whether the first card was opened.
 * @returns The path of the matching player image.
 */
function getCurrentPlayerImage(
  theme: Theme,
  player: Player,
  gameStarted: boolean,
): string {
  const usesWhiteStartIcon =
    theme === "gaming" || theme === "da";

  if (!gameStarted && usesWhiteStartIcon) {
    return (
      playerImages[theme].white ??
      playerImages[theme].blue
    );
  }

  return player === "blue"
    ? playerImages[theme].blue
    : playerImages[theme].orange;
}

/**
 * Sets up the cards, scores and player interactions.
 *
 * @param theme The currently selected theme.
 * @param startPlayer The player who begins the game.
 * @param onBackToStart Runs after leaving the result screen.
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
  let cardsLocked = false;
  let openCards: HTMLButtonElement[] = [];

  const totalPairs = cards.length / 2;

  /**
   * Refreshes the icon and name of the active player.
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
   * Writes both player scores into the game header.
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
   * Passes the turn to the other player.
   */
  function switchPlayer(): void {
    currentPlayer =
      currentPlayer === "blue"
        ? "orange"
        : "blue";

    updateCurrentPlayer();
  }

  /**
   * Opens the correct result screen for the final score.
   *
   * @param scores The completed game scores.
   */
  function showFinalResult(
    scores: GameScores,
  ): void {
    const result =
      scores.blue > scores.orange
        ? "winner-blue"
        : scores.orange > scores.blue
          ? "winner-orange"
          : "draw";

    showGameResult(
      theme,
      result,
      scores,
      onBackToStart,
    );
  }

  /**
   * Ends the match and starts the result sequence.
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
   * Awards one point to the active player.
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
   * Closes both selected cards after a wrong pair.
   */
  function closeOpenedCards(): void {
    openCards.forEach((card) => {
      card.classList.remove(
        "memory-card--flipped",
      );
    });

    openCards = [];
    cardsLocked = false;
    switchPlayer();
  }

  /**
   * Keeps a matching pair open and awards a point.
   */
  function handleMatchingPair(): void {
    openCards.forEach((card) => {
      card.dataset.scored = "true";
    });

    openCards = [];
    cardsLocked = false;
    addPoint();
  }

  /**
   * Checks whether the two opened cards form a pair.
   */
  function compareOpenedCards(): void {
    if (openCards.length !== 2) {
      return;
    }

    cardsLocked = true;

    const [firstCard, secondCard] =
      openCards;

    const samePair =
      firstCard.dataset.pairId ===
      secondCard.dataset.pairId;

    if (samePair) {
      handleMatchingPair();
      return;
    }

    window.setTimeout(() => {
      closeOpenedCards();
    }, 800);
  }

  /**
   * Reveals a selected memory card.
   *
   * @param card The card that should be opened.
   */
  function openCard(
    card: HTMLButtonElement,
  ): void {
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
   * Reacts to a click on one memory card.
   *
   * @param card The card selected by the player.
   */
  function handleCardClick(
    card: HTMLButtonElement,
  ): void {
    const isOpen =
      card.classList.contains(
        "memory-card--flipped",
      );

    const isScored =
      card.dataset.scored === "true";

    if (
      gameFinished ||
      cardsLocked ||
      isOpen ||
      isScored
    ) {
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