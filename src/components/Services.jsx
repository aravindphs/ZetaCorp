import { motion } from 'framer-motion';
import { FiMonitor, FiTrendingUp, FiTarget, FiSearch, FiShare2, FiFeather } from 'react-icons/fi';

const services = [
  { icon: FiFeather,    name: 'Branding & Identity',       desc: 'Logos, visual systems, and brand voice that make you unforgettable.' },
  { icon: FiMonitor,    name: 'Website Design',            desc: 'Fast, conversion-focused websites built to turn visitors into buyers.' },
  { icon: FiTrendingUp, name: 'Content Marketing',         desc: 'Stories that build authority and keep your audience coming back.' },
  { icon: FiTarget,     name: 'Paid Ads (Meta & Google)',  desc: 'Precision-targeted campaigns engineered for measurable ROI.' },
  { icon: FiSearch,     name: 'SEO',                       desc: 'Rank higher, get found faster, and own your niche on Google.' },
  { icon: FiShare2,     name: 'Social Media Marketing',    desc: 'Content calendars and community management that drive real growth.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="section-heading">What We Do</h2>
          <p className="mt-4 text-base max-w-lg" style={{ color: '#A0A0A0' }}>
            Full-stack digital marketing — from brand birth to market domination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(232,25,44,0.15)' }}
              className="rounded-xl p-6 cursor-default transition-all duration-300"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)', borderTop: '2px solid transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderTop = '2px solid #E8192C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderTop = '2px solid transparent'; }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-lg mb-5"
                style={{ background: 'rgba(232,25,44,0.12)', color: '#E8192C' }}
              >
                <s.icon size={22} />
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: '#F0F0F0' }}>{s.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#A0A0A0' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
