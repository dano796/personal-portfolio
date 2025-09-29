import { motion } from "framer-motion";
import { EDUCATION, EducationItem } from "../constants";

const Education: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education: EducationItem, index: number) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-[14px] text-neutral-300">
                {education.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 text-[17px] font-semibold">
                {education.role} -{" "}
                <span className="text-purple-400">{education.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

/*
{education.technologies?.map((tech, index) => (
    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900
        px-2 py-1 text-sm font-medium text-purple-700">{tech}</span>
))}
*/

export default Education;
