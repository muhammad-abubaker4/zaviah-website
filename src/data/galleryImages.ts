import galleryHeroTop from "@/gallery/1.jpeg";

export type GalleryImage = {
  src: string;
  alt: string;
};

/** Full-width image at the top of the Gallery page (`src/gallery/1.jpeg`). */
export const galleryHeroImage: GalleryImage = {
  src: galleryHeroTop,
  alt: "Zaviah gallery",
};

const changingPicModules = import.meta.glob("../assets/Changing-pic/*.{jpeg,jpg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

/** Hero background slideshow: every image in `src/assets/Changing-pic/`. */
export const heroBackgroundSlides: GalleryImage[] = Object.entries(changingPicModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: "Zaviah community",
  }));

const galleryFolderModules = import.meta.glob("../assets/gallery/*.{jpeg,jpg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

/** Masonry grid on Gallery page: all files in `src/assets/gallery/` except `1.jpeg` (reserved for hero). */
export const galleryGridImages: GalleryImage[] = Object.entries(galleryFolderModules)
  .filter(([path]) => !path.endsWith("/gallery/1.jpeg"))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: "Zaviah gallery moment",
  }));
