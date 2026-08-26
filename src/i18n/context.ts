import { createContext, useContext } from "react";

export type Language = "en" | "es";

export const LANGUAGES: Language[] = ["en", "es"];

/**
 * A user-facing string. Plain strings are language-independent — proper nouns
 * ("Fitally"), tech names ("React") — and stay single-sourced rather than
 * doubling up with an identical Spanish half.
 */
export type Text = string | { en: string; es: string };

export interface LanguageValue {
  language: Language;
  setLanguage: (language: Language) => void;
  /** Resolves a `Text` against the active language. */
  t: (text: Text) => string;
}

export const LanguageContext = createContext<LanguageValue | null>(null);

export const useLanguage = (): LanguageValue => {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
};

/**
 * A language-independent identity for a `Text`, used for React keys so rows
 * are not torn down and rebuilt every time the language changes.
 */
export const textKey = (text: Text): string =>
  typeof text === "string" ? text : text.en;
