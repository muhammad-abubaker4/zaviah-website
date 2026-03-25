import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/Zaviah_BG.jpeg";


const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students collaborating and learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Youth Through{" "}
              <span className="text-secondary">Mentorship</span><span className="text-white">,</span> <span className="text-secondary">Guidance</span> & <span className="text-secondary">Growth</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
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
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">2025</div>
              <div className="text-xs sm:text-sm mt-1">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">250+</div>
              <div className="text-xs sm:text-sm mt-1">Students Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">10+</div>
              <div className="text-xs sm:text-sm mt-1">Mentors</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
