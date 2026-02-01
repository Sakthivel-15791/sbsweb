import { Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const teamMembers = [
  {
    name: "Mr. Sakthivel",
    role: "Chief Executive Officer",
    description: "Visionary leader driving business growth and strategic partnerships.",
    initials: "S",
  },
  {
    name: "Mr. Gowtham",
    role: "Chief Technology Officer",
    description: "Tech expert ensuring cutting-edge solutions and digital innovation.",
    initials: "G",
  },
  {
    name: "Ms. Priyadharshini",
    role: "Director",
    description: "Operations specialist managing client success and team excellence.",
    initials: "P",
  },
];

const Team = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="team" className="py-20 bg-muted" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced team is dedicated to helping your business succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow scroll-animate ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-foreground">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <div className="text-secondary font-semibold mb-4">{member.role}</div>
              <p className="text-muted-foreground mb-6">{member.description}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:sbsolutions247@outlook.com"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-foreground"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
