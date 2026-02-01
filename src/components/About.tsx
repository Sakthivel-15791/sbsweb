import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  "Tailored digital marketing strategies",
  "Data-driven approach for measurable results",
  "Dedicated team of experts",
  "Transparent reporting and communication",
  "Serving businesses in Krishnagiri & Hosur",
  "Affordable and flexible pricing",
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 bg-background" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Scale Beyond Solutions?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are a full-service digital marketing agency based in Krishnagiri and Hosur. 
              Our mission is to help local and regional businesses establish a strong online 
              presence and achieve sustainable growth through innovative digital solutions.
            </p>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className={`flex items-center gap-3 scroll-animate ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`bg-muted rounded-2xl p-8 md:p-12 scroll-animate scroll-animate-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">SBS</div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Scale Beyond Solutions
              </h3>
              <p className="text-muted-foreground mb-6">
                Your trusted partner for digital growth. We combine creativity with 
                data-driven strategies to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-card px-6 py-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Located in</div>
                  <div className="font-semibold text-foreground">Krishnagiri & Hosur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
