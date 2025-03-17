import { motion } from "framer-motion";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

const Technologies: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium text-neutral-300"
      >
        Technologies
      </motion.h2>

      {/* Frontend Section */}
      <div className="mb-12">
        <motion.h3
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl mb-6 font-medium text-neutral-300"
        >
          Frontend
        </motion.h3>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(3.25)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(4.25)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.75)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Backend Section */}
      <div className="mb-12">
        <motion.h3
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl mb-6 font-medium text-neutral-300"
        >
          Backend
        </motion.h3>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(3.5)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/devicon/icons/java/java-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/devicon/icons/csharp/csharp-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/devicon/icons/python/python-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(4.25)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Tools Section */}
      <div>
        <motion.h3
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl mb-6 font-medium text-neutral-300"
        >
          Tools
        </motion.h3>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(3.25)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/devicon/icons/git/git-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.75)}
            whileHover={{ scale: 1.1 }}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              className="w-16 h-16"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
