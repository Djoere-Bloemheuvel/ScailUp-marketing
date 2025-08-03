
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Showcase from '@/components/Showcase';
import Target from '@/components/Target';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-premium-black">
      <Hero />
      <Services />
      <Approach />
      <Showcase />
      <Target />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
