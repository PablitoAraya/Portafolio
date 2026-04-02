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
    role: "Desarrollador Frontend / Fullstack",
    desc:
      "Construyo productos digitales modernos, escalables y de alto rendimiento para web y mobile. Tengo experiencia en React, Angular, Flutter, .NET y SQL Server, con foco en UX, mantenibilidad e integraciones limpias.",
    primaryCta: "Ver GitHub",
    secondaryCta: "Ver proyectos",
    panelTitle: "Enfoque principal",
    focus: [
      "Arquitectura moderna de interfaces",
      "Integración con APIs REST",
      "Entrega frontend escalable",
      "Código limpio y sistemas mantenibles"
    ]
  },

  experience: {
    title: "Experiencia",
    subtitle: "Entrega profesional en frontend, fullstack y plataformas empresariales.",
    items: [
      {
        company: "CFIA",
        period: "Jun 2024 — Actualidad",
        role: "Software Engineer I",
        bullets: [
          "Desarrollo y mantenimiento de aplicaciones empresariales con .NET Core y SQL Server.",
          "Construcción y mejora de interfaces en React enfocadas en rendimiento, usabilidad e integración fluida con backend.",
          "Diseño de APIs REST seguras y escalables, así como optimización de consultas, estructuras y procedimientos almacenados.",
          "Colaboración en equipos Agile/SCRUM utilizando Git, Azure DevOps y flujos orientados a CI/CD."
        ],
        stack: [".NET Core", "React", "SQL Server", "APIs REST", "Azure DevOps", "Agile"]
      },
      {
        company: "Zircon Internacional",
        period: "Jun 2023 — Mar 2024",
        role: "Desarrollador Fullstack",
        bullets: [
          "Desarrollo de aplicaciones con Angular, ASP.NET, TypeScript, HTML y CSS según requerimientos del negocio y del cliente.",
          "Aplicación de flujos de trabajo con Git para control de código, colaboración y calidad de entrega.",
          "Implementación de integraciones API seguras y eficientes para mejorar confiabilidad y rendimiento del sistema."
        ],
        stack: ["Angular", "ASP.NET", "TypeScript", "HTML", "CSS", "Git"]
      },
      {
        company: "Infoya",
        period: "Nov 2022 — Mar 2023",
        role: "Desarrollador iOS",
        bullets: [
          "Identificación de cuellos de botella en la experiencia de desarrollo, incluyendo build systems, integraciones con IDE y flujos de pull requests.",
          "Mejora del rendimiento, la confiabilidad y la usabilidad de pipelines de CI.",
          "Aplicación de buenas prácticas en control de código fuente, integración continua y pruebas unitarias."
        ],
        stack: ["iOS", "CI/CD", "Git", "Pruebas", "Performance", "Developer Experience"]
      }
    ]
  },

  about: {
    title: "Sobre mí",
    subtitle: "Desarrollador orientado a producto, con foco en calidad, rendimiento y mantenibilidad.",
    body:
      "Soy desarrollador de software con experiencia práctica en frontend, fullstack y desarrollo mobile. Me especializo en construir interfaces modernas con React y Angular, consumir y diseñar APIs REST, y entregar soluciones robustas respaldadas por .NET y SQL Server. También tengo experiencia con Flutter y Swift, además de un enfoque sólido en UX, arquitectura limpia, código mantenible y optimización de performance.",
    highlights: [
      "Costa Rica",
      "Inglés B2",
      "React • Angular • Flutter",
      ".NET Core • SQL Server • APIs REST"
    ]
  },

  skills: {
    title: "Habilidades",
    subtitle: "Tecnologías y prácticas utilizadas en entornos reales de producción.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de Datos"
  },

  projects: {
    title: "Proyectos",
    subtitle: "Soluciones enfocadas en usabilidad, integración sólida y valor real para el negocio.",
    tech: "Tecnologías",
    items: [
      {
        title: "Sistema lector de cédulas",
        description:
          "Plataforma para lectura de cédulas en dispositivos móviles y entornos desktop. Permite capturar información desde cámara o mediante lector conectado por USB en Windows, registrar asistencia a actividades y gestionar formularios web dinámicos para inscripción de participantes. La solución fue desarrollada con Flutter en frontend principal, React para formularios web y .NET por capas en backend.",
        tech: ["Flutter", "React", ".NET", "SQL Server", "APIs REST", "Windows USB"]
      },
      {
        title: "Pasarela de pagos",
        description:
          "Aplicación web orientada al procesamiento de pagos en línea, integrada con la API bancaria de Lafise. El proyecto se enfocó en ofrecer una experiencia de pago clara y confiable desde la web, conectando el frontend en React con servicios backend preparados para la comunicación segura con la entidad financiera.",
        tech: ["React", ".NET", "APIs REST", "Integración bancaria", "Pagos web"]
      },
      {
        title: "Sistema de regalías",
        description:
          "Sistema web para la administración y entrega de regalías, diseñado para mantener control del inventario disponible, registrar movimientos y facilitar la gestión de entrega desde la plataforma. La interfaz fue desarrollada en React y el backend en .NET, asegurando una operación ordenada y trazable.",
        tech: ["React", ".NET", "SQL Server", "Inventario", "Gestión de entregas"]
      }
    ]
  },

  contact: {
    title: "Contacto",
    subtitle: "Disponible para oportunidades freelance, trabajo remoto o posiciones full-time.",
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