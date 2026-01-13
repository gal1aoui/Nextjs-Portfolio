export const recruiterQA: Record<string, string[]> = {
  "Can you tell me about yourself?": [
    "I am a passionate developer with experience building scalable web applications and a strong focus on clean, maintainable code.",
    "I have a background in software development and enjoy solving complex problems through technology.",
    "I’m a motivated developer who enjoys learning new technologies and improving existing systems."
  ],

  "What are you currently working on?": [
    "I’m currently working on improving my portfolio and building real-world projects.",
    "I’m focusing on refining my skills and experimenting with new tools and frameworks.",
    "I’m working on personal and freelance projects to strengthen my practical experience."
  ],

  "What technologies are you most comfortable with?": [
    "I’m most comfortable with JavaScript, TypeScript, React, and modern frontend tooling.",
    "I have strong experience with React, Node.js, and RESTful APIs.",
    "I work confidently with frontend frameworks and have backend experience as well."
  ],

  "What kind of role are you looking for?": [
    "I’m looking for a role where I can grow, contribute, and work on meaningful projects.",
    "I’m interested in a position that allows me to solve real problems and collaborate with a team.",
    "I’m seeking a role that challenges me and supports continuous learning."
  ],

  "Why are you interested in this position?": [
    "This role aligns well with my skills and career goals.",
    "I admire the company’s mission and see an opportunity to contribute meaningfully.",
    "The position matches both my technical interests and growth ambitions."
  ],

  "Can you describe a challenging project you worked on?": [
    "I worked on a project with tight deadlines that required rapid problem-solving and teamwork.",
    "I handled a complex feature that required refactoring existing code while maintaining stability.",
    "I built a system from scratch while ensuring performance and scalability."
  ],

  "How do you handle tight deadlines?": [
    "I prioritize tasks, communicate clearly, and focus on delivering the most impactful work first.",
    "I break down tasks and stay organized to ensure deadlines are met.",
    "I remain calm under pressure and adjust priorities as needed."
  ],

  "What is your experience with teamwork and collaboration?": [
    "I enjoy working in teams and believe communication is key to success.",
    "I’ve collaborated with designers and developers to deliver quality products.",
    "I’m comfortable giving and receiving feedback in a team environment."
  ],

  "What are your strengths as a developer?": [
    "Problem-solving, attention to detail, and adaptability are my key strengths.",
    "I write clean code and enjoy improving existing systems.",
    "I’m reliable, curious, and continuously improving my skills."
  ],

  "What areas are you currently improving?": [
    "I’m improving system design and performance optimization skills.",
    "I’m focusing on writing more testable and scalable code.",
    "I’m learning best practices for large-scale applications."
  ],

  "Have you worked with deadlines or production systems?": [
    "Yes, I have experience working with deadlines and production-ready systems.",
    "I’ve supported production environments and handled real-user constraints.",
    "I understand the importance of reliability and stability in production."
  ],

  "How do you approach learning a new technology?": [
    "I start with documentation, then apply it through small projects.",
    "I learn by building practical examples and refining them over time.",
    "I combine theory with hands-on experimentation."
  ],

  "What type of work environment do you prefer?": [
    "I prefer a collaborative and supportive environment.",
    "I work best where learning and communication are encouraged.",
    "I enjoy environments that value both autonomy and teamwork."
  ],

  "Are you open to remote or relocation opportunities?": [
    "Yes, I’m open to both remote work and relocation.",
    "I’m flexible depending on the opportunity.",
    "I’m open to discussing different work arrangements."
  ],

  "What are your salary expectations?": [
    "I’m open to discussing a fair salary based on the role and responsibilities.",
    "I’m flexible and interested in growth opportunities.",
    "I’d prefer to align expectations after understanding the full scope of the role."
  ],

  "When would you be available to start?": [
    "I’m available to start within a reasonable notice period.",
    "I can start immediately or as mutually agreed.",
    "I’m flexible depending on the company’s needs."
  ]
};

export function getRandomAnswer(question: string): string {
  const answers = recruiterQA[question];
  if (!answers) return "No answer available.";

  return answers[Math.floor(Math.random() * answers.length)];
}