import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Server, Palette, Award, Users, Coffee, Heart, Briefcase, BookOpen, Code } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-blue-400 to-cyan-400',
      description: 'Creating stunning user interfaces with modern frameworks'
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'GraphQL', 'REST APIs'],
      color: 'from-green-400 to-emerald-400',
      description: 'Building robust and scalable server-side applications'
    },
    {
      category: 'AI & Automation',
      icon: Smartphone,
      technologies: ['OpenAI API', 'Gemini', 'HuggingFace', 'Chatbots', 'Claude', 'FastAPI', 'Prompt Engineering'],
      color: 'from-purple-400 to-pink-400',
      description: 'Developing AI-powered applications and automations'
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['MySQL', 'MongoDB', 'Supabase', 'Firebase'],
      color: 'from-orange-400 to-red-400',
      description: 'Designing efficient data storage solutions'
    },
    {
      category: 'DevOps',
      icon: Code2,
      technologies: ['Git', 'GitHub', 'Netlify', 'AWS', 'Firebase Hosting', 'Cloudflare'],
      color: 'from-indigo-400 to-blue-400',
      description: 'Streamlining deployment and infrastructure'
    },
    {
      category: ' Tools & Productivity',
      icon: Palette,
      technologies: ['VS Code', 'Postman', 'Figma', 'Notion', 'GitHub Copilot', 'ChatGPT', 'Cursor', 'Bolt', 'Replit'],
      color: 'from-pink-400 to-rose-400',
      description: 'Boosting development efficiency with the right tools'
    }
  ];

  const achievements = [
    { icon: Globe, title: 'GDG Jaipur', description: 'Active member of Google Developers Group' },
    { icon: BookOpen, title: 'Lifelong Learner', description: 'Regularly exploring AI, DevOps, and Cloud technologies' },
    { icon: Briefcase, title: 'IAENG Member', description: 'Member of the International Association of Engineers' },
    { icon: Code, title: 'Open Source Contributor', description: 'Contributed to GitHub projects and community tools' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden bg-black">
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
            About Me
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
            Welcome to my digital space! I'm Vansh Khandelwal, a passionate full-stack developer and tech enthusiast. This portfolio showcases my projects, skills, and journey in web development, from frontend designs to backend integrations.
          </p>
        </motion.div>

        {/* Enhanced Personal Story Section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 h-full flex flex-col"
          >
            <div className="bg-black bg-opacity-80 rounded-3xl p-10 border border-white/30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <h2 className="text-3xl font-bold text-silver-200 mb-6 flex items-center">
                <div className="w-12 h-12 bg-black bg-opacity-80 rounded-full flex items-center justify-center mr-4">
                  <Code2 size={24} className="text-white" />
                </div>
                My Journey
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-silver-300">
                <p>
                  <span className="font-semibold text-white text-2xl">Hey there! 👋</span>
                  <br />
                  I'm <span className="text-gold-400 font-bold">Vansh Khandelwal</span>, a passionate developer and tech enthusiast, currently pursuing my <span className="text-blue-400 font-semibold">B.Tech in Computer Science Engineering</span> at <span className="text-pink-400 font-semibold">Poornima University</span>.
                </p>
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-5 border border-white/10 shadow-inner flex items-center space-x-3">
                  <span className="text-green-400 text-2xl">❝</span>
                  <span className="italic text-silver-200">
                    My journey began with a simple <span className="text-green-400 font-mono">"Hello World"</span> — and it sparked a lifelong fascination with technology.
                  </span>
                </div>
                <p>
                  Since then, I've immersed myself in building everything from <span className="text-blue-300 font-semibold">intuitive user interfaces</span> to <span className="text-purple-300 font-semibold">scalable backend systems</span>.
                  <br />
                  I love turning ideas into reality through <span className="text-pink-300 font-semibold">clean code</span> and <span className="text-yellow-300 font-semibold">creative solutions</span>.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 h-full flex flex-col"
          >
            <div className="bg-black bg-opacity-80 rounded-3xl p-10 border border-white/30 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <h2 className="text-3xl font-bold text-silver-200 mb-6 flex items-center">
                <div className="w-12 h-12 bg-black bg-opacity-80 rounded-full flex items-center justify-center mr-4">
                  <Heart size={24} className="text-white" />
                </div>
                Philosophy
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-silver-300">
                <p>
                  <span className="font-semibold text-white text-xl">I believe technology is not just about writing code</span>
                  <span className="text-yellow-300 font-bold"> — it's about solving real problems and creating meaningful experiences.</span>
                </p>
                <div className="bg-gradient-to-r from-purple-800 to-indigo-900 rounded-xl p-5 border border-white/10 shadow-inner flex items-start space-x-3">
                  <span className="text-pink-400 text-2xl">★</span>
                  <span className="italic text-silver-200">
                    My development philosophy centers around three core principles:
                  </span>
                </div>
                <ul className="list-disc pl-8 space-y-2 text-silver-200">
                  <li>
                    <span className="text-blue-300 font-semibold">Simplicity</span>
                    <span className="text-silver-400"> — the best solutions are often the most elegant.</span>
                  </li>
                  <li>
                    <span className="text-green-300 font-semibold">Clarity</span>
                    <span className="text-silver-400"> — clean, readable code leads to better collaboration and long-term success.</span>
                  </li>
                  <li>
                    <span className="text-yellow-300 font-semibold">Empathy</span>
                    <span className="text-silver-400"> — understanding users and teammates is key to building great products.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-black bg-opacity-80 rounded-2xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-silver-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-silver-200 mb-3">{achievement.title}</h3>
                <p className="text-silver-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-black bg-opacity-80 rounded-3xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} bg-opacity-20 mr-4`}>
                  <skill.icon size={32} className="text-silver-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-silver-200">{skill.category}</h3>
                  <p className="text-silver-400 text-sm mt-1">{skill.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-black bg-opacity-80 text-gold-300 rounded-full text-sm border border-white/30 hover:bg-black hover:border-gold-400/40 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;