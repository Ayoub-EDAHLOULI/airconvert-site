"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "airconvert-site-theme";

// Inline so it runs during HTML parsing, before first paint. With no saved
// choice the CSS already follows the OS theme; this applies a saved choice
// that differs from it (e.g. dark picked on a light-mode OS).
const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.getItem("${STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();`;

function applyStoredTheme() {
  let theme: string;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
  } catch {
    return;
  }
  document.documentElement.dataset.theme = theme;
}

const noopSubscribe = () => () => {};

// <html> lives in app/[lang]/layout.tsx, so switching language remounts the
// whole document on the client. Two consequences handled here:
// - React won't create (or run) a <script> on the client, and warns if asked
//   to — so the inline script is only rendered for the server HTML and
//   hydration, never on a client-side remount.
// - React clears <html>'s attributes when it remounts it, dropping
//   data-theme — so it's re-applied in a layout effect, before paint.
export default function ThemeScript() {
  const isServerHtml = useSyncExternalStore(
    noopSubscribe,
    () => false,
    () => true,
  );

  useLayoutEffect(applyStoredTheme, []);

  return isServerHtml ? (
    <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
  ) : null;
}
