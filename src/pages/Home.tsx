import Header from "../components/Header";
import SectionList from "../components/SectionList";
import Links from "../components/Links";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PROJECTS } from "../constants";
import { UI } from "../i18n/ui";

const Home: React.FC = () => (
  <>
    <Header />

    <SectionList
      title={UI.sections.projects}
      items={PROJECTS.slice(0, 3)}
      viewAllHref="/projects"
      viewAllText={UI.viewAll.projects}
    />

    <SectionList
      title={UI.sections.work}
      items={EXPERIENCE.slice(0, 3)}
      viewAllHref="/work"
      viewAllText={UI.viewAll.work}
    />

    {/* Only the degree — this section lives here alone, with no page of its
        own, so the school entries never render. */}
    <SectionList title={UI.sections.education} items={EDUCATION.slice(0, 1)} />

    <SectionList
      title={UI.sections.certifications}
      items={CERTIFICATIONS.slice(0, 2)}
      viewAllHref="/certifications"
      viewAllText={UI.viewAll.certifications}
    />

    <Links />
  </>
);

export default Home;
