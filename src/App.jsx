import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const References = lazy(() => import('./components/References'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Gallery'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
const Partners = lazy(() => import('./components/Partners'));
const Footer = lazy(() => import('./components/Footer'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <References />
            <About />
            <Services />
            <Projects />
            <Timeline />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Partners />
          <Footer />
          <CookieConsent />
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  );
}
