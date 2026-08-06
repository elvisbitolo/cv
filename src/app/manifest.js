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
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
