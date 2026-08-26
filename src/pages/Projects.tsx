import SectionList from "../components/SectionList";
import { PROJECTS } from "../constants";
import { useLanguage } from "../i18n/context";
import { UI } from "../i18n/ui";

const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="mb-12 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
        <span className="mr-3 text-accent">*</span>
        {t(UI.sections.projects)}
      </h1>

      <SectionList items={PROJECTS} showImages showBorder={false} />
    </>
  );
};

export default Projects;
