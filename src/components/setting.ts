import codePreview from "../assets/imge/code.svg";
import gamingPreview from "../assets/imge/gaming.svg";
import daPreview from "../assets/imge/DA.svg";

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
 * @returns The selected value or null.
 */
function getSelectedValue(name: string): string | null {
  return document.querySelector<HTMLInputElement>(
    `input[name="${name}"]:checked`
  )?.value ?? null;
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
 * Returns the start button.
 *
 * @returns The start button element.
 */
function getStartButton(): HTMLButtonElement | null {
  return document.querySelector<HTMLButtonElement>(
    "#start-game-button"
  );
}

/**
 * Updates the preview classes.
 *
 * @param value The selected theme.
 */
function updatePreviewClass(value: string): void {
  const preview = document.getElementById(
    "theme-preview"
  );

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

  previewBox?.classList.add(
    `preview-${value}`
  );
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
  updateSettingsState();
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
  const theme = getSelectedValue("theme");
  const player = getSelectedValue("player");
  const board = getSelectedValue("board");

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
    themeSummary.textContent = theme
      ? themeLabels[theme]
      : "Choose theme";
  }

  if (playerSummary) {
    playerSummary.textContent = player
      ? `${capitalize(player)} Player`
      : "Choose player";
  }

  if (boardSummary) {
    boardSummary.textContent = board
      ? `Board-${board} Cards`
      : "Choose board";
  }
}

/**
 * Checks whether all settings have been selected.
 *
 * @returns True when all settings are selected.
 */
function areSettingsComplete(): boolean {
  return Boolean(
    getSelectedValue("theme") &&
    getSelectedValue("player") &&
    getSelectedValue("board")
  );
}

/**
 * Enables or disables the start button.
 */
function updateStartButtonState(): void {
  const startButton = getStartButton();

  if (!startButton) {
    return;
  }

  const isComplete = areSettingsComplete();

  startButton.disabled = !isComplete;
  startButton.setAttribute(
    "aria-disabled",
    String(!isComplete)
  );
}

/**
 * Updates the complete settings screen state.
 */
function updateSettingsState(): void {
  updateSelectedSummary();
  updateStartButtonState();
}

/**
 * Opens or closes the settings summary.
 *
 * @param event The navigation click event.
 */
function toggleChoiceSummary(
  event: MouseEvent
): void {
  const target = event.target as HTMLElement;

  if (target.closest(".settings-screen__start")) {
    return;
  }

  const choiceNav = getChoiceNav();

  if (!choiceNav) {
    return;
  }

  choiceNav.classList.toggle(
    "settings-screen__choice-nav--expanded"
  );
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
  const theme = getSelectedValue("theme");
  const player = getSelectedValue("player");
  const board = getSelectedValue("board");

  if (!theme || !player || !board) {
    return;
  }

  localStorage.setItem(
    "selectedTheme",
    theme
  );

  localStorage.setItem(
    "selectedPlayer",
    player
  );

  localStorage.setItem(
    "selectedBoard",
    board
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
  const startButton = getStartButton();

  startButton?.addEventListener("click", () => {
    if (!areSettingsComplete()) {
      return;
    }

    saveSettings();
    onStart();
  });
}

/**
 * Clears all initial radio selections.
 */
function clearSelections(): void {
  const inputs =
    document.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    );

  inputs.forEach((input) => {
    input.checked = false;
  });
}

/**
 * Initializes the initial settings state.
 */
function initializeSettingsState(): void {
  clearSelections();
  updateSettingsState();
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

  addInputListeners(
    "player",
    updateSettingsState
  );

  addInputListeners(
    "board",
    updateSettingsState
  );

  addChoiceNavListener();
  addStartButtonListener(onStart);
  initializeSettingsState();
}