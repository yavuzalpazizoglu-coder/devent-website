import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Stats from './components/Stats';
import References from './components/References';
import Projects from './components/Gallery';
import Contact from './components/Contact';
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
        <Stats />
        <References />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
