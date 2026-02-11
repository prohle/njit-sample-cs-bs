import React from 'react';
import { 
  Code2, 
  Target, 
  Users, 
  ChevronRight, 
  ArrowUpRight, 
  Terminal,
  Cpu,
  Globe
} from 'lucide-react';

export default function NJITCSProgram() {
  // Direct asset mapping from the provided source code
  const assets = {
    logo: "https://www.njit.edu/themes/custom/njit/img/logo.svg",
    logoLight: "https://www.njit.edu/themes/custom/njit/img/logo-light.svg",
    heroImage: "https://www.njit.edu/sites/default/files/styles/hero_banner/public/degree/bs-computer-science-hero.jpg",
    studentLife: "https://www.njit.edu/sites/default/files/styles/card_image/public/life/around-campus.jpg"
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Sleek Glassmorphic Nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <img src={assets.logo} alt="NJIT" className="h-10 w-auto" />
            <div className="hidden h-6 w-px bg-slate-200 md:block" />
            <span className="hidden text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 md:block">
              Ying Wu College of Computing
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest md:flex">
              <a href="#curriculum" className="hover:text-red-600 transition-colors">Curriculum</a>
              <a href="#outcomes" className="hover:text-red-600 transition-colors">Outcomes</a>
            </div>
            <a href="https://www.njit.edu/apply-now" className="rounded-full bg-red-600 px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white hover:bg-slate-900 transition-all shadow-lg shadow-red-200">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section: High Contrast */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
        <img 
          src={assets.heroImage} 
          alt="NJIT CS Hero" 
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              #1 Best Value College in NJ
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.8]">
              Build the <br/>
              <span className="text-red-600">Future.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-slate-300 leading-relaxed md:text-xl">
              NJIT's Bachelor of Science in Computer Science is the gateway to the tech industry. 
              Master the algorithms and architectures that define our world.
            </p>
          </div>
        </div>
      </section>

      {/* Program Quick-View Bento */}
      <section className="mx-auto -mt-20 relative z-10 max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-white p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between h-64">
            <h3 className="text-2xl font-bold tracking-tight">120 Credits</h3>
            <p className="text-slate-500 text-sm leading-relaxed">A rigorous curriculum designed for the modern engineer.</p>
            <div className="flex gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase">ABET Accredited</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase">STEM-Designated</span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-red-600 p-10 text-white flex flex-col justify-between h-64 shadow-xl shadow-red-200">
            <Target size={32} />
            <p className="text-lg font-bold leading-tight underline decoration-red-400 decoration-2 underline-offset-4">Career First: 90% Placement Rate</p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-10 text-white flex flex-col justify-between h-64">
            <Cpu size={32} className="text-red-500" />
            <p className="text-sm font-medium text-slate-400">Located in Newark, the East Coast's rising tech hub.</p>
          </div>
        </div>
      </section>

      {/* Relatable Content Section */}
      <section id="curriculum" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-8 md:text-5xl uppercase">The <span className="text-red-600">Core</span> Stack</h2>
              <div className="space-y-4">
                {[
                  { title: "Software Engineering", desc: "Design and build large-scale distributed systems." },
                  { title: "AI & Machine Learning", desc: "Train the next generation of neural networks." },
                  { title: "Cybersecurity", desc: "Defend global infrastructure at NJIT's specialized labs." }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-slate-200 py-6 hover:border-red-600 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold group-hover:text-red-600 transition-colors">{item.title}</h4>
                      <ArrowUpRight size={20} className="text-slate-300 group-hover:text-red-600" />
                    </div>
                    <p className="mt-2 text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden bg-slate-200 aspect-square group shadow-2xl shadow-slate-300">
              <img 
                src={assets.studentLife} 
                alt="Student Life" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent p-12 flex flex-col justify-end">
                <p className="text-white font-bold text-2xl uppercase tracking-tighter italic">"More than just code."</p>
                <p className="text-slate-300 text-sm mt-2">Connect with 100+ student organizations on campus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome CTA */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Terminal className="mx-auto text-red-600 mb-8" size={48} />
          <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">Ready to compile your future?</h2>
          <p className="text-slate-500 mb-10 text-lg">Join the Ying Wu College of Computing. Applications for Fall 2026 are now open.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-950 transition-all">Start Application</button>
            <button className="bg-slate-50 text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all">Virtual Tour</button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <img src={assets.logo} alt="NJIT" className="h-8 mb-6 grayscale opacity-40 hover:opacity-100 transition-all" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                New Jersey Institute of Technology<br/>
                University Heights, Newark, NJ 07102
              </p>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Explore</h5>
                <ul className="space-y-4 text-xs font-bold text-slate-600">
                  <li><a href="https://www.njit.edu/admissions" className="hover:text-red-600">Admissions</a></li>
                  <li><a href="https://www.njit.edu/giving" className="hover:text-red-600">Giving</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Identity</h5>
                <ul className="space-y-4 text-xs font-bold text-slate-600">
                  <li><a href="https://www.njit.edu/news" className="hover:text-red-600">News</a></li>
                  <li><a href="https://www.njit.edu/title-ix" className="hover:text-red-600">Title IX</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}