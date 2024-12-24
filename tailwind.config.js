/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: "var(--color--preset--dark)"
      },
      fontFamily: {
        "pp-seiko": ["var(--font--family--display)", "sans-serif"],
        "neue-montreal": ["var(--font--family--regular)", "sans-serif"],
        "neue-montreal-mono": ["var(--font--family--offset)", "sans-serif"],
      }
    },
  },
  plugins: [],
}

