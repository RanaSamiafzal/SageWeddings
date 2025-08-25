import { Feather, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-center space-x-4">
          <Feather className="w-16 h-16 text-cream opacity-80" />
          <div>
            <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-tight" data-testid="text-hero-title">
              THE<br />WEDDING<br />POETS
            </h1>
          </div>
        </div>
        <p className="text-xl md:text-2xl font-light text-cream/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
          Crafting cinematic love stories through<br className="hidden md:block" />
          artful videography and photography
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("portfolio")}
            className="bg-sage hover:bg-sage/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="button-view-work"
          >
            View Our Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("packages")}
            className="border-2 border-white text-white hover:bg-white hover:text-sage px-8 py-3 rounded-full font-medium transition-all duration-300"
            data-testid="button-packages"
          >
            Wedding Packages
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8 opacity-70" />
      </div>
    </section>
  );
}
