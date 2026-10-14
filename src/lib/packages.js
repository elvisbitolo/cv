/*
 * Productized service packages.
 *
 * Edit prices, features and timelines here — the /pricing page and the
 * M-Pesa landing page both read from this file. Prices are indicative
 * "from" figures; adjust them to match what you actually quote.
 */
export const packages = [
  {
    slug: "mpesa-fast-track",
    name: "M-Pesa Fast Track",
    price: "KES 15,000",
    priceValue: 15000,
    cadence: "one-off",
    tagline: "Add M-Pesa payments or donations to the site you already have.",
    timeline: "48 hours",
    idealFor:
      "Businesses taking orders and CBOs, schools and campaigns collecting donations.",
    features: [
      "Safaricom Daraja STK Push integration",
      "Payment and/or donation flow",
      "Success, failure and confirmation handling",
      "Tested in the Safaricom sandbox first",
      "Live verification before handover"
    ],
    highlight: true,
    cta: { label: "See how it works", href: "/mpesa-in-48-hours" }
  },
  {
    slug: "starter-website",
    name: "Starter Website",
    price: "from KES 30,000",
    priceValue: 30000,
    cadence: "one-off",
    tagline: "A clean, fast, mobile-first website to get your business found.",
    timeline: "1–2 weeks",
    idealFor: "Small businesses and professionals going online for the first time.",
    features: [
      "Up to 5 pages, mobile-first design",
      "WhatsApp click-to-chat and contact form",
      "SEO fundamentals: titles, description, sitemap",
      "Google Search Console setup",
      "Launch and basic handover"
    ],
    cta: { label: "Get this package", href: "#lead" }
  },
  {
    slug: "business-website",
    name: "Business Website",
    price: "from KES 55,000",
    priceValue: 55000,
    cadence: "one-off",
    tagline: "A larger site with news, gallery and local search visibility.",
    timeline: "2–4 weeks",
    idealFor: "Established businesses that need credibility and organic traffic.",
    features: [
      "Up to 10 pages plus blog/news",
      "Photo gallery and services pages",
      "Google Business Profile setup and optimisation",
      "Keyword-focused page copy and metadata",
      "Analytics and Search Console monitoring"
    ],
    cta: { label: "Get this package", href: "#lead" }
  },
  {
    slug: "community-website",
    name: "Community / School / CBO",
    price: "from KES 45,000",
    priceValue: 45000,
    cadence: "one-off",
    tagline: "Tell your story, show your impact and collect donations.",
    timeline: "2–4 weeks",
    idealFor: "Schools, CBOs, NGOs, churches and community organizations.",
    features: [
      "Programs, impact and stories pages",
      "Photo gallery and news updates",
      "M-Pesa donation page",
      "Volunteer and enquiry forms",
      "Easy-to-update content for your team"
    ],
    cta: { label: "Get this package", href: "#lead" }
  },
  {
    slug: "full-stack-app",
    name: "Full-Stack Web App",
    price: "from KES 120,000",
    priceValue: 120000,
    cadence: "one-off",
    tagline: "A custom application with accounts, data and admin tools.",
    timeline: "4–8 weeks",
    idealFor: "Organizations replacing manual processes with a real web app.",
    features: [
      "User accounts and role-based access",
      "Database, dashboards and reporting",
      "Admin panel so you manage content yourself",
      "M-Pesa payments and third-party integrations",
      "Deployed and documented"
    ],
    cta: { label: "Book a scoping call", href: "#lead" }
  },
  {
    slug: "care-plan",
    name: "Care Plan",
    price: "KES 6,000",
    priceValue: 6000,
    cadence: "per month",
    tagline: "Keep your site fast, secure and up to date — without thinking about it.",
    timeline: "Ongoing",
    idealFor: "Any client who wants their site looked after after launch.",
    features: [
      "Hosting, domain and uptime monitoring",
      "Security updates and backups",
      "Small content changes each month",
      "Performance and SEO health checks",
      "Priority support by WhatsApp"
    ],
    highlight: true,
    cta: { label: "Start a care plan", href: "#lead" }
  }
];

export const pricingFaqs = [
  {
    question: "Why are the prices shown as \"from\"?",
    answer:
      "Every project is different. The figures are honest starting points so you know the ballpark before we talk. After a short conversation you get a fixed, itemised quote — no surprises."
  },
  {
    question: "How do payments work?",
    answer:
      "Typically a deposit to start, with the balance on delivery. You can pay by M-Pesa or bank transfer. Larger projects can be split into milestones."
  },
  {
    question: "Do you offer discounts for schools, CBOs and NGOs?",
    answer:
      "Yes. Community projects can be scoped to fit a smaller budget — talk to me about what you need and we will agree on a realistic version."
  },
  {
    question: "What about hosting and running costs?",
    answer:
      "Hosting for most sites is low-cost or free to start on Vercel. I will tell you the real running costs up front, and the Care Plan covers hosting and maintenance if you prefer one predictable monthly fee."
  }
];

export function getPackage(slug) {
  return packages.find((item) => item.slug === slug);
}
