import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  MessageCircle,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import ChatWidget from "@/components/chat-widget";
import LeadForm from "@/components/lead-form";
import { getPackage } from "@/lib/packages";
import { profile } from "@/lib/profile-data";
import { SITE_URL } from "@/lib/service-pages";

const PAGE_URL = `${SITE_URL}/mpesa-in-48-hours`;

export const metadata = {
  title: "M-Pesa Integration in 48 Hours — Kenya",
  description:
    "Add M-Pesa payments or donations to your existing website in 48 hours. Safaricom Daraja STK Push integration, sandbox-tested and launched live. Flat fee from KES 15,000.",

  alternates: {
    canonical: "/mpesa-in-48-hours"
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: PAGE_URL,
    siteName: "Elvis Bitolo Khanyanga",
    title: "M-Pesa Integration in 48 Hours | Elvis Bitolo",
    description:
      "Let customers pay and supporters donate from their phones. Safaricom Daraja integration added to your existing site in 48 hours.",
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

const included = [
  "Safaricom Daraja (STK Push) integration",
  "Payment and/or donation flow on your existing site",
  "Amount entry and phone-number capture",
  "Success, failure and confirmation handling",
  "Full testing in the Safaricom sandbox first",
  "One live transaction verified before handover"
];

const requirements = [
  "An existing website you can give me access to",
  "An M-Pesa paybill, till or Send-Money account",
  "Daraja API credentials from Safaricom (I'll guide you)",
  "A clear price or donation amount to collect"
];

const steps = [
  {
    step: "01",
    title: "Send your details",
    body: "Message me your site link and what you want to charge. I confirm the scope and a flat fee — usually the same day."
  },
  {
    step: "02",
    title: "I build and sandbox-test",
    body: "I wire up the Daraja integration and run the full flow in Safaricom's sandbox, so nothing touches real money until it's right."
  },
  {
    step: "03",
    title: "Go live",
    body: "We switch to your live credentials and confirm with a real transaction. You get a record you can reconcile with M-Pesa."
  }
];

const faqs = [
  {
    question: "Can you really add M-Pesa to my site in 48 hours?",
    answer:
      "For a straightforward payment or donation flow on a site that already exists, yes — once you have your Daraja credentials ready. Larger or unusual requirements are quoted with a realistic timeline instead."
  },
  {
    question: "How much does it cost?",
    answer:
      "A flat fee from KES 15,000 for the standard payment or donation integration, confirmed before any work starts. If your site needs other changes too, that's quoted separately."
  },
  {
    question: "What do I need before we start?",
    answer:
      "An existing website, an M-Pesa paybill, till or account, and Daraja API credentials from Safaricom. If you don't have the credentials yet, I'll walk you through applying for them."
  },
  {
    question: "Is it safe to take real payments this way?",
    answer:
      "Yes, when implemented correctly. Credentials are kept server-side and never exposed in the browser, requests are validated, and everything is tested in the sandbox before going live."
  },
  {
    question: "Will it work for donations as well as payments?",
    answer:
      "Yes. The same integration supports fixed-price payments and open donation amounts. I've built donation pages for a school CBO and a political campaign."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}/#service`,
  name: "M-Pesa integration in 48 hours",
  serviceType: "M-Pesa payment integration",
  url: PAGE_URL,
  description:
    "Safaricom Daraja (STK Push) M-Pesa payment and donation integration added to an existing website within 48 hours.",
  provider: { "@id": `${SITE_URL}/#person` },
  areaServed: [
    { "@type": "City", name: "Nairobi" },
    { "@type": "Country", name: "Kenya" }
  ],
  offers: {
    "@type": "Offer",
    price: 15000,
    priceCurrency: "KES",
    url: PAGE_URL,
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "M-Pesa in 48 hours", item: PAGE_URL }
  ]
};

export default function MpesaFastPage() {
  const pack = getPackage("mpesa-fast-track");

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
            <span className="text-ink/80">M-Pesa in 48 hours</span>
          </div>
        </nav>

        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-copper/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-copper">
                <Clock size={14} />
                Delivered in 48 hours
              </span>
              <h1 className="mt-4 text-4xl font-black text-ink sm:text-5xl">
                M-Pesa on your website in 48 hours
              </h1>
              <p className="mt-5 leading-7 text-ink/68">
                Your customers already pay by phone. Add M-Pesa to the site you
                already have and let them pay — or donate — in a few taps. Flat
                fee, tested in the Safaricom sandbox, launched live with a real
                transaction confirmed.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-3xl font-black text-ink">
                  {pack.price}
                  <span className="ml-1 text-sm font-bold text-ink/50">
                    flat fee
                  </span>
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#lead"
                  className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-moss dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
                >
                  Start now
                  <ArrowRight size={17} />
                </Link>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
                >
                  <MessageCircle size={17} />
                  WhatsApp me
                </a>
              </div>
            </div>

            <div className="rounded-md border border-ink/10 bg-surface p-6">
              <div className="grid gap-4">
                {[
                  {
                    icon: Smartphone,
                    title: "Customer pays on their phone",
                    body: "They enter the amount, get an STK Push prompt and confirm with their M-Pesa PIN."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Tested before real money",
                    body: "The full flow runs in Safaricom's sandbox first, so nothing goes live until it's right."
                  },
                  {
                    icon: Check,
                    title: "You get a clear record",
                    body: "Every payment is confirmed and recorded so you can reconcile it with your M-Pesa statement."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="rounded-md bg-moss/10 p-2 text-moss">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-ink/68">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-surface py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-ink sm:text-4xl">
                What&rsquo;s included
              </h2>
              <ul className="mt-8 grid gap-3">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink/80"
                  >
                    <Check size={16} className="mt-1 shrink-0 text-moss" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-black text-ink sm:text-4xl">
                What you&rsquo;ll need
              </h2>
              <ul className="mt-8 grid gap-3">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink/80"
                  >
                    <Check size={16} className="mt-1 shrink-0 text-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell">
            <h2 className="text-3xl font-black text-ink sm:text-4xl">
              How it works
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {steps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-md border border-ink/10 bg-surface p-6"
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

        <section id="lead" className="border-b border-ink/10 bg-surface py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-black text-ink sm:text-4xl">
                Ready to get paid on your site?
              </h2>
              <p className="mt-4 leading-7 text-ink/68">
                Send your site link and what you want to charge. I&rsquo;ll
                confirm the scope and the flat fee, then get it live within 48
                hours of your credentials being ready.
              </p>
              <a
                href={`${profile.whatsapp}?text=${encodeURIComponent(
                  "Hi Elvis, I'd like to add M-Pesa to my website."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-moss"
              >
                <MessageCircle size={17} />
                Prefer WhatsApp? Message me directly
              </a>
            </div>
            <LeadForm
              defaultInterest="M-Pesa Fast Track"
              heading="Add M-Pesa to my site"
              subheading="Tell me about your site and what you want to collect. I'll reply with the flat fee and next steps."
            />
          </div>
        </section>

        <section className="border-b border-ink/10 bg-paper py-20">
          <div className="section-shell max-w-3xl">
            <h2 className="text-3xl font-black text-ink sm:text-4xl">
              M-Pesa integration questions
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

        <section className="bg-surface py-16">
          <div className="section-shell">
            <h2 className="text-2xl font-black text-ink sm:text-3xl">
              Related
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                Packages &amp; pricing
              </Link>
              <Link
                href="/services/mpesa-integration-kenya"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                M-Pesa integration
              </Link>
              <Link
                href="/services/cbo-ngo-website-kenya"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                CBO &amp; NGO websites
              </Link>
              <Link
                href="/services/campaign-website-kenya"
                className="focus-ring rounded-md border border-ink/15 px-4 py-2 text-sm font-bold hover:border-copper hover:text-copper"
              >
                Campaign websites
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
