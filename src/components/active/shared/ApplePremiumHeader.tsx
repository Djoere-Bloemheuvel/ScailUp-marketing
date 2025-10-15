import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplePremiumHeaderProps {
  showAlways?: boolean;
}

const ApplePremiumHeader = ({ showAlways = false }: ApplePremiumHeaderProps) => {
  const [isVisible, setIsVisible] = useState(showAlways);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setCurrentPath(window.location.pathname);
    
    if (window.location.pathname.startsWith('/kenniscentrum')) {
      setIsVisible(true);
    }
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isKenniscentrum = window.location.pathname.startsWith('/kenniscentrum');
      
      if (isKenniscentrum) {
        setIsVisible(true);
        return;
      }
      
      const triggerHeight = window.location.pathname === '/' ? 100 : 80;
      const shouldBeVisible = scrollY > triggerHeight;
      setIsVisible(shouldBeVisible);
    };

    const handleNavigation = () => {
      if (typeof window !== 'undefined') {
        setCurrentPath(window.location.pathname);
        if (window.location.pathname.startsWith('/kenniscentrum')) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('popstate', handleNavigation);
      }
    };
  }, []);

  // Simplified, Apple-style navigation
  const navItems = [
    { label: 'Services', href: '#services', path: '/' },
    { label: 'Platform', href: '/agents-automations', path: '/agents-automations' },
    { label: 'Knowledge', href: '/kenniscentrum', path: '/kenniscentrum' },
    { label: 'About', href: '#approach', path: '/' }
  ];

  const isActive = (item: typeof navItems[0]) => {
    if (item.path === currentPath && item.path !== '/') {
      return true;
    }
    if (item.path === '/kenniscentrum' && currentPath.startsWith('/kenniscentrum')) {
      return true;
    }
    return currentPath === '/' && item.path === '/';
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (typeof window === 'undefined') return;
    
    setIsMobileMenuOpen(false);
    
    if (item.path !== '/') {
      window.location.href = item.href;
      return;
    }

    if (currentPath === '/' && item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.href.startsWith('#')) {
      window.location.href = `/${item.href}`;
    }
  };

  const handleContactClick = () => {
    if (typeof window === 'undefined') return;
    
    if (currentPath === '/') {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ 
          opacity: 0, 
          y: -8,
          pointerEvents: 'none'
        }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -8,
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1] // Apple easing
        }}
        style={{
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Apple-style background with subtle blur */}
        <div
          className="w-full border-b border-gray-200/30 backdrop-blur-xl bg-white/90"
          style={{
            boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.08)',
            backdropFilter: 'saturate(180%) blur(20px)'
          }}
        >
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              
              {/* Buildrs Logo - Apple-style minimalism */}
              <div className="flex items-center">
                <a 
                  href="/" 
                  className="flex items-center hover:opacity-75 transition-opacity duration-300 group"
                >
                  <div className="flex flex-col items-start">
                    <span 
                      className="text-gray-900 font-semibold text-lg tracking-wide leading-none group-hover:text-gray-700 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        fontWeight: 590,
                        letterSpacing: '0.01em'
                      }}
                    >
                      BUILDRS
                    </span>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mt-1 group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300"></div>
                  </div>
                </a>
              </div>

              {/* Desktop Navigation - Ultra minimal */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => {
                  if (item.path !== '/') {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`relative text-sm font-medium transition-all duration-300 ${
                          isActive(item)
                            ? 'text-gray-900'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        style={{ 
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontWeight: 510 
                        }}
                      >
                        {item.label}
                        {isActive(item) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                            layoutId="activeTab"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          />
                        )}
                      </a>
                    );
                  }

                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className={`relative text-sm font-medium transition-all duration-300 ${
                        isActive(item)
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      style={{ 
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        fontWeight: 510 
                      }}
                    >
                      {item.label}
                      {isActive(item) && (
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                          layoutId="activeTab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Premium CTA + Mobile Menu */}
              <div className="flex items-center space-x-4">
                {/* Apple-style CTA Button */}
                <Button
                  onClick={handleContactClick}
                  className="hidden md:inline-flex items-center px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ 
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: 510,
                    fontSize: '14px'
                  }}
                >
                  Schedule Consultation
                </Button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Apple-style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/30"
              style={{
                backdropFilter: 'saturate(180%) blur(20px)'
              }}
            >
              <div className="px-6 pt-20 pb-8">
                {/* Mobile Navigation */}
                <nav className="space-y-1 mb-8">
                  {navItems.map((item) => {
                    if (item.path !== '/') {
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                            isActive(item)
                              ? 'text-gray-900 bg-gray-100'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                          style={{ 
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                            fontWeight: 510 
                          }}
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
                        className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                          isActive(item)
                            ? 'text-gray-900 bg-gray-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                        style={{ 
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontWeight: 510 
                        }}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>

                {/* Mobile CTA Button */}
                <Button
                  onClick={() => {
                    handleContactClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300"
                  style={{ 
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    fontWeight: 510,
                    fontSize: '16px'
                  }}
                >
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplePremiumHeader;