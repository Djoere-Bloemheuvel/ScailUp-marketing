import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesAccordion = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const services = [
    {
      title: "LEAD GENERATION",
      content: "AI-Driven Lead Engines: Automatische lead generatie via LinkedIn, email outreach en multi-channel campaigns. Custom CRM integraties voor seamless lead management. Lead Engine Platform: Ons proprietary platform voor outbound automation, lead enrichment en pipeline tracking. Advanced targeting algorithms voor precise audience segmentation en higher conversion rates."
    },
    {
      title: "BRAND DEVELOPMENT", 
      content: "Brand Identity & Strategy: Complete merkidentiteit ontwikkeling van logo tot brand guidelines. Strategic positioning en messaging die resoneert met jouw target audience. Brand Experience Design: Consistente brand experience across alle touchpoints - van website tot social media. Brand guidelines, visual systems en tone of voice development voor unified communication."
    },
    {
      title: "WEB DEVELOPMENT",
      content: "Modern Web Applications: High-performance websites en SaaS platforms gebouwd met Astro, React en TypeScript. API-first architecture voor scalability en integration capabilities. Performance Optimization: Core Web Vitals optimization, SEO implementation en conversion rate optimization. Custom development voor complexe business requirements en unique functionalities."
    },
    {
      title: "PARTNERSHIP",
      content: "Strategic Business Development: Partnership strategy development en execution voor mutual growth opportunities. Network expansion door strategic alliances en collaboration frameworks. Partnership Management: End-to-end partnership lifecycle management - van prospecting tot contract negotiation. Revenue sharing models en joint venture structuring voor sustainable partnerships."
    }
  ];

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Large SERVICES title - top section */}
      <div className="pt-16 pb-8 px-16 relative">
        {/* Softer center core */}
        <div 
          className="absolute left-1/3 top-1/2 pointer-events-none"
          style={{
            background: 'radial-gradient(circle 150px at 50% 50%, rgba(33, 150, 243, 0.4) 0%, rgba(66, 165, 245, 0.3) 30%, rgba(100, 181, 246, 0.2) 60%, transparent 90%)',
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%'
          }}
        />

        {/* Blue orb glow */}
        <div 
          className="absolute left-1/3 top-1/2 pointer-events-none"
          style={{
            background: 'radial-gradient(circle 500px at 50% 50%, rgba(33, 150, 243, 0.5) 0%, rgba(66, 165, 245, 0.3) 25%, rgba(100, 181, 246, 0.2) 50%, transparent 80%)',
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            height: '1000px',
            borderRadius: '50%'
          }}
        />
        
        {/* Outer blue spread */}
        <div 
          className="absolute left-1/3 top-1/2 pointer-events-none"
          style={{
            background: 'radial-gradient(circle 800px at 50% 50%, rgba(66, 165, 245, 0.25) 0%, rgba(100, 181, 246, 0.15) 40%, transparent 70%)',
            filter: 'blur(120px)',
            transform: 'translate(-50%, -50%)',
            width: '1600px',
            height: '1600px',
            borderRadius: '50%'
          }}
        />
        
        <h1 
          className="text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold leading-none tracking-tight text-white relative z-10"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 800
          }}
        >
          SERVICES
        </h1>
      </div>

      {/* Services List - bottom section */}
      <div className="flex-1 max-w-5xl ml-auto mr-12 px-16 w-2/3 overflow-y-auto">
        {services.map((service, index) => {
          const isOpen = openItem === index;
          
          return (
            <div key={index} className="border-b border-gray-600">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-4 text-left flex justify-between items-center group"
              >
                <h2 
                  className="text-xl md:text-2xl lg:text-3xl font-medium text-white"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {service.title}
                </h2>
                <div className="ml-6 flex-shrink-0">
                  <motion.div
                    animate={{ 
                      rotate: isOpen ? 180 : 0
                    }}
                    transition={{ 
                      duration: 0.15, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <ChevronDown 
                      className="w-6 h-6 text-white"
                    />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      height: 0
                    }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto"
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0
                    }}
                    transition={{ 
                      duration: 0.12, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 px-4">
                      <p 
                        className="text-base md:text-lg leading-relaxed max-w-3xl text-gray-300"
                        style={{
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          fontWeight: 300,
                          lineHeight: 1.7
                        }}
                      >
                        {service.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-8 right-8">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center text-base font-medium px-6 py-3 rounded-full text-white group relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            backdropFilter: 'blur(20px)',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(to right, rgb(96, 165, 250), rgb(244, 114, 182))',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          
          <span className="relative z-10 group-hover:text-gray-100 transition-colors duration-200">
            Back to top
          </span>
          <motion.svg 
            className="ml-2 w-4 h-4 relative z-10 group-hover:text-gray-100 transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </motion.svg>
        </motion.button>
      </div>
    </div>
  );
};

export default ServicesAccordion;