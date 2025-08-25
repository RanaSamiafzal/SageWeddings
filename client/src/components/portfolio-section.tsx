import { motion } from "framer-motion";
import { Play, Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Sarah & Michael",
    subtitle: "Napa Valley Wedding",
    icon: Play,
    type: "video"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Emma & James",
    subtitle: "Garden Wedding",
    icon: Play,
    type: "video"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Behind the Scenes",
    subtitle: "Our Creative Process",
    icon: Camera,
    type: "photo"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    title: "Engagement Sessions",
    subtitle: "Capturing your love story before the big day",
    icon: Heart,
    type: "photo",
    featured: true
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Lisa & David",
    subtitle: "Intimate Ceremony",
    icon: Play,
    type: "video"
  }
];

export default function PortfolioSection() {
  return (
    <motion.section
      id="portfolio"
      className="relative bg-white py-20 z-10 shadow-2xl -mt-20 rounded-t-3xl"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4" data-testid="text-portfolio-title">
            Our Cinematic Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            Every wedding is unique, and every love story deserves to be told with artistry and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                item.featured ? "md:col-span-2" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              data-testid={`card-portfolio-${item.id}`}
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.subtitle}`}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-playfair text-xl font-semibold" data-testid={`text-portfolio-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90" data-testid={`text-portfolio-subtitle-${item.id}`}>
                    {item.subtitle}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="icon"
                    className="bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    data-testid={`button-portfolio-${item.id}`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="link"
            className="text-sage hover:text-sage/80 font-medium text-lg"
            data-testid="link-full-portfolio"
          >
            View Full Portfolio →
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
