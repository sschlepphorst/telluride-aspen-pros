import { services } from "@/constants/services";
import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Tree Services in Telluride, Colorado
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            Certified arborist providing expert tree removal, tree trimming, and emergency tree services 
            in Telluride, Mountain Village, and throughout San Miguel County. Trusted local tree company 
            with years of experience serving Colorado mountain communities.
          </p>
          <p className="text-lg text-muted-foreground">
            Emergency tree removal available 24/7 • Licensed & insured tree service company • Free estimates
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.title} 
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};