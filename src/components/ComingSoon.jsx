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
          Coming soon
        </span>

        <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
          Work in
          <span className="block text-[#75AAA3]">progress.</span>
        </h1>

        <p className="max-w-md text-base leading-relaxed text-[#174C49]/70 md:text-lg">
          Something is taking shape behind the scenes. This project isn't quite
          ready to be revealed yet, but stay tuned!
        </p>

        <div className="mt-12 flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#75AAA3]" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#174C49]/50">
            Currently creating
          </span>
        </div>
      </section>

    </section>
  );
}
