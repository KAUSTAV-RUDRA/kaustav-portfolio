import React from 'react';
import { Code2, Server, Cpu, Database, Layers, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="w-5 h-5 text-teal-600" />,
      colorClass: 'from-teal-500/20 to-cyan-500/20',
      borderClass: 'group-hover:border-teal-400',
      shadowClass: 'hover:shadow-teal-100/50',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'TailwindCSS', level: 'Advanced' },
        { name: 'HTML5 & CSS3', level: 'Advanced' }
      ]
    },
    {
      title: 'Backend Engineering',
      icon: <Server className="w-5 h-5 text-sky-600" />,
      colorClass: 'from-sky-500/20 to-blue-500/20',
      borderClass: 'group-hover:border-sky-400',
      shadowClass: 'hover:shadow-sky-100/50',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'Django (Python)', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Advanced' }
      ]
    },
    {
      title: 'AI & Deep Learning',
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
      colorClass: 'from-emerald-500/20 to-teal-500/20',
      borderClass: 'group-hover:border-emerald-400',
      shadowClass: 'hover:shadow-emerald-100/50',
      skills: [
        { name: 'TensorFlow', level: 'Intermediate' },
        { name: 'PyTorch', level: 'Intermediate' },
        { name: 'Deep CNNs', level: 'Advanced' },
        { name: 'OpenCV (Vision)', level: 'Advanced' },
        { name: 'NLP & Pandas', level: 'Intermediate' }
      ]
    },
    {
      title: 'Database Systems',
      icon: <Database className="w-5 h-5 text-indigo-600" />,
      colorClass: 'from-indigo-500/20 to-blue-500/20',
      borderClass: 'group-hover:border-indigo-400',
      shadowClass: 'hover:shadow-indigo-100/50',
      skills: [
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Intermediate' },
        { name: 'SQLite', level: 'Advanced' },
        { name: 'Firebase', level: 'Intermediate' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      colorClass: 'from-blue-500/20 to-purple-500/20',
      borderClass: 'group-hover:border-blue-400',
      shadowClass: 'hover:shadow-blue-100/50',
      skills: [
        { name: 'AWS (S3/EC2)', level: 'Intermediate' },
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Docker', level: 'Basic' },
        { name: 'GitHub Actions', level: 'Basic' }
      ]
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
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex justify-between items-center bg-white border border-slate-200/50 px-4 py-2.5 rounded-xl hover:border-teal-200 transition-colors duration-200 group/item"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                      <span className="font-mono text-sm text-slate-700 font-medium group-hover/item:text-slate-900 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
