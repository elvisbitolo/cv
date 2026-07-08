import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import dynamic from "next/dynamic";

const ResumeDownloadButton = dynamic(() => import("./resume-pdf").then((mod) => mod.ResumeDownloadButton), { ssr: false });

export function ResumeSection({ profile }) {
  return (
    <section id="resume" className="border-b border-ink/10 bg-paper py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-copper">Resume</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">A CV built for cloud and software roles</h2>
          <p className="mt-4 leading-7 text-ink/68">
            The downloadable PDF is generated from the same structured profile data that powers this page.
          </p>
          <div className="mt-6">
            <ResumeDownloadButton profile={profile} />
          </div>
        </div>
        <div className="grid gap-5">
          <ResumeBlock icon={BriefcaseBusiness} title="Experience">
            {profile.experience.map((item) => (
              <div key={item.role} className="border-b border-ink/10 pb-5 last:border-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-black">{item.role}</h3>
                  <p className="text-sm font-semibold text-copper">{item.period}</p>
                </div>
                <p className="mt-1 text-sm font-bold text-ink/62">{item.company}</p>
                <ul className="mt-3 grid gap-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-sm leading-6 text-ink/68">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeBlock>
          <ResumeBlock icon={Award} title="Certifications">
            {profile.certifications.map((cert) => (
              <div key={cert.title}>
                <h3 className="text-lg font-black">{cert.title}</h3>
                <p className="mt-1 text-sm font-semibold text-copper">
                  {cert.issuer} | {cert.year}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink/68">{cert.summary}</p>
              </div>
            ))}
          </ResumeBlock>
          <ResumeBlock icon={GraduationCap} title="Education">
            {profile.education.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-copper">
                  {item.institution} | {item.period}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink/68">{item.summary}</p>
              </div>
            ))}
          </ResumeBlock>
        </div>
      </div>
    </section>
  );
}

function ResumeBlock({ icon: Icon, title, children }) {
  return (
    <section className="rounded-md border border-ink/10 bg-surface p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-md bg-moss/10 p-2 text-moss">
          <Icon size={21} />
        </div>
        <h2 className="text-xl font-black">{title}</h2>
      </div>
      {children}
    </section>
  );
}
