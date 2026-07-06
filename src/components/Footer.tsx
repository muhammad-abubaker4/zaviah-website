import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollToHashWhenReady } from "@/lib/scroll";
import { WHATSAPP_URL, EMAIL, MAILTO_URL, JOIN_FORM_URL } from "@/lib/constants";
import { footerSocialLinks } from "@/data/socialLinks";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import zaviahLogo from "@/assets/Zaviah_Logo1.png";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Programs", href: "#offerings" },
  { label: "Membership", href: "#join" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
];

const footerPrograms = [
  { label: "Mentorship Programs", href: "#offerings" },
  { label: "Skill-Building Workshops", href: "#offerings" },
  { label: "Career Guidance", href: "#offerings" },
  { label: "Community Events", href: "#offerings" },
  { label: "Leadership Opportunities", href: "#offerings" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (href: string) => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: href.slice(1) });
      return;
    }
    scrollToHashWhenReady(href);
  };

  const columnHeading = "mb-4 text-sm font-bold uppercase tracking-wide text-foreground";
  const linkClass =
    "text-sm text-foreground transition-colors hover:text-primary md:text-[15px]";

  return (
    <footer className="bg-[#e9ecec] text-foreground">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-10 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-3">
              <img
                src={zaviahLogo}
                alt=""
                className="h-14 w-auto shrink-0 object-contain"
                aria-hidden
              />
              <span className="text-xl font-bold uppercase leading-tight tracking-wide text-foreground">
                Zaviah
              </span>
            </Link>

            <p className="mb-2 text-sm font-bold text-primary whitespace-nowrap sm:text-[15px]">
              Access | Awareness | Aspiration
            </p>

            <p className="mb-4 text-sm leading-relaxed text-foreground md:text-[15px]">
              🕊️ A non-profit initiative for mentorship, guidance, and growth
            </p>

            <a
              href={MAILTO_URL}
              className="mb-5 block text-sm font-bold text-foreground hover:text-primary md:text-[15px]"
            >
              {EMAIL}
            </a>

            <div className="flex flex-wrap gap-2">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                  aria-label={social.label}
                >
                  <social.Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-[15px] w-[15px]" />
              </a>
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h4 className={columnHeading}>Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button type="button" onClick={() => handleHashLink(link.href)} className={linkClass}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div>
            <h4 className={columnHeading}>Programs</h4>
            <ul className="space-y-2.5">
              {footerPrograms.map((program) => (
                <li key={program.label}>
                  <button
                    type="button"
                    onClick={() => handleHashLink(program.href)}
                    className={`text-left ${linkClass}`}
                  >
                    {program.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — CTA */}
          <div>
            <h4 className="mb-2 text-base font-bold text-foreground md:text-lg">
              Apply to Be a Member!
            </h4>
            <p className="mb-5 text-sm leading-relaxed text-foreground md:text-[15px]">
              Opportunities to connect with peers, build skills, and grow with a nationwide
              community of students and leaders.
            </p>
            <a
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 bg-white py-4">
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center text-sm text-foreground/80 md:px-8">
          <p>
            Copyright &copy; {currentYear}{" "}
            <span className="font-bold text-foreground">Zaviah - Youth Empowerment Platform</span>
            {" | "}
            Design and Developed by{" "}
            <a
              href="https://www.instagram.com/muhammad._abubaker/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:underline underline-offset-2"
            >
              Muhammad Abubaker
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
