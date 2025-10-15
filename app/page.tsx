'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white relative overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}