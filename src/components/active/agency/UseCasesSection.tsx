import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UseCase {
  title: string;
  image: string;
  accent: 'blue' | 'purple' | 'green';
  tagline: string;
  description: string;
  painPoint: string;
}

interface Props {
  useCases?: [UseCase, UseCase, UseCase];
  sectionTitle?: string;
}

const defaultUseCases: [UseCase, UseCase, UseCase] = [
  {
    title: "Marketingbureaus",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    accent: "blue",
    tagline: "Automatiseer klantcampagnes en rapportages",
    description: "Van lead nurturing tot performance reporting - wij bouwen de workflows die jouw bureau laten schalen.",
    painPoint: "Geen tijd voor groei door handmatig werk"
  },
  {
    title: "SaaS Bedrijven", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    accent: "purple",
    tagline: "Schaal je outbound en onboarding workflows",
    description: "Van prospect research tot customer success automation - optimaliseer je hele customer journey.",
    painPoint: "Handmatige processen remmen groei af"
  },
  {
    title: "Consultancies",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80", 
    accent: "green",
    tagline: "Focus op advies, niet op administratie",
    description: "Automatiseer proposal generation, client onboarding en follow-up zodat jij je kan richten op strategisch werk.",
    painPoint: "Te veel tijd kwijt aan administratie"
  }
];

