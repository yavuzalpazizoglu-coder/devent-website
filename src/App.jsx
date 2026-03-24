import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const OnlineServices = lazy(() => import('./components/OnlineServices'));
const Timeline = lazy(() => import('./components/Timeline'));
const Contact = lazy(() => import('./components/Contact'));
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
            <About />
            <Services />
            <OnlineServices />
            <Timeline />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <CookieConsent />
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  );
}
