import { themeImages } from "../gameCardImages";

type Player = "blue" | "orange";
type Theme = "code" | "gaming" | "da";
type BoardSize = 16 | 24 | 36;

type CardData = {
  image: string;
  pairId: number;
};

const backCardImages: Record<Theme, string> = {
  code: "/src/assets/themes/theme1/cards/back-card.svg",
  gaming: "/src/assets/themes/Theme2/back-card 2.svg",
  da: "/src/assets/themes/Theme3/back-card.svg",
};

const playerImages: Record<
  Theme,
  {
    blue: string;
    orange: string;
  }
> = {
  code: {
    blue: "/src/assets/themes/theme1/cards/label.svg",
    orange: "/src/assets/themes/theme1/cards/label (1).svg",
  },

  gaming: {
    blue: "/src/assets/themes/Theme2/Player-blue.svg",
    orange: "/src/assets/themes/Theme2/Player-orange.svg",
  },

  da: {
    blue: "/src/assets/themes/Theme3/Player-blue.svg",
    orange: "/src/assets/themes/Theme3/Player-orange.svg",
  },
};

const exitImages: Record<Theme, string> = {
  code: "/src/assets/themes/theme1/cards/move_item.svg",
  gaming: "/src/assets/themes/Theme2/orange_chess Kopie.svg",
  da: "/src/assets/themes/Theme3/blue_chess Kopie.svg",
};

function shuffleCards(cards: CardData[]): CardData[] {
  const shuffledCards = [...cards];

  for (let index = shuffledCards.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffledCards[index], shuffledCards[randomIndex]] = [
      shuffledCards[randomIndex],
      shuffledCards[index],
    ];
  }

  return shuffledCards;
}

function createCardElement(
  card: CardData,
  theme: Theme
): HTMLButtonElement {
  const cardButton = document.createElement("button");

  cardButton.className = "memory-card";
  cardButton.type = "button";
  cardButton.dataset.pairId = String(card.pairId);
  cardButton.dataset.scored = "false";

  const cardInner = document.createElement("span");
  cardInner.className = "memory-card__inner";

  const cardBack = document.createElement("span");
  cardBack.className = "memory-card__back";

  const backImage = document.createElement("img");
  backImage.className = "memory-card__back-image";
  backImage.src = backCardImages[theme];
  backImage.alt = "Hidden memory card";

  const cardFront = document.createElement("span");
  cardFront.className = "memory-card__front";

  const frontImage = document.createElement("img");
  frontImage.className = "memory-card__front-image";
  frontImage.src = card.image;
  frontImage.alt = "Memory card";

  cardBack.append(backImage);
  cardFront.append(frontImage);
  cardInner.append(cardBack, cardFront);
  cardButton.append(cardInner);

  return cardButton;
}

function renderCards(theme: Theme, boardSize: BoardSize): void {
  const gameGrid =
    document.querySelector<HTMLElement>("#game-grid");

  if (!gameGrid) {
    return;
  }

  const pairCount = boardSize / 2;
  const selectedImages =
    themeImages[theme].slice(0, pairCount);

  const cards = selectedImages.flatMap((image, pairId) => [
    {
      image,
      pairId,
    },
    {
      image,
      pairId,
    },
  ]);

  gameGrid.classList.remove(
    "memory-game__grid--16",
    "memory-game__grid--24",
    "memory-game__grid--36"
  );

  gameGrid.classList.add(
    `memory-game__grid--${boardSize}`
  );

  gameGrid.innerHTML = "";

  shuffleCards(cards).forEach((card) => {
    gameGrid.append(
      createCardElement(card, theme)
    );
  });
}

function applyTheme(theme: Theme): void {
  const memoryGame =
    document.querySelector<HTMLElement>(
      "#memory-game"
    );

  const bluePlayerIcon =
    document.querySelector<HTMLImageElement>(
      "#blue-player-icon"
    );

  const orangePlayerIcon =
    document.querySelector<HTMLImageElement>(
      "#orange-player-icon"
    );

  const exitGameIcon =
    document.querySelector<HTMLImageElement>(
      "#exit-game-icon"
    );

  memoryGame?.classList.remove(
    "memory-game--code",
    "memory-game--gaming",
    "memory-game--da"
  );

  memoryGame?.classList.add(
    `memory-game--${theme}`
  );

  if (bluePlayerIcon) {
    bluePlayerIcon.src =
      playerImages[theme].blue;
  }

  if (orangePlayerIcon) {
    orangePlayerIcon.src =
      playerImages[theme].orange;
  }

  if (exitGameIcon) {
    exitGameIcon.src =
      exitImages[theme];
  }
}

