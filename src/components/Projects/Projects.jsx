import { projects } from "../../data/projects";
import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projets">
      <div className="container">
        <p className="projects__label">03 — Projets</p>

        <h2 className="section-title">
          Quelques projets <span className="highlight">marquants.</span>
        </h2>

        <p className="section-description">
          Deux projets illustrant des compétences complémentaires :
          préparation d'un projet et développement d'une application web.
        </p>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="project" key={project.id}>
              <div className="project__image">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={project.imageWidth}
                  height={project.imageHeight}
                />
              </div>

              <div className="project__content">
                <div className="project__heading">
                  <span className="project__number">{project.number}</span>
                  <span className="project__category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="project__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Voir le repository GitHub de ${project.title}`}
                  >
                    GitHub ↗
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Voir la démonstration de ${project.title}`}
                    >
                      Voir le projet ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;