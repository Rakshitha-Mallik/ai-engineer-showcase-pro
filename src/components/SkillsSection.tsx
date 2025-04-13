
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Brain, Code, Cloud, ChevronRight, Database, Server } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('AI & Machine Learning');

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: "from-purple-500 to-violet-600",
      skills: [
        { name: 'LangChain', level: 'Expert', description: 'Building LLM applications and agent workflows' },
        { name: 'CrewAI', level: 'Expert', description: 'Creating AI agent-based workflow automation' },
        { name: 'OpenAI', level: 'Expert', description: 'Prompt engineering and API integration' },
        { name: 'TensorFlow/Keras', level: 'Advanced', description: 'Neural networks, model training & deployment' },
        { name: 'PyTorch', level: 'Advanced', description: 'Deep learning research, custom networks' },
        { name: 'Gemini LLM', level: 'Advanced', description: 'Multi-modal AI applications and integrations' },
        { name: 'Computer Vision', level: 'Advanced', description: 'Image processing and classification' },
      ]
    },
    {
      title: 'Programming & Tools',
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-600",
      skills: [
        { name: 'Python', level: 'Expert', description: 'Pandas, NumPy, Matplotlib for data processing' },
        { name: 'C++', level: 'Advanced', description: 'System programming and optimization' },
        { name: 'JavaScript', level: 'Intermediate', description: 'Web development and front-end' },
        { name: 'ReactJS', level: 'Intermediate', description: 'Building interactive web applications' },
        { name: 'NodeJS', level: 'Intermediate', description: 'Backend development and APIs' },
        { name: 'Docker', level: 'Advanced', description: 'Containerization for deployment' },
        { name: 'Twilio', level: 'Advanced', description: 'Voice and messaging integration' },
      ]
    },
    {
      title: 'Databases & Storage',
      icon: <Database className="w-5 h-5" />,
      color: "from-emerald-500 to-green-600",
      skills: [
        { name: 'SQL', level: 'Advanced', description: 'Database design and queries' },
        { name: 'MongoDB', level: 'Intermediate', description: 'NoSQL database for flexible schemas' },
        { name: 'Pinecone', level: 'Advanced', description: 'Vector database for AI applications' },
        { name: 'Data Processing', level: 'Expert', description: 'ETL pipelines and data management' },
        { name: 'OCR', level: 'Advanced', description: 'Optical Character Recognition for document processing' },
        { name: 'Data Extraction', level: 'Expert', description: 'Automated information extraction from documents' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <Cloud className="w-5 h-5" />,
      color: "from-rose-500 to-pink-600",
      skills: [
        { name: 'GCP', level: 'Advanced', description: 'Cloud deployment and services' },
        { name: 'AWS', level: 'Advanced', description: 'Scalable cloud infrastructure' },
        { name: 'Azure', level: 'Intermediate', description: 'Microsoft cloud platform' },
        { name: 'RESTful APIs', level: 'Expert', description: 'API design and implementation' },
        { name: 'Microservices', level: 'Advanced', description: 'Scalable application architecture' },
        { name: 'CI/CD', level: 'Intermediate', description: 'Continuous integration and deployment' },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  const getSkillLevelColor = (level: string) => {
    switch(level) {
      case 'Expert': return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20';
      case 'Advanced': return 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20';
      case 'Intermediate': return 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-md shadow-cyan-500/20';
      default: return 'bg-gradient-to-r from-slate-500 to-slate-600 text-white';
    }
  };

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Technical Expertise
          </span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Navigation */}
          <div className="lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-4 border-0 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-white/5 shadow-xl">
                <h3 className="text-lg font-bold mb-4 pb-2 border-b border-white/10 text-white">Skill Areas</h3>
                <div className="space-y-2">
                  {skillCategories.map((category) => (
                    <motion.button
                      key={category.title}
                      className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-colors ${
                        activeCategory === category.title 
                          ? `bg-gradient-to-r ${category.color} text-white font-medium shadow-lg` 
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                      }`}
                      onClick={() => setActiveCategory(category.title)}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <span className={`mr-3 inline-flex items-center justify-center rounded-full ${
                          activeCategory === category.title 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-700 text-gray-300'
                        } p-2`}>
                          {category.icon}
                        </span>
                        <span>{category.title}</span>
                      </div>
                      {activeCategory === category.title && <ChevronRight className="w-4 h-4" />}
                    </motion.button>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
          
          {/* Skills Display */}
          <div className="lg:w-3/4">
            {skillCategories
              .filter((category) => category.title === activeCategory)
              .map((category) => (
                <motion.div 
                  key={category.title}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Card className="p-6 border-0 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-white/5 shadow-xl">
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b border-white/10 flex items-center text-white">
                      <span className={`mr-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r ${category.color} p-2`}>
                        {category.icon}
                      </span>
                      {category.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          className="card-hover border border-white/5 rounded-xl p-5 backdrop-blur-sm bg-white/5 shadow-lg"
                          whileHover={{ 
                            scale: 1.03,
                            boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.3)",
                            y: -5
                          }}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-lg text-white">{skill.name}</h4>
                            <Badge className={`${getSkillLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </div>
                          <p className="text-gray-300 text-sm">{skill.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
