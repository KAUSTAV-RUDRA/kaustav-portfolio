import React from 'react';
import { ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
}

export const Certifications: React.FC = () => {
  const certList: Certification[] = [
    {
      name: 'MongoDB Certified Associate Developer',
      issuer: 'MongoDB Inc.',
      date: 'Jan 2024',
      verifyUrl: 'https://mongodb.com'
    },
    {
      name: 'Joy of Computing using Python',
      issuer: 'NPTEL (IIT Madras)',
      date: 'Nov 2024',
      verifyUrl: 'https://nptel.ac.in'
    },
    {
      name: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: 'Dec 2024',
      verifyUrl: 'https://salesforce.com'
    },
    {
      name: 'Cambridge English Certificate',
      issuer: 'Cambridge Assessment',
      date: 'May 2024',
      verifyUrl: 'https://cambridgeenglish.org'
    },
    {
      name: 'Critical Infrastructure Protection',
      issuer: 'CIS Security Council',
      date: 'Aug 2024',
      verifyUrl: 'https://cisa.gov'
    }
  ];

  return (
    <section id="certifications" className="py-24 border-b border-slate-100 bg-slate-50/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            Accreditation
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
            Professional Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certList.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card glowing ring */}
              <div className="absolute inset-0 border border-teal-500/0 group-hover:border-teal-500/10 rounded-2xl transition-all" />

              <div className="space-y-4 relative z-10">
                {/* Certification Icon & Date */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-teal-50 rounded-xl border border-teal-100/50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certification Details */}
                <div>
                  <h3 className="font-sans font-bold text-slate-800 text-sm md:text-base leading-snug group-hover:text-teal-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-slate-400">
                  Credential ID Verified
                </span>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
