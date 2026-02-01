import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sbsolutions247@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-background" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to scale your business? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Phone</div>
                  <a
                    href="tel:+919943036410"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 99430 36410
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <a
                    href="mailto:sbsolutions247@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sbsolutions247@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Locations</div>
                  <div className="text-muted-foreground">
                    Krishnagiri & Hosur, Tamil Nadu, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Working Hours</div>
                  <div className="text-muted-foreground">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-muted rounded-2xl p-8 scroll-animate ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-foreground"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-foreground"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
