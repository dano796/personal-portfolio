import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import LocalStatus from "./LocalStatus";
import { LANGUAGES, useLanguage } from "../i18n/context";
import { NAV_ITEMS, UI } from "../i18n/ui";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const active = document.activeElement;
      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        (active instanceof HTMLElement && active.isContentEditable)
      ) {
        return;
      }

      const pressed = event.key.toLowerCase();

      if (pressed === UI.language.key) {
        const next = LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length];
        setLanguage(next);
        return;
      }

      // Shortcuts are localised with their labels, so match against the keys
      // currently on screen rather than the English set.
      const match = NAV_ITEMS.find((item) => t(item.key) === pressed);
      if (match) navigate(match.to);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, language, setLanguage, t]);

  // Baseline (not center) alignment: the status readout is a smaller font than
  // the links, so centering their boxes would leave its text sitting high.
  // Wrapping matters once Spanish is in play: its labels are long enough that
  // the links, the toggle and the readout no longer share a line on a phone.
  return (
    <nav className="mb-12 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-3 text-sm">
      <div className="flex gap-3 sm:gap-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-accent ${
                isActive ? "text-accent" : "text-fg"
              }`
            }
          >
            <span className="hidden text-gray-600 sm:inline">[{t(item.key)}] </span>
            {t(item.label)}
          </NavLink>
        ))}
      </div>

      <div className="ml-auto flex items-baseline gap-3 sm:gap-4">
        <LanguageToggle />
        <LocalStatus />
      </div>
    </nav>
  );
};

export default Navbar;
