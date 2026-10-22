import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const cvPath =
    language === "fr"
      ? "/cv/cv-mandy-josse-fr.pdf"
      : "/cv/cv-mandy-josse-en.pdf";

  return (
    <section
      id="about"
      className="border-t border-neutral-900 px-8 py-28 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          {/* Introduction */}
          <div className="flex flex-col items-start">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
              {t.about.eyebrow}
            </p>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              {t.about.title}
              <br />
              {t.about.titleLine2}
              <br />
              <span className="text-neutral-600">{t.about.titleLine3}</span>
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={cvPath}
                download={
                  language === "fr"
                    ? "CV-Mandy-Josse-FR.pdf"
                    : "CV-Mandy-Josse-EN.pdf"
                }
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-300"
              >
                {t.about.downloadCv}
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-neutral-700 px-6 py-3 text-sm transition hover:border-white hover:text-white"
              >
                {t.nav.contact}
                <span className="ml-2" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Description and skills */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-neutral-300 md:text-xl">
              {t.about.description1}
            </p>

            <p className="mt-5 text-base leading-relaxed text-neutral-500">
              {t.about.description2}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {t.about.design}
                </p>

                <ul className="space-y-3 text-sm text-neutral-200">
                  <li>{t.about.illustrator}</li>
                  <li>{t.about.photoshop}</li>
                  <li>{t.about.figma}</li>
                </ul>
              </div>

              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {t.about.web}
                </p>

                <ul className="space-y-3 text-sm text-neutral-200">
                  <li>{t.about.htmlCss}</li>
                  <li>{t.about.javascript}</li>
                  <li>{t.about.wordpress}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
