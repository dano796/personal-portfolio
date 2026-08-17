import { FiArrowUpRight } from "react-icons/fi";
import { LINKS } from "../constants";

const Links: React.FC = () => (
  <section className="mb-12 animate-fade-in-up border-t border-neutral-800 pt-10">
    <h2 className="mb-6 flex items-center text-2xl font-semibold text-white">
      <span className="mr-2 text-accent">*</span>
      links
    </h2>

    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 transition-colors duration-200 hover:text-accent"
        >
          {link.label}
          <FiArrowUpRight className="h-4 w-4 text-gray-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </a>
      ))}
    </div>
  </section>
);

export default Links;
