import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../constants";
import { useState } from "react";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <div className="border-b border-neutral-800 pb-4">
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
                  transition: { duration: 0.1 },
                  scale: 1.1,
                }}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-2xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
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

      {/* Maximizar imagen al hacer clic con información */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-lg max-w-full max-h-[90vh] object-contain"
            />
            {/* Overlay solo nombre y stack */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-6 rounded-b-lg">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold mr-2">
                  {selectedProject.title}
                </h3>
              </div>
              <div className="flex flex-wrap">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mb-2 rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
