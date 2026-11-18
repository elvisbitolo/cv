"use client";

import { useEffect, useState } from "react";
import { getProjects, getSiteProfile } from "@/lib/firestore-service";
import { profile as fallbackProfile } from "@/lib/profile-data";
import { SiteHeader } from "./site-header";
import { Hero } from "./hero";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { ResumeSection } from "./resume-section";
import { ContactSection } from "./contact-section";
import { SiteFooter } from "./site-footer";
import ChatWidget from "./chat-widget";

export function PortfolioClient() {
  const [siteProfile, setSiteProfile] = useState(fallbackProfile);

  useEffect(() => {
    async function loadData() {
      try {
        const [remoteProfile, remoteProjects] = await Promise.all([
          getSiteProfile(fallbackProfile),
          getProjects(fallbackProfile.projects)
        ]);
        setSiteProfile({ ...remoteProfile, projects: remoteProjects });
      } catch (error) {
        console.warn("Using fallback portfolio data.", error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero profile={siteProfile} />
        <AboutSection profile={siteProfile} />
        <ServicesSection profile={siteProfile} />
        <ProjectsSection projects={siteProfile.projects} />
        <SkillsSection profile={siteProfile} />
        <ResumeSection profile={siteProfile} />
        <ContactSection profile={siteProfile} />
        <section className="border-t border-ink/10 bg-paper py-16">
          <div className="section-shell max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-copper">Client validation</p>
            <h2 className="mt-3 text-balance text-3xl font-black sm:text-4xl">
              Shared by a client partner
            </h2>
            <div className="mt-6 overflow-hidden rounded-md border border-ink/10 bg-surface p-3">
              <iframe
                title="Facebook post about Elvis Bitolo's work"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02wgTE51q548PvgQG5cec8JPqdG771FVStPyxgqP8Tnss1xnHGH62XF7SKi16KUc6ml%26id%3D61592980267547&show_text=true&width=500"
                style={{ border: "none", overflow: "hidden", width: "100%" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ChatWidget />
    </>
  );
}