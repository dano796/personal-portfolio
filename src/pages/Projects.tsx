import SectionList from "../components/SectionList";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => (
  <>
    <h1 className="mb-12 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
      <span className="mr-3 text-accent">*</span>
      projects
    </h1>

    <SectionList items={PROJECTS} showImages showBorder={false} />
  </>
);

export default Projects;
