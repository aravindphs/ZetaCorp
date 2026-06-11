import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const WA_BASE = 'https://wa.me/918148634409';

const buildWA = (planName, billing) =>
  `${WA_BASE}?text=${encodeURIComponent(
    `Hi ZetaCorp! I'm interested in your ${planName} package on a ${billing} basis. Can you share more details?`
  )}`;

const plans = [
  {
    name: 'Standard',
    tagline: 'Perfect for brands just starting their digital journey.',
    features: [
      'Social Media Management',
      '6 Posts per Month',
      '2 Reels per Month',
      'Basic Hashtag Strategy',
      'Monthly Growth Report',
      'Basic Ad Campaign Setup',
    ],
    highlight: false,
  },
  {
    name: 'Premium',
    tagline: 'For growing brands ready to scale with strategy and AI.',
    features: [
      'Social Media Management',
      '12 Posts per Month',
      '3 Reels per Month',
      'SEO-Optimised Captions',
      'Custom Brand Strategy',
      'Monthly Ad Campaign Management',
      'AI Marketing',
      'Targeted Campaign',
      'Monthly Report',
    ],
    highlight: true,
  },
  {
    name: 'Platinum',
    tagline: 'Full-service partnership for ambitious brands that demand results.',
    features: [
      'Social Media Management',
      '15 Posts per Month',
      '4 Reels per Month',
      'Collaborations Strategy',
      'Full-Fledged SEO Audit',
      'Advanced Analytics',
      'Growth Strategy',
      'AI Optimised Targeting',
      'Monthly 1 Video Shoot',
      'Instagram Automation',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="py-24 sm:py-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <span className="label-pill mb-4 inline-flex"><span className="dot" /> Packages</span>
          <h2 className="grotesk font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#111111' }}>
            Choose your growth plan.<br />
            <span style={{ color: '#FF0000' }}>Custom options available too.</span>
          </h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed" style={{ color: '#6B7280' }}>
            Every brand is different — these packages are starting points. We tailor every engagement to your goals and budget.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setBilling('monthly')}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer"
            style={{
              background: billing === 'monthly' ? '#111111' : 'transparent',
              color: billing === 'monthly' ? '#FFFFFF' : '#6B7280',
              border: billing === 'monthly' ? '1.5px solid #111111' : '1.5px solid #E5E5E5',
            }}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('quarterly')}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-2"
            style={{
              background: billing === 'quarterly' ? '#111111' : 'transparent',
              color: billing === 'quarterly' ? '#FFFFFF' : '#6B7280',
              border: billing === 'quarterly' ? '1.5px solid #111111' : '1.5px solid #E5E5E5',
            }}
          >
            Quarterly
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
              style={{ background: '#FF0000', color: '#FFFFFF' }}
            >
              SAVE
            </span>
          </button>
        </motion.div>

        {billing === 'quarterly' && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm mb-10"
            style={{ color: '#6B7280' }}
          >
            Quarterly plans include priority support, a dedicated account manager, and a free strategy review.
          </motion.p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border flex flex-col"
              style={{
                borderColor: plan.highlight ? '#FF0000' : '#E5E5E5',
                background: plan.highlight ? '#111111' : '#FFFFFF',
                boxShadow: plan.highlight ? '0 24px 60px rgba(255,0,0,0.12)' : 'none',
              }}
            >
              <div
                className="px-7 pt-7 pb-6"
                style={{ borderBottom: `1px solid ${plan.highlight ? 'rgba(255,255,255,0.08)' : '#E5E5E5'}` }}
              >
                <div className="flex items-start justify-between mb-2">
                  {plan.highlight && (
                    <span
                      className="text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase"
                      style={{ background: '#FF0000', color: '#FFFFFF' }}
                    >
                      Most Popular
                    </span>
                  )}
                  <AnimatePresence mode="wait">
                    {billing === 'quarterly' && (
                      <motion.span
                        key="qbadge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-[10px] font-bold px-2 py-1 rounded-full tracking-wide ml-auto"
                        style={{ background: 'rgba(255,0,0,0.1)', color: '#FF0000' }}
                      >
                        3-month plan
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <h3
                  className="grotesk font-bold text-2xl mb-2 mt-2"
                  style={{ color: plan.highlight ? '#FFFFFF' : '#111111' }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: plan.highlight ? '#AAAAAA' : '#6B7280' }}>
                  {plan.tagline}
                </p>
              </div>

              <ul className="px-7 py-6 flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,0,0,0.1)', color: '#FF0000' }}
                    >
                      <FiCheck size={10} strokeWidth={3} />
                    </span>
                    <span style={{ color: plan.highlight ? '#CCCCCC' : '#2B2B2B' }}>{f}</span>
                  </li>
                ))}
                {billing === 'quarterly' && (
                  <motion.li
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(255,0,0,0.2)', color: '#FF0000' }}
                    >
                      <FiCheck size={10} strokeWidth={3} />
                    </span>
                    <span className="font-medium" style={{ color: plan.highlight ? '#FFB0B0' : '#FF0000' }}>
                      Priority support + account manager
                    </span>
                  </motion.li>
                )}
              </ul>

              <div className="px-7 pb-7">
                <a
                  href={buildWA(plan.name, billing)}
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center font-semibold py-3.5 rounded-xl text-sm transition-colors no-underline"
                  style={{
                    background: plan.highlight ? '#FF0000' : 'transparent',
                    color: plan.highlight ? '#FFFFFF' : '#FF0000',
                    border: plan.highlight ? 'none' : '1.5px solid #FF0000',
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.highlight) { e.currentTarget.style.background = '#FF0000'; e.currentTarget.style.color = '#FFFFFF'; }
                    else { e.currentTarget.style.background = '#FF3B3B'; }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlight) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FF0000'; }
                    else { e.currentTarget.style.background = '#FF0000'; }
                  }}
                >
                  Get {plan.name} on WhatsApp →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm" style={{ color: '#6B7280' }}>
            Need something specific?{' '}
            <a
              href={`${WA_BASE}?text=${encodeURIComponent('Hi ZetaCorp! I need a custom digital marketing package tailored to my business.')}`}
              target="_blank" rel="noopener noreferrer"
              className="font-semibold no-underline transition-colors"
              style={{ color: '#FF0000' }}
            >
              Let's build a custom package for your brand →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
