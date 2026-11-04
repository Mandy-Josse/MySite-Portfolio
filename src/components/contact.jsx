import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Vous avez un projet",
      titleAccent: "en tête ?",
      email: "Mandyjosse@gmail.com",
    },
    en: {
      title: "Have a project",
      titleAccent: "in mind?",
      email: "Mandyjosse@gmail.com",
    },
  };
  const t = content[language] || content.fr;

  return (
    <section id="contact" className="px-8 py-32 md:px-12">
      <h2 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
        {t.title}
        <span className="text-teal-600">
          {" "}{t.titleAccent}
        </span>
      </h2>

      <a
        href="mailto:Mandyjosse@gmail.com"
        className="mt-10 inline-block text-xl font-bold text-teal-500 underline decoration-teal-300 underline-offset-8 transition hover:decoration-white"
      >
        {t.email}
      </a>
    </section>
  );
}
