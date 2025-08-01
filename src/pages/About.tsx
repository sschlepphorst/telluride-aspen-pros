
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Award, Shield, MapPin, Phone, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LazyImage } from "@/components/LazyImage";
import { detailedServiceAreas } from "@/constants/serviceAreas";

const About = () => {
  useEffect(() => {
    document.title = "About Sawpit Tree Company | Certified Arborist Telluride CO | Sam Schlepphorst";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Meet Sam Schlepphorst, ISA Certified Arborist and owner of Sawpit Tree Company. Professional tree services in Telluride, Mountain Village, and San Miguel County since 2012.'
    );
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation currentPage="about" />
      <Breadcrumbs items={[{ label: "About" }]} />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet Sam: Telluride's Trusted Tree Expert
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
              Owner and Lead Arborist
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <div className="mb-6 md:mb-0">
                <LazyImage 
                  src="/lovable-uploads/3c32e789-3fa1-4017-ad90-55b698ddd5e4.png" 
                  alt="Sam Schlepphorst, ISA Certified Arborist, performing professional tree removal work in Telluride Colorado with safety equipment and expertise" 
                  className="w-full max-w-sm mx-auto md:float-right md:ml-6 md:mb-4 h-48 md:h-60 object-cover rounded-lg shadow-lg"
                />
              </div>
              <p>
                Sam Schlepphorst, the owner of the company, brings over a decade of hands-on experience in professional tree care throughout the Telluride and Mountain Village areas. With a strong reputation for quality, safety, and environmental stewardship, Sam has become a trusted name in the regional arboriculture community.
              </p>
              <p>
                His academic background includes a degree in Natural Resources with a concentration in Landscape Ecology from the University of Vermont, where he graduated in 2012. This foundation gives Sam a comprehensive understanding of ecological systems, forest health, and the intricate relationships between trees and their surrounding environments.
              </p>
              <p>
                As a Certified Arborist with the International Society of Arboriculture (ISA), Sam combines scientific expertise with practical skill. He specializes in technical tree work, particularly in challenging environments that require careful planning, precision, and critical thinking. His work reflects a deep respect for the natural landscape, with an emphasis on sustainable practices that preserve the integrity of the region's forests.
              </p>
              <p>
                Sam lives down valley from Telluride and is deeply connected to the local community. When he's not in the canopy, you'll likely find him exploring the outdoors, mountain biking, skiing, or enjoying time with family and friends in the San Juan Mountains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire an Arborist Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Hire an Arborist?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Trees are a vital part of your property's landscape, adding beauty, value, and environmental benefits. But caring for them properly takes skill, experience, and the right tools. That's where an ISA Certified Arborist comes in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Expertise That Protects Your Trees</h3>
              <p className="text-muted-foreground leading-relaxed">
                Arborists are trained in the science and art of tree care. They understand how to assess tree health, diagnose issues, and recommend the best course of action—whether it's pruning, disease treatment, or safe removal.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Safety First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tree work can be dangerous. From climbing tall trees to removing large branches, it requires knowledge of proper safety protocols and specialized equipment. Arborists are trained to perform these tasks safely, minimizing risk to your home, family, and property.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Long-Term Value</h3>
              <p className="text-muted-foreground leading-relaxed">
                Improper tree care can lead to permanent damage or even tree loss. A qualified arborist helps ensure your trees thrive for years to come, preserving their structural integrity, health, and value.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Environmental Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Arborists make informed decisions that benefit both your property and the surrounding ecosystem. They consider native species, local regulations, and sustainable practices in every job they undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn more about the organizations and certifications that guide our commitment to professional tree care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
            {/* Left Column: ISA Logo and Credentials */}
            <div className="text-center order-2 lg:order-1">
              <LazyImage 
                src="/lovable-uploads/f69024ac-6287-4156-b8dc-a62605ce4827.png" 
                alt="ISA International Society of Arboriculture Certified Arborist official logo and certification badge" 
                className="w-48 sm:w-64 h-auto mx-auto mb-4"
              />
              <div className="text-sm font-medium text-foreground">
                <div>Samuel Schlepphorst</div>
                <div>RM-9075A</div>
              </div>
            </div>

            {/* Right Column: Professional Resource Links */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 order-1 lg:order-2">
              <a 
                href="https://www.isa-arbor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="text-center transition-all duration-200 hover:shadow-md hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-2 pt-3">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Award className="h-5 w-5 text-primary" />
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xs">International Society of Arboriculture</CardTitle>
                  </CardHeader>
                </Card>
              </a>
              
              <a 
                href="https://isarmc.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="text-center transition-all duration-200 hover:shadow-md hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-2 pt-3">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <MapPin className="h-5 w-5 text-primary" />
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xs">ISA Rocky Mountain Chapter</CardTitle>
                  </CardHeader>
                </Card>
              </a>
              
              <a 
                href="https://www.cowildfire.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="text-center transition-all duration-200 hover:shadow-md hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-2 pt-3">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Shield className="h-5 w-5 text-primary" />
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xs">Colorado Wildfire Information</CardTitle>
                  </CardHeader>
                </Card>
              </a>

              <a 
                href="https://csfs.colostate.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="text-center transition-all duration-200 hover:shadow-md hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-2 pt-3">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TreePine className="h-5 w-5 text-primary" />
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-xs">Colorado State Forest Service</CardTitle>
                  </CardHeader>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving All of San Miguel County
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional tree services throughout the greater Telluride area
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {detailedServiceAreas.map((location) => (
              <Card key={location.area} className="text-center">
                <CardHeader className="pb-3">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <CardTitle className="text-base sm:text-lg">{location.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{location.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work with Telluride's Tree Expert?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free consultation from Sam and see why Telluride, Mountain Village, and 
            San Miguel County trust Sawpit Tree Company for all their tree care needs
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Button asChild className="text-base px-6 py-3 min-h-[44px] w-full sm:w-auto">
              <a href="tel:+19707084700" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                Call (970) 708-4700
              </a>
            </Button>
            <p className="text-muted-foreground font-medium text-xs sm:text-sm text-center max-w-md mx-auto leading-relaxed">
              We aim to return all calls within 24 hours. For urgent concerns, please send a text to request an immediate call back
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
