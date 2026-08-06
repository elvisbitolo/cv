"use client";

import { useEffect, useState } from "react";
import { getProjects, getSiteProfile } from "@/lib/firestore-service";
import { profile as fallbackProfile } from "@/lib/profile-data";
import { SiteHeader } from "./site-header";
import { Hero } from "./hero";
import { AboutSection } from "./about-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { ResumeSection } from "./resume-section";
import { ContactSection } from "./contact-section";
import { SiteFooter } from "./site-footer";

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
        <ProjectsSection projects={siteProfile.projects} />
        <SkillsSection profile={siteProfile} />
        <ResumeSection profile={siteProfile} />
        <ContactSection profile={siteProfile} />
      </main>
      <SiteFooter />
    </>
  );
}
