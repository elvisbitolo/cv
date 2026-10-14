import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ChatWidget from "@/components/chat-widget";
import { SITE_URL, getRelatedServicePages } from "@/lib/service-pages";

export default function ServiceLanding({ page }) {
  const related = getRelatedServicePages(page.slug);
  const pageUrl = `${SITE_URL}/services/${page.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.label,
        item: pageUrl
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: page.metaTitle,
    serviceType: page.serviceType,
    url: pageUrl,
    description: page.metaDescription,
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: [
      { "@type": "City", name: "Nairobi" },
      { "@type": "Country", name: "Kenya" },
      "Worldwide (remote)"
    ],
    availableLanguage: ["English", "Swahili"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <SiteHeader />

      <main>
        <nav
          aria-label="Breadcrumb"
          className="border-b border-ink/10 bg-surface"
        >
          <div className="section-shell flex flex-wrap items-center gap-2 py-4 text-xs font-semibold text-ink/60">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-ink">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink/80">{page.label}</span>
          </div>
        </nav>

        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-copper">
              {page.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-black text-ink sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 leading-7 text-ink/68">{page.intro}</p>
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

        <section className="border-b border-ink/10 bg-surface py-16">
          <div className="section-shell">
            <div className="grid gap-4 sm:grid-cols-2">
              {page.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-md border border-ink/10 bg-paper p-5 text-sm text-ink/80"
                >
                  <Check size={17} className="mt-0.5 shrink-0 text-moss" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell max-w-4xl">
            <div className="grid gap-10">
              {page.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="text-2xl font-black text-ink sm:text-3xl">
                    {section.heading}
                  </h2>
                  <p className="mt-4 leading-7 text-ink/68">
                    {section.body}
                  </p>
                  {section.points?.length ? (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.points.map((point) => (
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
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-surface py-20">
          <div className="section-shell max-w-3xl">
            <h2 className="text-3xl font-black text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 grid gap-4">
              {page.faqs.map((faq) => (
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

        {related.length ? (
          <section className="border-b border-ink/10 bg-paper py-16">
            <div className="section-shell">
              <h2 className="text-2xl font-black text-ink sm:text-3xl">
                Related services
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="focus-ring group rounded-md border border-ink/10 bg-surface p-6 hover:border-moss"
                  >
                    <p className="text-sm font-black uppercase tracking-wide text-copper">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 text-lg font-black text-ink">
                      {item.label}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-moss">
                      Learn more
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
