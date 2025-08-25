import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface InquiryForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  weddingDate: string;
  venue: string;
  packageInterest: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState<InquiryForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    venue: "",
    packageInterest: "",
    message: ""
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InquiryForm) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your inquiry! We will get back to you within 24 hours.",
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        weddingDate: "",
        venue: "",
        packageInterest: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry.mutate(form);
  };

  const handleInputChange = (field: keyof InquiryForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.section
      id="contact"
      className="relative bg-cream py-20 z-50 -mt-20 rounded-t-3xl"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6" data-testid="text-contact-title">
              Let's Create Magic Together
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-contact-description">
              Ready to tell your love story? We'd love to hear about your special day and discuss how we can capture your unique moments with our cinematic approach.
            </p>

            <div className="space-y-6">
              <div className="flex items-center" data-testid="contact-phone">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-sage w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center" data-testid="contact-email">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-sage w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Email</h4>
                  <p className="text-gray-600">hello@theweddingpoets.com</p>
                </div>
              </div>

              <div className="flex items-center" data-testid="contact-location">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-sage w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">Service Area</h4>
                  <p className="text-gray-600">San Francisco Bay Area & Beyond</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-charcoal mb-4">Follow Our Work</h4>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-10 h-10 bg-sage/10 rounded-full hover:bg-sage hover:text-white transition-colors"
                  data-testid="link-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-10 h-10 bg-sage/10 rounded-full hover:bg-sage hover:text-white transition-colors"
                  data-testid="link-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-10 h-10 bg-sage/10 rounded-full hover:bg-sage hover:text-white transition-colors"
                  data-testid="link-youtube"
                >
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6" data-testid="text-form-title">
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">First Name</label>
                  <Input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="w-full"
                    required
                    data-testid="input-firstName"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Last Name</label>
                  <Input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="w-full"
                    required
                    data-testid="input-lastName"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Phone</label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full"
                  data-testid="input-phone"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Wedding Date</label>
                  <Input
                    type="date"
                    value={form.weddingDate}
                    onChange={(e) => handleInputChange("weddingDate", e.target.value)}
                    className="w-full"
                    data-testid="input-weddingDate"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Venue</label>
                  <Input
                    type="text"
                    value={form.venue}
                    onChange={(e) => handleInputChange("venue", e.target.value)}
                    placeholder="Venue name or location"
                    className="w-full"
                    data-testid="input-venue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Package Interest</label>
                <Select value={form.packageInterest} onValueChange={(value) => handleInputChange("packageInterest", value)}>
                  <SelectTrigger className="w-full" data-testid="select-packageInterest">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="essential">Essential ($2,500)</SelectItem>
                    <SelectItem value="signature">Signature ($4,200)</SelectItem>
                    <SelectItem value="luxury">Luxury ($6,500)</SelectItem>
                    <SelectItem value="custom">Custom Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Tell us about your wedding</label>
                <Textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Share your vision, style preferences, and any special requests..."
                  className="w-full resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={submitInquiry.isPending}
                className="w-full bg-sage hover:bg-sage/90 text-white py-4 rounded-xl font-medium transition-colors shadow-lg hover:shadow-xl"
                data-testid="button-submit"
              >
                {submitInquiry.isPending ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
