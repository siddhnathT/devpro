
import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Database, Globe, Shield, Code, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Programming Languages': return <Code size={20} />;
      case 'Artificial Intelligence': return <Cpu size={20} />;
      case 'Web & Cloud': return <Globe size={20} />;
      case 'Data Analytics': return <Database size={20} />;
      case 'Security Tools': return <Shield size={20} />;
      default: return <Terminal size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Technical Arsenal</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive toolkit spanning the full stack, from hardware interfaces to intelligent algorithms.
            </p>
        </div>

        {/* T-Shaped Expertise Visual */}
        <div className="mb-20 bg-surface/30 border border-white/5 rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            
            <h3 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center">
                <span className="text-blue-500 text-2xl mr-2 font-serif">T</span> 
                - Shaped Expertise
            </h3>
            
            <div className="flex flex-col items-center">
                {/* Horizontal Bar (Broad) */}
                <div className="w-full bg-gradient-to-r from-blue-900/20 via-blue-800/40 to-blue-900/20 p-4 rounded-xl border border-blue-500/20 mb-4 relative">
                     <p className="text-center text-sm font-bold text-blue-300 uppercase tracking-widest mb-2">Cloud & DevOps • Web • Data Analytics</p>
                     <p className="text-center text-xs text-gray-400">Broad knowledge across full-stack development and infrastructure</p>
                </div>

                {/* Vertical Bar (Deep) */}
                <div className="w-64 bg-gradient-to-b from-purple-900/40 to-purple-900/10 p-6 rounded-b-xl border-x border-b border-purple-500/20 -mt-5 pt-8 relative z-10">
                    <div className="text-center space-y-4">
                        <div>
                            <p className="text-xs text-purple-300 font-bold uppercase tracking-widest mb-1">AI & Deep Learning</p>
                            <div className="h-1 w-16 bg-purple-500 mx-auto rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-xs text-purple-300 font-bold uppercase tracking-widest mb-1">Medical IoT</p>
                            <div className="h-1 w-12 bg-purple-500 mx-auto rounded-full"></div>
                        </div>
                        <div>
                            <p className="text-xs text-purple-300 font-bold uppercase tracking-widest mb-1">Blockchain</p>
                            <div className="h-1 w-10 bg-purple-500 mx-auto rounded-full"></div>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-4 italic">Deep Specialization</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Grid of Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-surface/20 border border-white/5 hover:bg-surface/40 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-dark to-surface flex items-center justify-center text-blue-400 border border-white/5 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-colors">
                    {getIcon(category.category)}
                </div>
                <h3 className="ml-4 text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                    {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-dark text-gray-400 rounded-md text-xs border border-white/5 group-hover:border-white/10 group-hover:text-gray-300 transition-colors cursor-default"
                  >
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

export default Skills;
