import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants";

const About: React.FC = () => {
  return (
    <div id="about" className="pb-10">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="text-sm uppercase tracking-widest text-violet-400/60 mb-6 mt-14 font-semibold"
      >
        About
      </motion.p>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line"
      >
        {ABOUT_TEXT}
      </motion.p>
    </div>
  );
};

export default About;
