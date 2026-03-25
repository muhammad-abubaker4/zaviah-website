import { Instagram, Facebook, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Zaviah</h3>
            <p className="text-background/80 leading-relaxed">
              A youth-driven platform for mentorship, guidance, and growth. Empowering students through Access, Awareness, and Aspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pillars" className="text-background/80 hover:text-secondary transition-colors">
                  Our Pillars
                </a>
              </li>
              <li>
                <a href="#offerings" className="text-background/80 hover:text-secondary transition-colors">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#team" className="text-background/80 hover:text-secondary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/zaviah_org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/zaviahorg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/zaviahorg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linktr.ee/zaviahorg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Linktree"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="mt-6 text-background/80 text-sm">
              <p>Email: zaviahorg@gmail.com</p>
              <p>WhatsApp: +92 303 8156166</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
          <p>&copy; {currentYear} Zaviah. All rights reserved.</p>
          <p className="mt-2">Built with passion for empowering youth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
