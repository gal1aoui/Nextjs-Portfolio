import { type AppLanguage } from "@/i18n/settings";

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
  story: string;
  learned: string[];
  techStack: string[];
}

type LocalizedExperienceContent = Pick<
  ExperienceItem,
  "title" | "location" | "period" | "story" | "learned"
>;

type ExperienceDefinition = Omit<
  ExperienceItem,
  keyof LocalizedExperienceContent
>;

const experienceDefinitions: ExperienceDefinition[] = [
  {
    id: "founder",
    year: "2025",
    company: "Octopora · MenuMate · 9hiwa.tn",
    type: "full-time",
    techStack: [
      "Node.js",
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "WebRTC",
      "Docker",
      "Nginx",
    ],
  },
  {
    id: "kpit",
    year: "2023",
    company: "KPIT Technologies",
    type: "full-time",
    techStack: ["React", "Angular", "TypeScript", "Node.js", "GitLab CI/CD"],
  },
  {
    id: "primatec",
    year: "2023",
    company: "Primatec Engineering",
    type: "contract",
    techStack: ["Unity 3D", "C#", "WinForms", "Node.js", "WebSocket"],
  },
  {
    id: "gwm",
    year: "2022",
    company: "Global Web Marketing",
    type: "part-time",
    techStack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Robot Framework",
      "Selenium",
    ],
  },
  {
    id: "meducol",
    year: "2022",
    company: "Meducol",
    type: "contract",
    techStack: ["Unity 3D", "C#", "PUN 2", "Firebase"],
  },
  {
    id: "des",
    year: "2021",
    company: "Development Engineering Services",
    type: "internship",
    techStack: ["Symfony 5", "Vue.js", "Mercure", "Hotwire.js"],
  },
  {
    id: "freelance",
    year: "2021",
    company: "Self-employed",
    type: "freelance",
    techStack: ["Laravel 7", "Vue.js", "Tailwind CSS", "Docker"],
  },
  {
    id: "unity-self",
    year: "2020",
    company: "Self-employed",
    type: "freelance",
    techStack: ["Unity 3D", "C#"],
  },
  {
    id: "tada",
    year: "2019",
    company: "TADA",
    type: "internship",
    techStack: ["Processing.js", "JavaScript"],
  },
];

const experienceContentByLanguage: Record<
  AppLanguage,
  Record<string, LocalizedExperienceContent>
