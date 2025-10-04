import React, { useState } from 'react';
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
    image: "/images/lead-generatie.webp",
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
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default Marketing Bureaus actief
  const [currentlyHovering, setCurrentlyHovering] = useState<number | null>(null);

  return (
    <section className="relative bg-black overflow-hidden py-0 pb-24">
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
            
            // Determine animation state
            let animationState = "inactive";
            if (isActive && isCurrentlyHovering) {
              animationState = "activeHovering";
            } else if (isActive) {
              animationState = "active";
            }
            
            return (
              <motion.div 
                key={index}
                className="group relative h-screen cursor-pointer specialist-section-item"
                onHoverStart={() => {
                  setCurrentlyHovering(index);
                  setActiveIndex(index); // Update active state immediately
                }}
                onHoverEnd={() => {
                  setCurrentlyHovering(null);
                  // activeIndex blijft behouden voor sticky effect
                }}
                initial="inactive"
                animate={animationState}
              >
                
                {/* Background Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Background Image - Ultra Smooth Reveal */}
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${service.image}')` }}
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