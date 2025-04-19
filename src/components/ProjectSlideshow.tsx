
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence solutions",
    image: "/images/ai-hero.png"
  },
  {
    title: "Automation",
    description: "Advanced automation systems",
    image: "/images/ai-hero.png"
  },
  {
    title: "Integration",
    description: "Seamless system integration",
    image: "/images/ai-hero.png"
  }
];

const ProjectSlideshow = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <motion.div 
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-manrope font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 font-plus-jakarta">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectSlideshow;
