
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Gestion de projet",
      skills: [
        { name: "Méthodologie Agile", },
        { name: "Cycle en V", level: 85 },
        { name: "Coordination d'équipes", level: 88 },
        { name: "Planification", level: 92 }
      ]
    },
    {
      title: "Outils digitaux",
      skills: [
        { name: "Trello", },
        { name: "Asana",  },
        { name: "Microsoft Project", level: 80 },
        { name: "Slack",  }
      ]
    },
    {
      title: "Création & Design",
      skills: [
        { name: "Photoshop", level: 82 },
       
        { name: "Canva", level: 90 }
      ]
    },
    {
      title: "Développement",
      skills: [
        { name: "HTML/CSS", level: 85 },
      
        
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
