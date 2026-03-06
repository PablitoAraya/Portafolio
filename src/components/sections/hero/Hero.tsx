import Button from "../../ui/button/Button";
import "./Hero.css";
import { useLanguage } from "../../../i18n/LanguageProvider";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="section hero">
      <div className="hero__content">
        <div className="hero__badge">{t.hero.badge}</div>

        <h1 className="hero__title">{t.hero.title}</h1>
        <p className="hero__role">{t.hero.role}</p>

        <p className="hero__desc">{t.hero.desc}</p>

        <div className="hero__actions">
          <Button link="https://github.com/">{t.hero.primaryCta}</Button>
          <a className="hero__ghost" href="#projects">
            {t.hero.secondaryCta}
          </a>
        </div>

        <p className="hero__hint">
          Tip: Use the nav or scroll • <span className="kbd">EN/ES</span> toggle on top
        </p>
      </div>

      <aside className="hero__panel">
        <div className="hero__panelInner">
          <p className="hero__panelTitle">{t.hero.panelTitle}</p>
          <ul className="hero__list">
            {t.hero.focus.map((x: string, idx: number) => (
              <li key={idx}>{x}</li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default Hero;