import { motion } from "framer-motion";
import { Check, Camera, Plane, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: "essential",
    name: "Essential",
    description: "Perfect for intimate celebrations",
    price: "$2,500",
    features: [
      "6 hours of coverage",
      "1 cinematographer",
      "3-4 minute highlight film",
      "Ceremony footage",
      "Reception key moments",
      "Online delivery"
    ],
    featured: false
  },
  {
    id: "signature",
    name: "Signature",
    description: "Our most comprehensive package",
    price: "$4,200",
    features: [
      "8 hours of coverage",
      "2 cinematographers",
      "5-6 minute highlight film",
      "Full ceremony footage",
      "Reception coverage",
      "Getting ready footage",
      "Drone footage (if permitted)",
      "Professional audio",
      "USB + Online delivery"
    ],
    featured: true
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "The complete cinematic experience",
    price: "$6,500",
    features: [
      "12 hours of coverage",
      "3 cinematographers",
      "7-10 minute highlight film",
      "Full ceremony & reception",
      "Engagement session included",
      "Same-day teaser film",
      "Drone cinematography",
      "Raw footage access",
      "Custom music scoring",
      "Premium delivery package"
    ],
    featured: false
  }
];


const addOns = [
  {
    icon: Camera,
    title: "Photography Package",
    description: "Complete wedding photography",
    price: "+$1,500"
  },
  {
    icon: Plane,
    title: "Aerial Cinematography",
    description: "Stunning drone footage",
    price: "+$800"
  },
  {
    icon: Clock,
    title: "Extended Coverage",
    description: "Additional hours",
    price: "+$300/hr"
  }
];

export default function PackagesSection() {
  return (
    <motion.section
      id="packages"
      className="relative bg-charcoal py-20 z-40 shadow-2xl -mt-20 rounded-t-3xl"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" data-testid="text-packages-title">
            Wedding Packages
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto" data-testid="text-packages-subtitle">
            Choose the perfect package for your special day. Each option is designed to capture your unique love story with our signature cinematic style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                pkg.featured
                  ? "bg-sage transform scale-105 relative"
                  : "bg-white"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`card-package-${pkg.id}`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-champagne text-charcoal px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className={`font-playfair text-xl sm:text-2xl font-bold mb-2 ${
                  pkg.featured ? "text-white" : "text-charcoal"
                }`} data-testid={`text-package-name-${pkg.id}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-3 sm:mb-4 ${
                  pkg.featured ? "text-cream/90" : "text-gray-600"
                }`} data-testid={`text-package-description-${pkg.id}`}>
                  {pkg.description}
                </p>
                <div className={`text-3xl sm:text-4xl font-bold mb-2 ${
                  pkg.featured ? "text-white" : "text-sage"
                }`} data-testid={`text-package-price-${pkg.id}`}>
                  {pkg.price}
                </div>
                <p className={`${
                  pkg.featured ? "text-cream/70" : "text-gray-500"
                }`}>
                  Starting price
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center" data-testid={`text-package-feature-${pkg.id}-${featureIndex}`}>
                    <Check className={`mr-3 w-4 h-4 sm:w-5 sm:h-5 ${
                      pkg.featured ? "text-white" : "text-sage"
                    }`} />
                    <span className={
                      pkg.featured ? "text-cream" : "text-gray-700"
                    }>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-2 sm:py-3 rounded-full font-medium transition-colors ${
                  pkg.featured
                    ? "bg-white hover:bg-cream text-sage"
                    : "bg-sage hover:bg-sage/90 text-white"
                }`}
                data-testid={`button-package-${pkg.id}`}
              >
                {pkg.id === "signature" ? "Choose Signature" : 
                 pkg.id === "luxury" ? "Go Luxury" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          className="mt-12 mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8" data-testid="text-addons-title">
            Popular Add-Ons
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {addOns.map((addOn, index) => (
              <div key={index} className="text-center text-white" data-testid={`addon-${index}`}>
                <addOn.icon className="w-6 h-6 sm:w-8 sm:h-8 text-champagne mb-2 sm:mb-3 mx-auto" />
                <h4 className="font-semibold mb-1 sm:mb-2" data-testid={`text-addon-title-${index}`}>
                  {addOn.title}
                </h4>
                <p className="text-cream/70 text-xs sm:text-sm mb-1 sm:mb-2" data-testid={`text-addon-description-${index}`}>
                  {addOn.description}
                </p>
                <p className="text-champagne font-bold" data-testid={`text-addon-price-${index}`}>
                  {addOn.price}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
