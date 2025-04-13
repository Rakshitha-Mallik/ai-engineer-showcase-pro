
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Brain, Code, Cloud, ChevronRight, Database, Globe, Server } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('AI & Machine Learning');

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
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
      skills: [
        { name: 'GCP', level: 'Advanced', description: 'Cloud deployment and services' },
        { name: 'AWS', level: 'Advanced', description: 'Scalable cloud infrastructure' },
        { name: 'Azure', level: 'Intermediate', description: 'Microsoft cloud platform' },
        { name: 'RESTful APIs', level: 'Expert', description: 'API design and implementation' },
        { name: 'Microservices', level: 'Advanced', description: 'Scalable application architecture' },
        { name: 'CI/CD', level: 'Intermediate', description: 'Continuous integration and deployment' },
      ]
    },
    {
      title: 'Web & Design',
      icon: <Globe className="w-5 h-5" />,
      skills: [
        { name: 'HTML/CSS', level: 'Intermediate', description: 'Web markup and styling' },
        { name: 'Bootstrap', level: 'Intermediate', description: 'Frontend responsive framework' },
        { name: 'Canva', level: 'Advanced', description: 'Design and presentation tools' },
        { name: 'UI/UX Basics', level: 'Intermediate', description: 'User interface and experience design' },
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
      case 'Expert': return 'bg-gradient-to-r from-blue-600 to-violet-600 text-white';
      case 'Advanced': return 'bg-gradient-to-r from-violet-500 to-purple-500 text-white';
      case 'Intermediate': return 'bg-gradient-to-r from-purple-400 to-pink-400 text-white';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
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
              <Card className="p-4 border-0 shadow-md sticky top-24">
                <h3 className="text-lg font-bold mb-4 pb-2 border-b">Skill Areas</h3>
                <div className="space-y-2">
                  {skillCategories.map((category) => (
                    <motion.button
                      key={category.title}
                      className={`w-full text-left p-3 rounded-md flex items-center justify-between transition-colors ${
                        activeCategory === category.title 
                          ? 'bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700 font-medium' 
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveCategory(category.title)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        <span className="mr-3 inline-flex items-center justify-center rounded-full bg-blue-100 p-2">
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
                  <Card className="p-6 border-0 shadow-md">
                    <h3 className="text-xl font-bold mb-6 pb-2 border-b flex items-center">
                      <span className="mr-2 inline-flex items-center justify-center rounded-full bg-blue-100 p-2">
                        {category.icon}
                      </span>
                      {category.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          className="card-hover border border-gray-100 rounded-lg p-4"
                          whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg">{skill.name}</h4>
                            <Badge className={`${getSkillLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm">{skill.description}</p>
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
