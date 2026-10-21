import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col justify-between gap-4 border-t border-neutral-900 px-8 py-8 text-sm text-neutral-600 md:flex-row md:px-12">
      <p>{t.footer.copyright}</p>

      <div className="flex gap-6">
        <a
          href="https://fr.linkedin.com/in/mandy-josse-113671352"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          {t.footer.linkedin}
        </a>

        <a
          href="https://github.com/Mandy-Josse"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          {t.footer.github}
        </a>
      </div>
    </footer>
  );
}