import React from 'react';

const NewExperimentSection = () => {
  return (
    <section className="relative w-full h-[60vh] bg-black overflow-hidden">
      {/* Full width image */}
      <div className="w-[100vw] h-full">
        <img 
          src="/experiment-ai-visualization.png" 
          alt="AI Technology Visualization"
          className="w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>
    </section>
  );
};

export default NewExperimentSection;