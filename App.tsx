import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Work from './components/Work';
import ProblemSolution from './components/ProblemSolution';
import Methodology from './components/Methodology';
import Process from './components/Process';
import Performance from './components/Performance';
import Footer from './components/Footer';
import TechMarquee from './components/TechMarquee';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="bg-brand-black min-h-screen text-white selection:bg-brand-titanium selection:text-black">
        <Navbar />
        <Hero />
        <TechMarquee />
        <Philosophy />
        <Services />
        <Work />
        <ProblemSolution />
        <Methodology />
        <Process />
        <Performance />
        <Footer />
      </main>
    </LanguageProvider>
  );
};

export default App;