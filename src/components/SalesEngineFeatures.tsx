import { Target, UserCheck, TrendingUp } from 'lucide-react';
import ServiceSection from './ServiceSection';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SalesEngineFeatures = () => {
  const [isVisible, setIsVisible] = useState({
    0: false,
    1: false,
    2: false
  });

  useEffect(() => {
    // Simulate visibility for all services
    setIsVisible({ 0: true, 1: true, 2: true });
  }, []);

  // Sales Engine services using exact ServiceSection structure
  const services = [
    {
      id: 'lead-qualification',
      icon: Target,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Lead Qualification
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            AI Scoring & Qualification Agent
          </div>
        </div>
      ),
      subtitle: 'Van ruwe leads naar gekwalificeerde prospects',
      subtitleStyle: 'text-gray-300 font-bold tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Deze agent analyseert elke lead die binnenkomt en geeft automatisch een score gebaseerd op fit, intent en timing. Hij kwalificeeert prospects, categoriseert ze en zorgt ervoor dat alleen de beste leads doorgaan naar je sales team. Geen tijd meer verspillen aan slechte leads.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-emerald-900/20 to-black',
      accentColor: 'from-emerald-500 to-blue-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      number: '01',
      highlight: 'AI-gedreven lead scoring',
      metrics: 'Automatische kwalificatie'
    },
    {
      id: 'sales-follow-up',
      icon: UserCheck,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Sales Follow-up
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Nurturing & Conversion Agent
          </div>
        </div>
      ),
      subtitle: 'Van eerste contact naar gesloten deal',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Deze agent houdt prospects warm met slimme follow-up sequenties die gebaseerd zijn op gedrag en interesse. Hij stuurt op het juiste moment de juiste boodschap, plant automatisch herinnderingen en escaleert warme leads naar je sales team. Geen prospect valt meer tussen wal en schip.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-teal-900/20 to-black',
      accentColor: 'from-green-400 to-blue-500',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      number: '02',
      highlight: 'Intelligente nurturing flows',
      metrics: 'Tijdgebaseerde automatisering'
    },
    {
      id: 'pipeline-management',
      icon: TrendingUp,
      title: (
        <div>
          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-[1.1] tracking-[-0.02em] antialiased">
            Pipeline Management
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-[-0.01em] leading-[1.2] antialiased mt-1" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Deal Flow & Analytics Agent
          </div>
        </div>
      ),
      subtitle: 'Van chaotische pipeline naar voorspelbare revenue',
      subtitleStyle: 'text-white/95 font-light tracking-[-0.02em] leading-[1.2] antialiased',
      description: 'Deze agent houdt je hele sales pipeline in de gaten. Hij voorspelt welke deals gaan sluiten, identificeert bottlenecks en stuurt automatisch reminders voor follow-ups. Met real-time insights en forecasting weet je altijd precies waar je staat en wat je moet doen om je targets te halen.',
      descriptionStyle: 'text-premium-silver/85',
      background: 'from-black via-cyan-900/20 to-black',
      accentColor: 'from-green-500 to-blue-600',
      primaryButtonText: 'Lees meer',
      secondaryButtonText: 'Lees meer',
      number: '03',
      highlight: 'Predictive analytics',
      metrics: 'Revenue forecasting'
    }
  ];

  const cssStyles = `
    @keyframes sweep {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }

    /* Backlight positioning and animations */
    .backlight {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
      z-index: 1;
    }

    .backlight-left {
      top: 20%;
      left: 10%;
      width: 500px;
      height: 500px;
      animation: float-orbit 12s ease-in-out infinite, scale-pulse 8s ease-in-out infinite, wobble 18s ease-in-out infinite, glow-pulse 15s ease-in-out infinite;
    }

    .backlight-right {
      bottom: 20%;
      right: 10%;
      width: 600px;
      height: 600px;
      animation: float-smooth 14s ease-in-out infinite, scale-pulse 10s ease-in-out infinite, float-orbit 22s ease-in-out infinite reverse, wobble 28s ease-in-out infinite;
      animation-delay: 3s;
    }

    .backlight-center {
      top: 50%;
      right: 50%;
      width: 400px;
      height: 400px;
      transform: translateX(50%) translateY(-50%);
      animation: wobble 16s ease-in-out infinite, scale-pulse 9s ease-in-out infinite, float-smooth 20s ease-in-out infinite reverse, glow-pulse 25s ease-in-out infinite reverse;
      animation-delay: 1.5s;
    }

    @keyframes float-orbit {
      0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
      25% { transform: translateY(-20px) translateX(15px) rotate(1deg); }
      50% { transform: translateY(0px) translateX(30px) rotate(0deg); }
      75% { transform: translateY(20px) translateX(15px) rotate(-1deg); }
    }

    @keyframes float-smooth {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-30px) rotate(1deg); }
    }

    @keyframes scale-pulse {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.05); opacity: 0.5; }
    }

    @keyframes wobble {
      0%, 100% { transform: rotate(0deg) scale(1); }
      25% { transform: rotate(1deg) scale(1.02); }
      50% { transform: rotate(-1deg) scale(0.98); }
      75% { transform: rotate(0.5deg) scale(1.01); }
    }

    @keyframes glow-pulse {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.4; }
    }
  `;

  return (
    <section className="relative w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 ambient">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Ambient Background Lights - Sales Engine Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight backlight-left bg-green-500"></div>
        <div className="backlight backlight-right bg-blue-600"></div>
        <div className="backlight backlight-center bg-green-500 opacity-30"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32 px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
            Sales Engine
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Volledige AI-gedreven sales automatisering. Van prospect tot klant op de automatische piloot.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceSection
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesEngineFeatures;