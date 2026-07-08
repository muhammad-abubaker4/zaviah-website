import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  JOIN_FORM_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  EMAIL,
  MAILTO_URL,
} from "@/lib/constants";
import { GmailIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { followUsLinks } from "@/data/socialLinks";

const contactInfo = [
  {
    type: "email" as const,
    label: "Email",
    value: EMAIL,
    link: MAILTO_URL,
  },
  {
    type: "whatsapp" as const,
    label: "WhatsApp",
    value: WHATSAPP_NUMBER,
    link: WHATSAPP_URL,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const encodeForm = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const params = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      // Netlify forms are text-only here; ignore non-string values safely.
      params.append(key, typeof value === "string" ? value : "");
    }
    return params.toString();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    if (import.meta.env.DEV) {
      setError(
        `The contact form works on the live site after deploy. For now, email ${EMAIL} or message us on WhatsApp.`,
      );
      setSending(false);
      return;
    }

    const form = e.currentTarget;
    const body = encodeForm(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) throw new Error("Submit failed");

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        `Could not send right now. Please email us at ${EMAIL} or message on WhatsApp.`,
      );
    } finally {
      setSending(false);
    }
  };

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
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-10 md:gap-16 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex w-full max-w-sm flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Contact Information</h3>
              <div className="w-full space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target={item.type === "whatsapp" ? "_blank" : undefined}
                    rel={item.type === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 ${
                        item.type === "whatsapp" ? "bg-[#25D366]" : "bg-white border border-border shadow-sm"
                      }`}
                    >
                      {item.type === "whatsapp" ? (
                        <WhatsAppIcon className="h-6 w-6 text-white" />
                      ) : (
                        <GmailIcon className="h-7 w-7" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-semibold text-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex w-full max-w-sm flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Follow Us</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-[320px] mx-auto">
                {followUsLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 bg-card rounded-lg border border-border hover:shadow-soft transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300 text-white ${social.bgClass} ${social.hoverClass ?? ""}`}
                    >
                      <social.Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-foreground text-xs text-center">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12 max-w-xl mx-auto rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Send us a message</h3>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <p className="font-semibold text-foreground">Message sent!</p>
                <p className="text-sm text-muted-foreground">
                  We received your message and will reply to your email soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" name="email" type="email" required placeholder="you@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full" disabled={sending}>
                  {sending ? "Sending..." : "Send message"}
                </Button>
                {error && (
                  <p className="text-sm text-destructive text-center">{error}</p>
                )}
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Be part of a community that believes in Access, Awareness, and Aspiration. Together, we can empower the
              next generation of leaders.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-medium hover:scale-105 transition-all duration-300"
            >
              <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
