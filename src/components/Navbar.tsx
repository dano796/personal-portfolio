import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <nav className="mb-5 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-12"
          src={"https://i.postimg.cc/x8KgqXXJ/daniel-Ortiz-Logo.png"}
          alt=""
        />
      </div>
      <div className="m-8 mr-0 flex items-center justify-center gap-4 text-2xl text-neutral-100">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/daniel-ortiza/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-300 active:text-neutral-400"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/dano796"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-300 active:text-neutral-400"
        >
          <FaGithub />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
