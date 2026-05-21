import React, { useEffect } from 'react';
import { CanvasBackground } from './components/CanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  useEffect(() => {
    // Scroll animation trigger
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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      revealItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      {/* Background canvas and grid overlays */}
      <div className="bg-grid" />
      <div className="bg-gradient-radial" />
      <div className="bg-gradient-radial-bottom" />
      <CanvasBackground />

      {/* Navigation bar */}
      <Navbar />

      {/* Main sections */}
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-container">
          <a href="#" className="footer-brand">
            [ K.H.RUDRA ]
          </a>
          <div className="footer-copy">
            &copy; 2026 Kaustav Harinarayana Rudra. All rights reserved. Powered by{' '}
            <span>AI & Data Science</span>.
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
