import "./Navbar.css";
import { useLanguage } from "../../../i18n/LanguageProvider";

const Navbar = () => {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" aria-label="Go to top">
          JP
        </a>

        <nav className="navbar__links" aria-label="Primary">
          <a className="navbar__link" href="#about">{t.nav.about}</a>
          <a className="navbar__link" href="#skills">{t.nav.skills}</a>
          <a className="navbar__link" href="#projects">{t.nav.projects}</a>
          <a className="navbar__link" href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="navbar__actions">
          <button
            className="lang"
            type="button"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            aria-label="Toggle language"
          >
            <span className="lang__pill">EN</span>
            <span className={`lang__pill ${locale === "es" ? "lang__pill--active" : ""}`}>ES</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;