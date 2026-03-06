import en from "./locales/en";
import es from "./locales/es";

export type Locale = "en" | "es";
export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  es
};