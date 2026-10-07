import Link from "next/link";
import { ArrowRight, Code2, Search, Sparkles } from "lucide-react";

const serviceIcons = {
  Code2,
  Sparkles,
  Search
};

export function ServicesSection({ profile }) {
  return (
    <section id="services" className="border-b border-ink/10 bg-surface py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-wide text-copper">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            Web development services for real businesses
          </h2>
          <p className="mt-4 leading-7 text-ink/68">
            Websites, web applications, M-Pesa integration and local SEO —
            designed, built and deployed end-to-end.
          </p>
        </div>

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
                <h3 className="text-xl font-black text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            href="/services"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:bg-surface"
          >
            View all services
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
