import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WA = 'https://wa.me/918148634409?text=Hi%20ZetaCorp!%20I%27d%20like%20a%20free%20digital%20audit%20for%20my%20brand.';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y      = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opac   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.35,
        }}
      />
      {/* Radial white fade over grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 100%)' }}
      />

      <motion.div
        style={{ y, opacity: opac }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-28 pb-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.span {...fadeUp(0.1)} className="label-pill mb-6 inline-flex">
              <span className="dot" /> Growth Partners · Coimbatore
            </motion.span>

            <h1
              className="grotesk font-bold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#111111' }}
            >
              {[
                { text: 'We don\'t run', red: false },
                { text: 'campaigns.', red: false },
                { text: 'We build your', red: false },
                { text: 'growth engine.', red: true },
              ].map(({ text, red }, i) => (
                <motion.span
                  key={i}
                  className="block"
                  {...fadeUp(0.2 + i * 0.12)}
                  style={{ color: red ? '#FF0000' : '#111111' }}
                >
                  {text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              {...fadeUp(0.68)}
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#6B7280' }}
            >
              ZetaCorp Solutions is your dedicated digital growth partner in Coimbatore. We combine strategy, content, and data to turn your brand into a market leader.
            </motion.p>

            <motion.div {...fadeUp(0.8)} className="flex flex-wrap gap-4">
              <a
                href={WA}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#FF3B3B] text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors no-underline"
              >
                Get a Free Audit →
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors no-underline border"
                style={{ borderColor: '#E5E5E5', color: '#2B2B2B', background: 'transparent' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#FF0000'; e.currentTarget.style.color = '#FF0000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.color = '#2B2B2B'; }}
              >
                See Our Work
              </a>
            </motion.div>
          </div>

          {/* Right — animated metrics card stack */}
          <motion.div
            {...fadeUp(0.5)}
            className="hidden lg:flex flex-col gap-4 items-end"
          >
            {/* Big metric */}
            <motion.div
              className="bg-white border rounded-2xl px-8 py-7 shadow-lg w-72"
              style={{ borderColor: '#E5E5E5' }}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#6B7280' }}>Average ROI</p>
              <p className="grotesk font-bold text-5xl" style={{ color: '#FF0000' }}>3.2×</p>
              <p className="text-sm mt-1" style={{ color: '#6B7280' }}>return on ad spend across all clients</p>
            </motion.div>

            <div className="flex gap-4 w-full justify-end">
              <motion.div
                className="bg-[#111111] rounded-2xl px-6 py-5 shadow-lg w-36"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <p className="grotesk font-bold text-3xl text-white">50+</p>
                <p className="text-xs mt-1" style={{ color: '#999' }}>Brands grown</p>
              </motion.div>
              <motion.div
                className="bg-[#FF0000] rounded-2xl px-6 py-5 shadow-lg w-36"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <p className="grotesk font-bold text-3xl text-white">8</p>
                <p className="text-xs mt-1 text-white/80">Industries</p>
              </motion.div>
            </div>

            {/* Tagline card */}
            <motion.div
              className="border rounded-xl px-6 py-4 w-72 flex items-center gap-3"
              style={{ borderColor: '#E5E5E5', background: '#F4F4F4' }}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#FF0000' }} />
              <p className="text-sm font-medium" style={{ color: '#2B2B2B' }}>
                "We treat your brand like our own."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: '#AAAAAA' }}>Scroll</span>
          <div className="w-px h-10 relative overflow-hidden" style={{ background: '#E5E5E5' }}>
            <motion.div
              className="w-full absolute"
              style={{ height: '40%', background: '#FF0000' }}
              animate={{ top: ['-40%', '140%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
