import React, { useEffect } from 'react';
import { CanvasBackground } from './components/CanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { GitHubStats } from './components/GitHubStats';
import { Certifications } from './components/Certifications';
import { ExtraSections } from './components/ExtraSections';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  useEffect(() => {
    // Custom scroll animation reveal trigger
    const revealItems = document.querySelectorAll('.reveal-item');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen relative font-sans text-slate-800 antialiased selection:bg-teal-50 selection:text-teal-700">
      
      {/* Background visual graphics and canvas */}
      <div className="bg-grid" />
      <div className="bg-gradient-radial" />
      <div className="bg-gradient-radial-bottom" />
      <CanvasBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GitHubStats />
        <Certifications />
        <ExtraSections />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200/60 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#home" className="font-mono text-sm font-extrabold text-slate-700 tracking-wider">
            [ K.H.<span>RUDRA</span> ]
          </a>
          <div className="text-xs text-slate-400 font-mono text-center md:text-right">
            &copy; 2026 Kaustav Harinarayana Rudra. All rights reserved. Deployed for Internships.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
