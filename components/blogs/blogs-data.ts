import { Blog } from "./types";

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Achref Background",
    slug: "no-matter-the-stack-im-ready-for-it",
    author: "Achref Gallaoui",
    part: "Part One",
    subtitle:
      "Ping-Pong, Processing.js, Mercure and the Call That Changed Everything",
    content: `I was 19 years old in 2018 when I obtained my Computer Science Baccalaureate certificate. With a suitcase, a head full of ambition, and very little idea of what awaited me, I moved to Sfax to start my university journey at the Higher Institute of Computer Science and Multimedia of Sfax.

The first year felt like opening the door to a whole new world. I was introduced to C programming, HTML, CSS, jQuery, and JavaScript. Then came a turning point: we had to choose between Audio-Visual studies and Game Development. I didn’t hesitate. I chose Game Development because I had one simple dream, understanding how games actually work behind the scenes.

That year wasn’t just about code. Somehow, I became that ping-pong guy at the university. As a child, I spent countless hours playing ping-pong and competing at my neighborhood club, and those skills followed me to campus. I made friends easily, gained the respect of classmates, and even caught the attention of teachers who noticed my learning abilities and sportsmanship, sometimes more than my grades. My first year ended with confidence, friendships, and the feeling that I truly belonged there.

The second year hit harder than expected. The first semester ended in failure: 8/20. It was a wake-up call. Instead of giving up, I reset, focused, and fought back. By the second semester, I climbed to nearly 14/20 and passed the year.

Academically, things became more serious. Advanced mathematics, system design, architectural concepts, sorting algorithms, networking basics, SQL, electronics, and computer components filled my days. I discovered my first framework, Laravel, and started designing interfaces using Bootstrap in 2020. Everything felt heavy but exciting.

That summer, I joined TADA as a Processing.js Developer Intern. My role was to apply mathematical logic to create visually animated graphics using vector shapes. Processing.js became my playground for understanding Object-Oriented Programming and abstraction in a creative way. I learned fast, experimented fearlessly, and the team appreciated my work, especially considering my age. That confidence boost stayed with me.

**Quick note about Processing.js , what it is and why it mattered:** Processing.js is a JavaScript port of the Processing language/environment. Processing was created for visual designers and artists to sketch with code. Processing.js brings that idea to the browser by drawing to the HTML5 canvas and letting you code animations, shapes, and vector graphics declaratively. As an environment, it encourages thinking in objects and behaviors (hence the jump to OOP), because each shape or visual object can be represented as an entity with properties and methods. For someone learning abstraction, seeing code produce visible motion is powerful,it turns abstract concepts into something you can point to and say, "I made that."

My internship went well. The team liked the visual experiments I produced, and I learned OOP and abstraction while building playful, math-driven visuals. Their impressed reaction (considering my age) gave me a big boost in confidence.

The third and final year of the bachelor's degree was a sprint. The first semester dove deep: advanced OOP, database management and SQL at a more rigorous level, frameworks, game projects that counted toward grades, Android fundamentals, AI concepts, Dijkstra's pathfinding for path planning, MVC architecture and REST APIs , all the staples of a modern computer science education.

**A short explanation:** Dijkstra's algorithm is a classic algorithm used to find the shortest path between nodes in a graph. In game development it's often used for pathfinding,e.g., an NPC finding the shortest route through a map,by modeling the map as nodes and edges and computing minimal distances.

The second semester required a long internship (6–7 months), the bridge to graduation. I received several offers from professors, but I wanted industrial experience near home. I joined Development Engineering Services as a Web Developer Intern. My stack: Symfony on the backend, Vue.js on the frontend, MySQL for the database. A neighbor friend handled the mobile side while I built the web interface; we shared the same data model.

Our product was a job-posting platform: companies post jobs, candidates apply, and both sides can rate each other. I worked on user management, permissions and roles, authentication, and the painful but necessary realtime notifications.

Realtime was the tricky piece. After research and experimentation I implemented realtime updates using Mercure.

**A concise Mercure explainer:** Mercure is a publish/subscribe system often used with Symfony to push realtime updates to browsers. It works over Server-Sent Events (SSE), which allow the server to send a stream of updates to the client. Mercure is easy to integrate with Symfony because it accepts updates from the server-side and delivers them to subscribers with minimal overhead,perfect for notifications, live counters, or collaborative UIs. Unlike WebSockets (which are bidirectional), SSEs are one-way from server to client but are simpler to set up for many common realtime use cases.

Everything at the internship was largely self-taught. I learned Symfony and Vue.js on the fly: reading documentation, asking on StackOverflow, pulling down GitHub projects and running them locally, and watching hundreds of YouTube tutorials late at night. After six months the product worked, I handed in my internship deliverables,and graduated.

After the bachelor's, I freelanced across many industries,school platforms, hotel websites, and more. If a new stack arrived at my door, I opened it. My toolbox grew: Docker, Laravel, early Tailwind, Vue.js, Git and versioning, collaboration tools like Trello, Jira, Teams, Slack, Monday, and yes, WhatsApp for quick client chats. I also worked on legacy React projects.

**A note about legacy React lifecycle methods:** before React Hooks, class components relied on lifecycle methods such as componentWillMount, componentWillReceiveProps, and componentWillUpdate. Over time React deprecated some of these unsafe methods because they could lead to bugs and inconsistent behavior. The modern approach uses Hooks,useEffect, useState, etc.,which express side-effects and lifecycle in a functional style. When you maintain legacy React, you often encounter these older lifecycle hooks and the need to refactor or wrap behavior carefully.

At some point I asked myself: what if I study the bigger picture,how projects are planned, executed and marketed,instead of only building the software? So in 2021 I decided to pursue a Master's in Innovation and Project Management. The program aimed to teach how to generate innovative ideas and bring them to life, while giving a practical grounding in project management.

We studied frameworks like Scrum, Kanban and Crystal, plus the more traditional approaches such as Waterfall and the V-model.

**Short definitions to clarify:** Waterfall is a sequential development process,requirements → design → implementation → testing → deployment,that works when requirements are stable. The V-model is a variation emphasizing verification and validation at each development stage (e.g., design is matched with a corresponding test plan). Scrum is an Agile framework built around fixed-length sprints, roles (Product Owner, Scrum Master, Development Team), and ceremonies (Sprint Planning, Daily Scrum, Sprint Review, Retrospective). Kanban focuses on continuous flow and visualizing work; Crystal emphasizes people, interaction and less prescriptive processes. Choosing a framework depends on project context and risk tolerance.

From the course I learned risk management, time estimation, effort calculation, backlog preparation, ticketing, and how to run meetings effectively. I studied the roles too.

**A quick run-through of Scrum roles and events:**
• Product Owner , responsible for defining the product backlog and prioritization; owns the "what" and the product vision.
• Scrum Master , a facilitator and coach who removes impediments and helps the team follow Scrum practices.
• Scrum Team , cross-functional members building the product.

Ceremonies include Sprint Planning (decide what to do this sprint), Daily Scrum (short daily sync), Sprint Review (demo finished work), and Retrospective (reflect and improve). The Product Backlog is an ordered list of items; the team pulls a subset into the Sprint Backlog for execution.

Before starting the second year of my master's, I completed a 2.5-month internship at Meducol as a Game Developer. I sharpened my C# skills and convinced the trainer to try Scrum. I served as Product Owner while still developing,yes, I briefly tried to be two people at once,and we delivered successfully.

After that year I got a contractor offer from Global Web Marketing as a Full Stack PHP Developer. I worked on frontends and backends, and I wrote automation scripts with Selenium and Robot Framework. I also did RPA for desktop automation.

**Brief tool explanations:** Selenium automates browsers for UI testing,useful for regression tests that simulate real user interactions. Robot Framework is an open source automation framework that lets you write readable test cases and extend them with libraries (Selenium is often used via Robot). RPA (Robotic Process Automation) automates repetitive desktop tasks,useful for integrating legacy tools, filling forms, or automating GUI workflows.

While continuing the master's, I learned strategic marketing: making slugs and scripts for product videos, storyboarding camera angles, designing UI/UX, scanning target audiences, SEO analysis, and product presentation,skills needed to bring an idea to market. I also learned Java and Spring Boot, and how ORMs like Hibernate connect code to databases.

**About Spring Boot, Hibernate and JavaBeans:** Spring Boot is a convention-based Java framework that simplifies application setup and dependency injection. Hibernate is an ORM (Object-Relational Mapping) tool that maps Java objects to database tables and handles SQL behind the scenes, reducing boilerplate. JavaBeans are Java classes that follow a naming convention,private fields with public getters and setters,making them easy to reuse, serialize, and integrate with frameworks.

I chose game development again and learned more Unity. I validated the semester with a 16/20 and then started a final internship phase: six months at Primatec Engineering as a Software Developer Intern. There I worked with C# WinForms and built a Unity application that needed to interoperate with their desktop software.

**How I connected Unity and WinForms in practice:** you can bridge applications by creating a shared interface,e.g., using DLLs to package Unity functionality for native apps, or using a communication channel like WebSockets or local IPC to send messages between processes. The pragmatic choice depends on performance needs and deployment constraints. In my case, I prototyped integrations and used the approach that matched the product constraints.

I completed my tasks quickly, helped teammates, and exceeded expectations. The feedback I received was clear: they didn't expect this level of output from a trainee. That moment reinforced a belief I carry to this day: No matter the stack, I'm ready for it.

I obtained my Master's degree, confident, prepared, and hungry for what comes next. One week after graduation, my phone rang. A recruiter. And that… is where Part Two begins.`,
    publishedAt: "2024-12-15",
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
      { text: "realtime notifications", color: "#FF9F43" },
      { text: "freelanced", color: "#A29BFE" },
      { text: "Master's in Innovation and Project Management", color: "#FFD41D" },
      { text: "Game Developer", color: "#FFD41D" },
      { text: "Full Stack PHP Developer", color: "#33A1E0" },
      { text: "16/20", color: "#4ECDC4" },
      { text: "Software Developer Intern", color: "#FFD41D" },
      { text: "No matter the stack, I'm ready for it", color: "#26CCC2" },
      { text: "Part Two begins", color: "#FF6B6B" },
    ],
  },
];

export function getBlogById(id: string): Blog | undefined {
  return blogs.find((blog) => blog.id === id);
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((blog) => blog.slug === slug);
}
