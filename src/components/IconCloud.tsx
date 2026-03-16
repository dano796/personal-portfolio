import React, { useEffect, useState } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";
import { motion } from "framer-motion";

// Created using https://github.com/teaguestockwell/react-icon-cloud.git

const iconSlugs = [
  "javascript",
  "typescript",
  // "java",
  // "csharp",
  "python",
  "sql",
  "postgresql",
  "mysql",
  "supabase",
  // "microsoftsqlserver",
  "express",
  "react",
  "angular",
  "tailwindcss",
  "git",
  "github",
  "figma",
  "trello",
  "html5",
  "css3",
  "docker",
  // "aws",
  "pandas",
  "numpy",
  "scikit-learn",
];

const IconCloud: React.FC = () => {
  const [icons, setIcons] = useState<React.JSX.Element[] | null>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then((res) => {
      const iconElements = Object.values(res.simpleIcons).map((icon) =>
        renderSimpleIcon({
          icon,
          size: 96,
          aProps: {
            onClick: (e) => e.preventDefault(),
          },
        }),
      );
      setIcons(iconElements);
    });
  }, []);

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-800 pb-4 flex flex-col justify-center items-center w-full"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-5 text-center text-4xl font-medium text-neutral-300"
      >
        Technologies
      </motion.h2>
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center">
        {icons ? (
          <Cloud
            options={{
              depth: 0.5,
              imageScale: 1,
              bgColor: "transparent",
              activeCursor: "grab",
              noSelect: false,
              outlineMethod: "none",
              dragControl: true,
              dragThreshold: 15,
              initial: [0.1, -0.1],
              freezeActive: false,
              maxSpeed: 0.01,
              minSpeed: 0.005,
              decel: 0.95,
              wheelZoom: false,
            }}
          >
            {icons}
          </Cloud>
        ) : (
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-purple-400 text-xl"
          >
            Loading Icon Cloud...
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default IconCloud;
