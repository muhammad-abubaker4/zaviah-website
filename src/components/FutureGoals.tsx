import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Rocket } from "lucide-react";

const shortTermGoals = [
  {
    title: "Launch Zaviah's Mentorship Program",
    description:
      "Introduce a structured mentorship system that connects students with professionals, educators, and youth leaders who can guide them in academic, career, and personal growth journeys.",
  },
  {
    title: "Conduct Virtual Workshops for Students Nationwide",
    description:
      "Organize online sessions on essential skills such as communication, leadership, critical thinking, and personal development, making learning accessible to students from all regions.",
  },
  {
    title: "Onboard Campus Ambassadors from Different Universities",
    description:
      "Build a network of motivated student representatives who will promote Zaviah's mission, coordinate activities, and act as a bridge between their campuses and the Zaviah team.",
  },
  {
    title: "Collaborate with Local Youth Organizations",
    description:
      "Establish partnerships with regional student and youth-led groups to organize joint events, mentorship sessions, and awareness campaigns, expanding Zaviah's grassroots presence.",
  },
];

const longTermGoals = [
  {
    title: "Build Zaviah Learning Portal (Online Platform)",
    description:
      "Develop a dedicated digital hub offering mentorship tools, learning resources, online courses, and community spaces for students to connect and grow.",
  },
  {
    title: "Host Annual Zaviah Youth Conference",
    description:
      "Launch a national event that brings together young leaders, educators, and professionals to exchange ideas, share experiences, and celebrate youth achievements.",
  },
  {
    title: "Partner with International Youth Movements",
    description:
      "Collaborate with global organizations that share Zaviah's vision to create cross-border opportunities for students, such as exchange programs, online mentorships, and collaborative campaigns.",
  },
  {
    title: "Create Sustainable Programs for Leadership and Career Readiness",
    description:
      "Design long-term initiatives that equip students with practical skills, leadership experience, and career guidance to help them transition smoothly into professional life.",
  },
];

const FutureGoals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="future-goals" className="py-16 md:py-20 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Future <span className="text-primary">Goals</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Where we&apos;re headed, driven by consistent effort, collaboration, and courage to lead change.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Short-Term Goals (Next 6–12 Months)
              </h3>
            </div>
            <ul className="space-y-4">
              {shortTermGoals.map((goal) => (
                <li
                  key={goal.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-soft"
                >
                  <p className="font-semibold text-foreground mb-2">{goal.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Long-Term Goals (Next 2–3 Years)
              </h3>
            </div>
            <ul className="space-y-4">
              {longTermGoals.map((goal) => (
                <li
                  key={goal.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-soft"
                >
                  <p className="font-semibold text-foreground mb-2">{goal.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;
