import { motion } from "framer-motion";
import { CV_URL, HERO_CONTENT } from "../constants";
import { useState } from "react";

const Hero: React.FC = () => {
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleOpen = () => {
    setIframeLoaded(false);
    setShowPdfPreview(true);
  };

  const handleClose = () => {
    setShowPdfPreview(false);
    setIframeLoaded(false);
  };

  return (
    <div className="pt-16 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-white via-violet-100 to-violet-400 bg-clip-text text-transparent"
      >
        Daniel Ortiz
      </motion.h1>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-base text-violet-300/70 mt-2"
      >
        Computer Science Student
      </motion.p>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-sm text-neutral-400 leading-relaxed mt-4 mb-6"
      >
        {HERO_CONTENT}
      </motion.p>

      <motion.button
        onClick={handleOpen}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        whileTap={{ scale: 0.98, transition: { duration: 0.05 } }}
        className="border border-violet-500/40 rounded text-center py-2 px-5 text-sm font-medium text-violet-300 hover:border-violet-400 hover:text-violet-200 hover:bg-violet-500/5 transition-all duration-200"
      >
        View CV
      </motion.button>

      {showPdfPreview && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClose}
            className="fixed top-4 right-4 py-2 px-5 rounded border border-neutral-700 text-sm font-medium text-neutral-300 hover:border-neutral-400 hover:text-white transition-colors duration-200 z-[60]"
          >
            Cerrar
          </motion.button>
          <div className="w-full max-w-3xl flex flex-col relative h-[90vh]">
            <div className="w-full h-full relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-8 h-8 border-2 border-neutral-600 border-t-violet-400 rounded-full animate-spin" />
                  <span className="text-sm text-neutral-400">Cargando CV...</span>
                </div>
              )}
              <iframe
                src={CV_URL}
                className="w-full h-full rounded-lg"
                title="CV Daniel Ortiz"
                allow="autoplay"
                onLoad={() => setIframeLoaded(true)}
                style={{
                  opacity: iframeLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
