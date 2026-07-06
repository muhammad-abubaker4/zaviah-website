import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Unlock, Eye, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Unlock,
    title: "Access",
    description: "Making sure all students have fair chances to learn, grow, and connect with mentors. We work to ensure equal access to mentorship, learning, and personal growth for students across Pakistan.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Eye,
    title: "Awareness",
    description: "Through mentorship, workshops, and open discussions, we help students become more confident, informed, and self-aware, ready to make better choices for their future and create positive change.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Rocket,
    title: "Aspiration",
    description: "Inspiring youth to dream big, act with confidence, and lead with integrity. We help youth believe in themselves, pursue meaningful goals, and create lasting impact in their communities.",
    gradient: "from-secondary to-primary",
  },
];

const Pillars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pillars" className="py-24 bg-background" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core <span className="text-primary">Pillars</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-xl text-muted-foreground">
            Three fundamental principles that guide every decision we make
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full flex flex-col">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
