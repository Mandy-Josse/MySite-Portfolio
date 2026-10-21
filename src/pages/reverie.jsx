import CharacterGallery from "../components/CharacterGallery";

export default function Reverie() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <nav className="flex items-center justify-between p-8">
        <span className="tracking-[0.3em]">REVERIE</span>
        <span className="text-sm text-neutral-400">
          A Roblox project        
        </span>
      </nav>

      <header className="mx-auto max-w-7xl px-6 pb-16 pt-16">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Objects of the imagination
        </p>
        <h1 className="text-5xl tracking-tight md:text-7xl">
          Reverie<span className="text-neutral-600">.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400">
          A collection of forms, characters, and digital sculptures.
          Each object invites a closer look.
        </p>
      </header>

      <CharacterGallery />

      <footer className="border-t border-white/10 px-8 py-8 text-xs tracking-widest text-neutral-500">
        REVERIE © 2026
      </footer>
    </main>
  );
}
