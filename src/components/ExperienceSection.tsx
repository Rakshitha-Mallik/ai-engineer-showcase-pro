
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Tech Profuse",
      period: "July 2024 - Present",
      description: [
        "Developed a GenAI-powered Sales Automation system using CrewAI, LangChain, and Gemini LLM, automating personalized email outreach and client interactions",
        "Designed an intelligent document processing system using OCR and Gemini LLMs to automate data extraction with 98% accuracy",
        "Led the development of a SaaS-based Voice AI Assistant utilizing Twilio and OpenAI for telephony workflows",
        "Built an AI-powered chatbot using RAG, Pinecone vector database, and OpenAI for enterprise query answering"
      ]
    },
    {
      title: "Deep Learning Intern",
      company: "Biocliq Technologies",
      period: "January 2024 - June 2024",
      description: [
        "Implemented 3D lung segmentation using nnU-Net, achieving 97% accuracy for medical image analysis",
        "Developed a 3D liver delineation system with nnU-Net for NIfTI files with 98% accuracy",
        "Designed and trained a custom CNN for kidney stone classification with 90% accuracy",
        "Integrated feature extraction with decision tree classifiers for improved diagnostic accuracy"
      ]
    },
    {
      title: "Deep Learning Intern",
      company: "Samsung",
      period: "February 2023 - July 2023",
      description: [
        "Engineered and pre-processed a multi-label text classification dataset of 200 texts",
        "Implemented SBERT to generate fixed-length vector encodings for semantic understanding",
        "Deployed SBERT model as a REST API using Flask and Docker for scalable sentence embedding",
        "Utilized U-Net architecture for medical image segmentation, demonstrating expertise in both NLP and medical imaging"
      ]
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-violet-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-md bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center">
                  <Briefcase className="text-white w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 ml-12 md:ml-0 md:px-10 pb-10">
                  <motion.div 
                    className={`bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                    }`}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 12px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-blue-600 font-medium mb-4">{exp.company}</div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm md:text-base">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
