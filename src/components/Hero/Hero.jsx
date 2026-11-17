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
          Aujourd'hui étudiant à Guardia Cybersecurity School, je me spécialise
          en cybersécurité pour allier développement et sécurité des systèmes
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
          Actuellement étudiant à Guardia Cybersecurity School
        </div>
      </div>
    </section>
  );
}

export default Hero;