import { useState, useEffect, useCallback } from "react";
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
import {
  AMBASSADOR_FORM_URL,
  CORE_TEAM_FORM_URL,
  JOIN_FORM_URL,
} from "@/lib/constants";
import { scrollToHashWhenReady, unlockPageScroll } from "@/lib/scroll";
import { useActiveSection, isAboutSectionActive, isTeamRouteActive } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import zaviahLogo from "@/assets/Zaviah_Logo1.png";

type NavLink = { name: string; href: string };
type NavDropdown = {
  name: string;
  subItems: Array<{ name: string; href: string; internal?: boolean }>;
};

const aboutSubItems: NavDropdown["subItems"] = [
  { name: "Our Story", href: "#about" },
  { name: "Founder's Message", href: "#founder-message" },
  { name: "Vision & Mission", href: "#vision" },
  { name: "Core Pillars", href: "#pillars" },
  { name: "Our Values", href: "#values" },
  { name: "Future Goals", href: "#future-goals" },
];

const teamSubItems: NavDropdown["subItems"] = [
  { name: "Founder", href: "/founder", internal: true },
  { name: "Co-Founder", href: "/co-founder", internal: true },
  { name: "Core Members", href: "/core-members", internal: true },
];

const joinSubItems: NavDropdown["subItems"] = [
  { name: "Member", href: JOIN_FORM_URL },
  { name: "Ambassador", href: AMBASSADOR_FORM_URL },
  { name: "Core Team Member", href: CORE_TEAM_FORM_URL },
];

const navLinks: NavLink[] = [
  { name: "Programs", href: "#offerings" },
  { name: "Gallery", href: "#gallery" },
  { name: "Partners", href: "#partnerships" },
  { name: "Contact", href: "#contact" },
];

const navDropdowns: NavDropdown[] = [
  { name: "About", subItems: aboutSubItems },
  { name: "Team", subItems: teamSubItems },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useActiveSection();

  const isLinkActive = (href: string) =>
    location.pathname === "/" && activeSection === href.replace("#", "");

  const navButtonClass = (href: string, mobile = false) =>
    cn(
      mobile
        ? "w-full rounded-lg px-4 py-3.5 text-left text-lg font-semibold transition-colors"
        : "rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 xl:text-base",
      isLinkActive(href) ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted",
    );

  const aboutNavClass = (mobile = false) =>
    cn(
      mobile
        ? "flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-lg font-semibold transition-colors"
        : "flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 xl:text-base",
      location.pathname === "/" && isAboutSectionActive(activeSection)
        ? "text-primary bg-primary/10"
        : "text-foreground hover:bg-muted",
    );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
    unlockPageScroll();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      unlockPageScroll();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const scrollToSection = (href: string) => {
    closeMobileMenu();

    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate({ pathname: "/", hash: href.slice(1) });
        return;
      }
      scrollToHashWhenReady(href);
      return;
    }

    navigate(href);
  };

  const dropdownTriggerClass = (item: NavDropdown, mobile = false) => {
    if (item.name === "About") return aboutNavClass(mobile);
    if (item.name === "Team") {
      return cn(
        mobile
          ? "flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-lg font-semibold transition-colors"
          : "flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 xl:text-base",
        isTeamRouteActive(location.pathname) ||
          (location.pathname === "/" && activeSection === "team")
          ? "text-primary bg-primary/10"
          : "text-foreground hover:bg-muted",
      );
    }
    return cn(
          mobile
            ? "flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-lg font-semibold transition-colors"
            : "flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 xl:text-base",
          "text-foreground hover:bg-muted",
        );
  };

  const renderDropdown = (item: NavDropdown, mobile = false) => {
    if (mobile) {
      const isOpen = openMobileDropdown === item.name;
      return (
        <div key={item.name} className="px-4 py-2">
          <button
            type="button"
            onClick={() => setOpenMobileDropdown(isOpen ? null : item.name)}
            className={dropdownTriggerClass(item, true)}
          >
            {item.name}
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
          {isOpen && (
            <div className="ml-4 mt-1 flex flex-col gap-1">
              {item.subItems.map((subItem) =>
                subItem.internal ? (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-4 py-2 text-foreground hover:bg-muted transition-colors"
                  >
                    {subItem.name}
                  </Link>
                ) : subItem.href.startsWith("#") ? (
                  <button
                    key={subItem.name}
                    type="button"
                    onClick={() => scrollToSection(subItem.href)}
                    className="w-full rounded-lg px-4 py-2 text-left text-foreground hover:bg-muted transition-colors"
                  >
                    {subItem.name}
                  </button>
                ) : (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="rounded-lg px-4 py-2 text-foreground hover:bg-muted transition-colors"
                  >
                    {subItem.name}
                  </a>
                ),
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <DropdownMenu key={item.name} modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={dropdownTriggerClass(item)}
          >
            {item.name}
            <ChevronDown className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {item.subItems.map((subItem) =>
            subItem.internal ? (
              <DropdownMenuItem key={subItem.name} asChild>
                <Link to={subItem.href} className="cursor-pointer">
                  {subItem.name}
                </Link>
              </DropdownMenuItem>
            ) : subItem.href.startsWith("#") ? (
              <DropdownMenuItem
                key={subItem.name}
                className="cursor-pointer"
                onSelect={(e) => {
                  e.preventDefault();
                  scrollToSection(subItem.href);
                }}
              >
                {subItem.name}
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem key={subItem.name} asChild>
                <a
                  href={subItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {subItem.name}
                </a>
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        id="navbar"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-white shadow-sm"
        }`}
      >
        <div className="container px-4">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.history.replaceState(null, "", "/");
                } else {
                  navigate("/");
                }
                closeMobileMenu();
              }}
              className="flex items-center gap-2 cursor-pointer sm:gap-3"
            >
              <img
                src={zaviahLogo}
                alt="Zaviah Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-12" : "h-16"
                }`}
              />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent tracking-tight sm:text-3xl">
                Zaviah
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navDropdowns.map((item) => renderDropdown(item))}
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={navButtonClass(item.href)}
                >
                  {item.name}
                </button>
              ))}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    className="ml-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                  >
                    Join Us
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  {joinSubItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <a
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        {subItem.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden
        />
      )}

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-40 max-h-screen overflow-y-auto bg-white shadow-lg lg:hidden"
        >
          <div className="container px-4 py-6 pt-20">
            <div className="flex flex-col gap-1">
              {navDropdowns.map((item) => renderDropdown(item, true))}
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={navButtonClass(item.href, true)}
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-3">
                <p className="mb-2 px-4 text-sm font-semibold text-muted-foreground">Join Us</p>
                {joinSubItems.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-4 py-2.5 text-foreground hover:bg-muted transition-colors"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
