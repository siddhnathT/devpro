
import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo form.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Get In Touch</h2>
            <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed">
              I'm currently looking for new opportunities in AI, IoT, and Full-stack development.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-primary mr-6 border border-white/5 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-primary transition-colors text-lg font-medium block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-purple-400 mr-6 border border-white/5 group-hover:border-purple-400/50 group-hover:scale-110 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-purple-400 transition-colors text-lg font-medium block">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-secondary mr-6 border border-white/5 group-hover:border-secondary/50 group-hover:scale-110 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white text-lg font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
                <p className="text-white font-bold mb-4">Connect with me</p>
                <div className="flex space-x-4">
                     <a href={PERSONAL_INFO.linkedin} className="px-6 py-3 rounded-lg bg-surface border border-white/10 text-gray-300 hover:text-white hover:bg-surface/80 transition-all text-sm font-medium">
                         LinkedIn
                     </a>
                     <a href={PERSONAL_INFO.github} className="px-6 py-3 rounded-lg bg-surface border border-white/10 text-gray-300 hover:text-white hover:bg-surface/80 transition-all text-sm font-medium">
                         GitHub
                     </a>
                </div>
            </div>
          </div>

          <div className="bg-surface/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Hi, I'd like to discuss..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg shadow-blue-900/20">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
