import { type AppLanguage } from "@/i18n/settings";

export interface RecruiterQuestion {
  id: string;
  question: string;
  answers: string[];
}

const recruiterQaByLanguage: Record<AppLanguage, RecruiterQuestion[]> = {
  en: [
    {
      id: "about",
      question: "Can you tell me about yourself?",
      answers: [
        "I'm a senior software engineer with strong expertise in frontend architecture, specializing in React and Angular. I design and deliver scalable, high-performance web applications used in production.",
        "I have a solid academic background in computer science and project management, combined with hands-on experience across freelance and product-driven environments.",
        "My focus is on clean architecture, performance optimization, and building maintainable systems that scale with business needs.",
      ],
    },
    {
      id: "current-work",
      question: "What are you currently working on?",
      answers: [
        "I'm actively designing and maintaining production-ready npm packages with a strong emphasis on performance, bundle size, and developer experience.",
        "I'm working on real-world frontend systems, refining reusable components and improving application architecture.",
        "I continuously invest in improving frontend scalability, tooling, and long-term maintainability.",
      ],
    },
    {
      id: "technologies",
      question: "What technologies are you most comfortable with?",
      answers: [
        "My core stack is TypeScript, JavaScript, React, and Angular, with deep experience in modern frontend tooling and architecture.",
        "I have strong experience with state management, performance optimization, and scalable UI design.",
        "On the backend, I've worked with Node.js, PHP, Laravel, and RESTful APIs, which allows me to collaborate effectively across the stack.",
      ],
    },
    {
      id: "role",
      question: "What kind of role are you looking for?",
      answers: [
        "I'm looking for a senior frontend or full-stack role where I can own technical decisions and contribute to architecture and product quality.",
        "I'm interested in teams that value clean code, scalability, and thoughtful engineering trade-offs.",
        "I want to work on products where engineering quality directly impacts users and business outcomes.",
      ],
    },
    {
      id: "challenging-project",
      question: "Can you describe a challenging project you worked on?",
      answers: [
        "I designed and published npm packages used as reusable building blocks, where performance, stability, and DX were critical.",
        "I led refactoring efforts on complex frontend codebases to improve scalability and maintainability without breaking production.",
        "I've delivered systems from concept to production under tight deadlines while keeping technical debt under control.",
      ],
    },
    {
      id: "deadlines",
      question: "How do you handle tight deadlines?",
      answers: [
        "I focus on prioritization, risk assessment, and delivering the highest-impact features first.",
        "I communicate clearly with stakeholders and make trade-offs explicit to protect long-term system quality.",
        "I'm used to working under pressure while maintaining a high engineering standard.",
      ],
    },
    {
      id: "teamwork",
      question: "What is your experience with teamwork and collaboration?",
      answers: [
        "I've worked closely with designers, backend engineers, and product stakeholders in both freelance and structured team environments.",
        "I value clear communication, shared ownership, and pragmatic decision-making.",
        "I'm comfortable mentoring, reviewing code, and contributing to technical discussions.",
      ],
    },
    {
      id: "strengths",
      question: "What are your strengths as a developer?",
      answers: [
        "Strong frontend architecture skills, problem-solving ability, and attention to detail.",
        "I excel at turning complex requirements into clean, scalable, and maintainable solutions.",
        "I take ownership, deliver reliably, and continuously raise the quality bar.",
      ],
    },
    {
      id: "improving",
      question: "What areas are you currently improving?",
      answers: [
        "I'm deepening my expertise in large-scale frontend system design and performance at scale.",
        "I'm refining testing strategies and long-term maintainability for complex UI systems.",
        "I continuously evaluate new tools and patterns to improve developer experience and reliability.",
      ],
    },
    {
      id: "production",
      question: "Have you worked with deadlines or production systems?",
      answers: [
        "Yes, extensively. I've worked with production systems serving real users and real constraints.",
        "I understand the importance of stability, monitoring, backward compatibility, and safe deployments.",
        "I'm comfortable being accountable for production-quality code.",
      ],
    },
    {
      id: "learning",
      question: "How do you approach learning a new technology?",
      answers: [
        "I start with core concepts and architecture, not just syntax.",
        "I validate new technologies by applying them to real use cases and measuring their impact.",
        "I focus on understanding trade-offs and long-term implications.",
      ],
    },
    {
      id: "environment",
      question: "What type of work environment do you prefer?",
      answers: [
        "I perform best in environments that value technical ownership and clear communication.",
        "I appreciate teams that prioritize code quality, scalability, and continuous improvement.",
        "I'm comfortable with autonomy as long as expectations and goals are clear.",
      ],
    },
    {
      id: "remote",
      question: "Are you open to remote or relocation opportunities?",
      answers: [
        "Yes, I'm open to remote work and international opportunities.",
        "I'm flexible depending on the team, product, and long-term growth potential.",
        "I'm open to discussing hybrid or relocation options if there's strong alignment.",
      ],
    },
    {
      id: "salary",
      question: "What are your salary expectations?",
      answers: [
        "I expect compensation aligned with a senior-level role and the impact I bring.",
        "I'm open to discussion based on scope, responsibility, and growth opportunities.",
        "I prefer aligning on expectations once I fully understand the role and challenges.",
      ],
    },
    {
      id: "availability",
      question: "When would you be available to start?",
      answers: [
        "I can start after a short notice period if required.",
        "I'm open to immediate start depending on alignment.",
        "I'm flexible and happy to coordinate based on project needs.",
      ],
    },
  ],
  fr: [
    {
      id: "about",
      question: "Pouvez-vous vous presenter ?",
      answers: [
        "Je suis ingenieur logiciel senior avec une forte expertise en architecture frontend, specialise en React et Angular. Je concois et livre des applications web evolutives et performantes utilisees en production.",
        "J'ai une base academique solide en informatique et en gestion de projet, combinee a une experience terrain en freelance comme sur des produits concrets.",
        "Je mets l'accent sur l'architecture propre, l'optimisation des performances et la construction de systemes maintenables qui accompagnent la croissance produit.",
      ],
    },
    {
      id: "current-work",
      question: "Sur quoi travaillez-vous en ce moment ?",
      answers: [
        "Je concois et maintiens activement des packages npm prets pour la production, avec une forte attention aux performances, a la taille de bundle et a l'experience developpeur.",
        "Je travaille sur de vrais systemes frontend, en ameliorant les composants reutilisables et l'architecture applicative.",
        "J'investis en continu dans la scalabilite frontend, l'outillage et la maintenabilite long terme.",
      ],
    },
    {
      id: "technologies",
      question: "Avec quelles technologies etes-vous le plus a l'aise ?",
      answers: [
        "Mon stack principal repose sur TypeScript, JavaScript, React et Angular, avec une experience approfondie des outils et patterns frontend modernes.",
        "J'ai une bonne experience en gestion d'etat, optimisation des performances et conception d'interfaces evolutives.",
        "Cote backend, j'ai travaille avec Node.js, PHP, Laravel et des APIs REST, ce qui me permet de collaborer efficacement sur toute la stack.",
      ],
    },
    {
      id: "role",
      question: "Quel type de poste recherchez-vous ?",
      answers: [
        "Je recherche un role senior frontend ou full stack ou je peux porter des decisions techniques et contribuer a l'architecture comme a la qualite produit.",
        "Je suis attire par les equipes qui valorisent le code propre, la scalabilite et des compromis d'ingenierie bien penses.",
        "Je veux travailler sur des produits ou la qualite technique a un impact direct sur l'utilisateur et le business.",
      ],
    },
    {
      id: "challenging-project",
      question:
        "Pouvez-vous decrire un projet difficile sur lequel vous avez travaille ?",
      answers: [
        "J'ai concu et publie des packages npm utilises comme briques reutilisables, ou la performance, la stabilite et la DX etaient cruciales.",
        "J'ai mene des refontes sur des codebases frontend complexes pour gagner en scalabilite et en maintenabilite sans casser la production.",
        "J'ai livre des systemes de l'idee a la production sous delais serres tout en gardant la dette technique sous controle.",
      ],
    },
    {
      id: "deadlines",
      question: "Comment gerez-vous les delais serres ?",
      answers: [
        "Je commence par prioriser, evaluer les risques et livrer d'abord ce qui a le plus d'impact.",
        "Je communique clairement avec les parties prenantes et je rends les compromis explicites pour proteger la qualite du systeme sur le long terme.",
        "J'ai l'habitude de travailler sous pression tout en gardant un niveau d'exigence eleve.",
      ],
    },
    {
      id: "teamwork",
      question:
        "Quelle est votre experience du travail en equipe et de la collaboration ?",
      answers: [
        "J'ai travaille de pres avec des designers, des backend engineers et des stakeholders produit, aussi bien en freelance qu'au sein d'equipes structurees.",
        "Je valorise la communication claire, la responsabilite partagee et les decisions pragmatiques.",
        "Je suis a l'aise avec le mentorat, la revue de code et les discussions techniques.",
      ],
    },
    {
      id: "strengths",
      question: "Quelles sont vos forces en tant que developpeur ?",
      answers: [
        "Une forte capacite en architecture frontend, une vraie aptitude a resoudre les problemes et un grand souci du detail.",
        "Je suis a l'aise pour transformer des besoins complexes en solutions propres, evolutives et maintenables.",
        "Je prends mes responsabilites, je livre de facon fiable et j'essaie toujours de tirer la qualite vers le haut.",
      ],
    },
    {
      id: "improving",
      question:
        "Quels sont les domaines que vous cherchez actuellement a renforcer ?",
      answers: [
        "J'approfondis mon expertise en conception de systemes frontend a grande echelle et en performance a l'echelle.",
        "J'ameliore encore mes strategies de test et mes approches de maintenabilite long terme pour les interfaces complexes.",
        "J'evalue en continu de nouveaux outils et patterns pour ameliorer l'experience developpeur et la fiabilite.",
      ],
    },
    {
      id: "production",
      question:
        "Avez-vous deja travaille avec des delais reels ou des systemes en production ?",
      answers: [
        "Oui, largement. J'ai travaille sur des systemes en production avec de vrais utilisateurs et de vraies contraintes.",
        "Je comprends l'importance de la stabilite, du monitoring, de la backward compatibility et des deploiements securises.",
        "Je suis a l'aise avec la responsabilite liee au code de qualite production.",
      ],
    },
    {
      id: "learning",
      question:
        "Comment abordez-vous l'apprentissage d'une nouvelle technologie ?",
      answers: [
        "Je commence par les concepts de base et l'architecture, pas seulement par la syntaxe.",
        "Je valide une technologie en l'appliquant a des cas reels et en mesurant sa valeur.",
        "Je cherche surtout a comprendre les compromis et les implications a long terme.",
      ],
    },
    {
      id: "environment",
      question: "Quel type d'environnement de travail preferez-vous ?",
      answers: [
        "Je suis meilleur dans des environnements qui valorisent l'autonomie technique et la communication claire.",
        "J'apprecie les equipes qui donnent de l'importance a la qualite du code, a la scalabilite et a l'amelioration continue.",
        "Je suis a l'aise avec l'autonomie tant que les attentes et les objectifs sont clairs.",
      ],
    },
    {
      id: "remote",
      question: "Etes-vous ouvert au remote ou a la relocalisation ?",
      answers: [
        "Oui, je suis ouvert au travail a distance et aux opportunites internationales.",
        "Je reste flexible selon l'equipe, le produit et le potentiel de croissance a long terme.",
        "Je suis ouvert a discuter de formats hybrides ou de relocalisation s'il y a un bon alignement.",
      ],
    },
    {
      id: "salary",
      question: "Quelles sont vos attentes salariales ?",
      answers: [
        "Je vise une remuneration coherente avec un role senior et avec l'impact que je peux apporter.",
        "Je suis ouvert a la discussion selon le scope, les responsabilites et les perspectives de croissance.",
        "Je prefere aligner les attentes une fois que j'ai bien compris le role et ses enjeux.",
      ],
    },
    {
      id: "availability",
      question: "Quand seriez-vous disponible pour commencer ?",
      answers: [
        "Je peux commencer apres une courte periode de preavis si necessaire.",
        "Je peux aussi demarrer rapidement selon l'alignement.",
        "Je reste flexible et heureux de m'organiser selon les besoins du projet.",
      ],
    },
  ],
};

export function getRecruiterQa(language: AppLanguage): RecruiterQuestion[] {
  return recruiterQaByLanguage[language];
}

export function getRandomAnswer(
  language: AppLanguage,
  questionId: string,
): string {
  const question = recruiterQaByLanguage[language].find(
    (item) => item.id === questionId,
  );

  if (!question) {
    return language === "fr"
      ? "Aucune reponse disponible."
      : "No answer available.";
  }

  return question.answers[Math.floor(Math.random() * question.answers.length)];
}
