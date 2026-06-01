window.ResumeSite = window.ResumeSite || {};

window.ResumeSite.content = {
  name: "Andrew Odom",
  email: "hello@aodom.dev",
  githubUrl: "https://github.com/andrewodom18",
  siteUrl: "https://aodom.dev",
  pdfPath: "assets/andrew-odom-resume.pdf",
  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Builds", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "PDF", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    eyebrow: "Mobile apps | web systems | backend-connected products",
    title: "Andrew Odom builds product-minded software with a bias for shipping.",
    lead: "I work across Flutter, TypeScript, Next.js, Supabase, and deployment workflows to turn useful ideas into clean, durable products.",
    actions: [
      { label: "See the work", href: "#projects", variant: "primary" },
      { label: "Start a conversation", href: "mailto:hello@aodom.dev" },
      { label: "Old-school PDF", href: "assets/andrew-odom-resume.pdf", variant: "accent", download: true }
    ],
    proof: [
      { label: "Focus", text: "Apps that feel clear, fast, and intentional." },
      { label: "Range", text: "Frontend polish backed by practical infrastructure." },
      { label: "Stack", text: "Flutter, TypeScript, Next.js, Supabase, Docker." }
    ]
  },
  profile: {
    label: "Profile",
    title: "Useful software, edited until it feels obvious.",
    summary: "I like products with clean flows, readable code, and a small number of moving parts doing their jobs well.",
    features: [
      {
        title: "Product flow",
        text: "Interfaces should guide people without making them read a manual first. I care about the path from first click to finished task."
      },
      {
        title: "Full-stack sense",
        text: "I can connect the visible experience to auth, data, payments, hosting, and the operational details that keep it running."
      },
      {
        title: "Maintainable polish",
        text: "The goal is not decorative complexity. It is a product that looks sharp, responds smoothly, and stays easy to improve."
      }
    ]
  },
  projects: {
    label: "Selected builds",
    title: "Project slots ready for the good stuff.",
    summary: "App and website links can drop straight into this section as they go public. The cards are built for direct live links, code links, or short case studies.",
    cards: [
      {
        type: "Website",
        badge: "Live",
        title: "Resume Site",
        text: "A fast public profile built to communicate skills, projects, and contact paths without making anyone open a mystery attachment.",
        href: "https://aodom.dev",
        linkText: "Open live site",
        tags: ["HTML", "CSS", "Responsive UI"]
      },
      {
        type: "Code",
        badge: "GitHub",
        title: "Public Workbench",
        text: "A direct path to public repositories, experiments, and shipped pieces as the portfolio fills in.",
        href: "https://github.com/andrewodom18",
        linkText: "View GitHub",
        tags: ["TypeScript", "Flutter", "Supabase"]
      },
      {
        type: "Next launch",
        badge: "Link slot",
        title: "App Showcase",
        text: "A reserved home for the next mobile app, web product, or case study. Swap in the live URL when it is ready for visitors.",
        href: "#contact",
        linkText: "Ready for a direct link",
        tags: ["Flutter", "RevenueCat", "Backend"],
        local: true
      }
    ]
  },
  experience: {
    label: "Experience",
    title: "Built around the work, not buzzwords.",
    summary: "Use this space for the strongest roles, launches, metrics, or technical wins. The layout is ready for concise evidence.",
    items: [
      {
        meta: "Current focus",
        title: "Software Developer",
        text: "Building mobile and web products with Flutter, Next.js, TypeScript, Supabase, subscriptions, authentication, and practical deployment workflows."
      },
      {
        meta: "Strengths",
        title: "Product implementation",
        text: "Turning loose requirements into clear interfaces, connected data flows, and releases that can be maintained after the first impressive demo."
      },
      {
        meta: "Next edit",
        title: "Measurable wins",
        text: "Add specific outcomes here: shipped features, users, revenue, reliability improvements, speed gains, or anything that proves impact."
      }
    ]
  },
  skills: {
    label: "Stack",
    title: "Tools I can actually move with.",
    summary: "The stack is intentionally practical: enough range to build complete products, not so much noise that the signal disappears.",
    items: ["Flutter", "Dart", "TypeScript", "Next.js", "React", "Supabase", "RevenueCat", "Docker"]
  },
  resume: {
    label: "PDF-friendly",
    title: "Need the paper version? Boldly old-school. I made one anyway.",
    text: "Download the resume PDF, or print this page if you want the browser to do its best impression of a filing cabinet."
  },
  contact: {
    label: "Contact",
    title: "Have a role, project, or useful problem?",
    text: "Send the context, the constraints, and what success should look like. I will bring product sense, clean implementation, and a healthy suspicion of unnecessary complexity."
  },
  footer: {
    note: "Built with plain HTML, CSS, and an unreasonable dislike of bloated resumes."
  }
};
