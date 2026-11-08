import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="border-b border-ink/10 bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">02 / Selected work</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Products built to solve real problems.</h2>
          <p className="mt-4 leading-7 text-ink/65">
            A selection of client work, full-stack applications, and infrastructure projects. Each one is an opportunity to turn a practical need into a working product.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-2xl border bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-soft ${project.featured ? "border-copper/40 md:col-span-2" : "border-ink/10"}`}
            >
              {project.featured ? (
                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[#211923] p-7 text-white sm:p-9">
                    <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-[#d98763]/30" />
                    <div className="absolute -right-4 -top-8 h-48 w-48 rounded-full border border-[#d98763]/25" />
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#e5a184]">Featured product</span>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/75">Live platform</span>
                    </div>
                    <div className="relative py-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e5a184]">Christa's</p>
                      <p className="mt-1 font-serif text-4xl leading-none sm:text-5xl">Speakeasy</p>
                      <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">A private digital community with memberships, social features and live video experiences.</p>
                    </div>
                    <div className="relative flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-white/70">
                      <span className="border border-white/20 px-2 py-1">Community</span>
                      <span className="border border-white/20 px-2 py-1">Membership</span>
                      <span className="border border-white/20 px-2 py-1">Live video</span>
                    </div>
                  </div>

                  <ProjectDetails project={project} featured />
                </div>
              ) : (
                <ProjectDetails project={project} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetails({ project, featured = false }) {
  return (
    <div className={featured ? "p-7 sm:p-9" : "flex h-full flex-col p-6 sm:p-7"}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.17em] text-moss">{project.category}</p>
          <h3 className={`mt-2 font-black tracking-tight text-ink ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.title}</h3>
        </div>
        <span className="rounded-xl border border-ink/10 bg-surface p-2 text-copper transition group-hover:border-copper/40">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <p className={`mt-4 leading-7 text-ink/68 ${featured ? "max-w-2xl text-sm sm:text-base" : "text-sm"}`}>{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((skill) => (
          <span key={skill} className="rounded-full border border-ink/10 bg-surface px-3 py-1 text-[11px] font-bold text-ink/70">{skill}</span>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.caseStudy ? (
          <a href={project.caseStudy} className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-lg bg-ink px-4 py-2 text-xs font-bold text-white transition hover:bg-moss dark:bg-copper dark:text-white dark:hover:bg-moss">
            Case study <ArrowUpRight size={15} />
          </a>
        ) : null}
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-lg border border-ink/15 bg-surface px-4 py-2 text-xs font-bold text-ink transition hover:border-copper hover:text-copper">
            <ExternalLink size={14} /> Live site
          </a>
        ) : null}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-lg border border-ink/15 bg-surface px-4 py-2 text-xs font-bold text-ink transition hover:border-copper hover:text-copper">
            <Github size={14} /> Source
          </a>
        ) : null}
      </div>
    </div>
  );
}
