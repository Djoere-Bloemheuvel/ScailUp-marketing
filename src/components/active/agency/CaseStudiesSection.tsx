import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  image: string;
  accent: 'blue' | 'purple' | 'green' | 'orange' | 'teal';
}

interface Props {
  caseStudies?: CaseStudy[];
  sectionTitle?: string;
}

const defaultCaseStudies: CaseStudy[] = [
  {
    id: 'marketing-agency',
    company: '400% meer gekwalificeerde leads per maand',
    industry: 'MARKETINGBUREAUS',
    image: '/partnership-optimized.webp',
    accent: 'blue'
  },
  {
    id: 'creative-agency',
    company: '2.500 nieuwe LinkedIn connecties',
    industry: 'CREATIVE AGENCIES', 
    image: '/marketing-engine-tree-visual.webp',
    accent: 'teal'
  },
  {
    id: 'b2b-saas',
    company: '80% snellere sales cycles & geautomatiseerde proposals',
    industry: 'B2B SAAS',
    image: '/gemini-case-study-3.webp',
    accent: 'orange'
  },
  {
    id: 'b2b-consultants',
    company: '5x snellere content productie & meer expertise schaling',
    industry: 'B2B CONSULTANCIES',
    image: '/gemini-case-study-4.webp',
    accent: 'green'
  }
];

// Style constants to prevent re-computation
const CARD_STYLES = {
  container: {
    width: 'clamp(400px, 28vw, 600px)',
    height: 'clamp(600px, 80vh, 850px)',
    scrollSnapAlign: 'start' as const,
    willChange: 'transform',
    backfaceVisibility: 'hidden' as const,
    WebkitBackfaceVisibility: 'hidden' as const,
    transform: 'translate3d(0,0,0)'
  },
  background: {
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden' as const,
    WebkitBackfaceVisibility: 'hidden' as const,
    transform: 'translateZ(0)'
  },
  content: {
    padding: 'clamp(1.5rem, 4vw, 2.5rem)'
  },
  title: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: 'clamp(1.125rem, 2.5vw, 1.875rem)',
    letterSpacing: '-0.02em',
    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
    lineHeight: 1.2,
    fontWeight: '500'
  },
  industry: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    fontSize: 'clamp(0.625rem, 1.2vw, 0.75rem)',
    marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
    textShadow: '0 1px 4px rgba(0,0,0,0.7)',
    letterSpacing: '0.1em',
    fontWeight: '400'
  },
  button: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    letterSpacing: '-0.01em',
    fontSize: 'clamp(0.625rem, 1.2vw, 0.8rem)',
    fontWeight: '500',
    padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(2rem, 3vw, 2.5rem)',
    background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
    border: '2px solid transparent',
    minWidth: '160px',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer' as const,
    color: 'white'
  },
  buttonFill: {
    background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
    transformOrigin: 'bottom center' as const
  }
};

const SCROLL_STYLES = {
  container: {
    overflowX: 'scroll' as const,
    overflowY: 'hidden' as const,
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none' as const,
    scrollBehavior: 'smooth' as const,
    position: 'relative' as const,
    left: '-16rem',
    width: 'calc(100vw + 32rem)',
    paddingLeft: 'calc(16rem + 2rem)',
    paddingRight: '25vw'
  }
};

// EXACT COPY from LeadFormButton.tsx  
const HERO_BUTTON_VARIANTS = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.01,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

const HERO_BUTTON_TAP_VARIANT = {
  scale: 0.99,
  transition: { duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
};

const HERO_FILL_VARIANTS = {
  initial: { scaleY: 0, scale: 1 },
  hover: { 
    scaleY: 1,
    scale: 1.08,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1],
      type: 'tween'
    }
  }
};

