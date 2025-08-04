
import { LucideIcon } from 'lucide-react';

interface Principle {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  glowColor: string;
  hoverGlow: string;
}

interface PrincipleCardProps {
  principle: Principle;
  delay: string;
}

const PrincipleCard = ({ principle }: PrincipleCardProps) => {
  const Icon = principle.icon;

  return (
    <div className="group relative h-full">
      <div className={`
        h-full p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/10 
        backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] 
        transition-all duration-500 hover:border-white/20 hover:scale-[1.02]
        shadow-2xl ${principle.glowColor} ${principle.hoverGlow}
        flex flex-col justify-between min-h-[280px]
      `}>
        {/* Icon */}
        <div className="flex-shrink-0 mb-6">
          <div className={`
            w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${principle.color} 
            flex items-center justify-center shadow-lg
            transition-transform duration-300 group-hover:scale-110
          `}>
            <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white drop-shadow-sm" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4 leading-tight">
            {principle.title}
          </h3>
          <p className="text-white/70 text-base lg:text-lg font-light leading-relaxed">
            {principle.subtitle}
          </p>
        </div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
};

export default PrincipleCard;
