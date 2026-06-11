import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const stats = [
  { num: 50,  suffix: '+',  isFloat: false, label: 'Brands Grown',          sub: 'Across industries in India' },
  { num: 3.2, suffix: '×',  isFloat: true,  label: 'Average ROI',           sub: 'Return on ad spend' },
  { num: 8,   suffix: '',   isFloat: false, label: 'Industries Served',     sub: 'From healthcare to fashion' },
  { num: 4,   suffix: '+',  isFloat: false, label: 'Years Experience',      sub: 'In digital marketing' },
];

function CountUp({ target, suffix, isFloat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 55;
    const step = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      setCount(isFloat ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
    }, 1400 / steps);
    return () => clearInterval(t);
  }, [inView, target, isFloat]);

  return (
    <span ref={ref} className="grotesk font-bold" style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', color: '#FF0000' }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <SectionWrapper bigText="NUMBERS" bg="#2B2B2B" darkBg className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center py-12 px-6"
              style={{ background: '#2B2B2B' }}
            >
              <CountUp target={s.num} suffix={s.suffix} isFloat={s.isFloat} />
              <p className="grotesk font-semibold text-sm mt-2 text-white">{s.label}</p>
              <p className="text-xs mt-1" style={{ color: '#999999' }}>{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
