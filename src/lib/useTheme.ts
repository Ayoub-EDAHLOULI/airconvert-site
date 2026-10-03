"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "airconvert-site-theme";

// The inline script in layout.tsx already sets the correct data-theme
// attribute on <html> before hydration (avoiding a flash of the wrong theme). We read
// that attribute back via useSyncExternalStore rather than recomputing the
// theme in an effect: it gives a consistent server/client snapshot without
// the extra render a manual "mounted" useState + effect would cause.
function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore — remembering the choice is a convenience, not essential.
    }
  }, [theme]);

  return { theme, toggleTheme };
}
