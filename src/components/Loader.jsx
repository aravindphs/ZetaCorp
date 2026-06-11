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

  const letters = 'ZETACORP'.split('');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="flex items-end gap-0.5 mb-5">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className="grotesk font-bold tracking-tight select-none"
                style={{ fontSize: 'clamp(2.8rem,8vw,4.5rem)', color: l === 'Z' ? '#FF0000' : '#111111' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.span>
            ))}
          </div>

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
