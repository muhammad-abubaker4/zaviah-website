import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Zaviah</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground"
        >
          <p className="text-justify">
            Zaviah is a youth-led non-profit initiative that empowers students through mentorship, skill development, and personal growth. We help students discover their strengths, build connections, and gain access to opportunities that can shape their futures. We believe that every student, no matter where they come from, deserves guidance, support, and the right tools to grow. Our work is guided by three powerful ideas: Access, Awareness, and Aspiration.
          </p>
          <p className="text-justify">
            Founded in July 2025 amid the challenges facing Pakistani youth, such as unequal access to education and career resources, Zaviah began as a small mentorship circle with a bold vision to bridge these gaps. What started with a handful of passionate individuals has blossomed into a vibrant national network, connecting students across diverse regions through virtual and in-person initiatives. We have created spaces where young people can engage in workshops, connect with mentors, and explore pathways to personal and professional success.
          </p>
          <p className="text-justify">
            What sets Zaviah apart is our community-driven approach we are run by youth, for youth, ensuring authenticity and relevance in everything we do. Our initiatives tackle real-world challenges, such as bridging divides between urban and rural communities, by collaborating with local organizations and offering free, accessible resources.
          </p>
          <p className="text-justify">
            For example, a high school student dreaming of university can find step-by-step guidance through our mentorship sessions, while a recent graduate seeking career clarity can access workshops tailored to their goals. Every activity is designed to empower, whether it is helping a participant uncover a hidden talent, connect with a mentor who sparks inspiration, or take their first bold step toward a dream career.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
