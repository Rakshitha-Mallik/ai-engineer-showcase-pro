
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
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="h-full"
    >
      <Card className="overflow-hidden rounded-xl border-0 shadow-xl h-full bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-800/80 dark:to-gray-900/80 dark:text-white hover-3d glass-card border border-white/10">
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          {/* Gradient overlay on the image */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 mix-blend-overlay z-10"></div>
          
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end z-20">
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
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(147, 51, 234, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-purple-600 to-violet-600 backdrop-blur-md rounded-full transition-colors shadow-lg shadow-purple-600/30"
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
              )}
              
              {demoLink && (
                <motion.a 
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(6, 182, 212, 0.7)" }}
                  whileTap={{ scale: 0.95 }}
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-blur-md rounded-full transition-colors shadow-lg shadow-cyan-600/30"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </motion.a>
              )}
              
              {!demoLink && !githubLink && (
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-gradient-to-r from-gray-600 to-slate-800 backdrop-blur-md rounded-full text-white/70 shadow-lg"
                >
                  <Lock className="w-5 h-5" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border-t border-white/5">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 mb-4 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-blue-300 hover:from-purple-500/30 hover:to-blue-500/30"
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
