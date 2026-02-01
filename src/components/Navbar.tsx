import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Scale Beyond Solutions" className="h-10 md:h-14" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-nav-foreground font-medium hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919943036410"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-nav-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-nav-foreground/20">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-nav-foreground font-medium py-2 px-4 hover:bg-nav-foreground/10 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919943036410"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-semibold mt-2 justify-center"
              >
                <Phone className="w-4 h-4" />
                +91 99430 36410
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
