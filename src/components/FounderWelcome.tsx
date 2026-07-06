import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import hafsaKhalil from "@/assets/team/Hafsa_Khalil.jpeg";

const FounderWelcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder-message" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Founder&apos;s <span className="text-primary">Message</span>
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-accent" />
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Portrait — left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-sm md:max-w-none"
          >
            <div className="border-2 border-primary p-2 sm:p-3">
              <div className="border border-primary/40 p-1.5 sm:p-2">
                <img
                  src={hafsaKhalil}
                  alt="Hafsa Khalil, Founder & CEO of Zaviah"
                  className="aspect-[3/4] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Message — right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              We Are Not a Generation That Waits
            </h3>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                We are not a generation that waits for the world to hand us chances, we create them. When there is no
                table for us, we build our own. When the path doesn&apos;t exist, we carve one with our own hands.
              </p>
              <p>
                Zaviah is not just about dreams, it&apos;s about action. At Zaviah, we believe in empowering every
                young person to see their potential, act on their ideas, and make a difference. We are here to guide,
                mentor, and uplift youth who are ready to lead.
              </p>
              <p>
                Our mission is not limited to inspiration but focused on real impact through collaboration, knowledge,
                and growth. We rise, we lead, and we take others with us.
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-xl font-bold text-foreground">Hafsa Khalil</p>
              <p className="mt-1 text-sm font-semibold text-primary">Founder & CEO</p>
              <Link
                to="/founder"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Read full profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderWelcome;