function initCards(
  theme: Theme,
  startPlayer: Player
): void {
  const cards =
    document.querySelectorAll<HTMLButtonElement>(
      ".memory-card"
    );

  const blueScoreElement =
    document.querySelector<HTMLElement>(
      "#blue-score"
    );

  const orangeScoreElement =
    document.querySelector<HTMLElement>(
      "#orange-score"
    );

  const currentPlayerIcon =
    document.querySelector<HTMLImageElement>(
      "#current-player-icon"
    );

  const currentPlayerName =
    document.querySelector<HTMLElement>(
      "#current-player-name"
    );

  let currentPlayer = startPlayer;
  let blueScore = 0;
  let orangeScore = 0;
  let openCards: HTMLButtonElement[] = [];

  function updateCurrentPlayer(): void {
    if (currentPlayerIcon) {
      currentPlayerIcon.src =
        currentPlayer === "blue"
          ? playerImages[theme].blue
          : playerImages[theme].orange;
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

  function addPoint(): void {
    if (currentPlayer === "blue") {
      blueScore += 1;
    } else {
      orangeScore += 1;
    }

    updateScores();
  }

  function compareLastOpenedCards(): void {
    if (openCards.length < 2) {
      return;
    }

    const firstCard =
      openCards[openCards.length - 2];

    const secondCard =
      openCards[openCards.length - 1];

    const isSamePair =
      firstCard.dataset.pairId ===
      secondCard.dataset.pairId;

    const firstCardAlreadyScored =
      firstCard.dataset.scored === "true";

    const secondCardAlreadyScored =
      secondCard.dataset.scored === "true";

    if (isSamePair) {
      if (
        !firstCardAlreadyScored &&
        !secondCardAlreadyScored
      ) {
        firstCard.dataset.scored = "true";
        secondCard.dataset.scored = "true";
        addPoint();
      }

      return;
    }

    switchPlayer();
  }

  function openCard(
    card: HTMLButtonElement
  ): void {
    card.classList.add(
      "memory-card--flipped"
    );

    openCards.push(card);
    compareLastOpenedCards();
  }

  function closeCard(
    card: HTMLButtonElement
  ): void {
    card.classList.remove(
      "memory-card--flipped"
    );

    openCards = openCards.filter(
      (openCard) => openCard !== card
    );
  }

  function handleCardClick(
    card: HTMLButtonElement
  ): void {
    const isOpen =
      card.classList.contains(
        "memory-card--flipped"
      );

    if (isOpen) {
      closeCard(card);
      return;
    }

    openCard(card);
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      handleCardClick(card);
    });
  });

  updateScores();
  updateCurrentPlayer();
}

function initExitDialog(
  onExit: () => void
): void {
  const exitButton =
    document.querySelector<HTMLButtonElement>(
      "#exit-game-button"
    );

  const continueButton =
    document.querySelector<HTMLButtonElement>(
      "#continue-game-button"
    );

  const confirmExitButton =
    document.querySelector<HTMLButtonElement>(
      "#confirm-exit-button"
    );

  const exitDialog =
    document.querySelector<HTMLDialogElement>(
      "#exit-dialog"
    );

  exitButton?.addEventListener("click", () => {
    exitDialog?.showModal();
  });

  continueButton?.addEventListener(
    "click",
    () => {
      exitDialog?.close();
    }
  );

  confirmExitButton?.addEventListener(
    "click",
    () => {
      exitDialog?.close();
      onExit();
    }
  );
}

export function initGame(
  onExit: () => void
): void {
  const storedTheme =
    localStorage.getItem("selectedTheme");

  const storedPlayer =
    localStorage.getItem("selectedPlayer");

  const storedBoard =
    localStorage.getItem("selectedBoard");

  const selectedTheme: Theme =
    storedTheme === "gaming" ||
    storedTheme === "da"
      ? storedTheme
      : "code";

  const selectedPlayer: Player =
    storedPlayer === "orange"
      ? "orange"
      : "blue";

  const boardNumber = Number.parseInt(
    storedBoard ?? "16",
    10
  );

  const selectedBoard: BoardSize =
    boardNumber === 24 ||
    boardNumber === 36
      ? boardNumber
      : 16;

  applyTheme(selectedTheme);
  renderCards(
    selectedTheme,
    selectedBoard
  );
  initCards(
    selectedTheme,
    selectedPlayer
  );
  initExitDialog(onExit);
}