import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ZigZag({ flip = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10%' });

  const pts = '0,35 100,10 200,35 300,10 400,35 500,10 600,35 700,10 800,35 900,10 1000,35 1100,10 1200,35 1280,16';

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{ height: 50, transform: flip ? 'scaleY(-1)' : 'none' }}
    >
      <svg viewBox="0 0 1280 45" preserveAspectRatio="none" className="w-full h-full">
        <polyline points={pts} fill="none" stroke="#E5E5E5" strokeWidth="1.5" />
        <motion.polyline
          points={pts}
          fill="none"
          stroke="#FF0000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="80 1600"
          initial={{ strokeDashoffset: 1600 }}
          animate={inView ? { strokeDashoffset: -200 } : { strokeDashoffset: 1600 }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.8 }}
        />
      </svg>
    </div>
  );
}
