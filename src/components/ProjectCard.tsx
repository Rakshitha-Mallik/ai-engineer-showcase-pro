
import { ExternalLink, Github, Lock } from 'lucide-react';
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
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="h-full"
    >
      <Card className="overflow-hidden border-0 shadow-md h-full bg-white dark:bg-gray-800 dark:text-white hover-3d glass-card">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm text-xs">
                    {tag}
                  </Badge>
                ))}
                {tags.length > 3 && (
                  <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm text-xs">
                    +{tags.length - 3}
                  </Badge>
                )}
              </div>
            </div>
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
              
              {!demoLink && !githubLink && (
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white/70"
                >
                  <Lock className="w-5 h-5" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40"
              >
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