// Ultra-smooth animation variants met buttery transitions
const containerVariants = {
  inactive: { 
    width: "20vw",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] // easeOutExpo voor silky smooth feel
    }
  },
  active: { 
    width: "40vw",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] // easeOutExpo - Apple's preferred curve
    }
  },
  // Mobile: alle cards gelijke breedte
  activeMobile: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  inactiveMobile: {
    width: "100%",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const backgroundVariants = {
  inactive: { 
    opacity: 0.7,
    scale: 1,
    filter: "blur(0px) brightness(0.8)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  active: { 
    opacity: 0.95,
    scale: 1,
    filter: "blur(0px) brightness(1)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  activeMobile: {
    opacity: 0.95,
    scale: 1,
    filter: "blur(0px) brightness(1)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  inactiveMobile: {
    opacity: 0.7,
    scale: 1,
    filter: "blur(0px) brightness(0.8)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const overlayVariants = {
  inactive: { 
    opacity: 0.6,
    backdropFilter: "blur(2px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  active: { 
    opacity: 0.1,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  activeMobile: {
    opacity: 0.1,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  inactiveMobile: {
    opacity: 0.6,
    backdropFilter: "blur(2px)",
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Staggered text animation variants
const textVariants = {
  inactive: {
    opacity: 0.7,
    y: 10,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15
    }
  }
};

const UseCasesSection: React.FC<Props> = ({ 
  useCases = defaultUseCases,
  sectionTitle = "Voor wie bouwen wij?"
}) => {
  // Default hover is linkse portret (index 0)
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentlyHovering, setCurrentlyHovering] = useState<number | null>(null);
  
  // Device detection
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  
  // Refs voor intersection observer
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Device capabilities detection
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setIsMobile(isMobileWidth);
      setPrefersReducedMotion(isReducedMotion);
    };
    
    checkDeviceCapabilities();
    
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDeviceCapabilities, 150);
    };
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = () => setPrefersReducedMotion(mediaQuery.matches);
    
    window.addEventListener('resize', handleResize, { passive: true });
    mediaQuery.addListener(handleMotionChange);
    
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeListener(handleMotionChange);
    };
  }, []);
  
  // Mobile intersection observer
  useEffect(() => {
    if (!isMobile) return;
    
    const observers: IntersectionObserver[] = [];
    let lastUpdateTime = 0;
    const updateThreshold = 100;
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const now = performance.now();
              
              if (now - lastUpdateTime > updateThreshold) {
                if (entry.isIntersecting) {
                  requestAnimationFrame(() => {
                    setActiveIndex(index);
                  });
                  lastUpdateTime = now;
                }
              }
            });
          },
          {
            threshold: 0.15,
            rootMargin: '10% 0px 10% 0px',
            root: null
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isMobile]);

  // Enhanced accent color gradient function met premium aesthetics
  const getAccentGradient = (accent: string, isActive: boolean = false) => {
    const intensity = isActive ? 0.25 : 0.15;
    const secondaryIntensity = isActive ? 0.18 : 0.10;
    const tertiaryIntensity = isActive ? 0.12 : 0.06;
    
    switch (accent) {
      case 'blue':
        return `
          linear-gradient(135deg, rgba(59, 130, 246, ${intensity}) 0%, rgba(37, 99, 235, ${secondaryIntensity}) 50%, transparent 100%),
          radial-gradient(ellipse 600px 400px at 30% 40%, rgba(96, 165, 250, ${tertiaryIntensity}) 0%, transparent 70%),
          linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)
        `;
      case 'purple':
        return `
          linear-gradient(135deg, rgba(147, 51, 234, ${intensity}) 0%, rgba(126, 34, 206, ${secondaryIntensity}) 50%, transparent 100%),
          radial-gradient(ellipse 600px 400px at 70% 40%, rgba(196, 110, 255, ${tertiaryIntensity}) 0%, transparent 70%),
          linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)
        `;
      case 'green':
        return `
          linear-gradient(135deg, rgba(34, 197, 94, ${intensity}) 0%, rgba(22, 163, 74, ${secondaryIntensity}) 50%, transparent 100%),
          radial-gradient(ellipse 600px 400px at 50% 40%, rgba(74, 222, 128, ${tertiaryIntensity}) 0%, transparent 70%),
          linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)
        `;
      default:
        return 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)';
    }
  };

  // Professional badge styling per industry
  const getBadgeStyle = (accent: string) => {
    switch (accent) {
      case 'blue':
        return {
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          color: 'rgba(147, 197, 253, 0.9)'
        };
      case 'purple':
        return {
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(126, 34, 206, 0.05) 100%)',
          border: '1px solid rgba(147, 51, 234, 0.2)',
          color: 'rgba(196, 110, 255, 0.9)'
        };
      case 'green':
        return {
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.05) 100%)',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          color: 'rgba(74, 222, 128, 0.9)'
        };
      default:
        return {
          background: 'rgba(107, 114, 128, 0.1)',
          border: '1px solid rgba(107, 114, 128, 0.2)',
          color: 'rgba(156, 163, 175, 0.9)'
        };
    }
  };

  return (
    <section className="relative bg-black overflow-hidden py-0 pb-24">
      {/* Section Title */}
      <div className="relative z-20 pt-24 pb-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 
            className="text-white font-light tracking-tight"
            style={{ 
              fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
              fontSize: 'clamp(2.5rem, 4vw + 1rem, 4.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.045em',
              WebkitFontSmoothing: 'antialiased',
              textRendering: 'optimizeLegibility'
            }}
          >
            {sectionTitle}
          </h2>
        </div>
      </div>
      
      {/* Three Portrait Grid - Desktop: Flexbox met dynamische breedtes, Mobile: Stack */}
      <div className="w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center items-stretch gap-4 px-8">
          {useCases.map((useCase, index) => {
            const isActive = activeIndex === index;
            const isCurrentlyHovering = currentlyHovering === index;
            
            let animationState = "inactive";
            if (isActive) {
              animationState = "active";
            }
            
            return (
              <motion.div 
                key={index}
                className="relative cursor-pointer overflow-hidden"
                onHoverStart={() => {
                  setCurrentlyHovering(index);
                  setActiveIndex(index);
                }}
                onHoverEnd={() => {
                  setCurrentlyHovering(null);
                }}
                variants={containerVariants}
                initial="inactive"
                animate={animationState}
                style={{
                  height: '60vh',
                  willChange: 'width, transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)', // Hardware acceleration
                  contain: 'layout style paint'
                }}
                whileHover={{
                  scale: 1.005, // Subtle micro-animation
                  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${useCase.title} use case`}
              >
                
                {/* Background Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Background Image met enhanced loading */}
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url('${useCase.image}')`,
                      backgroundAttachment: 'fixed',
                      willChange: 'opacity, transform, filter',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translate3d(0,0,0)'
                    }}
                    variants={backgroundVariants}
                    initial="inactive"
                    animate={animationState}
                  />
                  
                  {/* Enhanced overlay system */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      background: getAccentGradient(useCase.accent, isActive),
                      willChange: 'opacity, backdrop-filter',
                      backfaceVisibility: 'hidden'
                    }}
                    variants={overlayVariants}
                    initial="inactive"
                    animate={animationState}
                  />
                  
                  {/* Content backdrop filter voor readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>

                {/* Enhanced Content Container met staggered animations */}
                <motion.div 
                  className="relative h-full flex flex-col justify-center items-center text-center px-8 lg:px-12 xl:px-16 z-10"
                  variants={textVariants}
                  initial="inactive"
                  animate={animationState}
                >
                  
                  {/* Title met responsive clamp sizing */}
                  <motion.h3 
                    className="font-light mb-4 lg:mb-6 max-w-2xl text-white"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(2rem, 5vw, 4rem)',
                      lineHeight: '1.1',
                      letterSpacing: '-0.045em',
                      WebkitFontSmoothing: 'antialiased',
                      textRendering: 'optimizeLegibility'
                    }}
                    variants={textVariants}
                  >
                    {useCase.title}
                  </motion.h3>

                  {/* Tagline met enhanced readability */}
                  <motion.p 
                    className="text-gray-200 font-light mb-6 lg:mb-8 max-w-xl leading-relaxed"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                      letterSpacing: '-0.02em',
                      WebkitFontSmoothing: 'antialiased',
                      lineHeight: '1.4'
                    }}
                    variants={textVariants}
                  >
                    {useCase.tagline}
                  </motion.p>

                  {/* Description met optimized spacing */}
                  <motion.p 
                    className="text-gray-300 font-light mb-8 max-w-lg leading-relaxed opacity-90"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                      letterSpacing: '-0.01em',
                      WebkitFontSmoothing: 'antialiased',
                      lineHeight: '1.6'
                    }}
                    variants={textVariants}
                  >
                    {useCase.description}
                  </motion.p>

                  {/* Professional Pain Point Badge */}
                  <motion.div 
                    className="inline-flex items-center px-6 py-3 backdrop-blur-sm"
                    style={{
                      ...getBadgeStyle(useCase.accent),
                      borderRadius: '8px' // Light rounded corners
                    }}
                    variants={textVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                    }}
                  >
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {useCase.painPoint}
                    </span>
                  </motion.div>

                </motion.div>

              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Mobile Layout - Stack */}
        <div className="block md:hidden">
          {useCases.map((useCase, index) => {
            const isActive = activeIndex === index;
            
            let animationState = "inactiveMobile";
            if (isActive) {
              animationState = prefersReducedMotion ? "activeReducedMotion" : "activeMobile";
            }
            
            return (
              <motion.div 
                key={index}
                ref={(el) => itemRefs.current[index] = el}
                className="relative cursor-pointer overflow-hidden"
                style={{
                  height: '60vh',
                  willChange: 'transform, opacity, filter',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translate3d(0,0,0)',
                  contain: 'layout style paint'
                }}
                whileTap={{
                  scale: 0.99,
                  transition: { duration: 0.1 }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${useCase.title} use case`}
              >
                
                {/* Background Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Enhanced Mobile Background Image */}
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url('${useCase.image}')`,
                      willChange: 'opacity, transform, filter',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translate3d(0,0,0)'
                    }}
                    variants={backgroundVariants}
                    initial="inactiveMobile"
                    animate={animationState}
                  />
                  
                  {/* Enhanced Mobile Overlay */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      background: getAccentGradient(useCase.accent, isActive),
                      willChange: 'opacity, backdrop-filter'
                    }}
                    variants={overlayVariants}
                    initial="inactiveMobile"
                    animate={animationState}
                  />
                  
                  {/* Mobile Content backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                </div>

                {/* Enhanced Mobile Content Container */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
                  
                  {/* Mobile optimized Title */}
                  <h3 
                    className="font-light mb-3 text-white"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                      lineHeight: '1.1',
                      letterSpacing: '-0.045em',
                      WebkitFontSmoothing: 'antialiased',
                      textRendering: 'optimizeLegibility'
                    }}
                  >
                    {useCase.title}
                  </h3>

                  {/* Mobile Tagline */}
                  <p 
                    className="text-gray-200 font-light mb-4 max-w-sm leading-relaxed"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                      letterSpacing: '-0.02em',
                      WebkitFontSmoothing: 'antialiased',
                      lineHeight: '1.4'
                    }}
                  >
                    {useCase.tagline}
                  </p>

                  {/* Mobile Description */}
                  <p 
                    className="text-gray-300 font-light mb-6 max-w-sm leading-relaxed opacity-90"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                      letterSpacing: '-0.01em',
                      WebkitFontSmoothing: 'antialiased',
                      lineHeight: '1.5'
                    }}
                  >
                    {useCase.description}
                  </p>

                  {/* Mobile Professional Badge */}
                  <div 
                    className="inline-flex items-center px-4 py-2 backdrop-blur-sm"
                    style={{
                      ...getBadgeStyle(useCase.accent),
                      borderRadius: '8px' // Light rounded corners
                    }}
                  >
                    <span 
                      className="text-sm font-medium"
                      style={{ 
                        fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {useCase.painPoint}
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;