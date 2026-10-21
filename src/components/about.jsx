import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="border-t border-neutral-900 px-8 py-32 md:px-12"
    >
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-neutral-500">
            {t.about.eyebrow}
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            {t.about.title}
            <br />
            {t.about.titleLine2}
            <br />
            <span className="text-neutral-600">
              {t.about.titleLine3}
            </span>
          </h2>
        </div>

        <div className="max-w-xl text-lg leading-relaxed text-neutral-400">
          <p>{t.about.description1}</p>

          <p className="mt-6">
            {t.about.description2}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mb-2 text-neutral-600">
                {t.about.design}
              </p>

              <p className="text-white">
                {t.about.illustrator}
                <br />
                {t.about.photoshop}
                <br />
                {t.about.figma}
              </p>
            </div>

            <div>
              <p className="mb-2 text-neutral-600">
                {t.about.web}
              </p>

              <p className="text-white">
                {t.about.htmlCss}
                <br />
                {t.about.javascript}
                <br />
                {t.about.wordpress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}