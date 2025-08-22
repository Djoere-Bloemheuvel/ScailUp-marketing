import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScailUpHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // SSR Guard: Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Set current path on mount
    setCurrentPath(window.location.pathname);
    
    // Function to setup scroll listener
    const setupScrollListener = () => {
      const mainContainer = document.getElementById('main-content');
      
      if (mainContainer) {
        // Simplified scroll handler for header visibility
        const handleScroll = () => {
          const scrollY = mainContainer.scrollTop;
          const shouldBeVisible = scrollY > 100; // Increased threshold for better UX
          setIsVisible(shouldBeVisible);
        };

        mainContainer.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
          mainContainer.removeEventListener('scroll', handleScroll);
        };
      } else {
        // Retry after a short delay if container not found yet
        setTimeout(setupScrollListener, 100);
      }
    };

    // Navigation change handler
    const handleNavigation = () => {
      if (typeof window !== 'undefined') {
        setCurrentPath(window.location.pathname);
      }
    };

    // Setup scroll listener with retry mechanism
    const cleanupScroll = setupScrollListener();
    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleNavigation);
      }
    };
  }, []);

  const navItems = [
    { label: 'Services', href: '/services', path: '/services' },
    { label: 'Cases', href: '/cases', path: '/cases' },
    { label: 'Over ons', href: '/over-ons', path: '/over-ons' },
    { label: 'Contact', href: '/contact', path: '/contact' }
  ];

  const isActive = (item: typeof navItems[0]) => {
    return item.path === currentPath;
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    // SSR Guard: Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // Navigate to page
    window.location.href = item.href;
  };

  const handleLogoClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/';
  };

  const handleCTAClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/contact';
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[9999] glass border-b border-scailup-border/20 transition-all duration-300 ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ top: 0, margin: 0, padding: 0 }}
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* Logo */}
              <button
                onClick={handleLogoClick}
                className="flex items-center space-x-2 focus-ring rounded-lg px-2 py-1"
              >
                <div className="w-10 h-10 bg-scailup-gradient rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">S</span>
                </div>
                <span className="text-xl font-bold text-white">
                  ScailUp
                </span>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg focus-ring ${
                      isActive(item)
                        ? 'text-scailup-blue bg-scailup-blue/10'
                        : 'text-scailup-gray'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Desktop CTA + Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                {/* Desktop CTA Button */}
                <Button
                  onClick={handleCTAClick}
                  className="hidden md:inline-flex bg-scailup-gradient text-white px-6 py-2 text-sm font-semibold rounded-lg focus-ring"
                >
                  Plan gesprek
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-scailup-gray rounded-lg focus-ring"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-scailup-border"
            >
              <div className="px-4 pt-20 pb-6">
                {/* Mobile Navigation */}
                <nav className="space-y-4 mb-8">
                  {navItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleNavClick(item)}
                      className={`block w-full text-left px-4 py-3 rounded-xl focus-ring ${
                        isActive(item)
                          ? 'text-scailup-blue bg-scailup-blue/10 border border-scailup-blue/20'
                          : 'text-scailup-gray'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <Button
                  onClick={handleCTAClick}
                  className="w-full bg-scailup-gradient text-white px-6 py-4 text-lg font-semibold rounded-xl focus-ring"
                >
                  Plan een strategiegesprek
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScailUpHeader;