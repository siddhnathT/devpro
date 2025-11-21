import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const role = PERSONAL_INFO.roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting ? 0 : 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        }
      }
    }, isDeleting ? 50 : (displayText.length === role.length ? 1500 : 100));

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20 overflow-hidden">
      
      {/* Floating Code Card - Left */}
      <div className="hidden lg:block absolute top-1/4 left-10 xl:left-20 animate-blob animation-delay-2000">
        <div className="glass-card p-4 rounded-xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          <div className="flex space-x-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <code className="text-sm font-mono text-gray-300">
            <span className="text-secondary">const</span> <span className="text-accent">ai</span> = <span className="text-secondary">new</span> <span className="text-yellow-300">Future</span>();
          </code>
        </div>
      </div>

      {/* Floating Code Card - Right */}
      <div className="hidden lg:block absolute bottom-1/3 right-10 xl:right-20 animate-blob">
        <div className="glass-card p-4 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex space-x-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <code className="text-sm font-mono text-gray-300">
            <span className="text-secondary">while</span>(alive) {'{'} <br/>
            &nbsp;&nbsp;<span className="text-blue-400">learn</span>(); <br/>
            {'}'}
          </code>
        </div>
      </div>

      <div className="container mx-auto text-center z-10 relative">
        {/* Status Badge */}
        <div className="inline-flex items-center justify-center mb-8 px-4 py-1.5 border border-blue-500/30 rounded-full bg-blue-900/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-mono">Open to Work</span>
        </div>
        
        <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2 font-display">Hi, I'm</h2>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-display">
          {PERSONAL_INFO.name}
        </h1>
        
        {/* Typewriter Effect Role */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-16 flex items-center justify-center font-display">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            {displayText}
          </span>
          <span className="w-1 h-10 md:h-14 bg-purple-400 ml-2 animate-pulse"></span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
          {PERSONAL_INFO.bio.split('\n')[0]}
        </p>
        
        <div className="flex items-center justify-center gap-6">
          <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold text-white rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 font-display">
            <span className="mr-2 text-lg">View Work</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-all duration-300">
            <Linkedin size={24} />
          </a>
          
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-all duration-300">
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;