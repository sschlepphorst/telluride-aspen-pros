import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section 
      className="relative py-16 md:py-32 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/c3d81b59-4845-4bcf-8bbe-fb1a70ff99c0.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Sawpit Tree Company
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 font-medium leading-relaxed max-w-4xl mx-auto">
          Certified Arborist | Emergency Tree Services | Mountain Village & San Miguel County | Fully Insured
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 opacity-90 max-w-3xl mx-auto">
          Professional tree removal, pruning, and emergency services in Colorado's high country
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
          <Button asChild className="text-base px-6 py-3 w-full sm:w-auto min-h-[44px]">
            <a href="tel:+19707084700" className="flex items-center justify-center">
              <Phone className="mr-2 h-4 w-4" />
              Call (970) 708-4700
            </a>
          </Button>
          <Button className="text-base px-6 py-3 w-full sm:w-auto min-h-[44px]">
            Free Estimate
          </Button>
        </div>
        <p className="text-white font-bold text-xs sm:text-sm text-center mt-4 md:mt-6 max-w-md mx-auto leading-relaxed">
          We aim to return all calls within 24 hours. For urgent concerns, please send a text to request an immediate call back
        </p>
      </div>
    </section>
  );
};