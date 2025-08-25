import { useState } from "react";
import { Feather, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center">
              <Feather className="text-white w-6 h-6" />
            </div>
            <div className="font-playfair text-xl font-semibold text-charcoal">
              The Wedding Poets
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-charcoal hover:text-sage transition-colors font-medium"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-charcoal hover:text-sage transition-colors font-medium"
              data-testid="nav-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-charcoal hover:text-sage transition-colors font-medium"
              data-testid="nav-packages"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-charcoal hover:text-sage transition-colors font-medium"
              data-testid="nav-testimonials"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-charcoal hover:text-sage transition-colors font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-charcoal hover:text-sage transition-colors font-medium"
                data-testid="nav-mobile-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-charcoal hover:text-sage transition-colors font-medium"
                data-testid="nav-mobile-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="text-left text-charcoal hover:text-sage transition-colors font-medium"
                data-testid="nav-mobile-packages"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-charcoal hover:text-sage transition-colors font-medium"
                data-testid="nav-mobile-testimonials"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-charcoal hover:text-sage transition-colors font-medium"
                data-testid="nav-mobile-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
