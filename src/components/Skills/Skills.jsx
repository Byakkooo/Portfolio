import "./Skills.scss";

const skillGroups = [
  {
    title: "Front-End",
    skills: ["HTML5", "CSS3", "Sass", "JavaScript", "React", "Vite"],
  },
  {
    title: "Back-End & Data",
    skills: ["Node.js", "Express", "MongoDB", "API REST"],
  },
  {
    title: "Qualité Web",
    skills: ["Responsive", "Accessibilité", "SEO", "Lighthouse"],
  },
  {
    title: "Outils & Méthodes",
    skills: ["Git", "GitHub", "Figma", "Agile", "Kanban", "Veille"],
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
          projets.
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
      </div>
    </section>
  );
}

export default Skills;