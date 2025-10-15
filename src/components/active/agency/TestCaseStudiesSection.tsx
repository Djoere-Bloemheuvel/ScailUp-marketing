import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    id: 'lead-automation',
    company: '400% meer gekwalificeerde leads',
    industry: 'MARKETING AGENCY',
    image: '/partnership-optimized.webp',
    accent: 'blue'
  },
  {
    id: 'linkedin-automation',
    company: '2.500 nieuwe connecties per maand',
    industry: 'CONSULTANCY FIRM', 
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    accent: 'teal'
  },
  {
    id: 'proposal-generator',
    company: '80% tijdsbesparing in offertes',
    industry: 'CREATIVE AGENCY',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    accent: 'orange'
  },
  {
    id: 'content-workflow',
    company: '5x sneller content productie',
    industry: 'CONTENT BUREAU',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    accent: 'green'
  },
  {
    id: 'client-onboarding',
    company: '90% geautomatiseerde onboarding',
    industry: 'TECH STARTUP',
    image: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    accent: 'purple'
  }
];

// Simplified component without entrance animations

const TestCaseStudiesSection: React.FC<Props> = ({ 
  caseStudies = defaultCaseStudies,
  sectionTitle = "TEST RESULTATEN"
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Check scroll position
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      
      // Calculate actual content boundaries (same logic as in scrollTo) - updated for new responsive sizes
      const viewportWidth = window.innerWidth;
      const calculatedVw = viewportWidth * 0.28;
      const cardWidth = Math.max(400, Math.min(calculatedVw, 600));
      const gap = 8;
      const scrollAmount = cardWidth + gap;
      const actualContentWidth = caseStudies.length * scrollAmount - gap;
      const paddingRight = viewportWidth * 0.25; // 25vw
      const maxScroll = Math.max(0, actualContentWidth - clientWidth + paddingRight);
      
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScroll - 200); // Much higher tolerance so arrow stays visible much longer
    }
  };

  // Card-to-card scroll function
  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Calculate actual card width based on clamp - updated for new responsive sizes
      const viewportWidth = window.innerWidth;
      const calculatedVw = viewportWidth * 0.28;
      const cardWidth = Math.max(400, Math.min(calculatedVw, 600));
      const gap = 8; // gap-2
      const scrollAmount = cardWidth + gap;
      
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const { clientWidth } = scrollContainerRef.current;
      
      // Calculate which card we're currently closest to
      const currentCardIndex = Math.round(currentScroll / scrollAmount);
      
      // Calculate target card index
      let targetCardIndex;
      if (direction === 'right') {
        targetCardIndex = Math.min(currentCardIndex + 1, caseStudies.length - 1);
      } else {
        targetCardIndex = Math.max(currentCardIndex - 1, 0);
      }
      
      // Calculate exact scroll position for target card
      let targetScroll = targetCardIndex * scrollAmount;
      
      // Apply max scroll bounds with padding right
      const actualContentWidth = caseStudies.length * scrollAmount - gap;
      const paddingRight = viewportWidth * 0.25; // 25vw
      const maxScroll = Math.max(0, actualContentWidth - clientWidth + paddingRight);
      targetScroll = Math.min(targetScroll, maxScroll);
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      // Update scroll position state after scroll
      setTimeout(() => checkScrollPosition(), 100);
    }
  };

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
                Test sectie van eerste gesprek tot echte resultaten:
              </div>
              <div style={{ fontWeight: '400' }}>
                Klanten die het zelf ervaren.
              </div>
            </h2>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative pb-16 lg:pb-20" style={{ overflow: 'visible' }}>
            <div 
              ref={scrollContainerRef}
              className="flex gap-2 pb-4 scrollbar-hide"
              style={{
                overflowX: 'scroll',
                overflowY: 'hidden',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
                position: 'relative',
                left: '-16rem',
                width: 'calc(100vw + 32rem)',
                paddingLeft: 'calc(16rem + 2rem)',
                paddingRight: '25vw'
              }}
            >
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={caseStudy.id}
                  className="group relative flex-shrink-0 cursor-pointer overflow-hidden case-study-card"
                  style={{
                    width: 'clamp(400px, 28vw, 600px)',
                    height: 'clamp(600px, 80vh, 850px)',
                    scrollSnapAlign: 'start',
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translate3d(0,0,0)'
                  }}
                  onClick={() => {
                    console.log(`View test case study: ${caseStudy.id}`);
                  }}
                >
                  
                  {/* Full Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url('${caseStudy.image}')`,
                      willChange: 'transform',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  
                  {/* Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div 
                    className="absolute inset-0 flex flex-col justify-between" 
                    style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                  >
                    
                    {/* Top spacing */}
                    <div></div>
                    
                    {/* Bottom Content */}
                    <div className="flex flex-col items-start">
                      
                      {/* Company Name */}
                      <h3 
                        className="text-white font-medium mb-2"
                        style={{ 
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontSize: 'clamp(1.125rem, 2.5vw, 1.875rem)',
                          letterSpacing: '-0.02em',
                          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                          lineHeight: 1.2,
                          fontWeight: '500'
                        }}
                      >
                        {caseStudy.company}
                      </h3>
                      
                      {/* Industry/See All Cases */}
                      <p 
                        className="text-white/60 font-normal tracking-wide uppercase"
                        style={{ 
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          fontSize: 'clamp(0.625rem, 1.2vw, 0.75rem)',
                          marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                          textShadow: '0 1px 4px rgba(0,0,0,0.7)',
                          letterSpacing: '0.1em',
                          fontWeight: '400'
                        }}
                      >
                        {caseStudy.industry}
                      </p>

                      {/* CTA Button - Single element with perfect gradient border */}
                      <motion.button
                        className="btn relative inline-flex items-center justify-center text-white font-medium rounded-full overflow-hidden"
                        style={{ 
                          fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                          letterSpacing: '-0.01em',
                          fontSize: 'clamp(0.625rem, 1.2vw, 0.8rem)',
                          fontWeight: '500',
                          padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(2rem, 3vw, 2.5rem)',
                          background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
                          border: '2px solid transparent',
                          minWidth: '160px',
                          backdropFilter: 'blur(10px)',
                          cursor: 'pointer',
                          color: 'white'
                        }}
                        whileHover="hover"
                        initial="initial"
                        variants={{
                          initial: { scale: 1 },
                          hover: { 
                            scale: 1.02,
                            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                          }
                        }}
                        whileTap={{
                          scale: 0.98,
                          transition: { duration: 0.1 }
                        }}
                      >
                        {/* Bottom-to-top gradient fill animation */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
                            transformOrigin: 'bottom center'
                          }}
                          variants={{
                            initial: { scaleY: 0 },
                            hover: { 
                              scaleY: 1,
                              transition: { 
                                duration: 0.6, 
                                ease: [0.16, 1, 0.3, 1],
                                type: 'tween'
                              }
                            }
                          }}
                        />
                        
                        {/* Text content */}
                        <span 
                          className="relative z-10 text-white"
                          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)', color: 'white' }}
                        >
                          Bekijk test case
                        </span>
                      </motion.button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Left Navigation Arrow */}
      {canScrollLeft && (
        <button
          className="fixed left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-50"
          onClick={() => scrollTo('left')}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Right Navigation Arrow */}
      {canScrollRight && (
        <button
          className="fixed right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-50"
          onClick={() => scrollTo('right')}
          style={{ pointerEvents: 'all' }}
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
};

export default TestCaseStudiesSection;