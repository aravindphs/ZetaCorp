import { motion } from 'framer-motion';

const team = [
  { initials: 'AV', name: 'Aravind',              role: 'Founder & Strategy Lead',  skills: ['Brand Strategy', 'Growth Marketing', 'Business Dev'] },
  { initials: 'RP', name: 'Paid Ads Specialist',  role: 'Performance Marketing',    skills: ['Meta Ads', 'Google Ads', 'Funnel Building'] },
  { initials: 'SC', name: 'SEO & Content Lead',   role: 'Organic Growth',           skills: ['Technical SEO', 'Content Strategy', 'Copywriting'] },
  { initials: 'DK', name: 'Design & Branding',    role: 'Creative Director',        skills: ['Visual Identity', 'UI/UX', 'Motion Design'] },
];

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-28" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="section-heading">The People Behind the Work</h2>
          <p className="mt-4 text-base max-w-lg" style={{ color: '#A0A0A0' }}>
            Specialists, not generalists — each with a focused domain of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: '#E8192C' }}
              className="rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center bebas text-xl tracking-widest mb-4"
                style={{ background: 'rgba(232,25,44,0.15)', color: '#E8192C', border: '2px solid rgba(232,25,44,0.3)' }}
              >
                {m.initials}
              </div>
              <h3 className="text-base font-semibold mb-1" style={{ color: '#F0F0F0' }}>{m.name}</h3>
              <p className="text-xs mb-4" style={{ color: '#A0A0A0' }}>{m.role}</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {m.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(232,25,44,0.08)', color: '#E8192C', border: '1px solid rgba(232,25,44,0.2)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
