"use client";

import { useEffect, useState } from "react";
import { getProjects, getSiteProfile } from "@/lib/firestore-service";
import { profile as fallbackProfile } from "@/lib/profile-data";
import { SiteHeader } from "./site-header";
import { Hero } from "./hero";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { ResumeSection } from "./resume-section";
import { ContactSection } from "./contact-section";
import { SiteFooter } from "./site-footer";
import { initAnalytics } from "@/lib/firebase";

export function PortfolioClient() {
  const [siteProfile, setSiteProfile] = useState(fallbackProfile);

  useEffect(() => {
    initAnalytics();
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
        <ProjectsSection projects={siteProfile.projects} />
        <SkillsSection skills={siteProfile.skills} />
        <ResumeSection profile={siteProfile} />
        <ContactSection profile={siteProfile} />
      </main>
      <SiteFooter />
    </>
  );
}
