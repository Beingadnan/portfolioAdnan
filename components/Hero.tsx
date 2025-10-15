import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const titles = [
    { top: "WEB", bottom: "DEVELOPER" },
    { top: "FULL STACK", bottom: "ENGINEER" },
    { top: "UI/UX", bottom: "DESIGNER" },
    { top: "PROBLEM", bottom: "SOLVER" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Generate random positions for background shapes
  const shapes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2
  }));

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#0f0f0f]">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #5E17EB 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #5E17EB 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, #5E17EB 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, #5E17EB 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Floating Shapes */}
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute rounded-full bg-gradient-to-br from-[#5E17EB] to-[#8C52FF] opacity-[0.03]"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "linear"
            }}
          />
        ))}

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-50" 
          style={{ 
            backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAD8/vz08vT09PT8/Pz///+Vc3z4AAAABnRSTlMAIBAwYIBgGDvUOHcAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAwSURBVDjLY2AYBaNg8AJGJQEmQQEjQwEmAyEmBSYBASYGBgYkAJIHyWEDo2AUDEcAAHqFDzo6Df5wAAAAAElFTkSuQmCC)',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      {/* Logo */}
      <motion.div 
        className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl font-bold">Adnan's Portfolio</h3>
      </motion.div>

      {/* Contact Button */}
      <motion.div 
        className="absolute top-4 sm:top-8 right-4 sm:right-8 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        
      </motion.div>

      {/* Main Content */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Text and Image Container */}
        <div className="relative w-full max-w-[1200px] h-[600px] flex items-center justify-center px-4 sm:px-8">
          {/* Large Text */}
          <motion.div 
            className="absolute z-20 text-center w-full"
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
            className="absolute w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
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
      </div>
    </section>
  );
};

export default Hero;