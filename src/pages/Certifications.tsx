import SectionList from "../components/SectionList";
import { CERTIFICATIONS } from "../constants";

const Certifications: React.FC = () => (
  <>
    <h1 className="mb-12 flex items-center animate-fade-in text-4xl font-semibold tracking-tight text-white">
      <span className="mr-3 text-accent">*</span>
      certifications
    </h1>

    <SectionList items={CERTIFICATIONS} showBorder={false} />
  </>
);

export default Certifications;
