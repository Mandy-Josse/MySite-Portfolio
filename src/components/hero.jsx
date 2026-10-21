import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[85vh] flex-col justify-center px-8 md:px-12">
      <div className="max-w-5xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {t.hero.specialties}
        </p>

        <h1 className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          {t.hero.title}
          <span className="text-neutral-500"> {t.hero.titleAccent}</span>
          <br />
          {t.hero.titleLine}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
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
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-neutral-400"
          >
            {t.hero.aboutButton}
          </a>
        </div>
      </div>

      {/* Scroll button */}
      <a
        href="#work"
        className="absolute bottom-20 left-1/2 flex h-20 w-20 -translate-x-1/2 flex-col items-center justify-center rounded-full border border-neutral-700 text-neutral-500 transition hover:border-neutral-400 hover:text-white"
        aria-label="Scroll to work"
      >
        <span className="text-lg leading-none">↓</span>
        <span className="mt-1 text-[9px] text-center uppercase tracking-widest">
          {t.hero.scroll}
        </span>
      </a>
    </section>
  );
}
