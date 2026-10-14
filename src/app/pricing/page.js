import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ChatWidget from "@/components/chat-widget";
import LeadForm from "@/components/lead-form";
import { packages, pricingFaqs } from "@/lib/packages";
import { SITE_URL } from "@/lib/service-pages";

export const metadata = {
  title: "Website Packages & Pricing in Kenya",
  description:
    "Clear, fixed-price website and web app packages in Kenya: business websites, school and CBO sites, M-Pesa integration and full-stack apps. Free quote before any commitment.",

  alternates: {
    canonical: "/pricing"
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/pricing`,
    siteName: "Elvis Bitolo Khanyanga",
    title: "Website Packages & Pricing in Kenya | Elvis Bitolo",
    description:
      "Fixed-price website packages, M-Pesa integration and full-stack web apps for Kenyan businesses, schools and organizations.",
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

const interestOptions = [
  ...packages.map((item) => item.name),
  "Something else / not sure yet"
];

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Web development packages in Kenya",
  url: `${SITE_URL}/pricing`,
  itemListElement: packages.map((item, index) => ({
    "@type": "Offer",
    position: index + 1,
    name: item.name,
    description: item.tagline,
    price: item.priceValue,
    priceCurrency: "KES",
    url: `${SITE_URL}/pricing#${item.slug}`
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer }
  }))
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-copper">
              Pricing
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              Websites and web apps with clear prices
            </h1>
            <p className="mt-5 leading-7 text-ink/68">
              No mystery quotes and no jargon. Pick the package that fits, or
              tell me what you need and you&rsquo;ll get a fixed, itemised
              price before any work starts. Every project begins with a free
              consultation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#lead"
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
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((item) => (
                <article
                  key={item.slug}
                  id={item.slug}
                  className={`flex flex-col rounded-md border bg-paper p-6 ${
                    item.highlight
                      ? "border-copper/60 shadow-soft"
                      : "border-ink/10"
                  }`}
                >
                  {item.highlight ? (
                    <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-md bg-copper/10 px-2.5 py-1 text-xs font-black uppercase tracking-wide text-copper">
                      <Sparkles size={13} />
                      Popular
                    </span>
                  ) : null}
                  <h2 className="text-xl font-black text-ink">{item.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/68">
                    {item.tagline}
                  </p>

                  <p className="mt-5 text-3xl font-black text-ink">
                    {item.price}
                    <span className="ml-1 text-sm font-bold text-ink/50">
                      {item.cadence === "per month" ? "/ month" : "project"}
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-moss">
                    Timeline: {item.timeline}
                  </p>

                  <ul className="mt-5 grid flex-1 gap-2">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-ink/80"
                      >
                        <Check size={16} className="mt-1 shrink-0 text-moss" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-xs leading-5 text-ink/55">
                    Best for: {item.idealFor}
                  </p>

                  <Link
                    href={item.cta.href}
                    className={`focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold ${
                      item.highlight
                        ? "bg-ink text-white hover:bg-moss dark:bg-white dark:text-ink"
                        : "border border-ink/15 text-ink hover:border-copper hover:text-copper"
                    }`}
                  >
                    {item.cta.label}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lead" className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-copper">
                Get started
              </p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                Not sure which package fits?
              </h2>
              <p className="mt-4 leading-7 text-ink/68">
                Tell me about your project and I&rsquo;ll recommend the right
                option — or a smaller version that fits your budget. You&rsquo;ll
                get a fixed price and timeline, with no obligation.
              </p>
              <ul className="mt-6 grid gap-3">
                {[
                  "Free first consultation",
                  "Fixed, itemised quote before work starts",
                  "Deposit to start, balance on delivery",
                  "Support after launch"
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-ink/80"
                  >
                    <Check size={16} className="mt-1 shrink-0 text-moss" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm
              interestOptions={interestOptions}
              heading="Request a free quote"
            />
          </div>
        </section>

        <section className="border-b border-ink/10 bg-surface py-20">
          <div className="section-shell max-w-3xl">
            <h2 className="text-3xl font-black text-ink sm:text-4xl">
              Pricing questions
            </h2>
            <div className="mt-8 grid gap-4">
              {pricingFaqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-md border border-ink/10 bg-paper p-6"
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

        <section className="bg-paper py-16">
          <div className="section-shell">
            <h2 className="text-2xl font-black text-ink sm:text-3xl">
              Explore services in detail
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                All services
              </Link>
              <Link
                href="/mpesa-in-48-hours"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                M-Pesa in 48 hours
              </Link>
              <Link
                href="/services/school-website-kenya"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                School websites
              </Link>
              <Link
                href="/services/cbo-ngo-website-kenya"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                CBO &amp; NGO websites
              </Link>
              <Link
                href="/services/full-stack-developer-nairobi"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                Full-stack apps
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ChatWidget />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
