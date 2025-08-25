import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The Wedding Poets captured our day with such artistry and emotion. Every time we watch our wedding film, we relive those precious moments. Absolutely magical!",
    name: "Sarah & Michael",
    wedding: "Napa Valley Wedding",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    rating: 5,
    text: "Professional, creative, and so easy to work with. They made us feel comfortable and captured our personalities perfectly. The final video exceeded all expectations!",
    name: "Emma & James",
    wedding: "Garden Wedding",
    image: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    rating: 5,
    text: "From our engagement session to the wedding day, The Wedding Poets were incredible. Their attention to detail and artistic vision is unmatched. Highly recommend!",
    name: "Lisa & David",
    wedding: "Intimate Ceremony",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

const stats = [
  { number: "150+", label: "Weddings Filmed" },
  { number: "5.0", label: "Average Rating" },
  { number: "48hr", label: "Highlight Delivery" },
  { number: "100%", label: "Client Satisfaction" }
];

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      className="relative bg-white py-20 z-30 shadow-2xl -mt-20 rounded-t-3xl"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4" data-testid="text-testimonials-title">
            What Our Couples Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Every love story is unique, and we're honored to be part of these special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`rounded-2xl p-8 shadow-lg ${
                index % 2 === 0 ? "bg-cream" : "bg-champagne/20"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic" data-testid={`text-testimonial-quote-${testimonial.id}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`img-testimonial-${testimonial.id}`}
                />
                <div>
                  <h4 className="font-semibold text-charcoal" data-testid={`text-testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm" data-testid={`text-testimonial-wedding-${testimonial.id}`}>
                    {testimonial.wedding}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="font-playfair text-4xl font-bold text-sage mb-2" data-testid={`text-stat-number-${index}`}>
                {stat.number}
              </div>
              <p className="text-gray-600" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
