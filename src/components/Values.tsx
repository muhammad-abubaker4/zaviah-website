import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, GraduationCap, Shield, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Empowerment",
    description: "We lift others up through mentorship and support, creating spaces where students feel capable and confident.",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Everyone is welcome. We celebrate diversity and ensure every voice is heard and valued.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Learning through connection and guidance, building relationships that inspire lifelong growth.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest, fair, and transparent in all our work. Trust is the foundation of everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous learning and improvement, both personal and collective. We evolve with every step.",
  },
];

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="values" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-xl text-muted-foreground">
            Values that guide how we work, connect, and grow together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border text-center h-full flex flex-col items-center hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
