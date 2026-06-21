import React from 'react';
import { Briefcase, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExtraSections: React.FC = () => {
  const experiences = [
    {
      role: 'Selected Participant',
      company: 'JPMorgan Chase — Code for Good 2025 (Hyderabad)',
      period: '2025',
      desc: 'Collaborated in a high-pressure 24-hour hackathon to engineer a full-stack platform supporting a partner NGO\'s operations. Built responsive frontend views, established database schemas, and integrated REST APIs to streamline reporting processes under the guidance of industry mentors.'
    },
    {
      role: 'Team Lead & Top 0.6% Finalist',
      company: 'NextGen Hackathon 2025 (ACM Fremont & SCRS India)',
      period: '2025',
      desc: 'Directed a three-member development team in building a deep learning image classifier for cultivar identification. Structured model architectures, benchmarked CNN vs VGG-16 networks, and designed data augmentation pipelines, securing a top 0.6% placement among over 3,900 competing teams.'
    }
  ];

  const currentFocus = [
    { name: 'LLM Fine-Tuning', desc: 'Experimenting with parameter-efficient fine-tuning (PEFT/LoRA) on open-weight models to build domain-specific AI assistants.' },
    { name: 'System Design', desc: 'Studying scalable architecture patterns — database sharding, message queues, and API rate limiting for production-grade systems.' },
    { name: 'RAG & Vector DBs', desc: 'Building retrieval-augmented generation pipelines using FAISS for semantic search over large document corpora.' }
  ];

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-24 border-b border-slate-100 bg-slate-50/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-16">
            <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
              Professional Steps
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
              Work Experience
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative pl-8 border-l-2 border-slate-100 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                className="relative"
              >
                {/* Timeline Icon */}
                <span className="absolute -left-[53px] top-1 w-10 h-10 rounded-xl border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </span>

                <div className="bg-white border border-slate-200/50 rounded-2xl p-6 md:p-8 hover:border-teal-200 transition-colors">
                  <span className="font-mono text-xs font-semibold text-teal-600">{exp.period}</span>
                  <h3 className="font-display font-bold text-slate-800 text-lg md:text-xl mt-1">{exp.role}</h3>
                  <p className="font-mono text-xs text-slate-400 mt-0.5">{exp.company}</p>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mt-4">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings & Tech Visualizer (Technical Focus) */}
      <section id="focus" className="py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
              Growth Path
              <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight mb-4">
              Current Technical Focus
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              As a developer in the evolving AI ecosystem, I spend hours training local neural networks, checking system latencies, and learning modern backend scale patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currentFocus.map((focus, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-4 p-6 bg-slate-50/50 border border-slate-200/50 rounded-2xl hover:border-teal-200 transition-colors"
              >
                <div className="p-2.5 bg-teal-50 border border-teal-100 rounded-lg text-teal-600 w-fit">
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase font-bold text-slate-800">{focus.name}</h4>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{focus.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
