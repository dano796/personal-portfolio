import { motion } from "framer-motion";

// Interfaz para un ícono
interface TechnologyIcon {
  src: string;
  duration: number;
}

// Interfaz para una sección de tecnologías (multiples íconos)
interface TechnologySection {
  title: string;
  direction: number;
  icons: TechnologyIcon[];
}

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

const technologySections: TechnologySection[] = [
  {
    title: "Frontend",
    direction: 100,
    icons: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        duration: 3.25,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        duration: 3.25,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        duration: 4.25,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        duration: 2.75,
      },
    ],
  },
  {
    title: "Backend",
    direction: -100,
    icons: [
      {
        src: "https://cdn.jsdelivr.net/npm/devicon/icons/java/java-original.svg",
        duration: 3.5,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon/icons/csharp/csharp-original.svg",
        duration: 4,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon/icons/python/python-original.svg",
        duration: 3.5,
      },
      /*
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        duration: 3.5,
      },*/
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        duration: 4.25,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        duration: 4.25,
      },
    ],
  },
  {
    title: "Tools",
    direction: 100,
    icons: [
      {
        src: "https://cdn.jsdelivr.net/npm/devicon/icons/git/git-original.svg",
        duration: 3.25,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        duration: 2.75,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
        duration: 3.5,
      },
    ],
  },
];

// Componente para un ícono
const TechnologyIcon: React.FC<{ icon: TechnologyIcon }> = ({ icon }) => (
  <motion.div
    variants={iconVariants(icon.duration)}
    whileHover={{ scale: 1.1 }}
    initial="initial"
    animate="animate"
    className="p-4"
  >
    <img src={icon.src} className="w-14 h-14" alt="Technology Icon" />
  </motion.div>
);

// Componente para una sección de tecnologías
const TechnologySection: React.FC<{ section: TechnologySection }> = ({
  section,
}) => (
  <div className="mb-12">
    <motion.h3
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, x: section.direction }}
      transition={{ duration: 0.5 }}
      className="text-center text-xl mb-6 font-medium text-neutral-300"
    >
      {section.title}
    </motion.h3>
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, x: section.direction }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      {section.icons.map((icon, index) => (
        <TechnologyIcon key={index} icon={icon} />
      ))}
    </motion.div>
  </div>
);

// Componente principal
const Technologies: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium text-neutral-300"
      >
        Technologies
      </motion.h2>

      {technologySections.map((section, index) => (
        <TechnologySection key={index} section={section} />
      ))}
    </div>
  );
};

export default Technologies;
