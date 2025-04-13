
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-700">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-blue-400">AI</span>Engineer
            </a>
            <p className="mt-4 max-w-xs text-gray-400">
              Solving complex problems through artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', link: '#' },
                  { name: 'LinkedIn', link: '#' },
                  { name: 'Twitter', link: '#' },
                  { name: 'Medium', link: '#' }
                ].map((social) => (
                  <li key={social.name}>
                    <a 
                      href={social.link} 
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@aiengineer.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} AI Engineer. All rights reserved.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
