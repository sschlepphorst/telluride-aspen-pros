
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { InstagramFeed } from "@/components/InstagramFeed";

console.log('Index page loading...');

const Index = () => {
  console.log('Index page rendering...');

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation currentPage="home" />
      <Hero />
      <ServicesSection />
      
      {/* Instagram Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Our Telluride Tree Work in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow us on Instagram for behind-the-scenes videos of tree removal projects 
              throughout Telluride, Mountain Village, and the surrounding mountain communities
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @sawpittreecompany
            </Button>
          </div>
          
          <InstagramFeed />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
