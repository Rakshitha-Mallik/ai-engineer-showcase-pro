
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-16">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-block p-2 bg-blue-50 rounded-full">
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-full p-2 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">AI Engineer &</span>
            <span className="hero-gradient">Machine Learning Expert</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mb-10">
            Transforming complex data into intelligent solutions. Specializing in machine learning, computer vision, 
            and natural language processing to build the next generation of AI-powered applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-6 text-lg">
              View Projects
            </Button>
            <Button variant="outline" className="border-2 px-8 py-6 text-lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
