'use client'
import { motion } from 'framer-motion'

export default function SpaceNebula() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Purple Nebula */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blue Nebula */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          top: '40%',
          right: '15%',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.25, 0.2],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Pink Nebula */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[110px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
          bottom: '10%',
          left: '30%',
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Cyan Nebula */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[90px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
          top: '60%',
          left: '5%',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

