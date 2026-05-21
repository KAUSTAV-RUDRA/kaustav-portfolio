import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">06 // CONTACT</div>
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          {/* Details */}
          <div className="contact-details reveal-item">
            <div className="contact-cta">
              Want to collaborate or have a question?
              <br />
              Let's connect.
            </div>

            <div className="contact-list">
              {/* Email */}
              <a href="mailto:2300080336aidselge@gmail.com" className="contact-item">
                <div className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-val">2300080336aidselge@gmail.com</span>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+919810906581" className="contact-item">
                <div className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-val">+91 98109 06581</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/kaustavrudra"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">LinkedIn</span>
                  <span className="contact-info-val">linkedin.com/in/kaustavrudra</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/KAUSTAV-RUDRA"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">GitHub</span>
                  <span className="contact-info-val">github.com/KAUSTAV-RUDRA</span>
                </div>
              </a>
            </div>
          </div>

          {/* Profile Sidebar */}
          <div className="profile-panel reveal-item">
            {/* Strengths */}
            <div className="profile-subsection">
              <h3 className="profile-sub-title">Core Strengths</h3>
              <div className="profile-pills">
                <span className="profile-pill">Hard-working</span>
                <span className="profile-pill">Detail-oriented</span>
                <span className="profile-pill">Leadership</span>
                <span className="profile-pill">Teamwork</span>
                <span className="profile-pill">Time management</span>
              </div>
            </div>

            {/* Languages */}
            <div className="profile-subsection">
              <h3 className="profile-sub-title">Languages</h3>
              <div className="profile-pills">
                <span className="profile-pill">English (Fluent)</span>
                <span className="profile-pill">Hindi (Native)</span>
                <span className="profile-pill">Telugu (Native)</span>
              </div>
            </div>

            {/* Hobbies */}
            <div className="profile-subsection">
              <h3 className="profile-sub-title">Hobbies & Interests</h3>
              <div className="profile-pills">
                <span className="profile-pill">Football</span>
                <span className="profile-pill">AI Development</span>
                <span className="profile-pill">Music</span>
                <span className="profile-pill">Travelling</span>
                <span className="profile-pill">Chess</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
