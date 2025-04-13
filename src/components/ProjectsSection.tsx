
import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects: ProjectProps[] = [
    {
      title: "Neural Machine Translation System",
      description: "Built an end-to-end neural machine translation system using transformer architecture with attention mechanisms.",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      demoLink: "#",
      tags: ["NLP", "PyTorch", "Transformers", "Attention"]
    },
    {
      title: "Computer Vision for Retail Analytics",
      description: "Developed a retail analytics solution using computer vision to track customer behavior and optimize store layouts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      tags: ["Computer Vision", "OpenCV", "TensorFlow", "Edge Computing"]
    },
    {
      title: "Predictive Maintenance ML Pipeline",
      description: "Created an ML pipeline for predictive maintenance in manufacturing, reducing downtime by 35%.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      tags: ["Time Series", "MLOps", "AWS", "Scikit-Learn"]
    },
    {
      title: "Recommendation Engine for E-commerce",
      description: "Built a hybrid recommendation engine combining collaborative filtering and content-based approaches.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      demoLink: "#",
      tags: ["Recommendation Systems", "PySpark", "Deep Learning"]
    },
    {
      title: "Automated Medical Diagnosis",
      description: "Developed a system for automated diagnosis of medical conditions from X-ray images using CNNs.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubLink: "#",
      tags: ["Healthcare AI", "CNN", "Transfer Learning", "TensorFlow"]
    },
    {
      title: "Real-time Sentiment Analysis API",
      description: "Created an API for real-time sentiment analysis of customer feedback with detailed emotion recognition.",
      image: "https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      tags: ["NLP", "FastAPI", "BERT", "Docker"]
    }
  ];

  const categories = ["All", "NLP", "Computer Vision", "MLOps", "Deep Learning"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()))
      );

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="flex justify-center mb-10 flex-wrap gap-2">
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects
          .slice(0, visibleProjects)
          .map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
      
      {filteredProjects.length > visibleProjects && (
        <div className="text-center mt-12">
          <Button
            onClick={() => setVisibleProjects(prevState => prevState + 3)}
            variant="outline"
            className="border-2 px-8"
          >
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
