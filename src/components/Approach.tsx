
import AppleTimelineUnified from './AppleTimelineUnified';
import AppleNebulaBackground from './AppleNebulaBackground';
import HorizontalLightFlare from './HorizontalLightFlare';
import HorizontalLightFlareAnimations from './HorizontalLightFlareAnimations';

const Approach = () => {
  return (
    <section className="relative py-20 lg:py-28 pb-32 lg:pb-40 px-4 overflow-hidden bg-black">
      {/* Include light flare animations */}
      <HorizontalLightFlareAnimations />
      
      {/* Enhanced nebula background */}
      <AppleNebulaBackground />
      
      {/* Content container */}
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Unified Apple-style timeline with single animation sequence */}
        <AppleTimelineUnified />
      </div>

      {/* Horizontal light flare at bottom for section separation */}
      <HorizontalLightFlare position="bottom" className="-bottom-8" />
    </section>
  );
};

export default Approach;
