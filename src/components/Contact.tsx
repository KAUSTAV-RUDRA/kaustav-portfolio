import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    // Simulate API dispatch (e.g. EmailJS / Formspree)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            Let's Collaborate
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
            Connect & Create
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-slate-800 text-xl md:text-2xl">
                Ready to work on the next AI or MERN stack pipeline?
              </h3>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                If you have an internship opening, a freelance project, or just want to chat about neural nodes, feel free to reach out. I will respond within 24 hours.
              </p>
            </div>

            {/* Availability status */}
            <div className="p-4 bg-teal-50 border border-teal-100 rounded-xl flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="font-mono text-xs text-teal-800 font-bold uppercase">
                Available for Summer 2026 Onboarding
              </span>
            </div>

             {/* Details List */}
            <div className="space-y-4 font-mono text-xs">
              <a href="mailto:harikaustav@gmail.com" className="flex items-center gap-3.5 bg-white border border-slate-200/50 p-4 rounded-xl hover:border-teal-300 transition-colors group">
                <div className="p-2.5 bg-slate-50 border border-slate-200 text-slate-500 rounded-lg group-hover:bg-teal-550 group-hover:text-teal-600 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Email</div>
                  <div className="text-slate-700 font-semibold font-sans text-sm mt-0.5">harikaustav@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919810906581" className="flex items-center gap-3.5 bg-white border border-slate-200/50 p-4 rounded-xl hover:border-teal-300 transition-colors group">
                <div className="p-2.5 bg-slate-50 border border-slate-200 text-slate-500 rounded-lg group-hover:bg-teal-550 group-hover:text-teal-600 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Phone</div>
                  <div className="text-slate-700 font-semibold font-sans text-sm mt-0.5">+91 98109 06581</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 bg-white border border-slate-200/50 p-4 rounded-xl shrink-0">
                <div className="p-2.5 bg-slate-50 border border-slate-200 text-slate-500 rounded-lg shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Location</div>
                  <div className="text-slate-700 font-semibold font-sans text-sm mt-0.5">Hyderabad, India</div>
                </div>
              </div>
            </div>

            {/* Socials & Resume trigger */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://linkedin.com/in/kaustavrudra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-teal-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/KAUSTAV-RUDRA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-slate-800" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-display font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] uppercase font-bold text-slate-500 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 font-sans text-sm text-slate-800 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-[10px] uppercase font-bold text-slate-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 font-sans text-sm text-slate-800 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[10px] uppercase font-bold text-slate-500 mb-1.5">
                  Message Content
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 font-sans text-sm text-slate-800 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status Feedbacks */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3.5 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-red-700 text-xs font-medium"
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Please fill in all form inputs.</span>
                  </motion.div>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3.5 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-2 text-emerald-800 text-xs font-semibold"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Message sent! Thank you, Kaustav will connect shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-700/50 text-white font-mono text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-teal-100/50 font-bold"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Transmitting Data...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Transmitted Successfully</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Signal</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Profile Sidebar Highlights Column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-6 space-y-6">
              
              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider border-l-2 border-teal-600 pl-2.5">
                  Core Strengths
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Hard-working', 'Detail-oriented', 'Leadership', 'Teamwork', 'Time Management', 'Problem-solving'].map((str) => (
                    <span key={str} className="font-mono text-[10px] font-semibold bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                      {str}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider border-l-2 border-teal-600 pl-2.5">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['English (Fluent)', 'Hindi (Native)', 'Telugu (Native)'].map((lan) => (
                    <span key={lan} className="font-mono text-[10px] font-semibold bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                      {lan}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hobbies */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider border-l-2 border-teal-600 pl-2.5">
                  Interests
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Football', 'AI Development', 'Music', 'Traveling', 'Chess'].map((hob) => (
                    <span key={hob} className="font-mono text-[10px] font-semibold bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                      {hob}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
