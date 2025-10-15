import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import ExperienceBackground from './backgrounds/ExperienceBackground';

const Experience = () => {
  const experiences = [
    {
      period: "Feb 2025 - Present",
      role: "Full Stack Developer Intern",
      company: "StudyConnect Inc.",
      description: "Working as a full stack developer intern, contributing to the development of educational technology solutions and learning modern development practices.",
      skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "Next.js", "TailwindCSS"],
      achievements: [
        "Developing and maintaining web applications",
        "Collaborating with senior developers",
        "Learning industry best practices"
      ],
      color: "#3B82F6",
      image: "https://media.licdn.com/dms/image/v2/D5610AQHnp8HNvxsn8w/image-shrink_800/B56ZkJxPOfG0Ac-/0/1756805526983?e=2147483647&v=beta&t=K9jigvMhXeoEvX0YFjKuifC-OA0eDKSZ69VLt_Lo-8w"
    },
    {
      period: "Aug 2024 - Oct 2024",
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      description: "Contributed to different open-source projects and learned from industry experts, gaining valuable experience in collaborative development.",
      skills: ["Git", "GitHub", "Open Source", "Collaboration"],
      achievements: [
        "Contributed to multiple open-source projects",
        "Learned from industry experts",
        "Gained experience in collaborative development"
      ],
      color: "#8B5CF6",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/2048px-GSoC-icon.svg.png"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black py-20 px-4 md:px-8">
      {/* Dynamic Background */}
      <ExperienceBackground />
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Experience</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey and key achievements in the tech industry
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="max-w-6xl mx-auto">
        {experiences.map((exp, index) => {
          const [ref, inView] = useInView({
            threshold: 0.2,
            triggerOnce: true
          });

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-20 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div 
                  className="absolute left-[50%] top-[100px] w-1 h-[calc(100%+80px)] bg-gradient-to-b from-white/20 to-transparent"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}

              {/* Experience Card */}
              <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div 
                  className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-white"
                  style={{ transform: 'translate(-50%, 50%)' }}
                />

                {/* Period */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`flex items-center gap-3 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                >
                  <FiCalendar className="text-[#3B82F6]" size={20} />
                  <span className="text-xl text-gray-300">{exp.period}</span>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 ${
                    index % 2 === 0 ? 'md:order-first' : ''
                  }`}
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 p-2">
                      <Image
                        src={exp.image}
                        alt={exp.company}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <FiAward className="text-[#3B82F6]" size={20} />
                      <h4 className="text-lg font-semibold">Key Achievements</h4>
                    </div>
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                        <p className="text-gray-300">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;