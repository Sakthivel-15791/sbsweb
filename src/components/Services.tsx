import {
  Globe,
  Search,
  Share2,
  MessageSquare,
  Megaphone,
  Users,
  Code,
  Settings,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Share2,
    title: "Meta Content Creation",
    description:
      "Strategic content creation and management for Facebook & Instagram to boost engagement and brand presence.",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Modern, responsive websites built to convert visitors into customers with cutting-edge technology.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing at its best with our maintenance services.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search rankings and organic traffic with our proven SEO strategies.",
  },
  {
    icon: Globe,
    title: "SEM / PPC Campaigns",
    description:
      "Targeted search engine marketing campaigns that drive qualified leads to your business.",
  },
  {
    icon: MessageSquare,
    title: "SMS / WhatsApp / Email",
    description:
      "Multi-channel marketing campaigns to reach your audience wherever they are.",
  },
  {
    icon: Megaphone,
    title: "Social Media Ads",
    description:
      "Create and manage high-converting social media ad campaigns across all platforms.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Generate quality leads for your business with our comprehensive lead generation strategies.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-20 bg-muted" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container mx-auto px-4 scroll-animate ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
