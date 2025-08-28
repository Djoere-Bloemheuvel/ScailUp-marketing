import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const ScailUpFooter = () => {
  const handleContactClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = '/contact';
  };

  const handleEmailClick = () => {
    if (typeof window === 'undefined') return;
    window.location.href = 'mailto:hello@buildrs.nl';
  };

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Lead Engine', href: '/lead-engine' },
        { label: 'AI Agents', href: '/agents-automations' },
        { label: 'Automations', href: '/agents-automations' },
        { label: 'Lead Database', href: '/lead-engine/lead-database' }
      ]
    },
    {
      title: 'Oplossingen',
      links: [
        { label: 'Marketing', href: '/marketing' },
        { label: 'Sales', href: '/sales' },
        { label: 'B2B SaaS', href: '/saas' },
        { label: 'Enterprise', href: '/enterprise' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Kenniscentrum', href: '/kenniscentrum' },
        { label: 'Docs', href: '/docs' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Support', href: '/support' }
      ]
    }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center hover:opacity-80 transition-opacity relative"
              >
                {/* Subtle backlight glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 rounded-lg blur-lg -z-10 opacity-60"></div>
                
                <span className="text-white font-bold text-lg tracking-widest uppercase relative z-10">
                  BUILDRS
                </span>
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              AI-gedreven outbound platform dat 24/7 leads identificeert, personaliseert en meetings boekt voor jouw bedrijf.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <button
                onClick={handleEmailClick}
                className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 mr-3 group-hover:text-blue-400 transition-colors" />
                hello@buildrs.nl
              </button>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-3" />
                Amsterdam, Nederland
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => window.location.href = link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Buildrs. Alle rechten voorbehouden.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => window.open('https://linkedin.com/company/buildrs', '_blank')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://twitter.com/buildrs', '_blank')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://github.com/buildrs', '_blank')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </button>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={handleContactClick}
              className="flex items-center px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Neem contact op
            </button>
            
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default ScailUpFooter;