import type { Text } from "./context";

/**
 * Every string the components render themselves. Content strings — bio,
 * project descriptions and the like — live beside their data in `constants`.
 *
 * Prose stays lowercase in both languages; proper nouns keep their casing.
 */
export const UI = {
  sections: {
    projects: { en: "projects", es: "proyectos" },
    work: { en: "work", es: "trabajo" },
    education: { en: "education", es: "educación" },
    certifications: { en: "certifications", es: "certificaciones" },
    links: { en: "links", es: "enlaces" },
  },
  viewAll: {
    projects: { en: "all projects", es: "todos los proyectos" },
    work: { en: "all work", es: "toda la experiencia" },
    certifications: { en: "all certifications", es: "todas las certificaciones" },
  },
  footer: {
    inspiredBy: { en: "design inspired by", es: "diseño inspirado en" },
  },
  notFound: {
    message: { en: "nothing here.", es: "no hay nada aquí." },
    goHome: { en: "go home", es: "volver al inicio" },
  },
  localStatus: {
    title: {
      en: "local time and temperature in Medellín",
      es: "hora y temperatura local en Medellín",
    },
  },
  language: {
    toggle: { en: "switch language", es: "cambiar idioma" },
    /** The shortcut is the same letter in both: [l]anguage, [l]enguaje. */
    key: "l",
  },
} satisfies Record<string, Record<string, Text>>;

/**
 * Shortcut keys are localised alongside the labels so the hint never reads
 * `[h] inicio`. Each language's set must stay collision-free, including
 * against `UI.language.key`.
 */
export const NAV_ITEMS: { key: Text; label: Text; to: string }[] = [
  { key: { en: "h", es: "i" }, label: { en: "home", es: "inicio" }, to: "/" },
  { key: { en: "w", es: "e" }, label: { en: "work", es: "experiencia" }, to: "/work" },
  {
    key: "p",
    label: { en: "projects", es: "proyectos" },
    to: "/projects",
  },
  {
    key: "c",
    // Abbreviated in both languages, mirroring the full heading on the page
    // itself — the navbar has no room for "certificaciones".
    label: { en: "certs", es: "certificaciones" },
    to: "/certifications",
  },
];
