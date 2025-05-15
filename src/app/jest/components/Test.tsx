"use client";

import { useTheme } from "../context/ThemeContext";

export const Test = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p data-testid="theme-text">{theme}</p>
      <button onClick={() => toggleTheme()} data-testid="toggle-button">
        テーマ切替
      </button>
    </div>
  );
};
