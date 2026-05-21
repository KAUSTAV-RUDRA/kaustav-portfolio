import React from 'react';

interface SkillCategory {
  title: string;
  num: string;
  items: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'LANGUAGES',
      num: '01',
      items: ['Python', 'Java', 'C', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'FRAMEWORKS',
      num: '02',
      items: ['Django', 'Flask', 'ReactJS', 'Spring Boot', 'Bootstrap'],
    },
    {
      title: 'AI / ML',
      num: '03',
      items: [
        'TensorFlow',
        'Keras',
        'scikit-learn',
        'OpenCV',
        'spaCy',
        'CNN',
        'VGG-16',
        'NLP',
        'Multimodal AI',
        'Generative AI',
      ],
    },
    {
      title: 'DATABASES',
      num: '04',
      items: ['MySQL', 'SQLite'],
    },
    {
      title: 'DEV TOOLS',
      num: '05',
      items: ['Git', 'VS Code', 'PyCharm', 'Jupyter Notebook', 'Power BI'],
    },
    {
      title: 'PLATFORMS',
      num: '06',
      items: ['CodeChef', 'LeetCode', 'Codeforces', 'HackerRank'],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">04 // TECH STACK</div>
        <h2 className="section-title">Core Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skills-category reveal-item" key={idx}>
              <div className="skills-cat-title">
                {cat.title} <span>// {cat.num}</span>
              </div>
              <div className="skills-tag-cloud">
                {cat.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
