import { useContext } from "react";
import {
  LOCAL_STORAGE_KEY,
  Theme,
  ThemeContext,
  type ThemeType,
} from "./ThemeContext";

interface useThemeReturn {
  theme?: ThemeType;
  toggleTheme: () => void;
}
export const useTheme = (): useThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.BLUE ? Theme.PINK : Theme.BLUE;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
  };

  return {
    toggleTheme,
    theme,
  };
};
