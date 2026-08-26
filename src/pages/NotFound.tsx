import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { UI } from "../i18n/ui";

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="mb-4 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
        <span className="mr-3 text-accent">*</span>
        404
      </h1>

      <p className="animate-fade-in-up">
        {t(UI.notFound.message)}{" "}
        <Link to="/" className="text-accent hover:underline">
          {t(UI.notFound.goHome)}
        </Link>
        .
      </p>
    </>
  );
};

export default NotFound;
