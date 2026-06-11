import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const cases = [
  {
    tag: 'Healthcare · AI',
    title: "Building Caretha AI's Digital Presence from Zero",
    desc: "Full organic social strategy for Caretha AI's pre-launch — Instagram and LinkedIn content calendars, platform-native storytelling, and a paid ads strategy for Meta and LinkedIn.",
    result: '0 → 3K+ Followers in 90 Days',
    resultSub: 'Organic growth, no paid spend',
    detail: {
      challenge: "Caretha AI was entering a crowded health-tech market with no existing social presence, no community, and limited brand recognition. They needed digital traction before their product launch.",
      strategy: "We built a full pre-launch organic strategy — crafting a content calendar that mixed educational healthcare content, AI explainers, and founder-led storytelling across Instagram and LinkedIn. We positioned the brand as a thought leader before asking for anything from the audience.",
      metrics: [
        { label: 'Followers gained',  value: '3,200+',  sub: 'in 90 days, organic' },
        { label: 'Avg engagement rate', value: '6.4%',   sub: 'vs industry avg 2.1%' },
        { label: 'LinkedIn impressions', value: '82K',    sub: 'first 60 days' },
        { label: 'DMs from potential B2B partners', value: '14',     sub: 'inbound interest' },
      ],
    },
  },
  {
    tag: 'E-commerce · Fashion',
    title: '3.8× ROAS for a Fashion Brand on Meta Ads',
    desc: 'Restructured ad creatives, audience targeting, and retargeting funnels to dramatically improve return on ad spend for a growing fashion label.',
    result: '₹2L → ₹7.6L Revenue',
    resultSub: 'In a single 45-day campaign',
    detail: {
      challenge: "The brand was running Meta ads with a 1.1× ROAS — barely breaking even. Ad fatigue had set in, audiences were over-saturated, and there was no retargeting funnel in place.",
      strategy: "We rebuilt the entire campaign from scratch: new creative angles (UGC-style vs studio), layered interest audiences, lookalike expansion, and a 3-stage retargeting funnel (warm → hot → cart abandonment).",
      metrics: [
        { label: 'ROAS',             value: '3.8×',   sub: 'up from 1.1×' },
        { label: 'Ad spend',         value: '₹2L',    sub: '45-day period' },
        { label: 'Revenue generated',value: '₹7.6L',  sub: 'same period' },
        { label: 'Cost per purchase',value: '−67%',   sub: 'vs previous campaigns' },
      ],
    },
  },
  {
    tag: 'Local Business · SEO',
    title: 'Page 1 on Google for a Coimbatore Service Business',
    desc: "Full SEO audit, on-page optimisation, and local citation building drove the client to Google's first page within 4 months of engagement.",
    result: '#1 Local Ranking',
    resultSub: 'Achieved in 4 months',
    detail: {
      challenge: "A well-established local services business in Coimbatore was invisible on Google despite 10+ years of operation. Competitors were ranking for all key local terms, and the website had major technical SEO issues.",
      strategy: "We ran a full technical SEO audit, fixed crawlability issues, rebuilt the on-page structure around local intent keywords, built 40+ local citations, and created a content hub targeting high-intent service queries specific to Coimbatore.",
      metrics: [
        { label: 'Google ranking (primary keyword)', value: '#1',     sub: 'from page 4' },
        { label: 'Organic traffic growth',            value: '+290%',  sub: 'over 4 months' },
        { label: 'Local citations built',             value: '40+',    sub: 'across directories' },
        { label: 'Inbound leads from search',         value: '+4×',    sub: 'month-on-month' },
      ],
    },
  },
];

function Modal({ c, onClose }) {
  return (
    <motion.div
      className="popup-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="bg-white w-full max-w-2xl mx-4 rounded-2xl overflow-hidden shadow-2xl"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Header */}
        <div className="bg-[#111111] px-7 pt-7 pb-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <FiX size={20} />
          </button>
          <span
            className="text-[10px] font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase"
            style={{ background: 'rgba(255,0,0,0.2)', color: '#FF6666' }}
          >
            {c.tag}
          </span>
          <h3 className="grotesk font-bold text-xl text-white leading-snug mt-2">{c.title}</h3>
        </div>

        <div className="px-7 py-6 flex flex-col gap-7">
          {/* Challenge */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#FF0000' }}>The Challenge</p>
            <p className="text-sm leading-relaxed" style={{ color: '#2B2B2B' }}>{c.detail.challenge}</p>
          </div>

          {/* Strategy */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: '#FF0000' }}>Our Strategy</p>
            <p className="text-sm leading-relaxed" style={{ color: '#2B2B2B' }}>{c.detail.strategy}</p>
          </div>

          {/* Results table */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#FF0000' }}>Results</p>
            <div className="grid grid-cols-2 gap-3">
              {c.detail.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl px-5 py-4 border"
                  style={{ background: '#F4F4F4', borderColor: '#E5E5E5' }}
                >
                  <p className="grotesk font-bold text-2xl" style={{ color: '#FF0000' }}>{m.value}</p>
                  <p className="text-xs font-medium mt-1" style={{ color: '#111111' }}>{m.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: '#6B7280' }}>{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(null);

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
              className="bg-white rounded-2xl p-7 flex flex-col border transition-all duration-300 cursor-pointer"
              style={{ borderColor: '#E5E5E5' }}
              onClick={() => setActive(c)}
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
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  style={{ background: '#F4F4F4', color: '#FF0000', border: '1px solid #E5E5E5' }}
                >
                  View details →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <Modal c={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
