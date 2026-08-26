import { useCallback, useEffect, useMemo, useState } from "react";
import {
  LanguageContext,
  type Language,
  type Text,
} from "./context";

const STORAGE_KEY = "language";

const isLanguage = (value: unknown): value is Language =>
  value === "en" || value === "es";

/**
 * A stored choice wins; otherwise fall back to the browser's preference. Read
 * lazily rather than in an effect so the first paint is already correct and
 * Spanish visitors never see a flash of English.
 */
const initialLanguage = (): Language => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // Private mode or blocked storage: fall through to the browser preference.
  }

  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    // Keeps screen readers and browser translation prompts in step with what
    // is actually on screen.
    document.documentElement.lang = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Not persisting is survivable; the toggle still works for this visit.
    }
  }, [language]);

  const t = useCallback(
    (text: Text) => (typeof text === "string" ? text : text[language]),
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export default LanguageProvider;
