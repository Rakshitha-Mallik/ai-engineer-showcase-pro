
import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      year: "2019 - 2023",
      description: "Specialized in Machine Learning and Artificial Intelligence. Dissertation on 'Novel Approaches to Self-Supervised Learning in Computer Vision'",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: "M.S. in Machine Learning",
      institution: "Carnegie Mellon University",
      year: "2017 - 2019",
      description: "Focused on deep learning architectures and reinforcement learning algorithms. Graduated with honors.",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      year: "2013 - 2017",
      description: "Graduated with high distinction. Minor in Mathematics and Statistics.",
      icon: <GraduationCap className="w-8 h-8" />
    }
  ];

  const certifications = [
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera/DeepLearning.AI",
      year: "2020",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2021",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      year: "2022",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2021",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const publications = [
    {
      title: "Self-Supervised Feature Learning for 3D Medical Imaging",
      conference: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2022",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Efficient Transformers for Vision-Language Tasks",
      conference: "International Conference on Computer Vision (ICCV)",
      year: "2021",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Multi-Agent Reinforcement Learning for Collaborative Robotics",
      conference: "International Conference on Machine Learning (ICML)",
      year: "2020",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education & Credentials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          {education.map((item, index) => (
            <Card key={index} className="p-6 border-0 shadow-md card-hover">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
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
          ))}
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          {certifications.map((cert, index) => (
            <Card key={index} className="p-5 border-0 shadow-md card-hover">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg mr-4">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-md font-bold">{cert.name}</h4>
                  <div className="text-purple-600 text-sm">{cert.issuer}</div>
                  <div className="text-gray-500 text-xs">{cert.year}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-4">Publications</h3>
          {publications.map((pub, index) => (
            <Card key={index} className="p-5 border-0 shadow-md card-hover">
              <div className="flex items-center">
                <div className="p-2 bg-teal-100 rounded-lg mr-4">
                  {pub.icon}
                </div>
                <div>
                  <h4 className="text-md font-bold">{pub.title}</h4>
                  <div className="text-teal-600 text-sm">{pub.conference}</div>
                  <div className="text-gray-500 text-xs">{pub.year}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
