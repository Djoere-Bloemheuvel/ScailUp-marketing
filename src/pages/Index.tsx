
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Workflow from '@/components/Workflow';
import Showcase from '@/components/Showcase';
import Target from '@/components/Target';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollHeader from '@/components/ScrollHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-premium-black">
      <ScrollHeader />
      <Hero />
      <Services />
      <Approach />
      <Workflow />
      <Showcase />
      <Target />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
