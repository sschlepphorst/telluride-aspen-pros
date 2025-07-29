import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Information
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-4">
              <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg sm:text-xl">Call for Tree Service</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="mb-3 min-h-[44px] w-full sm:w-auto">
                <a href="tel:+19707084700" className="text-base sm:text-lg font-medium">
                  Call (970) 708-4700
                </a>
              </Button>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We aim to return all calls within 24 hours. For urgent concerns, please send a text to request an immediate call back
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader className="pb-4">
              <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg sm:text-xl">Email for Quotes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-medium break-all">sschlepphorst@icloud.com</p>
              <p className="text-muted-foreground text-sm">Free tree removal estimates</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader className="pb-4">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg sm:text-xl">Service Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-medium">Telluride & Mountain Village</p>
              <p className="text-muted-foreground text-sm">San Miguel County tree services</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};