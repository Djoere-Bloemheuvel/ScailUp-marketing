
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
      className="group relative opacity-0 animate-fade-in cursor-pointer h-full"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced glassmorphism container with premium styling */}
      <div className={`relative h-full p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] border border-white/20 backdrop-blur-xl transition-all duration-700 hover:border-white/30 hover:-translate-y-3 hover:scale-[1.02] shadow-2xl ${principle.glowColor} ${principle.hoverGlow} hover:shadow-3xl overflow-hidden flex flex-col justify-center items-center text-center min-h-[320px]`}>
        
        {/* Premium inner glow effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02] opacity-60" />
        <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-40" />
        
        {/* Enhanced hover shimmer effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-full group-hover:translate-x-full" />
        
        {/* Premium scan lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
          {/* Enhanced visual element */}
          <div className="transform transition-all duration-500 group-hover:scale-110">
            <PrincipleVisual 
              id={principle.id} 
              icon={principle.icon} 
              color={principle.color} 
              isHovered={isHovered} 
            />
          </div>
          
          {/* Premium typography with enhanced spacing */}
          <div className="space-y-4 max-w-sm">
            <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-white transition-colors duration-500">
              {principle.title}
            </h3>
            
            <p className="text-white/80 leading-relaxed text-sm lg:text-base font-light tracking-wide group-hover:text-white/95 transition-colors duration-500">
              {principle.subtitle}
            </p>
          </div>
        </div>

        {/* Subtle floating accent elements */}
        <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-white/40 to-transparent animate-pulse opacity-60" />
        <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-gradient-to-br from-white/30 to-transparent animate-pulse opacity-50" style={{ animationDelay: '1s' }} />
        
        {/* Enhanced edge lighting */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 opacity-40 group-hover:opacity-0 transition-opacity duration-700" />
      </div>
    </div>
  );
};

export default PrincipleCard;
