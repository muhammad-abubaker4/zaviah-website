import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb } from "lucide-react";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-white mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              
              <p className="text-white/90 text-lg leading-relaxed">
                To create a future where every young person has equal access to mentorship, education, and opportunities, regardless of their background. We aim to become a leading youth-driven platform that connects students with mentors, encourages self-discovery, and promotes leadership development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                To build a supportive environment for young people to learn, lead, and grow together through:
              </p>
              
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0" />
                  <span>Bridging the opportunity gap in education and mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0" />
                  <span>Providing one-on-one guidance and mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0" />
                  <span>Building strong, supportive student networks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0" />
                  <span>Nurturing confident, capable leaders</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
