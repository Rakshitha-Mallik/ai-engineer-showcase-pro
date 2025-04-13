
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, demoLink, githubLink, tags }: ProjectProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
