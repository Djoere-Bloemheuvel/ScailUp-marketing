
import { Clock, HandHeart, Layers, TrendingUp, LucideIcon } from 'lucide-react';

interface PrincipleVisualProps {
  id: number;
  icon: LucideIcon;
  color: string;
  isHovered: boolean;
}

const PrincipleVisual = ({ id, icon: Icon, color, isHovered }: PrincipleVisualProps) => {
  if (id === 1) {
    // Speed Visual - Enhanced with premium styling
    return (
      <div className="relative w-24 h-24 mx-auto">
        {/* Multi-layered rotating rings */}
        <div className={`absolute inset-0 rounded-full border-2 border-blue-400/40 transition-all duration-700 ${isHovered ? 'scale-125 border-blue-400/60 rotate-180' : ''}`} />
        <div className={`absolute inset-2 rounded-full border border-cyan-400/30 transition-all duration-500 ${isHovered ? 'scale-110 border-cyan-400/50 -rotate-90' : ''}`} />
        <div className={`absolute inset-4 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 transition-all duration-300 ${isHovered ? 'scale-105 from-blue-400/40 to-cyan-400/40' : ''}`} />
        
        {/* Central icon with enhanced glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-8 h-8 text-blue-300 transition-all duration-300 ${isHovered ? 'scale-110 text-blue-200' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '12px' : '8px'} rgba(59, 130, 246, 0.6))`
          }} />
        </div>
        
        {/* Animated speed lines */}
        {isHovered && (
          <>
            <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent transform -translate-y-1/2 animate-pulse" />
            <div className="absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-l from-blue-400/60 to-transparent transform -translate-y-1/2 animate-pulse" />
          </>
        )}
      </div>
    );
  }

  if (id === 2) {
    // Ownership Visual - Enhanced connection design
    return (
      <div className="relative w-24 h-24 mx-auto">
        {/* Interconnected nodes */}
        <div className={`absolute left-2 top-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/50 to-blue-500/50 border border-purple-400/60 transition-all duration-500 ${isHovered ? 'translate-x-1 scale-110 from-purple-500/70 to-blue-500/70' : ''}`} />
        <div className={`absolute right-2 top-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/50 to-purple-500/50 border border-blue-400/60 transition-all duration-500 ${isHovered ? '-translate-x-1 scale-110 from-blue-500/70 to-purple-500/70' : ''}`} />
        
        {/* Enhanced connection lines */}
        <div className={`absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500/80 to-blue-500/80 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isHovered ? 'scale-110 from-purple-400/90 to-blue-400/90' : ''}`} />
        <div className={`absolute top-1/2 left-1/2 w-0.5 h-8 bg-gradient-to-b from-purple-500/60 to-blue-500/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isHovered ? 'scale-110 from-purple-400/80 to-blue-400/80' : ''}`} />
        
        {/* Central icon with enhanced styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-7 h-7 text-purple-200 transition-all duration-300 ${isHovered ? 'scale-110 text-purple-100' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '10px' : '6px'} rgba(168, 85, 247, 0.5))`
          }} />
        </div>
        
        {/* Pulsing partnership ring */}
        <div className={`absolute inset-0 rounded-full border border-purple-400/30 transition-all duration-700 ${isHovered ? 'border-purple-300/60 scale-105' : ''}`} />
      </div>
    );
  }

  if (id === 3) {
    // Design Visual - Enhanced layered design
    return (
      <div className="relative w-24 h-24 mx-auto">
        {/* Enhanced design layers */}
        <div className={`absolute top-2 left-4 w-4 h-4 rounded-lg bg-gradient-to-br from-purple-400/60 to-pink-400/60 border border-purple-300/40 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 from-purple-400/80 to-pink-400/80' : ''}`} />
        <div className={`absolute top-2 right-4 w-4 h-4 rounded-lg bg-gradient-to-br from-pink-400/60 to-purple-400/60 border border-pink-300/40 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110 from-pink-400/80 to-purple-400/80' : ''}`} />
        <div className={`absolute bottom-2 left-4 w-4 h-4 rounded-lg bg-gradient-to-br from-purple-400/60 to-pink-400/60 border border-purple-300/40 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110 from-purple-400/80 to-pink-400/80' : ''}`} />
        <div className={`absolute bottom-2 right-4 w-4 h-4 rounded-lg bg-gradient-to-br from-pink-400/60 to-purple-400/60 border border-pink-300/40 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 from-pink-400/80 to-purple-400/80' : ''}`} />
        
        {/* Central design icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-8 h-8 text-purple-200 transition-all duration-300 ${isHovered ? 'scale-110 text-pink-200' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '10px' : '6px'} rgba(168, 85, 247, 0.5))`
          }} />
        </div>
        
        {/* Enhanced sweeping design light */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-sweep" />
        )}
      </div>
    );
  }

  if (id === 4) {
    // ROI Visual - Enhanced growth chart
    return (
      <div className="relative w-24 h-24 mx-auto">
        {/* Enhanced growth bars */}
        <div className="absolute bottom-6 left-3 flex items-end space-x-1">
          <div className={`w-2 h-4 bg-gradient-to-t from-emerald-400/60 to-teal-400/60 rounded-sm border border-emerald-300/40 transition-all duration-500 ${isHovered ? 'h-5 from-emerald-400/80 to-teal-400/80 scale-105' : ''}`} />
          <div className={`w-2 h-5 bg-gradient-to-t from-emerald-400/60 to-teal-400/60 rounded-sm border border-emerald-300/40 transition-all duration-500 ${isHovered ? 'h-6 from-emerald-400/80 to-teal-400/80 scale-105' : ''}`} />
          <div className={`w-2 h-6 bg-gradient-to-t from-emerald-400/60 to-teal-400/60 rounded-sm border border-emerald-300/40 transition-all duration-500 ${isHovered ? 'h-7 from-emerald-400/80 to-teal-400/80 scale-105' : ''}`} />
          <div className={`w-2 h-7 bg-gradient-to-t from-emerald-400/60 to-teal-400/60 rounded-sm border border-emerald-300/40 transition-all duration-500 ${isHovered ? 'h-8 from-emerald-400/80 to-teal-400/80 scale-105' : ''}`} />
        </div>
        
        {/* Growth trend arrow */}
        {isHovered && (
          <div className="absolute top-4 right-3 w-6 h-6 border-2 border-teal-400/60 border-b-0 border-l-0 rotate-45 animate-pulse" />
        )}
        
        {/* Central ROI icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-8 h-8 text-emerald-200 transition-all duration-300 ${isHovered ? 'scale-110 text-teal-200' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '10px' : '6px'} rgba(16, 185, 129, 0.5))`
          }} />
        </div>
        
        {/* Premium ambient glow */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/10 to-teal-400/10 transition-opacity duration-500 ${isHovered ? 'opacity-100 from-emerald-400/20 to-teal-400/20' : 'opacity-60'}`} />
      </div>
    );
  }

  return null;
};

export default PrincipleVisual;
