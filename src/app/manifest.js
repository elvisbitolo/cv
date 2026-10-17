export default function manifest() {
  return {
    name: "Elvis Bitolo Khanyanga | Freelance Web Developer in Nairobi, Kenya",
    short_name: "Elvis Bitolo",
    description:
      "Freelance web developer in Nairobi, Kenya building fast, modern websites with Next.js, React, and Firebase.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5ef",
    theme_color: "#101418",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
