import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/profile-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ChatWidget from "@/components/chat-widget";

const SITE_URL = "https://elvis-bitolo.vercel.app";

export const metadata = {
  title: "Web Development Services in Nairobi, Kenya",
  description:
    "Professional web development services in Nairobi, Kenya: business websites, full-stack web apps, M-Pesa integration, SEO and Google Business Profile setup. Get a free quote.",

  alternates: {
    canonical: "/services"
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/services`,
    siteName: "Elvis Bitolo Khanyanga",

    title: "Web Development Services in Nairobi, Kenya | Elvis Bitolo",

    description:
      "Business websites, full-stack web apps, M-Pesa integration, SEO and Google Business Profile setup for Kenyan businesses and organizations.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elvis Bitolo Khanyanga"
      }
    ]
  }
};

const serviceIcons = {
  Code2,
  Sparkles,
  Search
};

const offerings = [
  {
    icon: Smartphone,
    title: "Business & organization websites",
    body: "Fast, mobile-first websites that make small businesses, schools, CBOs and NGOs look credible and get found on Google.",
    points: [
      "Multi-page sites with programs, news, gallery and team pages",
      "WhatsApp click-to-contact and enquiry forms",
      "Mobile-first, fast-loading and accessible",
      "Launched with SEO fundamentals built in"
    ]
  },
  {
    icon: Database,
    title: "Full-stack web applications",
    body: "Custom web apps with real user accounts, dashboards and data — built for how your organization actually works.",
    points: [
      "User authentication and role-based access",
      "Chat, job boards, directories and dashboards",
      "Firebase, PostgreSQL or MongoDB backends",
      "Admin tools so you can manage content yourself"
    ]
  },
  {
    icon: Code2,
    title: "M-Pesa payment & donation integration",
    body: "Let customers pay and supporters donate directly from their phones using Safaricom Daraja (STK Push).",
    points: [
      "Checkout and one-off donation flows",
      "Sandbox testing before going live",
      "Callback handling and payment confirmation",
      "Used on live campaign and community sites"
    ]
  },
  {
    icon: Search,
    title: "SEO & local visibility",
    body: "Get found by people searching for what you offer — on Google Search, Maps and AI assistants.",
    points: [
      "Technical SEO: titles, sitemap, speed, mobile UX",
      "Google Search Console setup and monitoring",
      "Google Business Profile setup and optimisation",
      "Content guidance for the searches that matter"
    ]
  },
  {
    icon: Rocket,
    title: "Campaign & community platforms",
    body: "Election campaigns, school fundraisers and community platforms — designed for real engagement, not just brochures.",
    points: [
      "Manifestos, events and election countdowns",
      "Volunteer and donation pages",
      "Neighbourhood chat, local job boards and directories",
      "Deployed and maintained on Vercel"
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Scope & quote",
    body: "You describe the goal. I ask the right questions and send a clear quote and timeline — free, before any commitment."
  },
  {
    step: "02",
    title: "Design",
    body: "I agree on structure, pages and look with you first, so nothing is a surprise when the build starts."
  },
  {
    step: "03",
    title: "Build & review",
    body: "You get progress updates at every stage and a live preview link — feedback is built into the process."
  },
  {
    step: "04",
    title: "Launch & handover",
    body: "Deploy, SEO checks, analytics, and a site that is easy for you to manage after launch."
  }
];

const faqs = [
  {
    question: "How much does a website cost in Kenya?",
    answer:
      "It depends on scope — a focused business site costs less than a custom web application with accounts, payments and dashboards. Send a short description of what you need and you will get a clear, itemised quote before any work starts. The first consultation is free."
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites go live within 1–2 weeks once content is ready. Web applications and community platforms take longer depending on features. You get a realistic timeline together with the quote."
  },
  {
    question: "Can you integrate M-Pesa payments into my site?",
    answer:
      "Yes. I integrate Safaricom Daraja (STK Push) so customers can pay and supporters can donate from their phones. I have used it on live campaign and community donation pages, and everything is tested in the Safaricom sandbox before launch."
  },
  {
    question: "Do you work with clients outside Nairobi?",
    answer:
      "Yes. The work is fully remote — I have delivered for clients across Kenya and communicate over email, WhatsApp or calls. Time zones are never a blocker."
  },
  {
    question: "What technologies do you build with?",
    answer:
      "Next.js and React on the frontend, Node.js with Firebase or PostgreSQL on the backend, deployed on Vercel with Git-based workflows. The stack is chosen for speed, SEO and easy maintenance — not for hype."
  },
  {
    question: "Do you also handle SEO and Google Business Profile?",
    answer:
      "Yes. Every site launches with SEO fundamentals — titles, sitemap, fast load times and a mobile-friendly design. I also set up Google Search Console and Google Business Profiles so local customers can find you on Search and Maps."
  }
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/services/#service`,
  name: "Elvis Bitolo Khanyanga — Web Development Services",
  url: `${SITE_URL}/services`,
  image: `${SITE_URL}/images/og-image.jpg`,
  description:
    "Web development services in Nairobi, Kenya: business websites, full-stack web applications, M-Pesa integration, SEO and Google Business Profile setup.",
  provider: { "@id": `${SITE_URL}/#person` },
  telephone: "+254717162026",
  email: "elvisbitolo11@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },
  areaServed: [
    { "@type": "City", name: "Nairobi" },
    { "@type": "Country", name: "Kenya" },
    "Worldwide (remote)"
  ],
  availableLanguage: ["English", "Swahili"],
  servicesOffered: [
    { "@type": "Service", name: "Business website design and development" },
    { "@type": "Service", name: "Full-stack web application development" },
    { "@type": "Service", name: "M-Pesa payment and donation integration" },
    { "@type": "Service", name: "Search engine optimisation (SEO)" },
    { "@type": "Service", name: "Google Business Profile setup" },
    { "@type": "Service", name: "Campaign and community website development" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-copper">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              Web development services in Nairobi, Kenya
            </h1>
            <p className="mt-5 leading-7 text-ink/68">
              I build fast, professional websites and web applications for
              businesses, organizations and campaigns in Kenya and beyond —
              from first design to live deployment, with SEO and M-Pesa
              integration built in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-moss dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
              >
                Get a free quote
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/#projects"
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:bg-surface"
              >
                See past work
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-surface py-20">
          <div className="section-shell">
            <p className="text-sm font-black uppercase tracking-wide text-copper">
              What I offer
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-ink sm:text-4xl">
              Three ways I help clients
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {profile.services.map((service) => {
                const Icon = serviceIcons[service.icon] || Code2;
                return (
                  <article
                    key={service.title}
                    className="rounded-md border border-ink/10 bg-paper p-6"
                  >
                    <div className="mb-4 rounded-md bg-moss/10 p-2 text-moss">
                      <Icon size={21} />
                    </div>
                    <h3 className="text-xl font-black text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-ink/68">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell">
            <p className="text-sm font-black uppercase tracking-wide text-copper">
              Detailed services
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-ink sm:text-4xl">
              What I build for clients
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {offerings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <article
                    key={offering.title}
                    className="rounded-md border border-ink/10 bg-surface p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-md bg-moss/10 p-2 text-moss">
                        <Icon size={21} />
                      </div>
                      <h3 className="text-xl font-black text-ink">
                        {offering.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-6 text-ink/68">
                      {offering.body}
                    </p>
                    <ul className="mt-4 grid gap-2">
                      {offering.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-ink/80"
                        >
                          <Check
                            size={16}
                            className="mt-1 shrink-0 text-moss"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-surface py-20">
          <div className="section-shell">
            <p className="text-sm font-black uppercase tracking-wide text-copper">
              Process
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black text-ink sm:text-4xl">
              How a project runs
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-md border border-ink/10 bg-paper p-6"
                >
                  <p className="text-sm font-black text-copper">{item.step}</p>
                  <h3 className="mt-2 text-lg font-black text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/68">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-copper">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
              Frequently asked questions
            </h2>

            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-md border border-ink/10 bg-surface p-6"
                >
                  <h3 className="text-lg font-black text-ink">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/68">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="section-shell max-w-3xl text-center">
            <h2 className="text-3xl font-black text-ink sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 leading-7 text-ink/68">
              Tell me what you need — you will get an honest answer about what
              it takes, what it costs and how long it will be.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-moss dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
              >
                Start a conversation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ChatWidget />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
