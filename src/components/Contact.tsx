import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="pb-10">
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="text-sm uppercase tracking-widest text-violet-400/60 mb-5 mt-12 font-semibold"
      >
        Contact
      </motion.p>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-sm text-neutral-400"
      >
        Feel free to reach out at{" "}
        <a
          href="mailto:ortizdaniel796@gmail.com"
          className="text-violet-300 hover:text-violet-200 underline underline-offset-4 decoration-violet-500/40 hover:decoration-violet-400 transition-colors duration-200"
        >
          ortizdaniel796@gmail.com
        </a>
      </motion.p>
    </div>
  );
};

export default Contact;
