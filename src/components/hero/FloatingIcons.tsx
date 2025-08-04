
import { Bot, Zap, Shield, Cpu } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Bot, position: "top-1/4 left-1/4", delay: "0s" },
    { Icon: Zap, position: "top-1/3 right-1/4", delay: "1s" },
    { Icon: Shield, position: "bottom-1/3 left-1/3", delay: "2s" },
    { Icon: Cpu, position: "bottom-1/4 right-1/3", delay: "3s" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, position, delay }, index) => (
        <div key={index} className={`absolute ${position} animate-pulse`} style={{ animationDelay: delay }}>
          <Icon className="w-6 h-6 text-blue-400/30" />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
