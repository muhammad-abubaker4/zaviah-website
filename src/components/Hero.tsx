import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { heroBackgroundSlides } from "@/data/galleryImages";

const SLIDE_INTERVAL_MS = 5500;

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (heroBackgroundSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroBackgroundSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroBackgroundSlides.map((slide, i) => (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={i === slideIndex ? slide.alt : ""}
            aria-hidden={i !== slideIndex}
            decoding="async"
            fetchPriority={i === 0 ? "high" : "low"}
            animate={{ opacity: i === slideIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ))}
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
            <h1 className="flex flex-col items-center text-xl min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              <span className="whitespace-nowrap">Empowering Youth Through</span>
              <span className="whitespace-nowrap">
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
            className="w-full max-w-[100vw] text-primary-foreground/90 mb-8 px-1 text-xs min-[380px]:text-sm sm:text-base md:text-lg whitespace-nowrap overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-medium transition-all duration-300 hover:scale-105"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-primary-foreground/90"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">July 2025</div>
              <div className="text-xs sm:text-sm mt-1">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">1000+</div>
              <div className="text-xs sm:text-sm mt-1">Students Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">20+</div>
              <div className="text-xs sm:text-sm mt-1">Mentors</div>
            </div>
          </motion.div>
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
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-foreground/50 rounded-full mt-1.5 sm:mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
