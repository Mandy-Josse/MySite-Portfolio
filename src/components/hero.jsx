import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[85vh] flex-col justify-center px-8 md:px-12">
      <div className="max-w-5xl">
        <h1 className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          {t.hero.title}
          <span className="text-teal-500"> {t.hero.titleAccent}</span>
          <br />
          {t.hero.titleLine}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-teal-700">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-300"
          >
            {t.hero.workButton}
          </a>

          <a
            href="#about"
            className="rounded-full border border-teal-700 text-white bg-teal-700 px-6 py-3 text-sm transition hover:border-teal-400 hover:bg-teal-400 hover:text-black"
          >
            {t.hero.aboutButton}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        className="scroll-wave group absolute bottom-12 left-1/2 flex h-24 w-12 -translate-x-1/2 flex-col items-center
        justify-center overflow-hidden rounded-full border border-teal-500/40 bg-teal-200 text-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.08)] backdrop-blur-sm transition-all duration-500 hover:border-teal-400 hover:bg-teal-900/60 hover:text-teal-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]"
        aria-label="Scroll to work"
      >
        <span className="scroll-wave-arrow relative z-10 text-2xl leading-none">
          ↓
        </span>

        <span className="scroll-wave-liquid pointer-events-none absolute inset-0 rounded-[45%_55%_40%_60%] bg-teal-500/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </a>
    </section>
  );
}
