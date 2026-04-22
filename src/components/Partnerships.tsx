import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

// Import partner logos
import balochistanPhysioLogo from "@/assets/partners/BPC_Logo.png";
import youngLeadersLogo from "@/assets/partners/YLC_Logo.jpg";
import youthCombinationLogo from "@/assets/partners/YCP_Logo.png";
import iccd from "@/assets/partners/ICCD_Logo.png";
import rahnumaaLogo from "@/assets/partners/Rahnumaa_Logo.png";
import paxYouthLogo from "@/assets/partners/Pax_Youth_Logo.png";
import ygpLogo from "@/assets/partners/YGP_Logo.png";
import superStudentPkLogo from "@/assets/partners/SuperStudentPK_Logo.png";

const partners = [
  {
    name: "Balochistan Physio Club",
    type: "Strategic Partner",
    description: "Promoting awareness about physiotherapy and opportunities for young medical professionals.",
    logo: balochistanPhysioLogo,
  },
  {
    name: "Young Leaders Connect",
    type: "Official Community Partner",
    description: "Leadership and wellness retreat program for young professionals and aspiring entrepreneurs.",
    logo: youngLeadersLogo,
  },
  {
    name: "International Connection for Cultural Diplomacy",
    type: "Strategic Community Partner",
    // description: "Global youth community working on cultural diplomacy, international relations, UN simulations, and cross border collaboration.",
    description: "Youth led platform promoting cultural diplomacy, international relations, and global connectivity.",
    logo: iccd,
  },
  {
    name: "Youth Combination Pakistan",
    type: "Supporting Partner",
    description: "Youth-driven organization focused on mentorship, mindset growth, and skill-building.",
    logo: youthCombinationLogo,
  },
  {
    name: "Rahnumaa",
    type: "Community Partner",
    description:
      "Dedicated to guiding youth toward brighter prospects, supporting educational journeys and professional futures through strategic mentorship and guidance.",
    logo: rahnumaaLogo,
  },
  {
    name: "Pax Youth Initiative",
    type: "Strategic Community Partner",
    description:
      "Aligned with UN SDGs 4 and 16: peace education, digital literacy, and meaningful youth dialogue, including collaboration around their Peace Talks series.",
    logo: paxYouthLogo,
  },
  {
    name: "Youth General Parliament",
    type: "Youth Leadership Partner",
    description:
      "A simulated parliamentary experience that empowers young people through policy-making, legislative debate, and engagement with real-world experts.",
    logo: ygpLogo,
  },
  {
    name: "Super Student PK",
    type: "Educational & Career Partner",
    description:
      "Led by education and career coach Sama Zaidi: one-on-one career counseling, designing star careers, and youth voice through the Super Space Podcast.",
    logo: superStudentPkLogo,
  },
];

const Partnerships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partnerships" className="py-24 bg-background" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partnerships & <span className="text-primary">MoUs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-muted-foreground">
            Collaborating with organizations that share our mission
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <a
              href="/docs/Zaviah-Organization-Profile-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Download Organization Profile (PDF)
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border h-full flex flex-col items-center text-center hover:-translate-y-1">
                {/* Partner Logo */}
                {partner.logo ? (
                  <div className="w-24 h-24 rounded-xl bg-white/50 border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 p-2">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-gradient-hero/10 border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Handshake className="w-12 h-12 text-primary" />
                  </div>
                )}

                <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3">
                  {partner.type}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {partner.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto bg-gradient-hero rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Interested in Partnering with Zaviah?
          </h3>
          <p className="text-white/90 mb-6">
            Join our network of organizations empowering youth through collaboration, mentorship, and shared opportunities.
          </p>
          <a
            href="mailto:zaviahorg@gmail.com"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
