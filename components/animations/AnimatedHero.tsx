'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentText, setCurrentText] = useState(0)
  const titles = [
    { top: "WEB", bottom: "DEVELOPER" },
    { top: "FULL STACK", bottom: "ENGINEER" },
    { top: "UI/UX", bottom: "DESIGNER" },
    { top: "PROBLEM", bottom: "SOLVER" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Initial load sequence with stagger
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.fromTo('.hero-headline', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, delay: 0.3 }
      )
      .fromTo('.hero-image',
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.0 },
        '-=0.6'
      )
      .fromTo('.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      )

      // Pin & fade effect
      gsap.to('.hero-content', {
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: true
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const shapes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }))

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Logo */}
      <motion.div 
        className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Adnan's Portfolio
        </h3>
      </motion.div>

      {/* Main Content */}
      <div className="hero-content relative w-full h-screen flex flex-col items-center justify-center">
        {/* Text and Image Container */}
        <div className="relative w-full max-w-[1200px] h-[600px] flex items-center justify-center px-4 sm:px-8">
          {/* Large Text */}
          <motion.div 
            className="hero-headline absolute z-20 text-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-[40px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-bold leading-[0.85] tracking-[-0.02em]"
              >
                {titles[currentText].top}
                <br />
                {titles[currentText].bottom}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="hero-image absolute w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/img3.png"
              alt="Profile"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 500px"
            />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="hero-cta absolute bottom-20 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a
            href="#about"
            className="px-6 py-3 rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm bg-cyan-400/5"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

