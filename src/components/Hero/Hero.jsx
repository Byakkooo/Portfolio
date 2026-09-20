import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="container hero__container">
        <p className="hero__intro">Bonjour, je suis</p>

        <h1>
          Raphaël <span>Baude.</span>
        </h1>

        <h2>Développeur Web</h2>

        <p className="hero__description">
          Je conçois des expériences web modernes, accessibles et performantes.
          Je poursuis aujourd'hui mon parcours vers la cybersécurité avec
          l'objectif d'allier développement et sécurité des systèmes
          d'information.
        </p>

        <div className="hero__actions">
          <a href="#projets" className="hero__primary">
            Découvrir mes projets
          </a>

          <a href="#contact" className="hero__secondary">
            Me contacter
          </a>
        </div>

        <div className="hero__status">
          <span></span>
          Prochaine étape : cybersécurité
        </div>
      </div>
    </section>
  );
}

export default Hero;