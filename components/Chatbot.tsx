import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { GenerateContentResponse } from '@google/genai';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: 'model', text: "Hi! I'm an AI assistant trained on Alex's portfolio. Ask me anything about his experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await sendMessageToGemini(userMessage.text);
      
      let fullResponse = '';
      const botMessageId = (Date.now() + 1).toString();
      
      // Add initial empty bot message
      setMessages(prev => [...prev, { id: botMessageId, role: 'model', text: '', isLoading: true }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
            fullResponse += c.text;
            setMessages(prev => prev.map(msg => 
                msg.id === botMessageId 
                ? { ...msg, text: fullResponse, isLoading: false } 
                : msg
            ));
        }
      }

    } catch (error) {
      console.error("Error communicating with Gemini:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "I'm having trouble connecting to my brain right now. Please try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'bg-surface hover:bg-surface-hover text-white rotate-90' : 'bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 animate-bounce'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-surface border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3 shadow-lg">
              <Sparkles size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Portfolio AI</h3>
              <p className="text-xs text-green-400 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5"></span>
                Online
              </p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-dark/50 custom-scrollbar">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                }`}
              >
                {msg.text}
                {msg.isLoading && <span className="inline-block w-1 h-4 ml-1 bg-current animate-pulse">|</span>}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-surface rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about my skills..."
              className="w-full bg-dark border border-white/10 rounded-full py-3 pl-4 pr-12 text-white text-sm focus:outline-none focus:border-primary transition-colors"
              disabled={isTyping}
            />
            <button 
              onClick={handleSend} 
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-2 bg-primary/20 text-primary hover:bg-primary hover:text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="mt-2 text-center">
             <p className="text-[10px] text-gray-600">Powered by Gemini 2.5 Flash</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;