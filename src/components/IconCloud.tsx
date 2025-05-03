/*
import React, { useEffect, useState } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";
import { motion } from "framer-motion";

const iconSlugs = [
  // Frontend
  "javascript",
  "typescript",
  "react",
  "tailwindcss",

  // Backend
  // "java",
  // "csharp",
  "python",
  "nodedotjs",
  "mysql",
  // "microsoftsqlserver",

  // Tools
  "git",
  "figma",

  // Additional icons
  "css3",
  "html5",
  "github",
  "aws",
  "vercel",
  "vscode",
  "vite",
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
        })
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
      className="flex justify-center items-center w-full"
    >
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center">
        {icons ? (
          <Cloud
            options={{
              depth: 0.5,
              imageScale: 1,
              bgColor: "transparent",
              activeCursor: "default",
              noSelect: true,
              outlineMethod: "none",
              zoomMax: 1.1,
              zoomMin: 0.9,
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
            Loading...
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default IconCloud;
*/
