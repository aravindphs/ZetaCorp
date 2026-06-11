import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WA = 'https://wa.me/918148634409?text=Hi%20ZetaCorp!%20I%27d%20like%20a%20free%20digital%20audit%20for%20my%20brand.';

function Blob({ style, animate, delay, duration = 12 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ filter: 'blur(110px)', ...style }}
      animate={animate}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay, repeatType: 'mirror' }}
    />
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const headY  = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opac   = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const up = (delay) => ({
    initial:    { opacity: 0, y: 26 },
    animate:    { opacity: 1, y: 0 },
    transition: { delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden flex flex-col"
      style={{ background: '#0A0A0A', minHeight: '100svh' }}
    >
      {/* ── Background blobs ── */}
      <div className="absolute inset-0 overflow-hidden">
        <Blob
          style={{ width: 780, height: 780, left: '-18%', top: '-30%', background: 'radial-gradient(circle, rgba(255,0,0,0.55) 0%, transparent 62%)' }}
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }} delay={0} duration={13}
        />
        <Blob
          style={{ width: 640, height: 640, right: '-14%', bottom: '-20%', background: 'radial-gradient(circle, rgba(190,0,0,0.48) 0%, transparent 62%)' }}
          animate={{ x: [0, -60, 30, 0], y: [0, 50, -28, 0] }} delay={2} duration={15}
        />
        <Blob
          style={{ width: 420, height: 420, left: '35%', bottom: '10%', background: 'radial-gradient(circle, rgba(255,40,40,0.3) 0%, transparent 68%)' }}
          animate={{ x: [0, 30, -18, 0], y: [0, -38, 22, 0] }} delay={4} duration={10}
        />
      </div>

      {/* ── SVG dot-grid (lower 55%) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full" style={{ height: '55%' }}
          viewBox="0 0 1600 500" preserveAspectRatio="xMidYMax slice">
          <defs>
            <pattern id="dp2" x="0" y="0" width="34" height="30" patternUnits="userSpaceOnUse">
              <circle cx="17" cy="15" r="1.6" fill="rgba(255,55,55,0.5)" />
            </pattern>
            <radialGradient id="dfade2" cx="50%" cy="75%" r="55%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.25" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="dmask2">
              <rect width="1600" height="500" fill="url(#dfade2)" />
            </mask>
          </defs>
          <rect width="1600" height="500" fill="url(#dp2)" mask="url(#dmask2)" />
        </svg>
      </div>

      {/* ── Upper: headline + CTA ── */}
      <motion.div
        style={{ y: headY, opacity: opac }}
        className="relative z-10 flex flex-col items-center text-center pt-32 pb-8 px-4"
      >
        {/* Headline */}
        <div className="mb-5">
          <motion.p {...up(0.7)} className="grotesk font-bold"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 1.08, color: 'rgba(255,255,255,0.96)' }}>
            Driven By{' '}
            <span className="relative inline-block">
              Results,
              <motion.span className="absolute inset-x-0 rounded-full"
                style={{ background: '#FF0000', height: '3px', bottom: '4px', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 1.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
            </span>
          </motion.p>
          <motion.p {...up(0.9)} className="grotesk font-bold"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 1.08, color: 'rgba(255,255,255,0.96)' }}>
            <span className="relative inline-block mr-3">
              Built
              <motion.span className="absolute inset-x-0 rounded-full"
                style={{ background: '#FF0000', height: '3px', bottom: '4px', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ delay: 1.58, duration: 0.48, ease: [0.22, 1, 0.36, 1] }} />
            </span>
            For Brands
          </motion.p>
        </div>

        {/* Subtext */}
        <motion.p {...up(1.3)}
          className="text-sm sm:text-base max-w-sm sm:max-w-lg leading-relaxed mb-8"
          style={{ color: 'rgba(255,255,255,0.42)' }}>
          We help ambitious brands in India dominate their market through data-driven social media, SEO, and precision paid advertising.
        </motion.p>

        {/* CTA */}
        <motion.a
          {...up(1.75)}
          href={WA} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm font-semibold no-underline"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.9)',
            padding: '0.7rem 1.8rem',
            borderRadius: '999px',
          }}
          whileHover={{ background: 'rgba(255,0,0,0.88)', borderColor: 'transparent', color: '#fff', scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 380, damping: 22 }}
        >
          Contact Us
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.12)', fontSize: '13px' }}
          >
            ↗
          </span>
        </motion.a>
      </motion.div>

      {/* ── Lower: full-width phone + connector lines + labels ── */}
      <motion.div
        style={{ y: phoneY, opacity: opac }}
        className="relative z-10 flex-1 flex items-end justify-center pb-0"
      >
        {/* Full-width SVG connector lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Left glow gradient */}
            <linearGradient id="lgL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(255,0,0,0)" />
              <stop offset="40%"  stopColor="rgba(255,0,0,0.35)" />
              <stop offset="85%"  stopColor="rgba(255,60,60,0.8)" />
              <stop offset="100%" stopColor="rgba(255,80,80,1)" />
            </linearGradient>
            {/* Right glow gradient */}
            <linearGradient id="lgR" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(255,80,80,1)" />
              <stop offset="15%"  stopColor="rgba(255,60,60,0.8)" />
              <stop offset="60%"  stopColor="rgba(255,0,0,0.35)" />
              <stop offset="100%" stopColor="rgba(255,0,0,0)" />
            </linearGradient>
            {/* Glow filter for dots */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Left line: edge → phone (y=180 is roughly button level) */}
          <motion.line
            x1="0" y1="180" x2="575" y2="180"
            stroke="url(#lgL)" strokeWidth="1.4"
            strokeDasharray="6 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 2.6, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Left connection dots */}
          <motion.circle cx="265" cy="180" r="4" fill="#FF0000" filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.0, duration: 0.3, type: 'spring', stiffness: 500 }} />
          <motion.circle cx="575" cy="180" r="4" fill="#FF3B3B" filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.55, duration: 0.3, type: 'spring', stiffness: 500 }} />

          {/* Right line: phone → edge */}
          <motion.line
            x1="865" y1="180" x2="1440" y2="180"
            stroke="url(#lgR)" strokeWidth="1.4"
            strokeDasharray="6 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 2.8, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle cx="865" cy="180" r="4" fill="#FF3B3B" filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.75, duration: 0.3, type: 'spring', stiffness: 500 }} />
          <motion.circle cx="1175" cy="180" r="4" fill="#FF0000" filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.25, duration: 0.3, type: 'spring', stiffness: 500 }} />
        </svg>

        {/* ─ Left label: SEO Strategy ─ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 sm:left-8 lg:left-16"
          style={{ bottom: '34%' }}
        >
          <div
            className="px-5 py-4 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p className="text-[9px] uppercase tracking-[0.16em] mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Growth</p>
            <p className="grotesk font-bold text-lg sm:text-xl leading-tight" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Social<br />Growth
            </p>
            <p className="text-[9px] uppercase tracking-[0.16em] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Smart</p>
          </div>
        </motion.div>

        {/* ─ Phone / UI mockup ─ */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0"
          style={{ width: 240, zIndex: 5 }}
        >
          {/* Glow behind phone */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: 'rgba(255,0,0,0.18)', filter: 'blur(40px)', transform: 'scale(1.15)' }} />

          <div
            className="relative rounded-3xl overflow-hidden flex flex-col"
            style={{
              background: 'rgba(18,18,18,0.92)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
              padding: '18px 16px',
            }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>9:41</span>
              <div className="flex items-center gap-1.5">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="rgba(255,255,255,0.6)">
                  <rect x="0" y="6" width="3" height="6" rx="0.5"/>
                  <rect x="4.5" y="4" width="3" height="8" rx="0.5"/>
                  <rect x="9" y="2" width="3" height="10" rx="0.5"/>
                  <rect x="13.5" y="0" width="2.5" height="12" rx="0.5"/>
                </svg>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                  <path d="M7.5 2.5C9.8 2.5 11.9 3.4 13.4 4.9L14.8 3.5C12.9 1.6 10.3 0.5 7.5 0.5C4.7 0.5 2.1 1.6 0.2 3.5L1.6 4.9C3.1 3.4 5.2 2.5 7.5 2.5Z" fill="rgba(255,255,255,0.6)"/>
                  <path d="M7.5 5.5C9 5.5 10.3 6.1 11.3 7L12.7 5.6C11.3 4.3 9.5 3.5 7.5 3.5C5.5 3.5 3.7 4.3 2.3 5.6L3.7 7C4.7 6.1 6 5.5 7.5 5.5Z" fill="rgba(255,255,255,0.6)"/>
                  <circle cx="7.5" cy="10" r="1.5" fill="rgba(255,255,255,0.6)"/>
                </svg>
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="rgba(255,255,255,0.4)"/>
                  <rect x="2" y="2" width="16" height="8" rx="2" fill="rgba(255,255,255,0.6)"/>
                  <path d="M23 4.5V7.5C23.8 7.2 24.5 6.2 24.5 6C24.5 5.8 23.8 4.8 23 4.5Z" fill="rgba(255,255,255,0.4)"/>
                </svg>
              </div>
            </div>

            {/* Z-icon */}
            <div className="flex justify-center mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(255,0,0,0.18)', border: '1.5px solid rgba(255,0,0,0.4)' }}
              >
                <span className="grotesk font-bold text-2xl" style={{ color: '#FF0000' }}>Z</span>
              </div>
            </div>

            {/* Text */}
            <p className="grotesk font-bold text-lg text-center leading-snug mb-5"
              style={{ color: 'rgba(255,255,255,0.94)' }}>
              Grow Your Brand<br />To Millions
            </p>

            {/* CTA — this is the line level for the connectors */}
            <div
              className="w-full py-3 rounded-xl text-center text-sm font-bold"
              style={{ background: '#FF0000', color: '#FFFFFF' }}
            >
              Get Free Audit
            </div>
          </div>
        </motion.div>

        {/* ─ Right label: Brand Identity ─ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 sm:right-8 lg:right-16"
          style={{ bottom: '34%' }}
        >
          <div
            className="px-5 py-4 rounded-2xl text-right"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p className="text-[9px] uppercase tracking-[0.16em] mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Visual</p>
            <p className="grotesk font-bold text-lg sm:text-xl leading-tight" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Brand<br />Identity
            </p>
            <p className="text-[9px] uppercase tracking-[0.16em] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Minimal</p>
          </div>
        </motion.div>

      </motion.div>
      {/* end lower section */}

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          className="w-px relative overflow-hidden"
          style={{ height: 40, background: 'rgba(255,255,255,0.07)' }}
        >
          <motion.div className="w-full absolute"
            style={{ height: '38%', background: '#FF0000' }}
            animate={{ top: ['-38%', '138%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }} />
        </motion.div>
        <span className="text-[8px] tracking-[0.22em] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
