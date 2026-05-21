import React from 'react';

interface Project {
  num: string;
  title: string;
  category: string;
  desc: string;
  stack: string[];
  specs: string;
}

export const Projects: React.FC = () => {
  const projectList: Project[] = [
    {
      num: '01 // MULTIMODAL AI',
      title: 'SafeChild AI',
      category: 'Risk Detection App',
      desc: 'A mobile application designed to detect online exploitation risks by analyzing text chats, audio files, and images in real-time.',
      stack: ['Python', 'NLP', 'Speech-to-Text', 'Multimodal AI'],
      specs: 'Fuses a text classifier, speech transcription model, and image classifier into a single processing pipeline to flag threats as they happen.',
    },
    {
      num: '02 // NATURAL LANGUAGE PROCESSING',
      title: 'Smart Interview',
      category: 'Mock Interview Platform',
      desc: 'An AI mock interview simulator that scans a candidate\'s resume and generates customized engineering questions based on their skills.',
      stack: ['Python', 'Flask', 'Scikit-learn', 'SQLite', 'JavaScript'],
      specs: 'Uses TF-IDF text vectorization and graph-based NLP to identify skill gaps. Features a web dashboard built with Flask and SQLite.',
    },
    {
      num: '03 // MACHINE LEARNING',
      title: 'Multi Document Summarizer',
      category: 'Information Aggregator',
      desc: 'An NLP tool that extracts and merges key information from multiple text documents into a single, condensed summary.',
      stack: ['Python', 'Flask', 'NLP', 'Scikit-learn', 'CSS/JS'],
      specs: 'Handles tokenization, text cleaning, and redundancy filtering to remove repeating sections, helping users quickly read large files.',
    },
    {
      num: '04 // COMPUTER VISION',
      title: 'Rice Grain Classifier',
      category: 'Quality Evaluation System',
      desc: 'A deep learning system that classifies five different rice grain varieties, achieving 94% categorical classification accuracy.',
      stack: ['TensorFlow', 'Keras', 'CNN / VGG-16', 'OpenCV', 'Python'],
      specs: 'Served as Team Lead. Setup OpenCV pre-processing filters and compared standard CNN models directly with a pre-trained VGG-16 network.',
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">03 // SELECTED WORK</div>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projectList.map((project, idx) => (
            <div className="project-card reveal-item" key={idx}>
              <div className="project-num">{project.num}</div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-category">{project.category}</div>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span className="stack-pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-reveal-trigger">
                SYSTEM DETAILS
                <svg viewBox="0 0 24 24">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="project-details-overlay">
                <h4 className="project-details-title">System Specs</h4>
                <p className="project-details-text">{project.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
