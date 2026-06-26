export interface Cohort {
  id: string;
  title: string;
  badge: string;
  badgeType: "live" | "popular" | "new";
  duration: string;
  projectsCount: string;
  features: string[];
  originalPrice: number;
  discountedPrice: number;
  tags: string[];
}

export const cohorts: Cohort[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Fintech Analytics Dashboard",
    badge: "Web Application",
    badgeType: "popular",
    duration: "3 Weeks Build Time",
    projectsCount: "Next.js + Supabase",
    features: [
      "Real-time analytics engine with custom graphs",
      "Robust state management and server caches",
      "Supabase OAuth and Database integrations",
      "Multi-tenant Role-Based Access Controls",
      "Recharts visual charting wrappers",
      "Optimized postgres index queries"
    ],
    originalPrice: 15000,
    discountedPrice: 9999, // We can keep these or map them. We'll hide pricing in UI or show as value estimators.
    tags: ["Next.js", "Supabase", "Fintech", "Tailwind"]
  },
  {
    id: "mobile-commerce",
    title: "High-Conversion Mobile Commerce",
    badge: "React Native App",
    badgeType: "live",
    duration: "4 Weeks Build Time",
    projectsCount: "iOS & Android Builds",
    features: [
      "Native iOS & Android codebase parity",
      "Smooth shopping cart state handlers",
      "Stripe payment gateway API wrapper",
      "Animated swipe gestures & listings",
      "Cloud push notification channels",
      "Tailwind NativeWind style configuration"
    ],
    originalPrice: 12000,
    discountedPrice: 7999,
    tags: ["React Native", "Stripe", "Expo", "Tailwind"]
  },
  {
    id: "ai-integrations",
    title: "Autonomous AI Customer Support Agents",
    badge: "Backend & LLMs",
    badgeType: "new",
    duration: "2 Weeks Build Time",
    projectsCount: "Node.js + LangChain",
    features: [
      "Custom LLM fine-tuning API integrations",
      "LangChain routing for context support",
      "Retrieval-Augmented Generation (RAG)",
      "Pinecone Vector Database indexing",
      "Streaming socket-io response latency",
      "Full performance trace logging panel"
    ],
    originalPrice: 8000,
    discountedPrice: 4999,
    tags: ["Node.js", "LangChain", "OpenAI", "Pinecone"]
  }
];
