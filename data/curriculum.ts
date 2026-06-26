export interface CurriculumPhase {
  phase: string;
  title: string;
  duration: string;
  technologies: string[];
  description: string;
  projects: string[];
}

export const curriculumRoadmap: CurriculumPhase[] = [
  {
    phase: "Phase 1",
    title: "Discovery, Strategy & Architecture Specs",
    duration: "Week 1",
    technologies: ["Product Scoping", "ERD Database Spec", "System Architecture Blueprinting", "Jira & Linear Roadmap"],
    description: "Aligning with founders on the core value proposition. Scoping requirements into concrete features. Creating database diagrams and selection of backend frameworks.",
    projects: ["Interactive Product Spec Doc", "Scalable Database Schema Map"]
  },
  {
    phase: "Phase 2",
    title: "High-Fidelity UI & Responsive Design System",
    duration: "Week 2",
    technologies: ["Tailwind CSS v4", "Next.js CSS Layouts", "Mobile-First Parity Specs", "Micro-Interactions"],
    description: "Developing highly premium, custom UI layouts that render fluidly across mobile and desktop. Establishing custom style variables and global CSS layout systems.",
    projects: ["Fully Responsive Dashboard Shell", "Tailwind Design Token Library"]
  },
  {
    phase: "Phase 3",
    title: "High-Velocity Frontend App Development",
    duration: "Weeks 3 - 4",
    technologies: ["Next.js App Router", "React 19 Hooks", "Zustand State", "Expo Native parity"],
    description: "Writing clean, modular React modules. Hooking up dynamic route layers, responsive menus, slider cards, and handling local state variables efficiently.",
    projects: ["Next.js Interactive Landing Page", "Expo Native App Shell Preview"]
  },
  {
    phase: "Phase 4",
    title: "Secure Backends, DB & API Integrations",
    duration: "Weeks 5 - 6",
    technologies: ["Node.js & Express", "Supabase DB & Auth", "MongoDB & Mongoose", "JWT & Middleware Security"],
    description: "Building resilient RESTful and Socket APIs. Setting up user authentication layers, role-based controls, and writing fast relational queries with DB indexes.",
    projects: ["Secure Backend API Gateway", "E-Commerce Database Integrations"]
  },
  {
    phase: "Phase 5",
    title: "Generative AI Agent integrations & Launch",
    duration: "Week 7+",
    technologies: ["OpenAI & Gemini API", "LangChain LLM Flows", "Pinecone Vector Store", "Docker & Vercel Deploy"],
    description: "Integrating LLM prompt models and vector data embeddings for smart context features. Optimizing database indices, compiling builds, and shipping live on Vercel.",
    projects: ["Autonomous RAG Support Agent", "Production Launch Live on Vercel"]
  }
];
