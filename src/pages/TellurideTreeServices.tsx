import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function TellurideTreeServices() {
  useEffect(() => {
    document.title = "Tree Services Telluride Colorado | Emergency Tree Removal | Sawpit Tree";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional tree services in Telluride, Colorado. Emergency tree removal, tree trimming, storm damage cleanup. Licensed arborist serving Telluride residents and businesses. Call (970) 708-4700.');
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Telluride Tree Services', href: '/telluride-tree-services' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Tree Services in Telluride, Colorado
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Professional tree removal, tree trimming, and emergency tree services in Telluride. 
                Licensed arborist Sam Schlepphorst provides expert tree care for your Telluride property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (970) 708-4700
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Free Estimate
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Tree Services in Telluride
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Shield className="mr-3 h-6 w-6 text-primary" />
                    Emergency Tree Removal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 emergency tree removal services in Telluride. Storm damage, fallen trees, 
                    and hazardous tree situations handled promptly and safely.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Award className="mr-3 h-6 w-6 text-primary" />
                    Tree Trimming & Pruning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional tree trimming and pruning services to maintain tree health, 
                    improve appearance, and prevent future hazards on your Telluride property.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="mr-3 h-6 w-6 text-primary" />
                    Storm Damage Cleanup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Colorado mountain storms can cause significant tree damage. We provide 
                    rapid response cleanup services to restore safety to your property.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Sawpit Tree Company in Telluride?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                      <Award className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Certified Arborist</h3>
                      <p className="text-muted-foreground">
                        Licensed ISA certified arborist with extensive knowledge of Colorado mountain tree species.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                      <MapPin className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Local Telluride Expert</h3>
                      <p className="text-muted-foreground">
                        Deep understanding of Telluride's unique mountain environment and tree care challenges.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                      <Shield className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Fully Insured & Licensed</h3>
                      <p className="text-muted-foreground">
                        Complete liability and workers compensation insurance for your peace of mind.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Serving All of Telluride</h3>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <p className="text-lg mb-4">Areas We Serve:</p>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• Downtown Telluride</li>
                    <li>• Mountain Village</li>
                    <li>• Telluride Ski Resort Area</li>
                    <li>• West Telluride</li>
                    <li>• Town Park Neighborhood</li>
                    <li>• All Telluride Residential Areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Tree Services in Telluride Today?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Call Sawpit Tree Company for immediate assistance. Free estimates on all tree services in Telluride.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Now</h3>
                  <p className="text-muted-foreground">(970) 708-4700</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">sam@sawpittreecompany.com</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-muted-foreground">24 hours or less</p>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" className="text-lg px-12 py-4">
              Get Your Free Estimate Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}