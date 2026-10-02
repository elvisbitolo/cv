import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://elvis-bitolo.vercel.app"),
  applicationName: "Elvis Bitolo Khanyanga",

  authors: [
    {
      name: "Elvis Bitolo Khanyanga",
      url: "https://elvis-bitolo.vercel.app"
    }
  ],

  creator: "Elvis Bitolo Khanyanga",
  publisher: "Elvis Bitolo Khanyanga",
  category: "Portfolio",

  alternates: {
    canonical: "/"
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png"
  },

  appleWebApp: {
    capable: true,
    title: "Elvis Bitolo",
    statusBarStyle: "black-translucent"
  },

  title: {
    default:
      "Elvis Bitolo Khanyanga | Freelance Web Developer in Nairobi, Kenya",
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

    title:
      "Elvis Bitolo Khanyanga | Freelance Web Developer in Nairobi, Kenya",

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

    title:
      "Elvis Bitolo Khanyanga | Freelance Web Developer in Nairobi, Kenya",

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

        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="EO1A_95MmyPuFD2ULeSrZ2xzliMUJEdAWtRmclDUwPo"
        />

        <meta
          name="google-site-verification"
          content="UKoNzw8c8iMUjQk56NbNTThfaz96V0GMdNM2Fatryz4"
        />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G2PTLF3T94"
          strategy="afterInteractive"
        />

        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config','G-G2PTLF3T94');
            `
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="clarity-init"
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){
                  (c[a].q=c[a].q||[]).push(arguments)
                };
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","xtit2sypy7");
            `
          }}
        />

        {/* Elvis Bitolo Khanyanga - Person Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              "name": "Elvis Bitolo Khanyanga",

              "url": "https://elvis-bitolo.vercel.app",

              "jobTitle":
                "Website Developer & Full-Stack Software Developer",

              "description":
                "Website developer and full-stack software developer based in Nairobi, Kenya, building modern websites and web applications with JavaScript, React, Next.js, Firebase, and other modern web technologies.",

              "email": "mailto:elvisbitolo11@gmail.com",

              "telephone": "+254717162026",

              "image":
                "https://elvis-bitolo.vercel.app/images/elvis.jpg",

              "nationality": {
                "@type": "Country",
                "name": "Kenya"
              },

              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },

              /*
               * Profiles that identify Elvis Bitolo Khanyanga.
               */
              "sameAs": [
                "https://www.wikidata.org/wiki/Q140911671",
                "https://github.com/elvisbitolo",
                "https://www.linkedin.com/in/elvis-bitolo/",
                "https://medium.com/@elvisbitolo11",
                "https://www.youtube.com/@ElvisBitolo-7"
              ],

              /*
               * GitHub CV / portfolio repository associated
               * with Elvis Bitolo Khanyanga.
               */
              "subjectOf": {
                "@type": "CreativeWork",
                "name":
                  "Elvis Bitolo Khanyanga — Portfolio & Resume",
                "url": "https://github.com/elvisbitolo/cv"
              },

              "hasOccupation": {
                "@type": "Occupation",
                "name": "Web Developer"
              },

              "alumniOf": {
                "@type": "Organization",
                "name": "Empower Hope"
              },

              "hasCredential": [
                {
                  "@type":
                    "EducationalOccupationalCredential",

                  "credentialCategory": "certification",

                  "name":
                    "ICT: Software Development with AI - Certificate of Completion",

                  "description":
                    "Certificate of Completion for the Information Communication Technology (Software Development with AI) program hosted by Empower Hope.",

                  "provider": {
                    "@type": "Organization",
                    "name": "Empower Hope"
                  },

                  "dateIssued": "2026"
                },

                {
                  "@type":
                    "EducationalOccupationalCredential",

                  "credentialCategory": "certification",

                  "name":
                    "AWS Certified Cloud Practitioner",

                  "provider": {
                    "@type": "Organization",
                    "name": "Amazon Web Services"
                  },

                  "dateIssued": "2025",

                  "validUntil": "2028-07-28"
                }
              ],

              "knowsLanguage": [
                {
                  "@type": "Language",
                  "name": "English"
                },

                {
                  "@type": "Language",
                  "name": "Swahili"
                }
              ],

              "knowsAbout": [
                "Website Development",
                "Full-Stack Web Development",
                "JavaScript",
                "React",
                "Next.js",
                "Firebase",
                "PostgreSQL",
                "MongoDB",
                "Web Application Development",
                "Website Design",
                "M-Pesa Integration",
                "SEO",
                "AI-Assisted Software Development"
              ]
            })
          }}
        />

        {/* Theme initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem("theme");

                if (
                  t === "dark" ||
                  (!t &&
                    matchMedia(
                      "(prefers-color-scheme:dark)"
                    ).matches)
                ) {
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