const CaseStudiesSection: React.FC<Props> = React.memo(({ 
  caseStudies = defaultCaseStudies,
  sectionTitle = "TEST RESULTATEN"
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // State for scroll calculations (will be set on client-side)
  const [scrollConfig, setScrollConfig] = useState({
    cardWidth: 400,
    gap: 8,
    scrollAmount: 408,
    actualContentWidth: caseStudies.length * 408 - 8,
    paddingRight: 400 // Start with larger padding to ensure right arrow shows
  });

  // Calculate scroll config on client-side only
  useEffect(() => {
    const calculateScrollConfig = () => {
      const viewportWidth = window.innerWidth;
      const calculatedVw = viewportWidth * 0.28;
      const cardWidth = Math.max(400, Math.min(calculatedVw, 600));
      const gap = 8;
      const scrollAmount = cardWidth + gap;
      const actualContentWidth = caseStudies.length * scrollAmount - gap;
      const paddingRight = viewportWidth * 0.25;
      
      setScrollConfig({
        cardWidth,
        gap,
        scrollAmount,
        actualContentWidth,
        paddingRight
      });
    };

    calculateScrollConfig();
    
    // Check scroll position after config is set
    setTimeout(() => checkScrollPosition(), 50);
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateScrollConfig);
    return () => window.removeEventListener('resize', calculateScrollConfig);
  }, [caseStudies.length]);

  // Optimized scroll position check
  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const { actualContentWidth, paddingRight } = scrollConfig;
      const maxScroll = Math.max(0, actualContentWidth - clientWidth + paddingRight);
      
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScroll - 200);
    }
  }, [scrollConfig]);

  // Get navigation URL for case study pages - let Astro handle the routing
  const getUsecaseUrl = useCallback((caseStudyId: string) => {
    switch (caseStudyId) {
      case 'marketing-agency':
        return '/marketingbureaus';
      case 'creative-agency':
        return '/marketingbureaus';
      case 'b2b-saas':
        return '/b2b-saas';
      case 'b2b-consultants':
        return '/b2b-consultants';
      default:
        return 'https://meetings-eu1.hubspot.com/djoe1';
    }
  }, []);

  // Optimized scroll function
  const scrollTo = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollAmount, actualContentWidth, paddingRight } = scrollConfig;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const { clientWidth } = scrollContainerRef.current;
      
      const currentCardIndex = Math.round(currentScroll / scrollAmount);
      
      let targetCardIndex;
      if (direction === 'right') {
        targetCardIndex = Math.min(currentCardIndex + 1, caseStudies.length - 1);
      } else {
        targetCardIndex = Math.max(currentCardIndex - 1, 0);
      }
      
      let targetScroll = targetCardIndex * scrollAmount;
      const maxScroll = Math.max(0, actualContentWidth - clientWidth + paddingRight);
      targetScroll = Math.min(targetScroll, maxScroll);
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      setTimeout(() => checkScrollPosition(), 100);
    }
  }, [scrollConfig, caseStudies.length, checkScrollPosition]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition, { passive: true });
      checkScrollPosition(); // Initial check
      
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <section 
      className="relative bg-black overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-24 xl:pt-32 xl:pb-32 min-h-screen flex items-center"
      data-section-theme="dark"
      data-section-accent="blue"
      data-section-id="testcasestudies"
      data-lighting-intensity="subtle"
    >
      
      {/* Container met witruimte links, geen max-width rechts */}
      <div className="relative left-16 lg:left-28 xl:left-32 2xl:left-36 w-full">
        <div className="w-full">
          
          {/* Title */}
          <div 
            className="mb-8 lg:mb-12 xl:mb-16 text-left"
          >
            <style jsx>{`
              /* Mobile-first title scaling - exact copy from ThreePhasesSection */
              .hero-title-responsive {
                font-size: clamp(1.4rem, 5vw + 0.3rem, 1.8rem);
                line-height: 1.15;
                will-change: transform;
                transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                contain: layout style paint;
                margin-bottom: clamp(0.75rem, 3vw, 1.5rem);
                padding-left: 0.5rem;
                padding-right: 0.5rem;
              }
              
              /* Ultra-small mobile optimization */
              @media (max-width: 374px) {
                .hero-title-responsive {
                  font-size: clamp(1.2rem, 6vw + 0.1rem, 1.6rem);
                  line-height: 1.2;
                  margin-bottom: 0.5rem;
                  padding-left: 0.25rem;
                  padding-right: 0.25rem;
                }
              }
              
              @media (min-width: 768px) {
                .hero-title-responsive {
                  font-size: clamp(2.5rem, 3.5vw + 0.9rem, 4rem);
                }
              }
              @media (min-width: 1024px) {
                .hero-title-responsive {
                  font-size: clamp(3rem, 2.5vw + 1.3rem, 4rem);
                }
              }
            `}</style>
            
            <h2 
              className="hero-title-responsive text-white"
              style={{ 
                fontFamily: '"Neue Haas Grotesk Display Pro", "Helvetica Neue", "Arial Nova", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '-0.045em',
                lineHeight: '1.1',
                textRendering: 'optimizeLegibility', 
                WebkitFontSmoothing: 'antialiased',
                marginLeft: '1rem'
              }}
            >
              <div style={{ fontWeight: '300' }}>
                Wat wij bouwen voor
              </div>
              <div style={{ fontWeight: '400' }}>
                verschillende branches
              </div>
            </h2>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative pb-16 lg:pb-20" style={{ overflow: 'visible' }}>
            <div 
              ref={scrollContainerRef}
              className="flex gap-2 pb-4 scrollbar-hide"
              style={SCROLL_STYLES.container}
            >
              {caseStudies.map((caseStudy, index) => {
                const url = getUsecaseUrl(caseStudy.id);
                const isExternal = url.startsWith('http');
                
                // Render as <a> for internal links, <div> for external/disabled
                const CardElement = isExternal ? 'div' : 'a';
                const cardProps = isExternal 
                  ? { onClick: () => window.open(url, '_blank') }
                  : { href: url };

                return (
                  <CardElement
                    key={caseStudy.id}
                    className="group relative flex-shrink-0 cursor-pointer overflow-hidden case-study-card block"
                    style={CARD_STYLES.container}
                    {...cardProps}
                  >
                    {/* Optimized Image Container like SpecialistSection */}
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={caseStudy.image}
                        alt={`Case study: ${caseStudy.company}`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        style={{ ...CARD_STYLES.background }}
                        loading={index < 2 ? "eager" : "lazy"}
                        fetchPriority={index < 2 ? "high" : "auto"}
                        decoding={index < 2 ? "sync" : "async"}
                      />
                      
                      {/* Background blur placeholder for smooth loading */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 blur-sm opacity-30 pointer-events-none"
                        style={{ 
                          backgroundSize: '20px 20px',
                          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)'
                        }}
                      />
                    </div>
                    
                    {/* Dark Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div 
                      className="absolute inset-0 flex flex-col justify-between" 
                      style={CARD_STYLES.content}
                    >
                      
                      {/* Top spacing */}
                      <div></div>
                      
                      {/* Bottom Content */}
                      <div className="flex flex-col items-start">
                        
                        {/* Company Name */}
                        <h3 
                          className="text-white font-medium mb-2"
                          style={CARD_STYLES.title}
                        >
                          {caseStudy.company}
                        </h3>
                        
                        {/* Industry/See All Cases */}
                        <p 
                          className="text-white/60 font-normal tracking-wide uppercase"
                          style={CARD_STYLES.industry}
                        >
                          {caseStudy.industry}
                        </p>

                        {/* CTA Button with Hero-style Fill Animation */}
                        <motion.div
                          className="relative inline-flex items-center justify-center text-white font-medium rounded-full overflow-hidden cursor-pointer"
                          style={CARD_STYLES.button}
                          whileHover="hover"
                          initial="initial"
                          variants={HERO_BUTTON_VARIANTS}
                          whileTap={HERO_BUTTON_TAP_VARIANT}
                        >
                          {/* Bottom-to-top gradient fill animation - EXACT COPY */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={CARD_STYLES.buttonFill}
                            variants={HERO_FILL_VARIANTS}
                          />
                          
                          <span 
                            className="relative z-10 text-white"
                            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)', color: 'white' }}
                          >
Lees meer
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </CardElement>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Left Navigation Arrow */}
      {canScrollLeft && (
        <button
          className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-50 touch-manipulation"
          onClick={() => scrollTo('left')}
          style={{ minWidth: '48px', minHeight: '48px' }}
          aria-label="Vorige case study"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Right Navigation Arrow */}
      {canScrollRight && (
        <button
          className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-50 touch-manipulation"
          onClick={() => scrollTo('right')}
          style={{ pointerEvents: 'all', minWidth: '48px', minHeight: '48px' }}
          aria-label="Volgende case study"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
            <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Custom scrollbar hide styles and responsive laptop scaling */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        
        /* Mobile optimizations */
        @media (max-width: 639px) {
          section {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          .case-study-card {
            width: clamp(280px, 85vw, 350px) !important;
            height: clamp(400px, 60vh, 500px) !important;
            touch-action: manipulation;
          }
          
          .hero-title-responsive {
            margin-left: 0 !important;
            padding-left: 0 !important;
          }
        }
        
        /* Fix laptop cutoffs and improve scaling */
        @media (min-width: 1024px) and (max-width: 1366px) {
          section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .case-study-card {
            width: clamp(380px, 30vw, 500px) !important;
            height: clamp(580px, 75vh, 750px) !important;
          }
        }
        
        @media (min-width: 1367px) and (max-width: 1439px) {
          .case-study-card {
            width: clamp(420px, 32vw, 550px) !important;
            height: clamp(620px, 78vh, 800px) !important;
          }
        }
        
        @media (min-width: 1440px) and (max-width: 1679px) {
          .case-study-card {
            width: clamp(480px, 34vw, 600px) !important;
            height: clamp(680px, 80vh, 850px) !important;
          }
        }
        
        /* Prevent horizontal overflow on laptop screens */
        @media (min-width: 1024px) and (max-width: 1536px) {
          .relative.left-16 {
            left: 4rem !important;
          }
        }
        
        @media (min-width: 1024px) and (max-width: 1280px) {
          .relative.left-16 {
            left: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
});

CaseStudiesSection.displayName = 'CaseStudiesSection';

export default CaseStudiesSection;