import { useState } from 'react';
import './index.css';
import Loader       from './components/Loader';
import PopupForm    from './components/PopupForm';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import Services     from './components/Services';
import Stats        from './components/Stats';
import CaseStudies  from './components/CaseStudies';
import Pricing      from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ZigZag       from './components/ZigZag';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <PopupForm />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ZigZag />
        <Services />
        <Stats />
        <ZigZag flip />
        <CaseStudies />
        <ZigZag />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
