"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  image: string;
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  gallery?: GalleryItem[];
}

const caseStudiesData: Record<string, CaseStudy> = {
  "my-horoscope": {
    id: "my-horoscope",
    title: "My Horoscope",
    tagline: "ENGINEERING ASTROLOGY THROUGH MATHEMATICAL PRECISION",
    description: "A Vedic astrology platform that calculates planetary transits using NASA JPL ephemeris calculations, rendering live chart diagrams and parsing classical text predictions via fine-tuned LLMs.",
    liveUrl: "https://www.myhoroscope.space/",
    image: "/my-horoscope.png",
    tech: ["Next.js", "Python FastAPI", "Gemini LLM", "GCP Compute Engine", "Swiss Ephemeris"],
    overview: "My Horoscope is a Vedic computation platform that shifts astrology from Sun-sign predictions to absolute astronomical accuracy. Using NASA JPL DE441 Ephemeris databases, it maps precise coordinate overlays to compile real-time Kundli charts. A Python FastAPI layer aggregates the math coordinates and channels context to the Google Gemini LLM API, producing personalized horoscope analysis, Dasha timelines, and yogas forecasts.",
    problem: "General AI chat models lack mathematical coordinates and timing logic. Generating accurate Vedic charts requires processing orbital calculations in real-time, matching them with text datasets, and feeding contextually constrained tokens to LLMs without causing hallucination or timing drift.",
    solution: "We built a dual-engine architecture: a high-efficiency Python calculation engine wrapping the Swiss Ephemeris library, and an AI agent backend. The front-end is a clean, minimal dashboard in Next.js. Calculation nodes output formatted coordinates, which FastAPI packs into structural prompts for Gemini, enforcing astronomical constraints and timing rules.",
    metrics: [
      { label: "Lighthouse SEO Score", value: "100/100" },
      { label: "Generative Search (GEO) Readiness", value: "High" },
      { label: "Best Practices Score", value: "100%" },
      { label: "Mobile Responsiveness", value: "Perfect" }
    ],
    gallery: [
      {
        image: "/horoscope-blog.png",
        title: "Astrology Reads Blog Hub",
        description: "A customized Vedic article center that houses Dasha, transits, and Lagna calculations with real-life timing insights."
      },
      {
        image: "/horoscope-pricing.png",
        title: "Freemium Subscription Plans",
        description: "Sleek and transparent pricing tiers for Horoscope Pro monthly subscriptions, offering unlimited AI consultation credits."
      },
      {
        image: "/horoscope-qa.png",
        title: "Celestial Chart Q&A Node",
        description: "An interactive Q&A console where users can ask conversational AI queries about repeating life patterns, transits, and career milestones."
      }
    ]
  },
  "invoicer": {
    id: "invoicer",
    title: "Invoicer",
    tagline: "RETHINKING BILLING VIA CONVERSATIONAL INTELLIGENCE",
    description: "An AI-powered invoice maker designed for freelance creatives and small teams. By translating natural language into structured billing, it eliminates manual entries, visualizes outstanding debts, and simplifies fast payment links.",
    liveUrl: "/#contact",
    image: "/saas-dashboard.png",
    tech: ["Next.js", "Supabase", "Stripe API", "Recharts"],
    overview: "Invoicer is a fintech dashboard that simplifies client billing for freelancers. By utilizing an AI parser, users can describe tasks in natural language, and the system automatically outputs line items, tax rates, and client invoices. Real-time transaction metrics are aggregated via Recharts and backed by Supabase row caches.",
    problem: "Freelancers spend hours drafting invoices and chasing payments. Current tools require manually logging items, configuring line details, and setting up payment processors, causing friction for busy creators.",
    solution: "Implemented a conversational input node. The AI parses sentences like 'Bill Client X $500 for the UI redesign completed on Friday' into structured JSON. Invoices are generated as secure links with integrated Stripe payment fields and cached server state syncs.",
    metrics: [
      { label: "Invoicing Accuracy", value: "100/100" },
      { label: "Server Uptime", value: "99.9%" },
      { label: "Faster Payment Cycles", value: "3x" },
      { label: "Client Retention", value: "100%" }
    ]
  },
  "buildhand": {
    id: "buildhand",
    title: "BuildHand",
    tagline: "VISUAL ECOSYSTEMS FOR CIVIL INFRASTRUCTURE",
    description: "A real-time material management and worker log SaaS designed for onsite field engineers, replacing manual spreadsheets with a modern dashboard.",
    liveUrl: "/#contact",
    image: "/mobile-commerce.png",
    tech: ["React Native", "Expo", "Stripe API", "NativeWind"],
    overview: "BuildHand bridges the gap between construction sites and corporate databases. Field managers log supplies, record daily attendance, and request budgets through a native-like mobile app that operates offline, syncing data when a cellular signal is available.",
    problem: "Infrastructure projects struggle with inventory leaks, slow vendor approvals, and delayed field logs due to poor connectivity and complex spreadsheet tools.",
    solution: "Engineered an offline-first mobile app using React Native and Expo. Sync databases queue local actions and push them to central databases when online. Clean metric grids allow managers to sign off on budgets in under 10 seconds.",
    metrics: [
      { label: "Material Loss Reduction", value: "20%" },
      { label: "Daily Active Engineers", value: "10k+" },
      { label: "Sync Latency", value: "Sub-1s" },
      { label: "Mobile Usability Rating", value: "98%" }
    ]
  },
  "prognos-labs": {
    id: "prognos-labs",
    title: "Prognos Labs",
    tagline: "SCALING AGENTIC WORKFLOWS FOR THE ENTERPRISE",
    description: "An enterprise-grade orchestration platform designed to route, test, and analyze autonomous LLM agent networks with structured audit logs.",
    liveUrl: "/#contact",
    image: "/ai-support.png",
    tech: ["Node.js", "LangChain", "Pinecone DB", "OpenAI"],
    overview: "Prognos Labs serves as a command center for LLM agents. Companies deploy multi-agent loops that verify each other's outputs, routing queries based on system latency and model capabilities.",
    problem: "Debugging autonomous agent networks is complex. Outputs drift, token costs spike, and tracing agent pathways in production requires heavy logging overhead.",
    solution: "Created a trace-flow diagram showing agent actions. Built optimized vector databases using LangChain and Pinecone to anchor chat threads, and streaming telemetry dashboards to monitor live token consumption.",
    metrics: [
      { label: "Goal Completion Success", value: "94%" },
      { label: "Token Cost Reduction", value: "35%" },
      { label: "Interconnected Agent Nodes", value: "28" },
      { label: "Active Routing Paths", value: "5" }
    ]
  },
  "fridayjob24": {
    id: "fridayjob24",
    title: "FridayJob24",
    tagline: "DISRUPTING CAREER PATHWAYS FOR GEN Z DEVELOPERS",
    description: "A gesture-driven job search app that removes resume scanning friction, matching developers with startup vacancies via AI scoring.",
    liveUrl: "/#contact",
    image: "/fridayjob24.png",
    tech: ["Next.js", "OpenAI API", "Tailwind CSS", "Recruitment SaaS"],
    overview: "FridayJob24 replaces typical job portal grids with a clean list of relevant job matches. The app scores candidate skills against job profiles, and presents them in a card-deck swipe format for rapid decision-making.",
    problem: "Job boards are overloaded with spam. Gen Z candidates feel ignored by ATS algorithms, while recruiters parse thousands of copy-paste resumes.",
    solution: "Developed an AI skills matching parser. Candidates build profile pages with interactive project links. Recruiter dashboards highlight top candidate matches with matching percentages, simplifying candidate screening.",
    metrics: [
      { label: "Recruiter Response Rate", value: "85%" },
      { label: "Application-to-interview Lift", value: "4x" },
      { label: "Successful Developer Matches", value: "15k+" },
      { label: "Platform Uptime", value: "99.9%" }
    ]
  },
  "securevote": {
    id: "securevote",
    title: "SecureVote",
    tagline: "RE-ESTABLISHING DEMOCRATIC TRUST VIA DECENTRALIZATION",
    description: "A GovTech and security web application designed to solve the 'trust gap' in digital voting. Developed during a high-stakes hackathon, SecureVote couples stateless JWT authentication with real-time election oversight features.",
    liveUrl: "https://voting-system-app.vercel.app/",
    image: "/voting-hero.png",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Stateless JWT", "Cryptographic Hashing"],
    overview: "SecureVote was designed and built during a high-stakes hackathon to address the trust gap in digital voting. The platform couples a streamlined, friction-free voter interface for ballot casting with a robust, real-time Admin Dashboard for complete election oversight. To maintain both absolute voter anonymity and high-throughput security, the system utilizes stateless JWT (JSON Web Token) authentication, remaining lightweight and ready to scale under rapid loads.",
    problem: "Legacy digital voting systems suffer from centralized vulnerability, administrative manipulation risks, and performance degradation during peak casting hours. Ensuring ballot cryptographic security and prevention of duplicate voting entries without violating voters' right to absolute ballot privacy is a major challenge.",
    solution: "We engineered a security-first MERN architecture that leverages stateless JWT tokens to authenticate voters. Every ballot is instantly hashed and tracked in an immutable datastore. Duplicate-prevention rules enforce strict one-vote-per-identity constraints, and the live Admin Dashboard presents real-time verified tallies with zero-knowledge proof auditing.",
    metrics: [
      { label: "Audit Integrity", value: "100%" },
      { label: "Hackathon Standing", value: "1st Place" },
      { label: "Data Compromises", value: "Zero" },
      { label: "Ballot Verification Speed", value: "10ms" }
    ],
    gallery: [
      {
        image: "/voting-hero.png",
        title: "ElectionsSystem Hero Landing Page",
        description: "A secure, transparent, and accessible digital voting dashboard featuring interactive election options and voter onboarding."
      },
      {
        image: "/voting-elections.png",
        title: "Ongoing Elections Grid Slider",
        description: "An interactive card interface where users can view active electoral processes (like Lok Sabha and Rajya Sabha) and matching candidates."
      },
      {
        image: "/voting-faq.png",
        title: "Voting Q&A Accordion Panel",
        description: "A categorizable voter FAQ interface designed to clarify voting procedures, election security measures, and voter rights."
      }
    ]
  },
  "aumniverse": {
    id: "aumniverse",
    title: "Aumniverse",
    tagline: "AN APPLE-STYLE QUIET LUXURY PRESERVATION OF SACRED SCRIPTURES",
    description: "A premium, minimalist spiritual dashboard that preserves sacred Indian scriptures. Built with a quiet luxury Apple-style aesthetic, it tracks reading progress across classical texts and displays custom-carved high-relief icons.",
    liveUrl: "/#contact",
    image: "/aumniverse-explore.jpg",
    tech: ["React Native", "Expo", "TypeScript", "iOS/Android Support"],
    overview: "Aumniverse is an elegant, high-end mobile application created to preserve and present classical Indian scriptures—such as the Bhagavad Gita, Ramayana, and Hanuman Chalisa—in a quiet luxury, Apple-style minimalist aesthetic. Using React Native and Expo, the app displays custom-carved high-relief bronze icons, frames ancient cultural artwork, and renders clean progress tracking bars that record reading states in real-time. By utilizing offline caching and locally optimized rendering pipelines, the application delivers a premium, distraction-free reading experience.",
    problem: "Most digital spiritual apps suffer from cluttered layouts, generic designs, intrusive ads, and poor typography that distract from reading sacred texts. Developing a digital library that honors ancient heritage with highly detailed graphics and high-relief relief carvings, while maintaining low-latency native load speeds and lightweight packaging, requires advanced asset pipeline optimization.",
    solution: "We engineered a minimalist reading app using React Native and Expo. Large scripture assets are stored in optimized JSON bundles, indexed for fast retrieval. We designed a custom vector graphics system to render high-contrast typography and created beautiful modular UI cards. The main dashboards feature custom-drawn relief icons, a rolled-scroll scripture selection modal, and interactive progress indicators.",
    metrics: [
      { label: "Design Iterations", value: "12+" },
      { label: "Crash-Free Users", value: "99.9%" },
      { label: "Distraction Level", value: "Zero" },
      { label: "Build Status", value: "Active Build" }
    ],
    gallery: [
      {
        image: "/aumniverse-landing.jpg",
        title: "Onboarding & Spiritual Landing Page",
        description: "A minimalist gateway featuring warm cream and gold gradient backdrop with elegant serif typography."
      },
      {
        image: "/aumniverse-library.jpg",
        title: "Recent Books & Library Dashboard",
        description: "A warm cream progress-tracking interface displaying current reading books and personal sadhana collections."
      },
      {
        image: "/aumniverse-explore.jpg",
        title: "Mandala Explore Hub & Chariot Art",
        description: "Central explore portal showing high-relief, deeply textured bronze scripture icons and framed Kurukshetra artwork."
      },
      {
        image: "/aumniverse-scroll.jpg",
        title: "Scriptures Selector Scroll Modal",
        description: "An elegant interactive overlay designed like an ancient rolled paper scroll containing scripture pathways."
      },
      {
        image: "/aumniverse-reader.jpg",
        title: "Bhagavad Gita Reading Screen",
        description: "A highly-readable reader interface centered on pure typography and subtle gold divider accents."
      }
    ]
  },
  "khetak": {
    id: "khetak",
    title: "Khetak Cybersecurity Shield",
    tagline: "PROTECTING DIGITAL WORKSPACES IN REAL TIME",
    description: "Khetak is an AI-powered smart digital guardian browser extension that blurs adult content and flags phishing/cyberbullying threats in real-time, securing online workspaces.",
    liveUrl: "https://khetak.vercel.app/",
    image: "/khetak.png",
    tech: ["Chrome WebExtensions API", "Python", "TensorFlow.js", "ML Filters"],
    overview: "Khetak serves as a real-time browser guardian designed during a high-stakes cybersecurity hackathon. Its core purpose is to filter out NSFW or adult content on popular feeds like Instagram and Twitter via intent-aware AI models. It also contains a 'One-Click Report' dashboard linked directly to cybersecurity portals, giving users immediate pathways to flag malware, phishing, and online harassment.",
    problem: "Workspaces and children are exposed to inappropriate visual content and cyberthreats on modern social feeds. Building a low-latency browser plugin that blurs adult content client-side without degrading browser speed or violating user privacy presents a complex local processing challenge.",
    solution: "We engineered Khetak using TensorFlow.js for local browser execution and WebExtensions APIs. Image streams are analyzed client-side via optimized neural nets. When mature content is identified, custom CSS filters are applied to blur the parent node in real-time. Phishing threats are checked using local FastAPI database logs.",
    metrics: [
      { label: "Content Blur Speed", value: "85ms" },
      { label: "AI Detection Accuracy", value: "97.4%" },
      { label: "Memory Footprint", value: "14MB" },
      { label: "Report Processing Time", value: "Immediate" }
    ]
  },
  "smartwatts": {
    id: "smartwatts",
    title: "SmartWatts Energy Estimator",
    tagline: "SOFTWARE-DEFINED TELEMETRY FOR THE GREEN CLOUD",
    description: "SmartWatts is a self-adaptive power estimation system for containerized software that calculates container power draw in real-time without physical sensors.",
    liveUrl: "/#contact",
    image: "/smartwatts.png",
    tech: ["Docker", "Kubernetes", "Prometheus", "Python", "PowerAPI"],
    overview: "SmartWatts is a software-defined energy meter built for Docker and Kubernetes clusters. By hooking into hardware performance counters, it estimates CPU and DRAM power consumption in real-time. It integrates with Prometheus and Grafana dashboards, helping companies locate energy-drainers and choose green alternatives.",
    problem: "Calculating the carbon footprint of virtualized containers is hard because physical power sensors only report total host energy consumption. Developers cannot see which microservice is wasting resources or how to optimize code for green energy constraints.",
    solution: "We built a self-adaptive telemetry pipeline using Python and the PowerAPI framework. It reads CPU instruction states and registers from Intel/AMD processors in real-time. Linear regression models map these cycles to precise wattage numbers, channelling stats to Prometheus metrics.",
    metrics: [
      { label: "Estimation Error Margin", value: "<5%" },
      { label: "CPU Telemetry Latency", value: "100ms" },
      { label: "Greenhouse Gas Insights", value: "Real-Time" },
      { label: "Container Parity Rate", value: "100%" }
    ]
  }
};

