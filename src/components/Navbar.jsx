import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Services',     href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team',         href: '#team' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(232,25,44,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); go('#hero'); }}
            className="flex items-center gap-2 select-none"
          >
            <span className="bebas text-2xl tracking-wider" style={{ color: '#E8192C' }}>ZCS</span>
            <span className="text-sm font-medium hidden sm:block" style={{ color: '#ccc' }}>ZetaCorp Solutions</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => go(l.href)}
                  className="text-sm font-medium relative group transition-colors duration-200"
                  style={{ color: '#A0A0A0' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F0F0F0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#A0A0A0'; }}
                >
                  {l.label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: '#E8192C' }}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => go('#contact')}
              className="hidden sm:block text-sm font-semibold px-5 py-2 rounded-md text-white transition-all duration-300"
              style={{ background: '#E8192C' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(232,25,44,0.45)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              Get a Free Audit
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(10,10,10,0.97)' }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => go(l.href)}
                    className="bebas text-4xl tracking-widest transition-colors"
                    style={{ color: '#C0C0C0' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#C0C0C0'; }}
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.37 }}>
                <button
                  onClick={() => go('#contact')}
                  className="px-8 py-3 rounded-md text-white font-semibold text-lg"
                  style={{ background: '#E8192C' }}
                >
                  Get a Free Audit
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
