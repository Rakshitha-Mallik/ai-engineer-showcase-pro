
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Sun, Moon } from 'lucide-react';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background color gradients */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-r from-violet-700/10 via-purple-600/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-r from-transparent via-blue-700/10 to-cyan-600/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/2"></div>
        </div>

        {/* Animated particles or floating elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="particle rounded-full"
              animate={{
                x: [Math.random() * 100, Math.random() * window.innerWidth],
                y: [Math.random() * 100, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                width: 2 + Math.random() * 6,
                height: 2 + Math.random() * 6,
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                background: `rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, ${220 + Math.random() * 35}, ${0.4 + Math.random() * 0.6})`,
                boxShadow: `0 0 ${6 + Math.random() * 10}px rgba(${100 + Math.random() * 155}, ${100 + Math.random() * 155}, ${220 + Math.random() * 35}, ${0.4 + Math.random() * 0.6})`,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-600 to-purple-500 z-50"
          style={{ scaleX: scrollProgress / 100, transformOrigin: "left" }}
        />

        {/* Dark mode toggle */}
        <motion.button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 shadow-lg shadow-violet-500/20 z-50 text-white"
          onClick={() => setIsDarkMode(!isDarkMode)}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
          whileTap={{ scale: 0.9 }}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>

        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
