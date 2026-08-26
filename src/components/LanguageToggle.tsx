import { Fragment } from "react";
import { LANGUAGES, useLanguage } from "../i18n/context";
import { UI } from "../i18n/ui";

/**
 * Renders the choice only. The `[l]` shortcut itself is bound in `Navbar`,
 * which owns every keyboard shortcut on the page.
 */
const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t(UI.language.toggle)}
      className="flex shrink-0 items-baseline"
    >
      <span className="hidden text-gray-600 sm:inline">
        [{UI.language.key}]&nbsp;
      </span>

      {LANGUAGES.map((option, index) => (
        <Fragment key={option}>
          {index > 0 && <span className="px-1 text-gray-600">/</span>}

          <button
            type="button"
            onClick={() => setLanguage(option)}
            aria-pressed={option === language}
            className={`transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:underline ${
              option === language ? "text-accent" : "text-fg"
            }`}
          >
            {option}
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default LanguageToggle;
