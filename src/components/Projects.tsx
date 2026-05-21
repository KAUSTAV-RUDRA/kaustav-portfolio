import React, { useState } from 'react';
import { X, Award, FileText, CheckCircle2 } from 'lucide-react';
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
  visualMockup: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 'smart-interview',
      title: 'Smart Interview Platform',
      category: 'AI & Full Stack',
      shortDesc: 'AI-driven candidate assessment system analyzing communication skill parameters and technical responses in real-time.',
      longDesc: 'Engineered a comprehensive automated evaluation system that evaluates video resumes and audio responses. It leverages deep learning architectures to compute facial expression signals, text sentiment parameters, and verbal fluency rates, compiling a unified dashboard of metrics for recruiters.',
      features: [
        'Real-time Speech-to-Text transcription with NLP parsing.',
        'Facial expression vector analysis with OpenCV and neural weights.',
        'Fluency scoring engine monitoring pauses and speed deviations.',
        'Full MERN database pipeline storing recruiter metrics and candidate logs.'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'OpenCV', 'TensorFlow', 'WebSockets'],
      impact: 'Reduces HR pre-screening durations by 60% with standardized analytics.',
      github: 'https://github.com/KAUSTAV-RUDRA',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-900 font-mono text-[9px] p-4 text-teal-400 select-none flex flex-col justify-between">
          <div className="flex justify-between border-b border-slate-800 pb-1.5 text-slate-500">
            <span>[EVALUATOR_SERVICE]</span>
            <span className="text-emerald-500 animate-pulse">● LOGGED IN</span>
          </div>
          <div className="space-y-1 my-2 grow">
            <p className="text-slate-400">&gt; analyzing candidate_stream_01.mp4</p>
            <p className="text-sky-400">&gt; FPS: 29.8 | TEXT_ACCURACY: 98.4%</p>
            <p className="text-teal-400">&gt; EMOTION_PROB: [Happy: 0.85, Neutral: 0.12]</p>
            <p className="text-yellow-500">&gt; FLUENCY_SCORE: 8.9 / 10.0</p>
          </div>
          <div className="bg-slate-800/80 px-2 py-1 rounded text-center text-[10px] text-white">
            COMPILING REPORT... 88%
          </div>
        </div>
      )
    },
    {
      id: 'doc-summarizer',
      title: 'Multi Document Summarizer',
      category: 'NLP & Deep Learning',
      shortDesc: 'Intelligent transformer pipeline digesting multiple academic PDFs and compiling unified comparative brief files.',
      longDesc: 'Developed a system that processes multiple large document attachments, groups overlapping text arguments via matrix factorizations, and passes core content structures into a custom fine-tuned transformer language model to create condensed, cross-referenced executive digests.',
      features: [
        'Simultaneous PDF parser parsing text coordinates and references.',
        'Lexical cosine vector comparison to filter duplicate records.',
        'HuggingFace Transformer endpoint yielding extractive abstracts.',
        'Downloadable Markdown brief files containing source attribution.'
      ],
      tech: ['Python', 'FastAPI', 'PyTorch', 'Transformers', 'Docker', 'React'],
      impact: 'Processes up to 5 parallel 100-page papers in less than 35 seconds.',
      github: 'https://github.com/KAUSTAV-RUDRA',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-800 p-4 select-none flex flex-col justify-between">
          <div className="flex gap-2 items-center text-xs border-b border-slate-700 pb-2">
            <FileText className="w-4 h-4 text-teal-500" />
            <span className="text-slate-200 font-mono">summary_draft.md</span>
          </div>
          <div className="my-2 space-y-1.5 grow font-mono text-[9px] text-slate-300">
            <p className="font-bold text-teal-400"># Executive Abstract</p>
            <p className="line-clamp-2">This paper outlines neural connections utilizing gradient descent weights across dense layer networks...</p>
            <div className="flex gap-1.5 flex-wrap">
              <span className="bg-teal-900/40 text-teal-300 text-[8px] px-1.5 py-0.5 rounded font-mono">Accuracy: 95.8%</span>
              <span className="bg-sky-900/40 text-sky-300 text-[8px] px-1.5 py-0.5 rounded font-mono">Tokens: 4.2k</span>
            </div>
          </div>
          <div className="bg-teal-600 text-white font-mono text-[10px] py-1 rounded text-center font-bold">
            DOWNLOAD REPORT
          </div>
        </div>
      )
    },
    {
      id: 'rice-grain',
      title: 'Rice Type Quality Classifier',
      category: 'Computer Vision & DL',
      shortDesc: 'Edge-optimized CNN classifier cataloging grain varieties and detecting broken percentage parameters.',
      longDesc: 'Designed and trained custom Convolutional Neural Networks (CNNs) using PyTorch and OpenCV. The system ingests high-resolution images of grain trays, localizes individual rice kernels, classifies their cultivars, and evaluates grain damage ratios for industrial grading.',
      features: [
        'Image processing pipeline adjusting shadows and contour gradients.',
        'Custom PyTorch CNN yielding 98.6% categorization score.',
        'Broken grain detection tracking bounding box area ratios.',
        'Fast REST API endpoint deployed on lightweight containers.'
      ],
      tech: ['PyTorch', 'OpenCV', 'FastAPI', 'NumPy', 'Docker', 'TailwindCSS'],
      impact: 'Yields 98.6% classification accuracy under varying lighting levels.',
      github: 'https://github.com/KAUSTAV-RUDRA',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-950 relative overflow-hidden select-none">
          {/* Simulated grain tray grids with boxes */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 p-2 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-teal-500/50 bg-teal-500/5 rounded flex flex-col justify-between p-1">
                <span className="text-[8px] font-mono text-teal-400">K_{i} [OK]</span>
                <span className="text-[7px] font-mono text-slate-400 text-right">99.1%</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 border border-slate-700/50 rounded p-1 text-[8px] font-mono text-white text-center">
            VAL_ACC: <span className="text-emerald-400 font-bold">98.6%</span> | RATIO: Basmati
          </div>
        </div>
      )
    },
    {
      id: 'uber-mern',
      title: 'Uber-style MERN Platform',
      category: 'Full Stack Web',
      shortDesc: 'Real-time passenger navigation tracking system with socket integrations and geospatial queries.',
      longDesc: 'Built a multi-user transport dispatcher featuring reactive client maps, driver matching systems, and path optimization. Implemented high-performance geospatial indices in MongoDB and socket connections for immediate state tracking between passenger requests and driver routes.',
      features: [
        'Geospatial MongoDB indexes (`$nearSphere`) querying coordinates.',
        'Real-time socket.io integrations syncing driver trajectories.',
        'Leaflet client-side maps tracking routes.',
        'Secure JWT authorization with password hashing algorithms.'
      ],
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Mapbox'],
      impact: 'Manages passenger driver location notifications under 150ms socket latency.',
      github: 'https://github.com/KAUSTAV-RUDRA',
      live: '#',
      visualMockup: (
        <div className="w-full h-full bg-slate-900 p-4 font-mono text-[9px] text-slate-300 select-none flex flex-col justify-between">
          <div className="flex justify-between border-b border-slate-800 pb-1.5 text-slate-500">
            <span>[MAPS_ENGINE]</span>
            <span className="text-sky-500">LATENCY: 45ms</span>
          </div>
          <div className="my-2 space-y-1 grow relative">
            {/* Draw schematic line path representing route */}
            <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-slate-800" />
            <div className="absolute top-1/2 left-4 right-8 h-0.5 bg-teal-500" />
            <div className="absolute top-1/2 left-4 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal-500" />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-sky-500" />
            <div className="absolute bottom-1 left-2 text-[7px] text-slate-500">
              POS_Passenger: [17.385, 78.486]
            </div>
          </div>
          <div className="bg-slate-800 py-1.5 rounded text-center text-white text-[9px]">
            MATCHED DRIVER: #D-8822 (ETA: 4 MIN)
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
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
                    View Architecture
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
                  </div>
                  
                  <h3 className="font-display font-bold text-xl text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
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
                      <h4 className="font-mono text-[10px] uppercase font-bold text-teal-800">Performance Impact</h4>
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
                    Close case study
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
