

const PremiumOrbs = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large ambient orbs */}
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Medium floating orbs */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-radial from-emerald-500/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default PremiumOrbs;
