
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
      {/* Apple-inspired card container */}
      <div className="relative h-full p-10 lg:p-12 rounded-[32px] bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] border border-white/[0.15] backdrop-blur-2xl transition-all duration-700 hover:border-white/25 hover:-translate-y-2 hover:scale-[1.01] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col justify-center items-center text-center min-h-[380px]">
        
        {/* Subtle inner gradient overlay */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] opacity-70" />
        
        {/* Apple-style top highlight */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Minimal hover effect */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-10">
          {/* Clean visual element */}
          <div className="transform transition-all duration-500 group-hover:scale-105">
            <PrincipleVisual 
              id={principle.id} 
              icon={principle.icon} 
              color={principle.color} 
              isHovered={isHovered} 
            />
          </div>
          
          {/* Apple-style typography */}
          <div className="space-y-5 max-w-sm">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-snug tracking-[-0.02em] group-hover:text-white transition-colors duration-500">
              {principle.title}
            </h3>
            
            <p className="text-white/75 leading-relaxed text-base lg:text-lg font-normal tracking-normal group-hover:text-white/90 transition-colors duration-500">
              {principle.subtitle}
            </p>
          </div>
        </div>

        {/* Minimal corner accent */}
        <div className="absolute top-6 right-6 w-1 h-1 rounded-full bg-white/20 opacity-60 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Clean bottom border */}
        <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      {/* Apple-style floating shadow */}
      <div className="absolute inset-2 rounded-[28px] bg-black/20 opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10 blur-xl transform translate-y-4 group-hover:translate-y-8" />
    </div>
  );
};

export default PrincipleCard;
