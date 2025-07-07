import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Instagram, ArrowDown, Code, Terminal, Zap } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Hero: React.FC = () => {
  const roles = [
    'Full Stack Developer',
    'React Specialist', 
    'Node.js Expert',
    'Mern Stack Developer',
    'Problem Solver',
    'Code Architect'
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 border border-white/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 border border-white/5"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Main Content */}
          <div className="space-y-8">
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-light tracking-tight text-white">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  VANSH
                </motion.span>
                <motion.span 
                  className="block font-bold"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  KHANDELWAL
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 font-light h-16 flex items-center justify-center"
              >
                <TypeWriter texts={roles} speed={100} deleteSpeed={50} delay={2000} />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Crafting digital experiences through clean code and innovative design.
              <br />
              Specializing in modern web technologies and user-centered solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 gap-8 max-w-xl mx-auto py-8 bg-black bg-opacity-80 rounded-2xl border border-white/30"
            >
              {[
                { number: '2+', label: 'Years', icon: Code },
                { number: '15+', label: 'Projects', icon: Terminal }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                    <stat.icon size={20} className="text-white/60" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center w-full max-w-xl mx-auto bg-black bg-opacity-80 rounded-2xl border border-white/30 p-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://drive.google.com/file/d/13h4II62d4zcKs8DS6RUWpeSswagtN6Vp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 font-semibold border border-white/30 hover:bg-black hover:text-white transition-all duration-300 w-48 flex items-center justify-center"
              >
                VIEW RESUME
              </a>
            </motion.div>
          </motion.div>
          {/* Social Links Below Resume - separate row */}
          <div className="flex items-center justify-center space-x-6 mt-6">
            <a href="https://github.com/vansh2772" target="_blank" rel="noopener noreferrer" className="text-white hover:text-silver-400 transition-colors duration-200">
              <Github size={26} />
            </a>
            <a href="https://www.linkedin.com/in/vansh-khandelwal-122205324/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={26} />
            </a>
            <a href="mailto:vansh6dec@gmail.com" className="text-white hover:text-red-400 transition-colors duration-200">
              <Mail size={26} />
            </a>
            <a href="https://www.instagram.com/vansh_2772?igsh=MXh2d3FxZXp3bWxp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-200">
              <Instagram size={26} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={32} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;