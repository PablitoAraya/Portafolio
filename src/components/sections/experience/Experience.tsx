import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Card from "../../ui/card/Card";
import "./Experience.css";
import { useLanguage } from "../../../i18n/LanguageProvider";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
};

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <SectionTitle title={t.experience.title} subtitle={t.experience.subtitle} />

      <div className="experience__grid">
        {t.experience.items.map((item: ExperienceItem, idx: number) => (
          <Card key={idx}>
            <div className="experience__header">
              <div>
                <h3 className="experience__company">{item.company}</h3>
                <p className="experience__role">{item.role}</p>
              </div>
              <span className="experience__period">{item.period}</span>
            </div>

            <ul className="experience__bullets">
              {item.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="experience__tags">
              {item.stack.map((s: string, i: number) => (
                <span key={i} className="experience__tag">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;