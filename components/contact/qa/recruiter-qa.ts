export const recruiterQA: Record<string, string[]> = {
  "Can you tell me about yourself?": [
    "I’m a senior software engineer with strong expertise in frontend architecture, specializing in React and Angular. I design and deliver scalable, high-performance web applications used in production.",
    "I have a solid academic background in computer science and project management, combined with hands-on experience across freelance and product-driven environments.",
    "My focus is on clean architecture, performance optimization, and building maintainable systems that scale with business needs.",
  ],

  "What are you currently working on?": [
    "I’m actively designing and maintaining production-ready npm packages with a strong emphasis on performance, bundle size, and developer experience.",
    "I’m working on real-world frontend systems, refining reusable components and improving application architecture.",
    "I continuously invest in improving frontend scalability, tooling, and long-term maintainability.",
  ],

  "What technologies are you most comfortable with?": [
    "My core stack is TypeScript, JavaScript, React, and Angular, with deep experience in modern frontend tooling and architecture.",
    "I have strong experience with state management, performance optimization, and scalable UI design.",
    "On the backend, I’ve worked with Node.js, PHP, Laravel, and RESTful APIs, which allows me to collaborate effectively across the stack.",
  ],

  "What kind of role are you looking for?": [
    "I’m looking for a senior frontend or full-stack role where I can own technical decisions and contribute to architecture and product quality.",
    "I’m interested in teams that value clean code, scalability, and thoughtful engineering trade-offs.",
    "I want to work on products where engineering quality directly impacts users and business outcomes.",
  ],

  "Can you describe a challenging project you worked on?": [
    "I designed and published npm packages used as reusable building blocks, where performance, stability, and DX were critical.",
    "I led refactoring efforts on complex frontend codebases to improve scalability and maintainability without breaking production.",
    "I’ve delivered systems from concept to production under tight deadlines while keeping technical debt under control.",
  ],

  "How do you handle tight deadlines?": [
    "I focus on prioritization, risk assessment, and delivering the highest-impact features first.",
    "I communicate clearly with stakeholders and make trade-offs explicit to protect long-term system quality.",
    "I’m used to working under pressure while maintaining a high engineering standard.",
  ],

  "What is your experience with teamwork and collaboration?": [
    "I’ve worked closely with designers, backend engineers, and product stakeholders in both freelance and structured team environments.",
    "I value clear communication, shared ownership, and pragmatic decision-making.",
    "I’m comfortable mentoring, reviewing code, and contributing to technical discussions.",
  ],

  "What are your strengths as a developer?": [
    "Strong frontend architecture skills, problem-solving ability, and attention to detail.",
    "I excel at turning complex requirements into clean, scalable, and maintainable solutions.",
    "I take ownership, deliver reliably, and continuously raise the quality bar.",
  ],

  "What areas are you currently improving?": [
    "I’m deepening my expertise in large-scale frontend system design and performance at scale.",
    "I’m refining testing strategies and long-term maintainability for complex UI systems.",
    "I continuously evaluate new tools and patterns to improve developer experience and reliability.",
  ],

  "Have you worked with deadlines or production systems?": [
    "Yes, extensively. I’ve worked with production systems serving real users and real constraints.",
    "I understand the importance of stability, monitoring, backward compatibility, and safe deployments.",
    "I’m comfortable being accountable for production-quality code.",
  ],

  "How do you approach learning a new technology?": [
    "I start with core concepts and architecture, not just syntax.",
    "I validate new technologies by applying them to real use cases and measuring their impact.",
    "I focus on understanding trade-offs and long-term implications.",
  ],

  "What type of work environment do you prefer?": [
    "I perform best in environments that value technical ownership and clear communication.",
    "I appreciate teams that prioritize code quality, scalability, and continuous improvement.",
    "I’m comfortable with autonomy as long as expectations and goals are clear.",
  ],

  "Are you open to remote or relocation opportunities?": [
    "Yes, I’m open to remote work and international opportunities.",
    "I’m flexible depending on the team, product, and long-term growth potential.",
    "I’m open to discussing hybrid or relocation options if there’s strong alignment.",
  ],

  "What are your salary expectations?": [
    "I expect compensation aligned with a senior-level role and the impact I bring.",
    "I’m open to discussion based on scope, responsibility, and growth opportunities.",
    "I prefer aligning on expectations once I fully understand the role and challenges.",
  ],

  "When would you be available to start?": [
    "I can start after a short notice period if required.",
    "I’m open to immediate start depending on alignment.",
    "I’m flexible and happy to coordinate based on project needs.",
  ],
};

export function getRandomAnswer(question: string): string {
  const answers = recruiterQA[question];

  if (!answers) return "No answer available.";

  return answers[Math.floor(Math.random() * answers.length)];
}
