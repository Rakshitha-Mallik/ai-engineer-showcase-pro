
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechVision AI",
      period: "2022 - Present",
      description: [
        "Leading a team of 5 ML engineers in developing computer vision solutions for autonomous systems",
        "Architected and implemented an end-to-end MLOps pipeline, reducing model deployment time by 65%",
        "Collaborated with product and design teams to create AI-powered features that increased user engagement by 40%"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataSphere Inc.",
      period: "2020 - 2022",
      description: [
        "Developed and deployed NLP models for sentiment analysis and text classification",
        "Optimized model inference time by 35% through quantization and pruning techniques",
        "Created a real-time recommendation engine that increased customer conversion by 25%"
      ]
    },
    {
      title: "AI Research Intern",
      company: "Future Labs Research",
      period: "2019 - 2020",
      description: [
        "Conducted research on reinforcement learning algorithms for robotics applications",
        "Co-authored 2 research papers published in top-tier ML conferences",
        "Built prototypes demonstrating novel approaches to multi-agent reinforcement learning"
      ]
    },
    {
      title: "Data Scientist",
      company: "HealthTech Solutions",
      period: "2018 - 2019",
      description: [
        "Applied machine learning to healthcare data to predict patient readmission risk",
        "Created dashboards and visualizations to communicate insights to clinical staff",
        "Implemented data pipelines for processing and analyzing medical imaging data"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-md bg-blue-600 flex items-center justify-center">
                  <Briefcase className="text-white w-5 h-5" />
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 ml-12 md:ml-0 md:px-10 pb-10">
                  <div className={`bg-white p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'
                  }`}>
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-blue-600 font-medium mb-4">{exp.company}</div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
