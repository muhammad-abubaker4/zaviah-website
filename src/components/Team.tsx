import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import hafsaKhalil from "@/assets/team/Hafsa_Khalil.jpeg";
import muhammadAbubaker from "@/assets/team/Muhammad_Abubaker.jpeg";
import qamarAbbas from "@/assets/team/Qamar_Abbas.jpeg";
import amnaIrfan from "@/assets/team/Amna_Irfan.jpeg";
import shaheer from "@/assets/team/Shaheer.jpeg";
import aliGoharQureshi from "@/assets/team/Ali Gohar.jpg";

const teamMembers = [
  {
    name: "Hafsa Khalil",
    role: "Founder",
    description: "Visionary leader committed to empowering youth through mentorship and learning.",
    image: hafsaKhalil,
    profileHref: "/founder",
  },
  {
    name: "Muhammad Abubaker",
    role: "Co-Founder",
    description: "Leads operations, strategy, and digital direction for meaningful student communities.",
    image: muhammadAbubaker,
    profileHref: "/co-founder",
  },
  {
    name: "Amna Irfan",
    role: "Ambassador Lead & Sessions Host",
    description: "Builds connections with students and mentors nationwide through outreach and hosts online mentorship sessions helping youth connect in virtual spaces.",
    image: amnaIrfan,
  },
  {
    name: "Qamar Abbas",
    role: "Ambassador Lead",
    description: "Builds connections with students and mentors nationwide through outreach.",
    image: qamarAbbas,
  },
  {
    name: "Ali Gohar Qureshi",
    role: "Outreach & Engagement",
    description: "Strengthens partnerships and expands student reach through strategic outreach.",
    image: aliGoharQureshi,
  },
  {
    name: "Shaheer Ali",
    role: "Campus Coordination",
    description: "Builds campus presence, organizing events and connecting youth leaders.",
    image: shaheer,
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-muted-foreground">
            Passionate young individuals working together to empower students
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full flex flex-col items-center text-center hover:-translate-y-2">
                <Avatar className="w-32 h-32 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <AvatarImage
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                    loading="lazy"
                  />
                  <AvatarFallback className="bg-gradient-hero">
                    <User className="w-16 h-16 text-white" />
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <div className="text-sm font-semibold text-primary mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{member.description}</p>

                {member.profileHref && (
                  <Link
                    to={member.profileHref}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-4"
                  >
                    View profile
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
