import { useEffect, useState } from "react";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <a
          href="#accueil"
          className="header__logo"
          onClick={closeMenu}
          aria-label="Accueil - Portfolio de Raphaël Baude"
        >
          RB<span>.</span>
        </a>

        <button
          className={`header__toggle ${
            menuOpen ? "header__toggle--open" : ""
          }`}
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id="main-navigation"
          className={`header__nav ${
            menuOpen ? "header__nav--open" : ""
          }`}
          aria-label="Navigation principale"
        >
          <a href="#apropos" onClick={closeMenu}>
            À propos
          </a>

          <a href="#competences" onClick={closeMenu}>
            Compétences
          </a>

          <a href="#projets" onClick={closeMenu}>
            Projets
          </a>

          <a href="#parcours" onClick={closeMenu}>
            Parcours
          </a>

          <a
            href="#contact"
            className="header__contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;