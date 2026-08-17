import SectionList from "../components/SectionList";
import { EDUCATION } from "../constants";

const Work: React.FC = () => (
  <>
    <h1 className="mb-12 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
      <span className="mr-3 text-accent">*</span>
      work
    </h1>

    <SectionList items={EDUCATION} showBorder={false} />
  </>
);

export default Work;
