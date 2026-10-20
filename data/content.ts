// =============================================================================
// CONTENT CONFIG — veereshbuild.in
// Edit this file to update copy without touching component code.
// =============================================================================

// ---------------------------------------------------------------------------
// PROJECT RESULTS / IMPACT
// Add your real metric once you have it. Shown above the Tech Stack row
// on each project card.
// ---------------------------------------------------------------------------

export interface ProjectResult {
  id: string;
  result: string;
}

export const projectResults: ProjectResult[] = [
  {
    id: "aumniverse",
    result:
      "[ADD METRIC: e.g. Featured in App Store / X,000 users in first week / testimonial from founder]",
  },
  {
    id: "my-horoscope",
    result:
      "[ADD METRIC: e.g. 2,000+ personalized charts generated in beta / avg session 8 min / waitlist size]",
  },
  {
    id: "securevote",
    result:
      "[ADD METRIC: e.g. Won 1st place @ Hackathon / zero trust violations in 500+ test votes / judge quote]",
  },
  {
    id: "khetak",
    result:
      "[ADD METRIC: e.g. Blocked X threats in testing / 100+ installs in pilot / contest placement]",
  },
  {
    id: "smartwatts",
    result:
      "[ADD METRIC: e.g. 40% reduction in estimated energy cost in test containers / demo at conference]",
  },
];

// ---------------------------------------------------------------------------
// PRICING / ENGAGEMENT TIERS
// Shown in the EngagementOptions section.
// ---------------------------------------------------------------------------

export interface PricingTier {
  slug: string; // used for URL param ?tier=<slug>
  label: string;
  tagline: string;
  description: string;
  bestFor: string;
  timeline: string;
  cta: string;
  highlight: boolean; // true = shown with accent border/glow as "recommended"
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    slug: "mvp-sprint",
    label: "The 21-Day MVP Sprint",
    tagline: "Idea to live product before competitors finish their pitch deck.",
    description:
      "Fixed scope, fixed price, production-grade. We take your validated idea and ship a fully functional web or mobile product in 21 days — with auth, database, payments, and cloud deployment included.",
    bestFor: "Founders, Solopreneurs, and Product Builders",
    timeline: "Shipped in 21 Days",
    cta: "Start My Sprint",
    highlight: false,
    features: [
      "Production-ready web/mobile apps (Next.js & Flutter)",
      "Complete Auth, PostgreSQL/Supabase database & API routing",
      "Integrated Stripe/Razorpay payment & billing systems",
      "Deployment with CI/CD and zero-maintenance cloud setup",
    ],
  },
  {
    slug: "client-portals",
    label: "Custom Client Portals & Operations Engines",
    tagline: "Replace messy WhatsApp threads and spreadsheets with dedicated internal software.",
    description:
      "We build self-service client portals and internal operations dashboards that automate your daily workflows, cut manual hours, and give your team a single source of truth.",
    bestFor: "Service businesses, Consultancies, and Clinic/Logistics operators",
    timeline: "3 to 4 Weeks Delivery",
    cta: "Build My Portal",
    highlight: true,
    features: [
      "Dedicated self-service dashboards for client files & status tracking",
      "Internal operations portals for scheduling and job allocation",
      "Automated lead capture and instant qualification triggers",
      "Seamless sync with existing CRMs, WhatsApp, and accounting tools",
    ],
  },
  {
    slug: "ai-automations",
    label: "AI Workflow Automations & Agents",
    tagline: "Embed intelligent agents into your daily operations to cut manual hours.",
    description:
      "We design and deploy domain-specific AI agents that integrate directly into your internal tools — triaging tickets, parsing documents, and triggering smart notifications across your team.",
    bestFor: "High-touch service providers and data-heavy workflows",
    timeline: "Shipped in 2 Weeks or Monthly Retainer",
    cta: "Explore AI Agents",
    highlight: false,
    features: [
      "Domain-specific AI assistants trained securely on internal SOPs",
      "Automated ticket/email triage and smart draft responses",
      "Document parser extracting structured data from PDFs, bills, or forms",
      "Event-triggered notifications via Slack/WhatsApp/Email",
    ],
  },
];

// ---------------------------------------------------------------------------
// CLIENT TESTIMONIALS
// Add real client quotes here. Each entry renders as one testimonial card.
// The ClientTestimonials component reads this array — no component changes needed.
// ---------------------------------------------------------------------------

export interface ClientTestimonial {
  id: string;
  name: string;        // e.g. "Ananya Sharma"
  role: string;        // e.g. "Co-Founder"
  company: string;     // e.g. "Finmate"
  quote: string;       // 1–3 sentence client quote
  metric: string;      // One standout outcome, e.g. "MVP live in 18 days"
  initials: string;    // Used as avatar fallback, e.g. "AS"
}

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: "t1",
    name: "[ADD REAL TESTIMONIAL]",
    role: "Founder",
    company: "Your Startup Name",
    quote:
      "\"[Add a real client quote here — 1 to 3 sentences about working with Veeresh, the speed, quality, or business outcome.]\"",
    metric: "[ADD METRIC: e.g. MVP launched in 17 days]",
    initials: "AB",
  },
  {
    id: "t2",
    name: "[ADD REAL TESTIMONIAL]",
    role: "CTO / Agency Lead",
    company: "Your Agency Name",
    quote:
      "\"[Add a real client quote here — focus on reliability, communication, or the technical quality of the work delivered.]\"",
    metric: "[ADD METRIC: e.g. 3 projects delivered on time, zero bugs in production]",
    initials: "CD",
  },
  {
    id: "t3",
    name: "[ADD REAL TESTIMONIAL]",
    role: "Product Manager",
    company: "Your Company Name",
    quote:
      "\"[Add a real client quote here — focus on how the partnership felt vs. a traditional agency or freelancer.]\"",
    metric: "[ADD METRIC: e.g. Feature shipped 2 weeks ahead of schedule]",
    initials: "EF",
  },
];
