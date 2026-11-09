"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "dark" ? "dark" : "light";

    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function selectTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      <button
        className="theme-switch-button"
        type="button"
        aria-label="Use light mode"
        title="Light mode"
        onClick={() => selectTheme("light")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      </button>
      <button
        className="theme-switch-button"
        type="button"
        aria-label="Use night mode"
        title="Night mode"
        onClick={() => selectTheme("dark")}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
        </svg>
      </button>
    </div>
  );
}
