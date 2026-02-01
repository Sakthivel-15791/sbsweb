import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nav text-nav-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Scale Beyond Solutions" className="h-12 mb-4" />
            <p className="text-nav-foreground/80 mb-4 max-w-md">
              Your trusted digital marketing partner in Krishnagiri and Hosur. 
              We help businesses scale beyond limits with innovative digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919943036410" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                  +91 99430 36410
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:sbsolutions247@outlook.com" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors text-sm">
                  sbsolutions247@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-nav-foreground/80">
                  Krishnagiri & Hosur,<br />Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nav-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-nav-foreground/80 text-sm">
              © {currentYear} Scale Beyond Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
