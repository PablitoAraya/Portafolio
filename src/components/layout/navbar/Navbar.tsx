import "./Navbar.css";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { motion, type Variants } from "motion/react";
import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";

const navContainer: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const navItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const Navbar = () => {
  const { locale, setLocale, t } = useLanguage();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const scope = createScope({ root: rootRef }).add(() => {
      animate(".navbar__brandGlow", {
        scale: [0.95, 1.08, 0.95],
        opacity: [0.45, 0.8, 0.45],
        duration: 3200,
        ease: "inOutSine",
        loop: true,
      });

      animate(".navbar__link", {
        translateY: [10, 0],
        opacity: [0, 1],
        delay: stagger(70),
        duration: 700,
        ease: "outExpo",
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <motion.header
      ref={rootRef}
      className="navbar"
      variants={navContainer}
      initial="hidden"
      animate="show"
    >
      <div className="navbar__inner">
        <motion.a
          className="navbar__brand"
          href="#top"
          aria-label="Ir arriba"
          variants={navItem}
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="navbar__brandGlow" />
          <span className="navbar__brandText">JP</span>
        </motion.a>

        <motion.nav
          className="navbar__links"
          aria-label="Principal"
          variants={navItem}
        >
          <motion.a className="navbar__link" href="#about" whileHover={{ y: -2 }}>
            {t.nav.about}
          </motion.a>

          <motion.a className="navbar__link" href="#skills" whileHover={{ y: -2 }}>
            {t.nav.skills}
          </motion.a>

          <motion.a className="navbar__link" href="#projects" whileHover={{ y: -2 }}>
            {t.nav.projects}
          </motion.a>

          <motion.a className="navbar__link" href="#contact" whileHover={{ y: -2 }}>
            {t.nav.contact}
          </motion.a>
        </motion.nav>

        <motion.div className="navbar__actions" variants={navItem}>
          <motion.button
            className="lang"
            type="button"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label="Cambiar idioma"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={`lang__pill ${locale === "en" ? "lang__pill--active" : ""}`}>
              EN
            </span>
            <span className={`lang__pill ${locale === "es" ? "lang__pill--active" : ""}`}>
              ES
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;