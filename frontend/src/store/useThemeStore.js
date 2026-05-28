import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("loom-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("loom-theme", theme);
    set({ theme });
  },
}));
