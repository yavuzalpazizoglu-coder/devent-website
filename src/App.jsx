import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Gallery />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
