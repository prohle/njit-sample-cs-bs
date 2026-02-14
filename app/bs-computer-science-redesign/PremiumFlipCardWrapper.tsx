'use client';
import dynamic from 'next/dynamic';
import { 
  ExternalLink,  Globe, Boxes, Binary
} from 'lucide-react'; 
// Lazy load the card with a placeholder to prevent layout jumps
const PremiumFlipCard = dynamic(() => import('./MagazineFlipCard'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full rounded-[3rem] bg-slate-50 animate-pulse" />
});

export default function CurriculumSection() {
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
  return (
    <section id="curriculum" className="py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black tracking-tighter uppercase mb-4">A Blueprint for Mastery</h2>
          <p className="text-slate-500 font-mono text-[11px] uppercase tracking-[0.4em]">120 Credits // ABET-Accredited Curriculum</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {/* The Horizontal "Hanger" Line - adjusted z-index to sit behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 z-0" />
          
          {curriculumPhases.map((phase, i) => (
            <div key={i} className="relative z-10">
              <PremiumFlipCard phase={phase} />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href="https://catalog.njit.edu/undergraduate/computing/computer-science/bs/" 
             className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl hover:shadow-red-500/20">
            Download Full Course Roadmap <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}