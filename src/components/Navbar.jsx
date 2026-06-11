import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const WA = 'https://wa.me/918148634409?text=Hi%20ZetaCorp!%20I%27d%20like%20to%20discuss%20my%20project.';
const links = [
  { label: 'Services',     href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[900]"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.93)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
        transition: 'background 0.35s, border-color 0.35s',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1 no-underline select-none">
          <span className="grotesk font-bold text-xl tracking-tight" style={{ color: '#111111' }}>
            <span style={{ color: '#FF0000' }}>Z</span>ETA
          </span>
          <span className="grotesk font-light text-xl tracking-tight" style={{ color: '#6B7280' }}>CORP</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium no-underline transition-colors"
              style={{ color: '#2B2B2B' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FF0000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#2B2B2B'; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WA}
          target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors no-underline"
          style={{ background: '#FF0000' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#FF3B3B'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#FF0000'; }}
        >
          Free Audit
        </a>

        <button
          className="md:hidden cursor-pointer"
          style={{ color: '#111111' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white border-t px-6 py-5 flex flex-col gap-5"
            style={{ borderColor: '#E5E5E5' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium no-underline"
                style={{ color: '#111111' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank" rel="noopener noreferrer"
              className="bg-[#FF0000] text-white text-center font-semibold py-3 rounded-lg text-sm no-underline"
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
