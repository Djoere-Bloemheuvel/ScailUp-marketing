
import WorkflowStep from './WorkflowStep';

const Workflow = () => {
  const steps = [
    {
      number: "1",
      title: "Strategie & Analyse",
      subtitle: "Samen brengen we je businessdoelen, kansen en AI-potentieel in kaart."
    },
    {
      number: "2", 
      title: "Ontwerp & Bouw",
      subtitle: "We ontwerpen en bouwen een eerste versie binnen 2–4 weken."
    },
    {
      number: "3",
      title: "Optimalisatie & Schaling", 
      subtitle: "Samen perfectioneren we het product en koppelen het aan je systemen."
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-4 relative overflow-hidden bg-black">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/6 w-72 lg:w-96 h-72 lg:h-96 bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/8 w-64 lg:w-80 h-64 lg:h-80 bg-gradient-radial from-white/2 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 apple-fade-in apple-stagger-2 tracking-tight">
            Onze werkwijze
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed apple-fade-in apple-stagger-3 tracking-wide">
            In drie heldere stappen van idee naar impact.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <WorkflowStep 
                step={step} 
                delay={`${0.1 + index * 0.15}s`} 
              />
              
              {/* Remove connecting line from last step */}
              {index === steps.length - 1 && (
                <style>{`
                  .group:last-child .absolute.top-8.-right-1\\/2 {
                    display: none;
                  }
                `}</style>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
