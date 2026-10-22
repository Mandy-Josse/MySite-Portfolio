
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 items-center bg-neutral-950 px-8 py-6 md:px-12">
      {/* Left */}
      <a
        href="/"
        className="justify-self-start text-xl font-bold tracking-tight"
      >
        Mandy.
      </a>

      {/* Center */}
      <div className="hidden items-center justify-center gap-8 text-sm text-neutral-400 md:flex">
        <a href="#work" className="transition hover:text-white">
          {t.nav.work}
        </a>

        <a href="#about" className="transition hover:text-white">
          {t.nav.about}
        </a>

        <a href="#contact" className="transition hover:text-white">
          {t.nav.contact}
        </a>
      </div>

      {/* Right */}
      <div className="flex items-center justify-self-end gap-6">
        <button
          onClick={toggleLanguage}
          className="text-xs uppercase tracking-widest text-neutral-400 transition hover:text-white"
          aria-label={t.nav.languageLabel}
        >
          {language === "en" ? "FR" : "EN"}
        </button>

        <a
          href="#contact"
          className="whitespace-nowrap rounded-full border border-neutral-700 px-5 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          {t.nav.talk}
        </a>
      </div>
    </nav>
  );
}
