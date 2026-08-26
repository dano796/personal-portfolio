import SectionList from "../components/SectionList";
import { CERTIFICATIONS } from "../constants";
import { useLanguage } from "../i18n/context";
import { UI } from "../i18n/ui";

const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="mb-12 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
        <span className="mr-3 text-accent">*</span>
        {t(UI.sections.certifications)}
      </h1>

      <SectionList items={CERTIFICATIONS} showBorder={false} />
    </>
  );
};

export default Certifications;
