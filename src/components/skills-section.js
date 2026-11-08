import { Code2, Database, Cloud, Sparkles, Palette } from "lucide-react";

const groupIcons = [Code2, Database, Cloud, Sparkles, Palette];

export function SkillsSection({ profile }) {
  const groups = profile.skillGroups?.length
    ? profile.skillGroups
    : [{ title: "Skills", items: profile.skills }];

  return (
    <section id="skills" className="border-b border-white/10 bg-[#141719] py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#df9675]">03 / Technical toolkit</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">The tools behind the work.</h2>
          <p className="mt-4 leading-7 text-white/65">
            A practical toolkit developed through formal training, independent projects, and real client delivery.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => {
            const Icon = groupIcons[index] || Code2;
            return (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-[#df9675]/40 hover:bg-white/[0.07]">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-[#df9675]/10 p-2.5 text-[#df9675]"><Icon size={19} /></span>
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-white/90">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs font-semibold text-white/75">{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
