import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Team />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
}
