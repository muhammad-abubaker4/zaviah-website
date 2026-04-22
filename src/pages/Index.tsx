import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Pillars from "@/components/Pillars";
import Values from "@/components/Values";
import Offerings from "@/components/Offerings";
import Team from "@/components/Team";
import GallerySection from "@/components/GallerySection";
import Partnerships from "@/components/Partnerships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ColorSchemeToggle from "@/components/ColorSchemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="navbar-section">
        <Navbar />
      </section>
      <main id="main-content" tabIndex={-1} className="outline-none">
        <section id="hero-section">
          <Hero />
        </section>
        <section id="about-section">
          <About />
        </section>
        <section id="vision-section">
          <Vision />
        </section>
        <section id="pillars-section">
          <Pillars />
        </section>
        <section id="values-section">
          <Values />
        </section>
        <section id="offerings-section">
          <Offerings />
        </section>
        <section id="team-section">
          <Team />
        </section>
        <section id="gallery-section">
          <GallerySection />
        </section>
        <section id="partnerships-section">
          <Partnerships />
        </section>
        <section id="contact-section">
          <Contact />
        </section>
      </main>
      <section id="footer-section">
        <Footer />
      </section>
      <section id="color-scheme-toggle-section">
        <ColorSchemeToggle />
      </section>
    </div>
  );
};

export default Index;
