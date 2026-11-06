"use client";

import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
  Link
} from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { resume } from "@/lib/resume-data";

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 46,
    paddingHorizontal: 36,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#101418",
    lineHeight: 1.4
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 0.5
  },
  role: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: 700,
    color: "#b65f3a"
  },
  contactRow: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  contactItem: {
    fontSize: 8,
    color: "#4f5a5f",
    marginRight: 14,
    marginBottom: 3
  },
  contactLabel: {
    fontWeight: 700,
    color: "#2b3338"
  },
  section: {
    marginTop: 13
  },
  heading: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    color: "#41644a",
    borderBottomWidth: 0.75,
    borderBottomColor: "#c9d3cc",
    paddingBottom: 3,
    marginBottom: 6
  },
  body: {
    fontSize: 8.6,
    lineHeight: 1.45,
    color: "#2b3338"
  },
  item: {
    marginBottom: 8
  },
  itemTitle: {
    fontSize: 9.4,
    fontWeight: 700,
    color: "#101418"
  },
  itemSubtitle: {
    fontSize: 8.6,
    fontStyle: "italic",
    color: "#4f5a5f"
  },
  meta: {
    marginTop: 2,
    fontSize: 7.8,
    color: "#657178"
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 3
  },
  skillArea: {
    width: 88,
    fontSize: 8.2,
    fontWeight: 700,
    color: "#2b3338",
    paddingRight: 6
  },
  skillList: {
    flex: 1,
    fontSize: 8.2,
    color: "#2b3338"
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2.5
  },
  bulletDot: {
    width: 9,
    fontSize: 8.6
  },
  bulletText: {
    flex: 1,
    fontSize: 8.6,
    lineHeight: 1.4,
    color: "#2b3338"
  },
  linkRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 2
  },
  link: {
    fontSize: 7.8,
    color: "#1a5fb4",
    marginRight: 12
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 36,
    right: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "#d8dee2",
    paddingTop: 4,
    fontSize: 7,
    color: "#8a949a"
  }
});

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text>Elvis Bitolo Khanyanga | Full-Stack Software Developer</Text>
      <Text
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </View>
  );
}

function ContactBlock() {
  const { contact } = resume;

  return (
    <View style={styles.contactRow}>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>Location: </Text>
        {contact.location}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>Phone: </Text>
        {contact.phone}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>Email: </Text>
        {contact.email}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>Portfolio: </Text>
        {contact.portfolio}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>GitHub: </Text>
        {contact.github}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>LinkedIn: </Text>
        {contact.linkedin}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>Medium: </Text>
        {contact.medium}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>Career focus: </Text>
        {contact.careerFocus}
      </Text>
      <Text style={styles.contactItem}>
        <Text style={styles.contactLabel}>Availability: </Text>
        {contact.availability}
      </Text>
    </View>
  );
}

function Header() {
  return (
    <View>
      <Text style={styles.name}>{resume.name}</Text>
      <Text style={styles.role}>{resume.role}</Text>
      <ContactBlock />
    </View>
  );
}

function ProjectItem({ project, index }) {
  return (
    <View style={styles.item} wrap={false}>
      <Text style={styles.itemTitle}>
        {index + 1}. {project.title}
      </Text>
      <Text style={styles.itemSubtitle}>{project.subtitle}</Text>
      <Text style={styles.body}>{project.description}</Text>
      <Text style={styles.meta}>
        Technologies: {project.technologies}
      </Text>
      <View style={styles.linkRow}>
        {project.links.map((link) => (
          <Link key={link.url} src={link.url} style={styles.link}>
            {link.label} — {link.url.replace(/^https?:\/\//, "")}
          </Link>
        ))}
      </View>
    </View>
  );
}

function ResumeDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />

        <View style={styles.section}>
          <Text style={styles.heading}>Professional Summary</Text>
          <Text style={styles.body}>{resume.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Technical Skills</Text>
          {resume.technicalSkills.map((group) => (
            <View key={group.area} style={styles.skillRow}>
              <Text style={styles.skillArea}>{group.area}</Text>
              <Text style={styles.skillList}>{group.skills}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Professional Experience</Text>
          {resume.experience.map((job) => (
            <View key={`${job.role}-${job.company}`} style={styles.item}>
              <Text style={styles.itemTitle}>
                {job.role} | {job.company}
              </Text>
              <Text style={styles.meta}>
                {job.location} | {job.period}
              </Text>
              {job.details.map((detail) => (
                <View key={detail} style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{detail}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <Footer />
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>Selected Project Portfolio</Text>
        <Text style={styles.meta}>
          A curated selection of substantial applications and infrastructure
          work. Source-code links open the corresponding GitHub repositories;
          live-demo links are included where available.
        </Text>
        {resume.projects.slice(0, 5).map((project, index) => (
          <ProjectItem
            key={project.title}
            project={project}
            index={index}
          />
        ))}
        <Footer />
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>Project Portfolio — Continued</Text>
        {resume.projects.slice(5).map((project, index) => (
          <ProjectItem
            key={project.title}
            project={project}
            index={index + 5}
          />
        ))}

        <View style={styles.section}>
          <Text style={styles.heading}>Additional Client & Portfolio Work</Text>
          {resume.additionalWork.map((work) => (
            <View key={work.name} style={styles.item} wrap={false}>
              <Text style={styles.itemTitle}>{work.name}</Text>
              <Text style={styles.body}>{work.description}</Text>
              <Link src={work.url} style={styles.link}>
                {work.label} — {work.url.replace(/^https?:\/\//, "")}
              </Link>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Education & Certifications</Text>
          {resume.education.map((item) => (
            <View key={item.title} style={styles.item} wrap={false}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.meta}>
                {item.issuer} | {item.period}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Professional Strengths</Text>
          <Text style={styles.body}>{resume.strengths.join(" • ")}</Text>
        </View>

        <Footer />
      </Page>
    </Document>
  );
}

export function ResumeDownloadButton() {
  return (
    <PDFDownloadLink
      document={<ResumeDocument />}
      fileName="Elvis_Bitolo_Resume.pdf"
      className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-moss"
    >
      {({ loading }) => (
        <>
          <Download size={17} />
          {loading ? "Preparing CV" : "Download PDF CV"}
        </>
      )}
    </PDFDownloadLink>
  );
}
