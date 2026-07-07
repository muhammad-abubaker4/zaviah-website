import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { scrollToHashWhenReady } from "@/lib/scroll";
import { ORG_PROFILE_PDF } from "@/lib/constants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Zaviah</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">
            Zaviah is a youth-led non-profit empowering students through mentorship, skill development, and personal
            growth. Founded in July 2025, we connect young people across Pakistan with mentors, workshops, and
            opportunities, guided by Access, Awareness, and Aspiration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToHashWhenReady("#pillars")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore our Pillars
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={ORG_PROFILE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Download org profile (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
