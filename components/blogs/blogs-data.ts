import { type AppLanguage } from "@/i18n/settings";

import { Blog } from "./types";

type LocalizedBlogContent = Omit<
  Blog,
  "id" | "slug" | "author" | "publishedAt"
>;
type BlogDefinition = Pick<Blog, "id" | "slug" | "author" | "publishedAt">;

const blogDefinitions: BlogDefinition[] = [
  {
    id: "1",
    slug: "no-matter-the-stack-im-ready-for-it",
    author: "Achref Gallaoui",
    publishedAt: "2024-12-15",
  },
];

const blogContentByLanguage: Record<
  AppLanguage,
  Record<string, LocalizedBlogContent>
> = {
  en: {
    "1": {
      title: "Achref Background",
      part: "Part One",
      subtitle:
        "Ping-Pong, Processing.js, Mercure, and the Call That Changed Everything",
      content: `I was 19 years old in 2018 when I earned my Computer Science Baccalaureate. With a suitcase, a head full of ambition, and very little idea of what was waiting for me, I moved to Sfax to begin my university journey at the Higher Institute of Computer Science and Multimedia of Sfax.

The first year felt like opening the door to an entirely new world. I was introduced to C programming, HTML, CSS, jQuery, and JavaScript. Then came a turning point: we had to choose between Audio-Visual studies and Game Development. I did not hesitate. I chose Game Development because I had one simple dream: to understand how games really work behind the scenes.

That year was not only about code. Somehow, I became the ping-pong guy at the university. As a child, I had spent countless hours playing and competing in my neighborhood club, and those skills followed me to campus. I made friends easily, earned the respect of classmates, and even caught the attention of teachers who noticed my learning ability and sportsmanship, sometimes more than my grades. My first year ended with confidence, friendships, and the feeling that I truly belonged there.

The second year hit harder than expected. The first semester ended in failure: 8/20. It was a wake-up call. Instead of giving up, I reset, refocused, and fought back. By the second semester, I climbed to nearly 14/20 and passed the year.

Academically, things became more serious. Advanced mathematics, system design, architecture concepts, sorting algorithms, networking basics, SQL, electronics, and computer components filled my days. I discovered my first framework, Laravel, and started designing interfaces with Bootstrap in 2020. Everything felt heavy, but exciting.

That summer, I joined TADA as a Processing.js Developer Intern. My role was to apply mathematical logic to create animated graphics using vector shapes. Processing.js became my playground for understanding object-oriented programming and abstraction in a creative way. I learned fast, experimented without fear, and the team appreciated my work, especially considering my age.

**Quick note about Processing.js and why it mattered:** Processing.js is a JavaScript port of the Processing environment. Processing was created so designers and artists could sketch with code. Processing.js brings that approach to the browser through HTML5 canvas and makes animation and vector graphics feel tangible. For someone learning abstraction, seeing code create visible motion is powerful because abstract ideas suddenly become concrete.

My internship went well. The team liked the visual experiments I produced, and I learned OOP and abstraction while building playful, math-driven visuals. Their reaction gave me a real boost in confidence.

The third and final year of my bachelor's degree was intense. The first semester went deep into advanced OOP, stronger database work, frameworks, game projects that counted toward grades, Android basics, AI concepts, Dijkstra pathfinding, MVC architecture, and REST APIs. It felt like a compressed tour through modern computer science.

**A short explanation:** Dijkstra's algorithm is a classic shortest-path algorithm used to find the minimum route between nodes in a graph. In game development, it is often used for pathfinding when an NPC needs to reach a destination efficiently.

The second semester required a long internship of six to seven months, which was the bridge to graduation. I received several offers from professors, but I wanted industrial experience closer to home. I joined Development Engineering Services as a Web Developer Intern. My stack was Symfony on the backend, Vue.js on the frontend, and MySQL for the database. A friend of mine handled the mobile side while I built the web interface, and we shared the same data model.

Our product was a job-posting platform where companies published jobs, candidates applied, and both sides could rate each other. I worked on user management, roles and permissions, authentication, and the painful but necessary real-time notifications.

Real-time was the tricky part. After a lot of research and experimentation, I implemented live updates with Mercure.

**A concise Mercure explainer:** Mercure is a publish/subscribe system often used with Symfony to push real-time updates to browsers. It works over Server-Sent Events (SSE), which are simpler than WebSockets for many one-way real-time use cases such as notifications or live counters.

Everything during that internship was largely self-taught. I learned Symfony and Vue.js on the fly by reading docs, asking questions on StackOverflow, cloning GitHub projects, and spending late nights on YouTube tutorials. After six months, the product worked, I delivered my internship work, and I graduated.

After the bachelor's degree, I freelanced across several industries: school platforms, hotel websites, and more. If a new stack landed in front of me, I opened it. My toolbox kept growing: Docker, Laravel, early Tailwind, Vue.js, Git, Trello, Jira, Teams, Slack, Monday, and yes, even WhatsApp for fast client conversations. I also worked on legacy React projects.

**A note about legacy React lifecycle methods:** Before Hooks, class components relied on lifecycle methods such as componentWillMount, componentWillReceiveProps, and componentWillUpdate. Over time, React deprecated some of them because they could produce bugs or inconsistent behavior. Maintaining older React code often means understanding those legacy lifecycles and refactoring them carefully.

At some point, I asked myself a bigger question: what if I studied not only how software is built, but also how projects are planned, executed, and brought to market? So in 2021 I chose to pursue a Master's degree in Innovation and Project Management.

We studied frameworks such as Scrum, Kanban, and Crystal, along with more traditional models such as Waterfall and the V-model.

**Short definitions to clarify:** Waterfall is a sequential process that moves from requirements to design, implementation, testing, and deployment. The V-model emphasizes verification and validation at each stage. Scrum is an Agile framework built around sprints, defined roles, and ceremonies. Kanban focuses on flow and visualization. Crystal is lighter and more human-centered. Choosing the right framework depends on context and risk.

From that program, I learned risk management, effort estimation, backlog preparation, ticketing, and how to run effective meetings. I also studied team roles in depth.

**A quick run-through of Scrum roles and events:**
- Product Owner: owns the product vision and backlog prioritization.
- Scrum Master: facilitates the process, removes blockers, and helps the team work well.
- Scrum Team: the cross-functional group that builds the product.

Ceremonies include Sprint Planning, Daily Scrum, Sprint Review, and Retrospective. The Product Backlog is the ordered list of work, and the Sprint Backlog is what the team commits to for the sprint.

Before starting the second year of my master's, I completed a two-and-a-half-month internship at Meducol as a Game Developer. I sharpened my C# skills and convinced the trainer to try Scrum. I served as Product Owner while still developing, which was a funny experience, but we delivered successfully.

After that year, I received a contractor offer from Global Web Marketing as a Full Stack PHP Developer. I worked on both frontend and backend tasks, wrote automation scripts with Selenium and Robot Framework, and also handled desktop automation through RPA.

**Brief tool explanations:** Selenium automates browser interactions for UI testing. Robot Framework is an open-source automation framework that helps write readable test cases. RPA automates repetitive desktop tasks and is useful when older tools still need manual-style workflows.

While continuing the master's, I also learned strategic marketing: writing scripts for product videos, thinking about camera angles, designing UI and UX, studying target audiences, doing SEO analysis, and understanding how an idea reaches the market. I also learned Java and Spring Boot, and I explored how ORMs such as Hibernate connect code to databases.

**About Spring Boot, Hibernate, and JavaBeans:** Spring Boot is a convention-based Java framework that simplifies setup and dependency injection. Hibernate is an ORM that maps Java objects to database tables. JavaBeans are reusable Java classes that follow getter/setter conventions and integrate well with frameworks.

I chose game development again and deepened my Unity knowledge. I validated the semester with a 16/20 and then started my final internship phase: six months at Primatec Engineering as a Software Developer Intern. There I worked with C# WinForms and built a Unity application that had to interoperate with their desktop software.

**How I connected Unity and WinForms in practice:** You can bridge applications through shared libraries, packaged DLLs, local IPC, or WebSockets. The best solution depends on product constraints, deployment, and performance needs.

I completed my tasks quickly, helped teammates, and exceeded expectations. The feedback I received was clear: they did not expect that level of output from a trainee. That moment reinforced a belief I still carry today: no matter the stack, I am ready for it.

I earned my Master's degree feeling confident, prepared, and hungry for what would come next. One week after graduation, my phone rang. A recruiter. And that is where Part Two begins.`,
      readingTime: "12 min read",
      highlights: [
        { text: "Game Development", color: "#FFD41D" },
        { text: "ping-pong fame", color: "#6AECE1" },
        { text: "8/20", color: "#FF6B6B" },
        { text: "14/20", color: "#4ECDC4" },
        { text: "Processing.js Developer Intern", color: "#FFD41D" },
        { text: "Web Developer Intern", color: "#FFD41D" },
        { text: "Symfony", color: "#33A1E0" },
        { text: "Vue.js", color: "#4FC08D" },
        { text: "real-time notifications", color: "#FF9F43" },
        { text: "freelanced", color: "#A29BFE" },
        {
          text: "Master's in Innovation and Project Management",
          color: "#FFD41D",
        },
        { text: "Game Developer", color: "#FFD41D" },
        { text: "Full Stack PHP Developer", color: "#33A1E0" },
        { text: "16/20", color: "#4ECDC4" },
        { text: "Software Developer Intern", color: "#FFD41D" },
        { text: "No matter the stack, I'm ready for it", color: "#26CCC2" },
        { text: "Part Two begins", color: "#FF6B6B" },
      ],
    },
  },
  fr: {
    "1": {
      title: "Mon parcours",
      part: "Partie 1",
      subtitle:
        "Ping-pong, Processing.js, Mercure, et l'appel qui a tout changé",
      content: `J'avais 19 ans en 2018 lorsque j'ai obtenu mon baccalauréat en informatique. Avec une valise, la tête pleine d'ambition et très peu d'idée de ce qui m'attendait, j'ai quitté ma ville pour m'installer à Sfax et commencer mon parcours universitaire à l'Institut Supérieur d'Informatique et de Multimédia de Sfax.

La première année a ressemblé à l'ouverture d'une porte vers un nouveau monde. J'y ai découvert le langage C, HTML, CSS, jQuery et JavaScript. Puis un vrai tournant est arrivé : nous devions choisir entre l'audiovisuel et le développement de jeux. Je n'ai pas hésité. J'ai choisi le game development parce que j'avais un rêve très simple : comprendre comment les jeux fonctionnent réellement derrière l'écran.

Cette année-là n'a pas été faite seulement de code. D'une certaine façon, je suis aussi devenu "le gars du ping-pong" à l'université. Depuis l'enfance, j'avais passe d'innombrables heures a jouer et a faire de la competition dans mon club de quartier, et ce bagage m'a suivi jusqu'au campus. Je me suis fait des amis facilement, j'ai gagné le respect de mes camarades, et même certains enseignants ont remarqué ma capacité d'apprentissage et mon esprit sportif, parfois plus que mes notes. Ma première année s'est terminée avec de la confiance, de vraies amitiés et le sentiment d'être à ma place.

La deuxième année a été plus brutale que prévu. Le premier semestre s'est terminé sur un échec : 8/20. Ce fut un réveil. Au lieu d'abandonner, je me suis recentré, j'ai repris le contrôle et je me suis battu. Au second semestre, je suis remonté presque à 14/20 et j'ai validé l'année.

Sur le plan académique, tout est devenu plus sérieux. Mathématiques avancées, conception de systèmes, notions d'architecture, algorithmes de tri, bases réseaux, SQL, électronique et composants informatiques remplissaient mes journées. C'est aussi à ce moment que j'ai découvert mon premier framework, Laravel, et que j'ai commencé à concevoir des interfaces avec Bootstrap en 2020. C'était dense, mais passionnant.

Cet été-là, j'ai rejoint TADA comme stagiaire Processing.js. Mon rôle consistait à appliquer de la logique mathématique pour produire des graphiques animés à partir de formes vectorielles. Processing.js est devenu mon terrain de jeu pour comprendre la programmation orientée objet et l'abstraction dans un cadre créatif. J'ai appris vite, j'ai beaucoup expérimenté, et l'équipe a apprécié mon travail, surtout compte tenu de mon âge.

**Petite note sur Processing.js et pourquoi c'était important :** Processing.js est une version JavaScript de l'environnement Processing. À l'origine, Processing a été pensé pour permettre aux designers et artistes de dessiner avec du code. Avec Processing.js, cette idée arrive dans le navigateur via le canvas HTML5, et l'animation devient quelque chose de visuel, presque immédiat. Pour quelqu'un qui apprend l'abstraction, voir le code produire du mouvement rend les concepts beaucoup plus concrets.

Mon stage s'est très bien passé. L'équipe aimait les expérimentations visuelles que je produisais, et j'y ai vraiment appris l'OOP et l'abstraction en construisant des visuels ludiques et mathématiques. Leur réaction m'a donné un vrai boost de confiance.

La troisième et dernière année de licence a été intense. Le premier semestre est entré directement dans le dur : OOP avancée, base de données à un niveau plus exigeant, frameworks, projets de jeux comptés dans la note, bases Android, concepts d'IA, pathfinding avec Dijkstra, architecture MVC et APIs REST. J'avais l'impression de traverser en accélération tout ce qui constitue une formation moderne en informatique.

**Une explication rapide :** l'algorithme de Dijkstra sert à trouver le plus court chemin entre des nœuds dans un graphe. En développement de jeux, il est souvent utilisé pour le pathfinding, par exemple lorsqu'un NPC doit trouver efficacement sa route sur une carte.

Le second semestre exigeait un long stage de six à sept mois, qui servait de pont vers la diplomation. J'avais reçu plusieurs propositions de professeurs, mais je voulais une expérience plus industrielle et plus proche de chez moi. J'ai rejoint Development Engineering Services comme stagiaire en développement web. Mon stack était Symfony pour le backend, Vue.js pour le frontend et MySQL pour la base de données. Un ami s'occupait de la partie mobile pendant que je construisais l'interface web, et nous partagions le même modèle de données.

Le produit était une plateforme de mise en relation pour l'emploi : des entreprises publiaient des offres, des candidats postulaient, et les deux parties pouvaient se noter. J'ai travaillé sur la gestion des utilisateurs, les rôles et permissions, l'authentification, et surtout cette partie toujours sensible mais indispensable : les notifications en temps réel.

Le temps réel était justement la partie la plus délicate. Après beaucoup de recherche et d'essais, j'ai fini par implémenter les mises à jour live avec Mercure.

**Petit résumé sur Mercure :** Mercure est un système publish/subscribe souvent utilisé avec Symfony pour pousser des mises à jour temps réel vers le navigateur. Il repose sur les Server-Sent Events (SSE), qui sont plus simples que les WebSockets pour beaucoup de cas d'usage unidirectionnels comme les notifications ou les compteurs en direct.

Pendant ce stage, presque tout a été appris en autonomie. J'ai appris Symfony et Vue.js sur le tas en lisant la documentation, en posant des questions sur StackOverflow, en clonant des projets GitHub, et en passant des nuits entières sur des tutoriels YouTube. Au bout de six mois, le produit fonctionnait, j'ai livré mon travail de stage et j'ai obtenu mon diplôme.

Après la licence, j'ai travaillé en freelance sur différents sujets : plateformes scolaires, sites d'hôtels, et bien d'autres. Si une nouvelle stack arrivait devant moi, je l'ouvrais. Ma boîte à outils s'est élargie : Docker, Laravel, les débuts de Tailwind, Vue.js, Git, Trello, Jira, Teams, Slack, Monday, et oui, même WhatsApp pour les discussions rapides avec les clients. J'ai aussi travaillé sur des projets React legacy.

**Une note sur les lifecycle methods de l'ancien React :** avant les Hooks, les composants de classe reposaient sur des méthodes comme componentWillMount, componentWillReceiveProps ou componentWillUpdate. React en a ensuite dépprécié plusieurs parce qu'elles pouvaient générer des comportements incohérents. Maintenir un ancien projet React demande souvent de comprendre ces anciens cycles de vie avant de les refactorer proprement.

À un moment, je me suis posé une question plus large : et si j'étudiais non seulement la façon de construire un logiciel, mais aussi la façon de planifier un projet, de l'exécuter et de l'amener jusqu'au marché ? C'est pour cela qu'en 2021 j'ai choisi de poursuivre un master en innovation et management de projet.

Nous y avons étudié Scrum, Kanban et Crystal, ainsi que des approches plus traditionnelles comme Waterfall et le V-model.

**Définitions rapides pour clarifier :** Waterfall est un processus séquentiel qui avance des besoins vers la conception, l'implémentation, les tests puis le déploiement. Le V-model insiste sur la vérification et la validation à chaque étape. Scrum est un cadre Agile basé sur des sprints, des rôles et des cérémonies. Kanban met l'accent sur le flux et la visualisation. Crystal est plus léger et centré sur l'humain. Le bon cadre dépend toujours du contexte et du niveau de risque.

Dans ce master, j'ai appris la gestion des risques, l'estimation de charge, la préparation de backlog, le ticketing et la conduite de réunions efficaces. J'ai aussi étudié les rôles d'équipe de façon plus approfond ie.

**Petit résumé des rôles et événements Scrum :**
- Product Owner : il porte la vision produit et priorise le backlog.
- Scrum Master : il facilite le travail de l'équipe, lève les blocages et protège le cadre.
- Scrum Team : c'est l'équipe pluridisciplinaire qui construit le produit.

Parmi les cérémonies, on retrouve Sprint Planning, Daily Scrum, Sprint Review et Retrospective. Le Product Backlog représente le travail priorisé, et le Sprint Backlog correspond à ce que l'équipe s'engage à réaliser pendant le sprint.

Avant de commencer la deuxième année du master, j'ai effectué un stage de deux mois et demi chez Meducol comme développeur de jeux. J'y ai renforcé mes compétences en C# et j'ai même convaincu le formateur d'essayer Scrum. J'y ai tenu un rôle de Product Owner tout en développant, ce qui était assez amusant, mais nous avons bien livré.

Après cette année, j'ai reçu une proposition de mission chez Global Web Marketing comme développeur Full Stack PHP. Je travaillais à la fois sur le frontend et le backend, j'écrivais des scripts d'automatisation avec Selenium et Robot Framework, et je faisais aussi de l'automatisation desktop via la RPA.

**Explication rapide sur ces outils :** Selenium automatise les interactions avec le navigateur pour tester les interfaces. Robot Framework est un framework open source qui permet d'écrire des cas de test lisibles. La RPA automatise des tâches répétitives sur desktop, en particulier lorsque certains outils imposent encore des workflows proches du manuel.

En continuant mon master, j'ai aussi appris le marketing stratégique : écriture de scripts pour des vidéos produit, réflexion sur les angles de prise de vue, UI/UX, étude des audiences cibles, analyse SEO, et plus largement la façon dont une idée devient un produit visible sur le marché. J'ai également appris Java, Spring Boot, et j'ai compris comment des ORMs comme Hibernate relient le code aux bases de données.

**À propos de Spring Boot, Hibernate et JavaBeans :** Spring Boot est un framework Java basé sur la convention qui simplifie le setup et l'injection de dépendances. Hibernate est un ORM qui mappe les objets Java aux tables de base de données. Les JavaBeans sont des classes réutilisables qui suivent des conventions de getters et setters et s'intègrent bien avec les frameworks.

J'ai de nouveau choisi le game development et j'ai approfondi Unity. J'ai validé le semestre avec un 16/20 puis j'ai entamé ma phase finale de stage : six mois chez Primatec Engineering comme stagiaire développeur logiciel. J'y travaillais avec C# WinForms et je construisais une application Unity qui devait interopérer avec leur logiciel desktop.

**Comment j'ai relié Unity et WinForms en pratique :** on peut faire communiquer ce type d'applications via des bibliothèques partagées, des DLL, de l'IPC local ou des WebSockets. La bonne solution dépend toujours des contraintes du produit, du déploiement et des performances attendues.

J'ai terminé mes tâches rapidement, j'ai aidé mes coéquipiers et j'ai dépassé les attentes. Le retour que j'ai reçu était clair : ils ne s'attendaient pas à ce niveau d'output de la part d'un stagiaire. Ce moment a renforcé une conviction que je garde encore aujourd'hui : peu importe la stack, je suis prêt.

J'ai obtenu mon master avec le sentiment d'être prêt, confiant et très motivé pour la suite. Une semaine après la remise du diplôme, mon téléphone a sonné. Un recruteur. Et c'est là que commence la Partie 2.`,
      readingTime: "12 min de lecture",
      highlights: [
        { text: "Développement de jeux", color: "#FFD41D" },
        { text: "ping-pong", color: "#6AECE1" },
        { text: "8/20", color: "#FF6B6B" },
        { text: "14/20", color: "#4ECDC4" },
        { text: "Stage Processing.js", color: "#FFD41D" },
        { text: "Stage développement web", color: "#FFD41D" },
        { text: "Symfony", color: "#33A1E0" },
        { text: "Vue.js", color: "#4FC08D" },
        { text: "notifications temps réel", color: "#FF9F43" },
        { text: "freelance", color: "#A29BFE" },
        {
          text: "Master en innovation et management de projet",
          color: "#FFD41D",
        },
        { text: "Développeur de jeux", color: "#FFD41D" },
        { text: "Développeur Full Stack PHP", color: "#33A1E0" },
        { text: "16/20", color: "#4ECDC4" },
        { text: "Stagiaire développeur logiciel", color: "#FFD41D" },
        { text: "Peu importe la stack, je suis prêt", color: "#26CCC2" },
        { text: "La Partie 2 commence", color: "#FF6B6B" },
      ],
    },
  },
};

export function getBlogs(language: AppLanguage): Blog[] {
  const localizedBlogs = blogContentByLanguage[language];

  return blogDefinitions.map((blog) => ({
    ...blog,
    ...localizedBlogs[blog.id],
  }));
}

export function getBlogById(
  language: AppLanguage,
  id: string,
): Blog | undefined {
  return getBlogs(language).find((blog) => blog.id === id);
}

export function getBlogBySlug(
  language: AppLanguage,
  slug: string,
): Blog | undefined {
  return getBlogs(language).find((blog) => blog.slug === slug);
}

export function getBlogIds() {
  return blogDefinitions.map((blog) => blog.id);
}
