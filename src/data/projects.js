import menuMakerImage from "../assets/images/Qwenta.webp";
import argentBankImage from "../assets/images/argentBankLogo.webp";

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Menu Maker by Qwenta",
    category: "Gestion de projet",
    image: menuMakerImage,
    alt: "Aperçu du projet Menu Maker by Qwenta",
    description:
      "Préparation et planification d'une application permettant aux restaurateurs de créer et personnaliser leurs menus.",
    technologies: [
      "Agile",
      "Kanban",
      "Figma",
      "Spécifications techniques",
      "Veille technologique",
    ],
    highlights: [
      "Rédaction de spécifications techniques",
      "Planification Agile",
      "Organisation d'un Kanban",
      "Mise en place d'une veille technologique",
    ],
    github: "TON_LIEN_GITHUB_MENU_MAKER",
    demo: null,
  },
  {
    id: 2,
    number: "02",
    title: "ArgentBank",
    category: "Application React",
    image: argentBankImage,
    alt: "Aperçu de l'application ArgentBank",
    description:
      "Développement d'une application bancaire avec authentification, gestion du profil utilisateur et communication avec une API REST.",
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "API REST",
      "MongoDB",
    ],
    highlights: [
      "Authentification utilisateur",
      "Gestion d'état avec Redux",
      "Protection des routes",
      "Communication entre le Front-End et l'API",
    ],
    github: "TON_LIEN_GITHUB_ARGENTBANK",
    demo: null,
  },
];