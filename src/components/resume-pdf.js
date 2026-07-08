"use client";

import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import { Download } from "lucide-react";

const styles = StyleSheet.create({
  page: {
    padding: 36,
    fontFamily: "Helvetica",
    color: "#101418"
  },
  name: {
    fontSize: 25,
    fontWeight: 700
  },
  role: {
    marginTop: 6,
    fontSize: 12,
    color: "#b65f3a"
  },
  contact: {
    marginTop: 12,
    fontSize: 9,
    color: "#4f5a5f"
  },
  section: {
    marginTop: 20
  },
  heading: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#41644a",
    marginBottom: 8
  },
  body: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#2b3338"
  },
  item: {
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 700
  },
  meta: {
    marginTop: 2,
    fontSize: 9,
    color: "#657178"
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5
  },
  chip: {
    borderWidth: 1,
    borderColor: "#d8dee2",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
    fontSize: 8
  }
});

function ResumeDocument({ profile }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
        <Text style={styles.contact}>
          {profile.location} | {profile.email} | github.com/elvisbitolo | linkedin.com/in/elvis-bitolo
        </Text>

        <View style={styles.section}>
          <Text style={styles.heading}>Profile</Text>
          <Text style={styles.body}>{profile.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <View style={styles.chips}>
            {profile.skills.map((skill) => (
              <Text key={skill} style={styles.chip}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Experience</Text>
          {profile.experience.map((item) => (
            <View key={item.role} style={styles.item}>
              <Text style={styles.itemTitle}>
                {item.role} - {item.company}
              </Text>
              <Text style={styles.meta}>{item.period}</Text>
              {item.details.map((detail) => (
                <Text key={detail} style={styles.body}>
                  - {detail}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Projects</Text>
          {profile.projects.slice(0, 4).map((project) => (
            <View key={project.title} style={styles.item}>
              <Text style={styles.itemTitle}>{project.title}</Text>
              <Text style={styles.body}>{project.description}</Text>
              <Text style={styles.meta}>{project.stack.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Certifications</Text>
          {profile.certifications.map((cert) => (
            <View key={cert.title} style={styles.item}>
              <Text style={styles.itemTitle}>{cert.title}</Text>
              <Text style={styles.meta}>
                {cert.issuer} | {cert.year}
              </Text>
              <Text style={styles.body}>{cert.summary}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export function ResumeDownloadButton({ profile }) {
  return (
    <PDFDownloadLink
      document={<ResumeDocument profile={profile} />}
      fileName="Elvis-Bitolo-Khanyanga-CV.pdf"
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
