// src/components/sections/Projects/Projects.jsx
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Card from "../../ui/card/Card";
import { projects } from "../../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <SectionTitle
        title="Proyectos"
        subtitle="Entrega orientada a impacto: UI limpia, APIs bien integradas y código mantenible."
      />

      <div className="projects__grid">
        {projects.map((project, index) => (
          <Card key={index}>
            <h3 className="projects__title">{project.title}</h3>
            <p className="projects__desc">{project.description}</p>
            <p className="projects__tech">{project.tech.join(" • ")}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;