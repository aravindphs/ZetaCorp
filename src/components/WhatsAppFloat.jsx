import { motion } from 'framer-motion';

const WA = 'https://wa.me/918148634409?text=Hi%20ZetaCorp!%20I%20want%20a%20free%20digital%20audit%20for%20my%20brand.';

export default function WhatsAppFloat() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[800]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20, delay: 2.5 }}
    >
      {/* Always-on ripple rings */}
      <span
        className="wa-ring-1 absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'rgba(37,211,102,0.35)' }}
      />
      <span
        className="wa-ring-2 absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'rgba(37,211,102,0.25)' }}
      />
      <span
        className="wa-ring-3 absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'rgba(37,211,102,0.15)' }}
      />

      <motion.a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
        style={{ background: '#25D366', zIndex: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {/* WhatsApp icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.534 5.851L.057 23.786c-.066.258.014.531.207.713.128.12.295.181.463.181a.656.656 0 00.196-.031l6.192-1.98A11.908 11.908 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.08A10.083 10.083 0 016.64 20.5l-.444-.264-4.612 1.478 1.5-4.5-.289-.46A10.086 10.086 0 011.92 12C1.92 6.429 6.429 1.92 12 1.92S22.08 6.429 22.08 12 17.571 22.08 12 22.08z"/>
        </svg>
      </motion.a>
    </motion.div>
  );
}
