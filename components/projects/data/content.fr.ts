import type { LocalizedProjectContent, ProjectId } from "./types";

export const projectContentFr: Record<ProjectId, LocalizedProjectContent> = {
  "ticket-management": {
    title: "Octopora",
    shortDescription:
      "Un espace de travail assisté par IA qui connecte projets, tickets, sprints, échanges, réunions, code et temps dans un seul système opérationnel.",
    fullDescription:
      "Octopora est un espace de travail unifié et assisté par IA, conçu pour les équipes en croissance qui souhaitent remplacer leurs outils de projet et de collaboration fragmentés. Ses onze modules connectés réunissent projets, tickets, sprints, incidents, calendriers, messagerie, support, appels natifs, suivi du temps, gestion d'équipe et dépôts de code dans un même référentiel opérationnel. Helpi AI comprend le contexte de cet espace et prépare des actions structurées, tandis que les agents de code relient directement le travail aux dépôts, branches, journaux et commits.",
    role: "Fondateur et développeur full-stack en solo",
    highlights: [
      "11 modules connectés dans un seul espace",
      "Helpi AI prépare tickets, réunions et incidents",
      "Appels WebRTC natifs et messagerie temps réel",
      "Bilingue FR/EN sécurisé par Supabase RLS",
    ],
    features: [
      "Projets connectés, tableaux Kanban, jalons, responsabilités et santé du projet",
      "Tickets en Markdown avec priorités, dépendances, commentaires et historique complet",
      "Planification des sprints, gestion du backlog, progression et burndown",
      "Couche d'action Helpi AI pour préparer tickets, réunions et incidents",
      "Workflows de dépôt reliant incidents, branches, commits, pull requests et agents de code",
      "Canaux, messages directs, support et appels WebRTC natifs en temps réel",
      "Calendriers personnels et projet unifiés avec synchronisation Google Calendar",
      "Suivi du temps intégré avec minuteurs et analyses personnelles ou par projet",
      "Rôles, permissions granulaires, accès projet, invitations et visibilité de la charge",
      "Tableaux de bord en direct pour les jalons, risques, notifications et activités",
      "Expérience bilingue français-anglais sécurisée par Supabase RLS",
      "Démo publique préremplie accessible depuis octopora.com",
    ],
  },
  "9hiwa": {
    title: "9hiwa",
    shortDescription:
      "Une plateforme tunisienne de jeux de cartes qui réunit Chkobba, Rami et Belote dans une identité premium inspirée de la culture des cafés.",
    fullDescription:
      "9hiwa est une expérience de jeux de cartes en temps réel construite autour de l'identité tunisienne, du jeu social et de l'ambiance des rencontres autour d'un café. La plateforme numérise trois jeux appréciés localement, la Chkobba, le Rami et la Belote tunisienne, tout en préservant les règles régionales, les expressions, les références visuelles et la culture de la table. Son socle multijoueur utilise Supabase Realtime pour synchroniser salons, tours, cartes, scores et présence des joueurs sur tous les appareils.",
    role: "Développeur full-stack et designer produit en solo",
    highlights: [
      "3 jeux de cartes tunisiens sur une plateforme",
      "Multijoueur temps réel via Supabase Realtime",
      "Cartes, figures et design sonore sur mesure",
      "Jeu social pensé mobile d'abord",
    ],
    features: [
      "Trois jeux tunisiens dans une seule plateforme : Chkobba, Rami et Belote",
      "Salons multijoueurs avec synchronisation en temps réel des tours, cartes et scores",
      "Règles tunisiennes et variantes configurables propres à chaque jeu",
      "Identité visuelle premium inspirée des cafés tunisiens et des motifs amazighs",
      "Cartes, figures, bannières de jeu et design sonore créés sur mesure",
      "Présence des joueurs, reconnexion et état multijoueur résilient",
      "Expérience responsive pensée pour le jeu social sur mobile",
      "Couche de données moderne avec Supabase Realtime et TanStack Query",
    ],
  },
  menumate: {
    title: "MenuMate",
    shortDescription:
      "Un SaaS pour restaurants avec menus QR personnalisés, commandes en temps réel, gestion du menu, équipes et multi-établissements.",
    fullDescription:
      "MenuMate permet aux restaurants et cafés de lancer un menu numérique à leur image et de recevoir des commandes sans imposer d'application aux clients. Les établissements peuvent créer catégories et produits, modifier instantanément prix ou disponibilité, générer des QR codes par table, gérer les commandes sur place ou en livraison et piloter plusieurs adresses depuis un même compte. La plateforme combine un menu public mobile et un tableau de bord opérationnel simple pour les restaurateurs non techniques.",
    role: "Fondateur et développeur full-stack en solo",
    highlights: [
      "Commande par QR sans application à installer",
      "Multi-établissements depuis un seul compte",
      "Menus, prix et disponibilités mis à jour instantanément",
      "Notifications de commandes en temps réel",
    ],
    features: [
      "Menu public personnalisé avec URL dédiée et QR codes générés",
      "Commandes à table et demandes de livraison depuis le téléphone du client",
      "Notifications et suivi du statut des commandes en temps réel",
      "Mise à jour instantanée des plats, photos, prix, catégories et disponibilités",
      "Rôles du personnel, permissions et gestion de plusieurs établissements",
      "Personnalisation de la marque, des couleurs, thèmes et présentation responsive",
      "Notes et avis clients pour chaque élément du menu",
      "Export PDF du menu et génération de QR codes spécifiques aux tables",
      "Expérience mobile sans téléchargement d'application côté client",
    ],
  },
  "solarix-pro": {
    title: "SolarixPro",
    shortDescription:
      "Une plateforme complète d'opérations solaires réunissant CRM, interventions terrain, workflows projet, documents et suivi des performances.",
    fullDescription:
      "SolarixPro est une plateforme client conçue pour gérer tout le cycle opérationnel d'une entreprise d'énergie solaire. Elle connecte prospection commerciale, dossiers clients, projets d'installation, suivi réglementaire, objectifs et génération de documents à une application mobile destinée aux équipes terrain. J'ai développé le backend Express et Prisma, l'interface web React et l'application React Native Expo, puis conteneurisé et déployé le système sur un VPS derrière Nginx.",
    role: "Développeur en solo : backend, web, mobile et déploiement",
    highlights: [
      "Une API typée pour le web et le mobile",
      "Cycle complet : CRM → installation → conformité",
      "Application Expo pour les techniciens terrain",
      "Déploiement Docker sur VPS derrière Nginx",
    ],
    features: [
      "CRM pour les prospects, clients, opportunités et suivis commerciaux",
      "Gestion de bout en bout des projets et installations solaires",
      "Génération de documents commerciaux et centralisation des dossiers clients",
      "Suivi réglementaire et administratif des projets solaires",
      "Objectifs, performances d'équipe et tableaux de bord opérationnels",
      "Application React Native Expo pour les techniciens et opérations terrain",
      "API REST typée construite avec Express, Prisma et PostgreSQL",
      "Déploiement Docker en production sur VPS avec reverse proxy Nginx",
    ],
  },
  "ngs-partners": {
    title: "NGS Partners",
    shortDescription:
      "Un site corporate orienté conversion pour un cabinet suisse spécialisé en vente automobile, gestion de parc et performance commerciale.",
    fullDescription:
      "NGS Partners est un site corporate responsive réalisé pour un cabinet de conseil basé à Nyon, en Suisse. Il présente quatre expertises (concessions automobiles, gestion de parc externalisée, développement commercial, formation et coaching) à travers des parcours clairs, un positionnement local et des appels à la consultation. L'architecture éditoriale soutient également l'expertise grâce à des notes de terrain et des pages dédiées à la Suisse romande et à la France.",
    role: "Développeur web freelance",
    highlights: [
      "4 pôles d'expertise avec parcours dédiés",
      "SEO local en Suisse romande et en France",
      "Parcours de génération de prospects orienté consultation",
    ],
    features: [
      "Architecture de services pour les concessions et équipes commerciales",
      "Parcours dédié à la gestion de flotte : contrats, TCO et reporting",
      "Pages de développement commercial, formation vente et coaching",
      "Profil du fondateur, positionnement du cabinet et contenus de confiance",
      "Parcours de contact orienté génération de prospects et prise de rendez-vous",
      "Blog et notes de terrain pour renforcer l'expertise et la visibilité organique",
      "Navigation et mises en page responsives sur mobile et desktop",
      "SEO local ciblant Nyon, Genève, Lausanne, la Suisse romande et la France",
    ],
  },
  assistromande: {
    title: "AssistRomande",
    shortDescription:
      "Un site de services qui aide PME, artisans et indépendants suisses à externaliser leur back-office administratif.",
    fullDescription:
      "AssistRomande est un site de génération de prospects développé pour un client suisse proposant une assistance administrative externalisée dans toute la Suisse romande. Il transforme une offre étendue (gestion des e-mails, factures, devis, agenda, relances, documents et accueil téléphonique) en un parcours client clair. Le site met en avant le démarrage rapide, les formules transparentes, la confidentialité, le support trilingue et des pages locales dédiées aux principales régions romandes.",
    role: "Développeur web freelance",
    highlights: [
      "Pages locales pour 5 régions romandes",
      "Formulaire guidé de diagnostic gratuit",
      "Support en français, anglais et arabe",
    ],
    features: [
      "Présentation claire des prestations administratives et opérationnelles",
      "Formulaire guidé pour un diagnostic gratuit et une estimation personnalisée",
      "Pages dédiées aux services, défis clients, formules et tarifs",
      "Cas clients, témoignages, FAQ et contenus de réassurance",
      "Pages locales pour Genève, Lausanne, Nyon, Fribourg et le Valais",
      "Engagements de confidentialité, NDA, réactivité et mise en route",
      "Support en français, anglais et arabe valorisé dans le parcours",
      "Interface responsive et orientée SEO pour PME et indépendants suisses",
    ],
  },
  "boudokhane-doors": {
    title: "Boudokhane Doors",
    shortDescription:
      "Plateforme e-commerce complète pour commander des portes sur mesure avec suivi en temps réel et administration avancée.",
    fullDescription:
      "Une plateforme e-commerce spécialisée pour une entreprise de fabrication de portes, permettant aux clients de parcourir les produits, passer des commandes sur mesure selon les dimensions et suivre leur progression en temps réel. Le système inclut un tableau de bord d'administration solide pour les produits, commandes, analyses et inventaire.",
    role: "Développeur full-stack freelance",
    highlights: [
      "Tarification dynamique selon les dimensions",
      "Suivi temps réel par jeton unique",
      "Tableau d'administration : produits, commandes, analyses",
      "Supabase Auth + Row Level Security",
    ],
    features: [
      "Commande de produits sur mesure avec tarification dynamique selon les dimensions",
      "Suivi des commandes en temps réel via des jetons uniques",
      "Tableau de bord d'administration pour produits, commandes et analyses",
      "Système complet CRUD pour produits et catégories",
      "Gestion du cycle de vie des commandes avec statuts multi-étapes",
      "Authentification sécurisée et accès par rôles avec Supabase Auth",
      "Row Level Security (RLS) pour une protection fine des données",
      "Interface responsive optimisée mobile, tablette et desktop",
      "Gestion des images pour les galeries produits",
      "Mises à jour en temps réel avec les subscriptions PostgreSQL",
    ],
  },
  "angular-file-manager": {
    title: "Angular File Manager",
    shortDescription:
      "Système moderne de gestion de fichiers full stack avec upload glisser-déposer et état temps réel.",
    fullDescription:
      "Une application full stack de gestion de fichiers construite avec Angular 19, conçue pour gérer des opérations complexes sur les fichiers et dossiers au sein d'une structure hiérarchique. Réalisé dans le cadre d'un test technique, le projet met en avant une architecture frontend avancée avec NgRx, RxJS et une approche modulaire par composants.",
    role: "Développeur unique (test technique)",
    highlights: [
      "Couche NgRx complète : actions, reducers, effects",
      "Upload multi-fichiers en glisser-déposer",
      "Déplacement et renommage avec détection de conflits",
    ],
    features: [
      "Navigation hiérarchique des fichiers et dossiers avec breadcrumb",
      "Upload glisser-déposer et multi-fichiers",
      "Opérations CRUD complètes pour fichiers et dossiers",
      "Téléchargement des fichiers via l'intégration native du navigateur",
      "Gestion d'état avancée avec NgRx (actions, reducers, effects)",
      "Mises à jour UI en temps réel avec RxJS",
      "Déplacement et renommage avec détection des conflits",
      "Notifications toast et gestion robuste des erreurs",
      "Interface responsive avec architecture de composants réutilisables",
      "Integration d'une bibliotheque UI personnalisee (Spartan-NG)",
    ],
  },
  "saas-directory-agent": {
    title: "SaaS Directory Agent",
    shortDescription:
      "Système d'automatisation piloté par IA pour soumettre des produits SaaS à plusieurs annuaires simultanément.",
    fullDescription:
      "Un système d'automatisation conçu pour accélérer la soumission de produits SaaS à plusieurs annuaires business en parallèle. La plateforme s'appuie sur une automatisation cloud et de l'IA pour traiter des formulaires complexes qui demanderaient sinon beaucoup de travail manuel.",
    role: "Développeur full-stack en solo",
    highlights: [
      "Détection de formulaires par IA sur des annuaires variés",
      "Soumissions en lot en parallèle",
      "Reprise automatique sur erreur",
    ],
    features: [
      "Détection et remplissage de formulaires via IA sur des interfaces variées",
      "Automatisation navigateur dans le cloud sans infrastructure locale",
      "Soumission en lot sur plusieurs annuaires en parallèle",
      "Gestion des credentials pour les annuaires protégés",
      "Navigation multi-étapes pour les workflows de soumission complexes",
      "Récupération automatique sur erreur avec mécanismes de retry",
      "Tableau de bord visuel pour suivre les résultats des soumissions",
    ],
  },
  "dnd-core": {
    title: "@agallaoui/dnd-core",
    shortDescription:
      "Bibliothèque drag and drop haute performance et agnostique au framework pour React et Angular.",
    fullDescription:
      "Une bibliothèque légère de drag and drop qui élimine les goulets d'étranglement fréquents dans les outils similaires. Elle évite les re-renders pendant le drag grâce aux refs, à la manipulation directe du DOM et à des animations accélérées GPU.",
    role: "Auteur et mainteneur",
    highlights: [
      "Zéro re-render pendant le drag",
      "Animations translate3d accélérées GPU",
      "Un cœur TypeScript, adaptateurs React et Angular",
    ],
    features: [
      "Zéro re-render pendant le drag grâce aux refs et au DOM direct",
      "Animations accélérées GPU via les transforms translate3d()",
      "Bounding boxes calculées une seule fois au démarrage du drag",
      "Pointer capture API pour un suivi fiable des événements",
      "Moteur core TypeScript agnostique au framework",
      "Styling par data-attributes compatible TailwindCSS",
      "Support des tableaux Kanban multi-colonnes",
    ],
  },
  "game-2048": {
    title: "@agallaoui/game-2048",
    shortDescription:
      "Package 2048 léger et responsive pour React avec persistance locale du score.",
    fullDescription:
      "Une implémentation minimaliste et performante du jeu 2048 publiée comme package npm. Conçu pour React avec un accent sur la simplicité, la responsivité et zéro dépendance externe. Les noms des joueurs et les scores sont conservés dans localStorage.",
    role: "Auteur et mainteneur",
    highlights: [
      "Package npm publié",
      "Zéro dépendance externe",
      "Jouable dans ce portfolio même",
    ],
    features: [
      "Logique de jeu 2048 classique",
      "Saisie du nom du joueur avant de commencer",
      "Score et nom du joueur persistants dans localStorage",
      "Modal de victoire à 2048 avec option pour continuer",
      "Layout totalement responsive sur desktop et mobile",
      "Bundle léger sans dépendance externe",
      "Intégration React simple en plug-and-play",
    ],
  },
  "nextjs-auth": {
    title: "Next.js Auth System",
    shortDescription:
      "Framework moderne d'authentification avec vérification OTP par e-mail et beaux modèles d'e-mails.",
    fullDescription:
      "Un framework d'authentification moderne combinant Next.js 16, Supabase, Shadcn UI et TypeScript, avec un fort accent sur l'architecture propre et l'accessibilité. Il inclut des e-mails soignés construits avec React-Email.",
    role: "Auteur",
    highlights: [
      "Vérification OTP à 6 chiffres via Resend",
      "Modèles d'e-mails React-Email",
      "Routes protégées par middleware, validées avec Zod",
    ],
    features: [
      "Workflows d'authentification complets (connexion, inscription, récupération)",
      "Vérification par e-mail avec codes OTP à 6 chiffres via Resend",
      "E-mails soignés construits avec React-Email",
      "Protection des routes via middleware",
      "Validation type-safe avec Zod",
      "Routage centralisé via app/routes.ts",
      "Composants responsives conformes WCAG",
    ],
  },
  "nestjs-auth": {
    title: "Nest.js Auth System",
    shortDescription:
      "Système d'authentification backend évolutif construit avec NestJS et TypeScript.",
    fullDescription:
      "Un système backend d'authentification basé sur NestJS, pensé pour construire des applications serveur efficaces et évolutives. Il inclut une authentification JWT, une suite de tests complète et une configuration de déploiement prête pour la production.",
    role: "Auteur",
    highlights: [
      "Auth JWT avec tests unitaires et e2e",
      "Pipeline CircleCI avec déploiement AWS",
    ],
    features: [
      "Système d'authentification basé sur JWT",
      "Architecture de framework progressive",
      "Tests complets (unitaires, e2e, couverture)",
      "Outils de visualisation applicative en temps réel",
      "Support du déploiement AWS",
      "Intégration continue avec CircleCI",
      "NestJS Devtools pour la supervision",
    ],
  },
  "laravel-reminder": {
    title: "Laravel Reminder App",
    shortDescription:
      "Application de rappels full stack avec notifications navigateur, construite avec Laravel, React et Docker.",
    fullDescription:
      "Une application web full stack pour gérer des rappels avec notifications navigateur. Construite avec Laravel 12, React, TypeScript, Inertia.js, Docker et MySQL, elle illustre des pratiques modernes de développement dans un environnement conteneurisé.",
    role: "Développeur en solo",
    highlights: [
      "Stack Docker à 3 services : Laravel, MySQL, Nginx",
      "Notifications navigateur pour les rappels",
      "Monolithe Inertia.js avec front React typé",
    ],
    features: [
      "Authentification utilisateur (inscription, connexion, déconnexion)",
      "CRUD complet pour les rappels",
      "Planification avec dates et heures personnalisées",
      "Système de notifications dans le navigateur",
      "Sécurité de type complète avec TypeScript",
      "Conteneurisation Docker (Laravel, MySQL, Nginx)",
      "Sécurité : CSRF, bcrypt, prévention de l'injection SQL",
    ],
  },
  "rabbit-run-game": {
    title: "Rabbit Run Game",
    shortDescription:
      "Jeu de réflexion dans lequel le joueur aide un lapin à trouver le chemin le plus court vers une carotte.",
    fullDescription:
      "Un jeu de puzzle amusant dans lequel le joueur aide un lapin à trouver le chemin le plus court vers une carotte parmi trois options générées aléatoirement. Le joueur observe les chemins, choisit celui qui lui semble le plus court, puis voit le lapin le parcourir pour révéler le nombre de sauts.",
    role: "Développeur en solo",
    highlights: [
      "Zéro framework, juste du JS, du HTML et du CSS",
      "3 chemins générés aléatoirement par manche",
      "Exécution immédiate dans le navigateur",
    ],
    features: [
      "Trois chemins générés aléatoirement avec retour visuel",
      "Animations du lapin en temps réel sur les parcours",
      "Effets de célébration lorsque le meilleur chemin est choisi",
      "Support cross-platform (desktop, tablette, mobile)",
      "Interface sombre avec effets visuels lumineux",
      "Aucune installation nécessaire, exécution directe dans le navigateur",
    ],
  },
};
