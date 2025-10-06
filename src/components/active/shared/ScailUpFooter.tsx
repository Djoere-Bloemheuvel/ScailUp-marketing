import { Mail } from 'lucide-react';

const ScailUpFooter = () => {
  const handleEmailClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = 'mailto:admin@buildrs.ai';
  };

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Simple Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center hover:opacity-80 transition-opacity relative"
            >
              {/* Subtle backlight glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-lg blur-lg -z-10 opacity-60"></div>
              
              <span className="text-white font-bold text-lg tracking-widest uppercase relative z-10">
                BUILDRS
              </span>
            </button>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 Buildrs. Alle rechten voorbehouden.
          </div>
          
          {/* Contact */}
          <button
            onClick={handleEmailClick}
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
          >
            <Mail className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors" />
            admin@buildrs.ai
          </button>
          
        </div>
        
      </div>
    </footer>
  );
};

export default ScailUpFooter;