

const AppleStyleAnimations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Smooth floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" style={{
        animation: 'float 6s ease-in-out infinite',
        animationDelay: '0s'
      }} />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{
        animation: 'float 8s ease-in-out infinite',
        animationDelay: '2s'
      }} />
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse" style={{
        animation: 'float 7s ease-in-out infinite',
        animationDelay: '4s'
      }} />
    </div>
  );
};

export default AppleStyleAnimations;
