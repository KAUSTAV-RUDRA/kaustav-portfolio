import React from 'react';
import { GitPullRequest, GitFork, Star, Flame, Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const GitHubStats: React.FC = () => {
  // Mock contribution grid details (7 rows x 24 columns for a clean grid layout)
  const rows = 7;
  const cols = 26;
  const activityLevels = [0, 1, 2, 3, 1, 0, 2, 3, 4, 2, 1, 2, 3, 0, 1, 2, 3, 2, 1, 2, 3, 4, 1, 2];

  const getColorClass = (level: number) => {
    switch (level) {
      case 1: return 'bg-teal-100 border border-teal-200/25';
      case 2: return 'bg-teal-300 border border-teal-400/25';
      case 3: return 'bg-teal-500 border border-teal-600/25';
      case 4: return 'bg-teal-700 border border-teal-800/25';
      default: return 'bg-slate-100 border border-slate-200/50';
    }
  };

  const languages = [
    { name: 'Python', percentage: 46, color: 'bg-teal-600', textClass: 'text-teal-700' },
    { name: 'JavaScript', percentage: 28, color: 'bg-sky-500', textClass: 'text-sky-600' },
    { name: 'TypeScript', percentage: 16, color: 'bg-indigo-500', textClass: 'text-indigo-600' },
    { name: 'HTML/CSS', percentage: 10, color: 'bg-slate-400', textClass: 'text-slate-500' }
  ];

  const repos = [
    {
      name: 'HappyChild-AI-Guardian',
      desc: 'A multimodal child protection app utilizing text classification, speech analysis, and computer vision image scanners.',
      stars: 14,
      forks: 3,
      lang: 'Python',
      url: 'https://github.com/KAUSTAV-RUDRA/HappyChild-AI-Guardian'
    },
    {
      name: 'smartinterview',
      desc: 'AI-driven mock interview simulator supporting 10+ skill domains with automated evaluation reports and graph-based NLP.',
      stars: 19,
      forks: 5,
      lang: 'Python',
      url: 'https://github.com/KAUSTAV-RUDRA/smartinterview'
    },
    {
      name: 'fileshare',
      desc: 'Secure file-sharing application with Flask backend, SQLite, Role-Based Access Control, and bcrypt file encryption.',
      stars: 8,
      forks: 2,
      lang: 'Python',
      url: 'https://github.com/KAUSTAV-RUDRA/fileshare'
    },
    {
      name: 'VirtualGardeningAssistant',
      desc: 'A responsive virtual gardening assistant and educational tool built using frontend technologies HTML, CSS, and JavaScript.',
      stars: 6,
      forks: 1,
      lang: 'JavaScript',
      url: 'https://github.com/KAUSTAV-RUDRA/VirtualGardeningAssistant'
    },
    {
      name: 'djangoproject',
      desc: 'Custom built Django web application structuring modular backend patterns and secure user session management.',
      stars: 7,
      forks: 2,
      lang: 'Python',
      url: 'https://github.com/KAUSTAV-RUDRA/djangoproject'
    }
  ];

  return (
    <section id="github-stats" className="py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            Open Source Track
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
            GitHub Insights & Activity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contribution Graph Panel */}
          <div className="lg:col-span-8 bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200/40 pb-3">
              <h3 className="font-display font-bold text-slate-800 flex items-center gap-2 text-base md:text-lg">
                <Calendar className="w-5 h-5 text-teal-600" />
                Contributions (Past 6 Months)
              </h3>
              <a 
                href="https://github.com/KAUSTAV-RUDRA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase font-bold text-slate-400 hover:text-teal-600 transition-colors"
              >
                @KAUSTAV-RUDRA
              </a>
            </div>

            {/* Grid Box */}
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[480px] grid grid-flow-col gap-1.5" style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
                {Array.from({ length: rows * cols }).map((_, idx) => {
                  const level = activityLevels[idx % activityLevels.length];
                  return (
                    <div
                      key={idx}
                      className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-110 ${getColorClass(level)}`}
                      title={`${level > 0 ? level * 3 : 'No'} contributions`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center font-mono text-[10px] text-slate-400">
              <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2.5 h-2.5 bg-slate-100 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-teal-100 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-teal-300 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-teal-700 rounded-sm" />
                <span>More</span>
              </div>
              <div>
                1,124 Contributions in 2026
              </div>
            </div>
          </div>

          {/* Side metrics panel */}
          <div className="lg:col-span-4 space-y-6">
            {/* Streak card */}
            <div className="bg-gradient-to-tr from-teal-600 to-teal-800 text-white rounded-2xl p-6 flex items-center justify-between shadow-md shadow-teal-100/50">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-teal-100 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-orange-400" /> Current Streak
                </span>
                <div className="font-display font-extrabold text-3xl">42 Days</div>
                <span className="text-[10px] text-teal-100 font-mono">Longest: 88 Days</span>
              </div>
              <Trophy className="w-12 h-12 text-teal-100/30 shrink-0" />
            </div>

            {/* Language Breakdown */}
            <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">
                Top Languages Ratio
              </h3>
              
              {/* Stacked bar */}
              <div className="h-2 rounded-full overflow-hidden flex bg-slate-100">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`${lang.color}`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Labels */}
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                    <span className="text-slate-600 font-medium">{lang.name}</span>
                    <span className={`ml-auto font-bold ${lang.textClass}`}>{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Repository Showcase */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              className="bg-white border border-slate-200/65 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-200 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GitPullRequest className="w-4 h-4 text-teal-600" />
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors"
                  >
                    {repo.name}
                  </a>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {repo.desc}
                </p>
              </div>

              <div className="flex gap-4 items-center pt-4 border-t border-slate-100 mt-4 font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-yellow-500" /> {repo.stars}
                </span>
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5 text-slate-400" /> {repo.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
