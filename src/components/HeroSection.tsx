import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative py-24 overflow-hidden">
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-purple-100/30 to-blue-100/40 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10 animate-gradient-xy"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center md:text-left space-y-6"
          >
            <motion.h1 
              className="font-manrope text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                AI Engineer & 
              </span>
              <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-900 to-violet-950 dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400">
                Automation Expert
              </span>
            </motion.h1>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 text-lg md:text-xl font-plus-jakarta leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Crafting intelligent solutions to automate and optimize your business processes.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: Enhanced Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 via-indigo-500/20 to-purple-500/20 mix-blend-overlay"></div>
              <img
                src="/images/ai-hero.png"
                alt="AI Hero Image"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent">
                <span className="text-white font-plus-jakarta font-medium">Automation Specialist</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a href="https://github.com/rakshitham07" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-indigo-600 dark:text-blue-400 dark:hover:text-indigo-400 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:rakshitham07@gmail.com" className="text-blue-600 hover:text-indigo-600 dark:text-blue-400 dark:hover:text-indigo-400 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/rakshith-am-759b49229/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-indigo-600 dark:text-blue-400 dark:hover:text-indigo-400 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
