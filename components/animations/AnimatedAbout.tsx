'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { splitWords } from '@/lib/splitWords'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, 
         SiExpress, SiMongodb, SiPostgresql, SiGit, SiDocker, 
         SiFigma, SiJavascript } from 'react-icons/si'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const skills = [
    { icon: SiReact, name: 'React.js' },
    { icon: SiNextdotjs, name: 'Next.js' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiTailwindcss, name: 'TailwindCSS' },
    { icon: SiNodedotjs, name: 'Node.js' },
    { icon: SiExpress, name: 'Express.js' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiGit, name: 'Git' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiFigma, name: 'Figma' },
  ]

  useEffect(() => {
    const section = sectionRef.current
    const heading = headingRef.current
    if (!section || !heading) return

    const ctx = gsap.context(() => {
      // Word-level stagger animation
      const words = splitWords(heading)
      
      gsap.fromTo(words,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1
          }
        }
      )

      // Card entrances
      gsap.fromTo('.about-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
          }
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-20">
          <h2 ref={headingRef} className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            <motion.div className="about-card space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer who started my journey in 2023. Despite being relatively 
                new to the field, I've quickly adapted and learned modern web development technologies, 
                focusing on creating efficient and user-friendly applications.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                My approach combines clean code practices with creative problem-solving. I'm constantly 
                learning and staying updated with the latest technologies in web development, particularly 
                in the React and Node.js ecosystem.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Stats */}
            <div className="about-card grid grid-cols-2 gap-8">
              {[
                { number: "1+", label: "Year Experience" },
                { number: "10+", label: "Projects Completed" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-cyan-400/20"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)', boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="about-card p-8 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-purple-400/20">
              <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
              <ul className="space-y-3 text-gray-300">
                {['Building modern web applications', 'Learning advanced React patterns', 'Exploring full-stack development', 'Improving UI/UX design skills'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="about-card mt-20">
          <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-8 py-4"
              animate={{ 
                x: [0, -1920],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center gap-3 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl p-6 backdrop-blur-sm min-w-[120px] border border-cyan-400/20"
                  whileHover={{ scale: 1.1, borderColor: 'rgba(6, 182, 212, 0.8)', boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.icon className="w-10 h-10 text-white" />
                  <span className="text-sm text-gray-300 whitespace-nowrap">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

