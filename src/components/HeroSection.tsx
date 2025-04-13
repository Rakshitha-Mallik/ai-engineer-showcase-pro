
import { ArrowDown, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-16">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/5 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-10 dark:opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-xl opacity-10 dark:opacity-20"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex flex-col text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="mb-6 inline-block p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full w-fit"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-full p-2 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span 
                className="block mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Rakshitha M
              </motion.span>
              <motion.span 
                className="hero-gradient block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                AI Engineer & LLM Specialist
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Passionate AI Engineer with expertise in Large Language Models (LLMs), deep learning, and AI-driven automation. 
              Building intelligent, scalable AI solutions to solve complex challenges.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-6 text-lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center">
                    View Projects
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-2 px-8 py-6 text-lg dark:text-white dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a 
                href="mailto:rakshitha.m.07@gmail.com" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ x: 2 }}
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>rakshitha.m.07@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:8660797761" 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ x: 2 }}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>8660797761</span>
              </motion.a>
              <motion.div 
                className="flex items-center text-gray-600 dark:text-gray-300"
                whileHover={{ x: 2 }}
              >
                <MapPin className="h-5 w-5 mr-2" />
                <span>Bengaluru, India</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Profile Image or 3D Element */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main avatar circle */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-3">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden relative flex items-center justify-center">
                    <svg className="absolute w-full h-full text-gray-400 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14.0002C15.3137 14.0002 18 11.3139 18 8.00024C18 4.68654 15.3137 2.00024 12 2.00024C8.68629 2.00024 6 4.68654 6 8.00024C6 11.3139 8.68629 14.0002 12 14.0002Z" />
                      <path d="M12 14.0002C7.58172 14.0002 4 17.5819 4 22.0002H20C20 17.5819 16.4183 14.0002 12 14.0002Z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating skill bubbles */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-blue-100 dark:bg-blue-900/50 rounded-full p-3 shadow-lg flex items-center justify-center glass-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                <span className="text-blue-600 dark:text-blue-300 font-bold text-sm">CrewAI</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-8 bg-purple-100 dark:bg-purple-900/50 rounded-full p-3 shadow-lg flex items-center justify-center glass-card"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              >
                <span className="text-purple-600 dark:text-purple-300 font-bold text-sm">LangChain</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-10 -right-6 bg-green-100 dark:bg-green-900/50 rounded-full p-3 shadow-lg flex items-center justify-center glass-card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              >
                <span className="text-green-600 dark:text-green-300 font-bold text-sm">LLMs</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 -right-4 bg-red-100 dark:bg-red-900/50 rounded-full p-3 shadow-lg flex items-center justify-center glass-card"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
              >
                <span className="text-red-600 dark:text-red-300 font-bold text-sm">PyTorch</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a 
          href="#about" 
          className="text-gray-400 dark:text-gray-500 flex flex-col items-center hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
