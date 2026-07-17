import "./globals.css";

export const metadata = {
  title: {
    default: "Elvis Bitolo Khanyanga | Full Stack Web Developer & Cloud Practitioner",
    template: "%s | Elvis Bitolo Khanyanga"
  },
  description:
    "Full stack web developer and cloud practitioner in Nairobi. I build responsive websites, web applications, and Next.js projects with React, Firebase, and AWS. Hire me for website design, frontend development, and cloud solutions.",
  keywords: [
    "full stack web developer",
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
    "cloud practitioner",
    "AWS developer",
    "software developer",
    "Firebase developer",
    "responsive website design",
    "mobile-friendly website",
    "e-commerce developer",
    "portfolio website",
    "business website"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Elvis Bitolo Khanyanga",
    title: "Elvis Bitolo Khanyanga | Full Stack Web Developer & Cloud Practitioner",
    description:
      "Full stack web developer and cloud practitioner. Building responsive web applications with Next.js, React, Firebase, and AWS."
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
