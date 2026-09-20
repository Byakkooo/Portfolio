import "./About.scss";

function About() {
  return (
    <section className="about" id="apropos">
      <div className="container">
        <p className="about__label">01 — À propos</p>

        <h2 className="section-title">
          Du développement web à la <span className="highlight">sécurité.</span>
        </h2>

        <div className="about__content">
          <div>
            <p>
              Je suis <strong>Raphaël Baude</strong>, développeur web formé chez
              OpenClassrooms. Ma formation m'a permis de travailler sur
              l'intégration d'interfaces, React, les API, l'optimisation des
              performances, le SEO, l'accessibilité et la gestion de projet.
            </p>

            <p>
              J'aime comprendre le fonctionnement global d'une application et
              construire des solutions structurées, maintenables et adaptées
              aux besoins utilisateurs.
            </p>
          </div>

          <div>
            <p>
              Après cette formation, je poursuis mes études à{" "}
              <strong>Guardia Cybersecurity School</strong> afin de me
              spécialiser en cybersécurité.
            </p>

            <p>
              Mon objectif à long terme est d'évoluer vers des responsabilités
              en sécurité des systèmes d'information et de devenir{" "}
              <strong>CISO</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;