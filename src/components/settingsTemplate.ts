/**
 * Returns the settings headline.
 *
 * @returns The settings headline HTML.
 */
export function getSettingsHeadlineTemplate(): string {
  return `
    <div class="settings-screen__headline">
      <h1 class="settings-screen__title">Settings</h1>
      <img class="settings-screen__headline-line"
        src="/src/assets/icon/Line 3.png" alt="">
    </div>
  `;
}

/**
 * Returns the game themes title.
 *
 * @returns The game themes title HTML.
 */
export function getThemeTitleTemplate(): string {
  return `
    <div class="settings-group__title-row">
      <img class="settings-group__icon"
        src="/src/assets/icon/palette.png" alt="">
      <h2 class="settings-group__title">Game themes</h2>
    </div>
  `;
}

/**
 * Returns the code theme option.
 *
 * @returns The code theme option HTML.
 */
export function getCodeThemeOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="theme" value="code" checked>
      <span>Code vibes theme</span>
      <img class="settings-group__arrow"
        src="/src/assets/icon/Line 3 Kopie.png" alt="">
    </label>
  `;
}

/**
 * Returns the gaming theme option.
 *
 * @returns The gaming theme option HTML.
 */
export function getGamingThemeOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="theme" value="gaming">
      <span>Gaming theme</span>
      <img class="settings-group__arrow"
        src="/src/assets/icon/Line 3 Kopie.png" alt="">
    </label>
  `;
}

/**
 * Returns the DA Projects theme option.
 *
 * @returns The DA Projects theme option HTML.
 */
export function getDaThemeOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="theme" value="da">
      <span>DA Projects theme</span>
      <img class="settings-group__arrow"
        src="/src/assets/icon/Line 3 Kopie.png" alt="">
    </label>
  `;
}

/**
 * Returns the game theme settings.
 *
 * @returns The game theme settings HTML.
 */
export function getThemeSettingsTemplate(): string {
  return `
    <section class="settings-group">
      ${getThemeTitleTemplate()}
      ${getCodeThemeOptionTemplate()}
      ${getGamingThemeOptionTemplate()}
      ${getDaThemeOptionTemplate()}
    </section>
  `;
}

/**
 * Returns the player title.
 *
 * @returns The player title HTML.
 */
export function getPlayerTitleTemplate(): string {
  return `
    <div class="settings-group__title-row">
      <img class="settings-group__icon"
        src="/src/assets/icon/chess_pawn.png" alt="">
      <h2 class="settings-group__title">Choose player</h2>
    </div>
  `;
}

/**
 * Returns the blue player option.
 *
 * @returns The blue player option HTML.
 */
export function getBluePlayerOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="player" value="blue" checked>
      <span>Blue</span>
    </label>
  `;
}

/**
 * Returns the orange player option.
 *
 * @returns The orange player option HTML.
 */
export function getOrangePlayerOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="player" value="orange">
      <span>Orange</span>
    </label>
  `;
}

/**
 * Returns the player settings.
 *
 * @returns The player settings HTML.
 */
export function getPlayerSettingsTemplate(): string {
  return `
    <section class="settings-group">
      ${getPlayerTitleTemplate()}
      ${getBluePlayerOptionTemplate()}
      ${getOrangePlayerOptionTemplate()}
    </section>
  `;
}

/**
 * Returns the board size title.
 *
 * @returns The board size title HTML.
 */
export function getBoardTitleTemplate(): string {
  return `
    <div class="settings-group__title-row">
      <img class="settings-group__icon"
        src="/src/assets/icon/style.png" alt="">
      <h2 class="settings-group__title">Board size</h2>
    </div>
  `;
}

/**
 * Returns the 16 cards option.
 *
 * @returns The 16 cards option HTML.
 */
export function get16CardsOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="board" value="16" checked>
      <span>16 cards</span>
    </label>
  `;
}

/**
 * Returns the 24 cards option.
 *
 * @returns The 24 cards option HTML.
 */
export function get24CardsOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="board" value="24">
      <span>24 cards</span>
    </label>
  `;
}

/**
 * Returns the 36 cards option.
 *
 * @returns The 36 cards option HTML.
 */
export function get36CardsOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="board" value="36">
      <span>36 cards</span>
    </label>
  `;
}

