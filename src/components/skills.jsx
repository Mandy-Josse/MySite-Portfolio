
import { useLanguage } from "../context/LanguageContext";

const skillGroups = [
  {
    number: "01",
    title: { en: "Graphic Design", fr: "Design graphique" },
    description: {
      en: ["Illustrator", "Photoshop", "Ibis Paint X"],
      fr: ["Illustrator", "Photoshop", "Ibis Paint X"],
    },
    symbol: "✳",
  },
  {
    number: "02",
    title: { en: "Motion & Video", fr: "Vidéo & Motion Design" },
    description: {
      en: ["After Effects", "Premiere Pro"],
      fr: ["After Effects", "Premiere Pro"],
    },
    symbol: "◈",
  },
  {
    number: "03",
    title: { en: "3D Creation", fr: "Création 3D" },
    description: {
      en: ["Blender"],
      fr: ["Blender"],
    },
    symbol: "◇",
  },
  {
    number: "04",
    title: { en: "Web & Development", fr: "Web & Développement" },
    description: {
      en: [
        "Figma", "WordPress", "Wix",
        "HTML", "CSS", "JavaScript",
        "PHP", "SQL", "Lua",
      ],
      fr: [
        "Figma", "WordPress", "Wix",
        "HTML", "CSS", "JavaScript",
        "PHP", "SQL", "Lua",
      ],
    },
    symbol: "⌘",
  },
  {
    number: "05",
    title: { en: "Organisation", fr: "Organisation" },
    description: {
      en: ["Trello", "Project management", "Creative workflow"],
      fr: ["Trello", "Gestion de projet", "Organisation créative"],
    },
    symbol: "◎",
  },
];

export default function Skills() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  return (
    <section
      id="skills"
      className="px-8 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">
          {isFr ? "Mon savoir-faire" : "What I work with"}
        </p>

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[#174C49] md:text-7xl">
            {isFr ? "Mes outils," : "My creative"}
            <br />
            <span className="text-teal-600">
              {isFr ? "mes compétences." : "toolkit."}
            </span>
          </h2>

          <p className="max-w-sm text-base leading-relaxed text-[#668681]">
            {isFr
              ? "Du design graphique au développement web, un ensemble de compétences pour donner vie à mes idées."
              : "From graphic design to web development, a collection of skills to bring my ideas to life."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group rounded-2xl border border-[#D7EBE8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF8F6] text-2xl text-teal-700 transition group-hover:bg-[#36CFC3] group-hover:text-[#174C49]">
                  {group.symbol}
                </span>
              </div>

              <h3 className="mb-5 text-xl font-semibold text-teal-800">
                {group.title[language] || group.title.en}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.description[language].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#EAF8F6] px-3 py-2 text-xs font-medium text-[#527A76]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
