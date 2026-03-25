import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Zaviah</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p className="text-base sm:text-lg">
              Zaviah is a <strong className="text-foreground">youth-led non-profit initiative</strong> that empowers students through mentorship, skill development, and personal growth. We help students discover their strengths, build connections, and gain access to opportunities that can shape their futures.
            </p>
            <p className="text-base sm:text-lg">
              We believe that every student, no matter where they come from, deserves guidance, support, and the right tools to grow. Our work is guided by three powerful ideas: <strong className="text-primary">Access</strong>, <strong className="text-accent">Awareness</strong>, and <strong className="text-secondary">Aspiration</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg leading-relaxed text-muted-foreground"
          >
            <p className="text-base sm:text-lg">
              Founded in 2025 amid challenges facing Pakistani youth, Zaviah began as a small mentorship circle with a bold vision to bridge gaps in education and career resources. What started with a handful of passionate individuals has blossomed into a <strong className="text-foreground">vibrant national network</strong>.
            </p>
            <p className="text-base sm:text-lg">
              What sets us apart is our <strong className="text-foreground">community-driven approach</strong> — we are run by youth, for youth, ensuring authenticity and relevance in everything we do. Every activity is designed to empower, whether helping a participant uncover hidden talents or take bold steps toward dream careers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
