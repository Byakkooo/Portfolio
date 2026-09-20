import "./Contact.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__container">
        <p className="contact__label">05 — Contact</p>

        <h2>
          Envie de <span>travailler ensemble ?</span>
        </h2>

        <p className="contact__description">
          Je suis disponible pour échanger autour du développement web,
          de la cybersécurité, d'une opportunité professionnelle ou simplement
          d'un projet.
        </p>

        <div className="contact__links">
          <a
            href="mailto:braphael381@gmail.com"
            className="contact__primary"
          >
            Me contacter par email
          </a>

          <a
            href="https://github.com/Byakkooo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;