
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, TreePine, Scissors, AlertTriangle, Shield, Clock, Award } from "lucide-react";

console.log('Index page loading...');

const Index = () => {
  console.log('Index page rendering...');

  const services = [
    {
      title: "Tree Removal Telluride",
      description: "Safe and efficient removal of hazardous or unwanted trees in Telluride and Mountain Village",
      icon: TreePine,
    },
    {
      title: "Professional Tree Pruning",
      description: "Expert pruning services to maintain tree health and safety in Colorado's mountain climate",
      icon: Scissors,
    },
    {
      title: "Emergency Tree Services",
      description: "24/7 emergency response for storm damage and fallen trees throughout San Miguel County",
      icon: AlertTriangle,
    },
    {
      title: "Tree Risk Assessment",
      description: "Certified arborist inspections and comprehensive tree health evaluations",
      icon: Shield,
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
            Tree Removal Services in Telluride, Colorado
          </h1>
          <div className="flex items-center justify-center mb-8">
            <TreePine className="h-12 w-12 mr-4 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold">
              SAWPIT TREE COMPANY
            </h2>
          </div>
          <p className="text-xl md:text-2xl mb-6 font-medium">
            Licensed Arborist | Emergency Tree Services | Mountain Village & San Miguel County
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Professional tree removal, pruning, and emergency services in Colorado's high country
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (970) 555-0123
            </Button>
            <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
              Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving Telluride and Surrounding Areas
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional tree services throughout the San Miguel County region
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((area) => (
              <Card key={area} className="text-center">
                <CardContent className="p-4">
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-medium text-sm">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Tree Services in Telluride
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From emergency storm damage cleanup to routine tree maintenance, our certified arborist 
              provides comprehensive tree care solutions for Colorado mountain properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <Card key={service.title} className="tree-shadow hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Choose Sawpit Tree Company for Telluride Tree Removal?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">ISA Certified Arborist</h4>
                <p className="text-muted-foreground">Professional certification with specialized high-altitude tree expertise</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">15+ Years Local Experience</h4>
                <p className="text-muted-foreground">Deep knowledge of Telluride's unique mountain tree care challenges</p>
              </div>
              <div className="text-center">
                <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold mb-2">24/7 Emergency Response</h4>
                <p className="text-muted-foreground">Available for storm damage and hazardous tree emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Tree Removal in Telluride
          </h2>
          <p className="text-xl mb-8">
            Storm damage? Fallen tree blocking your driveway? We provide 24/7 emergency tree services 
            throughout Telluride, Mountain Village, and San Miguel County.
          </p>
          <Button size="lg" className="text-lg px-8 py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Phone className="mr-2 h-5 w-5" />
            Emergency Hotline: (970) 555-0123
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Telluride's Premier Tree Service Company
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to get started? Contact Sam for a free consultation and estimate
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Call for Tree Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">(970) 555-0123</p>
                <p className="text-muted-foreground">24/7 Emergency Tree Removal</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Email for Quotes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">info@sawpittree.com</p>
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
              Licensed, insured, and locally owned by certified arborist Sam.
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
