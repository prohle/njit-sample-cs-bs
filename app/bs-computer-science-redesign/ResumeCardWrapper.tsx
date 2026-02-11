// ./app/bs-computer-science-redesign/ResumeCardWrapper.tsx
"use client"; // This is critical

import dynamic from 'next/dynamic';

const ResumeCard = dynamic(() => import('./ResumeCard'), { 
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full max-w-[380px] bg-slate-100 animate-pulse rounded-[3rem] border border-slate-200" />
  )
});

export default function ResumeCardWrapper() {
  return <ResumeCard />;
}