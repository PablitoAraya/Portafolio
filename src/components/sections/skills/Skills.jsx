// src/components/sections/Skills/Skills.jsx
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Card from "../../ui/Card/Card";
import { skills } from "../../../data/skills";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <SectionTitle
        title="Habilidades"
        subtitle="Stack principal y herramientas con las que trabajo en el día a día."
      />

      <div className="skills__grid">
        <Card>
          <h3 className="skills__h3">Frontend</h3>
          <p className="skills__p">{skills.frontend.join(" • ")}</p>
        </Card>

        <Card>
          <h3 className="skills__h3">Backend</h3>
          <p className="skills__p">{skills.backend.join(" • ")}</p>
        </Card>

        <Card>
          <h3 className="skills__h3">Base de Datos</h3>
          <p className="skills__p">{skills.database.join(" • ")}</p>
        </Card>
      </div>
    </section>
  );
};

export default Skills;