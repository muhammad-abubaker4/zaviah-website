import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Import team member images
import hafsaKhalil from "@/assets/team/Hafsa_Khalil.jpeg";
import muhammadAbubaker from "@/assets/team/Muhammad_Abubaker.jpg";
import qamarAbbas from "@/assets/team/Qamar_Abbas.jpeg";
import amnaIrfan from "@/assets/team/Amna_Irfan.jpeg";
import shaheer from "@/assets/team/Shaheer.jpeg";
import arsalan from "@/assets/team/Arsalan_Arif.jpeg";

const teamMembers = [
  {
    name: "Hafsa Khalil",
    role: "Founder",
    description: "Visionary leader committed to empowering youth through mentorship and learning.",
    image: hafsaKhalil,
  },
  {
    name: "Muhammad Abubaker",
    role: "Co-Founder",
    description: "Leads operations, strategy, and digital direction for meaningful student communities.",
    image: muhammadAbubaker,
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
    image: undefined, // Replace with: aliGoharQureshi
  },
  {
    name: "Arsalan Arif",
    role: "Admin & Coordination",
    description: "Ensures smooth operations through efficient organizational logistics management.",
    image: arsalan,
  },
  {
    name: "Warda Hanif",
    role: "Strategy & Planning",
    description: "Supports long-term planning and strategic initiatives aligned with our vision.",
    image: undefined, // Replace with: wardaHanif
  },
  {
    name: "Shaheer Ali",
    role: "Campus Coordination",
    description: "Builds campus presence, organizing events and connecting youth leaders.",
    image: shaheer,
  },
  {
    name: "Tashfeen",
    role: "Outreach & Engagement",
    description: "Strengthens partnerships and expands student reach through strategic outreach.",
    image: undefined,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full flex flex-col items-center text-center hover:-translate-y-2">
                {/* Team Member Photo */}
                <Avatar className="w-32 h-32 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <AvatarImage
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-hero">
                    <User className="w-16 h-16 text-white" />
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>

                <div className="text-sm font-semibold text-primary mb-3">
                  {member.role}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
