import { motion } from 'framer-motion';

const tagline = ['Your Brand.', 'Their Search.', 'Our Science.'];

export default function Hero() {
  const go = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(232,25,44,0.18) 0%, transparent 70%)' }}
      />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-10 w-32 h-32 float-slow" style={{ opacity: 0.1 }} viewBox="0 0 100 100">
          <polygon points="50,5 95,75 5,75" fill="none" stroke="#E8192C" strokeWidth="2" />
        </svg>
        <svg className="absolute top-1/2 right-1/4 w-20 h-20 float-med" style={{ opacity: 0.08 }} viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="#E8192C" strokeWidth="2" transform="rotate(20 50 50)" />
        </svg>
        <svg className="absolute bottom-32 left-1/4 w-40 h-40 float-slow" style={{ opacity: 0.06 }} viewBox="0 0 100 100">
          <polygon points="50,5 95,35 80,85 20,85 5,35" fill="none" stroke="#E8192C" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-1/3 left-10 w-16 h-16 float-med" style={{ opacity: 0.09 }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#E8192C" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-24 h-24 float-slow" style={{ opacity: 0.07 }} viewBox="0 0 100 100">
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#E8192C" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase"
          style={{ borderColor: 'rgba(232,25,44,0.4)', color: '#E8192C', background: 'rgba(232,25,44,0.07)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#E8192C' }} />
          Digital Marketing Agency — Coimbatore, India
        </motion.div>

        {/* Headline */}
        <h1 className="bebas mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 0.95, letterSpacing: '0.02em' }}>
          {tagline.map((word, i) => (
            <motion.span
              key={word}
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: i === 2 ? '#E8192C' : '#F0F0F0' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          style={{ color: '#A0A0A0' }}
        >
          ZetaCorp Solutions helps brands in India and beyond dominate their markets through data-driven digital marketing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => go('#contact')}
            className="px-7 py-3.5 rounded-md text-white font-semibold text-sm transition-all duration-300"
            style={{ background: '#E8192C' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(232,25,44,0.5)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
          >
            Start a Project →
          </button>
          <button
            onClick={() => go('#case-studies')}
            className="px-7 py-3.5 rounded-md font-semibold text-sm transition-all duration-300"
            style={{ border: '1.5px solid rgba(232,25,44,0.6)', color: '#E8192C', background: 'transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(232,25,44,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            See Our Work
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: '#444' }}>Scroll</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <motion.div
              className="w-full absolute top-0"
              style={{ height: '50%', background: '#E8192C' }}
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
