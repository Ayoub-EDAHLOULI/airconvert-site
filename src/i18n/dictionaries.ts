import "server-only";
import type { Locale } from "./config";
import { DEFAULT_LOCALE, isLocale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  ar: () => import("./dictionaries/ar").then((m) => m.default),
  zh: () => import("./dictionaries/zh").then((m) => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const lang = isLocale(locale) ? locale : DEFAULT_LOCALE;
  return dictionaries[lang]();
}
