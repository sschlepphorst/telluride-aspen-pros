import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavigationProps {
  currentPage?: 'home' | 'about';
}

export const Navigation = ({ currentPage = 'home' }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href={currentPage === 'home' ? "#services" : "/#services"} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Tree Services
            </a>
            {currentPage === 'about' ? (
              <span className="text-primary font-medium">About</span>
            ) : (
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            )}
            <a 
              href={currentPage === 'home' ? "#contact" : "/#contact"} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button asChild>
              <a href="mailto:sschlepphorst@icloud.com?subject=Free%20Tree%20Service%20Quote%20Request">
                Get Free Quote
              </a>
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <a 
                    href={currentPage === 'home' ? "#services" : "/#services"} 
                    className="text-lg font-medium hover:text-primary transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tree Services
                  </a>
                  <Link 
                    to="/about" 
                    className="text-lg font-medium hover:text-primary transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <a 
                    href={currentPage === 'home' ? "#contact" : "/#contact"} 
                    className="text-lg font-medium hover:text-primary transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <Button asChild className="mt-4">
                    <a href="mailto:sschlepphorst@icloud.com?subject=Free%20Tree%20Service%20Quote%20Request">
                      Get Free Quote
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};