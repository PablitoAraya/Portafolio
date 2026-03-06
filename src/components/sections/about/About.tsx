import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import "./About.css";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { motion } from "motion/react";

const orbitTransition = {
  duration: 10,
  repeat: Infinity,
  ease: "linear" as const,
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <div className="about__grid">
        <div className="about__media">
          <motion.div
            className="about__avatarWrap"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            <div className="about__avatar">
              <div className="about__avatarGlow" />

              <motion.div
                className="about__ring about__ring--one"
                animate={{ rotate: 360 }}
                transition={{ ...orbitTransition, duration: 14 }}
              />

              <motion.div
                className="about__ring about__ring--two"
                animate={{ rotate: -360 }}
                transition={{ ...orbitTransition, duration: 18 }}
              />

              <motion.div
                className="about__orb about__orb--one"
                animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="about__orb about__orb--two"
                animate={{ y: [0, 8, 0], x: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="about__silhouette">
                <div className="about__head" />
                <div className="about__body" />
              </div>

              <motion.div
                className="about__scan"
                animate={{ y: ["-120%", "160%"] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="about__gridFx" />
            </div>
          </motion.div>

          <div className="about__chips">
            {t.about.highlights?.map((x: string, idx: number) => (
              <motion.span
                key={idx}
                className="about__chip"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.3 }}
                whileHover={{ y: -2, scale: 1.03 }}
              >
                {x}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />
          <div className="section__content">
            <p className="about__text">{t.about.body}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;