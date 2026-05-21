import React from 'react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-label">02 // HACKATHONS</div>
        <h2 className="section-title">Hackathons & Milestones</h2>

        <div className="achievements-timeline">
          {/* JPMorgan */}
          <div className="achieve-card reveal-item">
            <div className="achieve-dot" />
            <div className="achieve-box">
              <div className="achieve-header">
                <h3 className="achieve-title">JPMorgan Chase — Code for Good 2025</h3>
                <span className="achieve-badge">HYDERABAD · ON-SITE</span>
              </div>
              <div className="achieve-role">
                <span>Selected Participant</span>
                <span>·</span>
                <span>Backend Developer</span>
                <span>·</span>
                <span>24-Hour Hackathon</span>
              </div>
              <ul className="achieve-bullets">
                <li>Collaborated in a 24-hour sprint to build REST APIs and data flow for Visions Global Empowerment India (an education and healthcare non-profit).</li>
                <li>Worked directly with JPMorgan engineers on-campus to design and deploy the backend under strict time limits.</li>
              </ul>
            </div>
          </div>

          {/* NextGen */}
          <div className="achieve-card reveal-item">
            <div className="achieve-dot" />
            <div className="achieve-box">
              <div className="achieve-header">
                <h3 className="achieve-title">NextGen Hackathon 2025</h3>
                <span className="achieve-badge">TOP 5% IN FINALS</span>
              </div>
              <div className="achieve-role">
                <span>ACM Fremont USA & SCRS India</span>
                <span>·</span>
                <span>Team Lead: Deep Learners</span>
                <span>·</span>
                <span>3,900+ Teams</span>
              </div>
              <ul className="achieve-bullets">
                <li>Led a team of four to design SafeChild AI, a mobile application that flags online safety threats to children.</li>
                <li>Built a pipeline combining text classification, audio transcription, and image analysis to identify risks as they happen.</li>
                <li>Shortlisted for the national finals, placing in the top 0.6% of the theme.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
