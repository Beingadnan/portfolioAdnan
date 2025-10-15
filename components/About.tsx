import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, 
         SiExpress, SiMongodb, SiPostgresql, SiGit, SiDocker, 
         SiFigma, SiJavascript } from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  return (
    <section ref={ref} className="min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-white" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
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

          {/* Right Column - Stats & Experience */}
          <div className="space-y-12">
            {/* Stats */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-8"
            >
              {[
                { number: "1+", label: "Year Experience" },
                { number: "10+", label: "Projects Completed" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Current Focus */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-4">Current Focus</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Building modern web applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Learning advanced React patterns</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Exploring full-stack development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Improving UI/UX design skills</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Skills Carousel */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
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
              {/* Double the skills array to create seamless loop */}
              {[...skills, ...skills].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-3 bg-white/5 rounded-xl p-6 backdrop-blur-sm min-w-[120px]"
                >
                  <skill.icon className="w-10 h-10 text-white" />
                  <span className="text-sm text-gray-300 whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;