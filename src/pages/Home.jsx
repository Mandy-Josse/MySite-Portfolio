import Header from "../components/header.jsx";
import Hero from "../components/hero.jsx";
import ProjectsCarousel from "../components/projectsCarousel.jsx";
import Skills from "../components/skills.jsx";
import About from "../components/about.jsx";
import Contact from "../components/contact.jsx";
import Footer from "../components/footer.jsx";
import ReverieIntro from "../components/reverieIntro.jsx";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />
      <Hero />
      <ProjectsCarousel />
      <ReverieIntro />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
