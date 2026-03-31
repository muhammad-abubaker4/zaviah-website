import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import zaviahLogo from "@/assets/Zaviah_Logo1.png";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Vision", href: "#vision" },
  { name: "Pillars", href: "#pillars" },
  { name: "Values", href: "#values" },
  { name: "Offerings", href: "#offerings" },
  { name: "Partnerships", href: "#partnerships" },
  { name: "Contact", href: "#contact" },
  {
    name: "Team",
    subItems: [
      { name: "Founder", href: "/founder", internal: true },
      { name: "Co-Founder", href: "/co-founder", internal: true },
      { name: "Core Members", href: "/core-members", internal: true },
    ],
  },
  {
    name: "Join Us",
    subItems: [
      { name: "Member/Volunteer/Mentor", href: "https://forms.gle/MAQGim1z9gSptnAn7", internal: false },
      { name: "Ambassador", href: "https://forms.gle/jEVucnCMiAhKfKuXA", internal: false },
      { name: "Core Team Member", href: "https://forms.gle/x3Pu6GokwGLszBfBA", internal: false },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  // Handle scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = (href: string) => {
    // Check if we're on the home page
    const isHomePage = location.pathname === "/";

    if (!isHomePage) {
      // If not on home page, navigate to home with hash
      navigate(`/${href}`);
      return;
    }

    // If on home page, scroll to section
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        id="navbar"
        className="relative bg-white shadow-md transition-all duration-300"
      >
        <div className="container px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={zaviahLogo}
                alt="Zaviah Logo"
                className="h-20 md:h-30 w-auto object-contain"
              />
              <span
                className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Zaviah
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                if (item.subItems) {
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <button className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground hover:bg-muted transition-all duration-300 tracking-wide flex items-center gap-1">
                          {item.name}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className={item.name === "Join Us" ? "w-64" : "w-56"}>
                        {item.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            {subItem.internal ? (
                              <Link to={subItem.href} className="cursor-pointer">
                                {subItem.name}
                              </Link>
                            ) : (
                              <a
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer"
                              >
                                {subItem.name}
                              </a>
                            )}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                } else {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="px-5 py-2.5 rounded-lg text-base font-semibold text-foreground hover:bg-muted transition-all duration-300 tracking-wide"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
            </div>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-40 bg-white backdrop-blur-md shadow-lg lg:hidden max-h-[calc(100vh)] overflow-y-auto"
        >
          <div className="container px-4 py-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.subItems) {
                  return (
                    <div key={item.name} className="px-4 py-3.5">
                      <button
                        onClick={() => {
                          if (item.name === "Team") setIsTeamOpen(!isTeamOpen);
                          if (item.name === "Join Us") setIsJoinUsOpen(!isJoinUsOpen);
                        }}
                        className="flex items-center justify-between w-full px-4 py-3.5 rounded-lg text-foreground hover:bg-muted transition-colors font-semibold text-lg"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${(item.name === "Team" && isTeamOpen) || (item.name === "Join Us" && isJoinUsOpen) ? 'rotate-180' : ''
                          }`} />
                      </button>
                      {((item.name === "Team" && isTeamOpen) || (item.name === "Join Us" && isJoinUsOpen)) && (
                        <div className="flex flex-col gap-1 ml-4 mt-2">
                          {item.subItems.map((subItem) => (
                            subItem.internal ? (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ) : (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                              >
                                {subItem.name}
                              </a>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="px-4 py-3.5 rounded-lg text-foreground hover:bg-muted transition-colors font-semibold text-lg"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
