export interface Achievement {
  id: string;
  title: string;
  date: string;
  location: string;
  event: string;
  description: string;
  imageUrl: string;
  badge: string;
  tags: string[];
}

export const testimonials: Achievement[] = [
  {
    id: "a1",
    title: "1st Prize @ Odyssey 2025",
    date: "Apr 2025",
    location: "Jain Engineering College, Belgavi",
    event: "Odyssey National Level Fest",
    description: "Won 1st Prize in the Hackathon category at the Odyssey National Level Event, competing against 50+ regional engineering teams.",
    imageUrl: "/odyssey-winner.png",
    badge: "Winner",
    tags: ["Hackathon", "JCE", "National Level"]
  },
  {
    id: "a2",
    title: "General Championship 🏆 @ Parousia 2K25",
    date: "2025",
    location: "JAIN BCA Belagavi",
    event: "Parousia 2K25 Fest",
    description: "Won the General Championship 🏆 along with a ₹20,000 cash prize at the 2-Day National Level Tech Fest.",
    imageUrl: "/parousia-gc.png",
    badge: "General Championship",
    tags: ["Champions", "Teamwork", "JGI"]
  },
  {
    id: "a3",
    title: "1st Prize @ Hackfest 2025",
    date: "2025",
    location: "Belagavi, India",
    event: "SGBIT Hackathon",
    description: "Secured 1st Prize at the Hackathon hosted at SGBIT Belagavi backed by IIT and Start-up Karnataka.",
    imageUrl: "/sgbit-winner.png",
    badge: "Winner",
    tags: ["Hackathon", "Startup Karnataka", "SGBIT"]
  },
  {
    id: "a4",
    title: "1st Place @ Aignite 2.0",
    date: "2025",
    location: "Chikkamagaluru, India",
    event: "TechXhibit Hackathon",
    description: "Secured 1st Place at the National Level Project Expo (TechXhibit) organized by Adichunchanagiri Institute of Technology.",
    imageUrl: "/aignite-winner.png",
    badge: "Winner",
    tags: ["Project Expo", "Innovation", "AIT"]
  },
  {
    id: "a5",
    title: "Runner-Up @ ANVESHAN 2025",
    date: "2025",
    location: "Bangalore, India",
    event: "ANVESHAN Hackathon",
    description: "Secured Runner-Up status at the prestigious ANVESHAN Hackathon organized by IEEE Bangalore Section. A journey worth celebrating!",
    imageUrl: "/anveshan-winner.png",
    badge: "Runner-Up",
    tags: ["Hackathon", "Innovation", "IEEE"]
  }
];
