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
    title: "Project range.",
    summary: "Public profile data plus private and organization work signals.",
    note: {
      title: "Private code. Public pattern.",
      text: "Recent project history points to TypeScript web apps, Flutter mobile apps, data cleanup tools, realtime browser work, and server automation. I can discuss scope and decisions without exposing protected code.",
      tags: ["TypeScript apps", "Flutter apps", "Automation"]
    },
    insights: [
      {
        meta: "Public repo",
        title: "GitHub profile README",
        text: "The public profile repo documents stack, working style, and private/org project signals without exposing protected code.",
        href: "https://github.com/andrewodom18/andrewodom18",
        linkText: "View repo",
        tags: ["Profile README", "Stack notes", "Working style"]
      },
      {
        meta: "Repo footprint",
        title: "Private and org work",
        text: "The profile snapshot references 15 accessible repos, including private, organization, and collaboration work.",
        tags: ["Private repos", "Org work", "Recent activity"]
      },
      {
        meta: "Product surface",
        title: "What the repo points to",
        text: "Full-stack web apps, Flutter mobile apps, realtime browser experiences, data tools, Supabase products, Home Assistant config, and server automation.",
        tags: ["Web apps", "Flutter", "Automation"]
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
        text: "Building mobile workflows with maintainable code, clear interfaces, review, and release-minded implementation."
      },
      {
        meta: "Project range",
        title: "Web, data, and automation",
        text: "Recent work and private projects span full-stack web apps, Flutter apps, data cleanup systems, realtime browser experiences, and server automation."
      }
    ]
  },
  skills: {
    label: "Technical Skills",
    title: "Practical stack.",
    summary: "Mobile, web, data, automation, and security fundamentals.",
    items: ["TypeScript", "Dart", "Python", "Flutter", "React", "Next.js", "Astro", "Tailwind CSS", "Supabase", "SQL", "Docker", "GitHub Actions"]
  },
  resume: {
    label: "Resume Note",
    title: "Business-card QR resume.",
    text: "This page is the public resume for QR scans. Use print for a paper copy while private contact details stay off the page."
  },
  contact: {
    label: "Contact",
    title: "Contact.",
    text: "Use the public links below or the contact details on my card.",
    note: "GitHub shows the public profile and project context. LinkedIn is the best professional profile link.",
    links: [
      { label: "GitHub", href: "https://github.com/andrewodom18" },
      { label: "LinkedIn", href: "https://linkedin.com/in/andrewodom18/" },
      { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/andrewodom18" }
    ]
  },
  footer: {
    note: "Resume-first portfolio for QR scans and hiring conversations.",
    links: [
      { label: "GitHub", href: "https://github.com/andrewodom18" },
      { label: "LinkedIn", href: "https://linkedin.com/in/andrewodom18/" },
      { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/andrewodom18" }
    ]
  }
} as const;

export type ResumeContent = typeof resumeContent;
