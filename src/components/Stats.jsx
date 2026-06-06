import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { suffix: '+',  num: 50,  isFloat: false, label: 'Happy Clients' },
  { suffix: 'x',  num: 3.2, isFloat: true,  label: 'Average ROI Delivered' },
  { suffix: '',   num: 8,   isFloat: false,  label: 'Industries Served' },
];

function CountUp({ target, suffix, isFloat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const interval = 1600 / steps;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, isFloat]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20" style={{ background: '#1A0305' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-10 md:py-6 px-6 text-center"
            >
              <CountUp target={s.num} suffix={s.suffix} isFloat={s.isFloat} />
              <p className="mt-2 text-sm tracking-wide uppercase" style={{ color: '#A0A0A0' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
