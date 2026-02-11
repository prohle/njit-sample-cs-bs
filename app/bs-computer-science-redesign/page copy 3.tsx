import React from 'react';
import { 
  ArrowUpRight, Terminal, Cpu, Shield, 
  Code2, Mail, ExternalLink, Target, 
  Layers, Database, Zap, Binary, 
  Globe, Boxes
} from 'lucide-react'; 

import ResumeCardWrapper from './ResumeCardWrapper';
export default function NJITCSProgram() {
  const assets = {
    logo: "https://www.njit.edu/themes/custom/njit/img/logo.svg",
    heroImage: "https://www.njit.edu/sites/default/files/styles/16_9_scale_and_crop_x_large/public/major_images/computer-science-bs_0.jpg?itok=wx9Dql4x",
  };

  const logos = ["Google", "Amazon", "Microsoft", "Meta", "IBM", "Prudential", "NASA", "UPS"];

  const curriculumPhases = [
    {
      phase: "Phase 01",
      title: "Core Architecture",
      subtitle: "The Binary Foundation",
      description: "Master the fundamental logic and structural thinking required for high-level engineering.",
      skills: ["Roadmap to Computing", "Data Structures & Algorithms", "Calculus for Physics"],
      icon: <Binary size={24} />,
      accent: "text-blue-500",
      bg: "bg-blue-500/5"
    },
    {
      phase: "Phase 02",
      title: "Systemic Engineering",
      subtitle: "Deep-Stack Integration",
      description: "Bridge the gap between abstract software and the physical silicon architectures they run on.",
      skills: ["Operating Systems", "Computer Systems", "Database System Design"],
      icon: <Boxes size={24} />,
      accent: "text-purple-500",
      bg: "bg-purple-500/5"
    },
    {
      phase: "Phase 03",
      title: "Production Scale",
      subtitle: "Deployment & Strategy",
      description: "Learn to build, secure, and manage massive distributed systems in a global infrastructure.",
      skills: ["Software Engineering", "Computer Network Management", "Intensive Programming"],
      icon: <Globe size={24} />,
      accent: "text-red-600",
      bg: "bg-red-600/5"
    }
  ];

  const testimonials = [
    {
      name: "Zhe He",
      image: "https://content.njit.edu/sites/content/files/testimonials/zhe-he.jpg",
      quote: "NJIT provided me with the technical foundation and research opportunities to excel in the field of biomedical informatics."
    },
    {
      name: "Krupali Patel",
      image: "https://content.njit.edu/sites/content/files/testimonials/krupali-patel.jpg",
      quote: "The CS program's focus on real-world applications helped me land a position at a top tech firm before graduation."
    },
    {
      name: "Vignesh Kumar",
      image: "https://content.njit.edu/sites/content/files/testimonials/vignesh-kumar.jpg",
      quote: "The collaborative environment and expert faculty at NJIT made my journey into software engineering both rewarding."
    }
  ];

  const programDirectors = [
    {
      name: "Bell, Michele",
      role: "Director of Academic Advisement",
      email: "michele.bell@njit.edu",
      profile: "https://people.njit.edu/profile/mbell",
      image: "https://uws.njit.edu/ldapimage.php?format=full&uid=mbell"
    },
    {
      name: "McCormick, Shanna",
      role: "Graduate Coordinator",
      email: "shanna.mccormick@njit.edu",
      profile: "https://people.njit.edu/profile/sam52",
      image: "https://uws.njit.edu/ldapimage.php?format=full&uid=sam52"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={assets.logo} alt="NJIT Logo" className="h-8 w-auto" />
            <div className="h-4 w-px bg-slate-200" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Ying Wu College // BSCS
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-slate-500 md:flex">
              <a href="#curriculum" className="hover:text-red-600 transition-colors">Stack</a>
              <a href="#outcomes" className="hover:text-red-600 transition-colors">4+1 MS</a>
              <a href="#directors" className="hover:text-red-600 transition-colors">Advising</a>
            </div>
            <a href="https://www.njit.edu/apply" className="rounded-full bg-red-600 px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white hover:bg-slate-900 transition-all shadow-lg shadow-red-200">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] w-full overflow-hidden bg-slate-950">
        <img 
          src={assets.heroImage} 
          alt="CS Students" 
          className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-[#fafafa]" />
        
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              Engineering the Digital Frontier
            </div>
            <h1 className="text-7xl font-black tracking-tighter text-white md:text-8xl lg:text-[10rem] leading-[0.8] mb-12">
              Code the <br/>
              <span className="text-red-600 italic">Next Era.</span>
            </h1>
            <p className="max-w-2xl text-xl text-slate-300 font-medium leading-relaxed">
              NJIT’s B.S. in Computer Science is the premier gateway to the NYC tech corridor. 
              <span className="block mt-4 text-white font-bold border-l-4 border-red-600 pl-4">90% Career Placement Rate.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Proof of Work Ticker (Employers) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.4em] text-slate-400 mb-10">
            Graduates vested at global leaders
          </p>
          <div className="flex flex-wrap justify-between items-center gap-8 grayscale opacity-40">
            {logos.map(logo => (
              <span key={logo} className="text-xl font-black tracking-tighter text-slate-900">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum: The Evolutionary Roadmap */}
      <section id="curriculum" className="py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-4">A Blueprint for Mastery</h2>
            <p className="text-slate-500 font-mono text-[11px] uppercase tracking-[0.4em]">120 Credits // ABET-Accredited Curriculum</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-0" />
            {curriculumPhases.map((phase, i) => (
              <div key={i} className="relative z-10 group">
                <div className={`p-10 rounded-[3rem] ${phase.bg} border border-slate-100 group-hover:border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 h-full`}>
                  <div className={`mb-8 inline-flex p-4 rounded-2xl bg-white shadow-sm ${phase.accent}`}>
                    {phase.icon}
                  </div>
                  <p className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-2 ${phase.accent}`}>
                    {phase.phase} — {phase.subtitle}
                  </p>
                  <h3 className="text-2xl font-black tracking-tight mb-4">{phase.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{phase.description}</p>
                  <div className="space-y-3">
                    {phase.skills.map((skill, si) => (
                      <div key={si} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight text-slate-700">
                        <div className="h-1 w-1 rounded-full bg-slate-300" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="https://catalog.njit.edu/undergraduate/computing/computer-science/bs/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all">
              Download Full Course Roadmap <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 4+1 Program & Interactive Outcome Card */}
      <section id="outcomes" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative z-10">
            <h2 className="text-6xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
              Career-Ready <br/><span className="text-red-600">Day Zero.</span>
            </h2>
            <div className="space-y-4 mb-12">
              <div className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-red-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-2">The BS/MS Fast Track</p>
                <h4 className="text-2xl font-bold mb-2">The 4+1 Program</h4>
                <p className="text-slate-600 leading-relaxed">Combine your B.S. and M.S. into five years. Save $22,000 in tuition costs and enter the market with advanced credentials.</p>
              </div>
            </div>
            <a href="https://www.njit.edu/computing/career-outcomes" className="group inline-flex items-center gap-3 text-red-600 font-mono text-[11px] font-bold uppercase tracking-[0.3em]">
              View Career Statistics <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <ResumeCardWrapper />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-100/40 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Testimonials // Proof of Concept */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#dc2626_0%,transparent_50%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <h2 className="text-3xl font-black tracking-tighter mb-20 uppercase text-center italic underline decoration-red-600 decoration-4 underline-offset-8">Testimonials // Alumni Success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-red-600/50 transition-all flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-2xl object-cover mb-6 border-2 border-white/10" />
                <h4 className="font-bold text-lg mb-2">{t.name}</h4>
                <p className="text-slate-400 text-sm italic leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advising Infrastructure */}
      <section id="directors" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase text-slate-900">Expert Support</h2>
            <p className="text-slate-400 mt-4 font-mono text-[10px] uppercase tracking-[0.4em]">Personalized Academic Advising Infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programDirectors.map((director, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-8 p-10 rounded-[3rem] bg-[#fafafa] border border-slate-100 hover:shadow-2xl transition-all group">
                <img 
                  src={director.image} 
                  alt={director.name} 
                  className="h-32 w-32 rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-lg"
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{director.name}</h4>
                  <p className="text-red-600 font-bold text-[10px] uppercase tracking-widest mb-6">{director.role}</p>
                  <div className="flex justify-center sm:justify-start gap-4">
                    <a href={director.profile} aria-label="View Profile" className="p-3 bg-slate-950 text-white rounded-xl hover:bg-red-600 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                    <a href={`mailto:${director.email}`} aria-label="Send Email" className="p-3 bg-white border border-slate-200 text-slate-950 rounded-xl hover:bg-slate-50 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-red-600 py-40 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 opacity-10 mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Terminal className="mx-auto mb-10 opacity-30" size={80} />
          <h2 className="text-6xl font-black tracking-tighter mb-12 uppercase italic leading-none">Ready to <br/>Initialize?</h2>
          <a href="https://www.njit.edu/apply" className="inline-block bg-white text-red-600 px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-[12px] hover:bg-slate-950 hover:text-white transition-all shadow-2xl scale-100 hover:scale-105">
            Start Your Pipeline
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <img src={assets.logo} alt="NJIT" className="h-6 grayscale opacity-40" />
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">NJIT Computing</span>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} New Jersey Institute of Technology // Newark, NJ 07102
          </p>
        </div>
      </footer>
    </div>
  );
}