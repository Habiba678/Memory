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
  
  const themeBackgrounds: Record<string, string> = {
    code: "#303131",
    gaming: "#1e7f97",
    da: "#c7eef6",
  };
  
  function updatePreviewClass(value: string): void {
    const preview = document.getElementById("theme-preview");
  
    preview?.classList.remove(
      "settings-screen__preview--code",
      "settings-screen__preview--gaming",
      "settings-screen__preview--da"
    );
  
    preview?.classList.add(`settings-screen__preview--${value}`);
  }
  
  function updateTheme(value: string): void {
    const preview = document.getElementById("theme-preview") as HTMLImageElement | null;
    const previewBox = document.getElementById("theme-preview-box");
    const summary = document.getElementById("summary-theme");
  
    if (preview) {
      preview.src = themeImages[value];
      updatePreviewClass(value);
    }
  
    if (previewBox) {
      previewBox.style.backgroundColor = themeBackgrounds[value];
    }
  
    if (summary) {
      summary.textContent = themeLabels[value];
    }
  }
  
  function updatePlayer(value: string): void {
    const summary = document.getElementById("summary-player");
    const playerName = value.charAt(0).toUpperCase() + value.slice(1);
  
    if (summary) {
      summary.textContent = `${playerName} Player`;
    }
  }
  
  function updateBoard(value: string): void {
    const summary = document.getElementById("summary-board");
  
    if (summary) {
      summary.textContent = `Board-${value} Cards`;
    }
  }
  
  function addThemeListeners(): void {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[name="theme"]');
  
    inputs.forEach((input) => {
      input.addEventListener("change", () => updateTheme(input.value));
    });
  }
  
  function addPlayerListeners(): void {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[name="player"]');
  
    inputs.forEach((input) => {
      input.addEventListener("change", () => updatePlayer(input.value));
    });
  }
  
  function addBoardListeners(): void {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[name="board"]');
  
    inputs.forEach((input) => {
      input.addEventListener("change", () => updateBoard(input.value));
    });
  }
  
  export function initSettings(): void {
    addThemeListeners();
    addPlayerListeners();
    addBoardListeners();
  
    updateTheme("code");
    updatePlayer("blue");
    updateBoard("16");
  }