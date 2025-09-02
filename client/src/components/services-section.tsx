import { motion } from "framer-motion";
import { Video, Film, Camera, Heart, Eye, Palette, Check } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Video,
    title: "Cinematic Full Event Video",
    description: "Complete cinematic documentation of your wedding day using modern filmmaking techniques, capturing every emotion and detail with artistic storytelling.",
    features: [
      "Full ceremony coverage",
      "Reception highlights",
      "4K cinematic quality",
      "Professional multi-camera setup"
    ]
  },
  {
    id: 2,
    icon: Film,
    title: "Wedding Highlights Film",
    description: "Beautifully crafted highlight reels that capture the essence of your celebration in a modern, shareable cinematic style.",
    features: [
      "3-5 minute highlights",
      "Modern editing techniques",
      "Custom music scoring",
      "Social media optimized"
    ]
  },
  {
    id: 3,
    icon: Eye,
    title: "Wedding Teaser",
    description: "Quick, engaging teaser films perfect for sharing immediately after your wedding, showcasing the day's most beautiful moments.",
    features: [
      "60-90 second teasers",
      "Same-day delivery",
      "Social media ready",
      "Modern cinematography"
    ]
  },
  {
    id: 4,
    icon: Camera,
    title: "Behind the Scenes (BTS)",
    description: "Capture the authentic, unscripted moments - getting ready, vendor interactions, and candid family moments that complete your story.",
    features: [
      "Getting ready documentation",
      "Vendor collaboration footage",
      "Family candid moments",
      "Setup and preparation"
    ]
  },
  {
    id: 5,
    icon: Heart,
    title: "Modern Wedding Photography",
    description: "Elegant couple photography at your favorite locations with modern composition and natural lighting techniques.",
    features: [
      "Couple's favorite locations",
      "Modern editing style",
      "Natural light photography",
      "High-resolution delivery"
    ]
  },
  {
    id: 6,
    icon: Palette,
    title: "Modern Filmmaking Style",
    description: "Contemporary wedding cinematography with cutting-edge techniques, natural lighting, and authentic emotional storytelling.",
    features: [
      "Modern color grading",
      "Natural lighting mastery",
      "Authentic emotion capture",
      "Contemporary editing"
    ]
  }
];

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="relative bg-cream py-20 z-20 shadow-2xl -mt-20 rounded-t-3xl mb-12"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4" data-testid="text-services-title">
            Our Wedding Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="text-services-subtitle">
            We offer cinematic full video coverage, highlights, teasers, and behind-the-scenes documentation with modern filmmaking techniques. Our elegant shoots at your favorite locations create timeless memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`card-service-${service.id}`}
            >
              <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors">
                <service.icon className="text-sage w-8 h-8" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4" data-testid={`text-service-title-${service.id}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed" data-testid={`text-service-description-${service.id}`}>
                {service.description}
              </p>
              <ul className="space-y-2 text-gray-600">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center" data-testid={`text-service-feature-${service.id}-${featureIndex}`}>
                    <Check className="text-sage w-4 h-4 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
