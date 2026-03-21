import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Workflow from './components/Workflow';
import References from './components/References';
import Projects from './components/Gallery';
import Contact from './components/Contact';
import Partners from './components/Partners'; // Added import for Partners
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Workflow />
        <References />
        <Projects />
        <Contact />
      </main>
      <Partners /> {/* Added Partners component */}
      <Footer />
    </LanguageProvider>
  );
}
