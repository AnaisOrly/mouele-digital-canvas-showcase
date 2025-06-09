
import React from 'react';
import { Mail, User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
               Orly Anaïce
              <span className=" block text-2xl md:text-3xl font-bold text-white mt-2">
                 KENGUE MOUELE
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-orange-400 font-medium mt-4">
              Cheffe de projet
            </div>
            <div className="text-lg text-gray-400">
              Port-Gentil, Gabon
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Transformer les idées en projets concrets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              <Mail size={20} />
              Me contacter
            </a>
            <a href="CV.pdf" download 
            className="inline-flex items-center gap-2 border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-200">
  <User size={20} />
  Télécharger mon CV
</a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              <img
                src="/lovable-uploads/b349b3a8-f8e4-41a0-bb61-777690f93c0c.png"
                alt="Orly Anaice Kengue Mouele"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-gray-600 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
