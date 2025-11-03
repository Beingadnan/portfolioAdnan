import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const projects: Array<{
    title: string;
    description: string;
    image?: string;
    tech: string[];
    github: string;
    live: string;
  }> = [
    {
      title: "GreenRide Express",
      description: "A comprehensive bus ticket booking platform that enables users to search routes, book seats, and manage their travel seamlessly. Features real-time seat availability, secure payment processing, and digital ticket generation for hassle-free bus travel.",
      // image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2070",
      tech: ["React", "Node.js", "Express", "MongoDB", "Payment Gateway", "TailwindCSS"],
      github: "https://github.com/Beingadnan/green-ride",
      live: "green-ride-lemon.vercel.app",
    },
    {
      title: "Blog Platform",
      description: "A modern blogging platform where users can write, publish, and share their stories. Features include rich text editor, markdown support, user authentication, commenting system, and social sharing capabilities for an engaging content creation experience.",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "TailwindCSS"],
      github: "https://github.com/Beingadnan/blog-platform",
      live: "blog-platform-rho-seven.vercel.app",
    },
    {
      title: "OpenBox - AI Email Manager",
      description: "An innovative email management system that uses AI to categorize emails, create smart labels, and suggest contextual replies. Built with Gmail API integration and advanced machine learning for intelligent email processing.",
      // image: "https://cyberpanel.net/wp-content/uploads/2024/09/AI-Email-Assistant-2.png",
      tech: ["Next.js", "Node.js", "OpenAI", "Gmail API", "MongoDB", "TailwindCSS"],
      github: "https://github.com/Beingadnan/openbox",
      live: "https://openbox.demo",
    },
    {
      title: "Chess Game Multiplayer",
      description: "A real-time multiplayer chess game with spectator mode, built using Node.js and Socket.IO. Features include live game state synchronization, valid move enforcement, and dynamic role assignment.",
      // image: "https://ima₹ges.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png",
      tech: ["Node.js", "Socket.IO", "Express", "Chess.js", "EJS"],
      github: "https://github.com/Beingadnan/chess-Game",
      live: "https://chess-game.demo",
    },
    {
      title: "FoodXpress",
      description: "A modern food delivery platform with real-time order tracking, restaurant management, and secure payment processing. Features a responsive UI and seamless user experience.",
      // image: "https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg",
      tech: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      github: "https://github.com/Beingadnan/FoodXpress",
      live: "https://food-xpress-five.vercel.app",
    },
    {
      title: "Multi-Page Form Builder",
      description: "A dynamic multi-step form builder with real-time validation, progress tracking, and data persistence. Features a modern UI, conditional form logic, and seamless navigation between steps.",
      // image: "https://www.zohowebstatic.com/sites/zweb/images/forms/multi-page-forms/multi_page_1.png",
      tech: ["React", "Redux", "TailwindCSS", "Form Validation", "LocalStorage"],
      github: "https://github.com/Beingadnan/Multi-Page-Form",
      live: "https://multi-page-form.demo",
    }
  ];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentProject((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Project Navigation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-1/2 right-8 -translate-y-1/2 z-10 space-y-4"
      >
        {projects.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentProject === index 
                ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-150 shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                : 'bg-white/30 hover:bg-cyan-400/50'
            }`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm hover:border-cyan-400 transition-all"
        >
          <FiArrowLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm hover:border-cyan-400 transition-all"
        >
          <FiArrowRight className="w-6 h-6" />
        </motion.button>
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentProject}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="w-full h-screen absolute top-0 left-0"
        >
          {/* Content */}
          <div className="w-full h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl"
              >
                <h3 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {projects[currentProject].title}
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  {projects[currentProject].description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {projects[currentProject].tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full text-sm backdrop-blur-sm border border-cyan-400/30"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.8)', boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm bg-cyan-400/5"
                  >
                    <FiGithub size={24} />
                    <span className="text-lg">View Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-90 transition-all duration-300"
                  >
                    <FiExternalLink size={24} />
                    <span className="text-lg">Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project Counter */}
          <div className="absolute bottom-8 left-8 md:left-16">
            <span className="text-7xl font-bold bg-gradient-to-br from-cyan-400/30 to-purple-400/30 bg-clip-text text-transparent">
              0{currentProject + 1}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;