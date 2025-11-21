
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dark to-surface/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
             <Award className="text-yellow-500" size={24} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display">Certifications & Badges</h2>
            <p className="text-gray-400 text-sm">Verified credentials and continuous learning</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="flex flex-col p-6 rounded-xl border border-white/5 bg-surface/30 hover:bg-surface/50 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <CheckCircle size={20} />
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-white/5 px-2 py-1 rounded bg-dark">{cert.date}</span>
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-1 leading-tight group-hover:text-blue-300 transition-colors">{cert.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{cert.issuer}</p>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                  <a href={cert.link} className="flex items-center text-xs font-medium text-gray-500 hover:text-white transition-colors">
                      View Verified Profile <ExternalLink size={10} className="ml-1" />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
