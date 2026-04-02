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
    role: "Frontend / Fullstack Developer",
    desc:
      "I build modern, scalable and high-performance digital products across web and mobile. My experience spans React, Angular, Flutter, .NET and SQL Server, with strong focus on UX, maintainability and clean integrations.",
    primaryCta: "View GitHub",
    secondaryCta: "See projects",
    panelTitle: "Core focus",
    focus: [
      "Modern UI architecture",
      "REST API integration",
      "Scalable frontend delivery",
      "Clean code and maintainable systems"
    ]
  },

  experience: {
    title: "Experience",
    subtitle: "Professional delivery across frontend, fullstack and enterprise platforms.",
    items: [
      {
        company: "CFIA",
        period: "Jun 2024 — Present",
        role: "Software Engineer I",
        bullets: [
          "Develop and maintain enterprise applications using .NET Core and SQL Server.",
          "Build and enhance React-based interfaces focused on performance, usability and seamless backend integration.",
          "Design secure and scalable RESTful APIs and optimize queries, database structures and stored procedures.",
          "Collaborate in Agile/SCRUM environments using Git, Azure DevOps and CI/CD-oriented workflows."
        ],
        stack: [".NET Core", "React", "SQL Server", "REST APIs", "Azure DevOps", "Agile"]
      },
      {
        company: "Zircon Internacional",
        period: "Jun 2023 — Mar 2024",
        role: "Fullstack Developer",
        bullets: [
          "Developed applications using Angular, ASP.NET, TypeScript, HTML and CSS based on business and client requirements.",
          "Applied Git-based workflows to support code control, collaboration and delivery quality.",
          "Implemented secure and effective API integrations to improve reliability and system performance."
        ],
        stack: ["Angular", "ASP.NET", "TypeScript", "HTML", "CSS", "Git"]
      },
      {
        company: "Infoya",
        period: "Nov 2022 — Mar 2023",
        role: "iOS Developer",
        bullets: [
          "Identified performance bottlenecks in the development experience, including build systems, IDE integrations and PR workflows.",
          "Improved performance, reliability and usability in CI pipelines.",
          "Applied source control, continuous integration and unit testing best practices."
        ],
        stack: ["iOS", "CI/CD", "Git", "Unit Testing", "Performance", "Developer Experience"]
      }
    ]
  },

  about: {
    title: "About",
    subtitle: "Product-minded developer focused on quality, performance and long-term maintainability.",
    body:
      "I am a software developer with hands-on experience in frontend, fullstack and mobile development. I specialize in building modern interfaces with React and Angular, consuming and designing REST APIs, and delivering robust solutions backed by .NET and SQL Server. I also bring experience with Flutter and Swift, plus a strong focus on UX, clean architecture, maintainable code and performance optimization.",
    highlights: [
      "Costa Rica",
      "English B2",
      "React • Angular • Flutter",
      ".NET Core • SQL Server • REST APIs"
    ]
  },

  skills: {
    title: "Skills",
    subtitle: "Technologies and practices used in real production environments.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database"
  },

  projects: {
    title: "Projects",
    subtitle: "Solutions focused on usability, solid integration and real business value.",
    tech: "Tech stack",
    items: [
      {
        title: "ID Reader System",
        description:
          "Platform designed to read identification cards across mobile and desktop environments. It supports data capture through the device camera or a USB-connected card reader on Windows, enables attendance tracking for events, and includes fully dynamic web forms for participant registration. The solution was built with Flutter as the main frontend, React for web forms, and a layered .NET backend.",
        tech: ["Flutter", "React", ".NET", "SQL Server", "REST APIs", "Windows USB"]
      },
      {
        title: "Payment Gateway",
        description:
          "Web-based payment solution focused on enabling online transactions through integration with Lafise banking APIs. The project was designed to provide a clear and reliable payment experience from the website, connecting a React frontend with backend services prepared for secure communication with the financial institution.",
        tech: ["React", ".NET", "REST APIs", "Banking integration", "Web payments"]
      },
      {
        title: "Rewards Management System",
        description:
          "Web platform for rewards inventory and delivery management, built to track available stock, register item movements and streamline the delivery process from a centralized interface. The UI was developed in React and the backend in .NET, ensuring a structured and traceable operation.",
        tech: ["React", ".NET", "SQL Server", "Inventory", "Delivery management"]
      }
    ]
  },

  contact: {
    title: "Contact",
    subtitle: "Open to freelance opportunities, remote collaboration and full-time roles.",
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