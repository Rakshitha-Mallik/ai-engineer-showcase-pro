
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow/Keras', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-Learn', level: 92 },
        { name: 'SQL', level: 80 },
        { name: 'JavaScript/TypeScript', level: 75 },
      ]
    },
    {
      title: 'AI/ML Tools',
      skills: [
        { name: 'Computer Vision (OpenCV, CNNs)', level: 88 },
        { name: 'NLP (BERT, GPT, Transformers)', level: 85 },
        { name: 'Reinforcement Learning', level: 75 },
        { name: 'MLOps (MLflow, Kubeflow)', level: 82 },
        { name: 'Explainable AI', level: 78 },
        { name: 'Time Series Forecasting', level: 85 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS SageMaker', level: 85 },
        { name: 'Google Cloud AI Platform', level: 80 },
        { name: 'Docker & Kubernetes', level: 78 },
        { name: 'CI/CD Pipelines', level: 75 },
        { name: 'MongoDB/DynamoDB', level: 72 },
        { name: 'Airflow', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="p-6 border-0 shadow-md">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" 
                      style={{
                        '--progress-background': 'hsl(var(--ai-blue))', 
                        background: 'hsl(var(--muted))'
                      } as React.CSSProperties} 
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
