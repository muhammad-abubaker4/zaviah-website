import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import hibaSyed from "@/assets/team/Hiba_Syed.jpg";
import amnaSardar from "@/assets/team/MPA_Amna_Sardar.jpeg";
import rajaZeeshan from "@/assets/team/Raja_Zeeshan.jpeg";
import drSassiSherMalik from "@/assets/team/Dr_Sassi_Sher_Malik.jpeg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  image?: string;
  imageClass?: string;
};

/** Fill the circle; scale up slightly so more of the face shows through the clip */
const facePhotoClass = "h-full w-full rounded-full object-cover object-center scale-110";

const testimonials: Testimonial[] = [
  // Row 1: Yasmeen, Raja, Abubaker
  {
    quote:
      "Zaviah is a wonderful platform where anyone can freely ask questions and receive insightful guidance. The weekend sessions with experienced mentors have been a truly valuable learning opportunity for me.",
    name: "Yasmeen Zehra",
    role: "Member, Gilgit Baltistan",
    initials: "YZ",
  },
  {
    quote:
      "Zaviah's dedication to inspiring and uplifting youth is making a deeply meaningful difference. Their commitment to developing young leaders and driving positive change is truly commendable. I am proud to be part of a community that has such a lasting impact on future generations.",
    name: "Raja Zeeshan",
    role: "Member, Attock",
    initials: "RZ",
    image: rajaZeeshan,
    imageClass: facePhotoClass,
  },
  {
    quote:
      "Zaviah has become my favorite organization and the platform I consistently rely on. The level of expertise they bring to their sessions is outstanding. I am truly grateful for the brilliant mentors they invite and am excited for the future impact of their initiatives.",
    name: "Abubaker Sadiq",
    role: "Member, Swat",
    initials: "AS",
  },
  // Row 2: Hiba, Amna, Dr. Sassi
  {
    quote:
      "Zaviah is an excellent online platform that strongly encourages youth and women's participation. As a mentor, I love how it allows us to seamlessly deliver lectures, connect with new minds, and engage with creative ideas. It is a fantastic initiative that truly enhances both skills and knowledge.",
    name: "Hiba Syed",
    role: "Mentor, Karachi",
    initials: "HS",
    image: hibaSyed,
    imageClass: `${facePhotoClass} object-[center_18%]`,
  },
  {
    quote:
      "Zaviah is a phenomenal platform filled with highly talented, capable, and respectful youth. It was a pleasure interacting with such bright minds who ask incredibly insightful questions. I highly commend this initiative and wish the team continued success in all their endeavors.",
    name: "Amna Sardar",
    role: "MPA & Guest Speaker",
    initials: "Am",
    image: amnaSardar,
    imageClass: `${facePhotoClass} object-[center_12%]`,
  },
  {
    quote:
      "You guys are doing a great job, and I am very happy to be a part of it. Zaviah is a fantastic initiative, and I want to thank the team for inviting me. To all the participants: keep up the excellent work and continue striving for excellence.",
    name: "Dr. Sassi Sher Malik",
    role: "CSS Officer & Guest Speaker",
    initials: "SM",
    image: drSassiSherMalik,
    imageClass: `${facePhotoClass} object-[center_22%]`,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Voices from Our <span className="text-primary">Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Real stories from members, mentors, and guest speakers in the Zaviah network
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <Quote className="mb-4 h-8 w-8 text-secondary/80" aria-hidden />
              <p className="flex-1 text-muted-foreground leading-relaxed text-sm sm:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <Avatar className="h-12 w-12 shrink-0 rounded-full">
                  {item.image && (
                    <AvatarImage
                      src={item.image}
                      alt={item.name}
                      className={item.imageClass ?? facePhotoClass}
                      loading="lazy"
                    />
                  )}
                  <AvatarFallback className="bg-gradient-hero text-white text-sm font-semibold">
                    {item.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <cite className="not-italic font-semibold text-foreground block">{item.name}</cite>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{item.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
