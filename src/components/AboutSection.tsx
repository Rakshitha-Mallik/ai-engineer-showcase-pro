
import { Brain, Network, Code, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const specializations = [
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: 'Large Language Models',
      description: 'Experience with OpenAI, CrewAI, LangChain, and Gemini LLMs for building intelligent applications and automation.'
    },
    {
      icon: <Network className="w-10 h-10 text-violet-600" />,
      title: 'Deep Learning',
      description: 'Expertise in PyTorch, Keras, TensorFlow, and neural network architectures for complex AI solutions.'
    },
    {
      icon: <Code className="w-10 h-10 text-purple-600" />,
      title: 'AI-Driven Automation',
      description: 'Building AI systems that automate business processes, enhance productivity, and deliver meaningful insights.'
    },
    {
      icon: <Rocket className="w-10 h-10 text-teal-600" />,
      title: 'Cloud & Deployment',
      description: 'Deploying scalable AI solutions on GCP, AWS, and Azure with Docker for production environments.'
    }
  ];

  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-title"
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
        >
          <p className="text-lg mb-6 text-gray-700">
            I'm a passionate AI Engineer with expertise in Large Language Models (LLMs), deep learning, and AI-driven automation. 
            My journey in artificial intelligence began during my studies at Ramaiah Institute of Technology and has evolved into a 
            career focused on building intelligent systems that solve real-world challenges.
          </p>
          
          <p className="text-lg mb-6 text-gray-700">
            Working at the intersection of cutting-edge AI technologies, I specialize in developing solutions using Python, 
            TensorFlow, Keras, PyTorch, LangChain, CrewAI, and various cloud platforms like GCP and AWS. I'm particularly 
            interested in optimizing model performance and deploying practical AI applications.
          </p>
          
          <p className="text-lg text-gray-700">
            When I'm not building AI systems, I'm continuously learning about advancements in AI, exploring new technologies, 
            and finding innovative ways to leverage AI to solve complex challenges in industries like healthcare, sales automation, 
            and document processing.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-50 p-8 rounded-2xl gradient-border"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Specializations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="card-hover border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4">{spec.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{spec.title}</h4>
                    <p className="text-gray-600 text-sm">{spec.description}</p>
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
