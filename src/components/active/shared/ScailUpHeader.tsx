import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Send, Users, Globe, Brain, Database, Mail, Calendar, Target, Zap, Settings, BookOpen, FileText, Video, Building2, Rocket, HandHeart, ShieldCheck } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Section theme detection interface
interface SectionTheme {
  id: string;
  theme: 'light' | 'dark';
  accent: 'blue' | 'purple' | 'green' | 'orange' | 'teal';
  lightingIntensity: 'subtle' | 'moderate' | 'heavy';
}

interface ScailUpHeaderProps {
  showAlways?: boolean;
}

const ScailUpHeader = ({ showAlways = false }: ScailUpHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState<SectionTheme | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Always show header when showAlways is true, or show based on scroll
  const shouldShowHeader = showAlways || isScrolled;

  // Professional dropdown handlers with proper debouncing
  const handleDropdownEnter = useCallback((itemPath: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(itemPath);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    // Clear any existing timeout first
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Set a new timeout to close the dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Shorter delay for better UX
  }, []);

  // Advanced section detection with theme parsing
  const detectSectionTheme = useCallback((element: Element): SectionTheme | null => {
    const id = element.getAttribute('data-section-id');
    const theme = element.getAttribute('data-section-theme') as 'light' | 'dark';
    const accent = element.getAttribute('data-section-accent') as 'blue' | 'purple' | 'green' | 'orange' | 'teal';
    const lightingIntensity = element.getAttribute('data-lighting-intensity') as 'subtle' | 'moderate' | 'heavy';

    if (!id || !theme || !accent || !lightingIntensity) {
      return null;
    }

    return { id, theme, accent, lightingIntensity };
  }, []);

  // Initialize section observer
  const initializeSectionObserver = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer with optimized settings for performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
          let mostVisibleSection: { element: Element; ratio: number } | null = null;

          // Find the section with the highest intersection ratio
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              if (!mostVisibleSection || entry.intersectionRatio > mostVisibleSection.ratio) {
                mostVisibleSection = {
                  element: entry.target,
                  ratio: entry.intersectionRatio
                };
              }
            }
          });

          // Update current section based on most visible
          if (mostVisibleSection) {
            const sectionTheme = detectSectionTheme(mostVisibleSection.element);
            if (sectionTheme && (!currentSection || currentSection.id !== sectionTheme.id)) {
              setCurrentSection(sectionTheme);
            }
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for precision
        rootMargin: '-20% 0px -20% 0px' // Exclude header/footer areas
      }
    );

    // Observe all sections with data attributes
    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });
  }, [detectSectionTheme, currentSection]);

  // Adaptive styling system based on current section
  const getAdaptiveHeaderStyles = useCallback(() => {
    if (!currentSection) {
      // Perfect camouflage glassmorphism header
      return {
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.75)' 
          : 'rgba(0, 0, 0, 0.1)', // Ultra transparent when not scrolled for perfect camouflage
        backdropFilter: isScrolled 
          ? 'blur(20px) saturate(1.8)' 
          : 'blur(12px) saturate(1.2)', // Subtle blur for camouflage
        borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        textColor: 'white',
        accentColor: 'rgba(59, 130, 246, 1)' // Default blue accent
      };
    }

    const { theme, accent, lightingIntensity } = currentSection;
    
    // Define accent colors
    const accentColors = {
      blue: { primary: '59, 130, 246', secondary: '96, 165, 250' },
      purple: { primary: '147, 51, 234', secondary: '168, 85, 247' },
      green: { primary: '34, 197, 94', secondary: '74, 222, 128' },
      orange: { primary: '251, 146, 60', secondary: '251, 191, 36' },
      teal: { primary: '20, 184, 166', secondary: '45, 212, 191' }
    };

    const colors = accentColors[accent];
    
    // Determine opacity based on lighting intensity
    const intensityOpacity = {
      subtle: 0.7,
      moderate: 0.8,
      heavy: 0.9
    };

    const opacity = intensityOpacity[lightingIntensity];

    if (theme === 'light') {
      // Light theme: perfect camouflage
      return {
        background: isScrolled || showAlways
          ? `rgba(255, 255, 255, ${opacity * 0.8})`
          : 'rgba(255, 255, 255, 0.05)', // Ultra transparent for camouflage
        backdropFilter: isScrolled || showAlways
          ? 'blur(20px) saturate(1.8)'
          : 'blur(8px) saturate(1.1)', // Lighter blur for camouflage
        borderColor: `rgba(${colors.primary}, 0.1)`,
        textColor: 'black',
        accentColor: `rgba(${colors.primary}, 1)`
      };
    } else {
      // Dark theme: perfect camouflage with background blend
      return {
        background: isScrolled || showAlways
          ? `linear-gradient(135deg, rgba(0, 0, 0, ${opacity * 0.7}) 0%, rgba(${colors.primary}, 0.05) 100%)`
          : `rgba(0, 0, 0, 0.05)`, // Ultra transparent for perfect camouflage
        backdropFilter: isScrolled || showAlways
          ? 'blur(20px) saturate(1.8)'
          : 'blur(8px) saturate(1.1)', // Subtle blur for camouflage
        borderColor: `rgba(${colors.secondary}, 0.1)`,
        textColor: 'white',
        accentColor: `rgba(${colors.primary}, 1)`
      };
    }
  }, [currentSection, isScrolled, showAlways]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setCurrentPath(window.location.pathname);
    
    // Optimized scroll handler with throttling
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth scroll handling
      if (scrollTimeout) return;
      
      scrollTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
        });
        scrollTimeout = null;
      }, 16); // ~60fps throttling
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    // Initialize section observer with a delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      initializeSectionObserver();
    }, 100);

    // Set initial section if available
    const initialTimeout = setTimeout(() => {
      const sections = document.querySelectorAll('[data-section-id]');
      if (sections.length > 0) {
        const firstSection = sections[0];
        const initialTheme = detectSectionTheme(firstSection);
        if (initialTheme) {
          setCurrentSection(initialTheme);
        }
      }
    }, 200);

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      clearTimeout(initTimeout);
      clearTimeout(initialTimeout);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscape);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [initializeSectionObserver]);

  const navItems = [
    // Diensten and Prijzen links removed as requested
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

  const handleContactClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/contact';
  };

  // Get adaptive styles
  const headerStyles = getAdaptiveHeaderStyles();

  // Debug log to ensure component renders
  console.log('ScailUpHeader rendering with styles:', headerStyles);

  return (
    <>
      {/* Adaptive Glassmorphism Header - Proper Sticky */}
      <header
        className="sticky top-0 w-full transition-all duration-500"
        style={{
          background: headerStyles.background,
          backdropFilter: headerStyles.backdropFilter,
          WebkitBackdropFilter: headerStyles.backdropFilter,
          borderColor: headerStyles.borderColor,
          color: headerStyles.textColor,
          // Add smooth transitions for theme changes
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          // Performance optimizations
          willChange: 'background, border-color, color',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          // Sticky positioning with high z-index
          position: 'sticky',
          zIndex: 9999,
          height: '64px',
          opacity: 1,
          visibility: 'visible',
          // Only show border when scrolled
          borderBottom: isScrolled ? `1px solid ${headerStyles.borderColor}` : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            
            {/* Adaptive Logo */}
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="flex items-center hover:opacity-80 transition-opacity relative"
              >
                {/* Adaptive backlight glow */}
                <div 
                  className="absolute inset-0 rounded-lg blur-lg -z-10 opacity-60"
                  style={{
                    background: headerStyles.accentColor 
                      ? `linear-gradient(to right, ${headerStyles.accentColor.replace('1)', '0.2)')}, ${headerStyles.accentColor.replace('1)', '0.3)')}, ${headerStyles.accentColor.replace('1)', '0.2)')})`
                      : 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.2))'
                  }}
                ></div>
                
                <div className="relative z-10 flex flex-col items-start">
                  {/* Adaptive logo text */}
                  <span 
                    className="font-black text-lg tracking-widest uppercase leading-none transition-colors duration-500" 
                    style={{ 
                      fontFamily: 'SF Pro Display, system-ui, -apple-system, monospace', 
                      fontWeight: '900', 
                      letterSpacing: '0.15em',
                      color: headerStyles.textColor
                    }}
                  >
                    BUILDRS
                  </span>
                  
                  {/* Adaptive gradient bar */}
                  <div 
                    className="w-20 h-1 rounded-full mt-0.5 transition-all duration-500"
                    style={{
                      background: headerStyles.accentColor 
                        ? `linear-gradient(to right, ${headerStyles.accentColor}, ${headerStyles.accentColor.replace(headerStyles.accentColor.split(',')[3].split(')')[0], '0.8)')})`
                        : 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))'
                    }}
                  ></div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-12">
              {navItems.map((item) => (
                <div 
                  key={item.path} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.path)}
                  onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
                >
                  <button
                    onClick={() => !item.hasDropdown && handleNavClick(item)}
                    className="flex items-center space-x-1 transition-colors py-2 text-sm font-medium"
                    style={{
                      color: activeDropdown === item.path 
                        ? headerStyles.textColor 
                        : headerStyles.textColor === 'white' 
                          ? 'rgba(156, 163, 175, 1)' // gray-400 for dark theme
                          : 'rgba(75, 85, 99, 1)', // gray-600 for light theme
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = headerStyles.textColor}
                    onMouseLeave={(e) => {
                      if (activeDropdown !== item.path) {
                        e.currentTarget.style.color = headerStyles.textColor === 'white' 
                          ? 'rgba(156, 163, 175, 1)' 
                          : 'rgba(75, 85, 99, 1)';
                      }
                    }}
                    aria-expanded={item.hasDropdown ? activeDropdown === item.path : undefined}
                    aria-haspopup={item.hasDropdown ? 'menu' : undefined}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          activeDropdown === item.path ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Professional Dropdown Menu */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div 
                      className={`absolute top-full left-0 mt-1 bg-black/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl transition-all duration-300 ease-out min-w-[800px] max-w-[900px] p-6 z-[9998] ${
                        activeDropdown === item.path 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible translate-y-2 pointer-events-none'
                      }`}
                      role="menu"
                    >
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
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      window.location.href = menuItem.href;
                                    }}
                                    className="flex items-start space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-900/50 transition-all duration-200 group/item focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    role="menuitem"
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
              {/* Adaptive Contact CTA Button */}
              <button
                onClick={handleContactClick}
                className="hidden md:inline-flex items-center px-8 py-2.5 font-medium rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm"
                style={{ 
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                  background: headerStyles.accentColor 
                    ? `linear-gradient(to right, ${headerStyles.accentColor}, ${headerStyles.accentColor.replace('1)', '0.8)')})`
                    : 'linear-gradient(to right, rgb(59, 130, 246), rgb(96, 165, 250))',
                  color: 'white', // CTA always white text for contrast
                  boxShadow: headerStyles.accentColor 
                    ? `0 4px 12px ${headerStyles.accentColor.replace('1)', '0.3)')}`
                    : '0 4px 12px rgba(59, 130, 246, 0.3)'
                }}
              >
                Neem contact op
              </button>

              {/* Adaptive Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 transition-colors"
                style={{
                  color: headerStyles.textColor === 'white' 
                    ? 'rgba(156, 163, 175, 1)' // gray-400 for dark theme
                    : 'rgba(75, 85, 99, 1)', // gray-600 for light theme
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = headerStyles.textColor}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = headerStyles.textColor === 'white' 
                    ? 'rgba(156, 163, 175, 1)' 
                    : 'rgba(75, 85, 99, 1)';
                }}
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
      </header>

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
              className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800/50"
            >
              <div className="px-4 pt-20 pb-6">
                {/* Mobile Navigation */}
                <nav className="space-y-1 mb-8">
                  {navItems.map((item) => (
                    <div key={item.path}>
                      <button
                        onClick={() => {
                          if (!item.hasDropdown) {
                            handleNavClick(item);
                          } else {
                            setActiveDropdown(activeDropdown === item.path ? null : item.path);
                          }
                        }}
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-base text-gray-400 hover:text-white transition-colors"
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.path ? 'rotate-180' : ''}`} />}
                      </button>
                      {item.hasDropdown && item.dropdownItems && activeDropdown === item.path && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="ml-4 mt-2 space-y-4 overflow-hidden"
                        >
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
                        </motion.div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleContactClick}
                    className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-base font-medium rounded-lg hover:from-blue-600 hover:to-blue-500 transition-all duration-300"
                  >
                    Neem contact op
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