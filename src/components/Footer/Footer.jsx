import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p>© {new Date().getFullYear()} Raphaël Baude</p>

        <a href="#accueil">Retour en haut ↑</a>
      </div>
    </footer>
  );
}

export default Footer;