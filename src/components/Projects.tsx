
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('tous');

  const projects = [
    {
      id: 1,
      title: "Refonte d'un site Web ",
      category: "gestion",
      description: "Pilotage du projet de refonte du site web d’une PME pour améliorer sa visibilité en ligne",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Agile", "Asana", "Excel"]
    },
   // {
     //category: "design",
      //description: "Maquette et conception d'une interface de gestion de projets",
      //image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      //technologies: ["Photoshop", "Figma", "UX/UI"]
    //},

   // {
     // id: 3,
     // title: "Automatisation électromécanique",
     // category: "technique",
     // description: "Projet d'optimisation de processus industriels",
      //image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      //technologies: ["Cycle en V", "Documentation", "Analyse"]
    //},
    // {
  //   id: 4,
  //   title: "Site web responsive",
  //   category: "web",
  //   description: "Développement d'un site vitrine responsive",
  //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
  //   technologies: ["HTML", "CSS", "JavaScript"]
  // }
  ];

  const filters = ['tous', 'gestion', 'design', 'technique', 'web'];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
