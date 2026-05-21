import React from 'react';
import { Briefcase, MessageSquare, BookOpen, Flame, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExtraSections: React.FC = () => {
  const experiences = [
    {
      role: 'Full Stack AI Developer (Student Project Intern)',
      company: 'KL University AI Labs',
      period: 'June 2024 - Dec 2024',
      desc: 'Partnered with professors to build full stack dashboard interfaces and API backends for computer vision models, improving lab workflow data retrieval. Handled React UI design and Express route integrations.'
    },
    {
      role: 'Virtual Software Engineering Intern',
      company: 'JPMorgan Chase & Co.',
      period: '2025',
      desc: 'Completed technical modules simulating financial system designs, charting data components, and deploying pipeline algorithms.'
    }
  ];

  const testimonials = [
    {
      text: 'Kaustav demonstrates exceptional analytical capacity, delivering robust neural model classifiers and clean React interfaces in our university lab projects.',
      author: 'Dr. Ramesh S.',
      title: 'Professor, AI & Data Science Department'
    },
    {
      text: 'A structured, detail-oriented engineer. He builds database schemas and socket connections quickly while maintaining solid API performance metrics.',
      author: 'Aakash Sen',
      title: 'Mentor, Hackathon Evaluator'
    }
  ];

  const blogs = [
    {
      title: 'Deploying OpenCV Image Processing Inside React WebSockets',
      date: 'May 10, 2026',
      readTime: '4 min read',
      snippet: 'Evaluating webcam frame grids dynamically by setting up direct socket feeds and avoiding client-side frame delays...'
    },
    {
      title: 'Tuning MongoDB $nearSphere Indexing For Transport APIs',
      date: 'April 22, 2026',
      readTime: '5 min read',
      snippet: 'Optimizing real-time coordinate queries to prevent database bottlenecks under heavy passenger requests...'
    }
  ];

  const currentFocus = [
    { name: 'LLM Fine-Tuning', desc: 'Experimenting with parameter-efficient fine-tuning (PEFT/LoRA) on open weights.' },
    { name: 'Distributed Systems', desc: 'Understanding database sharding patterns, message queues, and load balancing.' },
    { name: 'Vector Databases', desc: 'Integrating FAISS and Pinecone indices for RAG text extraction.' }
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

      {/* Learnings & Tech Visualizer */}
      <section id="focus" className="py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Tech Bubbles / Text */}
            <div className="space-y-6">
              <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
                <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
                Growth Path
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight leading-tight">
                Current Technical Focus
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                As a developer in the evolving AI ecosystem, I spend hours training local neural networks, checking system latencies, and learning modern backend scale patterns.
              </p>
              
              <div className="space-y-4 pt-2">
                {currentFocus.map((focus, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:border-teal-200 transition-colors">
                    <div className="p-2.5 bg-teal-50 border border-teal-100 rounded-lg text-teal-600 shrink-0 h-fit">
                      <Flame className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase font-bold text-slate-800">{focus.name}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{focus.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6 lg:pl-6">
              <h3 className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-teal-600" /> Endorsements & References
              </h3>

              <div className="space-y-6">
                {testimonials.map((test, idx) => (
                  <div key={idx} className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-6 relative">
                    <span className="absolute top-4 right-6 text-slate-200 text-5xl font-serif select-none pointer-events-none">“</span>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed italic relative z-10">
                      "{test.text}"
                    </p>
                    <div className="border-t border-slate-200/50 pt-3 mt-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0"></span>
                      <div className="text-xs">
                        <span className="font-bold text-slate-700">{test.author}</span>
                        <span className="text-slate-400 font-mono ml-1.5">| {test.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section id="blog" className="py-24 border-b border-slate-100 bg-slate-50/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-16">
            <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
              Developer Diary
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
              Technical Writings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:shadow-teal-50/20 hover:border-teal-200 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-teal-600" /> {blog.date}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-lg md:text-xl group-hover:text-teal-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-3">
                    {blog.snippet}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                  <button className="font-mono text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
