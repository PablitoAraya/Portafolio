import "./Hero.css";
import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";
import { useLanguage } from "../../../i18n/LanguageProvider";

const Hero = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!rootRef.current) return;

    const scope = createScope({ root: rootRef }).add(() => {
      animate(".hero__word", {
        translateY: [80, 0],
        opacity: [0, 1],
        rotateX: [70, 0],
        delay: stagger(80),
        duration: 1100,
        ease: "outExpo",
      });

      animate(".hero__orb", {
        translateY: [-8, 12],
        translateX: [-6, 10],
        duration: 3800,
        direction: "alternate",
        loop: true,
        ease: "inOutSine",
      });

      animate(".hero__panel", {
        translateY: [0, -10, 0],
        duration: 4200,
        ease: "inOutSine",
        loop: true,
      });
    });

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;

      animate(".hero__visual", {
        rotateY: x,
        rotateX: -y,
        duration: 500,
        ease: "outQuad",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      scope.revert();
    };
  }, []);

  const titleWords = "Creative Full Stack Developer".split(" ");

  return (
    <section ref={rootRef} className="section hero">
      <div className="hero__content">
        <div className="hero__badge">Disponible para nuevos proyectos</div>

        <h1 className="hero__title">
          {titleWords.map((word, index) => (
            <span key={index} className="hero__word">
              {word}&nbsp;
            </span>
          ))}
        </h1>

        <p className="hero__role">React, .NET, SQL y experiencias web modernas</p>

        <p className="hero__desc">
          Construyo productos sólidos, visualmente potentes y enfocados en performance,
          escalabilidad y experiencia de usuario.
        </p>

        <div className="hero__actions">
          <a className="hero__ghost" href="#projects">Ver proyectos</a>
          <a className="hero__ghost" href="#contact">Contactarme</a>
        </div>

        {/* <p className="hero__hint">Scroll para explorar</p> */}
      </div>

      <div className="hero__visual">
        <div className="hero__orb hero__orb--one" />
        <div className="hero__orb hero__orb--two" />

        <div className="hero__panel">
          <div className="hero__panelGlow" />
          <div className="hero__panelInner">
            <p className="hero__panelEyebrow">Stack principal</p>
            <h3 className="hero__panelTitle">Frontend + Backend + Datos</h3>

            <ul className="hero__list">
              <li>React y animaciones premium</li>
              <li>.NET 8 con arquitectura limpia</li>
              <li>SQL Server y diseño de datos</li>
              <li>UI moderna orientada a negocio</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;