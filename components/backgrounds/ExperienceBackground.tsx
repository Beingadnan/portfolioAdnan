import React from 'react';
import { motion } from 'framer-motion';

const ExperienceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-black to-[#0A0A0A]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff03 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff03 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle glow effects */}
      <motion.div
        className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, #3B82F610 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [-200, 0, -200],
          y: [-200, 0, -200],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle at center, #8B5CF610 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [200, 0, 200],
          y: [200, 0, 200],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
};

export default ExperienceBackground;