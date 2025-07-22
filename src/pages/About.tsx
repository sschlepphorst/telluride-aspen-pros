import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreePine, Award, Users, Shield, Instagram } from "lucide-react";
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
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <span className="text-primary font-medium">About</span>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button>Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet Sam
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Local Telluride tree care expert with years of experience serving our mountain community
            </p>
          </div>
        </div>
      </section>

      {/* About Sam Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Local Tree Care Professional
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Sam has been a proud Telluride resident for over 15 years, developing an intimate 
                  knowledge of our unique mountain environment and the specific challenges trees face 
                  in our high-altitude climate.
                </p>
                <p>
                  With extensive training in arboriculture and a deep passion for preserving the 
                  natural beauty of our mountain community, Sam founded Sawpit Tree Company to provide 
                  professional, reliable tree services that locals can trust.
                </p>
                <p>
                  When not caring for trees, you can find Sam skiing the local slopes, hiking the 
                  mountain trails, or volunteering with local environmental conservation efforts.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Certified Arborist</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    ISA Certified with specialized training in high-altitude tree care and mountain forest management.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Community Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    15+ years serving Telluride and surrounding mountain communities with personalized service.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Fully Licensed & Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Complete licensing and comprehensive insurance coverage for your peace of mind.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See Our Work in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Follow us on Instagram for behind-the-scenes videos and project highlights
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @sawpittreecompany
            </Button>
          </div>
          
          {/* Instagram Preview Placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <Instagram className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Instagram content will appear here once connected
                  </p>
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
            Ready to Work with Sam?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free consultation and see why Telluride trusts Sawpit Tree Company
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Call (970) 555-0123
            </Button>
            <Button size="lg" className="text-lg px-8 py-3">
              Free Estimate
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
            Professional tree services you can trust. Licensed, insured, and locally owned.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;