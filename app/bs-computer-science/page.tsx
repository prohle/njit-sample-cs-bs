import React from 'react';
import { 
  Target, 
  ArrowUpRight, 
  Terminal,
  Cpu,
  Mail,
  ExternalLink,
  BookOpen,
  Users
} from 'lucide-react';

export default function NJITCSProgram() {
  const assets = {
    logo: "https://www.njit.edu/themes/custom/njit/img/logo.svg",
    heroImage: "https://www.njit.edu/sites/default/files/styles/16_9_scale_and_crop_x_large/public/major_images/computer-science-bs_0.jpg?itok=wx9Dql4x",
  };

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
      quote: "The collaborative environment and expert faculty at NJIT made my journey into software engineering both challenging and rewarding."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Navigation */}
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
              <a href="#directors" className="hover:text-red-600 transition-colors">Faculty</a>
              <a href="#outcomes" className="hover:text-red-600 transition-colors">Outcomes</a>
            </div>
            <a href="https://www.njit.edu/apply" className="rounded-full bg-red-600 px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white hover:bg-slate-900 transition-all shadow-lg shadow-red-200">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-slate-800">
        <img 
          src={assets.heroImage} 
          alt="NJIT CS Hero" 
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              B.S. in Computer Science
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.8] drop-shadow-2xl">
              Compile the <br/>
              <span className="text-red-600">Future.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-slate-100 font-medium leading-relaxed md:text-xl drop-shadow-md">
              Master the theoretical foundations and practical applications of computing to solve complex real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Program Statistics Bento */}
      <section className="mx-auto -mt-20 relative z-10 max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 rounded-[2rem] bg-white p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between h-64">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">Comprehensive Curriculum</h3>
            <p className="text-slate-500 text-sm leading-relaxed">A 120-credit program covering algorithms, software engineering, and systems.</p>
            <div className="flex gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase text-slate-500 border border-slate-200">ABET Accredited</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase text-slate-500 border border-slate-200">STEM-Designated</span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-red-600 p-10 text-white flex flex-col justify-between h-64 shadow-xl shadow-red-200">
            <Target size={32} />
            <p className="text-lg font-bold leading-tight underline decoration-red-400 decoration-2 underline-offset-4">High Placement: Graduates join top tech firms globally.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-900 p-10 text-white flex flex-col justify-between h-64">
            <Cpu size={32} className="text-red-500" />
            <p className="text-sm font-medium text-slate-400">Research opportunities in AI, Cybersecurity, and Data Science.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-black tracking-tighter mb-12 uppercase text-slate-900">What our students are saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center group hover:border-red-600 transition-all">
                <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-slate-100 group-hover:border-red-600 transition-all" />
                <h4 className="font-bold text-lg mb-2">{t.name}</h4>
                <p className="text-slate-500 text-sm italic leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Specializations Section */}
      <section id="curriculum" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight mb-8 md:text-5xl uppercase text-slate-900">Program <span className="text-red-600">Focus Areas</span></h2>
              <div className="space-y-4">
                {[
                  { title: "Advanced Computing Systems", desc: "Design high-performance architectures and distributed networks." },
                  { title: "Artificial Intelligence", desc: "Explore machine learning, robotics, and intelligent data analysis." },
                  { title: "Software Engineering", desc: "Master the lifecycle of large-scale software development." }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-slate-200 py-6 hover:border-red-600 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold group-hover:text-red-600 transition-colors text-slate-800">{item.title}</h4>
                      <ArrowUpRight size={20} className="text-slate-300 group-hover:text-red-600" />
                    </div>
                    <p className="mt-2 text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Replaced Student Life image with Program Stats/Info */}
            <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 aspect-square group shadow-2xl shadow-slate-300 p-12 flex flex-col justify-center text-white">
               <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <BookOpen className="text-red-600 shrink-0" size={32} />
                    <div>
                      <h4 className="text-xl font-bold">120 Credits Required</h4>
                      <p className="text-slate-400 text-sm">Including core CS, mathematics, and science electives.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="text-red-600 shrink-0" size={32} />
                    <div>
                      <h4 className="text-xl font-bold">Collaborative Research</h4>
                      <p className="text-slate-400 text-sm">Work alongside expert faculty in world-class labs.</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-slate-800">
                    <p className="text-white font-bold text-2xl uppercase tracking-tighter italic">"Theoretical foundation. Practical expertise."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Directors Section */}
      <section id="directors" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase text-slate-900">Academic Advising</h2>
            <p className="text-slate-500 mt-2">Get personalized guidance for your academic journey.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programDirectors.map((director, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                <div className="shrink-0">
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="h-32 w-32 rounded-2xl object-cover border-4 border-slate-50 group-hover:border-red-600 transition-all"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-2xl font-bold text-slate-900">{director.name}</h4>
                  <p className="text-red-600 font-bold text-sm uppercase tracking-wider mb-4">{director.role}</p>
                  
                  <div className="flex justify-center sm:justify-start gap-3">
                    <a 
                      href={director.profile} 
                      className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-600 transition-colors"
                    >
                      <ExternalLink size={14} /> View Profile
                    </a>
                    <a 
                      href={`mailto:${director.email}`}
                      className="flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200 transition-colors"
                    >
                      <Mail size={14} /> Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome CTA */}
      <section id="outcomes" className="bg-slate-900 py-32 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Terminal className="mx-auto text-red-600 mb-8" size={48} />
          <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">Ready to launch your career?</h2>
          <p className="text-slate-400 mb-10 text-lg">Join the Ying Wu College of Computing and start building your future today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.njit.edu/apply" className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all">Start Application</a>
            <a href="https://www.njit.edu/academics/degrees" className="bg-slate-800 text-white border border-slate-700 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-700 transition-all">Explore Degrees</a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Resources</h5>
                <ul className="space-y-4 text-xs font-bold text-slate-600">
                  <li><a href="https://www.njit.edu/admissions" className="hover:text-red-600 transition-colors">Admissions</a></li>
                  <li><a href="https://www.njit.edu/bursar" className="hover:text-red-600 transition-colors">Tuition</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Connect</h5>
                <ul className="space-y-4 text-xs font-bold text-slate-600">
                  <li><a href="https://www.njit.edu/news" className="hover:text-red-600 transition-colors">News</a></li>
                  <li><a href="https://www.njit.edu/calendar" className="hover:text-red-600 transition-colors">Calendar</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}