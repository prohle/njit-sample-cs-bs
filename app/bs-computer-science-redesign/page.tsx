import React from 'react';
import { 
  ArrowUpRight, Terminal, Cpu, Shield, 
  Code2, Mail, ExternalLink, Target , Globe, Boxes, Binary
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
      bg: "bg-blue-500/5",
      courses: ["Roadmap to Computing", "Intro to Computer Science II", "Data Structures & Algorithms"],
      color: "bg-blue-50"
    },
    {
      phase: "Phase 02",
      title: "Systemic Engineering",
      subtitle: "Deep-Stack Integration",
      description: "Bridge the gap between abstract software and the physical silicon architectures they run on.",
      skills: ["Operating Systems", "Computer Systems", "Database System Design"],
      icon: <Boxes size={24} />,
      accent: "text-purple-500",
      bg: "bg-purple-500/5",
      courses: ["Computer Systems", "Operating Systems", "Computer Network Management"],
      color: "bg-indigo-50"
    },
    {
      phase: "Phase 03",
      title: "Production Scale",
      subtitle: "Deployment & Strategy",
      description: "Learn to build, secure, and manage massive distributed systems in a global infrastructure.",
      skills: ["Software Engineering", "Computer Network Management", "Intensive Programming"],
      icon: <Globe size={24} />,
      accent: "text-red-600",
      bg: "bg-red-600/5",
      courses: ["Software Engineering", "Intensive Programming", "Database System Design"],
      color: "bg-purple-50"
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

  return (
    <div 
      className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-red-600 selection:text-white"
      suppressHydrationWarning={true}
    >
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={assets.logo} alt="NJIT" className="h-8 w-auto" />
            <div className="h-4 w-px bg-slate-200" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Pipeline // BSCS
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-slate-500 md:flex">
              <a href="#curriculum" className="hover:text-red-600 transition-colors">Stack</a>
              <a href="#directors" className="hover:text-red-600 transition-colors">Advising</a>
              <a href="#outcomes" className="hover:text-red-600 transition-colors">4+1 MS</a>
            </div>
            <a href="https://www.njit.edu/apply" className="rounded-md bg-red-600 px-5 py-2 text-xs font-black uppercase tracking-widest text-white hover:bg-slate-900 transition-all shadow-lg shadow-red-100">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
        <img 
          src={assets.heroImage} 
          alt="NJIT CS Hero" 
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent" />
        
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <div className="max-w-4xl">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              Engineering the Digital Frontier // BSCS
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.85]">
              Build the<br/>
              <span className="text-red-600 italic">Next Era.</span>
            </h1>
            <p className="mt-12 max-w-2xl text-lg text-slate-300 font-medium leading-relaxed md:text-xl">
              NJIT’s B.S. in Computer Science is a premier gateway to the NYC tech corridor. <span className="text-white font-bold">90% of graduates placed within 6 months.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Bento Overlay */}
      <section className="mx-auto -mt-24 relative z-10 max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between h-64">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">120 Credits. <br/>Unlimited Potential.</h3>
            <p className="text-slate-500 text-sm leading-relaxed">ABET-accredited curriculum covering Linux kernel internals to modern distributed architectures.</p>
            <div className="flex gap-2">
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[9px] font-black uppercase text-slate-400 border border-slate-200 tracking-tighter">STEM-Designated</span>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-red-600 p-10 text-white flex flex-col justify-between h-64 shadow-xl shadow-red-200 group overflow-hidden relative">
            <Target size={32} className="relative z-10" />
            <p className="text-xl font-bold leading-tight relative z-10">$76,251 <br/><span className="text-sm font-normal opacity-80 uppercase tracking-widest">Avg. Starting Salary</span></p>
            <div className="absolute -right-4 -bottom-4 bg-white/10 rounded-full w-32 h-32 blur-2xl group-hover:bg-white/20 transition-all" />
          </div>
          <div className="rounded-[2.5rem] bg-slate-900 p-10 text-white flex flex-col justify-between h-64">
            <Cpu size={32} className="text-red-500" />
            <p className="text-sm font-medium text-slate-400">Research nodes in AI, Cybersecurity, and Data Science.</p>
          </div>
        </div>
      </section>

      {/* Proof of Work Ticker */}
      <section className="py-20 bg-white/50 border-b border-slate-100 mt-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.4em] text-slate-400 mb-10">
            Graduates vested at Global Leaders
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


            

      {/* Stats Section */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: "Placement Rate", value: "90%" },
            { label: "Avg Starting Salary", value: "$82k+" },
            { label: "Corporate Partners", value: "200+" },
            { label: "Faculty Research", value: "R1 Rank" }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Technical Stack */}
      <section id="curriculum" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap">Technical Stack</h2>
            <div className="h-px w-full bg-slate-200" />
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: <Cpu size={28}/>, title: "AI & ML", desc: "Master the algorithms powering the next generation of LLMs and autonomous systems." },
              { icon: <Shield size={28}/>, title: "Cybersecurity", desc: "Defend global infrastructure at NJIT’s NSA-designated center of excellence." },
              { icon: <Code2 size={28}/>, title: "Software Engineering", desc: "Full-lifecycle development from theory to high-performance cloud deployment." }
            ].map((item, i) => (
              <div key={i} className="space-y-6 group">
                <div className="text-red-600 transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-200 pl-4 group-hover:border-red-600 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Mind-Blowing Curriculum Section*/}
    <section className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
       

        {/* Specialization Callout */}
        <div className="mt-12 p-8 lg:p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold mb-4">Define Your Specialization</h3>
            <p className="text-slate-400">
              Customize your degree with technical electives in <span className="text-white font-semibold">Artificial Intelligence</span>, <span className="text-white font-semibold">Cybersecurity</span>, or <span className="text-white font-semibold">Game Development</span>.
            </p>
          </div>
          <button className="whitespace-nowrap bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-slate-200 transition">
            Explore Electives
          </button>
        </div>
      </section>
      {/* Career Ready Section - USING THE INTERACTIVE CARD */}
      <section id="outcomes" className="py-32 mx-auto max-w-7xl px-6 border-t border-slate-100">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">Career-Ready <br/>on Day Zero.</h2>
            <div className="space-y-6 mb-10">
                <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-red-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Bridge to Master’s</p>
                    <p className="text-slate-900 font-bold">The 4+1 Program</p>
                    <p className="text-slate-500 text-sm">Save $22,000. Earn your B.S. and M.S. in 5 years.</p>
                </div>
            </div>
            <a href="#" className="inline-flex items-center gap-3 text-red-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] border-b border-red-600 pb-1">
              Explore Career Outcomes <ArrowUpRight size={14} />
            </a>
          </div>

          {/* INSERTED CLIENT COMPONENT HERE */}
          <div className="relative">
            <ResumeCardWrapper />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-slate-900/5 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#dc2626_0%,transparent_50%)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <h2 className="text-3xl font-black tracking-tighter mb-20 uppercase text-center italic underline decoration-red-600 decoration-4 underline-offset-8">Testimonials // Proof of Concept</h2>
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

      {/* Advising Section */}
      <section id="directors" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">Academic Advising</h2>
            <p className="text-slate-500 mt-2 font-mono text-[10px] uppercase tracking-[0.2em]">Personalized Human Infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programDirectors.map((director, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-[2.5rem] bg-[#fafafa] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="shrink-0">
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="h-28 w-28 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xl font-bold text-slate-900">{director.name}</h4>
                  <p className="text-red-600 font-bold text-[10px] uppercase tracking-wider mb-4">{director.role}</p>
                  <div className="flex justify-center sm:justify-start gap-3">
                    <a href={director.profile} className="p-2 bg-slate-900 text-white rounded-lg hover:bg-red-600 transition-colors"><ExternalLink size={14} /></a>
                    <a href={`mailto:${director.email}`} className="p-2 bg-white border border-slate-200 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"><Mail size={14} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-40 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 opacity-10 mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Terminal className="mx-auto mb-10 opacity-30 animate-bounce" size={80} />
          <h2 className="text-6xl font-black tracking-tighter mb-12 uppercase italic leading-none">Ready to <br/>Initialize?</h2>
          <a href="https://www.njit.edu/apply" className="inline-block bg-white text-red-600 px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-[12px] hover:bg-slate-950 hover:text-white transition-all shadow-2xl scale-100 hover:scale-105">
            Start Your Pipeline
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <img src={assets.logo} alt="NJIT" className="h-6 grayscale opacity-30" />
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              © 2026 New Jersey Institute of Technology // Newark, NJ 07102
            </p>
        </div>
      </footer>
    </div>
  );
}