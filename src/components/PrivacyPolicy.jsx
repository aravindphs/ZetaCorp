import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you submit a contact form or audit request on this website we collect: your full name, email address, phone number (optional), the service you are interested in, and any message you provide.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'We use your information solely to respond to your inquiry, deliver the requested service or audit, and send relevant service information you have requested. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
  },
  {
    title: '3. Data Processor',
    body: "Our contact forms are processed through FormSubmit (formsubmit.co). Your form data is transmitted securely to our inbox. Please review FormSubmit's privacy policy for details on their data handling.",
  },
  {
    title: '4. Analytics',
    body: 'We use Google Analytics to understand website traffic and user behaviour. This collects anonymised data (pages visited, time on site, device type, approximate location). No personally identifiable information is collected through analytics. You may opt out via your browser settings or the Google Analytics opt-out browser extension.',
  },
  {
    title: '5. Cookies',
    body: 'We use essential session cookies required for the website to function. Google Analytics may set additional cookies as described in their policy. We do not use advertising or cross-site tracking cookies.',
  },
  {
    title: '6. Data Retention',
    body: 'We retain your contact information only as long as necessary to respond to your inquiry and for legitimate business record-keeping, typically no longer than 2 years.',
  },
  {
    title: '7. Your Rights',
    body: 'You have the right to request access to, correction of, or deletion of your personal data held by us. To exercise any of these rights, email us at contact@zetacorpsolutions.com.',
  },
  {
    title: '8. Security',
    body: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.',
  },
  {
    title: '9. Governing Law',
    body: 'This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the IT (Reasonable Security Practices and Sensitive Personal Data) Rules, 2011.',
  },
  {
    title: '10. Contact Us',
    body: 'ZetaCorp Solutions Pvt. Ltd., Coimbatore, Tamil Nadu, India\nEmail: contact@zetacorpsolutions.com\nPhone: +91 97861 01960',
  },
];

export default function PrivacyPolicy({ onClose }) {
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
        className="bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-2xl"
        style={{ maxHeight: '85vh', overflowY: 'auto' }}
        initial={{ scale: 0.93, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Sticky header */}
        <div
          className="sticky top-0 bg-white border-b px-7 py-5 flex items-center justify-between z-10"
          style={{ borderColor: '#E5E5E5' }}
        >
          <h2 className="grotesk font-bold text-lg" style={{ color: '#111111' }}>Privacy Policy</h2>
          <button
            onClick={onClose}
            className="transition-colors cursor-pointer"
            style={{ color: '#6B7280', background: 'none', border: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#111111'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#6B7280'; }}
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="px-7 py-6 flex flex-col gap-6 text-sm leading-relaxed" style={{ color: '#2B2B2B' }}>
          <p className="text-xs" style={{ color: '#6B7280' }}>Last updated: June 2026</p>
          <p>
            ZetaCorp Solutions Pvt. Ltd. ("ZetaCorp", "we", "our") is committed to protecting your personal
            information and your right to privacy. This policy explains what data we collect, how we use it,
            and your rights.
          </p>

          {sections.map(({ title, body }) => (
            <div key={title}>
              <p className="grotesk font-semibold mb-1.5" style={{ color: '#111111' }}>{title}</p>
              <p style={{ whiteSpace: 'pre-line' }}>{body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
