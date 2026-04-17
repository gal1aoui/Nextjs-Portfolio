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
      title: "Developpeur Full Stack | Focus Frontend",
      location: "Sfax, Tunisie",
      period: "Fev 2024 - Aou 2025",
      story:
        "C'est la que j'ai vraiment trouve ma voie. Apres avoir fait mes preuves comme developpeur full stack, on m'a confie des decisions d'architecture frontend. Je me suis specialise en React et Angular, en optimisant les performances de plusieurs modules d'entreprise. J'ai aussi accompagne des juniors et contribue a des outils internes utiles a toute l'equipe.",
      learned: [
        "Architecture frontend a grande echelle",
        "Patterns d'optimisation des performances",
        "Mentorat technique",
        "Creation d'outils pour developpeurs (extensions VS Code)",
      ],
    },
    "kpit-fullstack": {
      title: "Developpeur Full Stack",
      location: "Sfax, Tunisie",
      period: "Aou 2023 - Fev 2024",
      story:
        "Mon premier vrai pas dans le logiciel d'entreprise. J'ai rejoint une equipe internationale et je me suis rapidement adapte aux workflows professionnels : ceremonies Agile, revues de code et pipelines CI/CD sont devenus naturels. Cette experience a profondement change ma facon de comprendre les logiciels qui doivent tenir a l'echelle.",
      learned: [
        "Pratiques de developpement de niveau entreprise",
        "Collaboration dans des equipes pluridisciplinaires",
        "Methode Agile/Scrum appliquee au quotidien",
        "Culture de la revue de code",
      ],
    },
    primatec: {
      title: "Developpeur Logiciel",
      location: "Sfax, Tunisie",
      period: "Fev 2023 - Juin 2023",
      story:
        "Un defi original qui a repousse mes limites. J'ai integre des builds Unity 3D dans une application desktop, en faisant le lien entre moteur de jeu et logiciel d'entreprise. Ce projet m'a appris que les meilleures solutions naissent souvent du croisement de technologies inattendues.",
      learned: [
        "Integration cross-platform (Unity + WinForms)",
        "Communication temps reel avec WebSockets",
        "Capacite a sortir des sentiers battus",
      ],
    },
    gwm: {
      title: "Developpeur Full Stack PHP",
      location: "Ariana, Tunisie",
      period: "Juin 2022 - Juin 2023",
      story:
        "Pendant mon master, j'ai mene de front les etudes et le developpement reel. J'y ai decouvert la puissance de l'automatisation des tests avec Robot Framework : ecrire des scenarios qui economisent des heures de QA manuelle. Ce role a renforce ma conviction qu'un code de qualite est un code teste.",
      learned: [
        "Etat d'esprit oriente automatisation des tests",
        "Robot Framework et Selenium",
        "Equilibre entre travail et etudes",
        "Developpement PHP en contexte professionnel",
      ],
    },
    meducol: {
      title: "Developpeur de Jeux",
      location: "Remote",
      period: "Fev 2022 - Mai 2022",
      story:
        "Construire un serious game pour des etudiants en medecine etait a la fois stimulant et gratifiant. J'y ai implemente du multijoueur avec Photon PUN 2 et Firebase, en apprenant que la synchronisation temps reel est un vrai savoir-faire. Ce projet m'a montre comment la technologie peut rendre l'apprentissage plus engageant.",
      learned: [
        "Architecture de jeu multijoueur",
        "Synchronisation temps reel avec Firebase",
        "Conception de solutions edtech",
        "Collaboration a distance sous SCRUM",
      ],
    },
    des: {
      title: "Stagiaire en Developpement Web",
      location: "Monastir, Tunisie",
      period: "Fev 2021 - Juil 2021",
      story:
        "Mon vrai moment de bascule. J'ai construit une plateforme freelance from scratch et obtenu un gain de performance de 40 % grace a Symfony UX Turbo et au temps reel avec Mercure. Ce stage m'a fait passer du statut d'etudiant a celui de developpeur qui comprend vraiment les performances.",
      learned: [
        "Optimisation des performances (40 % de gain)",
        "Web temps reel avec le protocole Mercure",
        "Architecture applicative complete",
        "Construction de fonctionnalites complexes from scratch",
      ],
    },
    freelance: {
      title: "Developpeur Freelance",
      location: "Remote",
      period: "Juil 2021 - Aou 2021",
      story:
        "Me lancer en freelance m'a appris la communication client et la responsabilite de bout en bout. J'ai construit un systeme complet de gestion scolaire et appris Docker pour le deploiement, des competences qui m'ont servi dans tous les roles suivants.",
      learned: [
        "Communication client",
        "Prise en charge complete d'un projet",
        "Docker et la conteneurisation",
        "Maitrise de l'ecosysteme Laravel",
      ],
    },
    "unity-self": {
      title: "Developpeur Unity 3D",
      location: "Tunisie",
      period: "Mars 2020 - Mai 2020",
      story:
        "Pendant le confinement, j'ai canalise mon energie dans le developpement de jeux. Construire un jeu de course from scratch m'a appris les mathematiques 3D, la physique et l'importance de l'experience utilisateur dans les applications interactives.",
      learned: [
        "Bases du developpement de jeux 3D",
        "Physique et systemes de terrain",
        "Apprentissage autonome",
      ],
    },
    tada: {
      title: "Stagiaire Processing.js",
      location: "Monastir, Tunisie",
      period: "Juin 2019 - Aou 2019",
      story:
        "C'est la que tout a commence. Creer de l'art visuel avec du code et des algorithmes mathematiques a declenche ma passion pour la programmation. J'y ai compris que le code n'est pas seulement fonctionnel : il peut aussi etre creatif et beau.",
      learned: [
        "Fondamentaux du creative coding",
        "Raisonnement mathematique applique au code",
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
