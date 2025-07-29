export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/e6b55972-7fd4-4aa2-8ae3-cf185237e576.png" 
              alt="Sawpit Tree Company Logo" 
              className="h-8 w-6 object-contain" 
            />
            <span className="text-xl font-bold">Sawpit Tree Company</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Professional tree removal and emergency services in Telluride, Colorado. 
            Certified, insured and locally owned.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <span>Tree Removal Telluride</span>
            <span className="hidden sm:inline">•</span>
            <span>Emergency Tree Service</span>
            <span className="hidden sm:inline">•</span>
            <span>Mountain Village Tree Care</span>
            <span className="hidden sm:inline">•</span>
            <span>Certified Arborist</span>
            <span className="hidden sm:inline">•</span>
            <span>San Miguel County</span>
          </div>
        </div>
      </div>
    </footer>
  );
};