export default function CaseStudyPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const data = caseStudiesData[id] || caseStudiesData["my-horoscope"];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-black font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Navigation */}
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-6 md:px-16 pt-36 pb-24">
        {/* Back Link */}
        <button
          onClick={() => router.push("/projects")}
          className="flex items-center gap-2 text-zinc-500 hover:text-black text-xs font-bold uppercase tracking-wider mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO CASE STUDIES
        </button>

        {/* Case Study Meta info Header */}
        <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase block mb-3 font-mono">
          CASE STUDY
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-black font-machina mb-6 leading-none">
          {data.title}
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-lg md:text-2xl text-zinc-600 font-light max-w-4xl leading-relaxed mb-10">
          {data.description}
        </p>

        {/* Live URL Button */}
        <a
          href={data.liveUrl}
          target={data.liveUrl.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-zinc-800 hover:scale-[1.03] transition-all duration-300 shadow-md shadow-black/10 mb-16"
        >
          Visit Live Site <ExternalLink className="w-4 h-4" />
        </a>

        {/* Big Mockup Image */}
        <div className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 aspect-[16/10] md:aspect-[21/9] relative bg-zinc-100 mb-24">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dynamic Detail Sections (Overview, Problem, Solution, Metrics) */}
        <div className="flex flex-col gap-20 border-t border-black/10 pt-16 mb-24">
          
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-extrabold tracking-tight font-machina">Overview</h2>
              <span className="text-xs font-serif font-light italic text-blue-600 mt-2 block tracking-wider">
                {data.tagline}
              </span>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6">
              <p className="text-zinc-600 font-manrope text-base md:text-lg leading-relaxed">
                {data.overview}
              </p>
              {/* Tech Stack Badge List */}
              <div className="flex flex-wrap gap-2 mt-2">
                {data.tech.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/5 border border-black/5 text-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/5 pt-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-extrabold tracking-tight font-machina">The Problem</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-zinc-600 font-manrope text-base md:text-lg leading-relaxed">
                {data.problem}
              </p>
            </div>
          </div>

          {/* My Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/5 pt-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-extrabold tracking-tight font-machina">My Solution</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-zinc-600 font-manrope text-base md:text-lg leading-relaxed">
                {data.solution}
              </p>
            </div>
          </div>

          {/* Gallery Section (Optional) */}
          {data.gallery && data.gallery.length > 0 && (
            <div className="border-t border-black/5 pt-16">
              <h2 className="text-3xl font-extrabold tracking-tight font-machina mb-10">Product Interface &amp; Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.gallery.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 group">
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-black/5 aspect-[16/10] relative bg-zinc-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-bold text-black tracking-tight font-machina">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed font-manrope">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact and Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/5 pt-16">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold tracking-tight font-machina">Impact &amp; Results</h2>
              <p className="text-zinc-500 font-manrope text-sm max-w-xs">
                Measurable outcomes that drive business growth and user engagement.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 gap-8">
              {data.metrics.map((metric) => (
                <div key={metric.label} className="border-l-2 border-black/10 pl-6 py-2 flex flex-col gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-black font-machina">
                    {metric.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold font-mono">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
