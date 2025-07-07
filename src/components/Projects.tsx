import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Star, Users, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI Excel Analyser',
      description: 'A powerful full-stack Excel analytics platform built with React, Node.js, and MongoDB (or PostgreSQL, based on your stack). Features include real-time data analysis, AI-powered insights, interactive charts, and user-friendly interface. Perfect for data-driven decision-making and business intelligence.',
      image: 'https://i.ibb.co/vRy8CX7/Untitled-design.png',
      tags: ['React', 'Node.js', 'Netlify', 'MongoDB', 'OpenAI', 'Chart.js', 'AWS'],
      github: 'https://github.com/vansh2772/Excel.AI',
      live: 'https://excelaivansh.netlify.app/',
      featured: true,
      stats: { year: '2025' }
    },
    {
      title: 'Job Search Portal',
      description: 'Skillective is an AI-powered career platform offering resume checks, interview prep, job search, and more — all in one place. Built with modern web technologies, its designed to help students and job seekers grow faster and smarter.',
      image: 'https://i.ibb.co/S7Z4YDt6/Screenshot-2025-07-06-145326.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API', 'Netlify', 'Git', 'GitHub'],
      github: 'https://github.com/vansh2772/Skillective',
      live: 'https://wonderful-profiterole-8294a7.netlify.app/',
      featured: true,
      stats: { year: '2024' }
    },
    {
      title: 'Bike Service Booking',
      description: 'A bike service booking platform built with HTML, CSS, and JavaScript. Features include bike service booking, bike service history, bike service status, bike service tracking, and bike service management.',
      image: 'https://i.ibb.co/ZR4mbr9f/Screenshot-2025-07-06-144443.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Netlify', 'Git', 'GitHub'],
      github: 'https://github.com/vansh2772/BikeBuddy', 
      live: 'https://vansh2772.github.io/BikeBuddy/',
      featured: false,
      stats: { year: '2024' }
    },
    {
      title: '3D Solar System',
      description: 'A mobile-responsive, interactive 3D simulation of the solar system built with Three.js. Features all 8 planets orbiting the Sun, adjustable orbital speeds, beautiful lighting, background stars, planet info on hover, and relaxing background music. Includes a modern UI, color legend, and full support for desktop and mobile browsers.',
      image: 'https://i.ibb.co/tpyKVXvQ/Screenshot-2025-07-06-150441.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'Netlify', 'Git', 'GitHub'],
      github: 'https://github.com/vansh2772/SolarSystem',
      live: 'https://3dsolarsystemsimulation.netlify.app/',
      featured: false,
      stats: { year: '2025' }
    },
    {
      title: 'Healthcare Support System',
      description: 'A healthcare support system built with React, TypeScript, and Tailwind CSS. Get real-time weather information for any location worldwide.',
      image: 'https://i.ibb.co/MD3F7sS9/Screenshot-2025-07-06-203612.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Hugging Face', 'FastAPI'],
      github: 'https://github.com/vansh2772/HopeBridge',
      live: 'https://vansh2772.github.io/HopeBridge/',
      featured: false,
      stats: { year: '2024' }
    },

  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden bg-black">
      {/* Geometric Background Elements (optional, can copy from Home if desired) */}
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white">
            Featured Projects
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects that demonstrate 
            my skills and passion for creating exceptional digital experiences that solve real-world problems.
          </p>
        </motion.div>

        {/* Enhanced Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-gold-400 font-mono text-lg font-semibold">Featured Project</span>
                    <div className="flex items-center space-x-4 text-silver-400">
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="text-gold-400" />
                        <span className="text-sm">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} className="text-silver-400" />
                        <span className="text-sm">{project.stats.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} className="text-silver-400" />
                        <span className="text-sm">{project.stats.year}</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-silver-200">{project.title}</h2>
                  <p className="text-silver-300 text-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-black bg-opacity-80 text-gold-300 rounded-full text-sm border border-white/30 hover:bg-black hover:border-gold-400/40 transition-all duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-8 py-4 bg-black bg-opacity-80 hover:bg-black rounded-xl transition-all duration-300 text-silver-200 border border-white/30 hover:border-silver-200/50 shadow-lg hover:shadow-xl"
                  >
                    <Github size={24} />
                    <span className="font-semibold">View Code</span>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-8 py-4 bg-black bg-opacity-80 hover:bg-black rounded-xl transition-all duration-300 text-white shadow-lg hover:shadow-xl border border-white/30 relative overflow-hidden group"
                  >
                    <ExternalLink size={24} className="relative z-10" />
                    <span className="font-semibold relative z-10">Live Demo</span>
                  </motion.a>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative group bg-black bg-opacity-80 rounded-3xl border border-white/30 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star size={16} className="text-gold-400" />
                          <span className="text-sm font-semibold">{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={16} />
                          <span className="text-sm">{project.stats.users} users</span>
                        </div>
                      </div>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.stats.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Other Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-black bg-opacity-80 rounded-3xl border border-white/30 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm text-white">
                    {project.stats.year}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-silver-200">{project.title}</h3>
                  <p className="text-silver-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-black bg-opacity-80 text-gold-300 rounded-full text-xs border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 bg-black bg-opacity-80 text-silver-400 rounded-full text-xs border border-white/30">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-4 text-sm text-silver-400">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-gold-400" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{project.stats.users}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black bg-opacity-80 rounded-lg border border-white/30 hover:border-silver-200/50 transition-all duration-300"
                    >
                      <Github size={16} className="text-silver-200" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black bg-opacity-80 rounded-lg border border-white/30 hover:border-silver-200/50 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="text-silver-200" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mt-20"
        >
          <div className="bg-black bg-opacity-80 rounded-3xl p-12 border border-white/30 max-w-4xl mx-auto flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-silver-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. I'm always excited to work on 
              new challenges and create innovative solutions.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/vansh-khandelwal-122205324/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 font-semibold border border-white/30 hover:bg-black hover:text-white transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <span>Let's Work Together</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;