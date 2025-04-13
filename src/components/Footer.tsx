
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, link: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, link: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, link: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, link: 'mailto:rakshitha.m.07@gmail.com' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-900 rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-700">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-2xl font-bold flex items-center">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text">AI</span>
              <span className="text-white">Engineer</span>
            </a>
            <p className="mt-4 max-w-xs text-gray-400">
              Solving complex problems through artificial intelligence and machine learning.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.link} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>rakshitha.m.07@gmail.com</li>
                <li>8660797761</li>
                <li>Bengaluru, India</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="text-gray-400 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            © {new Date().getFullYear()} Rakshitha M. All rights reserved.
          </motion.div>
          
          <motion.button 
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-full transition-colors"
            aria-label="Scroll to top"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
