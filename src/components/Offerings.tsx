import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, Wrench, Compass, Calendar, Award } from "lucide-react";

const offerings = [
  {
    icon: UserCheck,
    title: "Mentorship Programs",
    items: [
      "One-to-one mentoring matched by interest",
      "Monthly check-ins with 3-6 month plans",
      "Group mentoring in topic-based cohorts",
    ],
  },
  {
    icon: Wrench,
    title: "Skill-Building Workshops",
    items: [
      "Communication and resume writing",
      "Interview practice and preparation",
      "Time management and digital skills",
    ],
  },
  {
    icon: Compass,
    title: "Career Guidance",
    items: [
      "Career exploration and pathway planning",
      "Application help and major selection",
      "Employer panels and mock interviews",
    ],
  },
  {
    icon: Calendar,
    title: "Community Events",
    items: [
      "Webinars and local meetups",
      "Volunteer drives and awareness campaigns",
      "Annual youth summit showcasing projects",
    ],
  },
  {
    icon: Award,
    title: "Leadership Opportunities",
    items: [
      "Campus Ambassador programs",
      "Project lead roles and event coordination",
      "Social-impact initiatives with team support",
    ],
  },
];

const Offerings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offerings" className="py-24 bg-background" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-muted-foreground">
            Comprehensive programs designed to help students grow and succeed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <offering.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {offering.title}
                </h3>

                <ul className="space-y-3">
                  {offering.items.map((item, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
