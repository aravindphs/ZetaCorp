import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WA = 'https://wa.me/918148634409?text=Hi%20ZetaCorp!%20I%27d%20like%20a%20free%20digital%20audit%20for%20my%20brand.';

/* Animated blob — absolutely positioned radial gradient div */
function Blob({ style, animate, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ filter: 'blur(90px)', ...style }}
      animate={animate}
      transition={{ duration: style.duration ?? 12, repeat: Infinity, ease: 'easeInOut', delay, repeatType: 'mirror' }}
    />
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y    = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opac = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const up = (delay) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A', minHeight: '100svh' }}
    >
      {/* ─── Animated gradient blobs ─── */}
      <div className="absolute inset-0 overflow-hidden">
        <Blob
          style={{
            width: 720, height: 720,
            left: '-16%', top: '-28%',
            background: 'radial-gradient(circle, rgba(255,0,0,0.52) 0%, transparent 65%)',
            duration: 13,
          }}
          animate={{ x: [0, 75, -35, 0], y: [0, -55, 38, 0] }}
          delay={0}
        />
        <Blob
          style={{
            width: 600, height: 600,
            right: '-12%', bottom: '-18%',
            background: 'radial-gradient(circle, rgba(185,0,0,0.46) 0%, transparent 65%)',
            duration: 15,
          }}
          animate={{ x: [0, -58, 28, 0], y: [0, 48, -26, 0] }}
          delay={2}
        />
        <Blob
          style={{
            width: 380, height: 380,
            left: '38%', bottom: '6%',
            background: 'radial-gradient(circle, rgba(255,50,50,0.32) 0%, transparent 70%)',
            duration: 10,
          }}
          animate={{ x: [0, 28, -18, 0], y: [0, -32, 20, 0] }}
          delay={4}
        />
      </div>

      {/* ─── SVG dot-grid (lower half) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          style={{ height: '58%' }}
          viewBox="0 0 1600 520"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <pattern id="dp" x="0" y="0" width="32" height="28" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="14" r="1.6" fill="rgba(255,55,55,0.55)" />
            </pattern>
            <radialGradient id="dfade" cx="50%" cy="85%" r="52%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.28" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="dmask">
              <rect width="1600" height="520" fill="url(#dfade)" />
            </mask>
          </defs>
          <rect width="1600" height="520" fill="url(#dp)" mask="url(#dmask)" />
        </svg>
      </div>

      {/* ─── Main content (parallax) ─── */}
      <motion.div
        style={{ y, opacity: opac }}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-24 pb-0"
      >
        {/* Portal card frame */}
        <motion.div
          className="relative rounded-3xl"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.015)',
          }}
        >
          <div className="flex flex-col items-center px-5 sm:px-14 pt-14 pb-0">

            {/* ─── Headline ─── */}
            <div className="text-center mb-5">
              {/* Line 1 */}
              <motion.p
                {...up(0.7)}
                className="grotesk font-bold"
                style={{ fontSize: 'clamp(2rem, 5.2vw, 4rem)', lineHeight: 1.1, color: 'rgba(255,255,255,0.95)' }}
              >
                Driven By{' '}
                <span className="relative inline-block">
                  Results,
                  <motion.span
                    className="absolute inset-x-0 rounded-full"
                    style={{ background: '#FF0000', height: '2px', bottom: '3px', transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </motion.p>
              {/* Line 2 */}
              <motion.p
                {...up(0.92)}
                className="grotesk font-bold"
                style={{ fontSize: 'clamp(2rem, 5.2vw, 4rem)', lineHeight: 1.1, color: 'rgba(255,255,255,0.95)' }}
              >
                <span className="relative inline-block mr-3">
                  Built
                  <motion.span
                    className="absolute inset-x-0 rounded-full"
                    style={{ background: '#FF0000', height: '2px', bottom: '3px', transformOrigin: 'left' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.58, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                For Brands
              </motion.p>
            </div>

            {/* ─── Subtext ─── */}
            <motion.p
              {...up(1.3)}
              className="text-center text-sm sm:text-base max-w-sm sm:max-w-md leading-relaxed mb-8"
              style={{ color: 'rgba(255,255,255,0.42)' }}
            >
              We help ambitious brands in India dominate their market through data-driven social media, SEO, and precision paid advertising.
            </motion.p>

            {/* ─── CTA button ─── */}
            <motion.a
              {...up(1.75)}
              href={WA}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold no-underline mb-14"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.88)',
                padding: '0.65rem 1.6rem',
                borderRadius: '999px',
              }}
              whileHover={{
                background: 'rgba(255,0,0,0.9)',
                borderColor: 'rgba(255,0,0,0.0)',
                color: '#FFFFFF',
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              Contact Us
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </motion.a>

            {/* ─── Bottom: labels + phone mockup ─── */}
            <div
              className="relative w-full flex items-center justify-center"
              style={{ height: 230 }}
            >
              {/* SVG overlay for connecting arcs */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 900 230"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="arcL" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="rgba(255,0,0,0.0)" />
                    <stop offset="60%"  stopColor="rgba(255,0,0,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,0,0,0.8)" />
                  </linearGradient>
                  <linearGradient id="arcR" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="rgba(255,0,0,0.8)" />
                    <stop offset="40%"  stopColor="rgba(255,0,0,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,0,0,0.0)" />
                  </linearGradient>
                </defs>

                {/* Left arc: label → phone */}
                <motion.path
                  d="M 165 115 C 230 115, 310 100, 385 100"
                  fill="none" stroke="url(#arcL)" strokeWidth="1.2"
                  strokeDasharray="5 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.circle cx="385" cy="100" r="3.5" fill="#FF0000"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 3.55, duration: 0.3, type: 'spring', stiffness: 400 }}
                />

                {/* Right arc: phone → label */}
                <motion.path
                  d="M 515 100 C 590 100, 670 115, 735 115"
                  fill="none" stroke="url(#arcR)" strokeWidth="1.2"
                  strokeDasharray="5 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.circle cx="515" cy="100" r="3.5" fill="#FF0000"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 3.75, duration: 0.3, type: 'spring', stiffness: 400 }}
                />
              </svg>

              {/* Left label — Social Growth */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 sm:left-4"
                style={{ bottom: '28%' }}
              >
                <div
                  className="px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    minWidth: 120,
                  }}
                >
                  <p className="text-[9px] uppercase tracking-[0.14em] mb-1" style={{ color: 'rgba(255,255,255,0.32)' }}>Channel</p>
                  <p className="grotesk font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.88)' }}>Social Growth</p>
                </div>
              </motion.div>

              {/* Centre — Phone / UI card mockup */}
              <motion.div
                initial={{ opacity: 0, y: 55 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 178, zIndex: 2, position: 'relative' }}
              >
                <div
                  className="rounded-2xl flex flex-col"
                  style={{
                    background: 'rgba(18,18,18,0.88)',
                    border: '1px solid rgba(255,255,255,0.11)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 24px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
                    padding: '12px',
                  }}
                >
                  {/* Status bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.38)' }}>9:41</span>
                    <div className="flex items-end gap-0.5">
                      {[10, 14, 18].map((h, i) => (
                        <div key={i} className="w-1 rounded-sm" style={{ height: h, background: `rgba(255,255,255,${0.4 + i * 0.2})` }} />
                      ))}
                    </div>
                  </div>
                  {/* Z icon */}
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(255,0,0,0.14)', border: '1px solid rgba(255,0,0,0.32)' }}
                    >
                      <span className="grotesk font-bold text-base" style={{ color: '#FF0000' }}>Z</span>
                    </div>
                  </div>
                  {/* Headline */}
                  <p className="grotesk font-bold text-xs text-center leading-snug mb-3" style={{ color: 'rgba(255,255,255,0.92)' }}>
                    Grow Your Brand<br />To Millions
                  </p>
                  {/* CTA */}
                  <div
                    className="w-full py-2 rounded-lg text-center text-[11px] font-semibold"
                    style={{ background: '#FF0000', color: '#FFFFFF' }}
                  >
                    Get Free Audit
                  </div>
                </div>
              </motion.div>

              {/* Right label — Brand Identity */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.7, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 sm:right-4"
                style={{ bottom: '28%' }}
              >
                <div
                  className="px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    minWidth: 120,
                  }}
                >
                  <p className="text-[9px] uppercase tracking-[0.14em] mb-1" style={{ color: 'rgba(255,255,255,0.32)' }}>Goal</p>
                  <p className="grotesk font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.88)' }}>Brand Identity</p>
                </div>
              </motion.div>
            </div>
            {/* end bottom row */}
          </div>
          {/* end card inner */}
        </motion.div>
        {/* end portal frame */}
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>Scroll</span>
        <div className="w-px h-10 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
          <motion.div
            className="w-full absolute"
            style={{ height: '38%', background: '#FF0000' }}
            animate={{ top: ['-38%', '138%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
