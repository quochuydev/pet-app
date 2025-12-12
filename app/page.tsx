import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";

export default function Home() {
  return (
    <div className="grain-overlay relative min-h-screen bg-white">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <BackgroundEffects />
      <Header />

      <main id="main-content">
        <Hero />
        <Statistics />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <WhyChooseUs />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
