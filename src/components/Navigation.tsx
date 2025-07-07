import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-white cursor-pointer font-mono tracking-tight"
              onClick={() => scrollToSection('home')}
            >
              {'<Vansh />'}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-6 py-3 transition-all duration-300 relative overflow-hidden group ${
                      activeSection === item.id
                        ? 'text-black bg-white'
                        : 'text-white hover:text-black hover:bg-white'
                    }`}
                  >
                    <item.icon size={18} className="relative z-10" />
                    <span className="relative z-10 font-medium">{item.label}</span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <a href="https://github.com/vansh2772" target="_blank" rel="noopener noreferrer" className="text-white hover:text-silver-400 transition-colors duration-200">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/vansh-khandelwal-122205324/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={22} />
              </a>
              <a href="mailto:vansh6dec@gmail.com" className="text-white hover:text-red-400 transition-colors duration-200">
                <Mail size={22} />
              </a>
              <a href="https://www.instagram.com/vansh_2772?igsh=MXh2d3FxZXp3bWxp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors duration-200">
                <Instagram size={22} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white border border-white/20 hover:border-white/40 transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 z-30 md:hidden bg-black/95 backdrop-blur-xl border border-white/20 p-6"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-4 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-black bg-white'
                        : 'text-white hover:text-black hover:bg-white'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="text-lg font-medium">{item.label}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;