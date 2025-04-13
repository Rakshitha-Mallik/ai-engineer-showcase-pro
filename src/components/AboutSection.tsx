
import { Brain, Network, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const specializations = [
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: 'Machine Learning',
      description: 'Expertise in supervised and unsupervised learning algorithms, deep learning, and neural networks.'
    },
    {
      icon: <Network className="w-10 h-10 text-violet-600" />,
      title: 'Computer Vision',
      description: 'Building systems that can interpret and understand visual information from the world.'
    },
    {
      icon: <Code className="w-10 h-10 text-purple-600" />,
      title: 'NLP',
      description: 'Creating models that understand, interpret, and generate human language for better human-computer interaction.'
    },
    {
      icon: <Rocket className="w-10 h-10 text-teal-600" />,
      title: 'MLOps',
      description: 'Streamlining the process of taking ML models to production with robust, scalable solutions.'
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6 text-gray-700">
            I'm a passionate AI Engineer with 5+ years of experience building cutting-edge machine learning solutions 
            that solve real-world problems. My journey in artificial intelligence began during my graduate studies 
            and has evolved into a career focused on creating intelligent systems that augment human capabilities.
          </p>
          
          <p className="text-lg mb-6 text-gray-700">
            Working at the intersection of research and application, I specialize in transforming complex algorithms 
            into practical solutions that drive business impact. I'm particularly interested in explainable AI 
            and ensuring that the systems we build are transparent, ethical, and beneficial to society.
          </p>
          
          <p className="text-lg text-gray-700">
            When I'm not training models or optimizing algorithms, I enjoy contributing to open-source projects, 
            writing technical articles, and mentoring aspiring data scientists and ML engineers.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl gradient-border">
          <h3 className="text-2xl font-bold mb-6 text-center">Specializations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="card-hover border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">{spec.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{spec.title}</h4>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
