import React from 'react';

interface Certification {
  name: string;
  issuer: string;
}

export const Certifications: React.FC = () => {
  const certList: Certification[] = [
    {
      name: 'MongoDB Certified Associate Developer',
      issuer: 'MongoDB Inc.',
    },
    {
      name: 'Joy of Computing using Python',
      issuer: 'NPTEL',
    },
    {
      name: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
    },
    {
      name: 'Cambridge English Certificate',
      issuer: 'Cambridge Assessment',
    },
    {
      name: 'Critical Infrastructure Protection',
      issuer: 'Professional Certification',
    },
  ];

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-label">05 // CERTIFICATIONS</div>
        <h2 className="section-title">Certifications</h2>

        <div className="cert-grid">
          {certList.map((cert, idx) => (
            <div className="cert-card reveal-item" key={idx}>
              <div className="cert-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
