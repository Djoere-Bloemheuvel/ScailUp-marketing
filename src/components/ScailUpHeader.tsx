import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Send, Users, Globe, Brain, Database, Mail, Calendar, Target, Zap, Settings, BookOpen, FileText, Video } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScailUpHeaderProps {
  showAlways?: boolean;
}

const ScailUpHeader = ({ showAlways = false }: ScailUpHeaderProps) => {
  const [isVisible, setIsVisible] = useState(showAlways);
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
          const shouldBeVisible = showAlways || scrollY > 100; // Show always if prop is true
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
    { 
      label: 'Producten', 
      href: '#', 
      path: '/producten',
      hasDropdown: true,
      dropdownItems: {
        title: 'Alles wat je nodig hebt voor outbound',
        sections: [
          {
            title: 'Core Platform',
            items: [
              { 
                icon: Send, 
                label: 'Lead Engine', 
                href: '/lead-engine',
                description: 'Complete outbound platform voor leads en meetings'
              }
            ]
          },
          {
            title: 'Agents',
            items: [
              { 
                icon: Brain, 
                label: 'AI Agents', 
                href: '/agents-automations',
                description: 'AI agents die je outbound automatiseren'
              },
              { 
                icon: Zap, 
                label: 'Automations', 
                href: '/agents-automations',
                description: 'Slimme workflows en triggers'
              }
            ]
          },
          {
            title: 'Tools',
            items: [
              { 
                icon: Database, 
                label: 'Lead Database', 
                href: '/lead-engine/lead-database',
                description: '500k+ decision makers database'
              },
              { 
                icon: Mail, 
                label: 'Email Sequenties', 
                href: '/lead-engine/connect-to-client',
                description: 'Persoonlijke email campagnes'
              },
              { 
                icon: Calendar, 
                label: 'Meeting Booking', 
                href: '/lead-engine/inbox-to-meeting',
                description: 'Van inbox direct naar agenda'
              }
            ]
          }
        ]
      }
    },
    { 
      label: 'Oplossingen', 
      href: '#', 
      path: '/oplossingen',
      hasDropdown: true,
      dropdownItems: {
        title: 'Voor elke business case',
        sections: [
          {
            title: 'Per functie',
            items: [
              { 
                icon: Target, 
                label: 'Marketing', 
                href: '/marketing',
                description: 'Lead generation en brand awareness'
              },
              { 
                icon: Users, 
                label: 'Sales', 
                href: '/sales',
                description: 'Pipeline building en deal closing'
              },
              { 
                icon: Settings, 
                label: 'Operations', 
                href: '/operations',
                description: 'Processen en workflow optimalisatie'
              }
            ]
          },
          {
            title: 'Per industrie',
            items: [
              { 
                icon: Globe, 
                label: 'B2B SaaS', 
                href: '/saas',
                description: 'Specialized voor software bedrijven'
              },
              { 
                icon: Users, 
                label: 'Professional Services', 
                href: '/services',
                description: 'Voor consultancy en agencies'
              }
            ]
          }
        ]
      }
    },
    { label: 'Kenniscentrum', href: '/kenniscentrum', path: '/kenniscentrum' },
    { label: 'Agency', href: '/agency', path: '/agency' },
    { label: 'Docs', href: '/docs', path: '/docs' },
    { label: 'Pricing', href: '/pricing', path: '/pricing' }
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

  const handleLoginClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/login';
  };

  const handleContactClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/contact';
  };

  const handleSignUpClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/signup';
  };

  return (
    <>
      {/* Vercel-style Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[9999] bg-black border-b border-gray-800 ${
          isVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="flex items-center hover:opacity-80 transition-opacity relative"
              >
                {/* Subtle backlight glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-lg blur-lg -z-10 opacity-60"></div>
                
                <span className="text-white font-bold text-lg tracking-widest uppercase relative z-10">
                  BUILDRS
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-12">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  <button
                    onClick={() => !item.hasDropdown && handleNavClick(item)}
                    className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors py-2 text-sm font-medium"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {/* Vercel-Style Mega Menu */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute top-full left-0 mt-2 bg-black border border-gray-800 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[800px] p-6">
                      {/* Menu Title */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-1">{item.dropdownItems.title}</h3>
                      </div>
                      
                      {/* Sections Grid */}
                      <div className="grid grid-cols-3 gap-6">
                        {item.dropdownItems.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            {/* Section Title */}
                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                              {section.title}
                            </h4>
                            
                            {/* Section Items */}
                            <div className="space-y-3">
                              {section.items.map((menuItem) => {
                                const IconComponent = menuItem.icon;
                                return (
                                  <button
                                    key={menuItem.href}
                                    onClick={() => window.location.href = menuItem.href}
                                    className="flex items-start space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-900 transition-colors group/item"
                                  >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 mt-0.5">
                                      <IconComponent className="w-5 h-5 text-gray-400 group-hover/item:text-white transition-colors" />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1">
                                      <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">
                                        {menuItem.label}
                                      </div>
                                      <div className="text-sm text-gray-400 mt-0.5">
                                        {menuItem.description}
                                      </div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-1 ml-auto">
              {/* Login Button */}
              <button
                onClick={handleLoginClick}
                className="hidden md:block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg"
              >
                Log In
              </button>

              {/* Contact Button */}
              <button
                onClick={handleContactClick}
                className="hidden md:block px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-lg"
              >
                Contact
              </button>

              {/* Sign Up Button */}
              <button
                onClick={handleSignUpClick}
                className="hidden md:flex items-center px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Sign Up
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-0 left-0 right-0 bg-black border-b border-gray-800"
            >
              <div className="px-4 pt-20 pb-6">
                {/* Mobile Navigation */}
                <nav className="space-y-1 mb-8">
                  {navItems.map((item) => (
                    <div key={item.path}>
                      <button
                        onClick={() => !item.hasDropdown && handleNavClick(item)}
                        className="block w-full text-left px-4 py-3 text-base text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </button>
                      {item.hasDropdown && item.dropdownItems && (
                        <div className="ml-4 mt-2 space-y-4">
                          {item.dropdownItems.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider px-4 py-2">
                                {section.title}
                              </h4>
                              <div className="space-y-1">
                                {section.items.map((menuItem) => {
                                  const IconComponent = menuItem.icon;
                                  return (
                                    <button
                                      key={menuItem.href}
                                      onClick={() => {
                                        window.location.href = menuItem.href;
                                        setIsMobileMenuOpen(false);
                                      }}
                                      className="flex items-center space-x-3 w-full text-left px-4 py-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                                    >
                                      <IconComponent className="w-4 h-4" />
                                      <div>
                                        <div className="font-medium">{menuItem.label}</div>
                                        <div className="text-xs text-gray-600">{menuItem.description}</div>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleLoginClick}
                    className="w-full px-4 py-3 text-base text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Log In
                  </button>
                  <button
                    onClick={handleContactClick}
                    className="w-full px-4 py-3 text-base text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Contact
                  </button>
                  <button
                    onClick={handleSignUpClick}
                    className="w-full flex items-center px-4 py-3 bg-white text-black text-base font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScailUpHeader;