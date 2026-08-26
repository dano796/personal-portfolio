import SectionList from "../components/SectionList";
import { EXPERIENCE } from "../constants";
import { useLanguage } from "../i18n/context";
import { UI } from "../i18n/ui";

const Work: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="mb-12 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
        <span className="mr-3 text-accent">*</span>
        {t(UI.sections.work)}
      </h1>

      <SectionList items={EXPERIENCE} showBorder={false} />
    </>
  );
};

export default Work;
