import Header from "../components/Header";
import SectionList from "../components/SectionList";
import Links from "../components/Links";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PROJECTS } from "../constants";

const Home: React.FC = () => (
  <>
    <Header />

    <SectionList
      title="projects"
      items={PROJECTS.slice(0, 3)}
      viewAllHref="/projects"
      viewAllText="all projects"
    />

    <SectionList
      title="work"
      items={EXPERIENCE.slice(0, 3)}
      viewAllHref="/work"
      viewAllText="all work"
    />

    {/* Only the degree — this section lives here alone, with no page of its
        own, so the school entries never render. */}
    <SectionList title="education" items={EDUCATION.slice(0, 1)} />

    <SectionList
      title="certifications"
      items={CERTIFICATIONS.slice(0, 2)}
      viewAllHref="/certifications"
      viewAllText="all certifications"
    />

    <Links />
  </>
);

export default Home;
