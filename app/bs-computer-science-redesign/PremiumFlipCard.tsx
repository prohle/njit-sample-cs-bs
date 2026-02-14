"use client";
import React, { useState } from 'react';
interface PhaseData {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  icon: React.ReactElement; // For the <Binary /> component
  accent: string;
  bg: string;
  courses: string[];
  color: string;
}

interface MagazineFlipCardProps {
  phase: PhaseData;
}
const PremiumFlipCard = ({ phase }:MagazineFlipCardProps) => {
  // 0: Neutral, 1: Flipped Up, -1: Flipped Down
  const [flipDirection, setFlipDirection] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top; // cursor position relative to card
    const height = rect.height;
    
    // If cursor enters top half, flip downwards. If bottom half, flip upwards.
    setFlipDirection(y < height / 2 ? 1 : -1);
  };

  const handleMouseLeave = () => setFlipDirection(0);

  return (
    <div 
      className="relative h-[500px] w-full [perspective:2000px] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* THE BASE (Bottom Layer/Result) */}
      <div className="absolute inset-0 rounded-[3rem] bg-slate-900 p-10 flex flex-col justify-center border border-slate-800 shadow-inner">
        <h4 className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Expertise Gained</h4>
        <div className="space-y-4">
          {phase.skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase text-slate-300">
               <div className="h-1 w-1 bg-red-500 rounded-full" /> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* MULTIPLE DECORATIVE SHEETS (The "Premium" Stagger) */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full h-full rounded-[3rem] bg-white/40 backdrop-blur-sm pointer-events-none transition-all cubic-bezier(0.4, 0, 0.2, 1)`}
          style={{
            transitionDuration: `${600 + i * 100}ms`,
            transitionDelay: `${i * 30}ms`,
            transformOrigin: flipDirection === 1 ? 'top' : 'bottom',
            transform: flipDirection === 0 ? 'rotateX(0deg)' : `rotateX(${flipDirection * -180}deg)`,
            opacity: flipDirection === 0 ? 1 : 0,
            zIndex: 30 - i,
          }}
        />
      ))}

      {/* THE MAIN TOP FACE */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) z-40"
        style={{
          transformOrigin: flipDirection === 1 ? 'top' : 'bottom',
          transform: flipDirection === 0 ? 'rotateX(0deg)' : `rotateX(${flipDirection * -180}deg)`,
          backfaceVisibility: 'hidden'
        }}
      >
        <div className={`h-full w-full p-10 rounded-[3rem] ${phase.bg} border border-slate-100 flex flex-col justify-between shadow-xl`}>
          <div>
            <div className={`mb-8 inline-flex p-4 rounded-2xl bg-white shadow-sm ${phase.accent}`}>
              {phase.icon}
            </div>
            <p className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-2 ${phase.accent}`}>
              {phase.phase}
            </p>
            <h3 className="text-3xl font-black tracking-tight">{phase.title}</h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-4">{phase.description}</p>
        </div>
      </div>
      
      {/* HANGER LINE INDICATOR */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100/50 z-50 pointer-events-none" />
    </div>
  );
};

export default PremiumFlipCard;