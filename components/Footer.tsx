import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-dark text-center relative z-10">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React, Tailwind CSS & Google Gemini
        </p>
      </div>
    </footer>
  );
};

export default Footer;