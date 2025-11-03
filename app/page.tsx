'use client'

import { useState } from 'react'
import AnimatedHero from '@/components/animations/AnimatedHero'
import AnimatedAbout from '@/components/animations/AnimatedAbout'
import AnimatedExperience from '@/components/animations/AnimatedExperience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import StarfieldBackground from '@/components/StarfieldBackground'
import KPRLoader from '@/components/KPRLoader'
import { useSmoothScroll } from '@/lib/smoothScroll'

export default function Home() {
  useSmoothScroll()
  const [loaded, setLoaded] = useState(false)
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* KPR Loader - shows first */}
      <KPRLoader onComplete={() => setLoaded(true)} />
      
      {/* Moving Starfield Background */}
      {loaded && <StarfieldBackground />}
      
      {/* Content with higher z-index */}
      {loaded && (
        <div className="relative" style={{ zIndex: 10 }}>
          <AnimatedHero />
          <AnimatedAbout />
          <AnimatedExperience />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  )
}