export type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  bullets: string[];
  stack: string[];
};

export type Dictionary = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    experience: string; // si lo agregaste al navbar
  };

  hero: {
    badge: string;
    title: string;
    role: string;
    desc: string;
    primaryCta: string;
    secondaryCta: string;
    panelTitle: string;
    focus: string[];
  };

  about: {
    title: string;
    subtitle: string;
    body: string;
    highlights?: string[]; // opcional
  };

  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };

  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    database: string;
  };

  projects: {
    title: string;
    subtitle: string;
    tech: string;
  };

  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
  };

  footer: {
    built: string;
    rights: string;
  };
};