
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Ramaiah Institute of Technology",
      year: "2020 - 2024",
      description: "CGPA: 9.33/10. Relevant Courses: Data Structures and Algorithms, Operating Systems, Object Oriented Programming (C++, Python), Data Mining and Machine Learning, Data Communication and Networking, Database Systems.",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: "Pre-University Education",
      institution: "Base PU College, Mysore",
      year: "2018 - 2020",
      description: "Achieved 95% in Physics, Chemistry, Mathematics, and Computer Science.",
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  const projects = [
    {
      name: "Smart Framework for Video-to-Text Generation",
      description: "Developed a smart framework for video-to-text generation using Multilayer Cross-Attention Networks and Vision Transformer models to document hysterectomy surgeries.",
      technologies: "Python, NumPy, Matplotlib, Keras, TensorFlow",
      period: "January 2024 - May 2024",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      name: "XAI on Lung Cancer Detection",
      description: "Analyzed data from 1,000 lung cancer patients, developed a detection model using U-Net architecture with 80% accuracy, and implemented SHAP for model interpretability.",
      technologies: "Python, Pandas, SHAP, Deep Learning",
      period: "February 2023 - June 2023",
      icon: <BookOpen className="w-6 h-6" />
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
    <section id="education" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education & Academic Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          {education.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="p-6 border-0 shadow-md card-hover">
                <div className="flex items-start">
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{item.degree}</h4>
                    <div className="text-blue-600 font-medium">{item.institution}</div>
                    <div className="text-gray-500 text-sm mb-2">{item.year}</div>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Academic Projects</h3>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <Card className="p-6 border-0 shadow-md card-hover">
                <div className="flex items-start">
                  <div className="p-2 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{project.name}</h4>
                    <div className="text-teal-600 font-medium">{project.technologies}</div>
                    <div className="text-gray-500 text-sm mb-2">{project.period}</div>
                    <p className="text-gray-700 text-sm">{project.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants}>
            <Card className="p-6 border-0 shadow-md card-hover bg-gradient-to-r from-blue-50 to-violet-50">
              <h4 className="text-lg font-bold mb-2">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-blue-700 shadow-sm">Data Structures & Algorithms</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-blue-700 shadow-sm">Operating Systems</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-purple-700 shadow-sm">Machine Learning</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-purple-700 shadow-sm">Data Mining</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-violet-700 shadow-sm">OOP (C++, Python)</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-violet-700 shadow-sm">Database Systems</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-teal-700 shadow-sm">Data Communication</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-teal-700 shadow-sm">Networking</span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
