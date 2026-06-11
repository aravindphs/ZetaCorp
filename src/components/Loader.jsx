import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 600);
    }, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/logo.svg" alt="ZetaCorp Solutions" style={{ height: 'clamp(32px, 6vw, 52px)', width: 'auto' }} />
          </motion.div>

          <motion.div
            className="h-[2px] bg-[#FF0000] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="mt-4 text-[10px] tracking-[0.22em] text-[#6B7280] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          >
            Innovate · Market · Dominate
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
