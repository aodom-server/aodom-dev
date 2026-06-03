export const resumeContent = {
  name: "Andrew Odom",
  siteUrl: "https://aodom.dev",
  nav: [
    { label: "Snapshot", href: "#snapshot" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "QR resume | BESPIN | Computer Science",
    title: "Andrew Odom, software developer.",
    lead: "Air Force software developer at BESPIN since December 2023. Building mobile software while completing a bachelor's in Computer Science and planning a master's in Cybersecurity.",
    actions: [
      { label: "Review experience", href: "#experience", variant: "primary" },
      { label: "View work samples", href: "#work", variant: "accent" },
      { label: "Contact form", href: "#contact" }
    ],
    credentials: [
      { label: "Current role", text: "Software Developer, BESPIN" },
      { label: "Since", text: "December 2023" },
      { label: "Education", text: "Computer Science bachelor's in progress" }
    ]
  },
  profile: {
    label: "Snapshot",
    title: "Mobile developer. CS student. Security path.",
    summary: "A scan-friendly resume for quick hiring conversations.",
    features: [
      {
        title: "Current role",
        text: "Software Developer at Air Force BESPIN."
      },
      {
        title: "Education",
        text: "Computer Science bachelor's in progress."
      },
      {
        title: "Direction",
        text: "Planned Cybersecurity master's path."
      }
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
    label: "Selected Work",
    title: "A few things I can show.",
    summary: "Simple placeholders for websites, apps, and safe case studies as they become public.",
    cards: [
      {
        type: "Website",
        badge: "Site",
        title: "Resume Site",
        text: "Fast Astro resume site with responsive layout and clean presentation.",
        href: "#contact",
        linkText: "Link placeholder",
        tags: ["Astro", "Tailwind", "Responsive UI"],
        local: true
      },
      {
        type: "Mobile app",
        badge: "App",
        title: "Mobile App Sample",
        text: "Reserved for a safe mobile app or case study.",
        href: "#contact",
        linkText: "Case study placeholder",
        tags: ["Flutter", "Dart", "Mobile UX"],
        local: true
      }
    ]
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
    text: "This page is the public resume for QR scans. The PDF is temporarily removed while contact details are sanitized."
  },
  contact: {
    label: "Contact Form",
    title: "Leave your info.",
    text: "Use this form to share your details once the private endpoint is connected.",
    note: "Preview only. Messages are not sent yet.",
    fields: [
      { id: "name", label: "Name", type: "text", placeholder: "Your name" },
      { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
      { id: "organization", label: "Organization", type: "text", placeholder: "Company or team" },
      { id: "message", label: "Message", type: "textarea", placeholder: "Role, project, or reason for reaching out." }
    ]
  },
  footer: {
    note: "Resume-first portfolio. Contact details are intentionally placeholder-only for now."
  }
} as const;

export type ResumeContent = typeof resumeContent;
