import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Footer: React.FC = () => {
  return (
    <div className="text-white text-center">
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="my-4 mt-16 text-gray-300"
      >
        {CONTACT.address}
      </motion.p>
      <p className="my-8 mb-16 text-gray-300">{CONTACT.copyright}</p>
    </div>
  );
};

export default Footer;
