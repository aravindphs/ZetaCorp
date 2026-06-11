import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'Healthcare · AI',
    title: "Building Caretha AI's Digital Presence from Zero",
    desc: "Full organic social strategy for Caretha AI's pre-launch — Instagram and LinkedIn content calendars, platform-native storytelling, and a paid ads strategy for Meta and LinkedIn.",
    result: '0 → 3K+ Followers in 90 Days',
    resultSub: 'Organic growth, no paid spend',
  },
  {
    tag: 'E-commerce · Fashion',
    title: '3.8× ROAS for a Fashion Brand on Meta Ads',
    desc: 'Restructured ad creatives, audience targeting, and retargeting funnels to dramatically improve return on ad spend for a growing fashion label.',
    result: '₹2L → ₹7.6L Revenue',
    resultSub: 'In a single 45-day campaign',
  },
  {
    tag: 'Local Business · SEO',
    title: 'Page 1 on Google for a Coimbatore Service Business',
    desc: "Full SEO audit, on-page optimisation, and local citation building drove the client to Google's first page within 4 months of engagement.",
    result: '#1 Local Ranking',
    resultSub: 'Achieved in 4 months',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 sm:py-32" style={{ background: '#F4F4F4' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="label-pill mb-4 inline-flex"><span className="dot" /> Case studies</span>
          <h2 className="grotesk font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#111111' }}>
            Results we've delivered<br />
            <span style={{ color: '#FF0000' }}>for real brands.</span>
          </h2>
          <p className="mt-4 text-base max-w-lg leading-relaxed" style={{ color: '#6B7280' }}>
            Every number below came from a partnership where we treated the client's growth as our own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-7 flex flex-col border transition-all duration-300"
              style={{ borderColor: '#E5E5E5' }}
            >
              <span
                className="self-start text-[10px] font-bold px-3 py-1 rounded-full mb-5 tracking-[0.12em] uppercase"
                style={{ background: 'rgba(255,0,0,0.08)', color: '#FF0000', border: '1px solid rgba(255,0,0,0.15)' }}
              >
                {c.tag}
              </span>
              <h3 className="grotesk font-semibold text-base mb-3 leading-snug flex-1" style={{ color: '#111111' }}>
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>{c.desc}</p>

              <div className="border-t pt-5 flex items-end justify-between" style={{ borderColor: '#E5E5E5' }}>
                <div>
                  <p className="grotesk font-bold text-lg" style={{ color: '#FF0000' }}>{c.result}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>{c.resultSub}</p>
                </div>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                  style={{ background: '#FF0000', color: '#FFFFFF' }}
                >
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
