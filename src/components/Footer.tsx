
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-premium-gray border-t border-premium-silver/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 apple-fade-in">
            <h3 className="text-xl font-bold text-white mb-1">Buildrs.AI</h3>
            <p className="text-premium-silver/80 italic text-sm">
              Elite AI Engineering. Exclusief voor visionairs.
            </p>
          </div>
          
          <div className="text-center md:text-right apple-fade-in apple-stagger-2">
            <button className="bg-premium-silver/10 hover:bg-premium-silver/20 text-premium-silver px-5 py-2 rounded-lg transition-colors duration-300 font-medium mb-3 apple-button-hover">
              Contact
            </button>
            <p className="text-premium-silver/60 text-sm">
              © 2024 Buildrs.AI. Designed for disruption.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
