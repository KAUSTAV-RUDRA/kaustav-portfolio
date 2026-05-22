import React, { useRef, useState, useEffect } from 'react';
import { GraduationCap, Award, Brain, Clock, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const AnimatedNumber = ({ value, suffix = "", isFloat = false }: { value: number; suffix?: string; isFloat?: boolean }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);
  const [floatCount, setFloatCount] = useState(0.0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1.5; // seconds
    const totalSteps = 45;
    const stepTime = (duration * 1000) / totalSteps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      if (isFloat) {
        setFloatCount(parseFloat((value * progress).toFixed(2)));
      } else {
        setCount(Math.floor(value * progress));
      }
      
      if (currentStep >= totalSteps) {
        if (isFloat) setFloatCount(value);
        else setCount(value);
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value, inView, isFloat]);

  return (
    <span ref={ref} className="tabular-nums">
      {isFloat ? floatCount.toFixed(2) : count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Tilt angle multiplier (limit tilt to 10 degrees)
    const rx = -(y / (rect.height / 2)) * 10;
    const ry = (x / (rect.width / 2)) * 10;
    
    setRotate({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const timelineItems = [
    {
      inst: 'KL University, Vijayawada',
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      period: '2023 - 2027',
      desc: 'Cumulative GPA: 9.33 / 10. Focus on neural networks, Natural Language Processing, computer vision models, and full-stack web applications.'
    },
    {
      inst: 'Apeejay International School, Uttar Pradesh',
      degree: '12th Standard (CBSE, PCM)',
      period: '2021 - 2023',
      desc: 'Completed higher secondary education under CBSE board.'
    },
    {
      inst: 'Apeejay International School, Uttar Pradesh',
      degree: '10th Standard (CBSE)',
      period: '2021',
      desc: 'Completed secondary school certification.'
    }
  ];

  return (
    <section id="about" className="py-24 border-b border-slate-100 relative bg-slate-50/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="font-mono text-xs font-semibold text-teal-600 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-teal-600 inline-block"></span>
            About Me
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-800 tracking-tight">
            Engineering Solutions with Intelligence
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm space-y-6 leading-relaxed text-slate-600 font-sans text-base md:text-lg">
              <h3 className="font-display font-bold text-xl text-slate-800 flex items-center gap-2">
                <Brain className="w-5 h-5 text-teal-600" />
                My Tech Journey
              </h3>
              <p>
                I am a final-year Artificial Intelligence & Data Science student at KL University with a Cumulative GPA of 9.33/10. I have hands-on experience building NLP pipelines, computer vision models, and full-stack web applications from end to end.
              </p>
              <p>
                As a participant in JPMorgan Code for Good 2025 and a Top 0.6% finalist at the NextGen Hackathon 2025, I thrive in high-pressure team settings and bring a rigorous, systems-oriented mindset to every engineering challenge I encounter.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex gap-2.5 items-start">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-mono text-xs uppercase font-bold text-slate-700">Punctual & Focused</h4>
                    <p className="text-xs text-slate-500">I deliver robust code in sprint-aligned timelines.</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <Zap className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-mono text-xs uppercase font-bold text-slate-700">Problem Solver</h4>
                    <p className="text-xs text-slate-500">Active competitor on coding portals with analytical strengths.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase font-bold tracking-widest text-slate-500 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-teal-600" /> Education & Training
              </h3>
              
              <div className="relative pl-6 border-l border-slate-200 space-y-8 ml-3 py-2">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Bullet dot */}
                    <span className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-600 bg-white shadow-sm flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                    </span>
                    <div>
                      <span className="font-mono text-xs font-semibold text-teal-600">{item.period}</span>
                      <h4 className="font-sans font-bold text-slate-800 text-base md:text-lg">{item.inst}</h4>
                      <p className="font-mono text-xs text-slate-500 mb-1.5">{item.degree}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Card & Counters Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* 3D CGPA tilt card */}
            <div className="perspective-1000">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                  transformStyle: 'preserve-3d',
                }}
                className="bg-gradient-to-tr from-teal-600 to-sky-600 text-white rounded-2xl p-8 border border-teal-500/20 shadow-xl shadow-teal-100/50 cursor-pointer relative overflow-hidden group select-none transition-transform duration-100 ease-out"
              >
                {/* Overlay vector grid lines */}
                <div className="absolute inset-0 bg-grid opacity-10" />
                
                {/* Card glow flare effect */}
                <div className="absolute -inset-20 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-center">
                    <Award className="w-8 h-8 text-teal-150 animate-bounce" />
                    <span className="font-mono text-xs bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                      B.Tech AI & DS
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-xs text-teal-100 uppercase tracking-widest">Cumulative GPA</span>
                    <div className="font-display font-extrabold text-6xl tracking-tight flex items-baseline">
                      <AnimatedNumber value={9.33} isFloat={true} />
                      <span className="text-xl text-teal-100 ml-1">/10</span>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-4 flex justify-between text-xs font-mono text-teal-100">
                    <div>
                      <div>UNIVERSITY RANK</div>
                      <div className="font-bold text-white text-sm">TOP 5%</div>
                    </div>
                    <div className="text-right">
                      <div>COMPLETED SEMESTERS</div>
                      <div className="font-bold text-white text-sm">6 / 8</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="font-display text-3xl font-extrabold text-teal-600">
                  <AnimatedNumber value={6} />
                </div>
                <div className="font-mono text-xs text-slate-500 uppercase mt-1">Projects Built</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="font-display text-3xl font-extrabold text-teal-600">
                  <AnimatedNumber value={450} suffix="+" />
                </div>
                <div className="font-mono text-xs text-slate-500 uppercase mt-1">LeetCode Solved</div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="font-display text-3xl font-extrabold text-teal-600">
                  <AnimatedNumber value={5} />
                </div>
                <div className="font-mono text-xs text-slate-500 uppercase mt-1">Certifications</div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="font-display text-3xl font-extrabold text-teal-600">
                  <AnimatedNumber value={2} />
                </div>
                <div className="font-mono text-xs text-slate-500 uppercase mt-1">Hackathons</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
