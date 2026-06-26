export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-24 px-6 sm:px-12 md:px-24 overflow-hidden relative">
      {/* Huge Outline Text */}
      <div className="w-full flex justify-center mb-24 overflow-hidden select-none pointer-events-none">
        <h1 
          className="text-[12vw] font-black uppercase tracking-tighter leading-none text-transparent"
          style={{ WebkitTextStroke: "3px #222" }}
        >
          VEERESH
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-20 lg:gap-8">
        
        {/* Left Side: Logo & Socials */}
        <div className="flex flex-col gap-10">
          {/* Logo */}
          <div className="text-4xl font-bold text-white tracking-tighter flex items-center">
             V<span className="text-[#e25822]">.</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 items-center">
            {/* Instagram */}
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            {/* Discord */}
            <a href="#" className="text-white hover:text-gray-400 transition-colors pt-1">
              <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-19.32-72.15ZM42.56,65.3c-5.36,0-9.76-4.85-9.76-10.8s4.31-10.8,9.76-10.8c5.5,0,9.85,4.88,9.76,10.8,0,5.95-4.31,10.8-9.76,10.8Zm42,0c-5.36,0-9.76-4.85-9.76-10.8s4.31-10.8,9.76-10.8c5.5,0,9.85,4.88,9.76,10.8,0,5.95-4.31,10.8-9.76,10.8Z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-white hover:text-gray-400 transition-colors pt-[2px]">
              <svg className="w-[26px] h-[26px]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="text-white hover:text-gray-400 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 lg:gap-32 w-full max-w-3xl">
          
          {/* Column 1: ABOUT */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-1">About</h4>
            <div className="flex flex-col gap-[18px] text-[13px] text-[#a1a1a1] font-light">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Pricing and Refund</a>
              <a href="#" className="hover:text-white transition-colors">Terms and Condition</a>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-1">Company</h4>
            <div className="flex flex-col gap-[18px] text-[13px] text-[#a1a1a1] font-light">
              <a href="#" className="hover:text-white transition-colors">Resume Checker</a>
              <a href="#" className="hover:text-white transition-colors">Hire From Us</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">Jobs</a>
              <a href="#" className="hover:text-white transition-colors">Submit Projects</a>
              <a href="#" className="hover:text-white transition-colors">Feedback</a>
            </div>
          </div>

          {/* Column 3: CONTACT */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-1">Contact</h4>
            <div className="flex flex-col gap-[18px] text-[13px] text-[#a1a1a1] font-light">
              <p>Online: 10am - 10pm <span className="text-white">+91 9071433205</span></p>
              <p>Offline: 11am - 8pm <span className="text-white">+91 9691778470</span></p>
              <a href="mailto:hello@veeresh.com" className="hover:text-white transition-colors">hello@veeresh.com</a>
              <p className="max-w-[200px] leading-relaxed">23-B, Sector C Indrapuri, Bhopal(MP), 462023</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
