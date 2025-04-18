
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, MapPin } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative py-24 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              AI Engineer & Automation Expert
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-medium">
              Crafting intelligent solutions to automate and optimize your business processes.
            </p>
            <div className="space-x-4">
              <motion.a
                href="#projects"
                className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg shadow-gray-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Hero Image or Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl glow-effect"
              whileHover={{ y: -10 }}
            >
              <img
                src="/images/ai-hero.png"
                alt="AI Hero Image"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-70 dark:opacity-50"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
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
