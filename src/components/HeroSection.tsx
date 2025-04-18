import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, MapPin } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative py-24 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient-xy"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hero-gradient">
              AI Engineer & Automation Expert
            </h1>
            <p className="text-gray-300 mb-6 text-lg">
              Crafting intelligent solutions to automate and optimize your business processes.
            </p>
            <div className="space-x-4">
              <motion.a
                href="#projects"
                className="inline-block bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
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
            <motion.img
              src="/images/ai-hero.png"
              alt="AI Hero Image"
              className="rounded-full shadow-2xl w-80 h-80 object-cover object-center hover-3d"
              whileHover={{ y: -10 }}
            />
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a href="https://github.com/rakshitham07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:rakshitham07@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/rakshith-am-759b49229/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
