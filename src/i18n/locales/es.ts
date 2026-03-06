import type { Dictionary } from "../types";

const es = {
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    experience: "Experiencia"
  },
  hero: {
    badge: "Portafolio",
    title: "Jose Pablo Araya",
    role: "Desarrollador Frontend",
    desc:
      "Construyo interfaces modernas y eficientes, con foco en UX y arquitectura limpia. Especializado en React, Angular y Flutter.",
    primaryCta: "Ver GitHub",
    secondaryCta: "Ver proyectos",
    panelTitle: "Enfoque",
    focus: ["Sistemas de UI modernos", "Performance y accesibilidad", "Integración limpia con APIs"]
  },
  experience: {
  title: "Experiencia",
  subtitle: "Entrega real en frontend, backend y optimización de pipelines CI.",
  items: [
    {
      company: "Infoya",
      period: "Nov 2022 — Actualidad",
      role: "Desarrollador de Software",
      bullets: [
        "Identificar cuellos de botella en la experiencia de desarrollo (build, IDE, PR workflows).",
        "Optimizar rendimiento, confiabilidad y usabilidad del pipeline de CI.",
        "Aplicar buenas prácticas de control de versiones, CI y pruebas unitarias."
      ],
      stack: ["CI/CD", "Git", "Pruebas", "Performance", "DX"]
    },
    {
      company: "STARTUPCR",
      period: "Ene 2021 — Jun 2021",
      role: "Desarrollador de Software (Frontend/Backend)",
      bullets: [
        "Construir funcionalidades en backend y frontend usando Flutter, PHP y Laravel.",
        "Implementar UX y flujos UI en Flutter/Dart.",
        "Entregar APIs REST en PHP/Laravel para soportar el producto."
      ],
      stack: ["Flutter", "Dart", "PHP", "Laravel", "REST"]
    }
  ]
},
  about: {
    title: "Sobre mí",
    subtitle: "Mentalidad orientada a producto, con foco en UX, performance y entrega.",
    body:
      "Desarrollador frontend con experiencia en React, Angular y Flutter. Especializado en interfaces modernas y consumo robusto de APIs REST. Con conocimientos en .NET y SQL Server para entrega end-to-end.",
       highlights: ["Costa Rica", "Inglés B2", "React • Flutter • Angular", ".NET • SQL Server"]
  },
  skills: {
    title: "Habilidades",
    subtitle: "Stack principal y herramientas usadas en el día a día.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de Datos"
  },
  projects: {
    title: "Proyectos",
    subtitle: "Entrega orientada a impacto: UI limpia, integraciones sólidas y código mantenible.",
    tech: "Tecnologías"
  },
  contact: {
    title: "Contacto",
    subtitle: "Disponible para proyectos freelance o posiciones full-time.",
    email: "Correo",
    linkedin: "LinkedIn",
    github: "GitHub"
  },
  footer: {
    built: "Hecho con React",
    rights: "Todos los derechos reservados"
  }
} satisfies Dictionary;

export default es;