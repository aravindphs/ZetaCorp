import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const testimonials = [
  {
    quote: "ZetaCorp transformed our Instagram from a dead page to an engaged community. Their content strategy actually understands our audience — it's not generic.",
    name: 'Priya K.', company: 'Healthcare Startup, Coimbatore', initials: 'PK',
  },
  {
    quote: "The paid ads team at ZetaCorp delivered real numbers in the first two weeks. No fluff, no excuses — just a 3.8x return on our first campaign.",
    name: 'Rajan M.', company: 'E-commerce Founder', initials: 'RM',
  },
  {
    quote: "From branding to SEO, they handled everything with clarity and speed. We now rank #1 on Google for our key service in Coimbatore.",
    name: 'Anika S.', company: 'D2C Brand Owner', initials: 'AS',
  },
  {
    quote: "What sets ZetaCorp apart is that they think like a co-founder, not a vendor. They're invested in our success the same way we are.",
    name: 'Vikram T.', company: 'Tech Startup Founder', initials: 'VT',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 4000);
  };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  const goTo = (i) => { clearInterval(timerRef.current); setActive(i); startTimer(); };

  return (
    <SectionWrapper id="testimonials" bigText="STORIES" bg="#F4F4F4" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="label-pill mb-4 inline-flex"><span className="dot" /> Client feedback</span>
          <h2 className="grotesk font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#111111' }}>
            What our partners say.
          </h2>
        </motion.div>

        <div className="relative" style={{ minHeight: 280 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-8 sm:p-10 border"
              style={{ borderColor: '#E5E5E5' }}
            >
              <span className="grotesk font-bold text-7xl leading-none block mb-4 select-none" style={{ color: 'rgba(255,0,0,0.2)' }}>"</span>
              <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#2B2B2B' }}>
                {testimonials[active].quote}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold grotesk"
                  style={{ background: '#FF0000', color: '#FFFFFF' }}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="grotesk font-semibold text-sm" style={{ color: '#111111' }}>{testimonials[active].name}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{testimonials[active].company}</p>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF0000">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`cdot ${i === active ? 'active' : ''}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
