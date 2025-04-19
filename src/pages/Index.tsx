import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectSlideshow from '@/components/ProjectSlideshow';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Sun, Moon } from 'lucide-react';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isDarkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle bg-blue-500/10"
              animate={{
                x: [Math.random() * 100, Math.random() * window.innerWidth],
                y: [Math.random() * 100, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{
                width: 2 + Math.random() * 6,
                height: 2 + Math.random() * 6,
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                opacity: 0.2 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>
      )}

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 z-50"
        style={{ scaleX: scrollProgress / 100, transformOrigin: "left" }}
      />

      <motion.button
        className="fixed bottom-6 right-6 p-3 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-lg z-50 text-gray-800 dark:text-white"
        onClick={() => setIsDarkMode(!isDarkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      <Navbar />
      
      <div className="relative scroll-smooth">
        <HeroSection />
        <ProjectSlideshow />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Index;
