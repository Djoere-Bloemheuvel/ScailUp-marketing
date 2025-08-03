
const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-premium-gray-dark border-t border-premium-silver/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Buildrs.AI</h3>
            <p className="text-premium-silver/80 italic">
              Elite AI Engineering. Exclusief voor visionairs.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <button className="bg-premium-silver/10 hover:bg-premium-silver/20 text-premium-silver px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
              Contact
            </button>
            <p className="text-premium-silver/60 text-sm mt-4">
              © 2024 Buildrs.AI. Designed for disruption.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
