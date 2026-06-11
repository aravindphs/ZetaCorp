import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
import PrivacyPolicy from './PrivacyPolicy';

const links = [
  { label: 'Services',     href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

const socials = [
  { icon: FiInstagram, href: 'https://instagram.com/zetacorpsolutions',                                   label: 'Instagram' },
  { icon: FiLinkedin,  href: 'https://www.linkedin.com/company/zetacorpsolutions-privatelimited',         label: 'LinkedIn' },
];

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer style={{ background: '#2B2B2B' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-3">
                <img src="/logo.svg" alt="ZetaCorp Solutions" style={{ height: '20px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <p className="text-xs leading-relaxed mb-1" style={{ color: '#888' }}>Innovate · Market · Dominate</p>
              <p className="text-xs" style={{ color: '#888' }}>Your trusted growth partner in Coimbatore.</p>
              <p className="mt-5 text-xs" style={{ color: '#555' }}>© {new Date().getFullYear()} ZetaCorp Solutions Pvt. Ltd.</p>
            </div>

            {/* Links */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: '#555' }}>Quick Links</p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm no-underline transition-colors"
                      style={{ color: '#888' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social + contact */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: '#555' }}>Follow Us</p>
              <div className="flex gap-3 mb-6">
                {socials.map((s) => (
                  <a
                    key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                    style={{ background: 'rgba(255,255,255,0.06)', color: '#888' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FF0000'; e.currentTarget.style.background = 'rgba(255,0,0,0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
              <a
                href="mailto:contact@zetacorpsolutions.com"
                className="text-sm no-underline transition-colors block"
                style={{ color: '#888' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FF0000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
              >
                contact@zetacorpsolutions.com
              </a>
              <a
                href="tel:+919786101960"
                className="text-sm no-underline transition-colors block mt-1"
                style={{ color: '#888' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FF0000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888'; }}
              >
                +91 97861 01960
              </a>
            </div>
          </div>

          <div
            className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderColor: 'rgba(255,255,255,0.06)', color: '#444' }}
          >
            <span>ZetaCorp Solutions Pvt. Ltd. · Coimbatore, Tamil Nadu</span>
            <div className="flex items-center gap-5">
              <span>Designed in-house · Powered by results</span>
              <button
                onClick={() => setShowPrivacy(true)}
                className="underline cursor-pointer transition-colors"
                style={{ color: '#555', background: 'none', border: 'none', font: 'inherit', fontSize: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; }}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      </AnimatePresence>
    </>
  );
}
