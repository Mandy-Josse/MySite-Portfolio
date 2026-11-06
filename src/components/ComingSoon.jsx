import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const cvPath = `${import.meta.env.BASE_URL}cv/${
    language === "fr" ? "cv-mandy-josse-fr.pdf" : "cv-mandy-josse-en.pdf"
  }`;

  return (
    <section className="flex min-h-screen flex-col bg-[#EAF8F6] text-[#174C49]">
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <span className="mb-6 rounded-full border border-[#174C49]/20 bg-white/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em]">
          {language === "fr" ? "Bientôt disponible" : "Coming soon"}
        </span>

        <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
          {language === "fr" ? "En cours de" : "Work in"}
          <span className="block text-[#75AAA3]">
            {language === "fr" ? "création." : "progress."}
          </span>
        </h1>

        <p className="max-w-md text-base leading-relaxed text-[#174C49]/70 md:text-lg">
          {language === "fr"
            ? "Quelque chose prend forme en coulisses. Cette page n'est pas encore tout à fait prête à être dévoilée, mais restez à l'affût !"
            : "Something is taking shape behind the scenes. This project isn't quite ready to be revealed yet, but stay tuned!"}
        </p>

        <div className="mt-12 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-teal-900 " />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-teal-900 ">
            {language === "fr" ? "En pleine création" : "Currently creating"}
          </span>
        </div>

        <a href={import.meta.env.BASE_URL}
          className="mt-12 inline-flex items-center justify-center rounded-full border-2 border-teal-900 bg-white/50 px-8 py-3 text-base
          font-semibold text-teal-800 transition-all duration-300 hover:border-teal-900 hover:bg-[#174C49] hover:text-white">
          {language === "fr" ? "← Retour à l'accueil" : "← Return to homepage"}
        </a>
      </section>
    </section>
  );
}
