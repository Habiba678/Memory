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
    let openCards: HTMLButtonElement[] = [];
  
    const totalPairs = cards.length / 2;
  
    function updateCurrentPlayer(): void {
      if (currentPlayerIcon) {
        currentPlayerIcon.src =
          getCurrentPlayerImage(
            theme,
            currentPlayer,
          );
      }
  
      if (currentPlayerName) {
        currentPlayerName.textContent =
          currentPlayer === "blue"
            ? "Blue"
            : "Orange";
      }
    }
  
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
  
    function switchPlayer(): void {
      currentPlayer =
        currentPlayer === "blue"
          ? "orange"
          : "blue";
  
      updateCurrentPlayer();
    }
  
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
  
    function openCard(
      card: HTMLButtonElement,
    ): void {
      if (gameFinished) {
        return;
      }
  
      card.classList.add(
        "memory-card--flipped",
      );
  
      openCards.push(card);
  
      compareOpenedCards();
    }
  
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
   * @param player - Current player.
   * @returns Image path.
   */
  function getCurrentPlayerImage(
    theme: Theme,
    player: Player,
  ): string {
    if (
      theme === "gaming" ||
      theme === "da"
    ) {
      return (
        playerImages[theme].white ??
        playerImages[theme].blue
      );
    }
  
    return player === "blue"
      ? playerImages.code.blue
      : playerImages.code.orange;
  }