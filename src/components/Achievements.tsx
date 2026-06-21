import React from 'react';
import { Trophy, Code2, Award, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface MilestoneLink {
  label: string;
  url: string;
}

interface Milestone {
  title: string;
  subtitle: string;
  date: string;
  icon: React.ReactNode;
  bullets: string[];
  links?: MilestoneLink[];
}

export const Achievements: React.FC = () => {
  const milestones: Milestone[] = [
    {
      title: 'JPMorgan Code for Good Hackathon',
      subtitle: 'Collaborative NGO Prototype Development',
      date: '2025',
      icon: <Trophy className="w-5 h-5 text-teal-600" />,
      bullets: [
        'Collaborated with a cross-functional team in a 24-hour sprint to build a web platform for a partner NGO.',
        'Engineered responsive interface structures and linked them with backend API systems.',
        'Pitched the prototype to senior JPMorgan technology executives and NGO representatives.'
      ]
    },
    {
      title: 'NextGen Hackathon 2025',
      subtitle: 'Top 0.6% Finalist (Among 3,900+ Teams)',
      date: '2025',
      icon: <Award className="w-5 h-5 text-teal-600" />,
      bullets: [
        'Led a 3-member team to build SafeChild AI — a multimodal child protection platform.',
        'Implemented NLP text classification, speech-to-text pipelines, and computer vision image scanners.',
        'Recognized in the top 0.6% of submissions nationally for technical innovation and prototype viability.'
      ]
    },
    {
      title: 'Competitive Coding',
      subtitle: 'HackerRank & Coding Platforms',
      date: 'Active',
      icon: <Code2 className="w-5 h-5 text-sky-600" />,
      bullets: [
        'Active on LeetCode, CodeChef, and Codeforces practicing Data Structures and Algorithms.',
        'Earned golden badges in Python, Problem Solving, and Database systems on HackerRank.'
      ],
      links: [
        { label: 'LeetCode Profile', url: 'https://leetcode.com/kaustavrudra' },
        { label: 'CodeChef Profile', url: 'https://www.codechef.com/users/kaustavrudra' }
      ]
    },
    {
      title: 'Academic Excellence Honors',
      subtitle: 'B.Tech AI & Data Science Class Honors',
      date: '2023 - Present',
      icon: <BookOpen className="w-5 h-5 text-teal-600" />,
      bullets: [
        'Maintained a CGPA of 9.33 / 10.0 across 6 completed semesters.',
        'Completed specialized projects in NLP pipelines, computer vision, and full-stack web applications.'
      ]
    }
  ];

  return (
    <section id="achievements" className="py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            Milestones & Merits
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
            Key Achievements & Coding Progress
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-8 border-l-2 border-slate-100 space-y-12 py-2">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 90 }}
              className="relative"
            >
              {/* Floating icon bullet on timeline */}
              <span className="absolute -left-[53px] top-1 w-10 h-10 rounded-xl border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-700 transition-transform duration-300 hover:scale-105">
                {item.icon}
              </span>

              {/* Achievement Box content */}
              <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-6 md:p-8 hover:border-teal-200/60 hover:shadow-sm hover:shadow-teal-50 transition-all duration-300">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-slate-800 text-lg md:text-xl">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200/40 px-3 py-1 rounded-full uppercase">
                    {item.date}
                  </span>
                </div>

                <ul className="space-y-2.5 list-none pl-0">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-2 text-slate-600 text-sm md:text-base leading-relaxed items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-2"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {item.links && (
                  <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-slate-100">
                    {item.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-600 hover:text-teal-700 bg-teal-50/50 hover:bg-teal-50 border border-teal-200/40 px-3 py-1.5 rounded-lg transition-all duration-200"
                      >
                        {link.label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
