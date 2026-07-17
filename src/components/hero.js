import Image from "next/image";
import { ArrowUpRight, Cloud, Code2, Server, MapPin } from "lucide-react";
import { ButtonLink } from "./button-link";

export function Hero({ profile }) {
  return (
    <section className="noise border-b border-ink/10 bg-paper">
      <div className="section-shell grid min-h-[calc(100svh-64px)] items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface/70 px-3 py-2 text-sm font-semibold text-ink/70">
            <MapPin size={17} />
            Based in Nairobi, Kenya
          </div>
          <h1 className="text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-copper sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/72 sm:text-lg">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#resume">Download CV</ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              View Projects
              <ArrowUpRight size={17} />
            </ButtonLink>
          </div>
          <div className="mt-9 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              ["Cloud", "AWS and Terraform fundamentals", Cloud],
              ["Full Stack", "Next.js, Firebase, Firestore", Code2],
              ["Backend", "Auth, data, contact workflows", Server]
            ].map(([title, body, Icon]) => (
              <div key={title} className="rounded-md border border-ink/10 bg-surface/70 p-4">
                <Icon className="text-moss" size={22} />
                <p className="mt-3 text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-ink/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute inset-5 rotate-3 rounded-md bg-moss" />
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
