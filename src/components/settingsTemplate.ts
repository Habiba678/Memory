import lineThree from "../assets/icon/Line 3.svg";
import paletteIcon from "../assets/icon/palette.svg";
import lineThreeCopy from "../assets/icon/Line 3 (1).svg";
import chessPawnIcon from "../assets/icon/chess_pawn.svg";
import styleIcon from "../assets/icon/style.svg";
import codePreview from "../assets/imge/code.svg";
import lineFour from "../assets/icon/Line 4.svg";
import smartDisplayIcon from "../assets/icon/smart_display.svg";

/** Returns the settings headline. */
export function getSettingsHeadlineTemplate(): string {
  return `
    <div class="settings-screen__headline">
      <h1 class="settings-screen__title">Settings</h1>
      <img class="settings-screen__headline-line" src="${lineThree}" alt="">
    </div>
  `;
}

/** Returns the game themes title. */
export function getThemeTitleTemplate(): string {
  return `
    <div class="settings-group__title-row">
      <img class="settings-group__icon" src="${paletteIcon}" alt="">
      <h2 class="settings-group__title">Game themes</h2>
    </div>
  `;
}

/** Returns the code theme option. */
export function getCodeThemeOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="theme" value="code">
      <span>Code vibes theme</span>
      <img class="settings-group__arrow" src="${lineThreeCopy}" alt="">
    </label>
  `;
}

/** Returns the gaming theme option. */
export function getGamingThemeOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="theme" value="gaming">
      <span>Gaming theme</span>
      <img class="settings-group__arrow" src="${lineThreeCopy}" alt="">
    </label>
  `;
}

/** Returns the DA Projects theme option. */
export function getDaThemeOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="theme" value="da">
      <span>DA Projects theme</span>
      <img class="settings-group__arrow" src="${lineThreeCopy}" alt="">
    </label>
  `;
}

/** Returns the game theme settings. */
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

/** Returns the player title. */
export function getPlayerTitleTemplate(): string {
  return `
    <div class="settings-group__title-row">
      <img class="settings-group__icon" src="${chessPawnIcon}" alt="">
      <h2 class="settings-group__title">Choose player</h2>
    </div>
  `;
}

/** Returns the blue player option. */
export function getBluePlayerOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="player" value="blue">
      <span>Blue</span>
    </label>
  `;
}

/** Returns the orange player option. */
export function getOrangePlayerOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="player" value="orange">
      <span>Orange</span>
    </label>
  `;
}

/** Returns the player settings. */
export function getPlayerSettingsTemplate(): string {
  return `
    <section class="settings-group">
      ${getPlayerTitleTemplate()}
      ${getBluePlayerOptionTemplate()}
      ${getOrangePlayerOptionTemplate()}
    </section>
  `;
}

/** Returns the board size title. */
export function getBoardTitleTemplate(): string {
  return `
    <div class="settings-group__title-row">
      <img class="settings-group__icon" src="${styleIcon}" alt="">
      <h2 class="settings-group__title">Board size</h2>
    </div>
  `;
}

/** Returns the 16 cards option. */
export function get16CardsOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="board" value="16">
      <span>16 cards</span>
    </label>
  `;
}

/** Returns the 24 cards option. */
export function get24CardsOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="board" value="24">
      <span>24 cards</span>
    </label>
  `;
}

/** Returns the 36 cards option. */
export function get36CardsOptionTemplate(): string {
  return `
    <label class="settings-group__option">
      <input type="radio" name="board" value="36">
      <span>36 cards</span>
    </label>
  `;
}

/** Returns the board size settings. */
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

/** Returns the left settings area. */
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

/** Returns the theme preview. */
export function getThemePreviewTemplate(): string {
  return `
    <div id="theme-preview-box" class="settings-screen__preview-box preview-code">
      <img
        id="theme-preview"
        class="settings-screen__preview settings-screen__preview--code"
        src="${codePreview}"
        alt="Theme preview">
    </div>
  `;
}

/** Returns the theme summary button. */
export function getThemeSummaryTemplate(): string {
  return `
    <button id="summary-theme" class="settings-screen__choice" type="button">
      Choose theme
    </button>
  `;
}

/** Returns a choice line. */
export function getChoiceLineTemplate(): string {
  return `
    <span class="settings-screen__line-wrapper">
      <img
        class="settings-screen__choice-line settings-screen__choice-line--default"
        src="${lineFour}"
        alt="">
    </span>
  `;
}

/** Returns the player summary button. */
export function getPlayerSummaryTemplate(): string {
  return `
    <button id="summary-player" class="settings-screen__choice" type="button">
      Choose player
    </button>
  `;
}

/** Returns the board summary button. */
export function getBoardSummaryTemplate(): string {
  return `
    <button id="summary-board" class="settings-screen__choice" type="button">
      Choose board
    </button>
  `;
}

/** Returns the disabled start button. */
export function getStartButtonTemplate(): string {
  return `
    <button
      id="start-game-button"
      class="settings-screen__start"
      type="button"
      disabled
      aria-disabled="true">
      <img class="settings-screen__start-icon" src="${smartDisplayIcon}" alt="">
      <span>Start</span>
    </button>
  `;
}

/** Returns the settings navigation. */
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

/** Returns the right settings area. */
export function getSettingsRightTemplate(): string {
  return `
    <div class="settings-screen__right">
      ${getThemePreviewTemplate()}
      ${getSettingsNavigationTemplate()}
    </div>
  `;
}

/** Returns the settings panel. */
export function getSettingsPanelTemplate(): string {
  return `
    <section class="settings-screen__panel">
      ${getSettingsLeftTemplate()}
      ${getSettingsRightTemplate()}
    </section>
  `;
}

/** Returns the complete settings template. */
export function settingsTemplate(): string {
  return `
    <main class="settings-screen">
      ${getSettingsPanelTemplate()}
    </main>
  `;
}