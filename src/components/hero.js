import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Search, Sparkles } from "lucide-react";
import { ButtonLink } from "./button-link";

export function Hero({ profile }) {
  return (
    <section className="noise relative isolate overflow-hidden border-b border-ink/10 bg-paper">
      <div className="hero-ambient hero-ambient-one animate-float" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-two animate-float" style={{ animationDelay: "-4s" }} aria-hidden="true" />
      <div className="section-shell relative z-10 grid min-h-[calc(100svh-64px)] items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-moss/20 bg-moss/10 px-3 py-2 text-sm font-semibold text-moss" style={{ animationDelay: "60ms" }}>
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-moss" aria-hidden="true" />
            Available for freelance projects · Nairobi, Kenya
          </div>
          <h1 className="animate-fade-up text-balance text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl" style={{ animationDelay: "140ms" }}>
            Hi, I&apos;m Elvis. I build websites that help businesses grow.
          </h1>
          <p className="mt-4 animate-fade-up text-balance text-xl font-semibold text-copper sm:text-2xl" style={{ animationDelay: "220ms" }}>
            Full Stack &amp; AI-Assisted Developer
          </p>
          <p className="mt-6 max-w-2xl animate-fade-up text-balance text-base leading-8 text-ink/72 sm:text-lg" style={{ animationDelay: "300ms" }}>
            Nairobi-based developer building fast, SEO-ready websites, M-Pesa payment flows and web applications with Next.js, React and Firebase.
          </p>
          <div className="mt-8 flex animate-fade-up flex-wrap gap-3" style={{ animationDelay: "380ms" }}>
            <ButtonLink href="/#contact">
              Get a fixed-price quote
              <ArrowUpRight size={17} />
            </ButtonLink>
            <ButtonLink href="/#projects" variant="secondary">
              View work
            </ButtonLink>
          </div>
          <div className="mt-4 flex animate-fade-up flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-ink/60" style={{ animationDelay: "440ms" }}>
            <Link href="/pricing" className="focus-ring inline-flex items-center gap-1 rounded-md hover:text-copper">
              See packages
              <ArrowUpRight size={14} />
            </Link>
            <a href="#resume" className="focus-ring rounded-md hover:text-copper">
              Download CV
            </a>
          </div>
          <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              ["Full Stack", "Next.js, React, Firebase, Prisma", Code2],
              ["AI-Assisted", "AI workflows and prompt engineering", Sparkles],
              ["Digital Presence", "SEO, Search Console, Business Profile", Search]
            ].map(([title, body, Icon], index) => (
              <div
                key={title}
                className="animate-fade-up rounded-md border border-ink/10 bg-surface/70 p-4"
                style={{ animationDelay: `${460 + index * 80}ms` }}
              >
                <Icon className="text-moss" size={22} />
                <p className="mt-3 text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-ink/60">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-ink/10 pt-6 sm:grid-cols-4">
            {[
              ["10+", "Projects shipped"],
              ["Next.js", "React & Firebase"],
              ["M-Pesa", "Payments & donations"],
              ["SEO", "Search-ready builds"]
            ].map(([value, label], index) => (
              <div
                key={label}
                className="animate-fade-up"
                style={{ animationDelay: `${520 + index * 60}ms` }}
              >
                <p className="text-sm font-black text-ink">{value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[460px] animate-fade-up" style={{ animationDelay: "560ms" }}>
          <div className="absolute inset-5 animate-float" style={{ animationDelay: "-2s" }} aria-hidden="true">
            <div className="h-full w-full rotate-3 rounded-md bg-moss" />
          </div>
          <div className="relative overflow-hidden rounded-md border border-ink/10 bg-surface shadow-soft">
            <div className="relative aspect-[4/5] bg-cloud">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 90vw, 460px"
                className="object-cover"
                priority
              />
            </div>
            <div className="grid gap-3 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-copper">Profile snapshot</p>
              <div className="grid gap-2">
                {profile.highlights.map((highlight) => (
                  <p key={highlight} className="text-sm leading-6 text-ink/70">
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
