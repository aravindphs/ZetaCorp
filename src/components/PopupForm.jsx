import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const WA_BASE = 'https://wa.me/918148634409';

export default function PopupForm() {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' });

  useEffect(() => {
    if (sessionStorage.getItem('zc_popup')) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setShow(true);
    };

    // Trigger 1: scroll past 40% of page depth
    const onScroll = () => {
      const depth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (depth > 0.4) { trigger(); cleanup(); }
    };

    // Trigger 2: exit intent (mouse moves to top of viewport on desktop)
    const onMouseLeave = (e) => {
      if (e.clientY <= 0) { trigger(); cleanup(); }
    };

    // Fallback: show after 25s regardless
    const fallback = setTimeout(() => { trigger(); cleanup(); }, 25000);

    const cleanup = () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseleave', onMouseLeave);
      clearTimeout(fallback);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return cleanup;
  }, []);

  const close = () => {
    setShow(false);
    sessionStorage.setItem('zc_popup', '1');
  };

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi ZetaCorp! I'd like a free digital audit.\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${form.service}`
    );
    window.open(`${WA_BASE}?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(close, 2200);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <motion.div
            className="bg-white w-full max-w-[420px] mx-4 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.88, opacity: 0, y: 32 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          >
            <div className="bg-[#FF0000] px-6 pt-6 pb-7 relative">
              <button
                onClick={close}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <FiX size={18} />
              </button>
              <span className="label-pill bg-white/20 border-white/30 text-white/90 text-[10px]">
                <span className="dot bg-white" /> Limited slots
              </span>
              <h3 className="grotesk text-white text-[1.6rem] font-bold leading-tight mt-3">
                Get a Free<br />Digital Audit
              </h3>
              <p className="text-white/80 text-sm mt-2 leading-relaxed">
                We'll review your online presence and show you exactly where leads are slipping away.
              </p>
            </div>

            <div className="px-6 py-5">
              {sent ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[#F4F4F4] flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#FF0000] text-xl font-bold">✓</span>
                  </div>
                  <p className="grotesk font-semibold text-[#111111] text-lg">Opening WhatsApp…</p>
                  <p className="text-sm text-[#6B7280] mt-1">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-3">
                  {[
                    { k: 'name',  type: 'text',  ph: 'Your full name' },
                    { k: 'email', type: 'email', ph: 'Email address' },
                    { k: 'phone', type: 'tel',   ph: 'Phone number' },
                  ].map(({ k, type, ph }) => (
                    <input
                      key={k} required type={type} placeholder={ph}
                      value={form[k]} onChange={upd(k)}
                      className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#FF0000] transition-colors"
                    />
                  ))}
                  <select
                    required value={form.service} onChange={upd('service')}
                    className="w-full border border-[#E5E5E5] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#FF0000] transition-colors text-[#6B7280]"
                  >
                    <option value="">I need help with…</option>
                    <option>Social Media Management</option>
                    <option>SEO &amp; Content</option>
                    <option>Paid Advertising</option>
                    <option>Full Digital Package</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-[#FF0000] hover:bg-[#FF3B3B] text-white font-semibold py-3 rounded-lg text-sm transition-colors cursor-pointer mt-1"
                  >
                    Claim Free Audit →
                  </button>
                  <p className="text-center text-[11px] text-[#6B7280]">No spam · We'll reach out on WhatsApp</p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
