import { themeImages } from "../gameCardImages";

export type Player = "blue" | "orange";
export type Theme = "code" | "gaming" | "da";
export type BoardSize = 16 | 24 | 36;

export type CardData = {
  image: string;
  pairId: number;
};

export const playerImages: Record<
  Theme,
  {
    blue: string;
    orange: string;
    white?: string;
  }
> = {
  code: {
    blue: "/src/assets/themes/theme1/cards/label.svg",
    orange:
      "/src/assets/themes/theme1/cards/label (1).svg",
    white:
      "/src/assets/themes/theme1/cards/player-blue.svg",
  },

  gaming: {
    blue:
      "/src/assets/themes/Theme2/card/Player-blue.svg",
    orange:
      "/src/assets/themes/Theme2/card/Player-orange.svg",
    white:
      "/src/assets/themes/Theme2/card/chess_pawn1.svg",
  },

  da: {
    blue:
      "/src/assets/themes/Theme3/Player-blue.svg",
    orange:
      "/src/assets/themes/Theme3/Player-orange.svg",
    white:
      "/src/assets/themes/Theme3/card/chess_pawn.svg",
  },
};

const backCardImages: Record<
  Theme,
  string
> = {
  code:
    "/src/assets/themes/theme1/cards/back-card.svg",

  gaming:
    "/src/assets/themes/Theme2/back-card 2.svg",

  da:
    "/src/assets/themes/Theme3/back-card.svg",
};

/**
 * Shuffles the cards into a random order.
 *
 * @param cards - Cards to shuffle.
 * @returns The shuffled cards.
 */
function shuffleCards(
  cards: CardData[],
): CardData[] {
  const shuffledCards = [...cards];

  for (
    let index = shuffledCards.length - 1;
    index > 0;
    index--
  ) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1),
    );

    [
      shuffledCards[index],
      shuffledCards[randomIndex],
    ] = [
      shuffledCards[randomIndex],
      shuffledCards[index],
    ];
  }

  return shuffledCards;
}

/**
 * Creates an image element.
 *
 * @param source - Image source.
 * @param className - CSS class.
 * @param altText - Alternative text.
 * @returns Image element.
 */
function createCardImage(
  source: string,
  className: string,
  altText: string,
): HTMLImageElement {
  const image = document.createElement("img");

  image.src = source;
  image.className = className;
  image.alt = altText;

  return image;
}

/**
 * Creates the inside of a card.
 *
 * @param card - Card data.
 * @param theme - Selected theme.
 * @returns Card inner element.
 */
function createCardInner(
  card: CardData,
  theme: Theme,
): HTMLSpanElement {
  const cardInner =
    document.createElement("span");
  const cardBack =
    document.createElement("span");
  const cardFront =
    document.createElement("span");

  cardInner.className =
    "memory-card__inner";

  cardBack.className =
    "memory-card__back";

  cardFront.className =
    "memory-card__front";

  cardBack.append(
    createCardImage(
      backCardImages[theme],
      "memory-card__back-image",
      "Hidden memory card",
    ),
  );

  cardFront.append(
    createCardImage(
      card.image,
      "memory-card__front-image",
      "Memory card",
    ),
  );

  cardInner.append(
    cardBack,
    cardFront,
  );

  return cardInner;
}

/**
 * Creates one memory card.
 *
 * @param card - Card data.
 * @param theme - Selected theme.
 * @returns Memory card button.
 */
function createCardElement(
  card: CardData,
  theme: Theme,
): HTMLButtonElement {
  const button =
    document.createElement("button");

  button.className = "memory-card";
  button.type = "button";
  button.dataset.pairId = String(
    card.pairId,
  );
  button.dataset.scored = "false";

  button.append(
    createCardInner(card, theme),
  );

  return button;
}

/**
 * Creates all cards.
 *
 * @param theme - Selected theme.
 * @param boardSize - Board size.
 * @returns Card data.
 */
function createCards(
  theme: Theme,
  boardSize: BoardSize,
): CardData[] {
  const pairCount = boardSize / 2;

  return themeImages[theme]
    .slice(0, pairCount)
    .flatMap((image, pairId) => [
      { image, pairId },
      { image, pairId },
    ]);
}

/**
 * Applies the board size class.
 *
 * @param gameGrid - Grid element.
 * @param boardSize - Board size.
 */
function applyBoardSize(
  gameGrid: HTMLElement,
  boardSize: BoardSize,
): void {
  gameGrid.classList.remove(
    "memory-game__grid--16",
    "memory-game__grid--24",
    "memory-game__grid--36",
  );

  gameGrid.classList.add(
    `memory-game__grid--${boardSize}`,
  );
}

/**
 * Renders all cards.
 *
 * @param theme - Selected theme.
 * @param boardSize - Board size.
 */
export function renderCards(
  theme: Theme,
  boardSize: BoardSize,
): void {
  const gameGrid =
    document.querySelector<HTMLElement>(
      "#game-grid",
    );

  if (!gameGrid) {
    return;
  }

  applyBoardSize(
    gameGrid,
    boardSize,
  );

  gameGrid.innerHTML = "";

  shuffleCards(
    createCards(theme, boardSize),
  ).forEach((card) => {
    gameGrid.append(
      createCardElement(card, theme),
    );
  });
}