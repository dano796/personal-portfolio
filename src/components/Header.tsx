import { BIO, NAME, SUBTITLE } from "../constants";
import { useLanguage } from "../i18n/context";

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="mb-16 space-y-4">
      <h1 className="animate-fade-in text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {NAME}
      </h1>

      <p className="animate-fade-in text-gray-500">{t(SUBTITLE)}</p>

      <p className="max-w-[52ch] animate-fade-in-up text-pretty leading-relaxed">
        {t(BIO)}
      </p>
    </header>
  );
};

export default Header;
