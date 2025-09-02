import { Feather } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center">
              <Feather className="text-white w-4 h-4" />
            </div>
            <div className="font-playfair text-xl font-semibold text-white" data-testid="text-footer-brand">
              The Wedding Poets
            </div>
          </div>
          <p className="text-gray-400 mb-6" data-testid="text-footer-tagline">
            Crafting cinematic love stories with artful videography and photography
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="link-footer-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="link-footer-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="link-footer-packages"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </button>
            <a
              href="/login"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Admin
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm" data-testid="text-footer-copyright">
              © 2024 The Wedding Poets. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
