import CharacterGallery from "../components/CharacterGallery";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Reverie() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <nav className="flex items-center justify-between p-8">
        <span className="tracking-[0.3em]">REVERIE</span>
        <span className="text-sm text-neutral-400">A Roblox project</span>
      </nav>

      <header className="mx-auto max-w-7xl px-6 pb-16 pt-16">
        <h1 className="text-5xl tracking-tight md:text-7xl">
          Reverie<span className="text-neutral-600">.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
          A collection of forms, characters, and digital sculptures. Each object
          invites a closer look.
        </p>
        <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
          Over 22,000 lines of Lua code and more than 100 scripts.
        </p>
      </header>

      <CharacterGallery />

      <Footer />
    </main>
  );
}
