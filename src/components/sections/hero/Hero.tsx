import Button from "../../ui/button/Button";
import "./Hero.css";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { motion } from "motion/react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className="section hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {t.hero.badge}
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.5 }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t.hero.role}
        </motion.p>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.5 }}
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.5 }}
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button link="https://github.com/">{t.hero.primaryCta}</Button>
          </motion.div>

          <motion.a
            className="hero__ghost"
            href="#projects"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.secondaryCta}
          </motion.a>
        </motion.div>

        <motion.p
          className="hero__hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.55 }}
        >
          Tip: Use the nav or scroll • <span className="kbd">EN/ES</span> toggle on top
        </motion.p>
      </motion.div>

      <motion.aside
        className="hero__panel"
        initial={{ opacity: 0, x: 30, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
        whileHover={{ y: -6 }}
      >
        <div className="hero__panelGlow" />

        <div className="hero__panelInner">
          <p className="hero__panelTitle">{t.hero.panelTitle}</p>

          <ul className="hero__list">
            {t.hero.focus.map((x: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.08, duration: 0.35 }}
              >
                {x}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.aside>
    </section>
  );
};

export default Hero;