const items = [
  'Social Media Marketing', 'SEO & Content', 'Meta Ads', 'Google Ads',
  'Branding', 'Web Design', 'AI Marketing', 'Instagram Growth',
  'Video Production', 'Analytics & Strategy',
];

function Ticker() {
  return (
    <div className="flex items-center shrink-0">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-5 whitespace-nowrap px-5">
          <span className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: '#2B2B2B' }}>
            {item}
          </span>
          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#FF0000' }} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-4 relative"
      style={{ background: '#F4F4F4', borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #F4F4F4, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #F4F4F4, transparent)' }} />
      <div className="marquee-track flex w-max">
        <Ticker /><Ticker />
      </div>
    </div>
  );
}