> = {
  en: {
    founder: {
      title: "Founder & Fullstack Engineer",
      location: "Remote",
      period: "Aug 2025 - Present",
      story:
        "I now build and run my own products end to end: Octopora, MenuMate and 9hiwa.tn, from prototyping and UI/UX design through development, testing and production. I work directly with users and stakeholders to shape each product: a B2B workspace backed by REST APIs and async workers, a restaurant platform with QR menus and online ordering, and a real-time multiplayer platform handling live game state at scale. Alongside them I deliver full-cycle freelance work, from design and development to hosting, SEO and analytics.",
      learned: [
        "Owning a product end to end, from prototype to production",
        "Designing interactive prototypes and iterating on UI/UX with real user feedback",
        "Running real-time systems: live game state, queues and async workers",
        "Deploying and operating with Docker, Nginx and CI/CD",
        "Using AI coding agents daily to move faster without compromising quality",
      ],
    },
    kpit: {
      title: "Software Engineer",
      location: "Sfax, Tunisia",
      period: "Aug 2023 - Aug 2025",
      story:
        "Two years shipping features across the stack in React, Angular, TypeScript and Node.js, improving delivery speed and runtime performance on enterprise modules. I carried out technical analysis for new developments and proposed design decisions with the team, took part in tech RUNs covering bug fixing, maintenance and tech-debt management, and kept quality high through code reviews and testing. I also configured and maintained our GitLab CI/CD pipelines and mentored interns and junior developers.",
      learned: [
        "Technical analysis and design decisions with the team",
        "Cross-stack delivery in React, Angular, TypeScript and Node.js",
        "GitLab CI/CD pipelines: reliable builds, less manual deployment",
        "Enforcing quality through code reviews and testing",
        "Mentoring interns and junior developers",
      ],
    },
    primatec: {
      title: "Software Developer",
      location: "Sfax, Tunisia",
      period: "Feb 2023 - Jun 2023",
      story:
        "A unique challenge that pushed my boundaries. I integrated Unity 3D builds into a desktop application, bridging the gap between game engines and enterprise software. This project taught me that the best solutions often come from combining unexpected technologies.",
      learned: [
        "Cross-platform integration (Unity + WinForms)",
        "Real-time communication with WebSockets",
        "Thinking outside conventional boundaries",
      ],
    },
    gwm: {
      title: "Fullstack Developer",
      location: "Ariana, Tunisia",
      period: "Jun 2021 - Jun 2023",
      story:
        "While pursuing my Master's, I built and modernized ERP and business platforms in PHP, Laravel, MySQL and Tailwind CSS, improving usability for the people who used them daily. I worked directly with stakeholders to define and prioritize features, managing tasks, bugs and feedback through Jira in Agile teams, and I automated testing workflows with unit and functional tests that cut manual QA effort.",
      learned: [
        "Building and modernizing ERP platforms for daily business users",
        "Defining and prioritizing features directly with stakeholders",
        "Agile task, bug and feedback management through Jira",
        "Test automation with Robot Framework and Selenium",
      ],
    },
    meducol: {
      title: "Game Developer",
      location: "Remote",
      period: "Feb 2022 - May 2022",
      story:
        "Building a serious game for medical students was both challenging and rewarding. I implemented multiplayer functionality using Photon PUN 2 and Firebase, learning that real-time synchronization is an art form. This project showed me how technology can make learning engaging.",
      learned: [
        "Multiplayer game architecture",
        "Real-time data sync with Firebase",
        "Educational technology design",
        "Remote collaboration under SCRUM",
      ],
    },
    des: {
      title: "Web Development Intern",
      location: "Monastir, Tunisia",
      period: "Feb 2021 - Jul 2021",
      story:
        "My breakthrough moment. I built a freelance platform from scratch and achieved a 40% performance improvement using Symfony UX Turbo and real-time data processing with Mercure. This internship transformed me from a student into a developer who understands performance at a deep level.",
      learned: [
        "Performance optimization (40% improvement!)",
        "Real-time web with Mercure protocol",
        "Full application architecture",
        "Building complex features from scratch",
      ],
    },
    freelance: {
      title: "Freelance Developer",
      location: "Remote",
      period: "Jul 2021 - Aug 2021",
      story:
        "Taking the leap into freelancing taught me client communication and project ownership. I built a complete school management system and learned Docker for deployment - skills that proved invaluable in my later roles.",
      learned: [
        "Client communication",
        "Project ownership end-to-end",
        "Docker & containerization",
        "Laravel ecosystem mastery",
      ],
    },
    "unity-self": {
      title: "Unity 3D Developer",
      location: "Tunisia",
      period: "Mar 2020 - May 2020",
      story:
        "During lockdown, I channeled my energy into game development. Building a race game from scratch taught me 3D mathematics, physics simulation, and the importance of user experience in interactive applications.",
      learned: [
        "3D game development fundamentals",
        "Physics and terrain systems",
        "Self-directed learning",
      ],
    },
    tada: {
      title: "Processing.js Developer Intern",
      location: "Monastir, Tunisia",
      period: "Jun 2019 - Aug 2019",
      story:
        "Where it all began. Creating visual art through code using mathematical algorithms sparked my passion for programming. I discovered that code isn't just functional - it can be creative and beautiful.",
      learned: [
        "Creative coding fundamentals",
        "Mathematical thinking in programming",
        "The joy of visual programming",
      ],
    },
  },
  fr: {
    founder: {
      title: "Fondateur & Ingénieur Fullstack",
      location: "Remote",
      period: "Août 2025 - Aujourd'hui",
      story:
        "Je construis et je fais vivre désormais mes propres produits de bout en bout : Octopora, MenuMate et 9hiwa.tn, du prototypage et du design UI/UX jusqu'au développement, aux tests et à la production. Je travaille directement avec les utilisateurs et les parties prenantes pour façonner chaque produit : un espace de travail B2B appuyé sur des APIs REST et des workers asynchrones, une plateforme de restauration avec menus QR et commande en ligne, et une plateforme multijoueur temps réel qui gère l'état de jeu en direct à l'échelle. En parallèle, je livre des missions freelance complètes, du design à l'hébergement, au SEO et à l'analytics.",
      learned: [
        "Porter un produit de bout en bout, du prototype à la production",
        "Concevoir des prototypes interactifs et itérer sur l'UI/UX avec de vrais retours",
        "Exploiter des systèmes temps réel : état de jeu en direct, files, workers asynchrones",
        "Déployer et opérer avec Docker, Nginx et la CI/CD",
        "Utiliser des agents IA de code au quotidien sans compromis sur la qualité",
      ],
    },
    kpit: {
      title: "Ingénieur Logiciel",
      location: "Sfax, Tunisie",
      period: "Août 2023 - Août 2025",
      story:
        "Deux ans à livrer des fonctionnalités sur toute la stack (React, Angular, TypeScript et Node.js), en améliorant la vitesse de livraison et les performances de modules d'entreprise. J'ai mené des analyses techniques pour les nouveaux développements et proposé des décisions de conception avec l'équipe, puis participé aux RUNs techniques : correction de bugs, maintenance et gestion de la dette technique, avec des revues de code et des tests pour garantir la qualité. J'ai aussi configuré et maintenu nos pipelines GitLab CI/CD et accompagné stagiaires et développeurs juniors.",
      learned: [
        "Analyses techniques et décisions de conception en équipe",
        "Livraison cross-stack en React, Angular, TypeScript et Node.js",
        "Pipelines GitLab CI/CD : builds fiables, moins de déploiements manuels",
        "Qualité garantie par les revues de code et les tests",
        "Mentorat de stagiaires et de développeurs juniors",
      ],
    },
    primatec: {
      title: "Développeur Logiciel",
      location: "Sfax, Tunisie",
      period: "Fév 2023 - Juin 2023",
      story:
        "Un défi original qui a repoussé mes limites. J'ai intégré des builds Unity 3D dans une application desktop, en faisant le lien entre moteur de jeu et logiciel d'entreprise. Ce projet m'a appris que les meilleures solutions naissent souvent du croisement de technologies inattendues.",
      learned: [
        "Intégration cross-platform (Unity + WinForms)",
        "Communication temps réel avec WebSockets",
        "Capacité à sortir des sentiers battus",
      ],
    },
    gwm: {
      title: "Développeur Fullstack",
      location: "Ariana, Tunisie",
      period: "Juin 2021 - Juin 2023",
      story:
        "Pendant mon master, j'ai construit et modernisé des plateformes ERP et métiers en PHP, Laravel, MySQL et Tailwind CSS, en améliorant l'usage quotidien pour les équipes. J'ai travaillé directement avec les parties prenantes pour définir et prioriser les fonctionnalités, avec la gestion des tâches, bugs et retours via Jira en équipe Agile, et j'ai automatisé les tests avec des tests unitaires et fonctionnels qui ont réduit la QA manuelle.",
      learned: [
        "Construction et modernisation de plateformes ERP",
        "Définition et priorisation des fonctionnalités avec les parties prenantes",
        "Gestion Agile des tâches, bugs et retours via Jira",
        "Automatisation des tests avec Robot Framework et Selenium",
      ],
    },
    meducol: {
      title: "Développeur de Jeux",
      location: "Remote",
      period: "Fév 2022 - Mai 2022",
      story:
        "Construire un serious game pour des étudiants en médecine était à la fois stimulant et gratifiant. J'y ai implémenté du multijoueur avec Photon PUN 2 et Firebase, en apprenant que la synchronisation temps réel est un vrai savoir-faire. Ce projet m'a montré comment la technologie peut rendre l'apprentissage plus engageant.",
      learned: [
        "Architecture de jeu multijoueur",
        "Synchronisation temps réel avec Firebase",
        "Conception de solutions edtech",
        "Collaboration à distance sous SCRUM",
      ],
    },
    des: {
      title: "Stagiaire en Développement Web",
      location: "Monastir, Tunisie",
      period: "Fév 2021 - Juil 2021",
      story:
        "Mon vrai moment de bascule. J'ai construit une plateforme freelance from scratch et obtenu un gain de performance de 40 % grâce à Symfony UX Turbo et au temps réel avec Mercure. Ce stage m'a fait passer du statut d'étudiant à celui de développeur qui comprend vraiment les performances.",
      learned: [
        "Optimisation des performances (40 % de gain)",
        "Web temps réel avec le protocole Mercure",
        "Architecture applicative complète",
        "Construction de fonctionnalités complexes from scratch",
      ],
    },
    freelance: {
      title: "Développeur Freelance",
      location: "Remote",
      period: "Juil 2021 - Août 2021",
      story:
        "Me lancer en freelance m'a appris la communication client et la responsabilité de bout en bout. J'ai construit un système complet de gestion scolaire et appris Docker pour le déploiement, des compétences qui m'ont servi dans tous les rôles suivants.",
      learned: [
        "Communication client",
        "Prise en charge complète d'un projet",
        "Docker et la conteneurisation",
        "Maîtrise de l'écosystème Laravel",
      ],
    },
    "unity-self": {
      title: "Développeur Unity 3D",
      location: "Tunisie",
      period: "Mars 2020 - Mai 2020",
      story:
        "Pendant le confinement, j'ai canalisé mon énergie dans le développement de jeux. Construire un jeu de course from scratch m'a appris les mathématiques 3D, la physique et l'importance de l'expérience utilisateur dans les applications interactives.",
      learned: [
        "Bases du développement de jeux 3D",
        "Physique et systèmes de terrain",
        "Apprentissage autonome",
      ],
    },
    tada: {
      title: "Stagiaire Processing.js",
      location: "Monastir, Tunisie",
      period: "Juin 2019 - Août 2019",
      story:
        "C'est là que tout a commencé. Créer de l'art visuel avec du code et des algorithmes mathématiques a déclenché ma passion pour la programmation. J'y ai compris que le code n'est pas seulement fonctionnel : il peut aussi être créatif et beau.",
      learned: [
        "Fondamentaux du creative coding",
        "Raisonnement mathématique appliqué au code",
        "Le plaisir de la programmation visuelle",
      ],
    },
  },
};

export function getExperiences(language: AppLanguage): ExperienceItem[] {
  const localizedExperiences = experienceContentByLanguage[language];

  return experienceDefinitions.map((experience) => ({
    ...experience,
    ...localizedExperiences[experience.id],
  }));
}
