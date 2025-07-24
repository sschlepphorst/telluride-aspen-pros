
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Award, Users, Shield, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <TreePine className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold text-foreground">Sawpit Tree Company</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                Tree Services
              </a>
              <span className="text-primary font-medium">About Sam</span>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button>Get Free Quote</Button>
            </div>
          </div>
        </div>
      </nav>

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
              <img 
                src="/lovable-uploads/3c32e789-3fa1-4017-ad90-55b698ddd5e4.png" 
                alt="Sam Schlepphorst working professionally on tree removal in Telluride" 
                className="float-right ml-6 mb-4 w-64 h-48 object-cover rounded-lg shadow-lg md:w-80 md:h-60"
              />
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

      {/* About Sam Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
            {/* ISA Logo and Credentials */}
            <div className="flex-shrink-0 text-center">
              <img 
                src="/lovable-uploads/f69024ac-6287-4156-b8dc-a62605ce4827.png" 
                alt="ISA Certified Arborist Logo" 
                className="w-48 h-auto mx-auto mb-4"
              />
              <div className="text-sm font-medium text-foreground">
                <div>Samuel Schlepphorst</div>
                <div>RM-9075A</div>
              </div>
            </div>

            {/* Credential Cards - Aligned with Image */}
            <div className="grid grid-cols-1 gap-4 flex-1 max-w-sm mt-4">
              <Card className="text-center">
                <CardHeader className="pb-3">
                  <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                  <CardTitle className="text-sm">ISA Certified Arborist</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader className="pb-3">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <CardTitle className="text-sm">Deep Local Knowledge</CardTitle>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader className="pb-3">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <CardTitle className="text-sm">Certified & Insured</CardTitle>
                </CardHeader>
              </Card>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { area: "Telluride, Colorado", description: "Downtown and residential tree services" },
              { area: "Mountain Village", description: "Ski resort and luxury home tree care" },
              { area: "Ophir, Colorado", description: "Rural and ranch property tree management" },
              { area: "Sawpit Area", description: "Remote property access and emergency services" },
              { area: "Placerville", description: "Historic area tree preservation and removal" },
              { area: "San Miguel County", description: "Complete county-wide coverage available" }
            ].map((location) => (
              <Card key={location.area} className="text-center">
                <CardHeader>
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{location.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{location.description}</CardDescription>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Sam: (970) 708-4700
            </Button>
            <Button size="lg" className="text-lg px-8 py-3">
              Free Tree Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <TreePine className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Sawpit Tree Company</span>
          </div>
          <p className="text-muted-foreground">
            Professional tree services you can trust. Certified, insured and locally owned.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
