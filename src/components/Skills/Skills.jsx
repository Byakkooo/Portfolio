import "./Skills.scss";

const skillGroups = [
  {
    title: "Front-End",
    skills: ["HTML5", "CSS3", "Sass", "JavaScript", "React", "Vite"],
  },
  {
    title: "Back-End & Data",
    skills: ["Node.js", "Express", "MongoDB", "API REST", "Python", "JSON"],
  },
  {
    title: "Cybersécurité & Réseau",
    skills: ["Active Directory", "DNS / DHCP", "Pare-feu", "Wazuh (SIEM)", "Proxy SSL", "Pentest réseau"],
  },
  {
    title: "Outils & Méthodes",
    skills: ["Git", "GitHub", "Terminal", "DevSecOps", "Figma", "Agile", "Kanban"],
  },
];

const guardiaModules = [
  {
    number: "Module 01",
    title: "Administration & sécurisation d'infrastructure",
    tags: ["Active Directory", "DNS", "DHCP", "Pare-feu", "SIEM", "IA & Machine Learning"],
    knowledge: [
      "Compréhension des systèmes",
      "Principaux services réseaux usuels (AD / DNS / DHCP) et leur configuration",
      "IA appliquée à la supervision réseau (détection d'anomalies ML)",
      "Outils SIEM avec modules IA intégrés",
    ],
    skills: [
      "Installer et configurer une infrastructure selon les besoins clients",
      "Mettre en place des règles de sécurité adaptées aux besoins métiers",
      "Sécuriser une infrastructure grâce à un firewall",
      "Générer des scripts de configuration avec un assistant IA et en valider la sécurité",
      "Interroger un LLM pour analyser une règle firewall ou un comportement réseau suspect",
    ],
  },
  {
    number: "Module 02",
    title: "Sécurité réseau & supervision SIEM",
    tags: ["Wazuh", "Analyse de vulnérabilités", "Proxy SSL", "Règles de détection", "IA"],
    knowledge: [
      "Reconnaissance des vulnérabilités pouvant exister sur un réseau",
      "Bonnes pratiques pour concevoir un réseau sécurisé",
      "Fonctionnement d'un SIEM avec détection ML (Wazuh + règles ML)",
      "Faux positifs / faux négatifs dans la détection IA",
    ],
    skills: [
      "Identifier et exploiter les vulnérabilités réseau avec des outils spécialisés",
      "Sécuriser un réseau simple via des configurations adaptées",
      "Installer et configurer Wazuh pour surveiller et analyser les événements de sécurité",
      "Mettre en place un proxy SSL pour sécuriser les communications chiffrées",
      "Interpréter les alertes Wazuh et générer des règles de détection assistées par IA",
    ],
  },
  {
    number: "Module 03",
    title: "Programmation Python, API REST & DevOps",
    current: true,
    tags: ["Python", "API REST", "HTTP", "JSON", "Git / GitHub", "DevOps", "DevSecOps"],
    knowledge: [
      "Principes fondamentaux de la programmation et structures de données Python",
      "Fonctionnement d'une API REST et principales méthodes HTTP",
      "Format JSON",
      "Rôle de Git et GitHub",
      "Notions de Dev, Ops, DevOps et DevSecOps et cycle de vie d'une application",
    ],
    skills: [
      "Écrire un programme Python structuré en fonctions (listes, dictionnaires)",
      "Consommer une API REST et traiter / produire des données JSON (CRUD)",
      "Gérer un dépôt GitHub avec des commits réguliers, du plan à la livraison",
      "Tester le programme, vérifier les réponses de l'API et identifier les cas limites",
      "Documenter le projet, expliquer les choix de conception et le présenter",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="competences">
      <div className="container">
        <p className="skills__label">02 — Compétences</p>

        <h2 className="section-title">Ma boîte à outils.</h2>

        <p className="section-description">
          Des technologies et méthodes utilisées au cours de mes différents
          projets, en développement web comme en cybersécurité.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skills__card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills__list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills__security">
          <div className="skills__security-header">
            <h3 className="skills__subtitle">
              Cybersécurité — Guardia Cybersecurity School
            </h3>

            <p className="skills__badge">
              <span aria-hidden="true"></span>
              Étudiant actuellement
            </p>
          </div>

          <div className="skills__modules">
            {guardiaModules.map((module) => (
              <article
                className={`skills__module ${
                  module.current ? "skills__module--current" : ""
                }`}
                key={module.number}
              >
                <p className="skills__module-number">
                  {module.number}
                  {module.current && (
                    <span className="skills__module-status">En cours</span>
                  )}
                </p>

                <h4>{module.title}</h4>

                <div className="skills__list skills__list--accent">
                  {module.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="skills__columns">
                  <div>
                    <h5>Savoirs</h5>
                    <ul>
                      {module.knowledge.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5>Savoir-faire</h5>
                    <ul>
                      {module.skills.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
