import { Compass, Lightbulb, Sparkles, ShieldCheck } from "lucide-react";

export function AboutSection({ profile }) {
  return (
    <section id="about" className="border-b border-ink/10 bg-paper py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">01 / About</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Thoughtful engineering. Continuous growth.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/65">
            How I approach software, the problems I enjoy solving, and the principles behind my work.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-4 lg:grid-cols-12">
          <AboutBlock icon={Compass} title="Career objective" className="lg:col-span-7">
            <p className="text-sm leading-7 text-ink/70 sm:text-base">{profile.careerObjective}</p>
          </AboutBlock>

          <AboutBlock icon={ShieldCheck} title="Engineering principles" className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {profile.engineeringPrinciples.map((principle) => (
                <span key={principle} className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-xs font-bold text-ink/75">
                  {principle}
                </span>
              ))}
            </div>
          </AboutBlock>

          <AboutBlock icon={Sparkles} title="Areas of interest" className="lg:col-span-5">
            <div className="flex flex-wrap gap-2">
              {profile.areasOfInterest.map((interest) => (
                <span key={interest} className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-xs font-bold text-ink/75">
                  {interest}
                </span>
              ))}
            </div>
          </AboutBlock>

          <AboutBlock icon={Lightbulb} title="Learning by building" className="lg:col-span-7">
            <p className="text-sm leading-7 text-ink/70 sm:text-base">{profile.learningPhilosophy}</p>
          </AboutBlock>
        </div>
      </div>
    </section>
  );
}

function AboutBlock({ icon: Icon, title, children, className = "" }) {
  return (
    <article className={`rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7 ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <span className="rounded-xl bg-copper/10 p-2.5 text-copper"><Icon size={20} /></span>
        <h3 className="text-lg font-black tracking-tight text-ink">{title}</h3>
      </div>
      {children}
    </article>
  );
}
