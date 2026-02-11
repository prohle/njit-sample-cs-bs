import React from 'react';
import { 
  ArrowUpRight, 
  Terminal,
  Cpu,
  Shield,
  Code2,
  Command,
  Mail,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function NJITCSProgram() {
  const assets = {
    logo: "https://www.njit.edu/themes/custom/njit/img/logo.svg", // Dark logo for light theme
  };

  const logos = ["Google", "Amazon", "Microsoft", "Meta", "IBM", "Prudential", "NASA", "UPS"];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Navigation - Clean & Sharp */}
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
              <a href="#express" className="hover:text-white transition-colors">4+1 MS</a>
            </div>
            <a href="https://www.njit.edu/apply" className="rounded-md bg-red-600 px-5 py-2 text-xs font-black uppercase tracking-widest text-white hover:bg-slate-900 transition-all shadow-lg shadow-red-100">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - The "Pipeline" Header */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-red-50/50 blur-[100px] rounded-full" />
        
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-red-600">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.5)] animate-pulse" />
            Vesting the future in Newark & Silicon Valley
          </div>
          <h1 className="text-6xl font-black tracking-tighter md:text-8xl lg:text-9xl leading-[0.85] text-slate-900">
            Build the future.<br/>
            <span className="text-slate-300">Get hired by the best.</span>
          </h1>
          <p className="mt-12 mx-auto max-w-2xl text-lg text-slate-500 font-medium leading-relaxed md:text-xl">
            NJIT’s B.S. in Computer Science: A direct pipeline to the NYC tech corridor. <span className="text-slate-900 font-bold">90% of graduates placed within 6 months.</span>
          </p>
          
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-red-600 px-10 py-5 text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-slate-900 transition-all shadow-xl shadow-red-100">
              Apply Now
            </button>
            <button className="rounded-lg border border-slate-200 bg-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50 transition-all shadow-sm">
              View Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Proof of Work Ticker */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.4em] text-slate-400 mb-10">
            Our graduates build the infrastructure of the modern web at
          </p>
          <div className="flex flex-wrap justify-between items-center gap-8 grayscale opacity-50 contrast-125">
            {logos.map(logo => (
              <span key={logo} className="text-xl font-black tracking-tighter text-slate-900">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* M.S. Express Bento Grid */}
      <section id="express" className="py-32 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-10 hover:border-red-200 transition-all shadow-sm">
            <h3 className="font-mono text-[10px] text-red-600 uppercase tracking-[0.3em] mb-6 font-bold">Bridge to Master’s</h3>
            <p className="text-2xl font-bold leading-tight mb-4">The 4+1 Program</p>
            <p className="text-slate-500 text-sm leading-relaxed">Complete your B.S. and M.S. in 5 years. Save $22,000 in tuition fees.</p>
          </div>
          
          <div className="group relative rounded-[2.5rem] border border-slate-200 bg-white p-10 hover:border-red-200 transition-all shadow-sm">
            <h3 className="font-mono text-[10px] text-red-600 uppercase tracking-[0.3em] mb-6 font-bold">Industry Partners</h3>
            <p className="text-2xl font-bold leading-tight mb-4">200+ Corporate Nodes</p>
            <p className="text-slate-500 text-sm leading-relaxed">Work on Capstone projects with real-world stakes for Fortune 500 partners.</p>
          </div>

          <div className="relative rounded-[2.5rem] bg-slate-900 p-10 overflow-hidden text-white shadow-2xl">
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Terminal size={160} />
            </div>
            <h3 className="font-mono text-[10px] text-red-500 uppercase tracking-[0.3em] mb-6 font-bold">The Payoff</h3>
            <p className="text-5xl font-black mb-2 tracking-tighter">$76,251</p>
            <p className="text-slate-400 text-[10px] font-mono uppercase tracking-widest">Avg. Starting Salary</p>
          </div>
        </div>
      </section>

      {/* The Technical Stack */}
      <section id="curriculum" className="py-32 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-6 mb-20">
            <h2 className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap">Technical Stack</h2>
            <div className="h-px w-full bg-slate-100" />
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: <Cpu size={28}/>, title: "AI & ML", desc: "Master the algorithms powering the next generation of LLMs and autonomous systems." },
              { icon: <Shield size={28}/>, title: "Cybersecurity", desc: "Defend global infrastructure at NJIT’s NSA-designated center of academic excellence." },
              { icon: <Code2 size={28}/>, title: "Software Engineering", desc: "From Linux kernel internals to modern React/Next.js distributed architectures." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <div className="text-red-600">{item.icon}</div>
                <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Ready Section */}
      <section className="py-40 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">Career-Ready <br/>on Day Zero.</h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-md">Our curriculum is reverse-engineered from the hiring requirements of Google, Meta, and the NYC financial corridor.</p>
            <a href="#" className="inline-flex items-center gap-3 text-red-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] border-b border-red-600 pb-1">
              Explore Career Outcomes <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Resume Preview UI - Light Version */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-1 shadow-2xl relative overflow-hidden group">
            <div className="bg-slate-50 rounded-[calc(2rem-4px)] p-10">
              <div className="flex items-center justify-between mb-12">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase italic">resume_buffer.io</span>
              </div>
              
              <div className="space-y-8 font-mono">
                <div className="flex justify-between items-end border-b border-slate-200 pb-2 mb-4">
                  <span className="text-slate-900 text-xs font-bold uppercase tracking-tight">Candidate_NJIT_Alpha</span>
                  <span className="text-slate-400 text-[9px]">BSCS CLASS OF 2026</span>
                </div>

                <div className="space-y-4">
                  <p className="text-red-600 text-[9px] font-bold uppercase tracking-[0.4em]">Experience</p>
                  <div className="pl-4 border-l-2 border-red-100 space-y-4">
                    <div>
                      <p className="text-slate-900 text-[11px] font-bold">Software Engineer Intern — AMAZON</p>
                      <p className="text-slate-500 text-[10px] mt-1 italic leading-relaxed">Reduced latency by 18% in cloud-native search infrastructure.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-red-600 text-[9px] font-bold uppercase tracking-[0.4em]">Tools</p>
                  <div className="flex gap-2 flex-wrap">
                    {["C++", "Python", "Rust", "Next.js"].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white text-slate-400 text-[9px] rounded border border-slate-200">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome CTA */}
      <section className="bg-red-600 py-32 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Terminal className="mx-auto mb-8 opacity-40" size={60} strokeWidth={1.5} />
          <h2 className="text-5xl font-black tracking-tighter mb-10 uppercase italic">Ready to Compile?</h2>
          <button className="bg-white text-red-600 px-14 py-6 rounded-md font-black uppercase tracking-[0.3em] text-[10px] hover:bg-slate-900 hover:text-white transition-all shadow-2xl">
            Start Your Pipeline
          </button>
        </div>
      </section>
    </div>
  );
}