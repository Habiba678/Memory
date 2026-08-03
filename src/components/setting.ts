import codePreview from "../assets/imge/code.png";
import gamingPreview from "../assets/imge/gaming.png";
import daPreview from "../assets/imge/DA.png";

/**
 * Stores the preview image for each game theme.
 */
const themeImages: Record<string, string> = {
  code: codePreview,
  gaming: gamingPreview,
  da: daPreview,
};

/**
 * Stores the label for each game theme.
 */
const themeLabels: Record<string, string> = {
  code: "Code vibes theme",
  gaming: "Gaming theme",
  da: "DA Projects theme",
};

/**
 * Returns the currently selected input value.
 *
 * @param name The name of the radio input.
 * @param defaultValue The default value.
 * @returns The selected input value.
 */
function getSelectedValue(
  name: string,
  defaultValue: string
): string {
  return (
    document.querySelector<HTMLInputElement>(
      `input[name="${name}"]:checked`
    )?.value ?? defaultValue
  );
}

/**
 * Returns the settings choice navigation.
 *
 * @returns The choice navigation element.
 */
function getChoiceNav(): HTMLElement | null {
  return document.querySelector<HTMLElement>(
    ".settings-screen__choice-nav"
  );
}

/**
 * Returns whether the summary is expanded.
 *
 * @returns Whether the summary is expanded.
 */
function isSummaryExpanded(): boolean {
  return (
    getChoiceNav()?.classList.contains(
      "settings-screen__choice-nav--expanded"
    ) ?? false
  );
}

/**
 * Updates the preview classes.
 *
 * @param value The selected theme.
 */
function updatePreviewClass(value: string): void {
  const preview = document.getElementById("theme-preview");
  const previewBox = document.getElementById(
    "theme-preview-box"
  );

  preview?.classList.remove(
    "settings-screen__preview--code",
    "settings-screen__preview--gaming",
    "settings-screen__preview--da"
  );

  preview?.classList.add(
    `settings-screen__preview--${value}`
  );

  previewBox?.classList.remove(
    "preview-code",
    "preview-gaming",
    "preview-da"
  );

  previewBox?.classList.add(`preview-${value}`);
}

/**
 * Updates the summary when it is expanded.
 */
function updateSummary(): void {
  if (isSummaryExpanded()) {
    updateSelectedSummary();
  }
}

/**
 * Updates the selected theme preview.
 *
 * @param value The selected theme.
 */
function updateTheme(value: string): void {
  const preview = document.getElementById(
    "theme-preview"
  ) as HTMLImageElement | null;

  const selectedImage = themeImages[value];

  if (preview && selectedImage) {
    preview.src = selectedImage;
  }

  updatePreviewClass(value);
  updateSummary();
}

/**
 * Resets the summary button texts.
 */
function resetSummary(): void {
  const theme = document.getElementById("summary-theme");
  const player = document.getElementById("summary-player");
  const board = document.getElementById("summary-board");

  if (theme) {
    theme.textContent = "Game theme";
  }

  if (player) {
    player.textContent = "Player";
  }

  if (board) {
    board.textContent = "Board size";
  }
}

/**
 * Returns a text with an uppercase first letter.
 *
 * @param value The text to format.
 * @returns The formatted text.
 */
function capitalize(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

/**
 * Updates the selected settings summary.
 */
function updateSelectedSummary(): void {
  const theme = getSelectedValue("theme", "code");
  const player = getSelectedValue("player", "blue");
  const board = getSelectedValue("board", "16");

  const themeSummary = document.getElementById(
    "summary-theme"
  );

  const playerSummary = document.getElementById(
    "summary-player"
  );

  const boardSummary = document.getElementById(
    "summary-board"
  );

  if (themeSummary) {
    themeSummary.textContent =
      themeLabels[theme] ?? "Game theme";
  }

  if (playerSummary) {
    playerSummary.textContent =
      `${capitalize(player)} Player`;
  }

  if (boardSummary) {
    boardSummary.textContent =
      `Board-${board} Cards`;
  }
}

/**
 * Opens or closes the settings summary.
 *
 * @param event The navigation click event.
 */
function toggleChoiceSummary(event: MouseEvent): void {
  const target = event.target as HTMLElement;

  if (target.closest(".settings-screen__start")) {
    return;
  }

  const choiceNav = getChoiceNav();

  if (!choiceNav) {
    return;
  }

  const isExpanded = choiceNav.classList.toggle(
    "settings-screen__choice-nav--expanded"
  );

  if (isExpanded) {
    updateSelectedSummary();
  } else {
    resetSummary();
  }
}

/**
 * Adds the click listener to the choice navigation.
 */
function addChoiceNavListener(): void {
  getChoiceNav()?.addEventListener(
    "click",
    toggleChoiceSummary
  );
}

/**
 * Adds change listeners to radio inputs.
 *
 * @param name The radio input name.
 * @param onChange The function called after a change.
 */
function addInputListeners(
  name: string,
  onChange: (value: string) => void
): void {
  const inputs =
    document.querySelectorAll<HTMLInputElement>(
      `input[name="${name}"]`
    );

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      onChange(input.value);
    });
  });
}

/**
 * Saves the selected settings.
 */
function saveSettings(): void {
  localStorage.setItem(
    "selectedTheme",
    getSelectedValue("theme", "code")
  );

  localStorage.setItem(
    "selectedPlayer",
    getSelectedValue("player", "blue")
  );

  localStorage.setItem(
    "selectedBoard",
    getSelectedValue("board", "16")
  );
}

/**
 * Adds the click listener to the start button.
 *
 * @param onStart The function called after starting.
 */
function addStartButtonListener(
  onStart: () => void
): void {
  const startButton =
    document.querySelector<HTMLButtonElement>(
      ".settings-screen__start"
    );

  startButton?.addEventListener("click", () => {
    saveSettings();
    onStart();
  });
}

/**
 * Restores a saved radio input.
 *
 * @param name The radio input name.
 * @param value The saved input value.
 */
function restoreInput(
  name: string,
  value: string
): void {
  const input =
    document.querySelector<HTMLInputElement>(
      `input[name="${name}"][value="${value}"]`
    );

  if (input) {
    input.checked = true;
  }
}

/**
 * Restores the saved settings.
 */
function restoreSettings(): void {
  const theme =
    localStorage.getItem("selectedTheme") ?? "code";

  const player =
    localStorage.getItem("selectedPlayer") ?? "blue";

  const board =
    localStorage.getItem("selectedBoard") ?? "16";

  restoreInput("theme", theme);
  restoreInput("player", player);
  restoreInput("board", board);

  updateTheme(theme);
  resetSummary();
}

/**
 * Initializes the settings screen.
 *
 * @param onStart The function called after starting the game.
 */
export function initSettings(
  onStart: () => void
): void {
  addInputListeners("theme", updateTheme);
  addInputListeners("player", updateSummary);
  addInputListeners("board", updateSummary);
  addChoiceNavListener();
  addStartButtonListener(onStart);
  restoreSettings();
}