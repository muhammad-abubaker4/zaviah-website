import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown } from "lucide-react";
import { heroBackgroundSlides } from "@/data/galleryImages";
import { JOIN_FORM_URL, ORG_PROFILE_PDF, PARTNER_COUNT } from "@/lib/constants";
import { scrollToHashWhenReady } from "@/lib/scroll";
import AnimatedCounter from "@/components/AnimatedCounter";

const SLIDE_INTERVAL_MS = 5500;

const scrollToAbout = () => scrollToHashWhenReady("#about");

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const activeSlide = heroBackgroundSlides[slideIndex] ?? heroBackgroundSlides[0];
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const first = heroBackgroundSlides[0];
    if (!first) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = first.src;
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  useEffect(() => {
    if (heroBackgroundSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroBackgroundSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    heroBackgroundSlides.forEach((slide, i) => {
      if (i === slideIndex) return;
      const img = new Image();
      img.src = slide.src;
    });
  }, [slideIndex]);

  return (
    <section id="hero" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {activeSlide && (
          <motion.img
            key={activeSlide.src}
            src={activeSlide.src}
            alt={activeSlide.alt}
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/55 via-primary/45 to-accent/30 z-[1]" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <h1 className="mb-6 flex flex-col items-center text-xl font-bold leading-tight text-primary-foreground min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-balance">Empowering Youth Through</span>
              <span className="text-balance">
                <span className="text-secondary">Mentorship</span>
                <span className="text-white">, </span>
                <span className="text-secondary">Guidance</span>
                {" "}&{" "}
                <span className="text-secondary">Growth</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl text-primary-foreground/90 mb-8 px-1 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            A youth-led platform connecting students with mentors, opportunities, and the guidance they need to thrive
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-medium transition-all duration-300 hover:scale-105"
            >
              <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 justify-items-center gap-x-4 gap-y-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-10 text-primary-foreground/90 max-w-lg sm:max-w-none mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">July 2025</div>
              <div className="text-xs sm:text-sm mt-1">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm mt-1">Students Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm mt-1">Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                <AnimatedCounter end={PARTNER_COUNT} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm mt-1">Partner Organizations</div>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            href={ORG_PROFILE_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <FileDown className="h-4 w-4" />
            Organization Profile 2026
          </motion.a>
        </div>
      </div>

      {heroBackgroundSlides.length > 1 && (
        <div
          className="absolute bottom-20 sm:bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
          aria-hidden
        >
          {heroBackgroundSlides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slideIndex ? "w-6 bg-primary-foreground" : "w-1.5 bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          {prefersReducedMotion ? (
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-foreground/50 rounded-full mt-1.5 sm:mt-2" />
          ) : (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-foreground/50 rounded-full mt-1.5 sm:mt-2"
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
