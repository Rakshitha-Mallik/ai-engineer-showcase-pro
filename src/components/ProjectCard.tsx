
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-0 shadow-md h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {githubLink && (
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
              )}
              
              {demoLink && (
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </motion.a>
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
    </motion.div>
  );
};

export default ProjectCard;
