
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                À propos
              </h2>
              <div className="w-20 h-1 bg-blue-500"></div>
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed" >
              <p>
                Passionnée par l'innovation et la gestion de projets, j'ai effectué une reconversion 
                réussie vers le domaine digital après  une solide plusieurs années expérience dans le secteur  en de l'électromécanique.
              </p>
              <p>
                Mon parcours singulier me permet aujourd'hui d'allier rigueur technique et créativité digitale 
                pour piloter des projets complexes, innovants et porteurs de sens.
              </p>
              <p>
                Curieuse, structurée et orientée résultats, je m’investis pleinement dans chaque mission.
                pour créer de la valeur, mobiliser les équipes et garantir la réussite des projets que je porte. 
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-2">Formation</h3>
              <p className="text-gray-400">Électromécanique</p>
              <p className="text-gray-400">Reconversion Digital</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-2">Valeurs</h3>
              <p className="text-gray-400">Innovation</p>
              <p className="text-gray-400">Rigueur</p>
              <p className="text-gray-400">Créativité</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800 col-span-2">
              <h3 className="text-2xl font-bold text-white mb-2">Mission actuelle</h3>
              <p className="text-gray-400">Commission électorale présidentielle 2025</p>
              <p className="text-gray-400">Coordination et gestion de projets stratégiques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