/**
 * Returns the board size settings.
 *
 * @returns The board size settings HTML.
 */
export function getBoardSettingsTemplate(): string {
  return `
    <section class="settings-group">
      ${getBoardTitleTemplate()}
      ${get16CardsOptionTemplate()}
      ${get24CardsOptionTemplate()}
      ${get36CardsOptionTemplate()}
    </section>
  `;
}

/**
 * Returns the left settings area.
 *
 * @returns The left settings area HTML.
 */
export function getSettingsLeftTemplate(): string {
  return `
    <div class="settings-screen__left">
      ${getSettingsHeadlineTemplate()}
      ${getThemeSettingsTemplate()}
      ${getPlayerSettingsTemplate()}
      ${getBoardSettingsTemplate()}
    </div>
  `;
}

/**
 * Returns the theme preview.
 *
 * @returns The theme preview HTML.
 */
export function getThemePreviewTemplate(): string {
  return `
    <div id="theme-preview-box"
      class="settings-screen__preview-box preview-code">
      <img id="theme-preview"
        class="settings-screen__preview settings-screen__preview--code"
        src="/src/assets/imge/code.png"
        alt="Theme Preview">
    </div>
  `;
}

/**
 * Returns the theme summary button.
 *
 * @returns The theme summary button HTML.
 */
export function getThemeSummaryTemplate(): string {
  return `
    <button id="summary-theme"
      class="settings-screen__choice" type="button">
      Code vibes theme
    </button>
  `;
}

/**
 * Returns a choice line.
 *
 * @returns The choice line HTML.
 */
export function getChoiceLineTemplate(): string {
  return `
    <span class="settings-screen__line-wrapper">
      <img class="settings-screen__choice-line
        settings-screen__choice-line--default"
        src="/src/assets/icon/Line 4.svg" alt="">
    </span>
  `;
}

/**
 * Returns the player summary button.
 *
 * @returns The player summary button HTML.
 */
export function getPlayerSummaryTemplate(): string {
  return `
    <button id="summary-player"
      class="settings-screen__choice" type="button">
      Blue Player
    </button>
  `;
}

/**
 * Returns the board summary button.
 *
 * @returns The board summary button HTML.
 */
export function getBoardSummaryTemplate(): string {
  return `
    <button id="summary-board"
      class="settings-screen__choice" type="button">
      Board-16 Cards
    </button>
  `;
}

/**
 * Returns the start button.
 *
 * @returns The start button HTML.
 */
export function getStartButtonTemplate(): string {
  return `
    <button class="settings-screen__start" type="button">
      <img class="settings-screen__start-icon"
        src="/src/assets/icon/smart_display.png" alt="">
      <span>Start</span>
    </button>
  `;
}

/**
 * Returns the settings navigation.
 *
 * @returns The settings navigation HTML.
 */
export function getSettingsNavigationTemplate(): string {
  return `
    <nav class="settings-screen__choice-nav">
      ${getThemeSummaryTemplate()}
      ${getChoiceLineTemplate()}
      ${getPlayerSummaryTemplate()}
      ${getChoiceLineTemplate()}
      ${getBoardSummaryTemplate()}
      ${getStartButtonTemplate()}
    </nav>
  `;
}

/**
 * Returns the right settings area.
 *
 * @returns The right settings area HTML.
 */
export function getSettingsRightTemplate(): string {
  return `
    <div class="settings-screen__right">
      ${getThemePreviewTemplate()}
      ${getSettingsNavigationTemplate()}
    </div>
  `;
}

/**
 * Returns the settings panel.
 *
 * @returns The settings panel HTML.
 */
export function getSettingsPanelTemplate(): string {
  return `
    <section class="settings-screen__panel">
      ${getSettingsLeftTemplate()}
      ${getSettingsRightTemplate()}
    </section>
  `;
}

/**
 * Returns the complete settings template.
 *
 * @returns The complete settings HTML.
 */
export function settingsTemplate(): string {
  return `
    <main class="settings-screen">
      ${getSettingsPanelTemplate()}
    </main>
  `;
}