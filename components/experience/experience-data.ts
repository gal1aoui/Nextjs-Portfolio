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

export const experiences: ExperienceItem[] = [
  {
    id: "kpit-frontend",
    year: "2024",
    title: "Full-stack Developer | Frontend Focus",
    company: "KPIT Technologies",
    location: "Sfax, Tunisia",
    period: "Feb 2024 - Aug 2025",
    type: "full-time",
    story:
      "This is where I truly found my calling. After proving myself as a full-stack developer, I was trusted to lead frontend architecture decisions. I specialized in React and Angular, optimizing performance across multiple enterprise modules. I mentored junior developers and contributed to internal tooling that improved our entire team's productivity.",
    learned: [
      "Frontend architecture at scale",
      "Performance optimization patterns",
      "Technical mentorship",
      "Building developer tools (VS Code extensions)",
    ],
    techStack: ["React", "Angular", "TypeScript", "GitLab CI/CD"],
  },
  {
    id: "kpit-fullstack",
    year: "2023",
    title: "Full-stack Developer",
    company: "KPIT Technologies",
    location: "Sfax, Tunisia",
    period: "Aug 2023 - Feb 2024",
    type: "full-time",
    story:
      "My first step into enterprise software development. I joined an international team and quickly adapted to professional workflows - Agile ceremonies, code reviews, and CI/CD pipelines became second nature. This experience transformed my understanding of building software that scales.",
    learned: [
      "Enterprise-grade development practices",
      "Cross-functional team collaboration",
      "Agile/Scrum methodology in practice",
      "Code review culture",
    ],
    techStack: ["React", "Angular", "TypeScript", ".NET"],
  },
  {
    id: "primatec",
    year: "2023",
    title: "Software Developer",
    company: "Primatec Engineering",
    location: "Sfax, Tunisia",
    period: "Feb 2023 - Jun 2023",
    type: "contract",
    story:
      "A unique challenge that pushed my boundaries. I integrated Unity 3D builds into a desktop application, bridging the gap between game engines and enterprise software. This project taught me that the best solutions often come from combining unexpected technologies.",
    learned: [
      "Cross-platform integration (Unity + WinForms)",
      "Real-time communication with WebSockets",
      "Thinking outside conventional boundaries",
    ],
    techStack: ["Unity 3D", "C#", "WinForms", "Node.js", "WebSocket"],
  },
  {
    id: "gwm",
    year: "2022",
    title: "Full Stack PHP Developer",
    company: "Global Web Marketing",
    location: "Ariana, Tunisia",
    period: "Jun 2022 - Jun 2023",
    type: "part-time",
    story:
      "While pursuing my Master's, I balanced academics with real-world development. I discovered the power of automation testing with Robot Framework - writing tests that saved hours of manual QA work. This role solidified my belief that quality code is tested code.",
    learned: [
      "Test automation mindset",
      "Robot Framework & Selenium",
      "Balancing work and education",
      "Professional PHP development",
    ],
    techStack: ["PHP", "Robot Framework", "Selenium"],
  },
  {
    id: "meducol",
    year: "2022",
    title: "Game Developer",
    company: "Meducol",
    location: "Remote",
    period: "Feb 2022 - May 2022",
    type: "contract",
    story:
      "Building a serious game for medical students was both challenging and rewarding. I implemented multiplayer functionality using Photon PUN 2 and Firebase, learning that real-time synchronization is an art form. This project showed me how technology can make learning engaging.",
    learned: [
      "Multiplayer game architecture",
      "Real-time data sync with Firebase",
      "Educational technology design",
      "Remote collaboration under SCRUM",
    ],
    techStack: ["Unity 3D", "C#", "PUN 2", "Firebase"],
  },
  {
    id: "des",
    year: "2021",
    title: "Web Development Intern",
    company: "Development Engineering Services",
    location: "Monastir, Tunisia",
    period: "Feb 2021 - Jul 2021",
    type: "internship",
    story:
      "My breakthrough moment. I built a freelance platform from scratch and achieved a 40% performance improvement using Symfony UX Turbo and real-time data processing with Mercure. This internship transformed me from a student into a developer who understands performance at a deep level.",
    learned: [
      "Performance optimization (40% improvement!)",
      "Real-time web with Mercure protocol",
      "Full application architecture",
      "Building complex features from scratch",
    ],
    techStack: ["Symfony 5", "Vue.js", "Mercure", "Hotwire.js"],
  },
  {
    id: "freelance",
    year: "2021",
    title: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Jul 2021 - Aug 2021",
    type: "freelance",
    story:
      "Taking the leap into freelancing taught me client communication and project ownership. I built a complete school management system and learned Docker for deployment - skills that proved invaluable in my later roles.",
    learned: [
      "Client communication",
      "Project ownership end-to-end",
      "Docker & containerization",
      "Laravel ecosystem mastery",
    ],
    techStack: ["Laravel 7", "Vue.js", "Tailwind CSS", "Docker"],
  },
  {
    id: "unity-self",
    year: "2020",
    title: "Unity 3D Developer",
    company: "Self-employed",
    location: "Tunisia",
    period: "Mar 2020 - May 2020",
    type: "freelance",
    story:
      "During lockdown, I channeled my energy into game development. Building a race game from scratch taught me 3D mathematics, physics simulation, and the importance of user experience in interactive applications.",
    learned: [
      "3D game development fundamentals",
      "Physics and terrain systems",
      "Self-directed learning",
    ],
    techStack: ["Unity 3D", "C#"],
  },
  {
    id: "tada",
    year: "2019",
    title: "Processing.js Developer Intern",
    company: "TADA",
    location: "Monastir, Tunisia",
    period: "Jun 2019 - Aug 2019",
    type: "internship",
    story:
      "Where it all began. Creating visual art through code using mathematical algorithms sparked my passion for programming. I discovered that code isn't just functional - it can be creative and beautiful.",
    learned: [
      "Creative coding fundamentals",
      "Mathematical thinking in programming",
      "The joy of visual programming",
    ],
    techStack: ["Processing.js", "JavaScript"],
  },
];
