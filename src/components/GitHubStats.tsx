import React from 'react';
import { GitPullRequest, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const repos = [
  {
    name: 'HappyChild-AI-Guardian',
    desc: 'Multimodal child protection platform using NLP text classification, speech-to-text pipelines, and computer vision — Top 0.6% at NextGen Hackathon 2025.',
    lang: 'Python',
    url: 'https://github.com/KAUSTAV-RUDRA/HappyChild-AI-Guardian'
  },
  {
    name: 'smartinterview',
    desc: 'AI-driven mock interview simulator with adaptive NLP question generation, skill-domain routing, and real-time evaluation analytics.',
    lang: 'Python',
    url: 'https://github.com/KAUSTAV-RUDRA/smartinterview'
  },
  {
    name: 'fileshare',
    desc: 'Secure file-sharing web app with Role-Based Access Control, bcrypt encryption, link expiry timers, and audit trails.',
    lang: 'Python',
    url: 'https://github.com/KAUSTAV-RUDRA/fileshare'
  },
  {
    name: 'VirtualGardeningAssistant',
    desc: 'Responsive interactive gardening assistant with environment-aware plant recommendations and automated care schedulers.',
    lang: 'JavaScript',
    url: 'https://github.com/KAUSTAV-RUDRA/VirtualGardeningAssistant'
  },
  {
    name: 'djangoproject',
    desc: 'Full-stack Django application demonstrating MVT architecture, relational schemas, CRUD operations, and secure session management.',
    lang: 'Python',
    url: 'https://github.com/KAUSTAV-RUDRA/djangoproject'
  }
];

const langColor: Record<string, string> = {
  Python: 'bg-teal-600',
  JavaScript: 'bg-sky-500',
  TypeScript: 'bg-indigo-500',
};

export const GitHubStats: React.FC = () => {
  return (
    <section id="github-stats" className="py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
              Open Source
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
              GitHub Repositories
            </h2>
          </div>

          <a
            href="https://github.com/KAUSTAV-RUDRA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-mono text-sm font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 shrink-0 self-start md:self-auto"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            <span>@KAUSTAV-RUDRA</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Repo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <motion.a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="group bg-slate-50/60 border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-300 hover:shadow-md hover:shadow-teal-50/40 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="font-mono text-sm font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-500 transition-colors shrink-0" />
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 mt-4 font-mono text-[10px]">
                <span className={`w-2.5 h-2.5 rounded-full ${langColor[repo.lang] ?? 'bg-slate-400'}`} />
                <span className="text-slate-500 font-semibold">{repo.lang}</span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
