import { motion } from "framer-motion";
import { galleryGridImages } from "@/data/galleryImages";

type GalleryGridProps = {
  /** When set, only the first N images are shown (homepage preview). */
  maxImages?: number;
};

const GalleryGrid = ({ maxImages }: GalleryGridProps) => {
  const images =
    typeof maxImages === "number" && maxImages > 0
      ? galleryGridImages.slice(0, maxImages)
      : galleryGridImages;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {images.map((img, index) => (
        <motion.div
          key={`${img.src}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-soft"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            loading={index < 6 ? "eager" : "lazy"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
