import React from 'react';
import { Code2, Server, Cpu, Database, Layers, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Cpu className="w-5 h-5 text-teal-600" />,
      colorClass: 'from-teal-500/20 to-cyan-500/20',
      shadowClass: 'hover:shadow-teal-100/50',
      skills: [
        'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'spaCy',
        'CNN', 'VGG-16', 'NLP', 'Multimodal AI', 'Generative AI'
      ]
    },
    {
      title: 'Languages',
      icon: <Code2 className="w-5 h-5 text-sky-600" />,
      colorClass: 'from-sky-500/20 to-blue-500/20',
      shadowClass: 'hover:shadow-sky-100/50',
      skills: ['Python', 'Java', 'C', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      colorClass: 'from-emerald-500/20 to-teal-500/20',
      shadowClass: 'hover:shadow-emerald-100/50',
      skills: ['Django', 'Flask', 'ReactJS', 'Spring Boot', 'Bootstrap']
    },
    {
      title: 'Database Systems',
      icon: <Database className="w-5 h-5 text-indigo-600" />,
      colorClass: 'from-indigo-500/20 to-blue-500/20',
      shadowClass: 'hover:shadow-indigo-100/50',
      skills: ['MySQL', 'SQLite']
    },
    {
      title: 'Dev Tools & Analytics',
      icon: <Server className="w-5 h-5 text-blue-600" />,
      colorClass: 'from-blue-500/20 to-purple-500/20',
      shadowClass: 'hover:shadow-blue-100/50',
      skills: ['Git', 'VS Code', 'PyCharm', 'Jupyter Notebook', 'Power BI']
    },
    {
      title: 'Coding Platforms',
      icon: <Trophy className="w-5 h-5 text-purple-600" />,
      colorClass: 'from-purple-500/20 to-pink-500/20',
      shadowClass: 'hover:shadow-purple-100/50',
      skills: ['CodeChef', 'LeetCode', 'Codeforces', 'HackerRank']
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            Technical Arsenal
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
            Core Competencies & Stack
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 transition-all duration-300 ${category.shadowClass} relative overflow-hidden`}
            >
              {/* Top gradient border trace effect on card hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.colorClass}`} />
              
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200/40">
                <h3 className="font-display font-bold text-slate-800 text-lg group-hover:text-teal-600 transition-colors">
                  {category.title}
                </h3>
                <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                  {category.icon}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="font-mono text-xs text-slate-700 bg-white border border-slate-200/50 px-3 py-1.5 rounded-xl hover:border-teal-400 hover:text-teal-600 transition-all duration-200 cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
