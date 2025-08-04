

const AppleStyleBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-blue-950/20 to-purple-950/30" />
      
      {/* Soft ambient glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
      
      {/* Central soft glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/3 via-purple-500/2 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default AppleStyleBackground;
