import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vansh6dec@gmail.com',
      href: 'mailto:vansh6dec@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      href: 'https://maps.google.com',
      description: 'Open to remote opportunities'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vansh2772',
      color: 'hover:text-silver-300',
      bgColor: 'hover:bg-silver-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vansh-khandelwal-122205324/',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/20'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/vansh_2772?igsh=MXh2d3FxZXp3bWxp',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-pink-500/20'
    }
  ];

  const quickStats = [
    { icon: MessageSquare, label: 'Response Time', value: '< 24 hours' },
    { icon: Clock, label: 'Availability', value: 'Mon-Fri 9AM-6PM' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-black pt-32">
      {/* Geometric Background Elements (optional, can copy from Home if desired) */}
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 bg-black bg-opacity-80 rounded-2xl p-8 border border-white/30 w-full max-w-3xl mx-auto"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white">
            Let's Work Together
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together and bring your vision to life.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 bg-black bg-opacity-80 rounded-2xl p-8 border border-white/30 max-w-2xl mx-auto"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-black bg-opacity-80 rounded-2xl p-8 border border-white/30 text-center flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-silver-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-silver-200 mb-2">{stat.label}</h3>
              <p className="text-gold-400 font-semibold text-lg">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="bg-black bg-opacity-80 rounded-3xl p-10 border border-white/30 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-silver-200 mb-8">Get in touch</h3>
              <p className="text-silver-300 mb-10 leading-relaxed text-lg">
                I'm always open to discussing new opportunities, creative projects, 
                or potential collaborations. Feel free to reach out through any of 
                the channels below, and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    whileHover={{ x: 8, scale: 1.02 }}
                    href={item.href}
                    target={item.label === 'Location' ? '_blank' : undefined}
                    rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-6 p-6 bg-black bg-opacity-80 rounded-2xl hover:bg-black transition-all duration-300 group border border-white/30"
                  >
                    <div className="p-4 bg-gradient-to-r from-silver-500/20 to-gold-500/20 rounded-xl group-hover:from-gold-500/30 group-hover:to-silver-500/30 transition-all duration-300">
                      <item.icon size={28} className="text-gold-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-silver-400 mb-1">{item.label}</p>
                      <p className="text-silver-200 font-semibold text-lg group-hover:text-gold-400 transition-colors duration-200">
                        {item.value}
                      </p>
                      <p className="text-silver-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-black bg-opacity-80 rounded-3xl p-10 border border-white/30 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-silver-200 mb-8 text-center">Follow me</h3>
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-6 bg-black bg-opacity-80 border border-white/30 rounded-2xl text-silver-400 ${social.color} ${social.bgColor} transition-all duration-300 group`}
                  >
                    <div className="flex items-center space-x-4">
                      <social.icon size={28} />
                      <div>
                        <span className="font-semibold text-lg">{social.label}</span>
                      </div>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-24 pt-12"
        >
          <div className="bg-black bg-opacity-80 rounded-2xl p-8 border border-white/30 w-full max-w-xl mx-auto">
            <p className="text-silver-400 text-lg mb-4">
              © 2025 Vansh Khandelwal. Crafted with ❤️ and lots of ☕
            </p>
            <p className="text-silver-500">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;