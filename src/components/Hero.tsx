import { ArrowRight, TrendingUp, Users, Globe } from "lucide-react";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Digital Marketing Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Scale Your Business{" "}
            <span className="text-primary">Beyond Limits</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            We help businesses grow with strategic digital marketing, web development, 
            and comprehensive lead generation solutions. Your success is our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all hover:gap-3">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <div className="bg-muted p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">200+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-muted p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">250+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="bg-muted p-6 rounded-xl col-span-2 md:col-span-1">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;