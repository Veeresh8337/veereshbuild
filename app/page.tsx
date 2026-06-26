import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import CTASection from "../components/CTASection";
import Cohorts from "../components/Cohorts";
import Comparison from "../components/Comparison";
import Curriculum from "../components/Curriculum";
import About from "../components/About";
import EventsSection from "../components/EventsSection";
import Testimonials from "../components/Testimonials";
import CallbackForm from "../components/CallbackForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* 0. Preloader Splash Screen */}
      <Preloader />

      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Landing Content Wrapper */}
      <main className="flex-1 w-full bg-black">
        {/* 2. Hero Header Section */}
        <Hero />

        {/* 3. Social Proof Statistics */}
        <Stats />

        {/* 3.5 Featured Call-to-Action Dashboard Widget */}
        <CTASection />

        {/* 4. Selected Projects Showcase */}
        <Cohorts />

        {/* 5. Differential Comparison Grid */}
        <Comparison />

        {/* 6. Curriculum Roadmap Accordion */}
        <Curriculum />

        {/* 6.5 Biography & Trait Highlights */}
        <About />

        {/* 6.7 Horizontal Scrolling Events Section */}
        <EventsSection />

        {/* 7. Winnings & Achievements Slider */}
        <Testimonials />

        {/* 8. Counselor Callback Guidance Form */}
        <CallbackForm />
      </main>

      {/* 9. Brand Footer */}
      <Footer />
    </>
  );
}
