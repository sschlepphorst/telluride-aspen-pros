
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Award, Users, Shield, MapPin, Clock, Phone, ExternalLink, BookOpen, Mountain, Flame, FileText } from "lucide-react";
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
              <img 
                src="/lovable-uploads/e6b55972-7fd4-4aa2-8ae3-cf185237e576.png" 
                alt="Sawpit Tree Company Logo" 
                className="h-10 w-8 object-contain"
              />
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

      {/* Professional Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Resources & Industry Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Staying informed with the latest in arboriculture and forest management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://www.isa-arbor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                    ISA International Society of Arboriculture
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    International certification standards and arboriculture best practices
                  </CardDescription>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://isarmc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <Mountain className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                    ISA Rocky Mountain Chapter
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Regional arboriculture community and continuing education
                  </CardDescription>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.cowildfire.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <Flame className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                    Colorado Wildfire Information
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Wildfire prevention and community safety resources
                  </CardDescription>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://csfs.colostate.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg flex items-center justify-center gap-2 group-hover:text-primary transition-colors">
                    Colorado State Forest Service
                    <ExternalLink className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Technical forestry assistance and forest management guidance
                  </CardDescription>
                </CardContent>
              </Card>
            </a>
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
          <div className="flex justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Sam: (970) 708-4700
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/e6b55972-7fd4-4aa2-8ae3-cf185237e576.png" 
              alt="Sawpit Tree Company Logo" 
              className="h-8 w-6 object-contain"
            />
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
