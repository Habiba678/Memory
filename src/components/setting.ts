const themeImages: Record<string, string> = {
  code: "/src/assets/imge/code.png",
  gaming: "/src/assets/imge/gaming.png",
  da: "/src/assets/imge/DA.png",
};

const themeLabels: Record<string, string> = {
  code: "Code vibes theme",
  gaming: "Gaming theme",
  da: "DA Projects theme",
};

function isSummaryExpanded(): boolean {
  const choiceNav =
    document.querySelector<HTMLElement>(
      ".settings-screen__choice-nav"
    );

  return (
    choiceNav?.classList.contains(
      "settings-screen__choice-nav--expanded"
    ) ?? false
  );
}

function updatePreviewClass(value: string): void {
  const preview =
    document.getElementById("theme-preview");

  const previewBox =
    document.getElementById("theme-preview-box");

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

function updateTheme(value: string): void {
  const preview =
    document.getElementById(
      "theme-preview"
    ) as HTMLImageElement | null;

  if (preview) {
    preview.src = themeImages[value];
    updatePreviewClass(value);
  }

  if (isSummaryExpanded()) {
    updateSelectedSummary();
  }
}

function updatePlayer(): void {
  if (isSummaryExpanded()) {
    updateSelectedSummary();
  }
}

function updateBoard(): void {
  if (isSummaryExpanded()) {
    updateSelectedSummary();
  }
}

function resetSummary(): void {
  const themeSummary =
    document.getElementById("summary-theme");

  const playerSummary =
    document.getElementById("summary-player");

  const boardSummary =
    document.getElementById("summary-board");

  if (themeSummary) {
    themeSummary.textContent = "Game theme";
  }

  if (playerSummary) {
    playerSummary.textContent = "Player";
  }

  if (boardSummary) {
    boardSummary.textContent = "Board size";
  }
}

function updateSelectedSummary(): void {
  const selectedTheme =
    document.querySelector<HTMLInputElement>(
      'input[name="theme"]:checked'
    )?.value ?? "code";

  const selectedPlayer =
    document.querySelector<HTMLInputElement>(
      'input[name="player"]:checked'
    )?.value ?? "blue";

  const selectedBoard =
    document.querySelector<HTMLInputElement>(
      'input[name="board"]:checked'
    )?.value ?? "16";

  const themeSummary =
    document.getElementById("summary-theme");

  const playerSummary =
    document.getElementById("summary-player");

  const boardSummary =
    document.getElementById("summary-board");

  const playerName =
    selectedPlayer.charAt(0).toUpperCase() +
    selectedPlayer.slice(1);

  if (themeSummary) {
    themeSummary.textContent =
      themeLabels[selectedTheme];
  }

  if (playerSummary) {
    playerSummary.textContent =
      `${playerName} Player`;
  }

  if (boardSummary) {
    boardSummary.textContent =
      `Board-${selectedBoard} Cards`;
  }
}

function toggleChoiceSummary(
  event: MouseEvent
): void {
  const target =
    event.target as HTMLElement;

  if (
    target.closest(
      ".settings-screen__start"
    )
  ) {
    return;
  }

  const choiceNav =
    document.querySelector<HTMLElement>(
      ".settings-screen__choice-nav"
    );

  if (!choiceNav) {
    return;
  }

  const isExpanded =
    choiceNav.classList.toggle(
      "settings-screen__choice-nav--expanded"
    );

  if (isExpanded) {
    updateSelectedSummary();
  } else {
    resetSummary();
  }
}

function addChoiceNavListener(): void {
  const choiceNav =
    document.querySelector<HTMLElement>(
      ".settings-screen__choice-nav"
    );

  choiceNav?.addEventListener(
    "click",
    toggleChoiceSummary
  );
}

function addThemeListeners(): void {
  const inputs =
    document.querySelectorAll<HTMLInputElement>(
      'input[name="theme"]'
    );

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      updateTheme(input.value);
    });
  });
}

function addPlayerListeners(): void {
  const inputs =
    document.querySelectorAll<HTMLInputElement>(
      'input[name="player"]'
    );

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      updatePlayer();
    });
  });
}

function addBoardListeners(): void {
  const inputs =
    document.querySelectorAll<HTMLInputElement>(
      'input[name="board"]'
    );

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      updateBoard();
    });
  });
}

function addStartButtonListener(
  onStart: () => void
): void {
  const startButton =
    document.querySelector<HTMLButtonElement>(
      ".settings-screen__start"
    );

  startButton?.addEventListener("click", () => {
    const selectedTheme =
      document.querySelector<HTMLInputElement>(
        'input[name="theme"]:checked'
      )?.value ?? "code";

    const selectedPlayer =
      document.querySelector<HTMLInputElement>(
        'input[name="player"]:checked'
      )?.value ?? "blue";

    const selectedBoard =
      document.querySelector<HTMLInputElement>(
        'input[name="board"]:checked'
      )?.value ?? "16";

    localStorage.setItem(
      "selectedTheme",
      selectedTheme
    );

    localStorage.setItem(
      "selectedPlayer",
      selectedPlayer
    );

    localStorage.setItem(
      "selectedBoard",
      selectedBoard
    );

    onStart();
  });
}

function restoreSettings(): void {
  const selectedTheme =
    localStorage.getItem("selectedTheme") ??
    "code";

  const selectedPlayer =
    localStorage.getItem("selectedPlayer") ??
    "blue";

  const selectedBoard =
    localStorage.getItem("selectedBoard") ??
    "16";

  const themeInput =
    document.querySelector<HTMLInputElement>(
      `input[name="theme"][value="${selectedTheme}"]`
    );

  const playerInput =
    document.querySelector<HTMLInputElement>(
      `input[name="player"][value="${selectedPlayer}"]`
    );

  const boardInput =
    document.querySelector<HTMLInputElement>(
      `input[name="board"][value="${selectedBoard}"]`
    );

  if (themeInput) {
    themeInput.checked = true;
  }

  if (playerInput) {
    playerInput.checked = true;
  }

  if (boardInput) {
    boardInput.checked = true;
  }

  const preview =
    document.getElementById(
      "theme-preview"
    ) as HTMLImageElement | null;

  if (preview) {
    preview.src =
      themeImages[selectedTheme];
  }

  updatePreviewClass(selectedTheme);
  resetSummary();
}

export function initSettings(
  onStart: () => void
): void {
  addThemeListeners();
  addPlayerListeners();
  addBoardListeners();
  addChoiceNavListener();
  addStartButtonListener(onStart);
  restoreSettings();
}