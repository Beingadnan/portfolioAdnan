'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from '@/lib/gsap'

interface KPRLoaderProps {
  onComplete: () => void
}

export default function KPRLoader({ onComplete }: KPRLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const loaderRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading progress
    let currentProgress = 0
    const duration = 2800 // 2.8 seconds total
    const interval = 30 // Update every 30ms
    const increment = 100 / (duration / interval)

    const progressInterval = setInterval(() => {
      currentProgress += increment + Math.random() * 2
      
      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)
        clearInterval(progressInterval)
        
        // GSAP exit animation
        setTimeout(() => {
          const tl = gsap.timeline({
            onComplete: () => {
              setIsVisible(false)
              setTimeout(onComplete, 100)
            }
          })
          
          // Animate progress bar to 100%
          if (barRef.current) {
            tl.to(barRef.current, {
              width: '100%',
              duration: 0.3,
              ease: 'power2.inOut'
            })
          }
          
          // Fade out loader
          if (loaderRef.current) {
            tl.to(loaderRef.current, {
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out'
            }, '-=0.2')
          }
        }, 200)
      } else {
        setProgress(Math.floor(currentProgress))
      }
    }, interval)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={loaderRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0a0b0f] grid place-items-center"
        >
          <div className="w-[min(640px,90vw)] space-y-6">
            {/* Console-style loading text */}
            <div className="font-mono text-[#c5ff3d] text-base md:text-lg tracking-wide flex items-center gap-3">
              <span className="opacity-70">LOADING –</span>
              <span className="font-bold">{progress}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                ref={barRef}
                className="h-full bg-[#c5ff3d] rounded-full relative"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ 
                  duration: 0.1, 
                  ease: 'linear' 
                }}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 blur-sm bg-[#c5ff3d]"
                  style={{ 
                    boxShadow: '0 0 10px rgba(197,255,61,0.8), 0 0 20px rgba(197,255,61,0.4)' 
                  }}
                />
              </motion.div>
            </div>

            {/* Protocol text */}
            <div className="font-mono text-white/40 text-xs md:text-sm tracking-wider">
              Encrypted Protocol • zg32-96414692
            </div>
          </div>

          {/* Scanline effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

