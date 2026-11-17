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
              <span className="journey__date">Formation précédente</span>

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
              <span className="journey__date">Aujourd'hui</span>

              <h3>Étudiant — Guardia Cybersecurity School</h3>

              <p>
                Infrastructures (AD, DNS, DHCP), sécurisation réseau et
                pare-feu, analyse de vulnérabilités, supervision avec Wazuh
                (SIEM), IA appliquée à la détection d'anomalies. Actuellement :
                programmation Python, API REST et démarche DevOps / DevSecOps.
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