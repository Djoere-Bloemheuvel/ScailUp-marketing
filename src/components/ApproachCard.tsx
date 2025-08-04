
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface Principle {
  id: number;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  delay: string;
}

interface ApproachCardProps {
  principle: Principle;
}

const ApproachCard = ({ principle }: ApproachCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = principle.icon;

  return (
    <div 
      className="group relative cursor-pointer transition-all duration-500 ease-out"
      style={{ 
        animationDelay: principle.delay,
        animation: 'fadeInUp 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(30px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full p-8 lg:p-12 rounded-3xl bg-transparent backdrop-blur-sm transition-all duration-700 ease-out group-hover:scale-[1.02] overflow-hidden flex flex-col justify-center items-center text-center min-h-[320px] lg:min-h-[360px]">
        
        {/* Subtle hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        {/* Premium shimmer effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-full group-hover:translate-x-full" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
          {/* Icon with Apple-style glow */}
          <div className="transform transition-all duration-500 group-hover:scale-110">
            <div className="relative w-16 h-16 lg:w-20 lg:h-20 mx-auto">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 transition-all duration-500 ${isHovered ? 'scale-110 from-white/20 to-white/10' : ''}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className={`w-8 h-8 lg:w-10 lg:h-10 text-white transition-all duration-500 ${isHovered ? 'scale-110 text-white drop-shadow-lg' : 'text-white/90'}`} />
              </div>
              {/* Subtle outer glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-white/5 blur-md transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </div>
          
          {/* Typography with Apple precision */}
          <div className="space-y-4 max-w-md">
            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight group-hover:text-white transition-colors duration-500">
              {principle.title}
            </h3>
            
            <p className="text-[#aaaaaa] leading-relaxed text-base lg:text-lg font-light tracking-wide group-hover:text-[#cccccc] transition-colors duration-500">
              {principle.subtitle}
            </p>
          </div>
        </div>

        {/* Ultra-subtle border that appears on hover */}
        <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/[0.08] transition-all duration-700" />
      </div>
    </div>
  );
};

export default ApproachCard;
