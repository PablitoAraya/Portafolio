import type { Dictionary } from "../types";

const en = {
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    experience: "Experience"

  },
  hero: {
    badge: "Portfolio",
    title: "Jose Pablo Araya",
    role: "Frontend Developer",
    desc:
      "I build modern, high-performance interfaces with strong UX and clean architecture. Specialized in React, Angular and Flutter.",
    primaryCta: "View GitHub",
    secondaryCta: "See projects",
    panelTitle: "Focus",
    focus: ["Modern UI systems", "Performance & accessibility", "Clean API integration"]
  },
  experience: {
  title: "Experience",
  subtitle: "Hands-on delivery across frontend, backend and CI pipelines.",
  items: [
    {
      company: "Infoya",
      period: "Nov 2022 — Present",
      role: "Software Developer",
      bullets: [
        "Identify development experience bottlenecks (build system, IDE integrations, PR workflows).",
        "Optimize performance, reliability and usability of CI pipelines.",
        "Apply best practices in source control, CI and unit testing."
      ],
      stack: ["CI/CD", "Git", "Unit Testing", "Performance", "DX"]
    },
    {
      company: "STARTUPCR",
      period: "Jan 2021 — Jun 2021",
      role: "Software Developer (Frontend/Backend)",
      bullets: [
        "Build product features across backend and frontend using Flutter, PHP and Laravel.",
        "Implement UX and UI flows in Flutter/Dart.",
        "Deliver REST APIs in PHP/Laravel to support the product."
      ],
      stack: ["Flutter", "Dart", "PHP", "Laravel", "REST"]
    }
  ]
},
  about: {
    title: "About",
    subtitle: "Product-oriented mindset, with focus on UX, performance and delivery.",
    body:"Frontend developer experienced in React, Angular and Flutter. I specialize in modern interfaces and robust REST API consumption. Comfortable with .NET and SQL Server for end-to-end delivery.",
    highlights: ["Costa Rica", "English B2", "React • Flutter • Angular", ".NET • SQL Server"]
  },
  skills: {
    title: "Skills",
    subtitle: "Core stack and tools used in real-world delivery.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database"
  },
  projects: {
    title: "Projects",
    subtitle: "Outcome-driven delivery: clean UI, solid integrations and maintainable code.",
    tech: "Tech stack"
  },
  contact: {
    title: "Contact",
    subtitle: "Open to freelance projects or full-time opportunities.",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub"
  },
  footer: {
    built: "Built with React",
    rights: "All rights reserved"
  }
} satisfies Dictionary;

export default en;