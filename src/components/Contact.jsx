import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const WA_BASE = 'https://wa.me/918148634409';

const serviceList = [
  'Social Media Management', 'SEO & Content', 'Paid Advertising (Meta/Google)',
  'Branding & Identity', 'AI Marketing', 'Full Digital Package',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const upd = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi ZetaCorp! I'm reaching out via your website.\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService needed: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`${WA_BASE}?text=${msg}`, '_blank');
    setSent(true);
  };

  const inStyle = {
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid #E5E5E5',
    borderRadius: '0.625rem',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#111111',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
  };

  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="label-pill mb-4 inline-flex"><span className="dot" /> Get in touch</span>
          <h2 className="grotesk font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#111111' }}>
            Ready to grow your brand?<br />
            <span style={{ color: '#FF0000' }}>Let's talk.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: '#6B7280' }}>
            We'll audit your digital presence for free and show you the exact steps to get more leads and grow faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div
                className="rounded-2xl p-10 flex flex-col items-center justify-center text-center border"
                style={{ borderColor: '#E5E5E5', minHeight: 320, background: '#F4F4F4' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: '#FF0000' }}
                >
                  <span className="text-white text-xl font-bold">✓</span>
                </div>
                <p className="grotesk font-bold text-xl mb-2" style={{ color: '#111111' }}>Opening WhatsApp…</p>
                <p className="text-sm" style={{ color: '#6B7280' }}>We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-2xl p-7 sm:p-9 flex flex-col gap-4 border"
                style={{ borderColor: '#E5E5E5' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: '#6B7280' }}>Full name *</label>
                    <input required name="name" type="text" placeholder="Your name" value={form.name} onChange={upd}
                      style={inStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#FF0000'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#E5E5E5'; }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: '#6B7280' }}>Email address *</label>
                    <input required name="email" type="email" placeholder="you@company.com" value={form.email} onChange={upd}
                      style={inStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#FF0000'; }}
                      onBlur={(e) => { e.target.style.borderColor = '#E5E5E5'; }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: '#6B7280' }}>Phone number</label>
                  <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={upd}
                    style={inStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#FF0000'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#E5E5E5'; }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: '#6B7280' }}>I need help with *</label>
                  <select required name="service" value={form.service} onChange={upd}
                    style={{ ...inStyle, cursor: 'pointer', color: form.service ? '#111111' : '#6B7280' }}
                    onFocus={(e) => { e.target.style.borderColor = '#FF0000'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#E5E5E5'; }}
                  >
                    <option value="">Select a service…</option>
                    {serviceList.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: '#6B7280' }}>Tell us about your brand</label>
                  <textarea name="message" rows={3} placeholder="What are you working on? What's your goal?" value={form.message} onChange={upd}
                    style={{ ...inStyle, resize: 'vertical' }}
                    onFocus={(e) => { e.target.style.borderColor = '#FF0000'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#E5E5E5'; }}
                  />
                </div>
                <button
                  type="submit"
                  className="py-4 rounded-xl font-semibold text-sm text-white transition-colors"
                  style={{ background: '#FF0000' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#FF3B3B'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#FF0000'; }}
                >
                  Send via WhatsApp →
                </button>
                <p className="text-center text-xs" style={{ color: '#6B7280' }}>We'll respond within 24 hours · No spam ever</p>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-7 pt-2"
          >
            {[
              { icon: FiMapPin, label: 'Our base', value: 'Coimbatore, Tamil Nadu, India' },
              { icon: FiMail,   label: 'Email us', value: 'contact@zetacorpsolutions.com', href: 'mailto:contact@zetacorpsolutions.com' },
              { icon: FiPhone,  label: 'Call us',  value: '+91 97861 01960', href: 'tel:+919786101960' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,0,0,0.07)', color: '#FF0000', border: '1px solid rgba(255,0,0,0.12)' }}
                >
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#6B7280' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-sm font-medium no-underline transition-colors" style={{ color: '#111111' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#FF0000'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#111111'; }}
                      >{item.value}</a>
                    : <p className="text-sm font-medium" style={{ color: '#111111' }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}

            {/* WhatsApp direct CTA */}
            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hi ZetaCorp! I'd like a free digital audit for my brand.")}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-4 rounded-xl font-semibold text-sm text-white transition-colors no-underline mt-2"
              style={{ background: '#25D366' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1EBE5A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.534 5.851L.057 23.786c-.066.258.014.531.207.713.128.12.295.181.463.181a.656.656 0 00.196-.031l6.192-1.98A11.908 11.908 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.08A10.083 10.083 0 016.64 20.5l-.444-.264-4.612 1.478 1.5-4.5-.289-.46A10.086 10.086 0 011.92 12C1.92 6.429 6.429 1.92 12 1.92S22.08 6.429 22.08 12 17.571 22.08 12 22.08z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Trust note */}
            <div
              className="rounded-xl p-5 border"
              style={{ background: '#F4F4F4', borderColor: '#E5E5E5' }}
            >
              <p className="text-sm font-medium mb-1" style={{ color: '#111111' }}>Free digital audit included</p>
              <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                Every new enquiry gets a complimentary audit of their current digital presence — no commitment needed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
