import { motion } from "framer-motion";
import aboutImg from "../assets/aboutAnimation.svg";
import { ABOUT_TEXT } from "../constants";

const About: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium"
      >
        About
        <motion.span
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text tracking-tight text-transparent font-semibold"
        >
          {" "}
          Me
        </motion.span>
      </motion.h2>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex item-center justify-center">
            <motion.img
              whileHover={{ scale: 1.015 }}
              className="rounded-2xl w-4/5 -my-16 pb-12"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 text-[17px] max-w-xl py-6 tracking-normal whitespace-pre-line">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
