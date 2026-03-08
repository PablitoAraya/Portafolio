// src/components/sections/Contact/Contact.jsx
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <SectionTitle
        title="Contacto"
        subtitle="Conversemos. Disponible para proyectos freelance o posiciones full-time."
      />

      <div className="contact__grid">
        <a className="contact__item" href="mailto:pabloarsol@email.com">pabloarsol@email.com</a>
        <a className="contact__item" href="https://www.linkedin.com/in/jose-pablo-araya-solis-18a4951b7/" target="_blank" rel="noreferrer">
          linkedin.com/in/jose-pablo-araya-solis
        </a>
        <a className="contact__item" href="https://github.com/PablitoAraya?tab=repositories" target="_blank" rel="noreferrer">
          github.com/PablitoAraya
        </a>
      </div>
    </section>
  );
};

export default Contact;