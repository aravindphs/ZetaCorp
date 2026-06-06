import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'Healthcare / AI',
    title: "Building Caretha AI's Digital Presence from Zero",
    desc: "Crafted a full organic social strategy for Caretha AI's pre-launch phase — covering Instagram and LinkedIn content calendars, platform-native storytelling, and paid ads strategy for Meta and LinkedIn launch.",
    result: '0 → 3K+ Followers in 90 Days (Organic)',
  },
  {
    tag: 'E-commerce / Fashion',
    title: "3.8x ROAS for a Fashion Brand's Meta Ads",
    desc: 'Restructured ad creatives, audience targeting, and retargeting funnels to dramatically improve return on ad spend.',
    result: '₹2L spend → ₹7.6L revenue',
  },
  {
    tag: 'Local Business / SEO',
    title: 'Ranking #1 on Google for a Coimbatore Service Business',
    desc: 'Full SEO audit, on-page optimization, and local citation building drove the client to page 1 within 4 months.',
    result: 'Page 1 in 4 Months',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 sm:py-28" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="section-heading">Results We've Delivered</h2>
          <p className="mt-4 text-base max-w-lg" style={{ color: '#A0A0A0' }}>
            Real campaigns, real numbers, real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ boxShadow: '0 0 0 1.5px rgba(232,25,44,0.5), 0 16px 40px rgba(232,25,44,0.08)' }}
              className="relative rounded-xl p-6 flex flex-col transition-all duration-300"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span
                className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide uppercase"
                style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C' }}
              >
                {c.tag}
              </span>
              <h3 className="text-base font-semibold mb-3 leading-snug flex-none" style={{ color: '#F0F0F0' }}>{c.title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#A0A0A0' }}>{c.desc}</p>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold self-start"
                style={{ background: 'rgba(232,25,44,0.12)', color: '#E8192C', border: '1px solid rgba(232,25,44,0.25)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#E8192C' }} />
                {c.result}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
