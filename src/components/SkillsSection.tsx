
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Brain, Code, Cloud, ChevronRight } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Languages & Frameworks');

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'Python', level: 'Expert', description: 'Data processing, API development, automation' },
        { name: 'TensorFlow/Keras', level: 'Expert', description: 'Neural networks, model training & deployment' },
        { name: 'PyTorch', level: 'Advanced', description: 'Deep learning research, custom networks' },
        { name: 'Scikit-Learn', level: 'Expert', description: 'Classical ML algorithms, pipeline development' },
        { name: 'SQL', level: 'Advanced', description: 'Database design, complex queries, optimization' },
        { name: 'JavaScript/TypeScript', level: 'Intermediate', description: 'Frontend development, visualization' },
      ]
    },
    {
      title: 'AI/ML Tools',
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: 'Computer Vision', level: 'Advanced', description: 'OpenCV, CNNs, object detection, image segmentation' },
        { name: 'NLP', level: 'Advanced', description: 'BERT, GPT, transformers, text classification' },
        { name: 'Reinforcement Learning', level: 'Intermediate', description: 'Policy gradients, Q-learning, environments' },
        { name: 'MLOps', level: 'Advanced', description: 'MLflow, Kubeflow, model monitoring, CI/CD' },
        { name: 'Explainable AI', level: 'Intermediate', description: 'SHAP, LIME, feature importance, interpretability' },
        { name: 'Time Series Forecasting', level: 'Advanced', description: 'ARIMA, Prophet, RNNs, anomaly detection' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: 'AWS SageMaker', level: 'Advanced', description: 'Model training, deployment, optimization' },
        { name: 'Google Cloud AI', level: 'Advanced', description: 'Vertex AI, AutoML, scalable inference' },
        { name: 'Docker & Kubernetes', level: 'Intermediate', description: 'Containerization, orchestration, scaling' },
        { name: 'CI/CD Pipelines', level: 'Intermediate', description: 'Automated testing, deployment, integration' },
        { name: 'MongoDB/DynamoDB', level: 'Intermediate', description: 'NoSQL database design and optimization' },
        { name: 'Airflow', level: 'Intermediate', description: 'Workflow automation, ETL pipelines, scheduling' },
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
            <Card className="p-4 border-0 shadow-md sticky top-24">
              <h3 className="text-lg font-bold mb-4 pb-2 border-b">Skill Areas</h3>
              <div className="space-y-2">
                {skillCategories.map((category) => (
                  <button
                    key={category.title}
                    className={`w-full text-left p-3 rounded-md flex items-center justify-between transition-colors ${
                      activeCategory === category.title 
                        ? 'bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700 font-medium' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category.title)}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 inline-flex items-center justify-center rounded-full bg-blue-100 p-2">
                        {category.icon}
                      </span>
                      <span>{category.title}</span>
                    </div>
                    {activeCategory === category.title && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </Card>
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
