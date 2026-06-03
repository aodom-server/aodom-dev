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
      { label: "Contact form", href: "#contact" }
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
    title: "Work samples.",
    summary: "Public samples will be added as they are safe to share.",
    cards: [
      {
        type: "Website",
        badge: "Site",
        title: "Resume Site",
        text: "Fast Astro resume site with responsive layout and clean presentation.",
        href: "#contact",
        linkText: "Coming soon",
        tags: ["Astro", "Tailwind", "Responsive UI"],
        local: true
      },
      {
        type: "Mobile app",
        badge: "App",
        title: "Mobile App Sample",
        text: "Reserved for a safe mobile app or case study.",
        href: "#contact",
        linkText: "Case study soon",
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
    text: "This page is the public resume for QR scans. Use print for a paper copy while private contact details stay off the page."
  },
  contact: {
    label: "Contact",
    title: "Share your info.",
    text: "This form will collect visitor details once it is connected.",
    note: "Preview mode. Nothing is sent yet.",
    fields: [
      { id: "name", label: "Name", type: "text", placeholder: "Your name" },
      { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
      { id: "organization", label: "Organization", type: "text", placeholder: "Company or team" },
      { id: "message", label: "Message", type: "textarea", placeholder: "Role, project, or reason for reaching out." }
    ]
  },
  footer: {
    note: "Resume-first portfolio for QR scans and hiring conversations."
  }
} as const;

export type ResumeContent = typeof resumeContent;
