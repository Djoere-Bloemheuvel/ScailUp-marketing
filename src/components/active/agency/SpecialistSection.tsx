import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  title: string;
  image: string;
  accent: 'blue' | 'purple';
}

interface Props {
  services?: [Service, Service];
  sectionTitle?: string;
}

const defaultServices: [Service, Service] = [
  {
    title: "Lead Generatie",
    image: "/lead-generation-hero-optimized.webp",
    accent: "blue"
  },
  {
    title: "Content & SEO", 
    image: "/images/consultancy-founder.webp", 
    accent: "blue"
  }
];


// Clean image reveal - only active section shows
const backgroundVariants = {
  inactive: { 
    opacity: 0
  },
  active: { 
    opacity: 0.8,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  activeHovering: { 
    opacity: 0.8,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  // Mobile-specific variants for ultra-smooth scroll reveals
  activeMobile: {
    opacity: 0.8,
    transition: {
      duration: 1.2, // Much longer for smoother fade-in
      ease: [0.25, 0.46, 0.45, 0.94] // Ultra-smooth ease curve
    }
  },
  inactiveMobile: {
    opacity: 0,
    transition: {
      duration: 0.8, // Slower fade-out for smoothness
      ease: [0.25, 0.46, 0.45, 0.94] // Matching smooth curve
    }
  },
  // Reduced motion variants for accessibility
  activeReducedMotion: {
    opacity: 0.8,
    transition: { duration: 0.1 }
  },
  inactiveReducedMotion: {
    opacity: 0,
    transition: { duration: 0.1 }
  }
};

const overlayVariants = {
  inactive: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  active: { 
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  activeHovering: { 
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  // Mobile-specific overlay variants
  activeMobile: {
    opacity: 0,
    transition: {
      duration: 0.8, // Sneller voor betere responsiviteit
      ease: [0.25, 0.46, 0.45, 0.94] // Ultra-smooth curve
    }
  },
  inactiveMobile: {
    opacity: 1,
    transition: {
      duration: 0.6, // Sneller overlay fade-in voor mobile
      ease: [0.25, 0.46, 0.45, 0.94] // Matching smooth curve
    }
  },
  // Reduced motion variants
  activeReducedMotion: {
    opacity: 0,
    transition: { duration: 0.1 }
  },
  inactiveReducedMotion: {
    opacity: 1,
    transition: { duration: 0.1 }
  }
};

const titleVariants = {
  inactive: { 
    color: "#ffffff"
  },
  active: { 
    color: "#ffffff"
  },
  activeHovering: { 
    color: "#ffffff"
  }
};


const SpecialistSection: React.FC<Props> = ({ 
  services = defaultServices,
  sectionTitle = ""
}) => {
  // Dual state system: always one active, track current hover
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default Content & SEO actief (mobile-first)
  const [currentlyHovering, setCurrentlyHovering] = useState<number | null>(null);
  
  // Enhanced mobile and accessibility detection
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  
  // Preload both images for faster initial display
  useEffect(() => {
    const leadGenImage = new Image();
    leadGenImage.src = '/lead-generation-hero-optimized.webp';
    leadGenImage.loading = 'eager';
    leadGenImage.fetchPriority = 'high';
    
    const contentSEOImage = new Image();
    contentSEOImage.src = '/images/consultancy-founder.webp';
    contentSEOImage.loading = 'eager';
    contentSEOImage.fetchPriority = 'high';
  }, []);
  
  // Refs for intersection observer
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Enhanced mobile detection hook with touch and accessibility support
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      // More accurate mobile detection
      const isMobileWidth = window.innerWidth < 768;
      const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setIsMobile(isMobileWidth);
      setIsTouchDevice(isTouchCapable);
      setPrefersReducedMotion(isReducedMotion);
    };
    
    checkDeviceCapabilities();
    
    // Optimized resize handler with debouncing
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDeviceCapabilities, 150);
    };
    
    // Listen for reduced motion preference changes
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
  
  // Optimized IntersectionObserver for ultra-smooth mobile scroll detection
  useEffect(() => {
    if (!isMobile) return;
    
    const observers: IntersectionObserver[] = [];
    let lastUpdateTime = 0;
    const updateThreshold = 100; // Max 10 updates per second
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const now = performance.now();
              
              // Throttle updates for smooth performance
              if (now - lastUpdateTime > updateThreshold) {
                if (entry.isIntersecting) {
                  // Use requestAnimationFrame for smooth state updates
                  requestAnimationFrame(() => {
                    setActiveIndex(index);
                  });
                  lastUpdateTime = now;
                }
              }
            });
          },
          {
            // Veel sensitivere threshold voor snellere triggering
            threshold: 0.15, // Trigger at 15% visibility voor snellere response
            rootMargin: '10% 0px 10% 0px', // Positieve margins voor nog vroegere triggering
            // Use root for more accurate viewport calculations
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

  return (
    <section 
      className="relative bg-black overflow-hidden py-0 pb-24"
      data-section-theme="dark"
      data-section-accent="blue"
      data-section-id="specialist"
      data-lighting-intensity="subtle"
    >
      {/* Headline - Hero Style */}
      <div className="relative z-20 pt-24 pb-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="text-left">
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
            We specialiseren ons in
          </h2>
        </div>
      </div>
      
      {/* 1x2 Grid Layout - Two Column Style */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
          
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isCurrentlyHovering = currentlyHovering === index;
            
            // Intelligent animation state determination with mobile/desktop separation
            let animationState = "inactive";
            
            // Use real-time window check for more reliable desktop detection
            const isCurrentlyDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
            
            if (!isCurrentlyDesktop) {
              // Mobile: Use scroll-based animation variants
              if (prefersReducedMotion) {
                animationState = isActive ? "activeReducedMotion" : "inactiveReducedMotion";
              } else {
                animationState = isActive ? "activeMobile" : "inactiveMobile";
              }
            } else {
              // Desktop: Keep original hover logic completely unchanged
              if (isActive && isCurrentlyHovering) {
                animationState = "activeHovering";
              } else if (isActive) {
                animationState = "active";
              }
            }
            
            return (
              <motion.div 
                key={index}
                ref={(el) => itemRefs.current[index] = el}
                className="group relative h-screen cursor-pointer specialist-section-item"
                onHoverStart={() => {
                  // Always allow hover on desktop, regardless of initial mobile state
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    setCurrentlyHovering(index);
                    setActiveIndex(index); // Update active state immediately
                  }
                }}
                onHoverEnd={() => {
                  // Always allow hover end on desktop
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    setCurrentlyHovering(null);
                    // activeIndex blijft behouden voor sticky effect
                  }
                }}
                style={{
                  // Performance optimizations for smooth scrolling on mobile
                  willChange: isMobile ? 'transform, opacity' : 'auto',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translateZ(0)', // Force hardware acceleration
                  contain: isMobile ? 'layout style paint' : 'auto'
                }}
                initial="inactive"
                animate={animationState}
              >
                
                {/* Background Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Preload image for immediate availability - both sections */}
                  {service.title === "Lead Generatie" && (
                    <img 
                      src={service.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                    />
                  )}
                  
                  {service.title === "Content & SEO" && (
                    <img 
                      src={service.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
                      loading="eager"
                      fetchPriority="high"
                      decoding="sync"
                    />
                  )}
                  
                  {/* Background Image - Ultra Smooth Reveal */}
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url('${service.image}')`,
                      // Performance optimizations for smooth image rendering
                      willChange: isMobile ? 'opacity' : 'auto',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                    variants={backgroundVariants}
                    initial="inactive"
                    animate={animationState}
                  />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Subtle blue color grading for Lead Generatie */}
                  {service.title === "Lead Generatie" && (
                    <div 
                      className="absolute inset-0 mix-blend-overlay opacity-45"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.15) 50%, rgba(147, 197, 253, 0.10) 100%)'
                      }}
                    />
                  )}
                  
                  {/* Clean black background (inactive state) with colored glow */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      background: service.title === "Lead Generatie" 
                        ? `
                          radial-gradient(ellipse 400px 300px at 30% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 70%),
                          radial-gradient(ellipse 500px 350px at 70% 60%, rgba(96, 165, 250, 0.12) 0%, transparent 70%),
                          radial-gradient(ellipse 600px 400px at 20% 80%, rgba(37, 99, 235, 0.10) 0%, transparent 70%),
                          #000000
                        `
                        : service.title === "Content & SEO"
                        ? `
                          radial-gradient(ellipse 400px 300px at 70% 40%, rgba(236, 72, 153, 0.15) 0%, transparent 70%),
                          radial-gradient(ellipse 500px 350px at 30% 60%, rgba(244, 114, 182, 0.12) 0%, transparent 70%),
                          radial-gradient(ellipse 600px 400px at 80% 80%, rgba(219, 39, 119, 0.10) 0%, transparent 70%),
                          #000000
                        `
                        : '#000000'
                    }}
                    variants={overlayVariants}
                    initial="inactive"
                    animate={animationState}
                  />
                </div>

                {/* Content Container - Premium Centered Layout */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-8 lg:px-12 xl:px-16 z-10">
                  
                  {/* Main Title - Premium Buildrs Typography */}
                  <motion.h2 
                    className="text-4xl lg:text-5xl xl:text-6xl font-light mb-1 lg:mb-2 max-w-2xl text-white"
                    style={{ 
                      fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                      lineHeight: 0.9,
                      letterSpacing: '-0.045em',
                      WebkitFontSmoothing: 'antialiased',
                      whiteSpace: 'nowrap'
                    }}
                    variants={titleVariants}
                    initial="inactive"
                    animate={animationState}
                  >
                    {service.title}
                  </motion.h2>

                  {/* Taglines */}
                  {service.title === "Lead Generatie" && (
                    <motion.p 
                      className="text-xl lg:text-2xl text-gray-300 font-light mb-8 lg:mb-12 max-w-xl"
                      style={{ 
                        fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        letterSpacing: '-0.02em',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                      variants={titleVariants}
                      initial="inactive"
                      animate={animationState}
                    >
                      Persoonlijke outreach, op schaal.
                    </motion.p>
                  )}
                  
                  {service.title === "Content & SEO" && (
                    <motion.p 
                      className="text-xl lg:text-2xl text-gray-300 font-light mb-8 lg:mb-12 max-w-xl"
                      style={{ 
                        fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                        letterSpacing: '-0.02em',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                      variants={titleVariants}
                      initial="inactive"
                      animate={animationState}
                    >
                      Vindbaar worden, op het juiste moment.
                    </motion.p>
                  )}


                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
      
      {/* Custom styles for larger screens (20+ inch) */}
      <style jsx>{`
        @media (min-width: 1680px) {
          .specialist-section-item {
            height: 80vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SpecialistSection;