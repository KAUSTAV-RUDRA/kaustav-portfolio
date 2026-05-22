import React, { useState } from 'react';
import { X, Award, CheckCircle2, ShieldAlert, Video, Lock, Sprout, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  tech: string[];
  impact: string;
  github: string;
  live: string;
  badge?: string;
  visualMockup: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 'safechild-ai',
      title: 'SafeChild AI — HappyChild AI Guardian',
      category: 'Multimodal AI / NLP / CV',
      shortDesc: 'A multimodal child protection app utilizing text classification, speech analysis, and image scans to detect exploitation.',
      longDesc: 'Built at the NextGen Hackathon 2025 (ranking in the Top 0.6% among 3,900+ teams). This platform monitors online activity using Natural Language Processing (NLP) text classification algorithms to flag predatory patterns, speech-to-text audio transcript analysis, and computer vision image scanners to secure digital environments for children.',
      features: [
        'Advanced NLP text classification targeting online grooming and predatory behaviors.',
        'Audio speech-to-text pipeline parsing verbal conversations for threat analysis.',
        'Computer vision image scanners classifying and filtering explicit or age-restricted content.',
        'High-performance warning triggers sending immediate reports to parent dashboards.'
      ],
      tech: ['Python', 'NLP', 'Speech-to-Text', 'Computer Vision', 'Multimodal AI'],
      impact: '🏆 Hackathon Winner — ranked Top 0.6% globally among 3,900+ competing teams.',
      github: 'https://github.com/KAUSTAV-RUDRA/HappyChild-AI-Guardian',
      live: '#',
      badge: '🏆 Top 0.6% Finalist',
      visualMockup: (
        <div className="w-full h-full bg-slate-950 font-mono text-[9px] p-4 text-emerald-400 select-none flex flex-col justify-between relative">
          <div className="absolute top-2 right-2 bg-teal-500/20 border border-teal-500/30 px-2 py-0.5 rounded text-[8px] text-teal-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <Award className="w-2.5 h-2.5" /> NextGen
          </div>
          <div className="flex justify-between border-b border-slate-900 pb-1.5 text-slate-500">
            <span className="flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5 text-rose-500" /> [SAFECHILD_DAEMON]</span>
            <span className="text-emerald-500 animate-pulse">● SECURED</span>
          </div>
          <div className="space-y-1 my-2 grow">
            <p className="text-slate-400">&gt; NLP: groom_prob &lt; 0.02 [Safe]</p>
            <p className="text-sky-400">&gt; CV Image Scan: 0 flags detected</p>
            <p className="text-emerald-400">&gt; Voice Pipeline: Active & listening</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-center text-[9px] text-teal-300 font-bold">
            THREAT_INDEX: 0.00 / 10.00
          </div>
        </div>
      )
    },
    {
      id: 'smart-interview',
      title: 'Smart Interview — AI Mock Platform',
      category: 'AI / NLP / Full-Stack',
      shortDesc: 'End-to-end candidate assessment platform generating skill-based questions and performance analytics in real-time.',
      longDesc: 'Developed a comprehensive AI-driven interview simulation interface supporting 10+ skill domains. The engine generates tailored questions utilizing TF-IDF and graph-based NLP algorithms, maps candidates to adaptive routing schedules, and renders real-time performance analytics through a customized machine learning inference dashboard.',
      features: [
        'Adaptive interview questionnaire generator powered by graph-based NLP pipelines.',
        'Automatic routing adjusting question difficulties to candidate skill profiles.',
        'Real-time metrics tracking speech fluency, vocabulary, and answer precision.',
        'Fully-responsive recruiter console storing detailed histories and candidate logs.'
      ],
      tech: ['Python', 'Flask', 'Scikit-learn', 'NLP', 'SQLite', 'JavaScript'],
      impact: 'Slashes pre-screening review queues with automated evaluation reports.',
      github: 'https://github.com/KAUSTAV-RUDRA/smartinterview',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-900 font-mono text-[9px] p-4 text-teal-400 select-none flex flex-col justify-between">
          <div className="flex justify-between border-b border-slate-850 pb-1.5 text-slate-500">
            <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5 text-teal-600" /> [INTERVIEW_ENGINE]</span>
            <span className="text-sky-400">SESSION: ACTIVE</span>
          </div>
          <div className="space-y-1 my-2 grow">
            <p className="text-slate-400">&gt; routing candidate to MERN domain</p>
            <p className="text-teal-400">&gt; NLP Graph: question_8 generated</p>
            <p className="text-yellow-500">&gt; ML inference latency: 32ms</p>
          </div>
          <div className="bg-teal-950/60 border border-teal-500/20 px-2 py-1 rounded text-center text-[9px] text-teal-300 font-bold">
            EVAL_SCORE: 8.9 / 10.0
          </div>
        </div>
      )
    },
    {
      id: 'rice-classifier',
      title: 'Rice Grain Classifier',
      category: 'Computer Vision / DL',
      shortDesc: 'Deep learning system classifying 5 rice grain varieties and detecting damage parameters with 94% accuracy.',
      longDesc: 'Led a student development team to design, benchmark, and deploy a computer vision classifier cataloging 5 distinct varieties of commercial rice grains with a validation score of 94%. Compared custom Convolutional Neural Networks (CNN) models against pre-trained VGG-16 networks, utilizing custom-designed image data augmentation pipelines to optimize low-lighting performance.',
      features: [
        'Relies on custom image data augmentation pipelines stabilizing edge predictions.',
        'Contour segmentation localizing individual grains to extract size/area ratios.',
        'Comparative benchmark analysis analyzing custom CNN vs. transfer learning on VGG-16.',
        'Structured team leadership managing code reviews, workflows, and task tracking.'
      ],
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'VGG-16', 'OpenCV'],
      impact: 'Yielded 94% classification accuracy across all test cultivars.',
      github: 'https://github.com/KAUSTAV-RUDRA',
      live: '#',
      badge: '👥 Team Lead',
      visualMockup: (
        <div className="w-full h-full bg-slate-950 relative overflow-hidden select-none p-2 flex flex-col justify-between">
          <div className="grid grid-cols-4 gap-1 grow">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-teal-500/40 bg-teal-500/5 rounded flex flex-col justify-between p-1 items-center">
                <div className="w-2.5 h-6 rounded-full bg-slate-100/40 border border-teal-300/40 rotate-12 mt-1"></div>
                <span className="text-[7px] font-mono text-teal-400">G_{i} [OK]</span>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded p-1 text-[8px] font-mono text-white text-center mt-1 flex justify-between px-2">
            <span>MODEL: VGG-16</span>
            <span className="text-emerald-400 font-bold">ACCURACY: 94.2%</span>
          </div>
        </div>
      )
    },
    {
      id: 'fileshare',
      title: 'File Sharing Application',
      category: 'Full-Stack Web',
      shortDesc: 'Secure file-sharing platform implementing role-based access control, file encryption, and access logs.',
      longDesc: 'Designed and implemented a secure file-sharing web application enabling safe, collaborative file exchange. Crafted with Python and Flask, it features robust Role-Based Access Control (RBAC) schemas, end-to-end file encryption modules, customized expiry settings for shared links, and detailed database logs tracking every access request.',
      features: [
        'Role-Based Access Control (RBAC) restrictively filtering file directory layouts.',
        'End-to-end file encryption and secure download verification pipelines.',
        'Link expiry timers and access count caps to minimize exposure risks.',
        'Secure password hashing via bcrypt and detailed audit trails on downloads.'
      ],
      tech: ['Python', 'Flask', 'HTML/CSS', 'JavaScript', 'SQLite', 'bcrypt'],
      impact: 'Ensures zero-leak file sharing operations with auditable access logs.',
      github: 'https://github.com/KAUSTAV-RUDRA/fileshare',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-900 font-mono text-[9px] p-4 text-sky-400 select-none flex flex-col justify-between">
          <div className="flex justify-between border-b border-slate-850 pb-1.5 text-slate-500">
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-sky-500" /> [VAULT_SHARE]</span>
            <span className="text-emerald-500">AES-256</span>
          </div>
          <div className="space-y-1 my-2 grow">
            <p className="text-slate-400">&gt; user: analyst_team_1 authenticated</p>
            <p className="text-sky-400">&gt; decrypting: credentials_audit.xlsx</p>
            <p className="text-slate-500">&gt; Link Expiry: 1h 45m | Downloads: 1/3</p>
          </div>
          <div className="bg-sky-950/60 border border-sky-500/20 px-2 py-1 rounded text-center text-[9px] text-sky-300 font-bold">
            FILE_TRANSFER_COMPLETE
          </div>
        </div>
      )
    },
    {
      id: 'virtual-gardening',
      title: 'Virtual Gardening Assistant',
      category: 'Full-Stack Web',
      shortDesc: 'Interactive garden planning assistant delivering care schedules and plant recommendations.',
      longDesc: 'Developed a responsive and interactive virtual gardening assistant. Designed to help users plan garden layouts, the app features customized plant recommendations based on local environment profiles, schedules care routines, and builds structured watering calendars.',
      features: [
        'Interactive layout system allowing visual mapping of garden grids.',
        'Customized care schedulers tracking watering and pruning dates.',
        'Environment-aware recommendations cataloging ideal garden varieties.',
        'Lightweight, client-side data persistence for optimal performance.'
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      impact: 'Simplifies plant monitoring with a clean, responsive scheduler.',
      github: 'https://github.com/KAUSTAV-RUDRA/VirtualGardeningAssistant',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-900 font-mono text-[9px] p-4 text-emerald-400 select-none flex flex-col justify-between">
          <div className="flex justify-between border-b border-slate-850 pb-1.5 text-slate-500">
            <span className="flex items-center gap-1"><Sprout className="w-3.5 h-3.5 text-emerald-500" /> [GARDEN_SYSTEM]</span>
            <span className="text-emerald-500">MONITOR_ON</span>
          </div>
          <div className="space-y-1.5 my-2 grow">
            <div className="flex justify-between text-slate-400">
              <span>- Tomato (Grid A1)</span>
              <span className="text-emerald-400 font-bold">Watering OK</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>- Aloe Vera (Grid B3)</span>
              <span className="text-yellow-500 font-bold">Water Due</span>
            </div>
          </div>
          <div className="bg-emerald-950/60 border border-emerald-500/20 px-2 py-1 rounded text-center text-[9px] text-emerald-300 font-bold">
            NEXT REMINDER: 08:00 AM
          </div>
        </div>
      )
    },
    {
      id: 'django-project',
      title: 'Django Project',
      category: 'Backend Web',
      shortDesc: 'Django application demonstrating MVT architecture, relational models, views, and template configurations.',
      longDesc: 'Constructed a structured full-stack learning application implementing Django’s Model-View-Template (MVT) architecture. Designed relational schemas, created customized database views, and mapped template directories to showcase backend engineering best practices.',
      features: [
        'Robust Django MVT structure cleanly separation server layers.',
        'Relational database schemas mapping models to backends.',
        'Comprehensive CRUD operations handling dashboard objects.',
        'Dynamic templating render data-driven views.'
      ],
      tech: ['Python', 'Django', 'HTML/CSS'],
      impact: 'Demonstrates robust backend engineering structures and database queries.',
      github: 'https://github.com/KAUSTAV-RUDRA/djangoproject',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-950 font-mono text-[9px] p-4 text-indigo-400 select-none flex flex-col justify-between">
          <div className="flex justify-between border-b border-slate-900 pb-1.5 text-slate-500">
            <span className="flex items-center gap-1"><Database className="w-3.5 h-3.5 text-indigo-500" /> [DJANGO_SERVER]</span>
            <span className="text-emerald-500">SYS_OK</span>
          </div>
          <div className="space-y-1 my-2 grow text-slate-400">
            <p>&gt; python manage.py runserver</p>
            <p className="text-indigo-400">&gt; DB Models: [Profile, Post, Log]</p>
            <p className="text-slate-500">&gt; GET /api/v1/posts/ HTTP/2 200</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-center text-[9px] text-indigo-300 font-bold">
            DATABASE_URL: sqlite:///db.sqlite3
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 border-b border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            Featured Works
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
            Production-Ready Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Card Header Visual Mockup */}
              <div className="h-48 border-b border-slate-200/50 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                {project.visualMockup}
                {/* Overlay details button on hover */}
                <div className="absolute inset-0 bg-slate-900/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-slate-800 font-mono text-xs font-semibold uppercase px-5 py-2.5 rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
                  >
                    View Case Study
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold text-teal-600 tracking-wider">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="font-mono text-[9px] font-bold bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-200/20">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-slate-800 mb-2 group-hover:text-teal-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="font-mono text-xs text-teal-600 hover:text-teal-700 font-bold transition-colors"
                    >
                      Read Case Study &gt;
                    </button>
                    
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-slate-200 hover:border-teal-200 hover:bg-teal-50/50 rounded-lg text-slate-500 hover:text-teal-600 transition-all"
                        title="View Github Source"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Case Study Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />

              {/* Modal Card Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-start sticky top-0 bg-white z-10">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-teal-600 tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-slate-800">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6 flex-grow overflow-y-auto">
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase font-bold text-slate-500">Case Study Overview</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedProject.longDesc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase font-bold text-slate-500">Key Features Engineered</h4>
                    <ul className="space-y-2 list-none pl-0">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-slate-600 text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 flex gap-3 items-start">
                    <Award className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-mono text-[10px] uppercase font-bold text-teal-800">Performance Highlight / Impact</h4>
                      <p className="text-teal-900 text-xs mt-0.5 leading-relaxed font-semibold">
                        {selectedProject.impact}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="font-mono text-xs uppercase font-bold text-slate-500">Tech Stack Breakdown</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Actions Footer */}
                <div className="p-6 border-t border-slate-100 flex justify-between bg-slate-50/60 rounded-b-2xl">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-mono text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    <svg className="w-4 h-4 text-slate-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>Source Code</span>
                  </a>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-slate-800 hover:bg-slate-900 text-white font-mono text-xs font-semibold px-5 py-2.5 rounded-xl transition-all"
                  >
                    Close Case Study
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
