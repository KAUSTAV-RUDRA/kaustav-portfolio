import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple viewport scroll tracking for active state
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 font-mono text-xl font-bold text-slate-800">
          <Terminal className="w-5 h-5 text-teal-600" />
          <span>K.H.</span>
          <span className="text-teal-600 font-display">RUDRA</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.label} className="relative">
                  <a
                    href={item.href}
                    className={`font-mono text-sm font-medium tracking-wide transition-colors py-2 relative block ${
                      isActive ? 'text-teal-600 font-bold' : 'text-slate-600 hover:text-teal-600'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600"
                        transition={{ type: 'spring' as const, stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <a
            href="#contact"
            className="font-mono text-xs uppercase font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200/50 px-4 py-2 rounded-full transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-teal-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 border-b border-slate-100 overflow-hidden shadow-inner"
          >
            <ul className="flex flex-col items-center gap-6 py-8 px-6 list-none">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-mono text-lg font-medium tracking-wide transition-colors ${
                        isActive ? 'text-teal-600 font-bold' : 'text-slate-600 hover:text-teal-600'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="font-mono inline-block text-sm uppercase tracking-wider font-semibold text-white bg-teal-600 hover:bg-teal-700 px-6 py-2.5 rounded-full transition-all duration-200"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
