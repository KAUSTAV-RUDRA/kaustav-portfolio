import React, { useState, useEffect } from 'react';
import { FileText, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Hero: React.FC = () => {
  const roles = [
    'Software Engineer',
    'AI & Data Science Specialist',
    'Deep Learning Developer',
    'Full Stack Developer'
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-teal-50 border border-teal-150 px-4 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="font-mono text-xs text-teal-800 font-semibold uppercase tracking-wider">
              Available for Internships
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-slate-900 leading-[1.05] tracking-tight">
            <span className="font-sans text-lg block text-slate-500 font-medium mb-2">Hello, I'm</span>
            <span className="font-display font-extrabold text-5xl md:text-7xl block mb-2 bg-gradient-to-r from-slate-900 via-teal-950 to-teal-800 bg-clip-text text-transparent">
              KAUSTAV
            </span>
            <span className="font-display font-bold text-4xl md:text-6xl text-slate-700 block">
              HARINARAYANA RUDRA
            </span>
          </motion.h1>

          {/* Typewriter Role Switcher */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 text-lg md:text-2xl font-mono text-slate-600 min-h-[48px]">
            <Sparkles className="w-5 h-5 text-teal-600 shrink-0" />
            <span>Specialized in</span>
            <div className="relative inline-block overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="font-bold text-teal-600 block border-b-2 border-teal-200"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Brief Bio Intro */}
          <motion.p variants={itemVariants} className="text-slate-600 text-base md:text-lg max-w-xl font-sans leading-relaxed">
            JPMorgan Code for Good 2025 participant and Top 0.6% finalist (among 3,900+ teams) at NextGen Hackathon 2025. Final-year AI & Data Science engineer at KL University (CGPA: 9.33/10) with hands-on experience building NLP pipelines, computer vision models, and full-stack web applications end-to-end. Thrives in high-pressure environments and brings a systems mindset to every problem.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-mono text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-teal-100 hover:shadow-teal-200 group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-mono text-sm px-6 py-3 rounded-xl transition-all hover:shadow-sm"
            >
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-sm text-slate-600 hover:text-teal-600 transition-colors px-4 py-3"
            >
              <span>Get in Touch &rarr;</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-6">
            <a
              href="https://github.com/KAUSTAV-RUDRA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-200 rounded-xl text-slate-600 hover:text-teal-600 transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kaustavrudra/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-200 rounded-xl text-slate-600 hover:text-teal-600 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Graphics / Profile Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 select-none">
            {/* Glowing animated background rings */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-teal-500/20 to-sky-500/20 blur-xl animate-pulse" />
            
            {/* Border glow wrapper */}
            <div className="absolute inset-0 rounded-[2.5rem] p-1.5 bg-gradient-to-tr from-teal-500 via-cyan-400 to-sky-500 shadow-lg shadow-teal-100/50">
              {/* Inner card containing custom futuristic AI vector / avatar */}
              <div className="w-full h-full bg-slate-900 rounded-[2.1rem] overflow-hidden flex items-center justify-center relative group">
                {/* Real profile image from GitHub */}
                <img 
                  src="https://avatars.githubusercontent.com/u/182359004?v=4"
                  alt="Kaustav Harinarayana Rudra"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />

                {/* Custom glowing mesh network graphic to symbolize AI & Data Science */}
                <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-10" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="svg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00ffd1" />
                      <stop offset="100%" stopColor="#00a8ff" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="30" r="1.5" fill="url(#svg-grad)" />
                  <circle cx="80" cy="20" r="2" fill="url(#svg-grad)" />
                  <circle cx="50" cy="50" r="2.5" fill="url(#svg-grad)" />
                  <circle cx="30" cy="70" r="1.5" fill="url(#svg-grad)" />
                  <circle cx="70" cy="80" r="2" fill="url(#svg-grad)" />
                  <line x1="20" y1="30" x2="50" y2="50" stroke="rgba(0, 255, 209, 0.3)" strokeWidth="0.5" />
                  <line x1="80" y1="20" x2="50" y2="50" stroke="rgba(0, 255, 209, 0.3)" strokeWidth="0.5" />
                  <line x1="30" y1="70" x2="50" y2="50" stroke="rgba(0, 255, 209, 0.3)" strokeWidth="0.5" />
                  <line x1="70" y1="80" x2="50" y2="50" stroke="rgba(0, 255, 209, 0.3)" strokeWidth="0.5" />
                  <line x1="20" y1="30" x2="30" y2="70" stroke="rgba(0, 255, 209, 0.3)" strokeWidth="0.5" />
                  <line x1="80" y1="20" x2="70" y2="80" stroke="rgba(0, 255, 209, 0.3)" strokeWidth="0.5" />
                </svg>

                {/* Subtly moving overlay scanner lines */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60 animate-[bounce_6s_infinite] pointer-events-none z-20" />
                
                {/* Tech overlay text watermark */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-xl font-mono text-[9px] text-teal-400 flex justify-between items-center z-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>SYS_ACTIVE: TRUE</span>
                  <span>MODEL_READY</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 opacity-70">
        <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-1.5 h-6 rounded-full bg-slate-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-teal-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
