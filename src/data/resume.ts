export const resumeContent = {
  name: "Andrew Odom",
  email: "andrewodom0@icloud.com",
  phone: "(615) 828-7318",
  linkedInUrl: "https://www.linkedin.com/in/andrewodom18",
  githubUrl: "https://github.com/andrewodom18",
  siteUrl: "https://aodom.dev",
  pdfPath: "/assets/andrew-odom-resume.pdf",
  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Portfolio", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Resume PDF", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "Resume | software developer | mobile and web",
    title: "Andrew Odom, Software Developer",
    lead: "I am looking for software developer roles where I can build mobile apps, web interfaces, and backend-connected systems with clear UX and maintainable code.",
    contact: [
      { label: "Email", text: "andrewodom0@icloud.com", href: "mailto:andrewodom0@icloud.com" },
      { label: "LinkedIn", text: "linkedin.com/in/andrewodom18", href: "https://www.linkedin.com/in/andrewodom18" },
      { label: "Phone", text: "(615) 828-7318", href: "tel:+16158287318" }
    ],
    actions: [
      { label: "Download resume", href: "/assets/andrew-odom-resume.pdf", variant: "primary", download: true },
      { label: "View portfolio", href: "#work" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/andrewodom18", variant: "accent" }
    ],
    proof: [
      { label: "Open to", text: "Software developer roles in mobile, web, or full-stack teams." },
      { label: "Build range", text: "Flutter apps, TypeScript interfaces, Supabase-backed workflows." },
      { label: "Working style", text: "Readable code, practical releases, and focused product judgment." }
    ]
  },
  profile: {
    label: "Resume Profile",
    title: "Software developer focused on useful, maintainable applications.",
    summary: "This page is the quick resume view: what I build, how I work, and where to find the portfolio pieces that prove it.",
    features: [
      {
        title: "Mobile and web UI",
        text: "I build clean user flows for app and web experiences, with attention to responsive layouts, state, and the path from first click to finished task."
      },
      {
        title: "Backend-connected work",
        text: "I can connect the visible experience to auth, data, subscriptions, hosting, and the operational details that keep a product usable."
      },
      {
        title: "Maintainable delivery",
        text: "I prefer readable code, small moving parts, and releases that stay understandable after the first demo."
      }
    ]
  },
  work: {
    label: "Portfolio",
    title: "Selected work and proof-of-build.",
    summary: "This is the showcase side of the site. Portfolio cards should point hiring teams to live work, code, app launches, or short case studies.",
    cards: [
      {
        type: "Website",
        badge: "Live",
        title: "Resume Site",
        text: "A fast Astro resume site built to communicate skills, portfolio work, and contact paths without making anyone open a mystery attachment.",
        href: "https://aodom.dev",
        linkText: "Open live site",
        tags: ["Astro", "CSS", "Responsive UI"]
      },
      {
        type: "Code",
        badge: "GitHub",
        title: "Public Workbench",
        text: "A direct path to public repositories, experiments, and shipped pieces as the portfolio fills in with stronger project evidence.",
        href: "https://github.com/andrewodom18",
        linkText: "View GitHub",
        tags: ["TypeScript", "Flutter", "Supabase"]
      },
      {
        type: "Next launch",
        badge: "Link slot",
        title: "App Showcase",
        text: "A home for the next mobile app, web product, or case study that deserves a direct portfolio link.",
        href: "#contact",
        linkText: "Ready for a showcase link",
        tags: ["Flutter", "RevenueCat", "Backend"],
        local: true
      }
    ]
  },
  experience: {
    label: "Experience",
    title: "Relevant experience and working strengths.",
    summary: "A concise role-focused view of what I can contribute on a software team.",
    items: [
      {
        meta: "Current focus",
        title: "Software Developer",
        text: "Building mobile and web software with Flutter, Next.js, TypeScript, Supabase, authentication, subscriptions, and practical deployment workflows."
      },
      {
        meta: "Strengths",
        title: "Mobile and web implementation",
        text: "Turning loose requirements into clear interfaces, connected data flows, and releases that can be understood and improved by a team."
      },
      {
        meta: "Workflow",
        title: "Deployment and maintenance",
        text: "Working across implementation details, build steps, hosting, and release checks so software can move from local development to real use."
      }
    ]
  },
  skills: {
    label: "Technical Skills",
    title: "Stack I use to build and ship.",
    summary: "The stack is intentionally practical: enough range to build complete applications without turning the resume into keyword soup.",
    items: ["Flutter", "Dart", "TypeScript", "Next.js", "React", "Supabase", "RevenueCat", "Docker"]
  },
  resume: {
    label: "Resume PDF",
    title: "Download the resume version.",
    text: "Use the PDF for recruiting systems, or print this page for a web-native resume view with portfolio links."
  },
  contact: {
    label: "Contact",
    title: "Contact Andrew Odom",
    text: "Hiring teams and recruiters can reach me directly. The portfolio links above are where I show the work; this section is the shortest path to a conversation.",
    methods: [
      { label: "Email", value: "andrewodom0@icloud.com", href: "mailto:andrewodom0@icloud.com" },
      { label: "Phone", value: "(615) 828-7318", href: "tel:+16158287318" },
      { label: "LinkedIn", value: "linkedin.com/in/andrewodom18", href: "https://www.linkedin.com/in/andrewodom18" },
      { label: "GitHub", value: "github.com/andrewodom18", href: "https://github.com/andrewodom18" },
      { label: "Website", value: "aodom.dev", href: "https://aodom.dev" }
    ]
  },
  footer: {
    note: "Built with Astro and plain CSS as a focused resume and portfolio."
  }
} as const;

export type ResumeContent = typeof resumeContent;
