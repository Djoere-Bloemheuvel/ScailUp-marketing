
import { Brain, Database, Target } from 'lucide-react';

const AutomationThreeFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'Strategische AI-planning',
      subtitle: 'Van visie naar concrete roadmap voor succesvolle implementatie',
      accent: 'from-blue-500/15 via-blue-600/20 to-indigo-500/15',
      borderGlow: 'border-blue-400/30',
      iconGlow: 'text-blue-300'
    },
    {
      icon: Database,
      title: 'Data-gedreven inzichten',
      subtitle: 'Transformeer ruwe data naar waardevolle business intelligence',
      accent: 'from-purple-500/15 via-purple-600/20 to-pink-500/15',
      borderGlow: 'border-purple-400/30',
      iconGlow: 'text-purple-300'
    },
    {
      icon: Target,
      title: 'Gerichte procesverbetering',
      subtitle: 'Identificeer en automatiseer de processen met de grootste impact',
      accent: 'from-indigo-500/15 via-blue-600/20 to-cyan-500/15',
      borderGlow: 'border-indigo-400/30',
      iconGlow: 'text-indigo-300'
    }
  ];

  return (
    <div className="space-y-4 max-w-xl">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="group flex items-start space-x-4 transition-all duration-300 hover:transform hover:scale-[1.01]"
        >
          {/* Simplified icon container */}
          <div className="flex-shrink-0 relative">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.accent} border ${feature.borderGlow} backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-all duration-300`}>
              <feature.icon className={`w-6 h-6 ${feature.iconGlow} transition-all duration-300`} />
            </div>
          </div>

          {/* Simplified content */}
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>
            
            <p className="text-sm text-premium-silver/70 leading-relaxed font-light">
              {feature.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutomationThreeFeatures;
