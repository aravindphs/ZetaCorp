import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';

const faqs = [
  {
    q: 'How long until I see results from digital marketing?',
    a: "It depends on the channel. Paid ads (Meta/Google) can show results within the first 2–3 weeks as we test and optimise. SEO typically takes 2–4 months to show meaningful ranking improvements. Social media growth builds over 60–90 days with a consistent strategy. We set realistic expectations upfront and track progress weekly.",
  },
  {
    q: "What's included in the free digital audit?",
    a: "A comprehensive review of your current digital presence: social media account health, website speed and SEO basics, Google Business Profile status, competitor benchmarking, and a short list of the highest-impact actions you can take right now. No cost, no commitment — we just want to show you what's possible.",
  },
  {
    q: 'Do you work with small businesses and startups?',
    a: "Absolutely — some of our best results have come from working with early-stage brands. We've helped businesses launch from zero and scale to thousands of followers and leads. Our Standard package is designed specifically for brands just starting their digital journey.",
  },
  {
    q: 'Can I upgrade or change my package later?',
    a: "Yes, always. You can move between packages at the end of any billing cycle. Many clients start with Standard, see results, and upgrade to Premium or Platinum within 3 months. We'll proactively recommend a tier change when the data supports it.",
  },
  {
    q: 'Do you serve clients outside of Coimbatore?',
    a: "Yes — while we're based in Coimbatore, our clients are spread across Tamil Nadu, other Indian states, and internationally. Digital marketing is location-agnostic. We manage campaigns for brands across India and have worked with NRI-owned businesses abroad.",
  },
  {
    q: 'How do you measure and report success?',
    a: "Every engagement has clear KPIs agreed upfront — follower growth, engagement rate, ROAS, organic traffic, lead volume, etc. You get a monthly report with actual numbers, trends, and the strategy for the next month. No vanity metrics, no fluff.",
  },
  {
    q: "What's the minimum contract duration?",
    a: "Monthly contracts are available, though we recommend at least 3 months to see compounding results. Digital marketing builds momentum — the longer we work together, the better the returns. Quarterly packages also come with additional perks like priority support.",
  },
];

function Item({ faq, open, onToggle }) {
  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: '#E5E5E5' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer gap-4"
      >
        <span className="grotesk font-semibold text-base pr-4" style={{ color: '#111111' }}>
          {faq.q}
        </span>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={{ background: open ? '#FF0000' : '#F4F4F4', color: open ? '#FFFFFF' : '#6B7280' }}
        >
          {open ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-sm leading-relaxed pb-5" style={{ color: '#6B7280' }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <SectionWrapper id="faq" bigText="FAQ" bg="#F4F4F4" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span className="label-pill mb-4 inline-flex"><span className="dot" /> FAQ</span>
          <h2 className="grotesk font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#111111' }}>
            Questions we get<br />
            <span style={{ color: '#FF0000' }}>all the time.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="bg-white rounded-2xl px-7 border"
          style={{ borderColor: '#E5E5E5' }}
        >
          {faqs.map((faq, i) => (
            <Item
              key={i}
              faq={faq}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm mt-8"
          style={{ color: '#6B7280' }}
        >
          Something else on your mind?{' '}
          <a
            href="https://wa.me/918148634409?text=Hi%20ZetaCorp!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            className="font-semibold no-underline"
            style={{ color: '#FF0000' }}
          >
            Ask us on WhatsApp →
          </a>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
