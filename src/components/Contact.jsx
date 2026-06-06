import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiMessageCircle } from 'react-icons/fi';

const services = [
  'Branding & Identity', 'Website Design', 'Content Marketing',
  'Paid Ads (Meta & Google)', 'SEO', 'Social Media Marketing', 'Full Digital Strategy',
];

const inputStyle = {
  background: '#1A1A1A',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#F0F0F0',
  borderRadius: '0.5rem',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="py-24 sm:py-28" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="section-heading">Ready to Grow?</h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: '#A0A0A0' }}>
            {"Let's talk about your brand. We'll audit your current digital presence — free."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div
                className="rounded-xl p-10 flex flex-col items-center justify-center text-center h-full min-h-72"
                style={{ background: '#1A1A1A', border: '1px solid rgba(232,25,44,0.2)' }}
              >
                <div className="bebas text-5xl mb-4" style={{ color: '#E8192C' }}>Done!</div>
                <p style={{ color: '#A0A0A0' }}>{"We'll be in touch within 24 hours."}</p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-xl p-6 sm:p-8 flex flex-col gap-4"
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Name *',  name: 'name',  type: 'text',  placeholder: 'Your full name',    required: true },
                    { label: 'Email *', name: 'email', type: 'email', placeholder: 'you@company.com',   required: true },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium" style={{ color: '#A0A0A0' }}>{f.label}</label>
                      <input
                        required={f.required} type={f.type} name={f.name}
                        value={form[f.name]} onChange={handle} placeholder={f.placeholder}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = '#E8192C'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: '#A0A0A0' }}>Phone (optional)</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handle}
                    placeholder="+91 XXXXX XXXXX" style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = '#E8192C'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: '#A0A0A0' }}>What do you need help with? *</label>
                  <select
                    required name="service" value={form.service} onChange={handle}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={(e) => { e.target.style.borderColor = '#E8192C'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    <option value="" style={{ background: '#1A1A1A' }}>Select a service…</option>
                    {services.map((s) => <option key={s} value={s} style={{ background: '#1A1A1A' }}>{s}</option>)}
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-2 py-3.5 rounded-md font-semibold text-sm text-white transition-all duration-300"
                  style={{ background: '#E8192C' }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(232,25,44,0.4)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                >
                  Get My Free Audit →
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6 justify-center"
          >
            {[
              { icon: FiMapPin, label: 'Location', value: 'Coimbatore, Tamil Nadu, India' },
              { icon: FiMail,   label: 'Email',    value: 'contact@zetacorpsolutions.com', href: 'mailto:contact@zetacorpsolutions.com' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(232,25,44,0.12)', color: '#E8192C' }}
                >
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#A0A0A0' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-sm font-medium hover:text-red-400 transition-colors" style={{ color: '#F0F0F0' }}>{item.value}</a>
                    : <p className="text-sm font-medium" style={{ color: '#F0F0F0' }}>{item.value}</p>
                  }
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/919999999999?text=Hi%20ZetaCorp!%20I%20want%20a%20free%20digital%20audit%20for%20my%20brand."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-md font-semibold text-sm text-white transition-all duration-300 self-start"
              style={{ background: '#128C7E' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(18,140,126,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <FiMessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
