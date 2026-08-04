import { themeImages } from "../gameCardImages";

import codeBlue from "../assets/themes/theme1/cards/label.svg";
import codeOrange from "../assets/themes/theme1/cards/label (1).svg";
import codeWhite from "../assets/themes/theme1/cards/player-blue.svg";
import gamingBlue from "../assets/themes/Theme2/card/Player-blue.svg";
import gamingOrange from "../assets/themes/Theme2/card/orange-chess_pawn.svg";
import gamingWhite from "../assets/themes/Theme2/card/chess_pawn1.svg";
import daBlue from "../assets/themes/Theme3/Player-blue.svg";
import daOrange from "../assets/themes/Theme2/card/orange-chess_pawn.svg";
import daWhite from "../assets/themes/Theme3/card/chess_pawn.svg";
import codeBackCard from "../assets/themes/theme1/cards/back-card.svg";
import gamingBackCard from "../assets/themes/Theme2/back-card 2.svg";
import daBackCard from "../assets/themes/Theme3/back-card.svg";

/**
 * Defines the available player colors.
 */
export type Player = "blue" | "orange";

/**
 * Defines the available game themes.
 */
export type Theme = "code" | "gaming" | "da";

/**
 * Defines the supported board sizes.
 */
export type BoardSize = 16 | 24 | 36;

/**
 * Describes the data of one memory card.
 */
export type CardData = {
  image: string;
  pairId: number;
};

/**
 * Maps each theme to its player icons.
 */
export const playerImages: Record<
  Theme,
  {
    blue: string;
    orange: string;
    white?: string;
  }
> = {
  code: {
    blue: codeBlue,
    orange: codeOrange,
    white: codeWhite,
  },

  gaming: {
    blue: gamingBlue,
    orange: gamingOrange,
    white: gamingWhite,
  },

  da: {
    blue: daBlue,
    orange: daOrange,
    white: daWhite,
  },
};

/**
 * Assigns the correct card-back image to each theme.
 */
const backCardImages: Record<Theme, string> = {
  code: codeBackCard,
  gaming: gamingBackCard,
  da: daBackCard,
};

/**
 * Shuffles the cards into a random order.
 *
 * @param cards The cards to shuffle.
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
 * Builds a span element with a CSS class.
 *
 * @param className The CSS class of the span.
 * @returns The created span element.
 */
function createSpan(
  className: string,
): HTMLSpanElement {
  const span = document.createElement("span");
  span.className = className;

  return span;
}

/**
 * Builds an image element for a memory card.
 *
 * @param source The image source.
 * @param className The CSS class of the image.
 * @param altText The alternative text.
 * @returns The created image element.
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
 * Builds the front and back area of a memory card.
 *
 * @param card The card data.
 * @param theme The selected game theme.
 * @returns The inner card element.
 */
function createCardInner(
  card: CardData,
  theme: Theme,
): HTMLSpanElement {
  const cardInner =
    createSpan("memory-card__inner");

  const cardBack =
    createSpan("memory-card__back");

  const cardFront =
    createSpan("memory-card__front");

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
 * Builds one memory card button.
 *
 * @param card The card data.
 * @param theme The selected game theme.
 * @returns The created memory card button.
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
 * Generates the card data for the selected board.
 *
 * @param theme The selected game theme.
 * @param boardSize The selected board size.
 * @returns The generated card data.
 */
function createCardData(
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
 * Applies the selected size class to the game grid.
 *
 * @param gameGrid The game grid element.
 * @param boardSize The selected board size.
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
 * Displays the shuffled cards inside the game grid.
 *
 * @param theme The selected game theme.
 * @param boardSize The selected board size.
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
    createCardData(theme, boardSize),
  ).forEach((card) => {
    gameGrid.append(
      createCardElement(card, theme),
    );
  });
}