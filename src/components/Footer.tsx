import { COPYRIGHT, INSPIRATION } from "../constants";
import { useLanguage } from "../i18n/context";
import { UI } from "../i18n/ui";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col gap-2 border-t border-neutral-800 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
      <span>{COPYRIGHT}</span>

      <span>
        {t(UI.footer.inspiredBy)}{" "}
        <a
          href={INSPIRATION.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-accent"
        >
          {INSPIRATION.label}
        </a>
      </span>
    </footer>
  );
};

export default Footer;
