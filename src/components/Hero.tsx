import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const words = ['Software Engineer', 'AI & Data Science Student', 'Systems Builder'];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentWord = words[wordIdx];
    let timer: number;

    const tick = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      } else {
        setText(currentWord.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }
    };

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentWord.length) {
      speed = 2200; // Pause at the end of the word
      setIsDeleting(true);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      speed = 400; // Delay before starting next word
    }

    timer = window.setTimeout(tick, speed);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, wordIdx]);

  return (
    <section className="hero-sec" id="home">
      <div className="container hero-content">
        <div className="hero-tag" style={{ opacity: 1, transform: 'none' }}>
          SYSTEMS & INTELLIGENCE
        </div>
        <h1 className="hero-name" style={{ opacity: 1, transform: 'none' }}>
          Kaustav Harinarayana Rudra
        </h1>
        <div className="hero-role" style={{ opacity: 1, transform: 'none' }}>
          <span>{text}</span>
          <span className="typewriter-cursor" />
        </div>
        <div className="hero-ctas" style={{ opacity: 1, transform: 'none' }}>
          <a href="#projects" className="btn btn-primary">
            VIEW PROJECTS
          </a>
          <a href="mailto:2300080336aidselge@gmail.com" className="btn btn-secondary">
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};
