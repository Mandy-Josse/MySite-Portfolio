import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  const cvPath = `${import.meta.env.BASE_URL}cv/${
    language === "fr" ? "cv-mandy-josse-fr.pdf" : "cv-mandy-josse-en.pdf"
  }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-6">
      <nav
        className="
          flex items-center justify-between gap-5
          rounded-full border border-white/80
          bg-white/75 px-5 py-3
          shadow-lg shadow-teal-900/10
          backdrop-blur-xl
          transition-all duration-300
          hover:shadow-xl hover:shadow-teal-900/10
          md:gap-10 md:px-7
        "
      >
        {/* Logo */}
        <a href="/MySite-Portfolio/" className="shrink-0 text-xl font-bold tracking-tight text-[#174C49]">          Mandy 
          <span className="text-[#36CFC3]">.</span>
        </a>

      {/* Navigation */}
        <div className="hidden items-center gap-7 text-sm font-medium text-teal-700 sm:flex">
          <a href="/MySite-Portfolio/#projects" className="transition hover:text-teal-400">
            {t.nav.work}
          </a>

          <a href="/MySite-Portfolio/#about" className="transition hover:text-teal-400">
            {t.nav.about}
          </a>

          <a href="/MySite-Portfolio/#contact" className="transition hover:text-teal-400">
            {t.nav.contact}
          </a>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* CV Download */}
          <a
            href={cvPath}
            download={
              language === "fr"
                ? "CV-Mandy-Josse-FR.pdf"
                : "CV-Mandy-Josse-EN.pdf"
            }
            className=" whitespace-nowrap font-bold rounded-full bg-white border border-[#B9E8E1] px-4 py-2.5 text-xs text-teal-700
              transition-all duration-300
              hover:border-teal-400
              hover:bg-[#D5F3EE]
            "
          >
            CV ↓
          </a>

          {/* Language switch */}
          <button
            onClick={toggleLanguage}
            className="
              flex items-center gap-2
              rounded-full border border-[#B9E8E1]
              bg-[#EAF8F6] px-3 py-2.5
              text-xs font-bold text-teal-700
              transition-all duration-300
              hover:border-teal-400
              hover:bg-[#D5F3EE]
              active:scale-95
            "
            aria-label={t.nav.languageLabel}
            title={t.nav.languageLabel}
          >
            <span className="text-base leading-none" aria-hidden="true">
              ◎
            </span>
            <span>{language === "en" ? "FR" : "EN"}</span>
          </button>

          {/* Contact */}
          <a
            href="#contact"
            className="
              whitespace-nowrap rounded-full
              bg-teal-400 px-5 py-2.5
              text-xs font-bold text-[#174C49]
              transition duration-300
              hover:border-teal-300
              hover:scale-105
            "
          >
            {t.nav.talk}
          </a>
        </div>
      </nav>
    </header>
  );
}
