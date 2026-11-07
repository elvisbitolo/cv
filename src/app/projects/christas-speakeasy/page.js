import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Database, ShieldCheck, Video, Users, Workflow } from "lucide-react";

export const metadata = {
  title: "Christa's Speakeasy — Full-Stack Case Study",
  description:
    "A membership-based online community platform built with Next.js, JavaScript, Supabase, PostgreSQL, Jitsi and Shopify."
};

const capabilities = [
  {
    icon: Users,
    title: "Member experience",
    description:
      "Member accounts, profiles, community spaces and tier-aware access designed around a creative yarn and crochet community."
  },
  {
    icon: ShieldCheck,
    title: "Membership access",
    description:
      "Membership tiers and access rules connect the public membership journey with the authenticated member experience."
  },
  {
    icon: Video,
    title: "Live video lounges",
    description:
      "Integrated Jitsi-based video lounge experiences so members can meet and work alongside one another online."
  },
  {
    icon: Workflow,
    title: "Commerce integration",
    description:
      "Shopify membership checkout connects subscription purchase flows with the community product."
  }
];

const architecture = [
  ["Frontend", "Next.js · React · JavaScript · CSS Modules"],
  ["Data layer", "Supabase · PostgreSQL"],
  ["Live collaboration", "Jitsi / 8x8 video"],
  ["Commerce", "Shopify membership checkout"],
  ["Deployment", "Vercel"]
];

export default function ChristasSpeakeasyCaseStudy() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="noise border-b border-ink/10">
        <div className="section-shell py-12 sm:py-20">
          <Link
            href="/#projects"
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-bold text-ink/65 transition hover:text-copper"
          >
            <ArrowLeft size={17} />
            Back to selected work
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">
              Featured case study · Full-stack product
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Christa's Speakeasy
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70 sm:text-xl">
              A members-only online community for Secret Yarnery, bringing
              membership, community interaction and live video lounges into
              one connected web experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://christasspeakeasy.com"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-moss dark:bg-white dark:text-ink"
              >
                Visit public website <ArrowUpRight size={17} />
              </a>
              <a
                href="https://github.com/elvisbitolo/yarnerylounge"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-md border border-ink/20 px-5 py-3 text-sm font-bold transition hover:border-copper hover:text-copper"
              >
                View source repository <ArrowUpRight size={17} />
              </a>
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-5 text-ink/55">
              The public website opens the membership information and checkout
              journey. Access to member-only application areas may require an
              account and an active membership.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {architecture.map(([label, value]) => (
              <div key={label} className="rounded-md border border-ink/10 bg-surface/80 p-4">
                <p className="text-[10px] font-black uppercase tracking-wider text-copper">{label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink/75">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">Product overview</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">More than a marketing website</h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-ink/70">
              The project brings together a public membership journey and a
              private community product. The engineering challenge is connecting
              identity, membership entitlements, community features and a
              real-time video experience while keeping the interface usable on
              desktop and mobile.
            </p>
            <p className="mt-4 text-base leading-8 text-ink/70">
              The implementation combines a React-based Next.js application,
              a PostgreSQL data layer through Supabase, an external video
              service, Shopify commerce workflows and Vercel deployment.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-md border border-ink/10 bg-surface p-6 sm:p-7">
              <div className="inline-flex rounded-md bg-copper/10 p-3 text-copper">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-ink/68">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-surface py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">Engineering focus</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">What this project demonstrates</h2>
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4">
              <Database className="mt-1 shrink-0 text-copper" size={21} />
              <div>
                <h3 className="font-black">Full-stack application delivery</h3>
                <p className="mt-1 leading-7 text-ink/68">Connecting frontend routes and components to a managed PostgreSQL-backed application data layer.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="mt-1 shrink-0 text-copper" size={21} />
              <div>
                <h3 className="font-black">Access and membership logic</h3>
                <p className="mt-1 leading-7 text-ink/68">Designing member journeys around account state, membership levels and gated community experiences.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Video className="mt-1 shrink-0 text-copper" size={21} />
              <div>
                <h3 className="font-black">Third-party service integration</h3>
                <p className="mt-1 leading-7 text-ink/68">Bringing video and commerce services into a cohesive product workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 text-center sm:py-20">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">Next step</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black sm:text-4xl">
          Have a product or business workflow to build?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-ink/68">
          I work on websites and full-stack applications that help teams
          deliver useful digital experiences.
        </p>
        <Link
          href="/#contact"
          className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-moss dark:bg-white dark:text-ink"
        >
          Discuss a project <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
