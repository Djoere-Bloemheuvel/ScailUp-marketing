
import React from 'react';

const ContactModalHeader = () => {
  return (
    <header className="mb-12 text-center relative">
      {/* Apple-style premium typography */}
      <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.9]">
        Laten we
        <span className="block mt-2 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent font-normal">
          samen bouwen
        </span>
      </h1>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed">
          Transformeer uw bedrijf met AI-oplossingen die echt werken.
        </p>
        
        <p className="text-lg text-white/60 font-light leading-relaxed">
          Vertel ons over uw uitdagingen en ontdek hoe wij uw AI-potentieel kunnen realiseren.
        </p>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </header>
  );
};

export default ContactModalHeader;
