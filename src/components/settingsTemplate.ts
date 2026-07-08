export function settingsTemplate(): string {
    return `
      <main class="settings-screen">
        <section class="settings-screen__panel">
  
          <div class="settings-screen__left">
            <div class="settings-screen__headline">
              <h1 class="settings-screen__title">Settings</h1>
              <img class="settings-screen__headline-line" src="/src/assets/icon/Line 3.png" alt="">
            </div>
  
            <section class="settings-group">
              <div class="settings-group__title-row">
                <img class="settings-group__icon" src="/src/assets/icon/palette.png" alt="">
                <h2 class="settings-group__title">Game themes</h2>
              </div>
  
              <label class="settings-group__option">
                <input type="radio" name="theme" value="code" checked>
                <span>Code vibes theme</span>
                <img class="settings-group__arrow" src="/src/assets/icon/Line 3 Kopie.png" alt="">
              </label>
  
              <label class="settings-group__option">
                <input type="radio" name="theme" value="gaming">
                <span>Gaming theme</span>
              </label>
  
              <label class="settings-group__option">
                <input type="radio" name="theme" value="da">
                <span>DA Projects theme</span>
              </label>
  
              <label class="settings-group__option">
                <input type="radio" name="theme" value="foods">
                <span>Foods theme</span>
              </label>
            </section>
  
            <section class="settings-group">
              <div class="settings-group__title-row">
                <img class="settings-group__icon" src="/src/assets/icon/chess_pawn.png" alt="">
                <h2 class="settings-group__title">Choose player</h2>
              </div>
  
              <label class="settings-group__option">
                <input type="radio" name="player" value="blue" checked>
                <span>Blue</span>
              </label>
  
              <label class="settings-group__option">
                <input type="radio" name="player" value="orange">
                <span>Orange</span>
              </label>
            </section>
  
            <section class="settings-group">
              <div class="settings-group__title-row">
                <img class="settings-group__icon" src="/src/assets/icon/style.png" alt="">
                <h2 class="settings-group__title">Board size</h2>
              </div>
  
              <label class="settings-group__option">
                <input type="radio" name="board" value="16" checked>
                <span>16 cards</span>
              </label>
  
              <label class="settings-group__option">
                <input type="radio" name="board" value="24">
                <span>24 cards</span>
              </label>
  
              <label class="settings-group__option">
                <input type="radio" name="board" value="36">
                <span>36 cards</span>
              </label>
            </section>
          </div>
  
          <div class="settings-screen__right">
            <img class="settings-screen__preview" src="/src/assets/imge/code.png" alt="Theme preview">
  
            <nav class="settings-screen__choice-nav">
              <button class="settings-screen__choice" type="button">Game theme</button>
              <img class="settings-screen__choice-line" src="/src/assets/icon/Line 6.png" alt="">
  
              <button class="settings-screen__choice" type="button">Player</button>
              <img class="settings-screen__choice-line" src="/src/assets/icon/Line 4.png" alt="">
  
              <button class="settings-screen__choice" type="button">Board size</button>
  
              <button class="settings-screen__start" type="button">
                <img class="settings-screen__start-icon" src="/src/assets/icon/smart_display.png" alt="">
                <span>Start</span>
              </button>
            </nav>
          </div>
  
        </section>
      </main>
    `;
  }