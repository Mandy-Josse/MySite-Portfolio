
export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col justify-center px-8 md:px-12">
      <div className="max-w-5xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Graphic Design · Webdesign · UI/UX
        </p>

        <h1 className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          I create
          <span className="text-neutral-500"> things</span>
          <br />
          for the web.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
          I'm Mandy, a multimedia student and designer interested in graphic
          design, webdesign and digital experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-300"
          >
            View my work →
          </a>

          <a
            href="#about"
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-neutral-400"
          >
            About me
          </a>
        </div>
      </div>

      <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-600">
        <span className="h-px w-10 bg-neutral-700" />
        Scroll to explore
      </div>
    </section>
  );
}
