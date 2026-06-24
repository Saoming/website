// Shared resolver for case-study cover images.
// filename === slug; all covers are .png today. Optimized by Astro <Image> at build.
// NOTE: import.meta.glob resolves relative to THIS file. src/utils and src/assets are
// both direct children of src/, so the "../assets/..." base matches the old component
// location (also one level under src/) — output is identical.
const covers = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/case-studies/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

export const coverImage = (slug: string): ImageMetadata =>
  covers[`../assets/case-studies/${slug}.png`].default;

// Above-the-fold homepage screenshot shown inside the MacBook mockup; filename === `${slug}-home.png`.
export const homeShot = (slug: string): ImageMetadata =>
  covers[`../assets/case-studies/${slug}-home.png`].default;
