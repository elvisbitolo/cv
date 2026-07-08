export function SkillsSection({ skills }) {
  return (
    <section className="border-b border-ink/10 bg-[#101418] py-16 text-white dark:bg-black">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-copper">Toolbox</p>
            <h2 className="mt-3 text-3xl font-black">Skills that support full-stack delivery</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-md border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold text-white/88">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
