import React, { useEffect, useRef } from 'react';

export const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distanceX = mouseX - cardCenterX;
      const distanceY = mouseY - cardCenterY;

      const maxDistance = 600;
      if (Math.abs(distanceX) < maxDistance && Math.abs(distanceY) < maxDistance) {
        const rotX = (distanceY / (rect.height / 2)) * -6;
        const rotY = (distanceX / (rect.width / 2)) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
      } else {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.transition = 'transform 0.5s ease';
    };

    const handleMouseEnter = () => {
      card.style.transition = 'none';
    };

    window.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (card) {
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  return (
    <section id="about">
      <div className="container">
        <div className="section-label">01 // OVERVIEW</div>
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-bio reveal-item">
            <p>
              Hi, I'm Kaustav. I'm a final-year AI & Data Science engineering student at KL University. I enjoy building things that solve actual problems—whether that means training a computer vision model to inspect objects, setting up NLP pipelines, or shipping full-stack web applications.
            </p>
            <p>
              I focus on backend engineering, writing clean code, and thinking in modular systems. My goal is to build software that is reliable and scales well under load, while keeping the architecture simple and readable.
            </p>
            <p>
              Working with different teams in fast-paced hackathons has taught me how to take ownership of a feature, write good documentation, and ship working code under tight deadlines. I'm always looking to learn from other developers and tackle new engineering challenges.
            </p>
          </div>

          <div className="stats-card-wrapper reveal-item">
            <div className="stats-card" ref={cardRef}>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-val">9.33</div>
                  <div className="stat-label">CGPA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">02</div>
                  <div className="stat-label">Hackathons</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">04</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>

              <div className="edu-list">
                <div className="edu-item">
                  <div className="edu-inst">KL University, Vijayawada</div>
                  <div className="edu-degree">B.Tech in Artificial Intelligence & Data Science</div>
                  <div className="edu-meta">2023–Present | CGPA: 9.33</div>
                </div>
                <div className="edu-item">
                  <div className="edu-inst">Apeejay International School, UP</div>
                  <div className="edu-degree">12th Standard CBSE (PCM)</div>
                  <div className="edu-meta">2021–2023</div>
                </div>
                <div className="edu-item">
                  <div className="edu-inst">Apeejay International School, UP</div>
                  <div className="edu-degree">10th Standard CBSE</div>
                  <div className="edu-meta">Class of 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
