import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const Hero: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.35 }}
              className="pb-12 text-6xl tracking-tight lg:mt-12 lg:text-8xl font-semibold"
            >
              Daniel Ortiz
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-4xl tracking-tight text-transparent font-semibold"
            >
              Computer Science Student
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.45 }}
              className="text-[17px] my-2 py-6 tracking-normal"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="https://drive.google.com/file/d/1YfEtKCYTyscA13m6lkctGl6aF-JKtcs2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                transition: { duration: 0.05 },
                scale: 1.05,
              }}
              whileTap={{
                transition: { duration: 0 },
                scale: 0.95,
              }}
              className="border-2 border-neutral-400 rounded-full text-center py-2.5 px-6 mb-7 text-lg font-semibold text-neutral-300"
            >
              View CV
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl w-4/5 mb-4 mt-3 scale-90"
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                transition: { duration: 0.05 },
                scale: 1.015,
              }}
              src={"https://i.postimg.cc/HskzthMh/daniel-Ortiz-Profile.png"}
              alt="Ilustración de Daniel Ortiz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
