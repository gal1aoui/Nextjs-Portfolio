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
    id: "kpit-frontend",
    year: "2024",
    company: "KPIT Technologies",
    type: "full-time",
    techStack: ["React", "Angular", "TypeScript", "GitLab CI/CD"],
  },
  {
    id: "kpit-fullstack",
    year: "2023",
    company: "KPIT Technologies",
    type: "full-time",
    techStack: ["React", "Angular", "TypeScript", ".NET"],
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
    techStack: ["PHP", "Robot Framework", "Selenium"],
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
    "kpit-frontend": {
      title: "Full-stack Developer | Frontend Focus",
      location: "Sfax, Tunisia",
      period: "Feb 2024 - Aug 2025",
      story:
        "This is where I truly found my calling. After proving myself as a full-stack developer, I was trusted to lead frontend architecture decisions. I specialized in React and Angular, optimizing performance across multiple enterprise modules. I mentored junior developers and contributed to internal tooling that improved our entire team's productivity.",
      learned: [
        "Frontend architecture at scale",
        "Performance optimization patterns",
        "Technical mentorship",
        "Building developer tools (VS Code extensions)",
      ],
    },
    "kpit-fullstack": {
      title: "Full-stack Developer",
      location: "Sfax, Tunisia",
      period: "Aug 2023 - Feb 2024",
      story:
        "My first step into enterprise software development. I joined an international team and quickly adapted to professional workflows - Agile ceremonies, code reviews, and CI/CD pipelines became second nature. This experience transformed my understanding of building software that scales.",
      learned: [
        "Enterprise-grade development practices",
        "Cross-functional team collaboration",
        "Agile/Scrum methodology in practice",
        "Code review culture",
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
      title: "Full Stack PHP Developer",
      location: "Ariana, Tunisia",
      period: "Jun 2022 - Jun 2023",
      story:
        "While pursuing my Master's, I balanced academics with real-world development. I discovered the power of automation testing with Robot Framework - writing tests that saved hours of manual QA work. This role solidified my belief that quality code is tested code.",
      learned: [
        "Test automation mindset",
        "Robot Framework & Selenium",
        "Balancing work and education",
        "Professional PHP development",
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
    "kpit-frontend": {
      title: "Développeur Full Stack | Focus Frontend",
      location: "Sfax, Tunisie",
      period: "Fév 2024 - Août 2025",
      story:
        "C'est là que j'ai vraiment trouvé ma voie. Après avoir fait mes preuves comme développeur full stack, on m'a confié des décisions d'architecture frontend. Je me suis spécialisé en React et Angular, en optimisant les performances de plusieurs modules d'entreprise. J'ai aussi accompagné des juniors et contribué à des outils internes utiles à toute l'équipe.",
      learned: [
        "Architecture frontend à grande échelle",
        "Patterns d'optimisation des performances",
        "Mentorat technique",
        "Création d'outils pour développeurs (extensions VS Code)",
      ],
    },
    "kpit-fullstack": {
      title: "Développeur Full Stack",
      location: "Sfax, Tunisie",
      period: "Août 2023 - Fév 2024",
      story:
        "Mon premier vrai pas dans le logiciel d'entreprise. J'ai rejoint une équipe internationale et je me suis rapidement adapté aux workflows professionnels : cérémonies Agile, revues de code et pipelines CI/CD sont devenus naturels. Cette expérience a profondément changé ma façon de comprendre les logiciels qui doivent tenir à l'échelle.",
      learned: [
        "Pratiques de développement de niveau entreprise",
        "Collaboration dans des équipes pluridisciplinaires",
        "Méthode Agile/Scrum appliquée au quotidien",
        "Culture de la revue de code",
      ],
    },
    primatec: {
      title: "Développeur Logiciel",
      location: "Sfax, Tunisie",
      period: "Fév 2023 - Juin 2023",
      story:
        "Un défi original qui a repoussé mes limites. J'ai intégré des builds Unity 3D dans une application desktop, en faisant le lien entre moteur de jeu et logiciel d'entreprise. Ce projet m'a appris que les meilleures solutions naissent souvent du croisement de technologies inatten dues.",
      learned: [
        "Intégration cross-platform (Unity + WinForms)",
        "Communication temps réel avec WebSockets",
        "Capacité à sortir des sentiers battus",
      ],
    },
    gwm: {
      title: "Développeur Full Stack PHP",
      location: "Ariana, Tunisie",
      period: "Juin 2022 - Juin 2023",
      story:
        "Pendant mon master, j'ai mené de front les études et le développement réel. J'y ai découvert la puissance de l'automatisation des tests avec Robot Framework : écrire des scénarios qui économisent des heures de QA manuelle. Ce rôle a renforcé ma conviction qu'un code de qualité est un code testé.",
      learned: [
        "État d'esprit orienté automatisation des tests",
        "Robot Framework et Selenium",
        "Equilibre entre travail et études",
        "Développement PHP en contexte professionnel",
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
