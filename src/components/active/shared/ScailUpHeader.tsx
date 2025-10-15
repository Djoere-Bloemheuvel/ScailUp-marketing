import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Send, Users, Globe, Brain, Database, Mail, Calendar, Target, Zap, Settings, BookOpen, FileText, Video, Building2, Rocket, HandHeart, ShieldCheck } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TestCase CTA Button styles
const HEADER_CTA_STYLES = {
  button: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    letterSpacing: '-0.01em',
    fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
    fontWeight: '500',
    padding: 'clamp(0.625rem, 1vw, 0.75rem) clamp(1.5rem, 2.5vw, 2rem)',
    background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
    border: '2px solid transparent',
    minWidth: '140px',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer' as const,
    color: 'white'
  },
  buttonFill: {
    background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
    transformOrigin: 'bottom center' as const
  }
};

// Animation variants
const HEADER_BUTTON_VARIANTS = {
  initial: {},
  hover: { 
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

const HEADER_FILL_VARIANTS = {
  initial: { scaleY: 0 },
  hover: { 
    scaleY: 1,
    transition: { 
      duration: 0.3, 
      ease: "easeOut"
    }
  }
};

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
    }, 300); // Longer delay for better dropdown navigation
  }, []);

  // Stabilized section detection with debouncing
  const sectionUpdateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
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

  // Stabilized section observer with proper debouncing
  const initializeSectionObserver = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create stable observer with hysteresis to prevent flickering
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Clear existing timeout to prevent rapid updates
        if (sectionUpdateTimeoutRef.current) {
          clearTimeout(sectionUpdateTimeoutRef.current);
        }

        // Debounce section updates to prevent flickering
        sectionUpdateTimeoutRef.current = setTimeout(() => {
          let mostVisibleSection: { element: Element; ratio: number } | null = null;

          // Find the section with the highest intersection ratio (requires 50% visibility)
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              if (!mostVisibleSection || entry.intersectionRatio > mostVisibleSection.ratio) {
                mostVisibleSection = {
                  element: entry.target,
                  ratio: entry.intersectionRatio
                };
              }
            }
          });

          // Only update if significantly different section
          if (mostVisibleSection) {
            const sectionTheme = detectSectionTheme(mostVisibleSection.element);
            if (sectionTheme && (!currentSection || currentSection.id !== sectionTheme.id)) {
              setCurrentSection(sectionTheme);
            }
          }
        }, 150); // 150ms debounce to prevent rapid changes
      },
      {
        threshold: [0.5, 0.75], // Require more visibility to trigger change
        rootMargin: '-25% 0px -25% 0px' // Larger exclusion area for stability
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

  // Stabilized adaptive styling system with consistent CTA color
  const getAdaptiveHeaderStyles = useCallback(() => {
    // Always use consistent blue for CTA button to prevent jumping
    const stableCTAColor = 'rgba(59, 130, 246, 1)'; // Always blue
    
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
        accentColor: stableCTAColor // Stable blue
      };
    }

    const { theme, lightingIntensity } = currentSection;
    
    // Simplified color system - always use blue for stability
    const primaryBlue = '59, 130, 246';
    const secondaryBlue = '96, 165, 250';
    
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
        borderColor: `rgba(${primaryBlue}, 0.1)`,
        textColor: 'black',
        accentColor: stableCTAColor // Always stable blue
      };
    } else {
      // Dark theme: perfect camouflage with subtle blue accent
      return {
        background: isScrolled || showAlways
          ? `linear-gradient(135deg, rgba(0, 0, 0, ${opacity * 0.7}) 0%, rgba(${primaryBlue}, 0.03) 100%)`
          : `rgba(0, 0, 0, 0.05)`, // Ultra transparent for perfect camouflage
        backdropFilter: isScrolled || showAlways
          ? 'blur(20px) saturate(1.8)'
          : 'blur(8px) saturate(1.1)', // Subtle blur for camouflage
        borderColor: `rgba(${secondaryBlue}, 0.1)`,
        textColor: 'white',
        accentColor: stableCTAColor // Always stable blue
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
      if (sectionUpdateTimeoutRef.current) clearTimeout(sectionUpdateTimeoutRef.current);
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
    {
      path: '/diensten',
      label: 'Diensten',
      href: '/#services',
      hasDropdown: false
    },
    {
      path: '/oplossingen',
      label: 'Oplossingen',
      href: '/#testcasestudies',
      hasDropdown: false
    }
  ];

  const isActive = (item: typeof navItems[0]) => {
    return item.path === currentPath;
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    // SSR Guard: Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
    // Check if it's an anchor link to homepage
    if (item.href.startsWith('/#')) {
      const anchor = item.href.substring(2); // Remove '/#'
      
      // If we're not on homepage, navigate there first
      if (window.location.pathname !== '/') {
        window.location.href = item.href;
      } else {
        // We're on homepage, scroll to section
        const targetSection = document.querySelector(`[data-section-id="${anchor}"]`);
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    } else {
      // Regular navigation
      window.location.href = item.href;
    }
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
                  style={{ paddingTop: '8px', paddingBottom: '8px' }}
                >
                  <button
                    onClick={() => !item.hasDropdown && handleNavClick(item)}
                    className="flex items-center space-x-1 transition-all duration-300 ease-out py-2 text-base font-medium hover:scale-105 hover:bg-white/10 hover:backdrop-blur-sm rounded-lg px-3 -mx-3"
                    style={{
                      color: activeDropdown === item.path 
                        ? headerStyles.textColor 
                        : headerStyles.textColor === 'white' 
                          ? 'rgba(248, 250, 252, 1)' // slate-50 (veel witter) for dark theme
                          : 'rgba(75, 85, 99, 1)', // gray-600 for light theme
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                      e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      if (activeDropdown !== item.path) {
                        e.currentTarget.style.color = headerStyles.textColor === 'white' 
                          ? 'rgba(248, 250, 252, 1)' 
                          : 'rgba(75, 85, 99, 1)';
                        e.currentTarget.style.textShadow = 'none';
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
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-black/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl transition-all duration-300 ease-out min-w-[800px] max-w-[900px] p-6 ${
                        activeDropdown === item.path 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible translate-y-2 pointer-events-none'
                      }`}
                      style={{ 
                        zIndex: 10000
                      }}
                      role="menu"
                      onMouseEnter={() => handleDropdownEnter(item.path)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="max-w-7xl mx-auto">
                        {/* Menu Title */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.dropdownItems.title}</h3>
                        </div>
                        
                        {/* Sections Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-1 ml-auto">
              {/* Adaptive Contact CTA Button with gradient border and animation */}
              <motion.button
                onClick={handleContactClick}
                className="hidden md:inline-flex items-center justify-center text-white font-medium rounded-full overflow-hidden relative"
                style={HEADER_CTA_STYLES.button}
                whileHover="hover"
                initial="initial"
                variants={HEADER_BUTTON_VARIANTS}
              >
                {/* Bottom-to-top gradient fill animation */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={HEADER_CTA_STYLES.buttonFill}
                  variants={HEADER_FILL_VARIANTS}
                />
                
                {/* Text content */}
                <span 
                  className="relative z-10 text-white"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)', color: 'white' }}
                >
                  Neem contact op
                </span>
              </motion.button>

              {/* Adaptive Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 transition-colors"
                style={{
                  color: headerStyles.textColor === 'white' 
                    ? 'rgba(248, 250, 252, 1)' // slate-50 (veel witter) for dark theme
                    : 'rgba(75, 85, 99, 1)', // gray-600 for light theme
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 1)'}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = headerStyles.textColor === 'white' 
                    ? 'rgba(248, 250, 252, 1)' 
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