import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const WA = 'https://wa.me/918148634409?text=Hi%20ZetaCorp!%20I%27d%20like%20to%20discuss%20my%20project.';
const links = [
  { label: 'Services',     href: '#services' },
  { label: 'Process',      href: '#process' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'FAQ',          href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const linkColor = scrolled ? '#2B2B2B' : 'rgba(255,255,255,0.82)';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[900]"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 no-underline select-none">
          <span
            className="grotesk font-bold text-xl tracking-tight"
            style={{ color: scrolled ? '#111111' : 'rgba(255,255,255,0.95)', transition: 'color 0.4s ease' }}
          >
            <span style={{ color: '#FF0000' }}>Z</span>ETA
          </span>
          <span
            className="grotesk font-light text-xl tracking-tight"
            style={{ color: scrolled ? '#6B7280' : 'rgba(255,255,255,0.4)', transition: 'color 0.4s ease' }}
          >
            CORP
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium no-underline group"
              style={{ color: linkColor, transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FF0000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; }}
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: '#FF0000' }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={WA}
          target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg no-underline transition-colors"
          style={{ background: '#FF0000' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#FF3B3B'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#FF0000'; }}
        >
          Free Audit
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden cursor-pointer"
          style={{ color: scrolled ? '#111111' : '#FFFFFF', transition: 'color 0.4s ease', background: 'none', border: 'none' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden px-6 py-5 flex flex-col gap-4 border-t"
            style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              borderColor: 'rgba(229,229,229,0.6)',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium no-underline"
                style={{ color: '#111111' }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href={WA}
              target="_blank" rel="noopener noreferrer"
              className="bg-[#FF0000] text-white text-center font-semibold py-3 rounded-lg text-sm no-underline mt-1"
              onClick={() => setOpen(false)}
            >
              Get Free Audit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
