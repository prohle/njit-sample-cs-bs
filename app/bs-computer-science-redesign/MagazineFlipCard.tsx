"use client";
import React, { useState } from 'react';
// Define the shape of your phase object
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
const MagazineFlipCard = ({ phase }: MagazineFlipCardProps) => {
  const [activeHalf, setActiveHalf] = useState('none');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    setActiveHalf(y < rect.height / 2 ? 'bottom' : 'top');
  };

  return (
    <div 
      className="relative h-[620px] w-full [perspective:2500px] group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveHalf('none')}
    >
      {/* 1. THE REVEALED BASE (Technical Layout) */}
      <div className="absolute inset-0 bg-[#FCFCFC] rounded-[2.5rem] shadow-inner border border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        {/* Center Fold Shadow */}
        <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 bg-gradient-to-b from-transparent via-slate-950/[0.04] to-transparent z-10" />

        <div className="relative z-20 h-full p-10 flex flex-col">
          {/* TOP SECTION: Icon now lives here */}
          <div className="flex justify-between items-start border-b border-slate-200 pb-6 mb-8">
            <div className="flex gap-5 items-center">
              <div className={`p-3 rounded-xl bg-white shadow-sm border border-slate-100 ${phase.accent}`}>
                {/* Scaled down slightly for the interior layout */}
                {React.cloneElement(phase.icon, { size: 20 })}
              </div>
              <div className="space-y-1">
                <p className="text-red-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em]">Phase Protocol</p>
                <h4 className="text-xl font-black text-slate-900 tracking-tighter uppercase leading-none">{phase.title}</h4>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-400 font-mono text-[8px] uppercase">Ref. Code</p>
              <p className="text-slate-900 font-mono text-[10px] font-bold">NJIT-CS-{phase.phase.split(' ')[1]}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-5 gap-8">
            <div className="col-span-3 space-y-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Core Competencies</p>
              <div className="space-y-3">
                {phase.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-3 transition-all duration-700 delay-[${i * 50}ms] ${activeHalf !== 'none' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span className="text-[11px] font-bold uppercase tracking-tight text-slate-700 leading-none">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2 border-l border-slate-100 pl-6 space-y-6">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Accreditation</p>
                <p className="text-[10px] text-slate-600 font-medium leading-relaxed">ABET Standard Curriculum V.2026</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-900 rounded-full w-3/4" />
                </div>
                <p className="text-[8px] font-bold text-slate-400 uppercase mt-2">Program Completion: 75%</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
            <span className="text-[9px] font-black text-slate-900 uppercase tracking-tighter">Blueprint for Mastery</span>
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 bg-slate-300 rounded-full" />)}
            </div>
          </div>
        </div>
      </div>

      {/* 2. TOP HALF FLAP (Cover - Minimalist) */}
      <div 
        className={`absolute top-0 left-0 w-full h-1/2 origin-bottom transition-all duration-[850ms] [transform-style:preserve-3d] z-30
          ${activeHalf === 'top' ? '[transform:rotateX(170deg)] pointer-events-none' : '[transform:rotateX(0deg)]'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.15, 0.85, 0.35, 1)' }}
      >
        <div className={`absolute inset-0 [backface-visibility:hidden] ${phase.bg} rounded-t-[2.5rem] p-10 border border-slate-100 border-b-0 flex flex-col justify-end overflow-hidden`}>
           <h3 className="text-3xl font-black tracking-tighter uppercase">{phase.title}</h3>
           <div className="absolute bottom-0 left-0 w-full h-px bg-white/40" />
        </div>
        <div className="absolute inset-0 [transform:rotateX(180deg)] [backface-visibility:hidden] bg-[#F9F9F9] rounded-t-[2.5rem] border border-slate-200 shadow-2xl p-8 flex items-center justify-center">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">Phase Documentation</p>
        </div>
      </div>

      {/* 3. BOTTOM HALF FLAP (Cover - Description) */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-1/2 origin-top transition-all duration-[850ms] [transform-style:preserve-3d] z-30
          ${activeHalf === 'bottom' ? '[transform:rotateX(-170deg)] pointer-events-none' : '[transform:rotateX(0deg)]'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.15, 0.85, 0.35, 1)' }}
      >
        <div className={`absolute inset-0 [backface-visibility:hidden] ${phase.bg} rounded-b-[2.5rem] p-10 border border-slate-100 border-t-0 flex flex-col justify-start overflow-hidden`}>
           <p className="text-slate-500 text-[13px] leading-relaxed font-medium line-clamp-4">{phase.description}</p>
           <div className="absolute top-0 left-0 w-full h-px bg-black/[0.03]" />
        </div>
        <div className="absolute inset-0 [transform:rotateX(180deg)] [backface-visibility:hidden] bg-[#F9F9F9] rounded-b-[2.5rem] border border-slate-200 shadow-2xl p-8 flex flex-col items-center justify-center">
            <div className="w-12 h-0.5 bg-slate-200 mb-4" />
            <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">Section {phase.phase.split(' ')[1]}</span>
        </div>
      </div>

      {/* 4. THE BINDER RINGS */}
      <div className="absolute top-1/2 left-0 w-full h-px z-[100] flex justify-center items-center pointer-events-none">
        <div className="flex gap-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="group-hover:scale-105 transition-transform duration-500">
               <div className="w-2 h-7 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 rounded-full border border-slate-500/10 shadow-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagazineFlipCard;