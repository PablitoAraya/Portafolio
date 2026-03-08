import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Card from "../../ui/card/Card";
import { skills } from "../../../data/skills";
import { useLanguage } from "../../../i18n/LanguageProvider";
import "./Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <SectionTitle
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="skills__grid">
        <Card>
          <h3 className="skills__h3">{t.skills.frontend}</h3>
          <p className="skills__p">{skills.frontend.join(" • ")}</p>
        </Card>

        <Card>
          <h3 className="skills__h3">{t.skills.backend}</h3>
          <p className="skills__p">{skills.backend.join(" • ")}</p>
        </Card>

        <Card>
          <h3 className="skills__h3">{t.skills.database}</h3>
          <p className="skills__p">{skills.database.join(" • ")}</p>
        </Card>
      </div>
    </section>
  );
};

export default Skills;