import "./globals.css";

export const metadata = {
  title: "Elvis Bitolo Khanyanga | Cloud Practitioner & Software Developer",
  description:
    "Portfolio and resume for Elvis Bitolo Khanyanga, a cloud practitioner and software developer building practical cloud, web, and automation projects."
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
