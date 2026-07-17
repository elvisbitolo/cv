import "./globals.css";

export const metadata = {
  title: {
    default: "Elvis Bitolo Khanyanga | Full Stack Web Developer & Cloud Practitioner",
    template: "%s | Elvis Bitolo Khanyanga"
  },
  description:
    "Full stack web developer and cloud practitioner in Nairobi, Kenya. Building responsive web applications with Next.js, React, Firebase, and AWS. Available for freelance web development and cloud projects.",
  keywords: [
    "full stack web developer",
    "web developer Nairobi",
    "React developer Kenya",
    "Next.js developer",
    "frontend developer",
    "backend developer",
    "freelance web developer Kenya",
    "cloud practitioner",
    "AWS developer",
    "software developer Kenya"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Elvis Bitolo Khanyanga",
    title: "Elvis Bitolo Khanyanga | Full Stack Web Developer & Cloud Practitioner",
    description:
      "Full stack web developer and cloud practitioner in Nairobi, Kenya. Building responsive web applications with Next.js, React, Firebase, and AWS."
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
