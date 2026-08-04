import { Compass, Lightbulb, Sparkles, ShieldCheck } from "lucide-react";

export function AboutSection({ profile }) {
  return (
    <section id="about" className="border-b border-ink/10 bg-paper py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-wide text-copper">About</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">How I work and where I am headed</h2>
          <p className="mt-4 leading-7 text-ink/68">
            Software engineering principles, areas of interest, and the philosophy behind my continuous learning.
          </p>
        </div>
        <div className="mt-10 grid gap-5">
          <AboutBlock icon={Compass} title="Career Objective">
            <p className="text-sm leading-6 text-ink/68">{profile.careerObjective}</p>
          </AboutBlock>
          <div className="grid gap-5 lg:grid-cols-2">
            <AboutBlock icon={Sparkles} title="Areas of Interest">
              <div className="flex flex-wrap gap-2">
                {profile.areasOfInterest.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-md border border-ink/10 bg-surface px-3 py-1.5 text-sm font-bold text-ink/80"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </AboutBlock>
            <AboutBlock icon={ShieldCheck} title="Engineering Principles">
              <div className="flex flex-wrap gap-2">
                {profile.engineeringPrinciples.map((principle) => (
                  <span
                    key={principle}
                    className="rounded-md border border-ink/10 bg-surface px-3 py-1.5 text-sm font-bold text-ink/80"
                  >
                    {principle}
                  </span>
                ))}
              </div>
            </AboutBlock>
          </div>
          <AboutBlock icon={Lightbulb} title="Continuous Learning Philosophy">
            <p className="text-sm leading-6 text-ink/68">{profile.learningPhilosophy}</p>
          </AboutBlock>
        </div>
      </div>
    </section>
  );
}

function AboutBlock({ icon: Icon, title, children }) {
  return (
    <section className="rounded-md border border-ink/10 bg-surface p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-md bg-moss/10 p-2 text-moss">
          <Icon size={21} />
        </div>
        <h3 className="text-xl font-black">{title}</h3>
      </div>
      {children}
    </section>
  );
}
