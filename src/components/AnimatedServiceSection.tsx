import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  accentColor: string;
  isSpecial?: boolean;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface AnimatedServiceSectionProps {
  service: Service;
  index: number;
}

const AnimatedServiceSection = ({ service, index }: AnimatedServiceSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Determine layout order
  const isAutonomousAgents = service.id === 'autonomous-agents';
  const isEven = isAutonomousAgents ? true : (index % 2 === 1);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const visualVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Determine service type for routing
  const isAIAutomations = service.id === 'ai-automations';
  const isCustomSaaS = service.id === 'custom-saas';
  const isConsultancy = service.id === 'consultancy';

  return (
    <section 
      ref={sectionRef}
      data-service-section={index}
      className={`relative py-20 lg:py-28 flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b ${service.background}`}
    >
      {/* Background pattern for special section */}
      {service.isSpecial && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
          }} />
        </div>
      )}

      <motion.div 
        className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        
        {/* Content */}
        <motion.div 
          className={`space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          variants={itemVariants}
        >
          {/* Typography */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {service.title}
            </h2>
            
            <h3 className="text-xl md:text-2xl font-light text-premium-silver/90 tracking-wide leading-relaxed">
              {service.subtitle}
            </h3>
            
            <p className="text-base md:text-lg text-premium-silver/70 font-light leading-relaxed max-w-lg tracking-wide">
              {service.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10 text-sm font-medium">
                {service.primaryButtonText}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            {isAIAutomations ? (
              <a 
                href="/ai-automations"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            ) : isCustomSaaS ? (
              <a 
                href="/custom-ai-saas"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            ) : isConsultancy ? (
              <a 
                href="/consultancy"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            ) : isAutonomousAgents ? (
              <a 
                href="/autonomous-ai-agents"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            ) : (
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-premium-silver/30 text-premium-silver font-medium rounded-full hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                <span className="text-sm font-medium">{service.secondaryButtonText}</span>
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          className={`relative ${isEven ? 'lg:order-1 lg:justify-self-start' : 'lg:order-2 lg:justify-self-end'}`}
          variants={visualVariants}
        >
          <div className="group relative w-72 h-72 transition-all duration-500 ease-out hover:scale-105 will-change-transform">
            
            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} rounded-3xl blur-3xl opacity-40 transition-all duration-700 ease-out group-hover:opacity-55 group-hover:scale-105 will-change-transform`} />
            
            {/* Main device */}
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md p-20 flex items-center justify-center shadow-2xl transition-shadow duration-500 ease-out group-hover:shadow-3xl">
              
              {service.isSpecial ? (
                // Special animated core
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/50 to-cyan-400/50" />
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/60 to-cyan-500/60" />
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-600/70 to-cyan-600/70" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-14 h-14 text-blue-300 drop-shadow-lg" />
                  </div>
                  
                  {/* Orbiting dots */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-blue-400/50" />
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-300 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-400/50" />
                  </div>
                </div>
              ) : (
                // Regular service visualization
                <div className="relative w-28 h-28">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accentColor} p-0.5 shadow-xl opacity-90 transition-all duration-500 ease-out group-hover:opacity-95 group-hover:shadow-2xl`}>
                    <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center relative overflow-hidden shadow-inner">
                      
                      {/* Icon */}
                      <service.icon className="w-14 h-14 text-white/90 relative z-10 drop-shadow-lg transition-all duration-300 ease-out group-hover:text-white" style={{
                        filter: `drop-shadow(0 0 8px ${service.accentColor.includes('blue') ? '#60a5fa' : 
                                                     service.accentColor.includes('purple') ? '#a855f7' : 
                                                     service.accentColor.includes('green') ? '#34d399' : '#60a5fa'}40)`
                      }} />
                      
                      {/* Sweeping light */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full" 
                           style={{ 
                             animation: 'sweep 3s ease-in-out infinite',
                             animationDelay: `${index * 0.5}s`
                           }} />
                      
                      {/* Ambient glow */}
                      <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${service.accentColor} opacity-10 transition-opacity duration-500 ease-out group-hover:opacity-15`} />
                    </div>
                  </div>
                  
                  {/* Floating accents */}
                  <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br ${service.accentColor} opacity-80 shadow-lg transition-all duration-700 ease-out group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:opacity-85`} />
                  <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br ${service.accentColor} opacity-75 shadow-lg transition-all duration-700 ease-out delay-75 group-hover:translate-y-0.5 group-hover:rotate-12 group-hover:opacity-80`} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnimatedServiceSection;