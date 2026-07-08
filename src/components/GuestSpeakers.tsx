import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";
import { guestSpeakers, type GuestSpeaker } from "@/data/mentors";
import { cn } from "@/lib/utils";

function getInitials(displayName: string) {
  return displayName
    .replace(/^(Mr\.|Ms\.|Dr\.)\s+/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const GuestSpeakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="guest-speakers" className="bg-gradient-subtle py-20 md:py-28" ref={ref}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Guest Speakers & <span className="text-primary">Mentors</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-accent" />
          <p className="text-lg text-muted-foreground">
            Meet the visionaries, professionals, and leaders who shared their knowledge at our sessions
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {guestSpeakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

function SpeakerCard({
  speaker,
  index,
  isInView,
}: {
  speaker: GuestSpeaker;
  index: number;
  isInView: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(speaker.image) && !imageError;
  const initials = getInitials(speaker.displayName);
  const fitContain = speaker.imageFit === "contain";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        {showImage ? (
          <img
            src={speaker.image}
            alt={speaker.displayName}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className={cn(
              "h-full w-full transition-transform duration-500 group-hover:scale-[1.03]",
              fitContain ? "object-contain p-2" : "object-cover",
            )}
            style={{
              objectPosition: speaker.imagePosition ?? "center top",
            }}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-hero">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              {initials ? (
                <span className="text-xl font-bold text-white">{initials}</span>
              ) : (
                <User className="h-8 w-8 text-white/80" aria-hidden />
              )}
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/70">Photo coming soon</p>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/75 to-transparent px-3 pb-4 pt-16 text-center sm:px-4">
          <h3 className="text-sm font-bold leading-snug text-white sm:text-base">{speaker.displayName}</h3>
          <p className="mt-1 text-[11px] leading-snug text-white/85 sm:text-xs">{speaker.role}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default GuestSpeakers;
