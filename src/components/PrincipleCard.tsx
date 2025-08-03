
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import PrincipleVisual from './PrincipleVisual';

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

const PrincipleCard = ({ principle, delay }: PrincipleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative apple-fade-in cursor-pointer h-full"
      style={{ animationDelay: delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-full p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:-translate-y-2 shadow-xl ${principle.glowColor} ${principle.hoverGlow} hover:shadow-2xl overflow-hidden flex flex-col justify-center items-center text-center min-h-[280px]`}>
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent" />
        
        {/* Hover shimmer effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
          {/* Visual element */}
          <div className="transform transition-all duration-300 group-hover:scale-105">
            <PrincipleVisual 
              id={principle.id} 
              icon={principle.icon} 
              color={principle.color} 
              isHovered={isHovered} 
            />
          </div>
          
          {/* Typography */}
          <div className="space-y-3 max-w-xs">
            <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-white transition-colors duration-300">
              {principle.title}
            </h3>
            
            <p className="text-white/70 leading-relaxed text-sm lg:text-base font-light tracking-wide group-hover:text-white/85 transition-colors duration-300">
              {principle.subtitle}
            </p>
          </div>
        </div>

        {/* Subtle idle glow */}
        <div className="absolute inset-0 rounded-2xl border border-white/5 opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default PrincipleCard;
