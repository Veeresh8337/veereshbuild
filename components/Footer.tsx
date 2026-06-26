import { Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ), 
      url: "https://github.com", 
      label: "GitHub" 
    },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ), 
      url: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ), 
      url: "https://instagram.com", 
      label: "Instagram" 
    },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ), 
      url: "https://youtube.com", 
      label: "YouTube" 
    },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ), 
      url: "https://telegram.org", 
      label: "Telegram" 
    },
  ];

  return (
    <footer className="bg-[#060608] border-t border-white/5 pt-16 pb-8 px-6 text-sm font-manrope">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xl font-bold font-machina text-white tracking-tight">
              Veeresh
            </span>
            <p className="text-grey-400 leading-relaxed max-w-sm mt-2">
              Helping founders ship MVPs in weeks, not months. High velocity full-stack developer.
            </p>
            <p className="text-xs text-grey-500 mt-4">
              © {currentYear} Veeresh Hindiholi. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              {["Work", "Services", "Achievements", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-grey-400 hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Legals Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legals</h4>
            <div className="flex flex-col gap-2.5">
              {["Privacy Policy", "Terms of Service", "Consulting Terms"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-grey-400 hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Community Socials Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Get In Touch</h4>
            <p className="text-grey-400 leading-relaxed mb-1">
              Interested in working together or hiring me as a partner consultant? Follow me on social networks.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.02] hover:bg-primary/10 border border-white/5 hover:border-primary/20 flex items-center justify-center text-grey-400 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-grey-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Made with ❤️ by Veeresh Hindiholi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Settings</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
