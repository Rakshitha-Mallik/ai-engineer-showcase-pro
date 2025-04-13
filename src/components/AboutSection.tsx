
import { Brain, Network, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const specializations = [
    {
      icon: <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: 'Large Language Models',
      description: 'Experience with OpenAI, CrewAI, LangChain, and Gemini LLMs for building intelligent applications and automation.'
    },
    {
      icon: <Network className="w-10 h-10 text-violet-600 dark:text-violet-400" />,
      title: 'Deep Learning',
      description: 'Expertise in PyTorch, Keras, TensorFlow, and neural network architectures for complex AI solutions.'
    },
    {
      icon: <Code className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
      title: 'AI-Driven Automation',
      description: 'Building AI systems that automate business processes, enhance productivity, and deliver meaningful insights.'
    },
    {
      icon: <Rocket className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
      title: 'Cloud & Deployment',
      description: 'Deploying scalable AI solutions on GCP, AWS, and Azure with Docker for production environments.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900 dark:text-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-50">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(75, 85, 99, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <motion.h2 
        className="section-title dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Decorative element */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-lg z-[-1] opacity-70"></div>
          
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 relative z-10">
            I'm a passionate AI Engineer with expertise in Large Language Models (LLMs), deep learning, and AI-driven automation. 
            My journey in artificial intelligence began during my studies at Ramaiah Institute of Technology and has evolved into a 
            career focused on building intelligent systems that solve real-world challenges.
          </p>
          
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Working at the intersection of cutting-edge AI technologies, I specialize in developing solutions using Python, 
            TensorFlow, Keras, PyTorch, LangChain, CrewAI, and various cloud platforms like GCP and AWS. I'm particularly 
            interested in optimizing model performance and deploying practical AI applications.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not building AI systems, I'm continuously learning about advancements in AI, exploring new technologies, 
            and finding innovative ways to leverage AI to solve complex challenges in industries like healthcare, sales automation, 
            and document processing.
          </p>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-lg z-[-1] opacity-70"></div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl gradient-border glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Specializations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card className="card-hover border-0 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white hover-3d">
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-4"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.1 }}
                    >
                      {spec.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold mb-2 dark:text-white">{spec.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{spec.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
