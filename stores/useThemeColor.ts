import { create } from "zustand";

interface ThemeColorStore {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const THEME_COLOR_KEY = "theme-color";

export const useThemeColor = create<ThemeColorStore>((set) => {
  // On first load, get theme from localStorage (defaults to theme-blue)
  let initialTheme = "theme-blue";

  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(THEME_COLOR_KEY);
    if (stored) {
      initialTheme = stored;

      // Apply theme class immediately on load
      const existingThemes = Array.from(document.body.classList).filter((c) =>
        c.startsWith("theme-")
      );
      existingThemes.forEach((c) => document.body.classList.remove(c));
      document.body.classList.add(initialTheme);
    }
  }

  return {
    themeColor: initialTheme,

    setThemeColor: (color: string) => {
      // Update DOM
      if (typeof document !== "undefined") {
        const existingThemes = Array.from(document.body.classList).filter((c) =>
          c.startsWith("theme-")
        );
        existingThemes.forEach((c) => document.body.classList.remove(c));
        document.body.classList.add(color);
      }

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(THEME_COLOR_KEY, color);
      }

      // Update state
      set({ themeColor: color });
    },
  };
});
