import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ReverieIntro from "../components/reverieIntro";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAF8F6] text-[#174C49]">
      <Header />
      <Hero />
      <Projects />
      <ReverieIntro />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
