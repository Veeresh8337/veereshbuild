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
    slug: "launch-sprint",
    label: "Launch Sprint",
    tagline: "Fixed scope. Fixed price. Live in ~3 weeks.",
    description:
      "A focused, no-surprises build sprint for founders who have a clear idea and need an MVP live fast. One scope, one price, one delivery date — no scope creep.",
    bestFor: "Early-stage founders validating a product idea",
    timeline: "~3 Weeks",
    cta: "Start My Sprint",
    highlight: false,
    features: [
      "Discovery & scoping session (Day 1)",
      "Core MVP feature set — production-ready",
      "Deployed to your domain",
      "1 round of revisions post-launch",
      "Handoff with documentation",
    ],
  },
  {
    slug: "full-build",
    label: "Full Build",
    tagline: "End-to-end product. Built right.",
    description:
      "The full 7-phase process: strategy → design → engineering → QA → launch → monitoring → iteration. For founders who want a scalable foundation, not just an MVP.",
    bestFor: "Founders with a defined vision building for scale",
    timeline: "6–12 Weeks",
    cta: "Discuss Full Build",
    highlight: true,
    features: [
      "Full product strategy & architecture",
      "UI/UX design system from scratch",
      "Full-stack engineering (web + API)",
      "QA, performance, and security review",
      "Post-launch monitoring & iteration",
      "Optional: AI/LLM feature integration",
    ],
  },
  {
    slug: "ongoing-partner",
    label: "Ongoing Partner",
    tagline: "Your on-demand technical co-founder.",
    description:
      "Monthly retainer for past clients and agencies who need a reliable technical partner for continuous feature development, maintenance, and fast-turnaround tasks.",
    bestFor: "Past clients & agencies needing continuous support",
    timeline: "Monthly Retainer",
    cta: "Explore Partnership",
    highlight: false,
    features: [
      "Dedicated hours each month (scoped per retainer)",
      "Priority response & turnaround",
      "Feature development & bug fixes",
      "Performance & security upkeep",
      "Monthly progress report",
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
