import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Heart, Megaphone, Users } from "lucide-react";
import {
  AMBASSADOR_FORM_URL,
  CORE_TEAM_FORM_URL,
  JOIN_FORM_URL,
} from "@/lib/constants";

const roles = [
  {
    icon: Users,
    title: "Member",
    description: "Join sessions, attend events, and grow with students across Pakistan.",
    url: JOIN_FORM_URL,
    cta: "Apply now",
  },
  {
    icon: Megaphone,
    title: "Campus Ambassador",
    description: "Represent Zaviah at your school or university and grow our student network.",
    url: AMBASSADOR_FORM_URL,
    cta: "Become ambassador",
  },
  {
    icon: Heart,
    title: "Core Team Member",
    description: "Take a leadership role in programs, outreach, and organizational growth.",
    url: CORE_TEAM_FORM_URL,
    cta: "Join core team",
  },
];

const JoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="join" className="py-20 md:py-28 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join <span className="text-primary">Zaviah</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Whether you want to learn, lead, or grow, there is a place for you here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <motion.a
              key={role.title}
              href={role.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-white">
                <role.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{role.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{role.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                {role.cta}
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
