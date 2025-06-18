import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants";

const Certifications: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium"
      >
        Certifications
      </motion.h2>
      <div className="flex justify-center">
        <div className="max-w-6xl mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {CERTIFICATIONS.map((certification, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-900/30 rounded-xl p-4 flex flex-col items-center w-full sm:w-80 lg:w-72"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="mb-3">
                  <a
                    href={certification.credlyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={certification.badgeImage}
                      alt={`${certification.title} Badge`}
                      className="w-32 h-32 object-contain rounded-lg"
                    />
                  </a>
                </motion.div>

                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <h3 className="text-[17px] font-semibold">
                      {certification.title}
                    </h3>
                  </div>

                  <p className="text-purple-400 font-medium mt-1">
                    {certification.issuer} - {certification.date}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center">
                    {certification.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded bg-neutral-900 mx-2 px-2 text-sm font-medium text-purple-500 mb-2"
                      >
                        {skill}
                      </span>
                    ))}{" "}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
