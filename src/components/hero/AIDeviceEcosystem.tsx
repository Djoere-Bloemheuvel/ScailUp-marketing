
import { Smartphone, Laptop, Monitor } from 'lucide-react';

const AIDeviceEcosystem = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Device ecosystem */}
      <div className="relative">
        {/* Central hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full blur-sm" />
        
        {/* Orbiting devices */}
        <div className="animate-spin" style={{ animationDuration: '20s' }}>
          <div className="w-40 h-40 relative">
            <Smartphone className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 text-blue-400" />
            <Laptop className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-400" />
            <Monitor className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDeviceEcosystem;
