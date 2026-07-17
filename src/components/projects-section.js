import { ArrowUpRight, Github } from "lucide-react";

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="border-b border-ink/10 bg-surface py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-wide text-copper">Selected work</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Full stack and cloud projects</h2>
          <p className="mt-4 leading-7 text-ink/68">
            Real-world projects showcasing web development, cloud infrastructure, and full-stack delivery.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-md border border-ink/10 bg-paper p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-moss">{project.category}</p>
                  <h3 className="mt-2 text-xl font-black">{project.title}</h3>
                </div>
                <div className="rounded-md border border-ink/10 bg-surface p-2 text-copper">
                  <ArrowUpRight size={19} />
                </div>
              </div>
              <p className="mt-4 min-h-20 leading-7 text-ink/68">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((skill) => (
                  <span key={skill} className="rounded-md border border-ink/10 bg-surface px-3 py-1 text-xs font-bold text-ink/70">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-moss dark:bg-white dark:text-ink dark:hover:bg-copper dark:hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} />
                    Code
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    className="focus-ring inline-flex items-center gap-2 rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold hover:border-copper hover:text-copper"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <ArrowUpRight size={17} />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
