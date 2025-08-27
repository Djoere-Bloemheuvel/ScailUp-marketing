import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, Clock, Building2, Users, Zap, CheckCircle, Star, ChevronDown, Target, Wrench, TrendingUp, Cog, Play } from 'lucide-react';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyEmail: '',
    yourName: '',
    phoneNumber: '',
    country: '',
    companySize: '',
    primaryProductInterest: '',
    message: ''
  });

  const [dropdownStates, setDropdownStates] = useState({
    country: false,
    companySize: false,
    primaryProductInterest: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Stats and testimonial data
  const stats = [
    { metric: '10x sneller', description: 'lead opvolging en deal closing' },
    { metric: '95% minder werk', description: 'handmatige taken geautomatiseerd' }
  ];

  const testimonial = {
    quote: '"ScailUp maakt onze verkoopteams productiever en laat ons sneller naar de markt gaan."',
    company: 'TechCorp',
    companyLogo: '/techcorp-logo.png' // You can replace with actual logo
  };

  const countryOptions = [
    { value: 'nl', label: 'Nederland' },
    { value: 'be', label: 'België' },
    { value: 'de', label: 'Duitsland' },
    { value: 'other', label: 'Anders' }
  ];

  const companySizeOptions = [
    { value: '1-10', label: '1-10 medewerkers' },
    { value: '11-50', label: '11-50 medewerkers' },
    { value: '51-200', label: '51-200 medewerkers' },
    { value: '201-500', label: '201-500 medewerkers' },
    { value: '500+', label: '500+ medewerkers' }
  ];

  const productOptions = [
    { value: 'speed-to-lead', label: 'Speed to Lead' },
    { value: 'seal-the-deal', label: 'Seal the Deal' },
    { value: 'onboard-beyond', label: 'Onboard & Beyond' },
    { value: 'full-package', label: 'Volledig AI Agents pakket' },
    { value: 'custom', label: 'Custom AI Automatisering' }
  ];

  const toggleDropdown = (field: keyof typeof dropdownStates) => {
    setDropdownStates(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const selectOption = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setDropdownStates(prev => ({
      ...prev,
      [field]: false
    }));
  };

  const getDisplayLabel = (field: string, options: any[]) => {
    const selected = options.find(opt => opt.value === formData[field as keyof typeof formData]);
    return selected ? selected.label : '';
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative ambient">
      {/* Ambient Background Lights - Enhanced */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="backlight bg-blue-600" style={{ width: '400px', height: '400px', top: '5%', left: '8%' }}></div>
        <div className="backlight bg-purple-600" style={{ width: '360px', height: '360px', bottom: '10%', right: '12%' }}></div>
        <div className="backlight bg-blue-500 opacity-40" style={{ width: '480px', height: '480px', top: '35%', left: '35%' }}></div>
        {/* Additional top-right glow in marketing engine color */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-50 -z-10" style={{ filter: 'blur(70px)', top: '2%', right: '8%' }}></div>
        {/* Extra ambient lights for more atmosphere */}
        <div className="backlight bg-cyan-500 opacity-25" style={{ width: '300px', height: '300px', top: '70%', left: '20%' }}></div>
        <div className="backlight bg-indigo-600 opacity-30" style={{ width: '250px', height: '250px', top: '20%', right: '40%' }}></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        {/* 3D Container with enhanced effects */}
        <div className="w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-black border border-gray-800 rounded-2xl p-6 md:p-8 xl:p-12 relative shadow-[0_20px_40px_rgba(0,0,0,0.8),0_8px_16px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl" style={{ 
          transform: 'perspective(1000px) rotateX(1deg)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.8), 0 10px 20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)'
        }}>
          {/* Vertical border in the middle - extends full height of container */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start relative">
            
            {/* Mobile: Form first, Desktop: Content first */}
            <div className="w-full lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-4">
              {/* Bedrijf Email */}
              <div className="space-y-3">
                <label className="block text-white text-base lg:text-lg font-semibold tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  Zakelijk e-mailadres
                </label>
                <div className="border border-gray-700 rounded-xl px-4 py-4 bg-black">
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail || ''}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none text-base"
                    placeholder="naam@bedrijf.nl"
                    required
                  />
                </div>
              </div>

              {/* Je naam */}
              <div className="space-y-3">
                <label className="block text-white text-base lg:text-lg font-semibold tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  Je naam
                </label>
                <div className="border border-gray-700 rounded-xl px-4 py-4 bg-black">
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName || ''}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none text-base"
                    placeholder="Jouw naam"
                  />
                </div>
              </div>
              
              {/* Telefoonnummer */}
              <div className="space-y-3">
                <label className="block text-white text-base lg:text-lg font-semibold tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  Telefoonnummer
                </label>
                <div className="border border-gray-700 rounded-xl px-4 py-4 bg-black">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none text-base"
                    placeholder="(020) 123-4567"
                  />
                </div>
              </div>
              
              
              {/* Message Block */}
              <div className="space-y-3">
                <label htmlFor="message" className="block text-base lg:text-lg font-semibold text-white tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  Hoe kunnen we helpen?
                </label>
                <div className="border border-gray-800 rounded-xl p-6 bg-black/50">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-0 py-2 bg-transparent border-none text-white placeholder-gray-500 focus:outline-none resize-none text-base"
                    placeholder="Vertel ons over je bedrijfsbehoeften"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 text-base font-medium rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white transition-all duration-200 shadow-lg mt-12"
              >
                Praat met ScailUp
              </button>
              </form>
            </div>

            {/* Mobile: Content second, Desktop: Content first */}
            <div className="space-y-8 lg:order-1 lg:bg-black/30 lg:pr-6 lg:pl-3 lg:pt-3 lg:pb-6 xl:pr-8 xl:pl-4 xl:pt-4 xl:pb-8 lg:rounded-2xl lg:backdrop-blur-sm">
              {/* Header Block */}
              <div className="pl-0 pr-6 pt-0 pb-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-tight mb-2 whitespace-nowrap" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                  Laten we bouwen.
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-400 font-light mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif' }}>
                  Laat ons vrijblijvend contact met je opnemen
                </p>
                
                {/* Value Propositions - 5 bullets with icons */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <Target className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-medium text-base lg:text-lg mb-1">Ontdek je AI-kansen.</h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                        Concreet advies. Directe stappen vooruit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <Wrench className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-medium text-base lg:text-lg mb-1">Bouw met AI.</h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                        Zie hoe Buildrs jouw workflow versnelt.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-medium text-base lg:text-lg mb-1">Van idee naar impact.</h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                        Wij maken AI praktisch toepasbaar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <Cog className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-medium text-base lg:text-lg mb-1">Jouw proces. Slimmer.</h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                        AI-oplossingen die direct werken.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <Play className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-medium text-base lg:text-lg mb-1">Begin je AI-transformatie.</h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                        Heldere inzichten. Concrete acties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;