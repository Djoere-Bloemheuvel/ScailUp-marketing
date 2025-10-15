import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ConsultantsAnimatedHeadline from './ConsultantsAnimatedHeadline';

// TestCase CTA Button styles for Hero
const HERO_CTA_STYLES = {
  button: {
    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    letterSpacing: '-0.01em',
    fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
    fontWeight: '500',
    padding: 'clamp(0.75rem, 1.2vw, 1rem) clamp(2rem, 3vw, 2.5rem)',
    background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) padding-box, linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182)) border-box',
    border: '2px solid transparent',
    minWidth: '200px',
    backdropFilter: 'blur(10px)',
    cursor: 'pointer' as const,
    color: 'white'
  },
  buttonFill: {
    background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
    transformOrigin: 'bottom center' as const
  }
};

// Animation variants for TestCase style
const HERO_BUTTON_VARIANTS = {
  initial: { scale: 1 },
  hover: { 
    scale: typeof window !== 'undefined' && window.innerWidth < 640 ? 1.02 : 1.01,
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

const ConsultantsHero = () => {
  const [hasTriggeredPreload, setHasTriggeredPreload] = useState(false);

  // Ultra-aggressive preload: Trigger on ANY user interaction
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const preloadLeadGenImage = () => {
      if (hasTriggeredPreload) return;
      setHasTriggeredPreload(true);
      
      // Preload lead generation image immediately
      const leadGenImage = new Image();
      leadGenImage.src = '/lead-generation-hero-optimized.webp';
      leadGenImage.loading = 'eager';
      leadGenImage.fetchPriority = 'high';
      
      // Also preload the ultra-hd version as backup
      const leadGenImageBackup = new Image();
      leadGenImageBackup.src = '/lead-generation-hero-ultra-hd.webp';
      leadGenImageBackup.loading = 'eager';
    };

    const handleScroll = () => {
      // Trigger preload immediately when user starts scrolling (even 1px)
      if (window.scrollY > 1) {
        preloadLeadGenImage();
      }
    };

    const handleMouseMove = () => {
      // Trigger on first mouse movement over hero
      preloadLeadGenImage();
    };

    const handleTouch = () => {
      // Trigger on first touch (mobile)
      preloadLeadGenImage();
    };

    // Multiple trigger points for maximum coverage
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true, once: true });
    window.addEventListener('touchstart', handleTouch, { passive: true, once: true });
    
    // Fallback: preload after 2 seconds regardless
    const fallbackTimeout = setTimeout(preloadLeadGenImage, 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      clearTimeout(fallbackTimeout);
    };
  }, [hasTriggeredPreload]);

  const handlePartnershipClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/kenniscentrum';
    }
  };

  const handleCasesClick = () => {
    if (typeof window !== 'undefined') {
      // Scroll to Case Studies section
      const targetSection = document.querySelector('[data-section-id="testcasestudies"]');
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return (
    <>
      <style jsx>{`
        /* Mobile-first CTA responsive scaling - nog kleiner en lager */
        .cta-responsive {
          font-size: 0.6rem; /* nog kleiner op mobile */
          padding: 0.4rem 0.65rem; /* nog kleinere padding voor lagere hoogte */
          min-height: 30px; /* lager voor compactere look */
          min-width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Mobile-specific touch optimizations - extra klein en laag */
        @media (max-width: 479px) {
          .cta-responsive {
            font-size: 0.55rem; /* nog kleiner */
            padding: 0.35rem 0.6rem; /* nog compactere padding */
            min-height: 28px; /* nog lager voor zeer compacte look */
          }
        }
        
        @media (min-width: 640px) {
          .cta-responsive {
            font-size: 0.8rem; /* blijft klein */
            padding: 0.45rem 0.9rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 768px) {
          .cta-responsive {
            font-size: 0.8rem; /* blijft klein */
            padding: 0.45rem 1rem; /* iets meer padding */
          }
        }
        
        @media (min-width: 900px) {
          .cta-responsive {
            font-size: 0.875rem; /* text-sm */
            padding: 0.55rem 1.125rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 1000px) {
          .cta-responsive {
            font-size: 0.9rem; /* iets kleiner dan text-base */
            padding: 0.55rem 1.25rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 1024px) {
          .cta-responsive {
            font-size: 0.95rem; /* tussen sm en base */
            padding: 0.55rem 1.35rem; /* kleinere padding */
          }
        }
        
        @media (min-width: 1200px) {
          .cta-responsive {
            font-size: 1rem; /* text-base ipv lg */
            padding: 0.65rem 1.75rem; /* kleinere padding */
          }
        }
        
        /* Icon responsive scaling */
        .icon-responsive {
          width: 0.75rem; /* w-3 */
          height: 0.75rem; /* h-3 */
        }
        
        @media (min-width: 640px) {
          .icon-responsive {
            width: 0.75rem; /* blijft w-3 */
            height: 0.75rem; /* h-3 */
          }
        }
        
        @media (min-width: 768px) {
          .icon-responsive {
            width: 0.875rem; /* tussen w-3 en w-4 */
            height: 0.875rem;
          }
        }
        
        @media (min-width: 900px) {
          .icon-responsive {
            width: 1rem; /* w-4 */
            height: 1rem; /* h-4 */
          }
        }
        
        @media (min-width: 1000px) {
          .icon-responsive {
            width: 1.125rem; /* tussen w-4 en w-5 */
            height: 1.125rem;
          }
        }
        
        @media (min-width: 1024px) {
          .icon-responsive {
            width: 1.25rem; /* w-5 */
            height: 1.25rem; /* h-5 */
          }
        }
        
        /* Text margin responsive scaling */
        .text-margin-responsive {
          margin-right: 0.25rem; /* mr-1 */
        }
        
        @media (min-width: 640px) {
          .text-margin-responsive {
            margin-right: 0.25rem; /* mr-1 */
          }
        }
        
        @media (min-width: 768px) {
          .text-margin-responsive {
            margin-right: 0.375rem; /* tussen mr-1 en mr-2 */
          }
        }
        
        @media (min-width: 900px) {
          .text-margin-responsive {
            margin-right: 0.5rem; /* mr-2 */
          }
        }
        
        @media (min-width: 1000px) {
          .text-margin-responsive {
            margin-right: 0.625rem; /* tussen mr-2 en mr-3 */
          }
        }
        
        @media (min-width: 1024px) {
          .text-margin-responsive {
            margin-right: 0.75rem; /* mr-3 */
          }
        }
        
        /* Default background positioning */
        .hero-bg {
          background-position: center 30% !important; /* Higher positioned */
        }
        
        /* Mobile responsive background positioning */
        @media (max-width: 639px) {
          .hero-bg {
            background-position: center 30% !important;
            background-size: 120% auto !important;
            transform: translate3d(0, 20%, 0) !important;
            will-change: transform;
            contain: layout style paint;
          }
        }
        
        /* Mobile performance optimizations */
        @media (max-width: 639px) {
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .hero-bg {
              transform: none !important;
              animation: none !important;
            }
          }
          
          /* Mobile scroll performance */
          body {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: none;
          }
          
          /* Mobile tap highlight removal */
          * {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
          }
        }
        
        /* Tablet landscape positioning */
        @media (min-width: 640px) and (max-width: 767px) {
          .hero-bg {
            background-position: center 30% !important;
          }
        }
        
        /* Laptop screens (13-16 inch) - background position */
        @media (min-width: 768px) and (max-width: 1679px) {
          .hero-bg {
            background-position: center 30% !important;
          }
        }
        
        /* Desktop screens (18+ inch) - background position */
        @media (min-width: 1680px) {
          .hero-bg {
            background-position: center 30% !important;
          }
        }
      `}</style>
    <section 
      className="relative w-full flex justify-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
      data-section-theme="dark"
      data-section-accent="blue"
      data-section-id="hero"
      data-lighting-intensity="moderate"
      style={{
        // Mobile performance optimizations
        willChange: 'transform',
        contain: 'layout style paint',
        height: '75vh',
        // Position content slightly lower than center
        alignItems: 'center',
        paddingTop: '0'
      }}
    >
      
      {/* Instant Hero Background - No transitions */}
      <div className="absolute inset-0">
        {/* Instant background with partnership image */}
        <div 
          className="absolute inset-0 hero-bg"
          style={{
            backgroundColor: '#000000',
            backgroundImage: 'url(/partnership-optimized.webp)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
            imageRendering: 'high-quality',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0,0,0)', // Force GPU layer
            contain: 'paint'
          }}
        />
        
        {/* Fallback high-quality image for browsers that don't support CSS background */}
        <img 
          src="/partnership-optimized.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90 object-pos-responsive hidden"
          width="1920"
          height="1080"
          style={{
            imageRendering: 'high-quality',
            backfaceVisibility: 'hidden',
            transform: 'translate3d(0,0,0)'
          }}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />
      </div>
      
      {/* Enhanced gradient for better shadow overlay effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
      </div>
      
      {/* Clean responsive content positioning */}
      <style>{`
        
        /* Consistent content positioning - desktop & laptop unified */
        .content-container {
          margin-top: 2vh;
          padding-top: 1rem;
        }
        
        /* Mobile-only positioning adjustments */
        @media (max-width: 639px) {
          .content-container {
            margin-top: 8vh; /* More space from top on mobile */
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Extra small mobile phones */
        @media (max-width: 374px) {
          .content-container {
            margin-top: 6vh;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
        
        /* Tablet landscape - consistent with laptop positioning */
        @media (min-width: 640px) {
          .content-container {
            margin-top: -2vh; /* Consistent baseline for all larger screens */
            padding-top: 0.5rem;
          }
        }
        
        /* Laptop screens (13-16 inch) - standardized positioning */
        @media (min-width: 768px) and (max-width: 1679px) {
          .content-container {
            margin-top: -8vh; /* Laptop content positioning */
            padding-top: 0;
          }
        }
        
        /* Desktop screens (18+ inch) - matching laptop positioning */
        @media (min-width: 1680px) {
          .content-container {
            margin-top: -3vh; /* Same positioning as laptop */
            padding-top: 0;
          }
        }
        
        /* Large desktop screens - minimal adjustment only */
        @media (min-width: 2560px) {
          .content-container {
            margin-top: -4vh; /* Slight adjustment for very large screens */
          }
        }
        
        @keyframes agency-flow {
          0%, 100% { transform: translateX(-30%) scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: translateX(30%) scale(1.1) rotate(2deg); opacity: 0.4; }
        }
        
        @keyframes partnership-drift {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-40px) rotate(1deg) scale(1.05); }
          75% { transform: translateY(40px) rotate(-1deg) scale(0.95); }
        }
        
        @keyframes scale-glow {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.3; }
          25% { transform: translateX(80px) translateY(-50px) scale(1.3); opacity: 0.5; }
          50% { transform: translateX(160px) translateY(0) scale(0.8); opacity: 0.2; }
          75% { transform: translateX(80px) translateY(50px) scale(1.2); opacity: 0.4; }
        }
      `}</style>
      
      {/* Minimal accent lights to complement background */}
      <div className="absolute inset-0 opacity-5" style={{ contain: 'paint' }}>
        {/* Very subtle accent lighting */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-16 sm:w-72 sm:h-24 md:w-96 md:h-32 bg-gradient-to-l from-blue-500/20 to-cyan-500/15 rounded-lg sm:rounded-xl blur-3xl" 
          style={{ 
            animationDelay: '0s', 
            animation: 'partnership-drift 25s ease-in-out infinite, fade-pulse 18s ease-in-out infinite'
          }} 
        />
      </div>
      
      {/* Subtle fade to black at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 sm:h-44 lg:h-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0.35) 65%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.85) 95%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
        
      {/* Content Container - Responsive positioning above BUILDRS logo */}
      <div className="relative max-w-6xl mx-auto z-30 text-center sm:text-left content-container"
           style={{
             /* Safe padding voor cutoff prevention op alle breakpoints */
             paddingLeft: '1rem',
             paddingRight: '2rem',
             /* Zorg dat de container zelf links uitlijnt op laptop/desktop */
             textAlign: typeof window !== 'undefined' && window.innerWidth >= 768 ? 'left' : undefined,
             /* Prevent any overflow issues */
             overflow: 'visible'
           }}>
        <motion.div 
          className="max-w-5xl mx-auto relative"
          style={{ 
            minHeight: '280px',
            /* Remove contain voor betere alignment */
            contain: 'none',
            willChange: 'transform',
            /* Ensure no overflow cutoff */
            overflow: 'visible',
            /* Subtle shift to the left */
            marginLeft: '-1rem',
            marginRight: 'auto'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.15, 
            ease: [0.25, 0.46, 0.45, 0.94],
            // Mobile-specific optimization
            ...(typeof window !== 'undefined' && window.innerWidth < 640 && {
              duration: 0.2,
              ease: "easeOut"
            })
          }}
        >
          {/* Subtle background glow for content area */}
          <div className="absolute inset-0 rounded-3xl opacity-5 pointer-events-none" 
               style={{
                 background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                 filter: 'blur(40px)'
               }} />
          
          {/* Animated Headline - Enter from left */}
          <motion.div 
            className="mb-0"
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0 }}
          >
            <ConsultantsAnimatedHeadline />
          </motion.div>


          {/* Redesigned CTA Section - Mobile-optimized animations */}
          <motion.div 
            className="flex flex-row gap-2 sm:gap-4 lg:gap-6 justify-center sm:justify-start items-center -mt-4 sm:mt-0 md:mt-0 lg:mt-1 cta-container"
            style={{ 
              minHeight: '100px',
              /* Remove contain voor betere alignment */
              contain: 'none',
              willChange: 'transform',
              /* Ensure perfect alignment */
              overflow: 'visible'
            }}
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.35, 
              delay: 0.08, 
              ease: [0.16, 1, 0.3, 1],
              // Mobile-specific easing
              ...(typeof window !== 'undefined' && window.innerWidth < 640 && {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1
              })
            }}
          >
            <style jsx>{`
              /* Perfect alignment met hero headline */
              .cta-container {
                margin-left: 0rem !important; /* Mobile: geen offset */
              }
              
              /* Laptop & Desktop: perfecte uitlijning met headline */
              @media (min-width: 768px) {
                .cta-container {
                  margin-left: 0rem !important; /* Perfect uitlijning met headline */
                  justify-content: flex-start !important;
                }
              }
              
              /* Mobile CTA button responsive sizing - smaller & shorter */
              .cta-responsive {
                padding: 0.375rem 0.75rem; /* Smaller padding */
                font-size: 0.65rem; /* Smaller text */
                height: 2rem; /* Much shorter height */
              }
              
              .text-margin-responsive {
                font-size: 0.65rem; /* Smaller text */
                font-weight: 500;
              }
              
              .icon-responsive {
                width: 0.875rem; /* Smaller icon */
                height: 0.875rem;
              }
              
              /* Progressive scaling for larger screens */
              @media (min-width: 640px) {
                .cta-responsive {
                  padding: 0.5rem 1rem;
                  font-size: 0.75rem;
                  height: 2.25rem;
                }
                
                .text-margin-responsive {
                  font-size: 0.75rem;
                }
              }
              
              @media (min-width: 768px) {
                .cta-responsive {
                  padding: 0.5rem 1.25rem;
                  font-size: 0.8rem;
                  height: 2.5rem;
                }
                
                .text-margin-responsive {
                  font-size: 0.8rem;
                }
              }
              
              @media (min-width: 900px) {
                .cta-responsive {
                  padding: 0.55rem 1.375rem;
                  font-size: 0.875rem;
                  height: 2.75rem;
                }
                
                .text-margin-responsive {
                  font-size: 0.875rem;
                }
                
                .icon-responsive {
                  width: 1rem;
                  height: 1rem;
                }
              }
              
              @media (min-width: 1000px) {
                .cta-responsive {
                  padding: 0.6rem 1.5rem;
                  font-size: 0.9rem;
                  height: 3rem;
                }
                
                .text-margin-responsive {
                  font-size: 0.9rem;
                }
                
                .icon-responsive {
                  width: 1.125rem;
                  height: 1.125rem;
                }
              }
              
              @media (min-width: 1024px) {
                .cta-responsive {
                  padding: 0.65rem 1.75rem;
                  font-size: 0.95rem;
                  height: 3.25rem;
                }
                
                .text-margin-responsive {
                  font-size: 0.95rem;
                }
                
                .icon-responsive {
                  width: 1.25rem;
                  height: 1.25rem;
                }
              }
              
              @media (min-width: 1200px) {
                .cta-responsive {
                  padding: 0.65rem 2rem;
                  font-size: 1rem;
                  height: 3.5rem;
                }
                
                .text-margin-responsive {
                  font-size: 1rem;
                }
              }
            `}</style>
            
            {/* Primary CTA - Plan Strategiesessie */}
            <motion.button
              className="cta-responsive relative inline-flex items-center justify-center text-white font-medium rounded-full overflow-hidden"
              style={HERO_CTA_STYLES.button}
              whileHover="hover"
              initial="initial"
              variants={HERO_BUTTON_VARIANTS}
              whileTap={HERO_BUTTON_TAP_VARIANT}
              onClick={() => {
                const targetSection = document.querySelector('[data-section-id="leadform"]');
                if (targetSection) {
                  targetSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }
              }}
            >
              {/* Bottom-to-top gradient fill animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={HERO_CTA_STYLES.buttonFill}
                variants={HERO_FILL_VARIANTS}
              />
              
              {/* Text content */}
              <span className="relative z-10 text-white text-margin-responsive" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)', color: 'white' }}>
                Plan Strategiesessie
              </span>
            </motion.button>
            
            {/* Secondary CTA - Contact - EXACT COPY from HomeHero "Bekijk voorbeelden" button */}
            <motion.button
              className="cta-responsive relative inline-flex items-center justify-center text-white font-medium rounded-full overflow-hidden"
              style={{ 
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                zIndex: 50
              }}
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { 
                  scale: 1,
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                },
                hover: { 
                  scale: typeof window !== 'undefined' && window.innerWidth < 640 ? 1.02 : 1.01,
                  borderColor: 'rgba(0, 0, 0, 0.8)',
                  transition: { 
                    duration: 0.4, 
                    ease: [0.16, 1, 0.3, 1] 
                  }
                }
              }}
              whileTap={HERO_BUTTON_TAP_VARIANT}
              onClick={() => {
                // Scroll to services section
                const targetSection = document.querySelector('[data-section-id="services"]');
                if (targetSection) {
                  targetSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                }
              }}
            >
              {/* Top-to-bottom black fill animation - exact copy from "Bekijk voorbeelden" */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'rgba(0, 0, 0, 1)',
                  transformOrigin: 'top center'
                }}
                variants={{
                  initial: { scaleY: 0, scale: 1 },
                  hover: { 
                    scaleY: 1,
                    scale: 1,
                    transition: { 
                      duration: 0.4, 
                      ease: [0.16, 1, 0.3, 1],
                      type: 'tween'
                    }
                  }
                }}
              />
              
              {/* Button content */}
              <span className="relative z-10 text-margin-responsive">Bekijk de voorbeelden</span>
              <motion.div
                className="relative z-10"
                whileHover={{
                  rotate: 90,
                  y: 4,
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
              >
                <ChevronRight className="icon-responsive" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default ConsultantsHero;