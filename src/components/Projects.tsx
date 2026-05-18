import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../constants";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  return (
    <div className="pb-10">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="text-sm uppercase tracking-widest text-violet-400/60 mt-14 font-semibold"
      >
        Projects
      </motion.p>

      <div>
        {[...PROJECTS].reverse().map((project: ProjectItem, index: number) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
          >
            <div
              className={`flex gap-8 py-8 items-start group ${index > 0 ? "border-t border-neutral-800/50" : ""}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-28 h-28 rounded object-cover flex-shrink-0 ring-1 ring-neutral-800 group-hover:ring-violet-500/30 transition-all duration-300"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start gap-2">
                  <h6 className="text-neutral-100 text-base font-semibold leading-snug group-hover:text-violet-100 transition-colors duration-200">
                    {project.title}
                  </h6>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-violet-400 transition-colors duration-200 mt-0.5 flex-shrink-0"
                  >
                    <FiExternalLink size={14} />
                  </motion.a>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mt-1.5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-violet-300/70 border border-violet-500/20 bg-violet-500/5 rounded-full px-2.5 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
