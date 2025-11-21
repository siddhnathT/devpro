
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CAREER_DATA } from '../constants';

const CareerGrowth: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Career Trajectory</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="w-full h-[450px] bg-dark/80 rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/10 blur-[100px] rounded-full"></div>

          <div className="flex justify-between items-center mb-8">
             <h3 className="text-sm font-mono text-gray-400 tracking-widest uppercase">Growth Analytics</h3>
          </div>

          <ResponsiveContainer width="100%" height="85%">
            <LineChart
              data={CAREER_DATA}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="year" 
                stroke="#64748b" 
                axisLine={false}
                tickLine={false}
                tick={{fill: '#94a3b8', fontSize: 12, dy: 10}} 
                padding={{ left: 20, right: 20 }}
              />
              <YAxis 
                stroke="#64748b" 
                hide={false}
                axisLine={false}
                tickLine={false}
                tick={{fill: '#94a3b8', fontSize: 12}}
                domain={[0, 3]}
                tickCount={4}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0f172a', 
                  borderColor: '#1e293b', 
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                }}
                itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
              />
              <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle"
                wrapperStyle={{ top: -40, right: 0, fontSize: '12px' }}
              />
              
              {/* Roles / Year Line - Blue */}
              <Line 
                type="monotone" 
                dataKey="roles" 
                name="Roles / Year"
                stroke="#3b82f6" 
                strokeWidth={4} 
                dot={{ r: 6, fill: '#0f172a', stroke: '#3b82f6', strokeWidth: 3 }}
                activeDot={{ r: 8, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}
              />
              
              {/* Major Projects Line - Purple */}
              <Line 
                type="monotone" 
                dataKey="projects" 
                name="Major Projects"
                stroke="#c084fc" 
                strokeWidth={4} 
                dot={{ r: 6, fill: '#0f172a', stroke: '#c084fc', strokeWidth: 3 }}
                activeDot={{ r: 8, fill: '#c084fc', stroke: '#fff', strokeWidth: 2 }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.5))' }}
              />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="text-center mt-2">
            <p className="text-xs text-gray-500 italic">"Consistency in execution, scaling from foundation to innovation."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGrowth;
