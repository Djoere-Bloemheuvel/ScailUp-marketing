
import { Clock, HandHeart, Layers, TrendingUp, LucideIcon } from 'lucide-react';

interface PrincipleVisualProps {
  id: number;
  icon: LucideIcon;
  color: string;
  isHovered: boolean;
}

const PrincipleVisual = ({ id, icon: Icon, color, isHovered }: PrincipleVisualProps) => {
  if (id === 1) {
    // Speed Visual
    return (
      <div className="relative w-20 h-20 mx-auto">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-slate-400/30 to-blue-400/30 transition-all duration-500 ${isHovered ? 'scale-110 from-slate-400/50 to-blue-400/50' : ''}`} />
        <div className={`absolute inset-2 rounded-full bg-gradient-to-r from-slate-400/40 to-blue-400/40 transition-all duration-300 ${isHovered ? 'scale-105 from-slate-400/60 to-blue-400/60' : ''}`} />
        <div className={`absolute inset-4 rounded-full bg-gradient-to-r from-slate-400/50 to-blue-400/50 transition-all duration-200 ${isHovered ? 'scale-110 from-slate-400/70 to-blue-400/70' : ''}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-6 h-6 text-blue-200 transition-all duration-300 ${isHovered ? 'scale-110 text-blue-100' : ''}`} />
        </div>
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-spin" style={{ animationDuration: '2s' }} />
        )}
      </div>
    );
  }

  if (id === 2) {
    // Ownership Visual
    return (
      <div className="relative w-20 h-20 mx-auto">
        <div className={`absolute left-1 top-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 transition-all duration-500 ${isHovered ? 'translate-x-1 scale-105 from-blue-500/60 to-purple-500/60' : ''}`} />
        <div className={`absolute right-1 top-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 transition-all duration-500 ${isHovered ? '-translate-x-1 scale-105 from-purple-500/60 to-blue-500/60' : ''}`} />
        <div className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500/60 to-purple-500/60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? 'scale-110 from-blue-400/80 to-purple-400/80' : ''}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-5 h-5 text-purple-200 transition-all duration-300 ${isHovered ? 'scale-110 text-purple-100' : ''}`} />
        </div>
        <div className={`absolute inset-0 rounded-full border border-purple-400/30 transition-all duration-500 ${isHovered ? 'border-purple-300/50' : ''}`} />
      </div>
    );
  }

  if (id === 3) {
    // Design Visual
    return (
      <div className="relative w-20 h-20 mx-auto">
        <div className={`absolute top-1 left-3 w-3 h-3 rounded bg-gradient-to-br from-purple-400/50 to-pink-400/50 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 from-purple-400/70 to-pink-400/70' : ''}`} />
        <div className={`absolute top-1 right-3 w-3 h-3 rounded bg-gradient-to-br from-pink-400/50 to-purple-400/50 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110 from-pink-400/70 to-purple-400/70' : ''}`} />
        <div className={`absolute bottom-1 left-3 w-3 h-3 rounded bg-gradient-to-br from-purple-400/50 to-pink-400/50 transition-all duration-500 ${isHovered ? '-rotate-12 scale-110 from-purple-400/70 to-pink-400/70' : ''}`} />
        <div className={`absolute bottom-1 right-3 w-3 h-3 rounded bg-gradient-to-br from-pink-400/50 to-purple-400/50 transition-all duration-500 ${isHovered ? 'rotate-12 scale-110 from-pink-400/70 to-purple-400/70' : ''}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-6 h-6 text-purple-200 transition-all duration-300 ${isHovered ? 'scale-110 text-pink-200' : ''}`} />
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" style={{ animation: 'sweep 1.5s ease-in-out infinite' }} />
        )}
      </div>
    );
  }

  if (id === 4) {
    // ROI Visual
    return (
      <div className="relative w-20 h-20 mx-auto">
        <div className="absolute bottom-4 left-2 flex items-end space-x-0.5">
          <div className={`w-1.5 h-3 bg-gradient-to-t from-slate-300/50 to-white/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-4 from-slate-300/70 to-white/70' : ''}`} />
          <div className={`w-1.5 h-4 bg-gradient-to-t from-slate-300/50 to-white/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-5 from-slate-300/70 to-white/70' : ''}`} />
          <div className={`w-1.5 h-5 bg-gradient-to-t from-slate-300/50 to-white/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-6 from-slate-300/70 to-white/70' : ''}`} />
          <div className={`w-1.5 h-6 bg-gradient-to-t from-slate-300/50 to-white/50 rounded-sm transition-all duration-500 ${isHovered ? 'h-7 from-slate-300/70 to-white/70' : ''}`} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-6 h-6 text-slate-100 transition-all duration-300 ${isHovered ? 'scale-110 text-white' : ''}`} />
        </div>
        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100 from-white/10' : 'opacity-60'}`} />
      </div>
    );
  }

  return null;
};

export default PrincipleVisual;
