import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 40);
    };

    // On homepage, header starts hidden and appears on scroll
    // On other pages, header is immediately visible
    if (isHomepage) {
      setIsVisible(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsVisible(true);
      // Still listen for scroll to maintain consistent behavior
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomepage]);

  const navItems = [
    { label: 'Services', href: '#services', path: '/' },
    { label: 'AI Automations', href: '/ai-automations', path: '/ai-automations' },
    { label: 'Aanpak', href: '#approach', path: '/' },
    { label: 'Projecten', href: '#showcase', path: '/' },
    { label: 'Contact', href: '#contact', path: '/' }
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.path === '/ai-automations') {
      return location.pathname === '/ai-automations';
    }
    return location.pathname === '/' && item.path === '/';
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.path === '/ai-automations') {
      // This will be handled by React Router
      return;
    }
    
    // For homepage sections, scroll to anchor if on homepage
    if (location.pathname === '/' && item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.href.startsWith('#')) {
      // Navigate to homepage first, then scroll
      window.location.href = `/${item.href}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      style={{ 
        willChange: 'opacity, transform',
        transform: isVisible ? 'translateY(0)' : 'translateY(-8px)'
      }}
    >
      {/* Glassmorphic container */}
      <div 
        className="w-full border-b border-white/10 backdrop-blur-md"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Buildrs Logo */}
            <div className="text-white font-bold text-xl tracking-wider font-mono">
              <a href="/" className="bg-gradient-to-r from-white to-premium-silver bg-clip-text text-transparent">
                BUILDRS
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                if (item.path === '/ai-automations') {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`transition-colors duration-200 text-sm font-medium ${
                        isActive(item) 
                          ? 'text-white border-b-2 border-white/50 pb-1' 
                          : 'text-premium-silver hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                }
                
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`transition-colors duration-200 text-sm font-medium cursor-pointer ${
                      isActive(item) 
                        ? 'text-white border-b-2 border-white/50 pb-1' 
                        : 'text-premium-silver hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 text-sm px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200"
                variant="outline"
                onClick={() => handleNavClick({ label: 'Contact', href: '#contact', path: '/' })}
              >
                Contact
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
              isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col space-y-3 pt-2 border-t border-white/10">
              {navItems.map((item) => {
                if (item.path === '/ai-automations') {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`transition-colors duration-200 text-sm py-2 ${
                        isActive(item) 
                          ? 'text-white font-semibold' 
                          : 'text-premium-silver hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                }
                
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleNavClick(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`transition-colors duration-200 text-sm py-2 text-left ${
                      isActive(item) 
                        ? 'text-white font-semibold' 
                        : 'text-premium-silver hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 text-sm px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-200 w-full mt-2"
                variant="outline"
                onClick={() => {
                  handleNavClick({ label: 'Contact', href: '#contact', path: '/' });
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ScrollHeader;
