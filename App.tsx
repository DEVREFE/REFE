import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import MarqueeCTA from './components/MarqueeCTA';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="bg-refe-black min-h-screen text-white">
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Process />
        <MarqueeCTA />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;