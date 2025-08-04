
import { Bot } from 'lucide-react';

const AIRobotDevice = () => {
  return (
    <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-premium-gray/40 to-premium-black/60 border border-premium-silver/40 backdrop-blur-md flex items-center justify-center shadow-2xl">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
          <div className="w-full h-full rounded-2xl bg-premium-black flex items-center justify-center">
            <Bot className="w-14 h-14 text-white/90 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRobotDevice;
