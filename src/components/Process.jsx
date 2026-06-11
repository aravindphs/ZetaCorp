import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const steps = [
  {
    num: '01',
    title: 'Free Audit',
    desc: 'We deep-dive into your current digital presence — website, social, ads, SEO — and map every gap and opportunity.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Strategy Build',
    desc: "A custom growth roadmap built around your brand's goals, audience, and competitive landscape. No templates.",
    icon: '🗺️',
  },
  {
    num: '03',
    title: 'Launch & Execute',
    desc: 'We go live across your chosen channels — content, ads, SEO — with precision and creative that actually converts.',
    icon: '🚀',
  },
  {
    num: '04',
    title: 'Optimise & Scale',
    desc: 'Weekly data review, A/B testing, and iterative refinement. Every rupee works harder week over week.',
    icon: '📈',
  },
  {
    num: '05',
    title: 'Report & Grow',
    desc: 'Clear monthly reports — what worked, what we learned, and the exact next moves to keep compounding growth.',
    icon: '📊',
  },
];

/* Animated bezier path between two step nodes */
function Connector({ index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end center'] });
  const pathLen = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /* Alternate curve direction for visual interest */
  const isLeft = index % 2 === 0;
  const cx = isLeft ? 140 : -140;

  return (
    <div ref={ref} className="hidden lg:flex justify-center items-center" style={{ height: 80 }}>
      <svg width="300" height="80" viewBox="0 0 300 80" fill="none" overflow="visible">
        {/* Static dashed base */}
        <path
          d={`M 150 0 C ${150 + cx} 20, ${150 - cx} 60, 150 80`}
          stroke="#E5E5E5"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
        />
        {/* Animated red glow on top */}
        <motion.path
          d={`M 150 0 C ${150 + cx} 20, ${150 - cx} 60, 150 80`}
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength: pathLen }}
          strokeDasharray="1 0"
        />
      </svg>
    </div>
  );
}

export default function Process() {
  return (
    <SectionWrapper id="process" bigText="PROCESS" bg="#FFFFFF" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="label-pill mb-4 inline-flex"><span className="dot" /> How we work</span>
          <h2 className="grotesk font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#111111' }}>
            From first call to<br />
            <span style={{ color: '#FF0000' }}>measurable results.</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            A transparent, repeatable process that compounds over time. Here's exactly what partnering with ZetaCorp looks like.
          </p>
        </motion.div>

        {/* Desktop: centered vertical stack with bezier connectors */}
        <div className="flex flex-col items-center">
          {steps.map((step, i) => (
            <div key={step.num} className="w-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.07)' }}
                className="w-full max-w-lg rounded-2xl border p-7 transition-all duration-300"
                style={{ background: '#F4F4F4', borderColor: '#E5E5E5' }}
              >
                <div className="flex items-start gap-5">
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: '#FFFFFF', border: '1px solid #E5E5E5' }}
                    >
                      {step.icon}
                    </span>
                    <span
                      className="grotesk font-bold text-xs tracking-wider"
                      style={{ color: '#FF0000' }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="grotesk font-bold text-lg mb-2" style={{ color: '#111111' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>

              {/* Bezier connector between steps */}
              {i < steps.length - 1 && <Connector index={i} />}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
