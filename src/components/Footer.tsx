
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 Orly Anaice Kengue Mouele. Tous droits réservés.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:anaismouele0@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/orlymouele"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
