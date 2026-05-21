import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'ACHIEVEMENTS', href: '#achievements' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);

      // Section tracking
      const sections = document.querySelectorAll('section');
      let currentSectionId = '';
      sections.forEach((sec) => {
        const secTop = sec.offsetTop - 120;
        const secHeight = sec.clientHeight;
        if (scrollTop >= secTop && scrollTop < secTop + secHeight) {
          currentSectionId = sec.getAttribute('id') || '';
        }
      });
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }} />
      <header className={isScrolled ? 'header-scrolled' : ''}>
        <div className="container nav-container">
          <a href="#" className="logo">
            [ K.H.<span>RUDRA</span> ]
          </a>
          
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
};
