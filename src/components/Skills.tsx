
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Gestion de projet",
      skills: [
        { name: "Méthodologie Agile", level: 90 },
        { name: "Cycle en V", level: 85 },
        { name: "Coordination d'équipes", level: 88 },
        { name: "Planification", level: 92 }
      ]
    },
    {
      title: "Outils digitaux",
      skills: [
        { name: "Trello", level: 95 },
        { name: "Asana", level: 88 },
        { name: "Microsoft Project", level: 80 },
        { name: "Slack", level: 85 }
      ]
    },
    {
      title: "Création & Design",
      skills: [
        { name: "Photoshop", level: 82 },
        { name: "Figma", level: 78 },
        { name: "UX/UI Design", level: 75 },
        { name: "Canva", level: 90 }
      ]
    },
    {
      title: "Développement",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "Responsive Design", level: 80 },
        { name: "Git", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
