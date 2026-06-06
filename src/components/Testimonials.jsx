import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    quote: "ZetaCorp transformed our Instagram from a dead page to an engaged community. Their content strategy actually understands our audience.",
    name: 'Priya K.', company: 'Healthcare Startup', initials: 'PK',
  },
  {
    quote: "The paid ads team at ZCS delivered results in the first 2 weeks. No fluff, just numbers.",
    name: 'Rajan M.', company: 'E-commerce Founder', initials: 'RM',
  },
  {
    quote: "From branding to SEO, they handled everything with clarity and speed. Best decision we made.",
    name: 'Anika S.', company: 'D2C Brand', initials: 'AS',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 3500);
  };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setActive(i);
    startTimer();
  };

  return (
    <section id="testimonials" className="py-24 sm:py-28" style={{ background: '#0A0A0A' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="section-heading">What Clients Say</h2>
        </motion.div>

        <div className="relative min-h-72 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8 sm:p-10 w-full"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="bebas text-8xl leading-none mb-4 select-none" style={{ color: 'rgba(232,25,44,0.3)' }}>"</div>
              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_, i) => <FiStar key={i} size={14} fill="#E8192C" color="#E8192C" />)}
              </div>
              <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#D0D0D0' }}>
                {testimonials[active].quote}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold bebas tracking-widest"
                  style={{ background: 'rgba(232,25,44,0.2)', color: '#E8192C', border: '1px solid rgba(232,25,44,0.3)' }}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#F0F0F0' }}>{testimonials[active].name}</p>
                  <p className="text-xs" style={{ color: '#A0A0A0' }}>{testimonials[active].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`carousel-dot ${i === active ? 'active' : ''}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
