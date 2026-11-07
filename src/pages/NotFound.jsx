import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <section className="flex min-h-screen flex-col bg-[#EAF8F6] text-[#174C49]">
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">

        <span className="mb-6 rounded-full border border-[#174C49]/20 bg-white/50 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em]">
          {language === "fr" ? "Erreur 404" : "Error 404"}
        </span>

        <h1 className="mb-6 text-7xl font-bold tracking-tight md:text-9xl">
          4<span className="text-[#75AAA3]">0</span>4
        </h1>

        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          {language === "fr"
            ? "Page introuvable."
            : "Page not found."}
        </h2>

        <p className="max-w-md text-base leading-relaxed text-[#174C49]/70 md:text-lg">
          {language === "fr"
            ? "Oups ! La page que vous recherchez semble ne pas exister ou avoir été déplacée."
            : "Oops! The page you're looking for doesn't seem to exist or may have been moved."}
        </p>

        <Link
          to="/"
          className="mt-12 inline-flex items-center justify-center rounded-full border-2 border-teal-900 bg-white/50 px-8 py-3 text-base font-semibold text-teal-800 transition-all duration-300 hover:border-teal-900 hover:bg-[#174C49] hover:text-white"
        >
          {language === "fr"
            ? "← Retour à l'accueil"
            : "← Return to homepage"}
        </Link>

      </div>
    </section>
  );
}
