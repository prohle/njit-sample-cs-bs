"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ResumeCard() {
  const cardRef = useRef(null);

  // Mouse coordinates for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement so it doesn't feel "jittery"
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map the mouse position to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate position relative to center (0.5 is center)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex items-center justify-center p-4" style={{ perspective: "1200px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[450px] w-full max-w-[380px] rounded-[3rem] bg-white p-[2px] shadow-2xl transition-shadow hover:shadow-red-500/20"
      >
        {/* The Card Inner Content */}
        <div 
          style={{ transform: "translateZ(75px)" }}
          className="h-full w-full rounded-[2.9rem] bg-slate-50 p-10 border border-white relative overflow-hidden"
        >
          {/* Subtle Background Mesh/Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          {/* Header UI */}
          <div className="flex justify-between items-center mb-16">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            </div>
            <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase italic">buffer_id_njit_001</span>
          </div>

          {/* Identity Section */}
          <div className="space-y-8 font-mono">
            <div className="border-b border-slate-200 pb-2 mb-4">
              <span className="text-slate-400 text-[9px] block mb-1 uppercase tracking-tighter">Identity_Object</span>
              <span className="text-slate-900 text-sm font-black uppercase tracking-tight">Candidate_NJIT_CS</span>
            </div>

            {/* Career Highlight */}
            <div className="space-y-6" style={{ transform: "translateZ(50px)" }}>
              <div>
                <p className="text-red-600 text-[9px] font-bold uppercase tracking-[0.4em] mb-3">Recent_Deployment</p>
                <div className="pl-4 border-l-2 border-red-600 bg-red-50/50 py-3 pr-4 rounded-r-xl">
                  <p className="text-slate-900 text-[13px] font-black leading-tight">Software Engineer Intern</p>
                  <p className="text-red-600 text-xs font-bold mt-0.5">META / NEW YORK</p>
                </div>
              </div>

              {/* Achievements with translateZ for depth */}
              <div className="space-y-3" style={{ transform: "translateZ(30px)" }}>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Core_Impact</p>
                <ul className="text-[11px] text-slate-600 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-red-600">01</span>
                    <span>Optimized distributed DB queries by 24%</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">02</span>
                    <span>Scalable architecture for AI pipelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-40">
             <div className="text-[8px] font-mono leading-tight">
               NJIT // CS <br/>
               CLASS OF 2026
             </div>
             <div className="h-8 w-8 rounded bg-slate-200" /> {/* Placeholder for mini-QR or logo */}
          </div>
        </div>

        {/* Floating Gloss Effect that follows the mouse */}
        <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </div>
  );
}