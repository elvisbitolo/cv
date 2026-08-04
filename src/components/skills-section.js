export function SkillsSection({ profile }) {
  const groups = profile.skillGroups?.length
    ? profile.skillGroups
    : [{ title: "Skills", items: profile.skills }];

  return (
    <section id="skills" className="border-b border-ink/10 bg-[#101418] py-16 text-white dark:bg-black">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-wide text-copper">Toolbox</p>
          <h2 className="mt-3 text-3xl font-black">Skills that support full-stack delivery</h2>
          <p className="mt-4 leading-7 text-white/70">
            Built through the Empower Hope ICT program, self-directed learning, and real client work.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-md border border-white/12 bg-white/8 p-5">
              <h3 className="text-sm font-black uppercase tracking-wide text-copper">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-md border border-white/12 bg-white/8 px-3 py-1.5 text-sm font-bold text-white/88">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
