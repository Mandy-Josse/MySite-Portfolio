export default function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-neutral-950 px-8 py-6 md:px-12">
      <a href="/" className="text-xl font-bold tracking-tight">
        Mandy.
      </a>

      <div className="hidden gap-8 text-sm text-neutral-400 md:flex">
        <a href="#work" className="transition hover:text-white">
          Work
        </a>
        <a href="#about" className="transition hover:text-white">
          About
        </a>
        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </div>

      <a
        href="#contact"
        className="rounded-full border border-neutral-700 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
      >
        Let's talk
      </a>
    </nav>
  );
}