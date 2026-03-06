import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import "./About.css";
import { useLanguage } from "../../../i18n/LanguageProvider";

import profileImg from "../../../assets/profile.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <div className="about__grid">
        <div className="about__media">
          <div className="about__avatarWrap">
            <img className="about__avatar" src={profileImg} alt="Jose Pablo Araya" />
          </div>
          <div className="about__chips">
            {t.about.highlights?.map((x: string, idx: number) => (
              <span key={idx} className="about__chip">{x}</span>
            ))}
          </div>
        </div>

        <div className="about__content">
          <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />
          <div className="section__content">
            <p className="about__text">{t.about.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;