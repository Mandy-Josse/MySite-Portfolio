import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ReverieIntro from "../components/reverieIntro";



export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <Hero />
      <Projects />
      <ReverieIntro />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}