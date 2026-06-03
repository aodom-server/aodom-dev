export const resumeContent = {
  name: "Andrew Odom",
  siteUrl: "https://aodom.dev",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "QR resume | CS student",
    title: "Andrew Odom",
    lead: "Software developer at BESPIN. Since Dec 2023. CS bachelor's in progress. Cybersecurity master's planned.",
    actions: [
      { label: "Review experience", href: "#experience", variant: "primary" },
      { label: "View work samples", href: "#work", variant: "accent" },
      { label: "Contact", href: "#contact" }
    ],
    credentials: [
      { label: "Current role", text: "Software Developer, BESPIN" },
      { label: "Since", text: "December 2023" },
      { label: "Education", text: "CS bachelor's in progress" }
    ]
  },
  education: {
    label: "Education",
    title: "Computer Science now. Cybersecurity next.",
    summary: "Focused on fundamentals, mobile systems, and security-minded development.",
    items: [
      {
        meta: "In progress",
        title: "Bachelor's in Computer Science",
        text: "Programming fundamentals, systems thinking, data, architecture, and practical software."
      },
      {
        meta: "Planned",
        title: "Master's in Cybersecurity",
        text: "Next goal: secure systems, risk-aware engineering, and defense-minded software."
      }
    ]
  },
  work: {
    label: "Portfolio",
    title: "Public work.",
    summary: "Only samples that can be shared cleanly belong here.",
    note: {
      title: "No protected work.",
      text: "This section is for public-safe projects and case studies. It will stay separate from internal systems, private details, and anything that should not be shown in a hiring conversation.",
      tags: ["Mobile apps", "Web UI", "Case studies"]
    }
  },
  experience: {
    label: "Work Experience",
    title: "Software Developer at BESPIN.",
    summary: "Current role: Air Force mobile software factory.",
    items: [
      {
        meta: "Dec 2023 - Present",
        title: "Air Force BESPIN",
        text: "Software developer for Business and Service Enterprise Innovation, a mobile software factory."
      },
      {
        meta: "Mobile software factory",
        title: "Mobile delivery",
        text: "Building with maintainable code, clear interfaces, review, and release-minded implementation."
      },
      {
        meta: "Engineering habits",
        title: "Readable work",
        text: "Scoped changes, documented decisions, and responsive user workflows."
      }
    ]
  },
  skills: {
    label: "Technical Skills",
    title: "Practical stack.",
    summary: "Mobile, web, and security fundamentals.",
    items: ["Mobile Development", "Flutter", "Dart", "TypeScript", "React", "Responsive UI", "APIs", "Security Fundamentals", "Docker", "Technical Writing"]
  },
  resume: {
    label: "Resume Note",
    title: "Business-card QR resume.",
    text: "This page is the public resume for QR scans. Use print for a paper copy while private contact details stay off the page."
  },
  contact: {
    label: "Contact",
    title: "Contact.",
    text: "Use the contact details on my card or the channel where I shared this QR resume.",
    note: "Direct email, phone, and profile links stay off the public page for now."
  },
  footer: {
    note: "Resume-first portfolio for QR scans and hiring conversations.",
    links: [
      { label: "Buy me a coffee", href: "https://buymeacoffee.com/andrewodom18" }
    ]
  }
} as const;

export type ResumeContent = typeof resumeContent;
