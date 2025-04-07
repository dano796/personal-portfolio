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
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project: ProjectItem, index: number) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <motion.img
                whileHover={{
                  transition: { duration: 0.05 },
                  scale: 1.1,
                }}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-2xl"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex items-center">
                <h6 className="mb-2 text-[17px] font-semibold">
                  {project.title}
                </h6>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-500 hover:underline"
                >
                  <FiExternalLink size={18} className="mb-2" />
                </motion.a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mt-4">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500 mb-5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
