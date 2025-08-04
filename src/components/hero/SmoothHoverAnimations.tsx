

const SmoothHoverAnimations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Subtle hover-reactive elements */}
      <div className="group-hover:scale-110 transition-transform duration-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400/20 rounded-full" />
      <div className="group-hover:scale-105 transition-transform duration-500 absolute top-1/4 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full" />
      <div className="group-hover:scale-110 transition-transform duration-600 absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400/25 rounded-full" />
    </div>
  );
};

export default SmoothHoverAnimations;
