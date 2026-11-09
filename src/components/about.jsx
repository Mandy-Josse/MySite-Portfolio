
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const content = {
    en: {
      eyebrow: "About",
      title: "Designer,",
      titleLine2: "creator,",
      titleLine3: "problem solver.",

      description1:
        "I'm a third-year Multimedia and Internet student interested in creating visual identities, interfaces and websites.",

      description2:
        "I enjoy working where graphic design and technology meet, turning ideas into visual and interactive experiences.",

    },

    fr: {
      eyebrow: "À propos",
      title: "Designer,",
      titleLine2: "créatrice,",
      titleLine3: "problem solver.",

      description1:
        "Je suis étudiante en troisième année de Métiers du Multimédia et de l'Internet, intéressée par la création d'identités visuelles, d'interfaces et de sites web.",

      description2:
        "J'aime travailler à la rencontre du design graphique et de la technologie, en transformant des idées en expériences visuelles et interactives.",
    },
  };

  const t = content[language] || content.en;

  return (
    <section
      id="about"
      className="px-8 py-28 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          {/* Introduction */}
          <div className="flex flex-col items-start">

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              {t.title}
              <br />
              {t.titleLine2}
              <br />
              <span className="text-teal-500">{t.titleLine3}</span>
            </h2>
          </div>

          {/* Description and skills */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed md:text-xl">
              {t.description1}
            </p>

            <p className="mt-5 text-base leading-relaxed">
              {t.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
