import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Mountain, Shield, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function MountainVillageTreeRemoval() {
  useEffect(() => {
    document.title = "Tree Removal Mountain Village Colorado | Emergency Tree Service | Sawpit Tree";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional tree removal services in Mountain Village, Colorado. Emergency tree removal, luxury property tree care, ski resort area tree services. Licensed arborist. Call (970) 708-4700.');
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Mountain Village Tree Removal', href: '/mountain-village-tree-removal' }
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
                Tree Removal in Mountain Village, Colorado
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Expert tree removal and tree care services for Mountain Village luxury properties and ski resort areas. 
                Professional arborist with specialized experience in high-elevation tree management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (970) 708-4700
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mountain Village Specific Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Specialized Mountain Village Tree Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Mountain className="mr-3 h-6 w-6 text-primary" />
                    Luxury Property Tree Care
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Specialized tree care for Mountain Village's luxury homes and estates. 
                    Preserving property values with expert tree management and aesthetic pruning.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Shield className="mr-3 h-6 w-6 text-primary" />
                    Ski Resort Area Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tree removal and maintenance near ski runs and resort facilities. 
                    Coordinated scheduling to minimize impact on resort operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="mr-3 h-6 w-6 text-primary" />
                    High-Elevation Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Specialized knowledge of high-altitude tree species and mountain environment challenges. 
                    Proper techniques for Mountain Village's unique elevation and climate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Mountain Village Chooses Us */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Mountain Village Residents Choose Sawpit Tree Company
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                      <Mountain className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Mountain Village Specialist</h3>
                      <p className="text-muted-foreground">
                        Extensive experience working in Mountain Village's unique high-altitude environment and luxury property requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                      <Shield className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Discretion & Professionalism</h3>
                      <p className="text-muted-foreground">
                        Respectful service approach for high-end properties with attention to privacy and minimal disruption.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 mt-1">
                      <MapPin className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
                      <p className="text-muted-foreground">
                        Deep understanding of Mountain Village's microclimates, tree species, and property management requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Mountain Village Service Areas</h3>
                <div className="bg-card p-6 rounded-lg shadow-sm">
                  <p className="text-lg mb-4">Neighborhoods We Serve:</p>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>• Mountain Village Core</li>
                    <li>• Ski Resort Base Area</li>
                    <li>• Heritage Crossing</li>
                    <li>• Adams Ranch</li>
                    <li>• Village Gondola Area</li>
                    <li>• All Mountain Village Neighborhoods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Emergency Tree Removal in Mountain Village
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Mountain Village's elevation and weather patterns can create sudden tree emergencies. 
                We provide rapid response services to protect your property and ensure safety.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">24/7 Emergency Line</h3>
                    <p className="text-muted-foreground">(970) 708-4700</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Rapid Response</h3>
                    <p className="text-muted-foreground">Emergency response within 2 hours</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Mountain className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Mountain Expertise</h3>
                    <p className="text-muted-foreground">Specialized high-altitude equipment</p>
                  </CardContent>
                </Card>
              </div>
              
              <Button size="lg" className="text-lg px-12 py-4">
                Request Emergency Service
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}