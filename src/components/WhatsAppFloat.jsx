import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919999999999?text=Hi%20ZetaCorp!%20I%20want%20a%20free%20digital%20audit%20for%20my%20brand."
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-2xl"
      style={{ background: '#25D366' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 2 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiMessageCircle size={26} />
    </motion.a>
  );
}
