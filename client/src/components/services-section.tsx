import { motion } from "framer-motion";
import { Video, Film, Camera, Heart, Eye, Palette, Check } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Video,
    title: "Cinematic Videography",
    description: "Full-day cinematic coverage capturing every emotion, detail, and moment with professional-grade equipment and artistic storytelling.",
    features: [
      "Full ceremony coverage",
      "Reception highlights",
      "4K quality footage",
      "Professional audio"
    ]
  },
  {
    id: 2,
    icon: Film,
    title: "Wedding Highlights",
    description: "Beautifully edited highlight reels that capture the essence of your wedding day in a shareable, emotional film.",
    features: [
      "3-5 minute highlights",
      "Custom music selection",
      "Social media ready",
      "Quick turnaround"
    ]
  },
  {
    id: 3,
    icon: Camera,
    title: "Wedding Photography",
    description: "Elegant couple photography and wedding documentation with a focus on natural moments and artistic composition.",
    features: [
      "High-resolution images",
      "Professional editing",
      "Online gallery",
      "Print release included"
    ]
  },
  {
    id: 4,
    icon: Heart,
    title: "Engagement Sessions",
    description: "Pre-wedding photo and video sessions at your favorite locations, perfect for save-the-dates and getting comfortable with our style.",
    features: [
      "Location scouting",
      "Styling guidance",
      "Multiple outfit changes",
      "Same-day preview"
    ]
  },
  {
    id: 5,
    icon: Eye,
    title: "Behind the Scenes",
    description: "Capture the unseen moments - getting ready, vendor interactions, and candid family moments that tell the complete story.",
    features: [
      "Getting ready coverage",
      "Vendor documentation",
      "Candid family moments",
      "Setup and details"
    ]
  },
  {
    id: 6,
    icon: Palette,
    title: "Modern Aesthetic",
    description: "Contemporary wedding filmmaking with a focus on natural lighting, authentic emotions, and timeless elegance.",
    features: [
      "Natural lighting",
      "Authentic moments",
      "Timeless editing",
      "Modern techniques"
    ]
  }
];

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="relative bg-cream py-20 z-20 shadow-2xl"
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
            We specialize in cinematic storytelling, capturing every precious moment with artistic vision and technical excellence.
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
