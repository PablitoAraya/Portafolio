import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import "./About.css";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { motion } from "motion/react";

const orbitTransition = {
  duration: 14,
  repeat: Infinity,
  ease: "linear" as const,
};

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut" as const,
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
            whileHover={{ y: -6, rotateX: 2.5, rotateY: -2.5 }}
          >
            <div className="about__avatar">
              <div className="about__avatarGlow" />
              <div className="about__noise" />
              <div className="about__gridFx" />

              <motion.div
                className="about__ring about__ring--one"
                animate={{ rotate: 360 }}
                transition={{ ...orbitTransition, duration: 18 }}
              />

              <motion.div
                className="about__ring about__ring--two"
                animate={{ rotate: -360 }}
                transition={{ ...orbitTransition, duration: 24 }}
              />

              <motion.div
                className="about__orb about__orb--one"
                animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
                transition={{ ...floatTransition, duration: 4.2 }}
              />

              <motion.div
                className="about__orb about__orb--two"
                animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                transition={{ ...floatTransition, duration: 5.4 }}
              />

              <motion.div
                className="about__orb about__orb--three"
                animate={{ y: [0, -8, 0], x: [0, -4, 0] }}
                transition={{ ...floatTransition, duration: 4.8 }}
              />

              <motion.div
                className="about__scan"
                animate={{ y: ["-120%", "165%"] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="about__center">
                <motion.div
                  className="about__identityCard"
                  animate={{ y: [0, -8, 0], rotate: [0, 0.8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="about__identityGlow" />
                  <div className="about__identityTop">
                    <span className="about__identityEyebrow">FULL STACK</span>
                    <span className="about__identityDot" />
                  </div>

                  <div className="about__identityMark">JP</div>

                  <div className="about__identityMeta">
                    <span>React</span>
                    <span>.NET</span>
                    <span>SQL</span>
                  </div>
                </motion.div>

                <motion.div
                  className="about__floatingBadge about__floatingBadge--one"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  UI Motion
                </motion.div>

                <motion.div
                  className="about__floatingBadge about__floatingBadge--two"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
                >
                  Clean Architecture
                </motion.div>
              </div>
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