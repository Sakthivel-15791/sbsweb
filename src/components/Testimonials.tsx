import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    role: "Founder & CEO",
    content: "Scale Beyond Solutions transformed our online presence completely. Our website traffic increased by 300% within 3 months of their SEO optimization. Highly recommend their services!",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    company: "Fashion Hub",
    role: "Marketing Director",
    content: "Their social media management is exceptional. We saw a 5x increase in engagement and our brand awareness has never been higher. The team is professional and responsive.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Mohammed Farhan",
    company: "Greenleaf Organics",
    role: "Business Owner",
    content: "The WhatsApp marketing campaign they designed for us generated over 200 quality leads in just one month. Their understanding of local market is unmatched.",
    rating: 5,
    initials: "MF",
  },
  {
    name: "Lakshmi Narayanan",
    company: "AutoParts Express",
    role: "Managing Director",
    content: "We were struggling with lead generation until we partnered with Scale Beyond Solutions. Their Google Ads expertise helped us achieve a 400% ROI on our ad spend.",
    rating: 5,
    initials: "LN",
  },
  {
    name: "Anitha Venkatesh",
    company: "Wellness Studio",
    role: "Owner",
    content: "From website development to email marketing, they handle everything seamlessly. Our appointment bookings have doubled since we started working with them.",
    rating: 5,
    initials: "AV",
  },
  {
    name: "Suresh Babu",
    company: "Construction Plus",
    role: "Director",
    content: "The team at Scale Beyond Solutions understands business needs perfectly. Their meta ads strategy brought us consistent high-quality inquiries every week.",
    rating: 5,
    initials: "SB",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-secondary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with Scale Beyond Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border hover:shadow-lg transition-shadow duration-300 relative scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-secondary/30 absolute top-4 right-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 bg-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-secondary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-12 text-center scroll-animate scroll-animate-delay-3 ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-8 bg-card rounded-xl p-6 shadow-md border border-border">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4.9</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
