import { motion } from "framer-motion";
import { EDUCATION, EducationItem } from "../constants";

const Education: React.FC = () => {
  return (
    <div id="education" className="pb-10">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="text-sm uppercase tracking-widest text-violet-400/60 mb-7 mt-14 font-semibold"
      >
        Education
      </motion.p>

      <div>
        {EDUCATION.map((education: EducationItem, index: number) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="mb-6 pl-5 border-l border-neutral-800 hover:border-violet-500/40 transition-colors duration-300"
          >
            <p className="text-violet-400/40 text-xs mb-1">{education.year}</p>
            <h6 className="text-neutral-100 text-base font-medium leading-snug">
              {education.role}{" "}
              <span className="text-neutral-500 font-normal">
                — {education.company}
              </span>
            </h6>
            <p className="text-neutral-400 text-sm leading-relaxed mt-3">
              {education.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
