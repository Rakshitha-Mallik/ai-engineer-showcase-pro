
import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "GenAI-powered Sales Automation",
      description: "Developed a sales automation system using CrewAI, LangChain, and Gemini LLM that automates personalized email outreach, real-time client query resolution, and intelligent meeting scheduling.",
      image: "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      tags: ["CrewAI", "LangChain", "Gemini LLM", "Sales Automation"]
    },
    {
      title: "Intelligent Document Processing",
      description: "Built a document processing system using OCR and Gemini LLMs to automate data extraction from invoices, bills, and industry-specific documents with 98% accuracy.",
      image: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      tags: ["OCR", "Gemini LLM", "Docker", "GCP"]
    },
    {
      title: "SaaS-based Voice AI Assistant",
      description: "Led development of a Voice AI Assistant using Twilio and OpenAI to automate telephony workflows for appointment scheduling, reservations, and customer service.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      tags: ["OpenAI", "Twilio", "Voice AI", "SaaS"]
    },
    {
      title: "RAG-based Enterprise Chatbot",
      description: "Built an AI-powered chatbot leveraging Retrieval-Augmented Generation, Pinecone as a vector database, and OpenAI to dynamically answer enterprise and client-specific queries.",
      image: "https://images.unsplash.com/photo-1673476167933-ca711683cbf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      demoLink: "#",
      tags: ["RAG", "Pinecone", "OpenAI", "Vector Database"]
    },
    {
      title: "3D Lung Segmentation with nnU-Net",
      description: "Implemented a 3D lung segmentation application using nnU-Net to classify lung regions, achieving 97% accuracy for medical image analysis.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      tags: ["nnU-Net", "Medical Imaging", "Python", "Deep Learning"]
    },
    {
      title: "3D Liver Delineation System",
      description: "Developed a 3D liver delineation system using nnU-Net to identify liver segments from NIfTI files with 98% accuracy to support tumor detection.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      tags: ["nnU-Net", "NIfTI", "Medical Imaging", "Deep Learning"]
    },
    {
      title: "Kidney Stone Classification CNN",
      description: "Designed and trained a custom CNN for classifying kidney stones, achieving 90% accuracy, integrated with decision tree classifiers.",
      image: "https://images.unsplash.com/photo-1657299170964-205cde29bc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      tags: ["CNN", "Classification", "Medical", "Python"]
    },
    {
      title: "SBERT Model Implementation",
      description: "Engineered and deployed SBERT model as a REST API using Flask and Docker for scalable sentence embedding delivery, enhancing semantic understanding of diverse NLP tasks.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "#",
      tags: ["SBERT", "NLP", "Flask", "Docker"]
    },
    {
      title: "Video-to-Text for Hysterectomy",
      description: "Developed a smart framework for video-to-text generation using Multilayer Cross-Attention Networks and Vision Transformer models to document hysterectomy surgeries with 84% accuracy.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      tags: ["Video Processing", "GPT", "Medical", "Deep Learning"]
    }
  ];

  const categories = ["All", "LLMs", "Deep Learning", "Medical Imaging", "NLP", "Cloud"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => {
          const lowercaseTag = tag.toLowerCase();
          const lowercaseCategory = activeCategory.toLowerCase();
          
          if (activeCategory === "LLMs") {
            return ["openai", "crewai", "langchain", "llm", "gpt", "gemini"].some(term => 
              lowercaseTag.includes(term)
            );
          } else if (activeCategory === "Deep Learning") {
            return ["cnn", "neural", "deep learning", "u-net", "nnu-net", "transformer"].some(term => 
              lowercaseTag.includes(term)
            );
          } else if (activeCategory === "Medical Imaging") {
            return ["medical", "lung", "liver", "kidney", "segmentation", "nifti"].some(term => 
              lowercaseTag.includes(term)
            );
          } else if (activeCategory === "NLP") {
            return ["nlp", "text", "sbert", "language", "rag", "embeddings"].some(term => 
              lowercaseTag.includes(term)
            );
          } else if (activeCategory === "Cloud") {
            return ["aws", "gcp", "azure", "docker", "cloud", "deployment"].some(term => 
              lowercaseTag.includes(term)
            );
          } else {
            return lowercaseTag.includes(lowercaseCategory);
          }
        })
      );

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

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <motion.div 
        className="flex justify-center mb-10 flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={activeCategory === category ? "default" : "outline"}
            className={`mr-2 mb-2 ${
              activeCategory === category ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredProjects
          .slice(0, visibleProjects)
          .map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </motion.div>
      
      {filteredProjects.length > visibleProjects && (
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            onClick={() => setVisibleProjects(prevState => prevState + 3)}
            variant="outline"
            className="border-2 px-8"
          >
            Load More
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
