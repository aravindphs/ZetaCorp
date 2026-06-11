import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectionWrapper({ id, bigText, bg, darkBg, overlay, children, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const textY = useTransform(scrollYProgress, [0, 1], ['10%', '-16%']);
  const contentY = useTransform(scrollYProgress, [0, 0.14, 0.86, 1], [50, 0, 0, 35]);
  const contentOpac = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0.9]);
  const bigTextColor = darkBg ? 'rgba(255,255,255,0.045)' : 'rgba(17,17,17,0.065)';

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
      {bigText && (
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <motion.span
            aria-hidden="true"
            style={{
              y: textY,
              fontSize: 'clamp(16vw, 22vw, 28vw)',
              color: bigTextColor,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 300,
              lineHeight: 0.85,
              letterSpacing: '-0.03em',
              display: 'block',
              whiteSpace: 'nowrap',
              paddingLeft: '0.05em',
            }}
          >
            {bigText}
          </motion.span>
        </div>
      )}
      <motion.div style={{ y: contentY, opacity: contentOpac }} className="relative z-10">
        {children}
      </motion.div>
      {overlay}
    </section>
  );
}
