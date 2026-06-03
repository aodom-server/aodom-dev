export const resumeContent = {
  name: "Andrew Odom",
  email: "andrewodom0@icloud.com",
  phone: "(615) 828-7318",
  linkedInUrl: "https://www.linkedin.com/in/andrewodom18",
  githubUrl: "https://github.com/andrewodom18",
  siteUrl: "https://aodom.dev",
  pdfPath: "/assets/andrew-odom-resume.pdf",
  nav: [
    { label: "Education", href: "#profile" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#work" },
    { label: "Resume PDF", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "Resume | Computer Science | Cybersecurity path",
    title: "Andrew Odom",
    lead: "I am working on my bachelor's degree in Computer Science and planning to continue into a master's in Cybersecurity. This site is a resume-first view of my education, work experience, technical skills, and selected projects.",
    contact: [
      { label: "Email", text: "andrewodom0@icloud.com", href: "mailto:andrewodom0@icloud.com" },
      { label: "LinkedIn", text: "linkedin.com/in/andrewodom18", href: "https://www.linkedin.com/in/andrewodom18" },
      { label: "Phone", text: "(615) 828-7318", href: "tel:+16158287318" }
    ],
    actions: [
      { label: "Download resume", href: "/assets/andrew-odom-resume.pdf", variant: "primary", download: true },
      { label: "Review experience", href: "#experience" },
      { label: "View portfolio", href: "#work", variant: "accent" }
    ],
    proof: [
      { label: "Education", text: "Bachelor's in Computer Science in progress." },
      { label: "Graduate goal", text: "Planned master's focus in Cybersecurity." },
      { label: "Portfolio role", text: "Projects are included as skill evidence." }
    ]
  },
  profile: {
    label: "Education",
    title: "Computer science foundation with a cybersecurity direction.",
    summary: "My academic path is centered on software fundamentals now and security depth next: a bachelor's in Computer Science followed by a planned master's in Cybersecurity.",
    features: [
      {
        title: "Bachelor's in Computer Science",
        text: "Currently working through the degree path with emphasis on programming fundamentals, systems thinking, data, and practical software development."
      },
      {
        title: "Cybersecurity master's plan",
        text: "After the bachelor's, my goal is to continue into graduate study focused on cybersecurity, secure systems, and risk-aware engineering."
      },
      {
        title: "Applied learning",
        text: "The portfolio exists to show how coursework and independent practice become working software, readable code, and documented decisions."
      }
    ]
  },
  work: {
    label: "Portfolio",
    title: "Selected projects as skill evidence.",
    summary: "This section is a skills showcase: working examples, code, and case-study notes that help employers evaluate my technical range.",
    cards: [
      {
        type: "Website",
        badge: "Live",
        title: "Resume Site",
        text: "A personal Astro resume site that organizes education, experience, contact info, and selected project evidence in one accessible place.",
        href: "https://aodom.dev",
        linkText: "Open live site",
        tags: ["Astro", "CSS", "Responsive UI"]
      },
      {
        type: "Code",
        badge: "GitHub",
        title: "Public Workbench",
        text: "Public repositories and experiments that show coding practice, technical range, and progress across application ideas.",
        href: "https://github.com/andrewodom18",
        linkText: "View GitHub",
        tags: ["TypeScript", "Flutter", "Supabase"]
      },
      {
        type: "Next launch",
        badge: "Link slot",
        title: "App Showcase",
        text: "A placeholder for a completed app, school project, or case study that deserves a direct portfolio link once it is ready.",
        href: "#contact",
        linkText: "Portfolio slot",
        tags: ["Flutter", "RevenueCat", "Backend"],
        local: true
      }
    ]
  },
  experience: {
    label: "Work Experience",
    title: "Past work experience and development practice.",
    summary: "A focused resume view of practical work habits, implementation experience, and the kind of team contribution I am building toward.",
    items: [
      {
        meta: "Development practice",
        title: "Software and technical work",
        text: "Building mobile and web software with Flutter, TypeScript, Supabase, authentication, subscriptions, and practical deployment workflows."
      },
      {
        meta: "Past work habits",
        title: "Implementation and follow-through",
        text: "Carrying tasks from requirements through interface decisions, data flow, testing checks, and release-ready updates."
      },
      {
        meta: "Team value",
        title: "Maintainable work",
        text: "Keeping code readable, changes scoped, and decisions understandable so projects are easier to review and improve."
      }
    ]
  },
  skills: {
    label: "Technical Skills",
    title: "Technical tools supporting the resume.",
    summary: "Skills are listed as supporting evidence for education, experience, and portfolio projects.",
    items: ["Computer Science", "Security Fundamentals", "Flutter", "Dart", "TypeScript", "React", "Supabase", "Docker"]
  },
  resume: {
    label: "Resume PDF",
    title: "Download the resume version.",
    text: "Use the PDF for recruiting systems. This web page is the readable resume view, with portfolio links kept separate as supporting project evidence."
  },
  contact: {
    label: "Contact",
    title: "Contact Andrew Odom",
    text: "Reach out about roles, internships, or recruiting conversations. The portfolio section is only for reviewing examples of work and skill growth.",
    methods: [
      { label: "Email", value: "andrewodom0@icloud.com", href: "mailto:andrewodom0@icloud.com" },
      { label: "Phone", value: "(615) 828-7318", href: "tel:+16158287318" },
      { label: "LinkedIn", value: "linkedin.com/in/andrewodom18", href: "https://www.linkedin.com/in/andrewodom18" },
      { label: "GitHub", value: "github.com/andrewodom18", href: "https://github.com/andrewodom18" },
      { label: "Website", value: "aodom.dev", href: "https://aodom.dev" }
    ]
  },
  footer: {
    note: "Built with Astro and plain CSS as a resume-first portfolio."
  }
} as const;

export type ResumeContent = typeof resumeContent;
