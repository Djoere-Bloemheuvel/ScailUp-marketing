
import { Clock, HandHeart, Layers, TrendingUp, LucideIcon } from 'lucide-react';

interface PrincipleVisualProps {
  id: number;
  icon: LucideIcon;
  color: string;
  isHovered: boolean;
}

const PrincipleVisual = ({ id, icon: Icon, color, isHovered }: PrincipleVisualProps) => {
  if (id === 1) {
    // Speed Visual - Apple-inspired clean design
    return (
      <div className="relative w-28 h-28 mx-auto">
        {/* Clean circular container */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-blue-400/30 transition-all duration-700 ${isHovered ? 'scale-110 border-blue-400/50 rotate-90' : ''}`} />
        <div className={`absolute inset-3 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 transition-all duration-500 ${isHovered ? 'scale-105' : ''}`} />
        
        {/* Central icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-10 h-10 text-blue-300 transition-all duration-500 ${isHovered ? 'scale-110 text-blue-200' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '16px' : '8px'} rgba(59, 130, 246, 0.4))`
          }} />
        </div>
        
        {/* Subtle speed indicators */}
        {isHovered && (
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent transform -translate-y-1/2 animate-pulse" />
            <div className="absolute top-1/2 right-0 w-4 h-0.5 bg-gradient-to-l from-blue-400/50 to-transparent transform -translate-y-1/2 animate-pulse" />
          </div>
        )}
      </div>
    );
  }

  if (id === 2) {
    // Ownership Visual - Clean connection design
    return (
      <div className="relative w-28 h-28 mx-auto">
        {/* Connection nodes */}
        <div className={`absolute left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-purple-400/40 to-blue-400/40 border border-purple-400/50 transition-all duration-500 ${isHovered ? 'scale-110 from-purple-400/60 to-blue-400/60' : ''}`} />
        <div className={`absolute right-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 border border-blue-400/50 transition-all duration-500 ${isHovered ? 'scale-110 from-blue-400/60 to-purple-400/60' : ''}`} />
        
        {/* Clean connection line */}
        <div className={`absolute top-1/2 left-1/2 w-12 h-0.5 bg-gradient-to-r from-purple-400/60 to-blue-400/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isHovered ? 'scale-110' : ''}`} />
        
        {/* Central icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-9 h-9 text-purple-200 transition-all duration-500 ${isHovered ? 'scale-110 text-purple-100' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '12px' : '6px'} rgba(168, 85, 247, 0.4))`
          }} />
        </div>
        
        {/* Clean outer ring */}
        <div className={`absolute inset-0 rounded-full border border-purple-400/20 transition-all duration-700 ${isHovered ? 'border-purple-300/40 scale-105' : ''}`} />
      </div>
    );
  }

  if (id === 3) {
    // Design Visual - Apple-inspired layered design
    return (
      <div className="relative w-28 h-28 mx-auto">
        {/* Clean design elements */}
        <div className={`absolute top-4 left-6 w-3 h-3 rounded-md bg-gradient-to-br from-purple-400/50 to-pink-400/50 border border-purple-300/30 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
        <div className={`absolute top-4 right-6 w-3 h-3 rounded-md bg-gradient-to-br from-pink-400/50 to-purple-400/50 border border-pink-300/30 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110' : ''}`} />
        <div className={`absolute bottom-4 left-6 w-3 h-3 rounded-md bg-gradient-to-br from-purple-400/50 to-pink-400/50 border border-purple-300/30 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110' : ''}`} />
        <div className={`absolute bottom-4 right-6 w-3 h-3 rounded-md bg-gradient-to-br from-pink-400/50 to-purple-400/50 border border-pink-300/30 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
        
        {/* Central design icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-10 h-10 text-purple-200 transition-all duration-500 ${isHovered ? 'scale-110 text-pink-200' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '12px' : '6px'} rgba(168, 85, 247, 0.4))`
          }} />
        </div>
      </div>
    );
  }

  if (id === 4) {
    // ROI Visual - Clean growth visualization
    return (
      <div className="relative w-28 h-28 mx-auto">
        {/* Clean growth bars */}
        <div className="absolute bottom-8 left-6 flex items-end space-x-1">
          <div className={`w-2 h-4 bg-gradient-to-t from-emerald-400/50 to-teal-400/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-5 scale-105' : ''}`} />
          <div className={`w-2 h-5 bg-gradient-to-t from-emerald-400/50 to-teal-400/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-6 scale-105' : ''}`} />
          <div className={`w-2 h-6 bg-gradient-to-t from-emerald-400/50 to-teal-400/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-7 scale-105' : ''}`} />
          <div className={`w-2 h-7 bg-gradient-to-t from-emerald-400/50 to-teal-400/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-8 scale-105' : ''}`} />
        </div>
        
        {/* Clean trend arrow */}
        {isHovered && (
          <div className="absolute top-6 right-6 w-4 h-4 border-2 border-teal-400/60 border-b-0 border-l-0 rotate-45 transition-all duration-300" />
        )}
        
        {/* Central ROI icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-10 h-10 text-emerald-200 transition-all duration-500 ${isHovered ? 'scale-110 text-teal-200' : ''}`} style={{
            filter: `drop-shadow(0 0 ${isHovered ? '12px' : '6px'} rgba(16, 185, 129, 0.4))`
          }} />
        </div>
        
        {/* Subtle ambient glow */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/5 to-teal-400/5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
      </div>
    );
  }

  return null;
};

export default PrincipleVisual;
