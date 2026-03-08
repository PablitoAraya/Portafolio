import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Card from "../../ui/card/Card";
import { projects } from "../../../data/projects";
import { useLanguage } from "../../../i18n/LanguageProvider";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  tech: string[];
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section">
      <SectionTitle
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <div className="projects__grid">
        {projects.map((project: Project, index: number) => (
          <Card key={index}>
            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__desc">{project.description}</p>
            <p className="projects__tech">
              {t.projects.tech}: {project.tech.join(" • ")}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;