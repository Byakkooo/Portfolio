import "./Journey.scss";

function Journey() {
  return (
    <section className="journey" id="parcours">
      <div className="container">
        <p className="journey__label">04 — Parcours</p>

        <h2 className="section-title">Aujourd'hui et demain.</h2>

        <div className="journey__timeline">
          <article>
            <span className="journey__dot"></span>

            <div>
              <span className="journey__date">Formation actuelle</span>

              <h3>Développeur Web — OpenClassrooms</h3>

              <p>
                Développement Front-End, React, API, optimisation, SEO,
                accessibilité et gestion de projet.
              </p>
            </div>
          </article>

          <article>
            <span className="journey__dot"></span>

            <div>
              <span className="journey__date">Prochaine étape</span>

              <h3>Guardia Cybersecurity School</h3>

              <p>
                Poursuite d'études en cybersécurité afin de développer mes
                compétences en sécurité des systèmes d'information.
              </p>
            </div>
          </article>

          <article>
            <span className="journey__dot"></span>

            <div>
              <span className="journey__date">Objectif</span>

              <h3>Chief Information Security Officer</h3>

              <p>
                Évoluer progressivement vers des responsabilités techniques,
                organisationnelles et stratégiques en cybersécurité.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Journey;