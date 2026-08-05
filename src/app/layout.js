import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://elvis-bitolo.vercel.app"),
  alternates: {
    canonical: "/"
  },
  title: {
    default: "Elvis Bitolo Khanyanga | Freelance Web Developer in Nairobi, Kenya",
    template: "%s | Elvis Bitolo Khanyanga"
  },
  description:
    "Freelance web developer in Nairobi, Kenya building fast, modern websites with Next.js, React, and Firebase. Website design, M-Pesa integration, SEO, and Google Business Profile setup for Kenyan businesses and CBOs.",
  keywords: [
    "freelance web developer Nairobi",
    "web developer Kenya",
    "website developer Kenya",
    "web design Nairobi",
    "website development Kenya",
    "freelance web developer Kenya",
    "Next.js developer Nairobi",
    "React developer Kenya",
    "full stack developer Nairobi",
    "software developer Kenya",
    "hire web developer Kenya",
    "M-Pesa website integration",
    "CBO website Kenya",
    "school website Kenya",
    "campaign website Kenya",
    "SEO Kenya",
    "Google Business Profile setup Kenya",
    "website developer",
    "frontend developer",
    "backend developer",
    "AI-assisted development"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elvis-bitolo.vercel.app",
    siteName: "Elvis Bitolo Khanyanga",
    title: "Elvis Bitolo Khanyanga | Freelance Web Developer in Nairobi, Kenya",
    description:
      "Freelance web developer in Nairobi, Kenya building fast, modern websites with Next.js, React, Firebase, and M-Pesa integration.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elvis Bitolo Khanyanga"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Bitolo Khanyanga | Freelance Web Developer in Nairobi, Kenya",
    description:
      "Freelance web developer in Nairobi, Kenya building fast, modern websites with Next.js, React, Firebase, and M-Pesa integration.",
    images: ["/images/og-image.jpg"]
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Elvis Bitolo Khanyanga",
              "jobTitle": "Freelance Web Developer",
              "description": "Freelance web developer in Nairobi, Kenya building fast, modern websites with Next.js, React, Firebase, and M-Pesa integration.",
              "email": "mailto:elvisbitolo11@gmail.com",
              "telephone": "+254717162026",
              "image": "https://elvis-bitolo.vercel.app/images/elvis.jpg",
              "url": "https://elvis-bitolo.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "sameAs": [
                "https://github.com/elvisbitolo",
                "https://www.linkedin.com/in/elvis-bitolo/",
                "https://medium.com/@elvisbitolo11",
                "https://www.youtube.com/@ElvisBitolo-7"
              ],
              "knowsAbout": [
                "Next.js",
                "React",
                "Firebase",
                "Full Stack Development",
                "Website Design",
                "M-Pesa Integration",
                "SEO"
              ]
            })
          }}
        />
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
