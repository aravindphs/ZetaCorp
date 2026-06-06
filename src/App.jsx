import './index.css';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import Services     from './components/Services';
import Stats        from './components/Stats';
import CaseStudies  from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team         from './components/Team';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
