
import { Brain, Database, Target } from 'lucide-react';

const AutomationThreeFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'Strategische AI-planning',
      subtitle: 'Van visie naar concrete roadmap voor succesvolle implementatie',
      accent: 'from-blue-500/20 via-blue-600/30 to-indigo-500/20',
      borderGlow: 'border-blue-400/40',
      iconGlow: 'text-blue-300'
    },
    {
      icon: Database,
      title: 'Data-gedreven inzichten',
      subtitle: 'Transformeer ruwe data naar waardevolle business intelligence',
      accent: 'from-purple-500/20 via-purple-600/30 to-pink-500/20',
      borderGlow: 'border-purple-400/40',
      iconGlow: 'text-purple-300'
    },
    {
      icon: Target,
      title: 'Gerichte procesverbetering',
      subtitle: 'Identificeer en automatiseer de processen met de grootste impact',
      accent: 'from-indigo-500/20 via-blue-600/30 to-cyan-500/20',
      borderGlow: 'border-indigo-400/40',
      iconGlow: 'text-indigo-300'
    }
  ];

  return (
    <div className="space-y-8 max-w-2xl">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group flex items-start space-x-6 transition-all duration-500 hover:transform hover:scale-[1.02]"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Icon container with premium styling */}
          <div className="flex-shrink-0 relative">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.accent} border ${feature.borderGlow} backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
              <feature.icon className={`w-8 h-8 ${feature.iconGlow} drop-shadow-lg transition-all duration-500 group-hover:rotate-6`} />
            </div>
            
            {/* Ambient glow behind icon */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500 -z-10 scale-110`} />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <h3 className={`text-xl lg:text-2xl font-semibold text-white transition-all duration-300 group-hover:${feature.iconGlow}`}>
              {feature.title}
            </h3>
            
            <p className="text-premium-silver/80 leading-relaxed font-light group-hover:text-premium-silver transition-colors duration-300">
              {feature.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutomationThreeFeatures;
