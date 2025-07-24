
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Award, Users, Shield, Instagram, MapPin, Clock, Phone, CheckCircle, Zap, TrendingUp, Leaf } from "lucide-react";
import { Link } from "react-router-dom";


const About = () => {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet Sam: Telluride's Trusted Tree Expert
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ISA Certified Arborist with 15+ years serving Telluride, Mountain Village, and San Miguel County. 
              Your local tree care professional who understands Colorado mountain trees.
            </p>
          </div>
        </div>
      </section>

      {/* About Sam Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Local Telluride Tree Care Professional
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Trees are a vital part of your property's landscape, adding beauty, value, and environmental benefits. But caring for them properly takes skill, experience, and the right tools. That's where an ISA Certified Arborist comes in.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/02d6d245-06b8-4553-b729-237cdd32a2cb.png" 
                alt="Sam working professionally on tree removal in Telluride" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>ISA Certified Arborist</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  International Society of Arboriculture certification with specialized training in 
                  high-altitude tree care, mountain forest management, and Colorado species expertise.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Deep Local Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  15+ years serving Telluride, Mountain Village, Ophir, and surrounding San Miguel County 
                  communities with personalized tree care service and emergency response.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Certified & Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete Colorado state licensing, comprehensive liability insurance, and worker's 
                  compensation coverage for your complete peace of mind on every tree service project.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Why Hire an Arborist Section */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Hire an Arborist?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Expertise That Protects Your Trees</h4>
                <p className="text-muted-foreground">Arborists are trained in the science and art of tree care. They understand how to assess tree health, diagnose issues, and recommend the best course of action—whether it's pruning, disease treatment, or safe removal.</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Safety First</h4>
                <p className="text-muted-foreground">Tree work can be dangerous. From climbing tall trees to removing large branches, it requires knowledge of proper safety protocols and specialized equipment. Arborists are trained to perform these tasks safely, minimizing risk to your home, family, and property.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Long-Term Value</h4>
                <p className="text-muted-foreground">Improper tree care can lead to permanent damage or even tree loss. A qualified arborist helps ensure your trees thrive for years to come, preserving their structural integrity, health, and value.</p>
              </div>
              <div className="text-center">
                <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Environmental Responsibility</h4>
                <p className="text-muted-foreground">Arborists make informed decisions that benefit both your property and the surrounding ecosystem. They consider native species, local regulations, and sustainable practices in every job they undertake.</p>
              </div>
            </div>
          </div>

          {/* Local Expertise Section */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Local Telluride Tree Expertise Matters
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <TreePine className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Mountain Species Knowledge</h4>
                <p className="text-muted-foreground">Expert care for aspen, spruce, fir, and pine trees common in the Telluride area</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Seasonal Timing</h4>
                <p className="text-muted-foreground">Knows optimal pruning and removal times for Colorado's short growing season</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Weather Challenges</h4>
                <p className="text-muted-foreground">Experienced with high winds, heavy snow loads, and sudden summer storms</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">Community Trust</h4>
                <p className="text-muted-foreground">Established relationships throughout Mountain Village and San Miguel County</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          
          {/* Instagram Preview Placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Emergency tree removal - Mountain Village storm damage",
              "Aspen grove pruning - Telluride residential property", 
              "Large pine removal - San Miguel County ranch"
            ].map((description, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <Instagram className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground font-medium">
                    {description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Instagram video preview - follow for full content
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
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
