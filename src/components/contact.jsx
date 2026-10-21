import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-8 py-32 md:px-12">
      <p className="mb-4 text-sm uppercase tracking-widest text-neutral-500">
        {t.contact.eyebrow}
      </p>

      <h2 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
        {t.contact.title}
        <span className="text-neutral-600">
          {" "}
          {t.contact.titleAccent}
        </span>
      </h2>

      <a
        href="mailto:Mandyjosse@gmail.com"
        className="mt-10 inline-block text-xl underline decoration-neutral-700 underline-offset-8 transition hover:decoration-white"
      >
        {t.contact.email}
      </a>
    </section>
  );
}