
import { ArrowDown, Mail, MapPin, Phone, ChevronRight, GitHub, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-3xl opacity-40"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/5 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-20 dark:opacity-30"
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
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full blur-xl opacity-20 dark:opacity-30"
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
              className="mb-6 inline-block p-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 backdrop-blur-sm rounded-xl w-fit"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg p-2 text-white shadow-lg shadow-indigo-500/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white"
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
                className="hero-gradient text-4xl sm:text-5xl block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                AI Engineer & LLM Specialist
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mb-10"
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
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/30"
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
                  className="border-2 border-purple-500/50 px-8 py-6 text-lg text-white hover:bg-purple-500/10 shadow-lg shadow-purple-500/20"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a 
                href="mailto:rakshitha.m.07@gmail.com" 
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 2, color: "#22d3ee" }}
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>rakshitha.m.07@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:8660797761" 
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                whileHover={{ x: 2, color: "#22d3ee" }}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>8660797761</span>
              </motion.a>
              <motion.div 
                className="flex items-center text-gray-300"
                whileHover={{ x: 2, color: "#22d3ee" }}
              >
                <MapPin className="h-5 w-5 mr-2" />
                <span>Bengaluru, India</span>
              </motion.div>
            </motion.div>
            
            {/* Social Media Icons */}
            <motion.div 
              className="mt-6 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <motion.a 
                href="#" 
                className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHub className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Creative Profile/Avatar Area */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          >
            <div className="relative">
              {/* Creative hexagon avatar frame with gradient animations */}
              <div className="relative">
                <svg width="400" height="400" viewBox="0 0 400 400" className="absolute top-0 left-0">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9">
                        <animate attributeName="stop-color" values="#0ea5e9; #8b5cf6; #ec4899; #0ea5e9" dur="8s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#8b5cf6">
                        <animate attributeName="stop-color" values="#8b5cf6; #ec4899; #0ea5e9; #8b5cf6" dur="8s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9">
                        <animate attributeName="stop-color" values="#0ea5e9; #8b5cf6; #ec4899; #0ea5e9" dur="10s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#8b5cf6">
                        <animate attributeName="stop-color" values="#8b5cf6; #ec4899; #0ea5e9; #8b5cf6" dur="10s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <motion.polygon 
                    points="200,50 350,150 350,250 200,350 50,250 50,150" 
                    fill="none" 
                    stroke="url(#gradient1)" 
                    strokeWidth="2"
                    filter="url(#glow)"
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: 360, 
                    }}
                    transition={{ 
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.polygon 
                    points="200,70 330,150 330,250 200,330 70,250 70,150" 
                    fill="none" 
                    stroke="url(#gradient2)" 
                    strokeWidth="2"
                    filter="url(#glow)"
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: -360, 
                    }}
                    transition={{ 
                      duration: 50,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </svg>
                
                {/* Placeholder for avatar */}
                <div className="w-72 h-72 md:w-80 md:h-80 relative z-10 backdrop-blur-sm bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-3xl border border-white/10 flex items-center justify-center p-3 shadow-xl">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
                    <svg className="absolute inset-0 w-full h-full text-gray-100/5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14.0002C15.3137 14.0002 18 11.3139 18 8.00024C18 4.68654 15.3137 2.00024 12 2.00024C8.68629 2.00024 6 4.68654 6 8.00024C6 11.3139 8.68629 14.0002 12 14.0002Z" />
                      <path d="M12 14.0002C7.58172 14.0002 4 17.5819 4 22.0002H20C20 17.5819 16.4183 14.0002 12 14.0002Z" />
                    </svg>
                  </div>
                  
                  {/* Digital circuit lines decoration */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M10,30 L30,30 L30,10 M70,10 L70,30 L90,30 M90,70 L70,70 L70,90 M30,90 L30,70 L10,70" 
                      fill="none" 
                      stroke="url(#gradient1)" 
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                    />
                    <motion.path 
                      d="M40,10 L40,40 L10,40 M90,40 L60,40 L60,10 M60,90 L60,60 L90,60 M10,60 L40,60 L40,90" 
                      fill="none" 
                      stroke="url(#gradient2)" 
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "loop", repeatDelay: 1, delay: 1 }}
                    />
                  </svg>
                </div>
              </div>
              
              {/* Floating skill bubbles */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 shadow-lg shadow-cyan-500/30 flex items-center justify-center glass-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                <span className="text-white font-bold text-sm">CrewAI</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -left-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-3 shadow-lg shadow-violet-500/30 flex items-center justify-center glass-card"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              >
                <span className="text-white font-bold text-sm">LangChain</span>
              </motion.div>
              
              <motion.div 
                className="absolute top-10 -right-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3 shadow-lg shadow-emerald-500/30 flex items-center justify-center glass-card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              >
                <span className="text-white font-bold text-sm">LLMs</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 -right-4 bg-gradient-to-r from-rose-500 to-red-500 rounded-full p-3 shadow-lg shadow-rose-500/30 flex items-center justify-center glass-card"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", delay: 0.8 }}
              >
                <span className="text-white font-bold text-sm">PyTorch</span>
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
          className="text-gray-400 flex flex-col items-center hover:text-cyan-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
