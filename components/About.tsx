
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
         <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-gray-300 text-lg leading-relaxed space-y-6 font-light">
            {PERSONAL_INFO.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
          </div>
          
          <div className="relative">
             {/* Glow effect behind card */}
             <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-xl transform rotate-1"></div>
             
             <div className="relative bg-surface/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    Quick Highlights
                </h3>
                <ul className="space-y-4">
                    {PERSONAL_INFO.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 mr-4"></span>
                            <span className="text-gray-300 text-base font-light">{item}</span>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
