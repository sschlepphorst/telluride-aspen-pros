
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, TreePine, Scissors, AlertTriangle, Shield, Wrench, Zap, Hammer, TreeDeciduous, Eye, FileText, Users } from "lucide-react";

console.log('Index page loading...');

const Index = () => {
  console.log('Index page rendering...');

  const services = [
    {
      title: "Tree Removal",
      description: "Safe and efficient removal of hazardous or unwanted trees in Telluride's mountain environment",
      icon: TreePine,
    },
    {
      title: "Tree Pruning",
      description: "Expert pruning services to maintain tree health and safety in Colorado's high altitude climate",
      icon: Scissors,
    },
    {
      title: "Hazard Tree Removal",
      description: "Identification and removal of dangerous trees that pose risks to property and safety",
      icon: AlertTriangle,
    },
    {
      title: "Tree Cabling and Bracing",
      description: "Structural support systems to preserve valuable trees and prevent failure",
      icon: Wrench,
    },
    {
      title: "Storm Clean Up",
      description: "Rapid response for storm damage cleanup and debris removal throughout the region",
      icon: Zap,
    },
    {
      title: "Emergency Tree Work",
      description: "24/7 emergency response for fallen trees and urgent tree hazards",
      icon: Phone,
    },
    {
      title: "Forestry Projects",
      description: "Large-scale forest management and timber operations for mountain properties",
      icon: TreeDeciduous,
    },
    {
      title: "Fire Mitigation",
      description: "Defensible space creation and fuel reduction to protect properties from wildfire",
      icon: Shield,
    },
    {
      title: "Lot Clearing",
      description: "Complete lot and land clearing for construction and development projects",
      icon: Hammer,
    },
    {
      title: "View Clearing / Viewshed",
      description: "Strategic tree removal and pruning to restore and enhance mountain views",
      icon: Eye,
    },
    {
      title: "Clearance Pruning",
      description: "Pruning trees away from structures, power lines, and other infrastructure",
      icon: Scissors,
    },
    {
      title: "Consulting",
      description: "Professional arborist consultations for tree health, risk assessment, and management planning",
      icon: FileText,
    },
    {
      title: "Arborist Services",
      description: "Comprehensive tree care services from certified arborist expertise",
      icon: Users,
    },
  ];

  const serviceAreas = [
    "Telluride, Colorado",
    "Mountain Village",
    "Ophir",
    "Sawpit",
    "San Miguel County",
    "Surrounding Mountain Communities"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <TreePine className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold text-foreground">Sawpit Tree Company</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Tree Services
              </a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Sam
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button>Get Free Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/lovable-uploads/c3d81b59-4845-4bcf-8bbe-fb1a70ff99c0.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sawpit Tree Company
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-medium">
            Certified Arborist | Emergency Tree Services | Mountain Village & San Miguel County
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Professional tree removal, pruning, and emergency services in Colorado's high country
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (970) 708-4700
            </Button>
            <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
              Free Estimate
            </Button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Tree Services in Telluride
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
              From emergency storm damage cleanup to routine tree maintenance, our certified arborist 
              provides comprehensive tree care solutions for Colorado mountain properties
            </p>
            <p className="text-lg text-muted-foreground">
              Serving Telluride, Mountain Village, and San Miguel County region
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {services.map((service) => (
              <Card key={service.title} className="tree-shadow hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <service.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-sm font-semibold leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-xs leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to get started? Contact Sam for a free consultation and estimate
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Call for Tree Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">(970) 708-4700</p>
                <p className="text-muted-foreground">24/7 Emergency Tree Removal</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Email for Quotes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">sschlepphorst@icloud.com</p>
                <p className="text-muted-foreground">Free tree removal estimates</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Service Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">Telluride & Mountain Village</p>
                <p className="text-muted-foreground">San Miguel County tree services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TreePine className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Sawpit Tree Company</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional tree removal and emergency services in Telluride, Colorado. 
              Certified, insured and locally owned.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Tree Removal Telluride</span>
              <span>•</span>
              <span>Emergency Tree Service</span>
              <span>•</span>
              <span>Mountain Village Tree Care</span>
              <span>•</span>
              <span>Certified Arborist</span>
              <span>•</span>
              <span>San Miguel County</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
