import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zaviahorg@gmail.com",
    link: "mailto:zaviahorg@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+92 303 8156166",
    link: "https://wa.me/923038156166",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com/zaviahorg",
  },
  {
    icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com/zaviahorg",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/zaviahorg",
  },
  {
    icon: Send,
    label: "Linktree",
    url: "https://www.linktr.ee/zaviahorg",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-lg sm:text-xl text-muted-foreground">
            Ready to start your journey with Zaviah? Reach out to us!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.link}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Join the Movement
            </h3>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Be part of a community that believes in Access, Awareness, and Aspiration. Together, we can empower the next generation of leaders.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-medium hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
