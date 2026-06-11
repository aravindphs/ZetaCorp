import { motion } from 'framer-motion';
import { FiMonitor, FiTrendingUp, FiTarget, FiSearch, FiShare2, FiFeather } from 'react-icons/fi';

const services = [
  { icon: FiFeather,    name: 'Branding & Identity',      desc: 'Logos, visual systems, and brand voice that make you unmistakable in your market.' },
  { icon: FiShare2,     name: 'Social Media Management',  desc: 'Strategy, content, and community management that turn followers into customers.' },
  { icon: FiTarget,     name: 'Paid Advertising',         desc: 'Precision Meta and Google campaigns engineered for measurable ROI.' },
  { icon: FiSearch,     name: 'SEO & Content',            desc: 'Rank higher on Google, attract organic traffic, and build lasting authority.' },
  { icon: FiTrendingUp, name: 'AI-Powered Marketing',     desc: 'Leverage AI targeting and automation to reach the right people at the right time.' },
  { icon: FiMonitor,    name: 'Web Design & Presence',    desc: 'Fast, conversion-focused websites built to turn every visitor into a lead.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="label-pill mb-4 inline-flex"><span className="dot" /> What we do</span>
          <h2 className="grotesk font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#111111' }}>
            Everything your brand needs<br />
            <span style={{ color: '#FF0000' }}>to grow and dominate.</span>
          </h2>
          <p className="mt-4 text-base max-w-lg leading-relaxed" style={{ color: '#6B7280' }}>
            We're not a vendor you brief and forget. We embed ourselves in your brand and drive results like a co-founder would.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}
              className="rounded-2xl p-6 cursor-default transition-all duration-300 border group"
              style={{ background: '#F4F4F4', borderColor: '#E5E5E5' }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl mb-5 transition-colors duration-300"
                style={{ background: '#FFFFFF', color: '#FF0000', border: '1px solid #E5E5E5' }}
              >
                <s.icon size={20} />
              </div>
              <h3 className="grotesk font-semibold text-base mb-2" style={{ color: '#111111' }}>{s.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{s.desc}</p>
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                style={{ background: '#FF0000' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
