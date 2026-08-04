import "./globals.css";

export const metadata = {
  title: {
    default: "Elvis Bitolo Khanyanga | Software Developer, Full Stack & AI-Assisted",
    template: "%s | Elvis Bitolo Khanyanga"
  },
  description:
    "Software developer in Nairobi building modern web applications with Next.js, React, Firebase, and AI-assisted workflows. Hire me for website development, SEO, and digital presence.",
  keywords: [
    "full stack web developer",
    "software developer",
    "web developer",
    "website developer",
    "Next.js developer",
    "Next.js website",
    "React developer",
    "React website developer",
    "frontend developer",
    "backend developer",
    "freelance web developer",
    "hire web developer",
    "website design",
    "web application developer",
    "AI-assisted development",
    "software developer",
    "Firebase developer",
    "responsive website design",
    "mobile-friendly website",
    "SEO developer",
    "portfolio website",
    "business website"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Elvis Bitolo Khanyanga",
    title: "Elvis Bitolo Khanyanga | Software Developer, Full Stack & AI-Assisted",
    description:
      "Software developer building modern web applications with Next.js, React, Firebase, and AI-assisted workflows."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="EO1A_95MmyPuFD2ULeSrZ2xzliMUJEdAWtRmclDUwPo" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem("theme");
                if (t === "dark" || (!t && matchMedia("(prefers-color-scheme:dark)").matches)) {
                  document.documentElement.classList.add("dark");
                }
              } catch(e) {}
            `.replace(/\s+/g, " ")
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
